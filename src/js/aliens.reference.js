﻿(function () {
  "use strict";
  //TODO: testing
  let app = angular.module('cc.aliens.reference', ['cc.base', 'cc.aliens', 'ngStorage', 'ngAria', 'ngMaterial', 'ngMdIcons']);

  app.controller('NavDrawer', ['$scope', '$mdSidenav', function ($scope, $mdSidenav) {
    $scope.close = function () { $mdSidenav('left').close(); };
    $scope.open = function () { $mdSidenav('left').open(); };
  }]);

  //Based on settings, allow user to pick aliens randomly
  app.controller('AlienReferenceController', ["$scope", "alienData", '$localStorage', '$sessionStorage', function ($scope, Aliens, $localStorage, $sessionStorage) {
    let ctrl = this;

    $localStorage.$default({
      complexities: [true, true, true],
      games: { E: true },
      orderPref: ['name'],
      groupPref: ['game', 'level']
    });

    //Include
    $scope.complexities = $localStorage.complexities;
    $scope.games = $localStorage.games;
    $scope.orderPref = $localStorage.orderPref;
    $scope.groupPref = $localStorage.groupPref;
    $scope.alienGroups = [];
    let namesAll = [], aliensAll = [];

    function groupAliens(list, level) {
      if ($scope.groupPref.length < 1) return { value: '', items: list };

      let grouped = {};
      let field = $scope.groupPref[level];
      list.forEach(function (item) {
        let group = item[field];//let group = $parse(field)(item);
        grouped[group] = grouped[group] || [];
        grouped[group].push(angular.copy(item));
      });
      let groups = Object.keys(grouped);

      let result = groups.map(function (group) {
        return { value: group, items: grouped[group] };
      });
      if ($scope.groupPref[level + 1]) result = result.map(function (group) {
        return { value: group.value, items: groupAliens(group.items, level + 1) };
      });

      return result;
    }

    //Save, then show filtered, grouped list of aliens
    ctrl.change = function (setting) {
      if (setting) $localStorage[setting] = $scope[setting];

      //Filter
      let aliens = aliensAll.filter(function (e) {
        return $scope.complexities[e.level] && $scope.games[e.game];
      });

      //Group
      $scope.alienGroups = groupAliens(aliens, 0);
    };

    //Init generator
    Aliens.init().then(function (names) {
      namesAll = names;
      aliensAll = namesAll.map(Aliens.get);
      ctrl.change();
    }).catch(function (error) {
      //TODO: something about being unable to load aliens
    });
  }]);
})();
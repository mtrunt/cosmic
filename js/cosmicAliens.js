﻿//Functionality relating to aliens
(function() {
  "use strict";
  var mod = angular.module('cosmicAliens', []);

  //Fetch alien data and provide methods to retrieve names and aliens
  mod.factory('alienData', ['$http', function($http) {
    var aliens = {}, alien_names = [];

    return {
      onLoaded: function(func) {
        $http.get("data/aliens.json").success(function(data) {
          data.forEach(function(alien) {
            aliens[alien.name] = alien;
            alien_names.push(alien.name);
          });
        }).success(func);
      },
      getNames: function() { return alien_names.slice(0); },
      get: function(name) { return angular.copy(aliens[name] || {}); }
    };
  }]);

  //Turn alien level into Bootstrap class name for colors
  mod.filter('levelClass', function() {
    var levelToClassMapping = ["success", "warning", "danger"];
    return function(lvl) { return levelToClassMapping[lvl]; };
  });

  //Turn game initial into game name
  mod.filter('gameName', function() {
    var games = {
      E : "Encounter", A : "Alliance", C : "Conflict", D : "Dominion", I : "Incursion", S : "Storm"
    };
    return function(initial) { return 'Cosmic ' + games[initial]; };
  });

  //Turn alien level into Bootstrap class name for colors
  mod.filter('alienFromName', ['alienData', function(alienData) {
    return function(name) { return alienData.get(name); };
  }]);

  mod.filter('groupBy', ['$parse', function($parse) {
    return function(list, fields) {
      var grouped = {};

      //force fields into Array
      fields = angular.isArray(fields) ? fields : [fields];
      if(fields.length < 1) return { value: '', items: list };

      var field = fields[0];
      list.forEach(function(item) {
        var group = item[field];//var group = $parse(field)(item);
        grouped[group] = grouped[group] || [];
        grouped[group].push(angular.copy(item));
      });
      var groups = Object.keys(grouped);
      
      return groups.map(function(group) {
        return { value : group, items : grouped[group] };
      });
    };
  }]);
  
  //Turn alien level into a string of stars to show level
  mod.filter('levelStars', function() {
    //var starred = {};
    return function(lvl) {
      //if(starred[lvl]) return starred[lvl];
      var stars = '';
      for(var i = 0; i <= lvl; i++) { stars += '★'; }
      //starred[lvl] = stars;
      return stars;
    };
  });

  mod.directive('alienTitle', function(alienData) {
    return {
      scope: {
        alien: '='
      },
      restrict: "AE",
      template: '<div><span class="pull-right label label-{{alien.level | levelClass}}">C{{alien.game}}</span><span class="pull-right label label-{{alien.level | levelClass}}">{{alien.level | levelStars}}</span><span ng-show="alien.setup || alien.restriction" class="pull-right label label-{{alien.level | levelClass}}">!</span><span>{{alien.name}}</span></div>'
    }
  });

  //Turn alien object into a panel with its information
  mod.directive("alienPanel", ['$sce', function($sce) {
    return {
      restrict: "AE",
      templateUrl: "partials/alien-panel.html",
      link: function($scope, element, attrs, controllers) {
        //Mark description as safe HTML
        if(typeof $scope.alien.description =='string')
          $scope.alien.description = $sce.trustAsHtml($scope.alien.description);
      }
    };
  }]);

})();
(function (angular) {
  'use strict';

  angular.module('swapiApp', [])

    .controller('SwapiExampleController', function (swapi) {
      var vm = this;

      swapi.listPeople().then(function (data) {
        vm.people = data;
      });
    })

    .factory('swapi', function ($http, $q, $timeout, $log) {
      function extractData(v) {
        return v.data;
      }
      function extractFilmTitle (response) {
        return response.data.title;
      }

      function augmentWithFilmNames(personResponse) {
        var results = personResponse.results;
        var cache = {}; // URL -> promise of the title

        angular.forEach(results, function(person) {
          person.filmNames = [];
          angular.forEach(person.films, function(filmUrl) {
            if(! cache[filmUrl]) {
              cache[filmUrl] = $http.get(filmUrl).then(extractFilmTitle);
            }
            cache[filmUrl].then(function(title) {
            	$log.info("answer for", title);
              person.filmNames.push(title);
            });
          });
        });

        return $q(function(resolve, reject) {
	        var all = $q.all(cache);
        	all.then(function() { resolve(personResponse) }, reject);
        	// By the way, most browsers already accept ES6 =>
        	// all.then(() => resolve(personResponse), reject);
        	// Wait at most 2 seconds:
        	$timeout(function() { resolve(personResponse) }, 1000);
        });
      }

      return {
        listPeople: function () {
          return $http.get('http://swapi.co/api/people/')
            .then(extractData)
            .then(augmentWithFilmNames);
        },
        listStarships: function () {
          return $http.get('http://swapi.co/api/starships/');
        }
      };
    })

    .service('zips', function ($http) {
      var svc = this;

      svc.lookup = function (zipcode) {
        return $http.get('http://api.zippopotam.us/us/' + zipcode);
      };
    })

    .controller('ZipExampleController', function (zips) {
      var vm = this;

      vm.getPlaceDetails = function () {
        zips.lookup(vm.zipcode).success(function (data) {
          vm.locationDetails = data;
        });
      };
    })

})(window.angular);

angular.module('App')
.controller('WeatherController', function ($scope, $http, $ionicLoading) {
  var directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];

  $ionicLoading.show();
  $http.get('https://ionic-in-action-api.herokuapp.com/weather').success(function (weather) {
    $scope.weather = weather;
    $ionicLoading.hide();
  }).error(function (err) {
    $ionicLoading.show({
      template: 'Could not load weather. Please try again later.',
      duration: 3000
    });
  });

  $scope.getDirection = function (degree) {
  /*  if (degree > 338) {
      degree = 360 - degree;
    }
    var index = Math.floor((degree + 22) / 45);
    return directions[index]; */
    //Wind Direction calculations from http://climate.umn.edu/snow_fence/components/winddirectionanddegreeswithouttable3.htm
    if(degree>=11.25 && degree <= 33.75){
        degree = "NNE";
    }
    else if(degree>=33.75 && degree <= 56.25){
        degree = "NE";
    }
    else if(degree>=56.25 && degree <= 78.75){
        degree = "ENE";
    }
    else if(degree>=78.75 && degree <= 101.25){
        degree = "E";
    }
    else if(degree>=101.25 && degree <= 123.75){
        degree = "ESE";
    }
    else if(degree>=123.75 && degree <= 146.25){
        degree = "SE";
    }
    else if(degree>=146.25 && degree <= 168.75){
        degree = "SSE";
    }
    else if(degree>=168.75 && degree <= 191.25){
        degree = "S";
    }
    else if(degree>=191.25 && degree <= 213.75){
        degree = "SSW";
    }
    else if(degree>=213.75 && degree <= 236.25){
        degree = "SW";
    }
    else if(degree>=236.25 && degree <= 258.75){
        degree = "WSW";
    }
    else if(degree>=258.75 && degree <= 281.25){
        degree = "W";
    }
    else if(degree>=281.25 && degree <= 303.75){
        degree = "WNW";
    }
    else if(degree>=303.75 && degree <= 326.25){
        degree = "NW";
    }
    else if(degree>=326.25 || degree <= 348.75){
        degree = "NNW";
    }
    else {
        degree = "N";
    }
    return degree;
  };
});
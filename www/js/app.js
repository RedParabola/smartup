// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', [
  'ionic',
  'starter.services'
])

.run(function($ionicPlatform, TokenService) {
  $ionicPlatform.ready(function() {
    if(window.cordova && Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }

    if(window.FirebasePlugin){
      window.FirebasePlugin.getToken(onTokenSuccess,onTokenFail);
      window.FirebasePlugin.onTokenRefresh(onTokenSuccess,onTokenFail);  
    }

    function onTokenSuccess(token){
      console.log('TOKEN GET: ' + token);
      // save this server-side and use it to push notifications to this device
      TokenService.renewToken(token,token,location).then(
      //TokenService.renewToken(token,token,location).then(
        function(answer){
          console.log('TOKEN refreshed correctly server-side.');
        }, function(error){
          console.log('TOKEN FAIL not refreshed server-side.');
        }
      );
    }

    function onTokenFail(error){
      console.error('TOKEN GET ERROR: ' + error);
    }

  });
})

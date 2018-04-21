angular.module('starter.services',[])
.service('TokenService', tokenService);

tokenService.$inject = ['$q', '$http'];
function tokenService($q, $http) {

  return {
    renewToken: _renewToken
  };

  function _renewToken(token,tokenRenew,location){

    var defer = $q.defer();
    //$http.defaults.useXDomain = true;
    var req = {
      method: 'POST',
      url: 'http://www.mund0.top/api/smartupv1' + '/update',
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        token: token,
        tokenRenew: tokenRenew,
        location: location
      }
    };
    $http(req).then(function success(response) {
      defer.resolve(parseTestResponse(data));
    }, function error(errorResponse) {
      defer.reject(errorResponse);
    });
    return defer.promise;
  }

  function parseTestResponse (response) {
    var parsedResponse = response;
    return parsedResponse;
  }

}
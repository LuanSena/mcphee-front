angular.module('mainApp')
    .controller('mainHeaderController',
        ['$http', '$rootScope', '$scope', 'mainPageService', function ($http, $scope, $rootScope, mainPageService) {
            $rootScope.$on('TreeReload', function (event, args) {
                $scope.name = mainPageService.getSourceName();
                $scope.full_name = mainPageService.getSourceName();
            })
        }]);
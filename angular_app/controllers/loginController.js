angular.module('mainApp')
    .controller('loginController',
        ['$http', '$scope', 'showHideService', 'treeService', 'BACKEND_API', '$rootScope',
            function ($http, $scope, showHideService, treeService, BACKEND_API, $rootScope) {
            /*Login screen vars*/
            $scope.email = '';
            $scope.password = '';
            $scope.loginMsg = '';
            $scope.loading = false;
            /*Request user and pass then set userToken*/
            $scope.requestLogin = function () {
                $scope.loginMsg = 'Verificando credenciais...';
                $scope.loading = true;

                $http({
                    method: 'POST',
                    url: BACKEND_API + 'v1/auth',
                    headers: {
                        'Content-Type': 'application/json', 'user': $scope.email,
                        'password': $scope.password
                    },
                    data: {
                        'email': $scope.email,
                        'password': $scope.password
                    }
                }).then
                (function success(response) {
                    if (response.status === 200) {
                        $scope.loginMsg = '';
                        $scope.loading = false;
                        treeService.setSourceData(response.data);
                        $rootScope.$broadcast('TreeReload');
                        showHideService.setCleanScreen();
                        showHideService.setShowMenus(true);
                        showHideService.setShowMain(true);
                    }
                }, function error(response) {

                    if (response.status === 401) {
                        $scope.loading = false;
                        $scope.loginMsg = 'Usuário e/ou senha inválido!';
                        console.log('Fail to login, status:' + response.status);
                    } else {
                        $scope.loginMsg = 'Serviço indisponível, contate o administrador (' + response.status + ')';
                        $scope.loading = false;
                    }
                })
            };
        }]);
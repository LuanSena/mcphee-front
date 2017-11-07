angular.module('mainApp')
    .controller('createDiaryController',
        ['$http', '$scope', 'showHideService', 'treeService', 'BACKEND_API', '$rootScope',
            function ($http, $scope, showHideService, treeService, BACKEND_API, $rootScope) {
                $scope.diary_text = '';
                $scope.class_id = '';
                $scope.classes = ['Carregando...'];

                $scope.postClassDiary = function () {
                    $scope.loginMsg = 'Verificando credenciais...';
                    $scope.loading = true;

                    $http({
                        method: 'POST',
                        url: BACKEND_API + 'v1/class-diary',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        data: {
                            'diaryText': $scope.diary_text
                        }
                    }).then
                    (function success(response) {
                        if (response.status === 200) {
                            $scope.diary_text = '';
                            alert("Diário publicado com sucesso!")
                        }
                    }, function error(response) {
                        console.log(response);
                        alert("Ocorreu um erro a o publicar o diário");
                    })
                };

                $rootScope.$on('getPersonClasses', function (event, args) {
                    $scope.class_id = args["classId"];
                    $scope.class_name = args["className"];
                    $scope.class_school_id = args["classSchoolId"];
                    $scope.class_school_name = args["classSchoolName"];
                });
            }]);
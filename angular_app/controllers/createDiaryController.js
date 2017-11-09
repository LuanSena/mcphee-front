angular.module('mainApp')
    .controller('createDiaryController', ['$http', '$rootScope', '$scope', 'BACKEND_API', function ($http, $scope, $rootScope, BACKEND_API) {
        $scope.diary = {
            text: 'Insira aqui o seu texto',
            classes: ['Carregando...'],
            selected: 0
        };

        $scope.postClassDiary = function () {
            if ($scope.diary.selected > 0) {
                alert($scope.diary.text + $scope.diary.selected);
                $http({
                    method: 'POST',
                    url: BACKEND_API + 'v1/diary/class/' + $scope.diary.selected,
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    data: {
                        'diaryText': $scope.diary.text
                    }
                }).then
                (function success(response) {
                    if (response.status === 202) {
                        $scope.diary.text = '';
                        alert("Diário publicado com sucesso!")
                    }
                }, function error(response) {
                    console.log(response);
                    alert("Ocorreu um erro a o publicar o diário");
                })
            }
            else {
                alert("É necessário selecionar uma turma primeiro")
            }
        };

        $rootScope.$on('getPersonClasses', function (event, args) {
            $scope.classes = args;
        });
    }]);
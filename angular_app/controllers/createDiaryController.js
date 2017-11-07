angular.module('mainApp')
    .controller('createDiaryController', ['$http', '$rootScope', '$scope', '$timeout', function ($http, $scope, $rootScope, $timeout) {
        $scope.diary_text = 'Insira aqui o seu texto';
        $scope.selected_class_id = 'nenhuma!';
        $scope.classes = ['Carregando...'];

        $scope.postClassDiary = function (param) {
            // $scope.loginMsg = 'Verificando credenciais...';
            // $scope.loading = true;
            //
            // $http({
            //     method: 'POST',
            //     url: BACKEND_API + 'v1/class-diary',
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     data: {
            //         'diaryText': $scope.diary_text
            //     }
            // }).then
            // (function success(response) {
            //     if (response.status === 200) {
            //         $scope.diary_text = '';
            //         alert("Diário publicado com sucesso!")
            //     }
            // }, function error(response) {
            //     console.log(response);
            //     alert("Ocorreu um erro a o publicar o diário");
            // })
        };

        $rootScope.$on('getPersonClasses', function (event, args) {
            $scope.classes = args;
        });
    }]);
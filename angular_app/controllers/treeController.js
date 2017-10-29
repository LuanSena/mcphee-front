angular.module('mainApp')
    .controller('treeController',
        ['$http', '$rootScope', '$scope', 'treeService', function ($http, $scope, $rootScope, treeService) {
            $rootScope.$on('TreeReload', function (event, args) {
                $scope.name = treeService.getPersonName();
                $scope.full_name = treeService.getPersonName();
                $scope.students_number = treeService.getStudentsNumber();
                $scope.students = treeService.getStudents();
            });
            $scope.shouldShowStudents = function () {
                num = treeService.getStudentsSize();
                if (num > 0) {
                    return true;
                }
                else {
                    return false
                }

            }
        }]);
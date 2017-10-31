angular.module('mainApp')
    .controller('treeController',
        ['$http', '$rootScope', '$scope', 'treeService', function ($http, $scope, $rootScope, treeService) {
            $rootScope.$on('TreeReload', function (event, args) {
                $scope.name = treeService.getPersonName();
                $scope.full_name = treeService.getPersonName();
                $scope.students_number = treeService.getStudentsNumber();
                $scope.students = treeService.getStudents();
                $scope.schools = treeService.getSchools();
                $scope.messages = treeService.getPersonMessages();
                $scope.diarys = treeService.getPersonStudentsDiary();
            });
            $scope.shouldShowStudents = function () {
                return treeService.getStudentsSize();
            };

            $scope.shouldShowSchools = function () {
                return treeService.getSchoolsSize();
            };

            $scope.shouldShowAdmin = function () {
                num = treeService.getPersonPermission();
                if (num === 4) {
                    return true
                } else {
                    return false
                }
            };

            $scope.shouldShowManager = function () {
                num = treeService.getPersonPermission();
                if (num === 3 || num === 4) {
                    return true
                } else {
                    return false
                }
            };

            $scope.shouldShowDaily = function () {
                num = treeService.getPersonPermission();
                if (num === 2 || num === 4) {
                    return true
                } else {
                    return false
                }
            }
        }]);
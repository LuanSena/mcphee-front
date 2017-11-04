angular.module('mainApp')
    .controller('studentProfileController',
        ['$http', '$rootScope', '$scope', 'treeService', 'studentProfileService', 'BACKEND_API', 'showHideService',
            function ($http, $scope, $rootScope, treeService, studentProfileService, BACKEND_API, showHideService) {
                $rootScope.$on('StudentProfileReload', function (event, args) {
                    $scope.student_id = studentProfileService.getStudentId();
                    $scope.student_class = 0;
                    $scope.student_school_name = 'a';
                    $scope.student_name = studentProfileService.getStudentName();
                    $scope.student_grade = studentProfileService.getStudentGrade();
                    $scope.student_age = studentProfileService.getStudentAge();
                    $scope.student_nacionality = studentProfileService.getStudentNacionality();
                    $scope.diarys = studentProfileService.getStudentDiarys();
                    $scope.student_obs = studentProfileService.getStudentObs();
                    $scope.student_eating_obs = studentProfileService.getStudentEatingObs();

                });

            }]);



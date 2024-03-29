angular.module('mainApp')
    .controller('studentProfileController',
        ['$http', '$rootScope', '$scope', 'treeService', 'studentProfileService', 'BACKEND_API', 'showHideService',
            function ($http, $scope, $rootScope, treeService, studentProfileService, BACKEND_API, showHideService) {
                $rootScope.$on('StudentProfileReload', function (event, args) {
                    console.log("Received: StudentProfileReload");
                    $scope.student_id = studentProfileService.getStudentId();
                    $scope.student_class = studentProfileService.getClassName();
                    $scope.student_school_name = studentProfileService.getSchoolName();
                    $scope.owners =  studentProfileService.getOwners();
                    $scope.owner_document= '';
                    $scope.student_name = studentProfileService.getStudentName();
                    $scope.student_grade = studentProfileService.getStudentGrade();
                    $scope.student_age = studentProfileService.getStudentAge();
                    $scope.student_nacionality = studentProfileService.getStudentNacionality();
                    $scope.diarys = studentProfileService.getStudentDiarys();
                    $scope.student_obs = studentProfileService.getStudentObs();
                    $scope.student_eating_obs = studentProfileService.getStudentEatingObs();

                });
                $scope.diary_stu = {
                    text: '',
                    title: ''
                };

                $scope.postStudentOwner = function (param) {
                    console.log(param);
                    if (param !== '...') {
                        $http({
                            method: 'POST',
                            url: BACKEND_API + 'v1/student/' + $scope.student_id + '/owner',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            data: {
                                'ownerDocument': param
                            }
                        }).then
                        (function success(response) {
                            if (response.status === 202) {
                                $scope.diary_stu.text = '';
                                $scope.diary_stu.title = '';
                                alert("Responsável registrado com sucesso!")
                            }
                        }, function error(response) {
                            console.log(response);
                            alert("Ocorreu um erro!");
                        })
                    }
                    else {
                        alert("É necessário digitar um texto")
                    }
                };

                $scope.postStudentDiary = function () {
                    if ($scope.diary_stu.text !== '...') {
                        $http({
                            method: 'POST',
                            url: BACKEND_API + 'v1/diary/student/' + $scope.student_id,
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            data: {
                                'diaryText': $scope.diary_stu.text,
                                'diaryTitle': $scope.diary_stu.title
                            }
                        }).then
                        (function success(response) {
                            if (response.status === 202) {
                                $scope.diary_stu.text = '';
                                $scope.diary_stu.title = '';
                                alert("Diário publicado com sucesso!")
                            }
                        }, function error(response) {
                            console.log(response);
                            alert("Ocorreu um erro a o publicar o diário");
                        })
                    }
                    else {
                        alert("É necessário digitar um texto")
                    }
                };


            }]);



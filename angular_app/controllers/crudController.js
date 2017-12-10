angular.module('mainApp')
    .controller('managerListController',
        ['$http', '$rootScope', '$scope', 'treeService', 'schoolProfileService', 'BACKEND_API', 'showHideService',
            function ($http, $scope, $rootScope, treeService, schoolProfileService, BACKEND_API, showHideService) {
                $scope.manager_full_name = '';
                $scope.manager_document = '';
                $scope.manager_contact = '';
                $scope.manager_school_id = '';
                $scope.manager_school_name = '';
                $scope.managers = [];
                $scope.showManagerListCrud = false;
                $rootScope.$on('ManagersListLoad', function (event, args) {
                    if (args !== null) {
                        $scope.managers = args;
                    }

                });
                $scope.postManager = function (manager_crud_person_id, manager_crud_school_id) {
                    // $scope.showManagerListCrud = false;
                    // console.log(manager_crud_person_id);
                    // console.log(manager_crud_school_id);
                    // return true
                    $http({
                        method: 'POST',
                        url: BACKEND_API + 'v1/person/managers',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        data: {
                            'document': manager_crud_person_id,
                            'schoolId': manager_crud_school_id
                        }
                    }).then
                    (function success(response) {
                        if (response.status === 202) {
                            $rootScope.$broadcast('ManagersListLoad');
                            manager_crud_person_id = '';
                            manager_crud_school_id = '';
                            alert("Gestor adicionado com sucesso!")
                        }
                    }, function error(response) {
                        console.log(response);
                        alert("Vish!, check the console logs");
                    })

                };

                $scope.getManagerListCrudInfos = function () {
                    $scope.showManagerListCrud = true;
                    // $scope.showSchoolListCrud = false;
                    // console.log($scope.showSchoolListCrud);
                    // $http({
                    //     method: 'POST',
                    //     url: BACKEND_API + 'v1/person/manager',
                    //     headers: {
                    //         'Content-Type': 'application/json'
                    //     },
                    //     data: {
                    //         'fullName': $scope.manager_document,
                    //         'fantasyName': $scope.manager_school_id
                    //     }
                    // }).then
                    // (function success(response) {
                    //     if (response.status === 202) {
                    //         $rootScope.$broadcast('ManagersListLoad');
                    //         $scope.diary_stu.text = '';
                    //         $scope.diary_stu.title = '';
                    //         alert("Gestor adicionado com sucesso!")
                    //     }
                    // }, function error(response) {
                    //     console.log(response);
                    //     alert("Vish!, check the console logs");
                    // })

                };

            }]);

angular.module('mainApp')
    .controller('classListController',
        ['$http', '$rootScope', '$scope', 'treeService', 'schoolProfileService', 'BACKEND_API', 'showHideService',
            function ($http, $scope, $rootScope, treeService, schoolProfileService, BACKEND_API, showHideService) {
                $scope.classId = '';
                $scope.className = '';
                $scope.showClassListCrud = false;
                $scope.classes = [];
                $scope.classDetailProfs = [];
                $scope.classDetailStudents = [];
                $scope.classDetailName = "";
                $scope.classDetailId = "";
                $rootScope.$on('ClassListLoad', function (event, args) {
                    if (args !== null) {
                        $scope.classes = args;
                    }

                });

                $rootScope.$on('ClassDetailReload', function (event, args) {
                    console.log('received: ClassDetailReload');
                    if (args !== null) {
                        $scope.classDetailProfs = args["profs"];
                        $scope.classDetailStudents = args["students"];
                    }

                });
                $scope.removeProfFromClass = function (prof_id, class_id) {
                    $http({
                        method: 'DELETE',
                        url: BACKEND_API + 'v1/class/'+ class_id +'/prof/'+prof_id,
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }).then
                    (function success(response) {
                        if (response.status === 200) {
                            $scope.getClassDetail(class_id, $scope.classDetailName)
                        }
                    }, function error(response) {
                        console.log(response);
                        alert("ERROR! check the console logs");
                    })
                };
                $scope.getClassDetail = function (class_id, class_name) {
                    school_local_id = treeService.getSchools()[0]["school_id"];
                    $http({
                        method: 'GET',
                        url: BACKEND_API + 'v1/class/details/'+ class_id,
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }).then
                    (function success(response) {
                        if (response.status === 200) {
                            $rootScope.$broadcast('ClassDetailReload', response.data);
                            $scope.classDetailName = class_name;
                            $scope.classDetailId = class_id;
                            showHideService.setCleanScreen();
                            showHideService.setShowclassDetail(true)
                        }
                    }, function error(response) {
                        // $rootScope.$broadcast('SchoolListLoad');
                        console.log(response);
                        alert("Vish! check the console logs");
                    })

                };
                $scope.postClass = function (class_name_crud) {
                    school_local_id = treeService.getSchools()[0]["school_id"];
                    $http({
                        method: 'POST',
                        url: BACKEND_API + 'v1/class',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        data: {
                            'schoolId': school_local_id,
                            'className': class_name_crud
                        }
                    }).then
                    (function success(response) {
                        if (response.status === 202) {
                            alert("Classe cadastrada com sucesso!")
                        }
                    }, function error(response) {
                        // $rootScope.$broadcast('SchoolListLoad');
                        console.log(response);
                        alert("Vish! check the console logs");
                    })

                };
                $scope.postClassProf = function (class_id, prof_id) {
                    school_local_id = treeService.getSchools()[0]["school_id"];
                    $http({
                        method: 'POST',
                        url: BACKEND_API + 'v1/class/prof',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        data: {
                            'classId': class_id,
                            'personId': prof_id
                        }
                    }).then
                    (function success(response) {
                        if (response.status === 202) {
                            alert("Registrado com sucesso")
                        }
                    }, function error(response) {
                        // $rootScope.$broadcast('SchoolListLoad');
                        console.log(response);
                        alert("Vish! check the console logs");
                    })

                };
                $scope.postClassStudent = function (class_id, student_id) {
                    school_local_id = treeService.getSchools()[0]["school_id"];
                    $http({
                        method: 'POST',
                        url: BACKEND_API + 'v1/class/student',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        data: {
                            'classId': class_id,
                            'studentId': student_id
                        }
                    }).then
                    (function success(response) {
                        if (response.status === 202) {
                            alert("Classe cadastrada com sucesso!")
                        }
                    }, function error(response) {
                        // $rootScope.$broadcast('SchoolListLoad');
                        console.log(response);
                        alert("Vish! check the console logs");
                    })

                };

            }]);

angular.module('mainApp')
    .controller('registerController',
        ['$http', '$rootScope', '$scope', 'treeService', 'schoolProfileService', 'BACKEND_API', 'showHideService',
            function ($http, $scope, $rootScope, treeService, schoolProfileService, BACKEND_API, showHideService) {
                $scope.nome = "";
                $scope.documento = "";
                $scope.endereco = "";
                $scope.numero = "";
                $scope.complemento = "";
                $scope.idade = "";
                $scope.contato = "";
                $scope.senha = "";

                $scope.postRegisterPerson = function (nome, documento, endereco, numero, complemento, idade, contato, senha, email) {
                    $http({
                        method: 'POST',
                        url: BACKEND_API + 'v1/person',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        data: {
                            'name': nome,
                            'personFullName': nome,
                            'document': documento,
                            'addressName': endereco,
                            'addressNumber': numero,
                            'addressComplement': complemento,
                            'age': idade,
                            'email': email,
                            'contact': contato,
                            'password': senha
                        }
                    }).then
                    (function success(response) {
                        if (response.status === 202) {
                            alert("Classe cadastrada com sucesso!")

                        }
                    }, function error(response) {
                        // $rootScope.$broadcast('SchoolListLoad');
                        console.log(response);
                        alert("Vish! check the console logs");
                        $window.location.href = '/index.html';
                    })

                };

            }]);


angular.module('mainApp')
    .controller('profListController',
        ['$http', '$rootScope', '$scope', 'treeService', 'schoolProfileService', 'BACKEND_API', 'showHideService',
            function ($http, $scope, $rootScope, treeService, schoolProfileService, BACKEND_API, showHideService) {
                $scope.prof_rud_person_id = '';
                $scope.prof_document = '';
                $scope.prof_contact = '';
                $scope.prof_school_id = '';
                $scope.prof_school_name = '';
                $scope.profs = [];
                $scope.showProfListCrud = false;
                $rootScope.$on('profListLoad', function (event, args) {
                    if (args !== null) {
                        console.log('On: ProfListLoad');
                        $scope.profs = args;
                    }

                });
                $scope.postProf = function (prof_rud_person_id) {
                    $scope.showSchoolListCrud = false;
                    school_local_id = treeService.getSchools()[0]["school_id"];
                    $http({
                        method: 'POST',
                        url: BACKEND_API + 'v1/person/prof',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        data: {
                            'schoolId': school_local_id,
                            'personDocument': prof_rud_person_id
                        }
                    }).then
                    (function success(response) {
                        if (response.status === 202) {
                            $scope.diary_stu.text = '';
                            $scope.diary_stu.title = '';
                            alert("Diário publicado com sucesso!")
                        }
                    }, function error(response) {
                        $rootScope.$broadcast('SchoolListLoad');
                        console.log(response);
                        alert("Cadastrado com sucesso!");
                    })

                };

            }]);

angular.module('mainApp')
    .controller('studentListController',
        ['$timeout', '$http', '$rootScope', '$scope', 'treeService', 'schoolProfileService', 'studentProfileService', 'BACKEND_API', 'showHideService',
            function ($timeout, $http, $scope, $rootScope, treeService, schoolProfileService, studentProfileService, BACKEND_API, showHideService) {
                $scope.showStudentListCrud = true;
                $scope.list_students = [];
                $rootScope.$on('studentListLoad', function (event, args) {
                    $scope.showStudentListCrud = false;
                    if (args !== null) {
                        $scope.list_students = args;
                    }

                });
                $scope.myrequestStudent = function (student_id) {
                    console.log(student_id);
                    $http({
                        method: 'GET',
                        url: BACKEND_API + 'v1/student/' + student_id,
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }).then
                    (function success(response) {
                        if (response.status === 200) {
                            studentProfileService.setSourceData(response.data);
                            // $rootScope.emit('StudentProfileReload', '');
                            $timeout(function(){
                                $rootScope.$broadcast('StudentProfileReload', '');
                            });
                            showHideService.setCleanScreen();
                            showHideService.setShowStudentProfile(true);
                        }
                    }, function error(response) {

                        if (response.status === 401) {
                            console.log('Fail to request school by id, status:' + response.status);
                        }
                    }
                    )
                };
                $scope.postStudent = function (name, grade, born_date, nacionality, eating_obs, obs) {
                    $scope.showSchoolListCrud = false;
                    school_local_id = treeService.getSchools()[0]["school_id"];
                    $http({
                        method: 'POST',
                        url: BACKEND_API + 'v1/student',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        data: {
                            'studentName': name,
                            'studentGrade': grade,
                            'studentBorn_date': born_date,
                            'studentNacionality': nacionality,
                            'studentEating_obs': eating_obs,
                            'studentObs': obs,
                            'schoolId': school_local_id
                        }
                    }).then
                    (function success(response) {
                        if (response.status === 202) {
                            $scope.diary_stu.text = '';
                            $scope.diary_stu.title = '';
                            alert("Diário publicado com sucesso!")
                        }
                    }, function error(response) {
                        $rootScope.$broadcast('SchoolListLoad');
                        console.log(response);
                        alert("Cadastrado com sucesso!");
                    })

                };

            }]);

angular.module('mainApp')
    .controller('myStudentsController',
        ['$http', '$rootScope', '$scope', 'treeService', 'schoolProfileService', 'BACKEND_API', 'showHideService',
            function ($http, $scope, $rootScope, treeService, schoolProfileService, BACKEND_API, showHideService) {
                $scope.my_students = [];
                $rootScope.$on('myStudentsLoad', function (event, args) {
                    if (args !== null) {
                        console.log("hail to the king");
                        $scope.my_students = args;
                        console.log(args)
                    }
                });
            }]);
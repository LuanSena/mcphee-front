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
                $scope.postManager = function () {
                    $scope.showSchoolListCrud = false;
                    console.log($scope.showSchoolListCrud);
                    $http({
                        method: 'POST',
                        url: BACKEND_API + 'v1/person/manager',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        data: {
                            'fullName': $scope.manager_document,
                            'fantasyName': $scope.manager_school_id
                        }
                    }).then
                    (function success(response) {
                        if (response.status === 202) {
                            $rootScope.$broadcast('ManagersListLoad');
                            $scope.diary_stu.text = '';
                            $scope.diary_stu.title = '';
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
                $rootScope.$on('ClassListLoad', function (event, args) {
                    if (args !== null) {
                        $scope.classes = args;
                    }

                });
                $scope.postClass = function () {
                    $scope.showSchoolListCrud = false;
                    console.log($scope.showSchoolListCrud);
                    $http({
                        method: 'POST',
                        url: BACKEND_API + 'v1/classes/'+$scope.class_school_id,
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        data: {
                            'schoolId': $scope.sfull_name,
                            'className': $scope.fantasy_name
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
    .controller('profListController',
        ['$http', '$rootScope', '$scope', 'treeService', 'schoolProfileService', 'BACKEND_API', 'showHideService',
            function ($http, $scope, $rootScope, treeService, schoolProfileService, BACKEND_API, showHideService) {
                $scope.prof_full_name = '';
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
                $scope.postSchool = function () {
                    $scope.showSchoolListCrud = false;
                    console.log($scope.showSchoolListCrud);
                    $http({
                        method: 'POST',
                        url: BACKEND_API + 'v1/school',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        data: {
                            'fullName': $scope.sfull_name,
                            'fantasyName': $scope.fantasy_name,
                            'address': $scope.address,
                            'email': $scope.email,
                            'contact': $scope.contact,
                            'document': $scope.document,
                            'ownerName': $scope.owner_name,
                            'ownerAttribute': $scope.owner_attribute,
                            'ownerContact': $scope.owner_contact
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
        ['$http', '$rootScope', '$scope', 'treeService', 'schoolProfileService', 'BACKEND_API', 'showHideService',
            function ($http, $scope, $rootScope, treeService, schoolProfileService, BACKEND_API, showHideService) {
                $scope.showStudentListCrud = true;
                $scope.list_students = [];
                $rootScope.$on('studentListLoad', function (event, args) {
                    $scope.showStudentListCrud = false;
                    if (args !== null) {
                        $scope.list_students = args;
                    }

                });
                $scope.postSchool = function () {
                    $scope.showSchoolListCrud = false;
                    console.log($scope.showSchoolListCrud);
                    $http({
                        method: 'POST',
                        url: BACKEND_API + 'v1/school',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        data: {
                            'fullName': $scope.sfull_name,
                            'fantasyName': $scope.fantasy_name,
                            'address': $scope.address,
                            'email': $scope.email,
                            'contact': $scope.contact,
                            'document': $scope.document,
                            'ownerName': $scope.owner_name,
                            'ownerAttribute': $scope.owner_attribute,
                            'ownerContact': $scope.owner_contact
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
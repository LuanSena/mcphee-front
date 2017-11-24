angular.module('mainApp')
    .controller('treeController',
        ['$http', '$rootScope', '$scope', 'treeService', 'schoolProfileService', 'BACKEND_API', 'showHideService', 'studentProfileService',
            function ($http, $scope, $rootScope, treeService, schoolProfileService, BACKEND_API, showHideService, studentProfileService) {
                $rootScope.$on('TreeReload', function (event, args) {
                    $scope.person_id = treeService.getPersonId();
                    $scope.name = treeService.getPersonName();
                    $scope.full_name = treeService.getPersonFullName();
                    $scope.students_number = treeService.getStudentsNumber();
                    $scope.students = treeService.getStudents();
                    $scope.profile_schools = treeService.getSchools();
                    $scope.messages = treeService.getPersonMessages();
                    $scope.diarys = treeService.getPersonStudentsDiary();
                });

                $scope.shouldShowStudents = function () {
                    return treeService.getStudentsSize();
                };

                $scope.shouldShowSchools = function () {
                    return treeService.getSchoolsSize();
                };

                $scope.backToStartPage = function () {
                    showHideService.setCleanScreen();
                    showHideService.setShowMain(true);
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
                };

                $scope.requestSchoolList = function () {
                    $http({
                        method: 'GET',
                        url: BACKEND_API + 'v1/school/',
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }).then
                    (function success(response) {
                        if (response.status === 200) {
                            // schoolProfileService.setSourceData(response.data);
                            $rootScope.$broadcast('SchoolListLoad', response.data);
                            showHideService.setCleanScreen();
                            showHideService.setShowSchoolList(true);
                        }
                    }, function error(response) {

                        if (response.status === 401) {
                            console.log('Fail to request school by id, status:' + response.status);
                        }
                    })
                };

                $scope.requestManagersList = function () {
                    $http({
                        method: 'GET',
                        url: BACKEND_API + 'v1/person/managers',
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }).then
                    (function success(response) {
                        if (response.status === 200) {
                            // schoolProfileService.setSourceData(response.data);
                            $rootScope.$broadcast('ManagersListLoad', response.data);
                            showHideService.setCleanScreen();
                            showHideService.setShowManagerList(true);
                        }
                    }, function error(response) {

                        if (response.status === 401) {
                            console.log('Fail to request school by id, status:' + response.status);
                        }
                    })
                };

                $scope.requestClassesList = function () {
                    $http({
                        method: 'GET',
                        url: BACKEND_API + 'v1/class/'+$scope.profile_schools[0]["school_id"],
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }).then
                    (function success(response) {
                        if (response.status === 200) {
                            $rootScope.$broadcast('ClassListLoad', response.data);
                            showHideService.setCleanScreen();
                            showHideService.setShowClassList(true);
                        }
                    }, function error(response) {

                        if (response.status === 401) {
                            console.log('Fail to request classes list, status:' + response.status);
                        }
                    })
                };

                $scope.requestStudentList = function () {
                    $http({
                        method: 'GET',
                        url: BACKEND_API + 'v1/student/school/'+$scope.profile_schools[0]["school_id"],
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }).then
                    (function success(response) {
                        if (response.status === 200) {
                            $rootScope.$broadcast('studentListLoad', response.data);
                            showHideService.setCleanScreen();
                            showHideService.setShowStudentList(true);
                        }
                    }, function error(response) {

                        if (response.status === 401) {
                            console.log('Fail to request classes list, status:' + response.status);
                        }
                    })
                };

                $scope.requestProfList = function () {
                    console.log(BACKEND_API + 'v1/person/prof/'+$scope.profile_schools[0]["school_id"]);
                    $http({
                        method: 'GET',
                        url: BACKEND_API + 'v1/person/prof/'+$scope.profile_schools[0]["school_id"],
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }).then
                    (function success(response) {
                        if (response.status === 200) {
                            // schoolProfileService.setSourceData(response.data);
                            $rootScope.$broadcast('profListLoad', response.data);
                            console.log('Broadcast: profListLoad');
                            console.log(response.data);
                            showHideService.setCleanScreen();
                            showHideService.setShowProfList(true);
                        }
                    }, function error(response) {

                        if (response.status === 401) {
                            console.log('Fail to request classes list, status:' + response.status);
                        }
                    })
                };

                $scope.requestSchoolById = function (school_id) {
                    $http({
                        method: 'GET',
                        url: BACKEND_API + 'v1/school/' + school_id,
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }).then
                    (function success(response) {
                        if (response.status === 200) {
                            schoolProfileService.setSourceData(response.data);
                            $rootScope.$broadcast('Luan');
                            showHideService.setCleanScreen();
                            showHideService.setShowSchoolProfile(true);
                        }
                    }, function error(response) {

                        if (response.status === 401) {
                            console.log('Fail to request school by id, status:' + response.status);
                        }
                    })
                };

                $scope.requestPersonClasses = function () {
                    $http({
                        method: 'GET',
                        url: BACKEND_API + 'v1/person/'+$scope.person_id+'/classes',
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }).then
                    (function success(response) {
                        if (response.status === 200) {
                            $rootScope.$broadcast('getPersonClasses', response.data);
                            showHideService.setCleanScreen();
                            showHideService.setShowCreateDiary(true);
                        }
                    }, function error(response) {

                        if (response.status === 401) {
                            console.log('Fail to request school by id, status:' + response.status);
                        }
                    })
                };

                $scope.requestStudentById = function (student_id) {
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
                            $rootScope.$broadcast('StudentProfileReload');
                            showHideService.setCleanScreen();
                            showHideService.setShowStudentProfile(true);
                        }
                    }, function error(response) {

                        if (response.status === 401) {
                            console.log('Fail to request school by id, status:' + response.status);
                        }
                    })
                };

                $scope.requestMyStudents = function () {
                    $http({
                        method: 'GET',
                        url: BACKEND_API + 'v1/student/prof/' + treeService.getPersonId(),
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }).then
                    (function success(response) {
                        if (response.status === 200) {

                            $rootScope.$broadcast('myStudentsLoad', response.data);
                            showHideService.setCleanScreen();
                            showHideService.setShowMyStudents(true);
                        }
                    }, function error(response) {

                        if (response.status === 401) {
                            console.log('Fail to request my students, status:' + response.status);
                        }
                    })
                };
            }]);
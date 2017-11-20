angular.module('mainApp')
    .controller('schoolProfileController',
        ['$http', '$rootScope', '$scope', 'treeService', 'schoolProfileService', 'BACKEND_API', 'showHideService',
            function ($http, $scope, $rootScope, treeService, schoolProfileService, BACKEND_API, showHideService) {
                $rootScope.$on('Luan', function (event, args) {
                    $scope.school_id = schoolProfileService.getSchoolId();
                    $scope.full_name = schoolProfileService.getFullName();
                    $scope.fantasy_name = schoolProfileService.getFantasyName();
                    $scope.created_at = schoolProfileService.getCreatedAt();
                    $scope.street = schoolProfileService.getStreet();
                    $scope.email = schoolProfileService.getEmail();
                    $scope.contact = schoolProfileService.getContact();
                    $scope.document = schoolProfileService.getDocument();
                    $scope.owner_name = schoolProfileService.getOwnerName();
                    $scope.owner_attribute = schoolProfileService.getOwnerAttribute();
                    $scope.owner_contact = schoolProfileService.getOwnerContact();
                    $scope.turns = schoolProfileService.getTurns();
                });

            }]);

angular.module('mainApp')
    .controller('schoolListController',
        ['$http', '$rootScope', '$scope', 'treeService', 'schoolProfileService', 'BACKEND_API', 'showHideService',
            function ($http, $scope, $rootScope, treeService, schoolProfileService, BACKEND_API, showHideService) {
                $scope.sfull_name = '';
                $scope.fantasy_name = '';
                $scope.address = '';
                $scope.email = '';
                $scope.contact = '';
                $scope.document = '';
                $scope.owner_name = '';
                $scope.owner_attribute = '';
                $scope.owner_contact = '';
                $scope.showSchoolListCrud = true;
                $scope.schools = [];
                $rootScope.$on('SchoolListLoad', function (event, args) {
                    $scope.showSchoolListCrud = false;
                    if (args !== null) {
                        $scope.schools = args;
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

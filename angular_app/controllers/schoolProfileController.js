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
                $scope.post_school_full_name = '1';
                $scope.post_school_fantasy_name = '1';
                $scope.post_school_address = '1';
                $scope.post_school_email = '1';
                $scope.post_school_contact = '1';
                $scope.post_school_document = '1';
                $scope.post_school_owner_name = '1';
                $scope.post_school_owner_attribute = '1';
                $scope.post_school_owner_contact = '1';
                $scope.post_school_showSchoolListCrud = true;
                $scope.schools = [];
                $rootScope.$on('SchoolListLoad', function (event, args) {
                    $scope.showSchoolListCrud = false;
                    if (args !== null) {
                        $scope.schools = args;
                    }

                });
                $scope.postSchool = function (a, b, c, d, e, f, g, h, i) {
                    $scope.showSchoolListCrud = false;
                    full_name = a;
                    fantasy_name = b;
                    address = c;
                    email = d;
                    contact = e;
                    document = f;
                    owner_name = g;
                    owner_attribute = h;
                    owner_contact = i;

                    $http({
                        method: 'POST',
                        url: BACKEND_API + 'v1/school',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        data: {
                            'fullName':full_name,
                            'fantasyName':fantasy_name,
                            'address':address,
                            'email':email,
                            'contact':contact,
                            'document':document,
                            'ownerName':owner_name,
                            'ownerAttribute':owner_attribute,
                            'ownerContact':owner_contact
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

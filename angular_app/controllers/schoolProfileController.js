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



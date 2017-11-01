angular.module('mainApp')
    .controller('schoolProfileController',
        ['$http', '$scope', 'schoolProfileService',
            function ($http, $scope, schoolProfileService) {

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

            }]);
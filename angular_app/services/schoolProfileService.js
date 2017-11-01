angular.module('mainApp')
    .service('schoolProfileService', function () {
        this.source_data = 0;

        this.setSourceData = function (param) {
            this.source_data = param;
        };

        this.getSchoolId = function () {
            return this.source_data["schoolId"]
        };
        this.getFullName = function () {
            return this.source_data["fullName"]
        };
        this.getFantasyName = function () {
            return this.source_data["fantasyName"]
        };
        this.getCreatedAt = function () {
            return this.source_data["createdAt"]
        };
        this.getStreet = function () {
            return this.source_data["street"]
        };
        this.getEmail = function () {
            return this.source_data["email"]
        };
        this.getContact = function () {
            return this.source_data["contact"]
        };
        this.getDocument = function () {
            return this.source_data["document"]
        };
        this.getOwnerName = function () {
            return this.source_data["ownerName"]
        };
        this.getOwnerAttribute = function () {
            return this.source_data["ownerAttribute"]
        };
        this.getOwnerContact = function () {
            return this.source_data["ownerContact"]
        };

    });

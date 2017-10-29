angular.module('mainApp')
    .service('mainPageService', function () {
        this.id = null;
        this.name = "";
        this.age = 0;
        this.document = 0;
        this.attribute = null;
        this.addrressName = null;
        this.students = null;
        this.schools = null;
        this.email = null;
        this.source_data = null;

        this.getSourceData = function () {
            return this.source_data;
        };

        this.setSourceData = function (param) {
            this.source_data = param;
        };

        this.getSourceName = function () {
            if (this.source_data["name"]){
                return this.source_data["name"]
            } else {
                return "Sem nome"
            }
        };

    });

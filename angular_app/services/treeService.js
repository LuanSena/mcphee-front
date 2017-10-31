angular.module('mainApp')
    .service('treeService', function () {
        this.id = 0;
        this.name = "";
        this.age = 0;
        this.document = 0;
        this.attribute = 0;
        this.addrressName = 0;
        this.students = 0;
        this.schools = 0;
        this.email = 0;
        this.source_data = 0;

        this.getSourceData = function () {
            return this.source_data;
        };

        this.setSourceData = function (param) {
            this.source_data = param;
        };

        this.getPersonName = function () {
            if (this.source_data["name"]) {
                return this.source_data["name"]
            } else {
                return "Sem nome"
            }
        };

        this.getStudents = function () {
            if (this.source_data["students"]) {
                return this.source_data["students"]
            } else {
                return null
            }
        };

        this.getStudentsNumber = function () {
            if (this.source_data["students"]) {
                num = this.source_data["students"].length;
                if (num === 1) {
                    return "1 Criança"
                } else {
                    return num + " Crianças"
                }
            } else {
                return "Nenhuma criança"
            }
        };

        this.getStudentsSize = function () {
            if (this.source_data["students"]) {
                return this.source_data["students"].length;
            } else {
                return 0
            }
        };

        this.getSchools = function () {
            if (this.source_data["schools"]) {
                return this.source_data["schools"]
            }
            else {
                return null
            }
        };

        this.getSchoolsSize = function () {
            if (this.source_data["schools"]) {
                return this.source_data["schools"].length
            } else {
                return 0
            }
        };

        this.getPersonPermission = function () {
            return this.source_data["attribute"];
        };

        this.getPersonMessages = function () {
            if (this.source_data["messages"]) {
                return this.source_data["messages"]
            } else {
                return null
            }
        };

    });

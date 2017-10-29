angular.module('mainApp')
    .service('treeService', function () {
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

        this.getPersonName = function () {
            if (this.source_data["name"]){
                return this.source_data["name"]
            } else {
                return "Sem nome"
            }
        };
        this.getStudents = function () {
            if (this.source_data["students"]){
                return this.source_data["students"]
            } else {
                return null
            }
        };

        this.getStudentsNumber = function () {
            if (this.source_data["students"]){
                num = this.source_data["students"].length;
                if (num === 1){
                    return "1 Criança"
                }else {
                    return num + " Crianças"
                }
            } else {
                return "Nenhuma criança"
            }
        }

        this.getStudentsSize = function () {
            if (this.source_data["students"]){
                return this.source_data["students"].length;
            } else {
                return 0
            }
        }

    });

angular.module('starter.controllers')
.factory('$dbApi', function($http){
    var baseUrl = 'http://localhost:8080/';

    var post = function(url, body){
      body = body || {};
      return $http.post(baseUrl+url, body);
    }
    var get = function(url){
      return $http.get(baseUrl+url);
    }

    return {

      login : function(student){
       return post('login', student);
      }, 
      getTeachersData: function(carreer){
       return get('getTeachersData/' + carreer);
      },
      getF01 : function(matricula){
       return get('getF-01/'+matricula);
      }, 
      getF02 : function(matricula){
       return get('getF-02/' + matricula);
      }, 
      getF03 : function(params){
       return post('getF-03', params);
      }, 
      getF04 : function(params){
       return post('getF-04', params);
      }, 
      getF05 : function(matricula){
        return get('getF-05/' + matricula);
      }
    }
  });

angular.module('starter.controllers')
.factory('$sharedData', function () {
var student = {};
var empresa = {};
return {
    getStudent: function () {
        return student;
    },
    setStudent: function (studentParameter) {
        student = studentParameter;
    }, 
    setEmpreza(empresaParam){
      empresa = empresaParam;
    },
    getEmpreza(){
      return empresa;
    } 
};
})

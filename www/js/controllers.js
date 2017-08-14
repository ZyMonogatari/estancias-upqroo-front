angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);
  };
})

.controller('LoginCtrl', function($scope, $stateParams, $dbApi, $sharedData, $state) {
  $scope.student ={};
  $scope.login = function(){
    console.log($scope.student);
    $dbApi.login($scope.student).then(function(student){
      $sharedData.setStudent(student.data);
      $state.go('app.empresas');
    });
  }
})

.controller('EmpresasCtrl', function($scope, $sharedData) {
  $scope.guardarEmpresa = function(empresa){
    $sharedData.setEmpreza(empresa);
  }
  $scope.empresas = [
    { id: 1, nombre:'Best Day', info: {
      telefono : '998210202' ,
      direccion: 'un lugar en algun lado' ,
      correo: 'uncorreo@correo.com'
    },img:'' },
    { id: 2, nombre:'Price Travel', info: {
      telefono : '998210202' ,
      direccion: 'un lugar en algun lado' ,
      correo: 'uncorreo@correo.com'
    },img:'' },
    { id: 3, nombre:'DotNet', info: {
      telefono : '998210202' ,
      direccion: 'un lugar en algun lado' ,
      correo: 'uncorreo@correo.com'
    },img:'' },
    { id: 4, nombre:'MoonPalace', info: {
      telefono : '998210202' ,
      direccion: 'un lugar en algun lado' ,
      correo: 'uncorreo@correo.com'
    },img:'' },
    { id: 5, nombre:'SAT', info: {
      telefono : '998210202' ,
      direccion: 'un lugar en algun lado' ,
      correo: 'uncorreo@correo.com'
    },img:'' }
  ];

})

.controller('EmpresaCtrl', function($scope, $stateParams, $sharedData) {
  $scope.empresa = $sharedData.getEmpreza();
  console.log($sharedData.getEmpreza());
})

.controller('CartaDePresentacionCtrl', function($scope, $stateParams, $dbApi, $sharedData) {
  var student = $sharedData.getStudent(); 
  $dbApi.getF01(student.enrollment).then(function(link){
    $scope.link = link.data;
  });
})

.controller('CartaDeAceptacionCtrl', function($scope, $stateParams, $dbApi, $sharedData) {
  var student = $sharedData.getStudent(); 
  $dbApi.getF02(student.enrollment).then(function(link){
    $scope.link = link.data;
  });
})

.controller('DefinicionDeProjectoCtrl', function($scope, $stateParams, $dbApi, $sharedData, $filter) {
  var student = $sharedData.getStudent();
  $scope.teachers; 
  $dbApi.getTeachersData(student.carreerIndex).then(function(teachers){

    $scope.teachers = teachers.data;
    console.log($scope.teachers)
  })
  console.log(student);
  $scope.params = {};
  $scope.params.studentName = student.name;
  $scope.params.studentLastName = student.lastName;
  $scope.params.studentSecondLastName = student.secondLastName;
  $scope.params.group = student.group;
  $scope.params.careerName = student.carreerName;
  $scope.params.enrollment = student.enrollment;
  $scope.semana1 = {};
  $scope.semana2 = {};
  $scope.semana3 = {};
  $scope.semana4 = {};
  $scope.semana5 = {};
  $scope.semana6 = {};
  $scope.semana7 = {};
  $scope.semana8 = {};
  $scope.semana9 = {};
    $scope.getF03 = function(){
      $scope.params.week1 = $filter('date')($scope.semana1.inicio, 'dd/MM/yyyy') + ' - ' + $filter('date')($scope.semana1.fin, 'dd/MM/yyyy');
      $scope.params.week2 = $filter('date')($scope.semana2.inicio, 'dd/MM/yyyy') + ' - ' + $filter('date')($scope.semana2.fin, 'dd/MM/yyyy');
      $scope.params.week3 = $filter('date')($scope.semana3.inicio, 'dd/MM/yyyy') + ' - ' + $filter('date')($scope.semana3.fin, 'dd/MM/yyyy');
      $scope.params.week4 = $filter('date')($scope.semana4.inicio, 'dd/MM/yyyy') + ' - ' + $filter('date')($scope.semana4.fin, 'dd/MM/yyyy');
      $scope.params.week5 = $filter('date')($scope.semana5.inicio, 'dd/MM/yyyy') + ' - ' + $filter('date')($scope.semana5.fin, 'dd/MM/yyyy');
      $scope.params.week6 = $filter('date')($scope.semana6.inicio, 'dd/MM/yyyy') + ' - ' + $filter('date')($scope.semana6.fin, 'dd/MM/yyyy');
      $scope.params.week7 = $filter('date')($scope.semana7.inicio, 'dd/MM/yyyy') + ' - ' + $filter('date')($scope.semana7.fin, 'dd/MM/yyyy');
      $scope.params.week8 = $filter('date')($scope.semana8.inicio, 'dd/MM/yyyy') + ' - ' + $filter('date')($scope.semana8.fin, 'dd/MM/yyyy');
      $scope.params.week9 = $filter('date')($scope.semana9.inicio, 'dd/MM/yyyy') + ' - ' + $filter('date')($scope.semana9.fin, 'dd/MM/yyyy');
      $dbApi.getF03($scope.params).then(function(link){
        window.open(link.data, '_blank');
      });
    }
})

.controller('CedulaDeRegistroCtrl', function($scope, $stateParams, $dbApi, $sharedData) {
  var student = $sharedData.getStudent();
  $scope.parametros = {}; 
  $scope.parametros.estancia;
  $scope.parametros.selectedTeacher;
  $scope.teachers; 
  $dbApi.getTeachersData(student.carreerIndex).then(function(teachers){
    $scope.teachers = teachers.data;
    console.log($scope.teachers);
  });
  $scope.asesor = {};
  $scope.params = {};
  $scope.params.studentName = student.name;
  $scope.params.studentLastName = student.lastName;
  $scope.params.studentSecondLastName = student.secondLastName;
  $scope.params.studentPhone = student.phone;
  $scope.params.careerName = student.carreerName;
  $scope.params.enrollment = student.enrollment;
  $scope.params.email = student.email;
  $scope.params.nss = student.nss;
  $scope.params.studentName = student.name;

  $scope.getF04 = function(){
    $scope.params.nameAssesorEnterprice = $scope.asesor.name + ' ' +$scope.asesor.lastName + ' ' + $scope.asesor.secondLastName;
    for(var i = 0; i < $scope.teachers.length; i++){
      if(($scope.teachers[i].name + ' ' + $scope.teachers[i].lastName) == $scope.parametros.selectedTeacher){
        $scope.params.titleAssesorAcademic = $scope.teachers[i].title;
        $scope.params.nameAssesorAcademic = $scope.parametros.selectedTeacher;
        $scope.params.emailAssesorAcademic = $scope.teachers[i].email;
        $scope.params.phoneAssesorAcademic = $scope.teachers[i].phone;
      }
    }
    if($scope.parametros.estancia == 'Uno'){
      $scope.params.estancia1 = 'X';
      $scope.params.estancia2 = '';

    } else if($scope.parametros.estancia == 'Dos'){
      $scope.params.estancia1 = '';
      $scope.params.estancia2 = 'X';
    }
    console.log('parametros ', $scope.params);
    $dbApi.getF04($scope.params).then(function(link){
        window.open(link.data, '_blank');
      });
  }
/*
        'enterprice': req.body.enterprice,
        'giro': req.body.giro,
        'type': req.body.enterpriceType,
        'addressEnterprice' : req.body.addressEnterprice,
        'rrhh' : req.body.rrhh,
        'rrhhPhone' : req.body.rrhhPhone,
        'rrhhExt' : req.body.rrhhExt,
        'rrhhEmail' : req.body.rrhhEmail,
        'titleAssesorEnterprice': req.body.titleAssesorEnterprice,
        'nameAssesorEnterprice' : req.body.nameAssesorEnterprice,
        'charge': req.body.charge,
        'phoneAssesorEnterprice': req.body.phoneAssesorEnterprice,
        'extAssesorEnterprice': req.body.extAssesorEnterprice,
        'emailAssesorEnterprice' : req.body.emailAssesorEnterprice,
        'titleAssesorAcademic': req.body.titleAssesorAcademic,
        'nameAssesorAcademic' : req.body.nameAssesorAcademic,
        'emailAssesorAcademic' : req.body.emailAssesorAcademic,
        'phoneAssesorAcademic': req.body.phoneAssesorAcademic,
        'projectName': req.body.projectName, 
        'estancia1': req.body.estancia1,
        'estancia2': req.body.estancia2*/
})

.controller('CartaDeLiberacionCtrl', function($scope, $stateParams, $dbApi, $sharedData) {
  var student = $sharedData.getStudent(); 
  $dbApi.getF05(student.enrollment).then(function(link){
    $scope.link = link.data;
  });
});
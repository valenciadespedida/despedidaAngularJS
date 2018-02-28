var app= angular.module("despedidApp",[]);

app.controller("despedidaController",["$scope",function(despedida){
	despedida.message='HOLA';
}]);

function showLogin(){
	document.getElementById("cofreClaves").visibility = "hidden";
} 
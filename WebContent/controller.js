var app= angular.module("despedidApp",[]);

app.controller("despedidaController",["$scope",function(despedida){
	
//Function to show/hide User Login Table
despedida.showTableData=function(){		
	if(!despedida.showTable){
		despedida.showTable=true;
	}
	else{
		despedida.showTable=false;
	}	
	window.scrollTo(0,document.body.scrollHeight);
}

//Function that checks user and pass
despedida.checkData=function(){	
	despedida.errorMessage='';
	if(despedida.user=='Lacito' && despedida.pass=='chocolate') 
		despedida.cofreAbierto=true;
	else{
		despedida.errorMessage='Tiooooo que te lo he enviado por correo!!!!';
	}
}	
}]);


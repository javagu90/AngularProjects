angular.module("MyFirstApp", [])
.controller("FirstController",["$scope","$http", function(m,http)
{
	m.nombre="Javier";
	m.nuevoComentario={};
	m.comentarios=[
	{
		comentario: "Buen tuto",
		username: "CF"
	},
	{
		comentario: "mAL tuto",
		username: "OTRO"	
	}
	];
	m.agregarComentario=function()
	{
		m.comentarios.push(m.nuevoComentario);
		m.nuevoComentario={};
	}
}]);
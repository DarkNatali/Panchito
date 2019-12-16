$("#entrada").click(function(){
	if ($("#Usuario").val() == "natali" && $("#Contraseña").val() == '1234'){
		window.location = "./pages/inicio.html"
	}
	else{
		swal.fire('Usuario o Contraseña incorrecta');
	}
});

window.addEventListener('load',function(){
	$('.container').fadeIn(1000);
});

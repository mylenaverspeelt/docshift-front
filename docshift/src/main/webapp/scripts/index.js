function do_something(){
	const elem = document.getElementById("my-elem");
	elem.innerHTML = "Teste 123";
}

document.addEventListener("DOMContentLoaded", function (){
	do_something();	
})


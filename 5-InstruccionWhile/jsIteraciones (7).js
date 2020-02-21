function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numeroIngresado;

	contador=0;
	acumulador=0;

	while(respuesta=="si")
	{
		contador=contador+1;

		numeroIngresado=prompt("Ingrese su Numero");
		numeroIngresado=parseInt(numeroIngresado);
		 /*(Multiplo=Multiplo*NumeroIngresado)*/
		while(isNaN(numeroIngresado)) /* (isNaN(Edad/&& Edad >18)*/
		{
			numeroIngresado = prompt("error solo numeroIngresado");
			numeroIngresado = parseInt("numeroIngresado");
		}
		acumulador=acumulador+numeroIngresado;
		respuesta=prompt("Ingrese SI para continuar");

	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN
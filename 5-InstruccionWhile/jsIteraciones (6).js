function mostrar()
{

	var contador=0;
	var acumulador=0;
	var numeroIngresado;

	contador=0;
	acumulador=0;

	while(contador<5)
	{
		contador=contador+1;
		
		numeroIngresado= prompt("Ingrese su Numero");
		numeroIngresado= parseInt(numeroIngresado);
		 /*(Multiplo=Multiplo*NumeroIngresado)*/
		while(isNaN(numeroIngresado/&&contador<5))
		{
		 numeroIngresado= prompt("dale pelotudo");
		 numeroIngresado= parseInt(numeroIngresado);
		}

		acumulador=acumulador+numeroIngresado;

	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5; /* <----- cambiar el /5 por /contador */

}//FIN DE LA FUNCIÓN
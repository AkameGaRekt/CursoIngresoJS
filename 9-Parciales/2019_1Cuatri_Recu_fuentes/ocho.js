function mostrar()
{
  /*var Reserva; /* Pensando que hacer con este */
  var Nombre; /* Nombre del responsable del pago */
  var Cantidad; /* Cantidad de Personas */
  var Dias; /* La cantidad de dias que se van a quedar */
  var Pago; /* El monto que deben pagar */
  
  var MedotoDePago; /* Tipos de pago: (Contado , Tarjeta , QR) */
  var Contado; /* si llegas a lo justito */
  var Tarjeta; /* si te gusta endeudarte como mi hermana */
  var QR; /* Ni idea que es QR */

  /*var MontoTotal; /* La suma total de lo que deben pagar (En caso que paguen con tarjeta en cuotas) */

  Cantidad=0;
  Dias=0;

 /*(NO TE ENOJES ES SOLO UN EARLY o Alpha como lo quieras llamar xD)*/
  /*Nombre=prompt("Indique el nombre del responsable que realizara el pago: " +Nombre); /*  */
  /*Cantidad=prompt("Indique la cantidad de personas que se hospedaran: " +cantidad);
  Dias=prompt("Indique el numero de dias de los cuales usted y o sus acompañantes se van a hospedar: " +Dias);
  Pago=prompt("Indique el metodo de pago: " +Pago);
  alert("Estimado " +Nombre "su reserva quedo confirmada para un total de " +cantidad " personas, de las cuales se hospedaran " +Dias " dias, pagando un monto de " +Pago);
  

/* Login (ponele xD) */
  	while(isNaN(Nombre)) /* Nombre de la persona */
  	{
  		Nombre=prompt("Indique el nombre del responsable que realizara el pago: " +Nombre);
  		alert("Bienvenido " +Nombre "disfrute su estadia");

  		
  	}

  	while(Cantidad>0) /* Cantidad de personas */
  	{
  		Cantidad=prompt("Indique la cantidad de personas que se hospedaran: " +Cantidad);
  		alert("La cantidad que ha indicado que se van a hospedar serian " +Cantidad " personas");


  	}

  	while(Dias>0) /* Cantidad de dias */
  	{
  		Dias=prompt("Indique el numero de dias de los cuales usted y o sus acompañantes se van a hospedar: " +Dias);
  		alert("Te vas a quedar " +Dias " dias en este hermoso lugar")



  	}

  	while(Pago=Contado | Pago=Tarjeta | Pago=QR) /* Metodo de pago */
  	{




  	}

  	/*while() /* Monto total por todo dependiendo de (Personas , Dias y si el metodo de pago es con cuotas) "claramente si son con intereses" si no seria lo mismo */
  	/*{




  	}

  	/*alert("Estimado " +Nombre "su reserva quedo confirmada para un total de " +cantidad " personas, de las cuales se hospedaran " +Dias " dias, pagando un monto de " +Pago); /* Mensaje final (como el meme: Change da world my final message good bye) va creo que era asi */

  	/*  */
}

/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	//*las matematicas son tan locas que 
	var dividendo;
	var divisor;
	var resto;

	dividendo=document.getElementById('dividendo').value;
	divisor=document.getElementById('divisor').value;
	dividendo=parseInt("2");
	divisor=parseInt("10");

	resto= dividendo%divisor;

	console.log(resto);


}

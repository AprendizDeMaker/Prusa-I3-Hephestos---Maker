console.log('This would be the main JS file.');
var idioma = "hispano";
function ponerIdioma(cual)	{
	document.getElementById(idioma).style.display = "none";
	idioma = cual;
	document.getElementById(idioma).style.display = "block";
}

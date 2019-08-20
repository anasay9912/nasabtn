$("#idBtnNasa").click(function(){
var tokenNasa= 'EjZlhR7MAQY7tJkUo7LFycWYpaD4Dyn3gZiFhUaK';
var urlMy = 'https://api.nasa.gov/planetary/apod?api_key='+tokenNasa;
$.ajax({
url: urlMy,
success: function(respuesta) {
$('#idImgNasa').attr('src',respuesta.hdurl);
},
error: function() {
console.log("No se ha podido obtener la información");
}
});
});
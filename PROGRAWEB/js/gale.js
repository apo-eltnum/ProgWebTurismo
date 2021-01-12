var rootref = database.ref().child("Nevado");

rootref.on("child_added", snap => {
var image = snap.child("foto").val();

$("#gallery_div").append("<div class='col-md-4 col-xs-6 thumb'><a class='thumbnail' href= "+image+" ><img class='img-responsive' src= "+ image + " alt=''></a>");

}); 
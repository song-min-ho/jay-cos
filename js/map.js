$(document).ready(function () {
var mapLatLng = new google.maps.LatLng(37.746052, 127.025103)
var mapOptions = {
zoom: 15, //**** 확대축소
center: mapLatLng,
mapTypeId: google.maps.MapTypeId.ROADMAP

}

var mapGoogle = new google.maps.Map(document.getElementById('map1'), mapOptions);
var mapMarker = new google.maps.Marker({
map: mapGoogle,
position: mapLatLng,
animation: google.maps.Animation.DROP,
title: "주식회사 제이"

});

google.maps.event.addListener(mapMarker, 'click', function () {
mapGoogle.setCenter(mapMarker.getPosition());

});



});

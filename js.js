/*global $ */


$(document).ready(function(){
    $(".title-h1").hide();
    $(".title-h1").slideDown(400);
    $(".navbar").hide();
    $(".navbar").slideDown(300);
    
    $(".img-responsive").click(function(){
        $(this).fadeOut(300);
        $(this).slideDown(700);
        
    });
    });

     
    function initMap() {
        var uluru = {lat: 53.502059, lng: -1.145217};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 10,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }

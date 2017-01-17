 $(document).ready(function() {
     window.initMap = function() {

         var map = new google.maps.Map(document.getElementById('map'), {
             zoom: 11,
             center: { lat: 32.715736, lng: -117.161087 }
         });


         $.getJSON("topspots.json", function(result) {


             $(result).each(function(index, value) {
                 var myLatLng = { lat: value.location[0], lng: value.location[1] };
                 var marker = new google.maps.Marker({
                     position: myLatLng,
                     map: map,


                 });

                 var forHTML = "";
                 var maps = 'https://www.google.com/maps?q=';
                 maps += value.location[0] + ',' + value.location[1];
                 forHTML += "<tr><td>" + value.name + "</td><td>" + value.description + "</td><td><a class= 'button' target='_blank' href='" + maps + "'>Check Map!</td></tr>";


                 $(forHTML).appendTo("#table");


             });
         });




     }
 });

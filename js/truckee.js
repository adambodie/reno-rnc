function loadDoc10() {
  var xmlhttp;
  if (window.XMLHttpRequest){
    xmlhttp = new XMLHttpRequest();
  } else {
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      jsonDoc = JSON.parse(xmlhttp.responseText);
      myFunction(jsonDoc);
    }
  };
  xmlhttp.open("GET", "json/truckee.json", true);
  xmlhttp.send();
  
  function myFunction(arr) {
    var txt = "<div class='container carousel-class'>";
      for (var i = 0; i < arr.length; i++) {
        txt += "<div>";
        txt += "<h2>" + arr[i].title + "</h2>";
        txt += "<img src='img/" + arr[i].name + ".jpg' class='img-responsive'>";
        txt += "</div>";
      }
      txt += "</div>";
      document.getElementById("carousel").innerHTML=txt;
  }
  $.getScript( "js/carousel-slick.js", function( data, textStatus, jqxhr ) {
  console.log( data ); // Data returned
  console.log( textStatus ); // Success
  console.log( jqxhr.status ); // 200
  console.log( "Load was performed." );
});

    var title = "<h1>Part 10: A Nice Trek to the Truckee River</h1>";
    document.getElementById("title").innerHTML = title;
    var paragraph = "<div class='container'><div class='row'>";
    paragraph +="<div class='col-md-6 story'>";
    paragraph +="<h1>My Story</h1>";
    paragraph +="<p>After exploring Circus Circus, I decided to walk past the Reno Arch to see what I could find.  After all, the map indicated the Truckee River wasn't too far, and walking along the river is always nice and relaxing.  Plenty of fun things are found by the river, and reaching the Truckee Riverwalk, I was surprised with how elegant it was.  The river itself was perfect for its surroundings, desert-like but with plenty of water gushing through, with rocks visible indicating its dry area, but with plenty of buildings around, had a nice festive feel to it.  Along the riverwalk was a nice man-made waterfall and fountains showcasing the elegance of the area.  I was impressed.</p>";
    paragraph +="<p>I also found an open space with a beautiful sculpture that simply said 'Believe,' the type of uplifting message people really need these days.  Negativity and Fear are not acceptable mottos to me, and I will believe in the best.  That's what we live for.  I didn't spend too much time at the Truckee Riverwalk, but was impressed with its presentation.  I later returned in the afternoon for a better picture of the Believe sculpture, and though hotter, it was worth the walk.</p></div>";
    paragraph +="<div class='col-md-6 story'>";
    paragraph +="<h1>Facts about Truckee River and more...</h1>";
    paragraph +="<p>The Truckee River is the only outlet of Lake Tahoe, flowing 121 miles northeasterly to Pyramid Lake in Nevada</p>";
    paragraph +="<p>Truckee was the name of the Paiute Chief.</p>";
    paragraph +="<p>Whitney Peak Hotel, located next to the Reno Arch, features the world's tallest climbing wall constructed on the exterior of a building.</p></div></div></div>";
    document.getElementById("text").innerHTML = paragraph;
  
}

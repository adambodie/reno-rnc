function loadDoc14() {
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
  xmlhttp.open("GET", "json/salt-creek.json", true);
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

    var title = "<h1>Part 14: One Last Stop at Salt Creek Falls</h1>";
    document.getElementById("title").innerHTML = title;
    var paragraph = "<div class='container'><div class='row'>";
    paragraph +="<div class='col-md-6 story'>";
    paragraph +="<h1>My Story</h1>";
    paragraph +="<p>After leaving Klamath Falls, I had just one more stop to make, Salt Creek Falls, located near my 'favorite' town in Oregon, Oakridge.  Located on Salt Creek alongside the Willamette Pass on Highway 58.  At 286 feet tall, Salt Creek Falls is one of the taller accessible waterfalls in Oregon and upon seeing it, I was amazed by the depth of the falls.  I looked down the rail, seeing a wide and open area formed by the falls.  Not the place for someone afraid of heights to say the least, that's why God invented rails.  The views of the falls were impressive as was the creek way down the view.</p><p>I walked along the trail down to the falls, with a up-close view of the falls right in front of me.  With the falls front and center, I was impressed with the power and grace.  I couldn't quite reach down to the bottom due to a rock slide that had happened along the trail, but not wanting to be stupid, I turned around when it looked unsafe and came back up to my car, ready to get back home.</p><p>Remember how I told you I filled up my gas in Reno?  Usually, driving on the highway, I can get from 330-350 miles before the gas light comes on my car warning me of low gas.  Once I reached the magic number of 400 when I drove from Minneapolis to Paw Paw, Illinois on the way to Springfield, Illinois.  While driving on the way home, I was amazed with how much gas I had left in the tank considering the miles driving.  I started to wonder if I could make it to Eugene without the light coming on.  I drove past Oakridge, still confident I could get to Eugene without filling up, as the miles increased.  In the end, I managed to drive 439 miles before that light turned on.  A few miles after that, I got my car filled up with gas in Dexter, Oregon, just outside Eugene.  Impressive considering I've had my Barracuda for 11 years.</p><p>Once I filled up, I was ready to go home, surprisingly more refreshed when I was driving to Reno.  I had pizza waiting for me at home with Jenn.  When it was all said and done, after 1429 miles of driving, my trip was over, and I was home at last.</p></div>";
    paragraph +="<div class='col-md-6 story'>";
    paragraph +="<h1>Facts about Salt Creek Falls</h1>";
    paragraph +="<p></p>";
    paragraph +="<p></p>";
    paragraph +="<p></p></div></div></div>";
    document.getElementById("text").innerHTML = paragraph;
  
}

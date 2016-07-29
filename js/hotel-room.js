function loadDoc3() {
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
  xmlhttp.open("GET", "json/hotel-room.json", true);
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

    var title = "<h1>Part 3: I Made It To Reno!</h1>";
    document.getElementById("title").innerHTML = title;
    var paragraph = "<div class='container'><div class='row'>";
    paragraph +="<div class='col-md-6 story'>";
    paragraph +="<h1>My Story</h1>";
    paragraph +="<p>I finally reached Reno at around 6:00 pm, exhausted from the drive.  I got to the hotel and checked in, telling the hotel clerk on any room preference 'The higher the better.'  With that said, I headed up to my hotel room at the Sky Tower, Room 1676.  The room was big with a king sized bed, TV, bathroom and a great view dominated by the Circus Circus North Tower and surrounding area.  Suffice to say, I got great views at all times of the day; midday, sunrise, sunset, etc.  Lovely views at all times of the day.</p>";
    paragraph +="<p>I turned on the TV after I decided to crash for the night, and it brought up a message with my name on it.  After agreeing to the acknowledgment, the main screen, which also had my name, looked like a video game UI, with options to choose from.  I only needed the TV, so I watched TV.  The bathroom was also nice and spacious, but the light was above the mirror and made the shower dark when I was in there.  That was my biggest issue if I had one.</p>";
    paragraph +="<div class='col-md-6 story'>";
    paragraph +="<h1>Facts about Circus Circus</h1>";
    paragraph +="<p></p>";
    paragraph +="<p></p>";
    paragraph +="<p></p></div></div></div>";
    document.getElementById("text").innerHTML = paragraph;
  
}

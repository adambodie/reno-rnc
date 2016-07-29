function loadDoc9() {
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
  xmlhttp.open("GET", "json/inside-circus.json", true);
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

    var title = "<h1>Part 9: My Cave for the Trip: Circus Circus</h1>";
    document.getElementById("title").innerHTML = title;
    var paragraph = "<div class='container'><div class='row'>";
    paragraph +="<div class='col-md-6 story'>";
    paragraph +="<h1>My Story</h1>";
    paragraph +="<p>With all the driving I had done the past two days, I planned to do as little driving as possible, staying in Reno and seeing what was in town.  But first I did the exploring of Circus Circus itself.  I saw the slots, the games, the tram.  Now it was time to explore.</p>";
    paragraph +="<p>I walked around the casino with all the slots, blackjack and other poker games.  It all looked rather lame to me.  All these ridiculously outdated slot machines and people smoking and drinking (I saw a few drinking early in the morning, yikes!).  It seems childish to me.  I played one slot machine and took a picture just to say I did it once.  But I find gambling to be lame.</p>";
    paragraph +="<p>Once the arcade opened at 10, I walked around to see all the games they had.  Again, I found the games to be outdated and lame.  But I like games more than gambling.  It was just like being at the Carnival, but I'm not a child anymore, so I tried the crane game once and a round of ski-ball, but it's just not the same.  With that said and done, I decided the venture out.</p></div>";
    paragraph +="<div class='col-md-6 story'>";
    paragraph +="<h1>Facts about Circus Circus and More...</h1>";
    paragraph +="<p></p>";
    paragraph +="<p></p>";
    paragraph +="<p></p></div></div></div>";
    document.getElementById("text").innerHTML = paragraph;
  
}

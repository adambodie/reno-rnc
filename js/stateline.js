function loadDoc7() {
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
  xmlhttp.open("GET", "json/stateline.json", true);
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

    var title = "<h1>Part 7: In the Middle in Stateline</h1>";
    document.getElementById("title").innerHTML = title;
    var paragraph = "<div class='container'><div class='row'>";
    paragraph +="<div class='col-md-6 story'>";
    paragraph +="<h1>My Story</h1>";
    paragraph +="<p>At some point, I was going to cross into California, and that point became clear when I reached the town of Stateline, Nevada.  Clearly a border town, Stateline is Nevada's Tahoe resort town, with towering hotels dominating the view upon entering the town, four in total: Hard Rock, Harvey's, Harrah's and Montbleu, each with their own charm and character.  I walked around admiring the hotels, and eventually, I reached the California border, where the city of South Lake Tahoe is.</p><p>It's hard to determine where the exact border is, but I managed to get my picture at the California Border, crossed the street and got my picture are the Nevada Border on the other side.  It's cool to be able to walk across a border, and not have to worry about pointless walls or gushing rivers. When I was done walking across borders, I continued my Lake Tahoe trip, this part in California.</p></div>";
    paragraph +="<div class='col-md-6 story'>";
    paragraph +="<h1>Facts about Stateline</h1>";
    paragraph +="<p>Stateline has a population of 842; but booms during the summer and winter months thanks to the tourists visiting Lake Tahoe.</p>";
    paragraph +="<p>Stateline is popular for gambling; as many visiting from South Lake Tahoe and beyond in California coming to Stateline to gamble.</p>";
    paragraph +="<p>Though the Heavenly Village Resort is in South Lake Tahoe, California, it was on an intermediate ski slope in Stateline where Sonny Bono crashed into a tree and passed away.</p></div></div></div>";
    document.getElementById("text").innerHTML = paragraph;
  
}

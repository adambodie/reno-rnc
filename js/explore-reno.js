function loadDoc4() {
      $.get("explore-reno.html", function(data) {
  $("#carousel").html(data);
});  

    var title = "<h1>Part 4: Exploring Reno</h1>";
    document.getElementById("title").innerHTML = title;
    var paragraph = "<div class='container'><div class='row'>";
    paragraph +="<div class='col-md-6 story'>";
    paragraph +="<h1 class='cover-heading'>My Story</h1>";
    paragraph +="<p>Wanting to see some sights when I got there, despite being tired, I couldn't stop, so I walked around a few blocks from my hotel.  There are three hotels connected to one another as part of the Eldorado Resorts family, with Circus Circus being the northernmost hotel of the three.  The other two were Silver Legacy, which was easy to spot with its giant sphere, and the El Dorado, which looked the classiest of the three.  I could have easily walked the skyway from one end to another without going outside.  I didn't figure that out until Wednesday, but still helpful to avoid the heat and the weirdos.</p>";
    paragraph +="<p>The end of my first walk was to perhaps Reno's most iconic landmark, the Reno Arch.  I saw it first in the evening, a nice three block walk from the Circus Circus North Tower (which was closer to Virginia Street, where the Arch was located).  After struggling to get to sleep from the excitement, I returned at dark to get some nice pictures lit up at night.  It was there I wound up with a picture holding a bell.  So how did I wind up with a bell?</p>";
    paragraph += "<p>While taking a picture, I was approached by someone who asked me to hold the bell for a picture, something akin of a 'Where in the World has the Bell been' as part of some work joke.  I thought it was funny enough to ask for a picture of me holding the bell.  And so explains the oddest thing that happened to me in Reno.</p></div>";
    paragraph +="<div class='col-md-6 story'>";
    paragraph +="<h1 class='cover-heading'>>My Facts</h1>";
    paragraph +="<p>Reno's nickname is 'The Biggest Little City in the World,' as featured on the Reno Arch</p>";
    paragraph +="<p>Reno is the birthplace of Caesar's Entertainment</p>";
    paragraph +="<p>The Reno Arch was originally built in 1926 to commemorate the completion of the Lincoln and Victory Highways.</p>";
    paragraph +="<p>The current arch was completed in 1987; the original still stands on nearby Lake Street.</p>";
    paragraph +="<p>Silver Legacy Reno, completed in 1995, is the tallest building in Reno.</p>";
    paragraph +="<p>Eldorado Reno, completed in 1973, features a theatre and The Brew Brothers, the first microbrewery ever built in a casino.</p>";
    paragraph +="<p></p></div></div></div>";
    document.getElementById("text").innerHTML = paragraph;
  
}

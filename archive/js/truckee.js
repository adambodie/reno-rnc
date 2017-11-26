function loadDoc10() {
      $.get("truckee.html", function(data) {
  $("#carousel").html(data);
}); 

    var title = "<div class='jumbotron'><h1>Part 10: A Nice Trek to the Truckee River</h1></div>";
    document.getElementById("title").innerHTML = title;
    var paragraph = "<div class='container'><div class='row'>";
    paragraph +="<div class='col-md-6 story'>";
    paragraph +="<h1 class='story-heading'>My Story</h1>";
    paragraph +="<p>After exploring Circus Circus, I decided to walk past the Reno Arch to see what I could find.  After all, the map indicated the Truckee River wasn't too far, and walking along the river is always nice and relaxing.  Plenty of fun things are found by the river, and reaching the Truckee Riverwalk, I was surprised with how elegant it was.  The river itself was perfect for its surroundings, desert-like but with plenty of water flowing through, with rocks visible indicating its dry area, but with plenty of buildings around, had a nice festive feel to it.  I even saw a building with a giant Masons logo on it, that of course, made me think of Grandpa.  Along the riverwalk was a nice man-made waterfall and fountains showcasing the elegance of the area.  I was impressed and surprised.  An unexpected delight.</p>";
    paragraph +="<p>I also found an open space with a beautiful sculpture that simply said 'Believe,' the type of uplifting message people really need these days.  Negativity and Fear are not acceptable mottos to me, and I will believe in the best.  That's what we live for.  I didn't spend too much time at the Truckee Riverwalk, but was impressed with its presentation.  I later returned in the afternoon for a better picture of the Believe sculpture, and though hotter, it was worth the walk since it wasn't too far from the hotel.  By then, I had learned I could walk from Circus Circus to Eldorado without going outside.</p></div>";
    paragraph +="<div class='col-md-6 story'>";
    paragraph +="<h1 class='story-heading'>My Facts</h1>";
    paragraph +="<p>The Truckee River is the only outlet of Lake Tahoe, flowing 121 miles northeasterly to Pyramid Lake in Nevada.</p>";
    paragraph +="<p>Truckee was the name of the Paiute Chief.</p>";
    paragraph +="<p>Whitney Peak Hotel, located next to the Reno Arch, features the world's tallest climbing wall constructed on the exterior of a building.</p>";
    paragraph +="<p>Harrah's Reno opened in 1937 and was the first hotel from its original owner.  They have since merged with Ceasars Entertainment Corporation to become a big conglomerate of hotels.</p></div></div></div>";
    document.getElementById("text").innerHTML = paragraph;
  
}

function loadDoc8() {
      $.get("lake-tahoe-ca.html", function(data) {
  $("#carousel").html(data);
}); 

    var title = "<div class='jumbotron'><h1>Part 8: Lake Tahoe: The California Edition</h1></div>";
    document.getElementById("title").innerHTML = title;
    var paragraph = "<div class='container'><div class='row'>";
    paragraph +="<div class='col-md-6 story'>";
    paragraph +="<h1 class='story-heading'>My Story</h1>";
    paragraph +="<p>I left Stateline and quickly ended up in California in South Lake Tahoe.  It reminded me too much of a resort town, too much going on and not enough parking.  Not to mention the ridiculous gas prices.  But more on that later...</p>";
    paragraph += "<p>I found a place to eat a quick brunch lunch I took to go, Sprouts Cafe.  A nice charming place, busy but nice.  I grabbed some food and found another beach to stop at.  Another nice beach, this one in California, with a different viewpoint on the Southern end rather than the east end, the mountains west were more prominent.  I had my meal and continued driving around Lake Tahoe.  Eventually, I was much higher up and found a roadside view with great views of Lake Tahoe and beyond.  Truly magnificent.  Next up was Inspiration Point at Emerald Bay.  An amazing area with the mountains so prominent, and although the lake itself wasn't fully visible, the surrounding trees made it rather unique.  The cherry on top was Fanette Island, the only island in Lake Tahoe, making the views all the more unique.</p>";
    paragraph +="<p>I made it to the main viewpoint of Emerald Bay and was shocked by its amazing beauty, easily the best viewpoint I saw, the water was perfectly blue, the trees were perfectly green, and Fanette Island in the middle, with the contrast between the Bay and the rest of the Lake almost fjord-like. It was the perfect viewpoint to see.</p>";
    paragraph +="<p>It was about 2:00 and I had barely reached the SW end of Lake Tahoe.  My gas level was low and I needed to fill up.  Uncertain of gas for miles, I had a choice to make. Risk the gas and continue around Lake Tahoe, or turn around to the nearest gas back in South Lake Tahoe and go back to my hotel.  A younger me might not have cared as much, but with the Infamous Cape Girardeau incident in the books, I took a cue from Roger Murtaugh from Lethal Weapon and figured \"I'm too old for this shit.\" With that said, I turned around, satisfied with what I saw and made my way back to Reno.  Being tired didn't help either, but I got my gas, $2.79 a gallon; a better deal than the $3.30 a gallon I saw at most gas stations in town.  Quite the difference.</p>";
    paragraph +="<p>After getting back to my hotel room, I hung out at Circus Circus, had a Chimichanga and Margarita for dinner at the hotel, and crashed for the night.  Not too exciting, but I was satisfied with my day.  Now it was time for my 'Freestyle' Day.</p></div>";
    paragraph +="<div class='col-md-6 story'>";
    paragraph +="<h1 class='story-heading'>My Facts</h1>";
    paragraph +="<p>Mount Tallac, one of the most prominent peaks of the Sierra Nevada in view of Lake Tahoe, is 9,739 feet.</p>";
    paragraph +="<p>After a military dispute in 1864, Lake Tahoe was split up with the stateline running east of the approximate center and southeasterly towards the Colorado River.  Because of this, two-thirds of the Lake is part of California while the other one-third is part of Nevada.</p>";    
    paragraph +="<p>Fannette Island, the small island in Emerald Bay, is the only island found in Lake Tahoe.</p>";
    paragraph +="<p>Squaw Valley, just northwest of Lake Tahoe, was the home of the 1960 Winter Olympic Games.</p></div></div></div>";
    document.getElementById("text").innerHTML = paragraph;
  
}

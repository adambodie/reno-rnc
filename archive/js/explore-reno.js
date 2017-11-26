function loadDoc4() {
      $.get("explore-reno.html", function(data) {
  $("#carousel").html(data);
});  

    var title = "<div class='jumbotron'><h1>Part 4: Exploring Reno</h1></div>";
    document.getElementById("title").innerHTML = title;
    var paragraph = "<div class='container'><div class='row'>";
    paragraph +="<div class='col-md-6 story'>";
    paragraph +="<h1 class='story-heading'>My Story</h1>";
    paragraph +="<p>Wanting to see some sights once I arrived in Reno, despite being tired, I couldn't stop, so I walked around a few blocks from my hotel.  There are three hotels connected to one another as part of the Eldorado Resorts family, with Circus Circus being the northernmost hotel of the three.  The other two were Silver Legacy, which was easy to spot with its giant sphere, and the Elforado, which looked like the classiest of the three.  I could have easily walked the skyway from one end to another without going outside.  I didn't figure that out until Wednesday, but still helpful to avoid the heat and the weirdos.  My first impression of Silver Legacy and Eldorado was that Silver Legacy looked hip and Eldorado looked fancy.  The sun was setting so I saw some lights.  I was impressed.</p>";
    paragraph +="<p>The end of my first walk was to perhaps Reno's most iconic landmark, the Reno Arch.  It was neat to see, and definitely drew a crowd.  Of course, I first saw it while the sun was setting.  I obvious had to come back at some point.  After all, it was only three blocks away from my hotel.  Life can be pretty funny though...</p>";
    paragraph +="<p>It's true what they say: You don't travel just to sleep.  How could I?  I was in a fun new place, and I can't stop, won't stop.  That's always been my motto, though I have my limits.  After struggling to get to sleep from the excitement, I returned at dark to get some nice pictures of the hotels and the Reno Arch lit up at night.  The fun comes out at night, but also the creeps.  How do you know which one is which?  Sometimes, it's easier to notice than others.  With all that said, how did I wind up at the Reno Arch holding a bell?</p>";
    paragraph += "<p>While taking a picture, I was approached by a nice woman who asked me to hold the bell for a picture, something akin of a \"Where in the World is Carmen San Diego,\" but with a rotary bell as part of some work joke.  I can pick out the creeps but this lady wasn't a creep, so I listened to her admitted odd request.  Afterwards, I thought it was funny enough to ask for a picture of me holding the bell, a nice reminder of an odd yet Nugget-worthy story.  Life is full of adventures, sometimes you gotta trust your gut and I wound up with not the best picture but the funniest picture of me.  I headed back to my room afterwards and went to bed for the night.</p></div>";
    paragraph +="<div class='col-md-6 story'>";
    paragraph +="<h1 class='story-heading'>My Facts</h1>";
    paragraph +="<p>Reno's nickname is 'The Biggest Little City in the World,' as featured on the Reno Arch.</p>";
    paragraph +="<p>Reno is the birthplace of Caesar's Entertainment.</p>";
    paragraph +="<p>Reno is named after former Major General Jesse Lee Reno, a Union officer killed in the American Civil War at the Battle of South Mountain.</p>";    
    paragraph +="<p>The Reno Arch was originally built in 1926 to commemorate the completion of the Lincoln and Victory Highways.</p>";
    paragraph +="<p>The current arch was completed in 1987; the original still stands on nearby Lake Street.</p>";
    paragraph +="<p>Silver Legacy Reno, completed in 1995, is the tallest building in Reno.</p>";
    paragraph +="<p>Eldorado Reno, completed in 1973, features a theatre and The Brew Brothers, the first microbrewery ever built in a casino.</p>";
    paragraph +="<style type='text/css'>.easyhtml5video .eh5v_script{display:none}</style><div class='easyhtml5video' style='position:relative;max-width:1280px;'><video controls='controls' poster='videos/topsy-the-clown.jpg' style='width:100%' title='topsy-the-clown'>";
    paragraph +="<source src='videos/topsy-the-clown.m4v' type='video/mp4' />";
    paragraph +="<source src='videos/topsy-the-clown.webm' type='video/webm' />";
    paragraph +="<source src='videos/topsy-the-clown.ogv' type='video/ogg' />";
    paragraph +="</video><script src='videos/html5ext.js' type='text/javascript'></script></div></div></div>";
    document.getElementById("text").innerHTML = paragraph;
  
}

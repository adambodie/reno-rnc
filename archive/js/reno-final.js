function loadDoc11() {
      $.get("reno-final.html", function(data) {
  $("#carousel").html(data);
}); 

    var title = "<div class='jumbotron'><h1>Part 11: One More Time in Reno</h1></div>";
    document.getElementById("title").innerHTML = title;
    var paragraph = "<div class='container'><div class='row'>";
    paragraph +="<div class='col-md-6 story'>";
    paragraph +="<h1 class='story-heading'>My Story</h1>";
    paragraph +="<p>It was lunch time and I didn't want to eat at the hotel or neighboring hotels, so I sought fast food we don't get in Portland.  That led me to Fatburger in a shopping mall just north of downtown.  Sadly, it was closed for repairs, ruining an Ice Cube hip-hop reference from 'It Was A Good Day' in my show.  Fortunately, I had a backup plan (like everyone should in life).  That led me to Weinerschnitzel, where I enjoyed a Chili Dog and Fries.  I loooooooove Chili Dogs.  Now it was time to try some local beer.</p>";
    paragraph +="<p>I headed to Great Basin Brewing Company to enjoy one tasty yet not overly alcohol-packed beer, a Session beer I could have one and not notice a thing alcohol-wise.  I know my limit.  There I enjoyed a Cerveza Chilebeso, a pilsner-styled beer made with jalapenos.  It was well done, having a nice jalapeno taste without the jalapeno hotness.  As the nice bartender described it to me, they took the seeds out prior to brewing to give it that effect.  A tasty jalapeno-spiced beer, a style I don't see much but mostly like (as long as it's not hot for the sake of being hot.  I had a beer like that once and it was not fun to drink to say the least).  I also sampled two other beers while I was there, a Berliner Weissbier and a Witbier.  Gotta love them Weissbiers.  A nice way to spend the hour without walking too much.  Once I was done, I made my way back to the hotel.</p>";
    paragraph +="<p>There was one place first I wanted to see, the Atlantis Casino Resort Spa nearby.  It towered above the other buildings in the area and looked impressive, so I stopped there and walked inside for a few moments to check out their casinos.  Definitely a ritzy type of place.  I've never seen an escalator go to a small platform connected to another escalator.  That was neat looking.  I didn't need to spend too much time there, so I left and returned to Circus Circus, straight down Virginia Street.</p>";
    paragraph +="<p>After a little rest at my hotel room, I went to the last place I wanted to see nearby before I left, and that was the National Bowling Museum.  I could see the big ball from my window and had to see it up close.  I'm glad I did, it was pretty cool looking.  With that said, bowling brings out the worst in me when it comes to competition.  I don't know why.  Either way, I was done sightseeing in Reno.  I hung out at my room when I was back, even watching Earl's favorite, Jeopardy.  What a joy.</p>";
    paragraph +="<p>I had my last dinner at a seafood place called Pearl at the Silver Legacy.  Again, I didn't need to walk outside to get there.  I had some coconut prawns and a Sauvignon Blanc.  A tasty last meal in Reno, and not what I usually eat.  By the time I was done with dinner, which I ate early, I was done and read to get going and prepare for the long ride home.  It was convenient that I could check out of my room simply by going through instructions on my TV and drop the key in a dropbox on each floor.  Definitely convenient so I didn't have to walk all the way to the front entrance on the North Tower.  Pretty slick!</p></div>";
    paragraph +="<div class='col-md-6 story'>";
    paragraph +="<h1 class='story-heading'>My Facts</h1>";
    paragraph +="<p>The National Bowling Stadium is nicknamed 'The Taj Mahal of Tenpins,' and was built in 1995, featuring 80 bowling lanes.</p>";
    paragraph +="<p>The National Bowling Stadium took three years to build and is often used for bowling scenes in films.</p>";
    paragraph +="<p>The aluminum geodesic dome prominently featuring on the National Bowling Stadium is 80 feet tall.</p></div></div></div>";
    document.getElementById("text").innerHTML = paragraph;
  
}
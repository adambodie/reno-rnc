function loadDoc13() {
      $.get("klamath.html", function(data) {
  $("#carousel").html(data);
}); 
    var title = "<div class='jumbotron'><h1>Part 13: So I Finally Made it to Klamath Falls</h1></div>";
    document.getElementById("title").innerHTML = title;
    var paragraph = "<div class='container'><div class='row'>";
    paragraph +="<div class='col-md-6 story'>";
    paragraph +="<h1 class='story-heading'>My Story</h1>";
    paragraph +="<p>There aren't that many big towns between Reno and Eugene, so while taking the 'direct' route home, I had little to reference.  The one place I knew I would be able to stop for lunch was Klamath Falls, with a population of about 21,000, the biggest town along the way in between.  So I headed up to Klamath Falls after visiting the Lava Beds National Monument knowing two things: My Dad used to do business down at Klamath Falls and always spent the night while there, and now was the best time to stop in Klamath Falls to say I've been to Klamath Falls.  Enough to make my Dad proud I guess, but at least it's not Sunnyside, Washington.</p>";
    paragraph +="<p>After grabbing a quick lunch at McDonalds (boy it's been a long time) and a free drink at Dutch Bros., I briefly stopped at a park along Klamath Falls' Upper Klamath Lake, a rather nice and large lake with plenty of views.  There were a lot of seagulls flying around, I managed to get a picture of one in the act, which I thought was a pretty cool picture.  I didn't intend to spend much time in Klamath Falls, so after I was done walking, I headed north on US 97, where there were plenty of views of the lake alongside the highway.  Another construction zone allowed me to get a few pictures, but I really got happy when great views of Mt. McLoughlin showed up.  I love mountain views along a body of water, so I snapped a couple of pictures.  After I left the area, it was time for my last stop before heading home.</p></div>";
    paragraph +="<div class='col-md-6 story'>";
    paragraph +="<h1 class='story-heading'>My Facts</h1>";
    paragraph +="<p>Klamath Falls is home of Oregon Institute of Technology.</p>";
    paragraph +="<p>Klamath Falls was founded in 1867 and was originally named Linkville after the Link River whose falls the city sits on.  The named changed to its current name in 1893</p>";
    paragraph +="<p>Its native name is \u0294iWLaLLoon\u0294a, whose literal translation is 'is all along the top'</p>";
    paragraph +="<p>Upper Klamath Lake has the largest surface area of any fresh water lake in Oregon.</p>";    
    paragraph +="<p>Mt. McLoughlin, a part of the Cascades, is 9,499 feet</p>";
    paragraph +="<p>Mt. McLoughlin is named after John McLoughlin, a Chief Factor for the Hudson's Bay Company.  It has gone by other names, including Mount Pitt (after the Pit River), Big Butte, M'laiksini Yaina (Klamath), Malsi (Takelma), Mount Shasty (used for Mt. Shasta in 1841) and Snowy Butte.</p></div></div></div>";
    document.getElementById("text").innerHTML = paragraph;
}

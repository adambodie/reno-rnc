function loadDoc13() {
      $.get("klamath.html", function(data) {
  $("#carousel").html(data);
}); 
    var title = "<h1>Part 13: So I Finally Made it to Klamath Falls</h1>";
    document.getElementById("title").innerHTML = title;
    var paragraph = "<div class='container'><div class='row'>";
    paragraph +="<div class='col-md-6 story'>";
    paragraph +="<h1 class='cover-heading'>My Story</h1>";
    paragraph +="<p>There aren't that many big towns between Reno and Eugene, so while taking the 'direct' route home, I had little to reference.  The one place I knew I would be able to stop for lunch was Klamath Falls, with a population of about 21,000.  So I headed up to Klamath Falls after visiting the Lava Beds National Monument knowing two things: My Dad used to do business down at Klamath Falls and always spent the night while there, and now was the best time to stop in Klamath Falls to say I've been to Klamath Falls.</p><p>After grabbing a quick lunch and free Dutch Brothers, I briefly stopped at a park along Klamath Fall's Upper Klamath Lake, a rather nice and large lake with plenty of views.  There were a lot of seagulls flying around, I managed to get a picture of one in the act, which I liked.  I didn't intend to spend much time in Klamath Falls, so after I was done walking, I headed north on US 97, where there were plenty of views of the lake alongside the highway.  Another construction zone allowed me to get a few pictures, but I really got happy when great views of Mt. McLoughlin showed up.  I love mountain views along a body of water, so I snapped a couple of pictures.  After I left the area, it was time for my last stop: Salt Creek Falls</p></div>";
    paragraph +="<div class='col-md-6 story'>";
    paragraph +="<h1 class='cover-heading'>Facts about Klamath Falls</h1>";
    paragraph +="<p>Klamath Falls is home of Oregon Institute of Technology.</p>";
    paragraph +="<p>Klamath Falls was founded in 1867 and was originally named Linkville after the Link River whose falls the city sits on.  The named changed to its current name in 1893</p>";
    paragraph +="<p>Its native name is \u0294iWLaLLoon\u0294a, whose literal translation is 'is all along the top'</p></div></div></div>";
    document.getElementById("text").innerHTML = paragraph;
}

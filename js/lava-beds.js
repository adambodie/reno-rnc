function loadDoc12() {
      $.get("lava-beds.html", function(data) {
  $("#carousel").html(data);
}); 

    var title = "<h1>Part 12: Flowing Up to the Lava Beds</h1>";
    document.getElementById("title").innerHTML = title;
    var paragraph = "<div class='container'><div class='row'>";
    paragraph +="<div class='col-md-6 story'>";
    paragraph +="<h1 class='cover-heading'>My Story</h1>";
    paragraph +="<p>I left Reno, filling up on gas as I left to make sure I had enough gas to get through the forests.  I'm glad I did that, but more on that later.  I drove through Nevada, quickly reaching California before heading in and out the Modoc Forest.  Another national forest with nothing but trees, a great place to get away from civilization but not that pleasant to drive through.  I reached the town of Adin and saw Mt. Shasta in the distance, a nice surprise.  I then continued my way, through construction stops before reaching the exit for the Lava Beds National Monument.  It took longer than I wanted (thanks to multiple construction stops) but I finally made it to the Lava Beds National Monument around 10:45 am.  I didn't exactly know what I was in for, but I'm glad I visited.</p>";
    paragraph +="<p>The first thing that stood out to me at Lava Beds was the butte that stood out, Schonchin Butte.  Not the park's main feature, but still impressive nonetheless, it made the views better.  I found a viewpoint up the road and loved what I saw.  As I drove around Schonchin Butte, I began noticing the lava beds and reached Devil's Homestead, a large collection of Lava Beds that reminded me of Lava Butte near Bend, Oregon.  I always like places with the name Devil in it, and Devil's Homestead was no exception, a flat bed of black molten lava.  It diversified the area and brought back memories of Lava Butte, but different.</p>";
    paragraph +="<p>I wasn't done with the park, oddly just outside the northern entrance, and its name was Captain Jack's Stronghold, where I spent my only walk, leaving really impressed with the whole damn area.  So what is Captain Jack's Stronghold?  It was a fortress made of lava used by the Native Modoc Tribe during the Modoc War from 1892-1893.  I was really impressed with the trail as I was walking through it.  I could feel the significance of the fortress and how it was used.  It reminded me of my trip to Pipestone National Monument in Minnesota, where I peacefully walked through areas held strong by the Native Americans.  At the highlight of the trail was a viewpoint of the area, with Medicine Lake Volcano and Mt. Shasta commanding the view.</p>";
    paragraph +="<p>Another thing I noticed was all the white butterflies flying in the area.  When I got home, I was told that someone I once knew who recently passed away appearantly being reincarnated as white butterflies.  I don't know if that story is right, but it seemed fitting to say here.  Please correct me.  When I was done at Captain Jack's Stronghold, I was reach to leave and get to Klamath Falls, passing through Tule Lake.</p></div>";
    paragraph +="<div class='col-md-6 story'>";
    paragraph +="<h1 class='cover-heading'>My Facts</h1>";
    paragraph +="<p>Medicine Lake Volcano, though not the tallest mountain of the Cascades, has the largest total area of any mountain in Cascades.</p>";
    paragraph +="<p>Captain Jack's Stronghold is named after the chief of the Modoc tribe, Kintpuash, whose nickname was Captain Jack.</p>";
    paragraph +="<p>During the Modoc War from 1872-1873, the Modoc tribe used the lava beds to hold off US forces.</p>";
    paragraph +="<p>In the end, Kintpuash was captured and executed, becoming the only Native American ever to be charged with a war crime, for killing a U.S. General during a peace treaty, falsely believing the U.S. Troops would leave if their general was killed.</p>";
    paragraph +="<p>Schonchin Butte is named for another Modoc chief, Old Schonchin, who was their Chief in the late 19th Century.</p>";
    paragraph +="<p>Other prominent members of the Modoc War include Scarface Charley and Shaknasty Jim</p></div></div></div>";
    document.getElementById("text").innerHTML = paragraph;
  
}

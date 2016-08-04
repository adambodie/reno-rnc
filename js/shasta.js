function loadDoc1() {
$.get("shasta.html", function(data) {
  $("#carousel").html(data);
});
    var title = "<div class='jumbotron'><h1>Part 1: For the Love of Mt. Shasta</h1></div>";
    document.getElementById("title").innerHTML = title;
    var paragraph = "<div class='container'><div class='row'>";
    paragraph +="<div class='col-md-6 story'>";
    paragraph +="<h1 class='story-heading'>My Story</h1>";
    paragraph +="<p>The first thing anyone should know about Northern California is the prominence of Mt. Shasta in the area.  It's hard to miss the tall and up-close Mt. Shasta, which along with its sister cone, Shastina, makes it a sight for sore eyes.  It's hard not to look at Mt. Shasta while driving by.  Starting to show just at the Oregon border, after a brief stop at a nice rest stop with a view of the Klamath River, I saw a sign to a vista point and knew I needed to stop.  So I stopped at the Shasta Valley Vista Point and got my first major view of Mt. Shasta.  It was amazing to see, with little standing in its way.  After that, I made my first planned stop in the oddly named town of Yreka.</p>";
    paragraph +="<p>Coincidentally, I needed to fill up with gas, so the stop couldn't have been any more perfect, but I briefly walked around the historic mining part of town, along with the city entrance, so I continued my way from Yreka.  Another rest stop followed Yreka, which also served as a vista point as well, for now we were really close to Mt. Shasta.  It was pretty obvious I needed to stop for more pictures, and I did.  A few miles down the road was my next stop, the funniest named city in California: Weed.</p>";
    paragraph += "<p>I've never smoked Weed in my life, but it's funny to see all the humorous signs associated with the name.  The main entrance in town had the sign: 'Weed like to Welcome You.'  Again, Mt. Shasta was quite visible from Weed, which also played into the towns folklore.  Walking around for a few minutes, I decided to take a gander in The Weed Store, which has lots of souvenirs dedicated to the love of Weed... Weed, California that is.  I couldn't pass up a groovy hippy looking coffee mug, I bought myself some nice souvenirs, and continued my way.</p>";
    paragraph +="<p>Next stop was Mt. Shasta, the city which is named after the mountain itself.  Of course, there were plenty of views of Mt. Shasta, with a different angle showcasing both the main peak and its sister cone Shastina.  A nice charming little town, I stopped to have some lunch at a cafe named Wassayaks.  A funny named restaurant with charm, I had myself a bagel sandwich with a Cuban Espresso, complete with Whipped Cream and a dash of cayenne pepper on top.  Quite delicious.  It was a nice way to finish my first leg of the trip, as I needed to go southeast from Mt. Shasta and make my way to my next stop.</p></div>";
    paragraph +="<div class='col-md-6 story'>";
    paragraph +="<h1 class='story-heading'>My Facts</h1>";
    paragraph +="<p>At 14,179 feet, Mt. Shasta is the second tallest mountain of all the Cascades and fifth tallest in California.</p>";
    paragraph +="<p>Shastina, the satellite cone of Mt. Shasta, is 12,330 feet, which would be the fourth tallest peak in the Cascades if it was its own mountain.</p>";
    paragraph +="<p>Yreka is named from the native Shasta language meaning 'north mountain' or 'white mountain.'</p>";
    paragraph +="<p>Yreka Bakery is a palindrome that was mentioned in Mark Twain's autobiography, which some consider to be the actual source of the name Yreka.</p>";
    paragraph +="<p>Weed, California is not named after Marijuana but after the town's founder, Abner Weed, who founded a local lumber mill.</p>";
    paragraph +="<p>Black Butte (not the one in Oregon) is a parasitic cone of Mt. Shasta, standing at 6,334 feet.</p></div></div></div>";
    document.getElementById("text").innerHTML = paragraph;
  
}

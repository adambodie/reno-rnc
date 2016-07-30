function loadDoc5() {
    $.get("carson.html", function(data) {
  $("#carousel").html(data);
});

    var title = "<h1>Part 5: A Brief Stop at the Capitol</h1>";
    document.getElementById("title").innerHTML = title;
    var paragraph = "<div class='container'><div class='row'>";
    paragraph +="<div class='col-md-6 story'>";
    paragraph +="<h1 class='cover-heading'>My Story</h1>";
    paragraph +="<p>I woke up Tuesday rather tired but determined to have a wonderful day. After all. Who travels just to sleep?  I had specifically planned on Tuesday as my day at Lake Tahoe, an hour away from Reno, but first I made a stop as Carson City, the capital of Nevada.</p><p>As a Geography buff, I've always liked my state capitals, and enjoy seeing their Capitol Buildings.  Carson City marks my 10th State Capitol I've seen.  How does it compare to the others?  To me, the grounds appeared a lot more peaceful than the others I've seen.  Most of the Capitols I've seen are in big open spaces and command the surrounding area, but the Nevada State Capitol, with its surrounding trees, had a more intimate appearance than the others.  While it made taking pictures more difficult, I still found the area to be more calm and sentimental.  Once I was done, I left Carson City and headed towards Lake Tahoe.</p></div>";
    paragraph +="<div class='col-md-6 story'>";
    paragraph +="<h1 class='cover-heading'>My Facts</h1>";
    paragraph +="<p>Carson City is one of three cities outside of Virginia that is not in a county, with Baltimore and St. Louis the other two.  Virginia has 38 indpendent cities.</p>";
    paragraph +="<p>Carson City was once home of the Carson City Mint, which minted silver and gold coins in the 1800's for 15 years.</p></div></div></div>";
    document.getElementById("text").innerHTML = paragraph;
  
}

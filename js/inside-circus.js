function loadDoc9() {
    $.get("inside-circus.html", function(data) {
  $("#carousel").html(data);
});

    var title = "<h1>Part 9: My Cave for the Trip: Circus Circus</h1>";
    document.getElementById("title").innerHTML = title;
    var paragraph = "<div class='container'><div class='row'>";
    paragraph +="<div class='col-md-6 story'>";
    paragraph +="<h1 class='cover-heading'>My Story</h1>";
    paragraph +="<p>With all the driving I had done the past two days, I planned to do as little driving as possible, staying in Reno and seeing what was in town.  But first I did the exploring of Circus Circus itself.  I saw the slots, the games, the tram.  Now it was time to explore.</p>";
    paragraph +="<p>I walked around the casino with all the slots, blackjack and other poker games.  It all looked rather lame to me.  All these ridiculously outdated slot machines and people smoking and drinking (I saw a few drinking early in the morning, yikes!).  It seems childish to me.  I played one slot machine and took a picture just to say I did it once.  But I find gambling to be lame.</p>";
    paragraph +="<p>Once the arcade opened at 10, I walked around to see all the games they had.  Again, I found the games to be outdated and lame.  But I like games more than gambling.  It was just like being at the Carnival, but I'm not a child anymore, so I tried the crane game once and a round of ski-ball, but it's just not the same.  With that said and done, I decided the venture out.</p></div>";
    paragraph +="<div class='col-md-6 story'>";
    paragraph +="<h1 class='cover-heading'>My Facts</h1>";
    paragraph +="<p>Circus Circus Reno does not have a swimming pool.  Attempts to build one failed in 2008.  But with a sky bridge to next door Silver Legacy, pools are accessible there.</p>";
    paragraph +="<p>Circus Circus features free Circus shows.  I didn't get around to seeing one...</p></div></div></div>";
    document.getElementById("text").innerHTML = paragraph;
  
}

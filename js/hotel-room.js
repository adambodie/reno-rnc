function loadDoc3() {
    $.get("hotel-room.html", function(data) {
  $("#carousel").html(data);
});  
    var title = "<h1>Part 3: I Made It To Reno!</h1>";
    document.getElementById("title").innerHTML = title;
    var paragraph = "<div class='container'><div class='row'>";
    paragraph +="<div class='col-md-6 story'>";
    paragraph +="<h1 class='cover-heading'>My Story</h1>";
    paragraph +="<p>I finally reached Reno at around 6:00 pm, exhausted from the drive.  I got to the hotel and checked in, telling the hotel clerk on any room preference 'The higher the better.'  With that said, I headed up to my hotel room at the Sky Tower, Room 1676.  The room was big with a king sized bed, TV, bathroom and a great view dominated by the Circus Circus North Tower and surrounding area.  Suffice to say, I got great views at all times of the day; midday, sunrise, sunset, etc.  Lovely views at all times of the day.</p>";
    paragraph +="<p>I turned on the TV after I decided to crash for the night, and it brought up a message with my name on it.  After agreeing to the acknowledgment, the main screen, which also had my name, looked like a video game UI, with options to choose from.  I only needed the TV, so I watched TV.  The bathroom was also nice and spacious, but the light was above the mirror and made the shower dark when I was in there.  That was my biggest issue if I had one.</p></div>";
    paragraph +="<div class='col-md-6 story'>";
    paragraph +="<h1 class='cover-heading'>My Facts</h1>";
    paragraph +="<p>Circus Circus Reno opened on July 1, 1978, holding the second largest amount of rooms of Reno's downtown hotels (third overall)</p>";
    paragraph +="<p>There are 1620 rooms overall at Circus Circus</p>";
    paragraph +="<p>There are three towers, the North Tower, the Casino Tower and the Sky Tower (where I stayed at).</p>";
    paragraph +="<p>There are 27 floors overall at the Sky Tower, the tallest of the Circus Circus towers.</p></div></div></div>";
    document.getElementById("text").innerHTML = paragraph;
  
}

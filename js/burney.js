function loadDoc2() {
  $.get("burney.html", function(data) {
  $("#carousel").html(data);
});

    var title = "<h1>Part 2: A Hunka Hunka Burney Love and the Escape from the Lassen Forest</h1>";
    document.getElementById("title").innerHTML = title;
    var paragraph = "<div class='container'><div class='row'>";
    paragraph +="<div class='col-md-6 story'>";
    paragraph +="<h1 class='cover-heading'>My Story</h1>";
    paragraph +="<p>Shortly after Mt. Shasta (city), it was time for me to say goodbye to I-5, as I headed onto Highway 89, where two hours deep within the forests, I stopped at McArthur-Burney Falls Memorial State Park, home of Burney Falls, a waterfall which former President Theodore Roosevelt once called the 'Eighth Wonder of the World.'  It's no wonder Theodore Roosevelt, the most nature loving President ever, would make that distinction.  The falls were a lot bigger than I envisioned from the pictures I saw.  With all the parts of Burney Falls and easy access, I was really impressed with the photogenic views of Burney Falls, from the voluminous plunges to the small trickles.  It reminded me a lot of Panther Creek Falls in Washington, but a lot wider and easier access.  The walk along the trail was nice and relaxing.  Afterwards, it was time for me to go finish the most dreaded part of the trip there, the final leg where you just want to get there already.</p><p>Driving through the Lassen National Forest was like a typical trip through Central Oregon.  There was a brief stop at Hat Creek Overlook, where there were views of the mountains, including Lassen Peak and Mt. Shasta further away, but after that, it took all my energy just to get to Reno.  Going through the forest was no fun, but once I reached the city of Susanville, I knew it was only time before I would reach Reno.  I felt even more of the rush when I finally reached Nevada, conveniently at a place called Bordertown.  Finally, I reached Reno, relieved that I finally made it.</p></div>";
    paragraph +="<div class='col-md-6 story'>";
    paragraph +="<h1 class='cover-heading'>My Facts</h1>";
    paragraph +="<p>Burney Falls, located on Burney Creek, comes from underground springs above and at the falls, stands 129 feet high and has a constant flow, even in summer.</p>";
    paragraph +="<p>Theodore Roosevelt once described Burney Falls as 'The Eighth Wonder of the World.'  But I'm guessing Melania Trump would claim this quote as her own if she ever visited the falls.</p>";
    paragraph +="<p>McArthur-Burney Falls Memorial State Park is the second oldest state park in California, formed in the 1920s.</p>";
    paragraph +="<p>Burney Falls is named after pioneer Samuel Burney, who lived in the area in the 1850s.</p></div></div></div>";
    document.getElementById("text").innerHTML = paragraph;
  
}

function loadDoc2() {
  $.get("burney.html", function(data) {
  $("#carousel").html(data);
});

    var title = "<div class='jumbotron'><h1>Part 2: A Hunka Hunka Burney Love and the Escape from the Lassen Forest</h1></div>";
    document.getElementById("title").innerHTML = title;
    var paragraph = "<div class='container'><div class='row'>";
    paragraph +="<div class='col-md-6 story'>";
    paragraph +="<h1 class='story-heading'>My Story</h1>";
    paragraph +="<p>Shortly after Mt. Shasta (city), it was time for me to say goodbye to I-5, as I headed onto Highway 89, where two hours deep within the forests, I stopped at McArthur-Burney Falls Memorial State Park, home of Burney Falls, a waterfall which former President Theodore Roosevelt once called the 'Eighth Wonder of the World.'  It's no wonder Theodore Roosevelt, the most nature loving President ever, would make that distinction.  I kept think of Bernie Sanders and how he proclaimed \"The American people are sick and tired of hearing about her (Hillary's) damn emails!\" I love quoting that in his deep Jewish accent.  As for the falls were a lot bigger than I envisioned from the pictures I saw.  With all the parts of Burney Falls and easy access, I was really impressed with the photogenic views of Burney Falls, from the voluminous plunges to the small trickles.  It reminded me a lot of <a href='http://waterfall.bodiewebdesign.com/waterfalls/25'>Panther Creek Falls</a> in Washington, but a lot wider and easier access.  The walk along the trail was nice and relaxing, with the creek also beautiful as well.  Afterwards, it was time for me to go finish the most dreaded part of the trip, the final leg where you just want to get there already.</p>";
    paragraph +="<p>Driving through the Lassen National Forest was like a typical trip through Central Oregon.  There was a brief stop at Hat Creek Overlook, where there were views of the mountains, including Lassen Peak and Mt. Shasta further away, but after that, it took all my energy just to get to Reno.  Going through the forest was no fun, and I made sure I was following a convoy of cars just to be safe, but once I reached the city of Susanville, I was back in civilization and I knew it was only time before I would reach Reno.  I felt even more of the rush when I finally reached Nevada, conveniently at a place called Bordertown.  It was about 6:00 when I finally reached Reno, and I was extremely relieved.</p><img src='../img/burney-map.jpg' class='img-responsive'/></div>";
    paragraph +="<div class='col-md-6 story'>";
    paragraph +="<h1 class='story-heading'>My Facts</h1>";
    paragraph +="<p>Burney Falls, located on Burney Creek, comes from underground springs above and at the falls, stands 129 feet high and has a constant flow, even in summer.</p>";
    paragraph +="<p>Theodore Roosevelt once described Burney Falls as 'The Eighth Wonder of the World.'  But I'm guessing Melania Trump would claim this quote as her own if she ever visited the falls.</p>";
    paragraph +="<p>McArthur-Burney Falls Memorial State Park is the second oldest state park in California, formed in the 1920s.</p>";
    paragraph +="<p>Burney Falls is named after pioneer Samuel Burney, who lived in the area in the 1850s.</p>";
    paragraph +="<p>Lassen Peak, with an elevation of 10,457 feet, is the southernmost active volcano of the Cascades, and along with Mt. St. Helens, was the only volcano in the contiguous United States to erupt in the 20th Century (erupting in 1915).</p>";    
    paragraph +="<style type='text/css'>.easyhtml5video .eh5v_script{display:none}</style><div class='easyhtml5video' style='position:relative;max-width:1280px;'><video controls='controls' poster='videos/burney-video.jpg' style='width:100%' title='burney-video'>";
    paragraph +="<source src='videos/burney-video.m4v' type='video/mp4' />";
    paragraph +="<source src='videos/burney-video.webm' type='video/webm' />";
    paragraph +="<source src='videos/burney-video.ogv' type='video/ogg' />";
    paragraph +="</video><script src='videos/html5ext.js' type='text/javascript'></script></div></div></div>";
    document.getElementById("text").innerHTML = paragraph;
  
}

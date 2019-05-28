<template>
<div>
    <div id='title'>
		<my-title message="Part 12: Flowing Up to the Lava Beds"></my-title>
    </div>
<div class='container'>
	<my-slick :photos="photos"></my-slick>
	<div>
		<div class="story">
			<h1 class="story-heading">My Story</h1>
			<p>I left Reno, filling up on gas as I left to make sure I had enough gas to get through the forests. I'm glad I did that, but more on that later. I drove through Nevada, quickly reaching California before heading in and out the Modoc National Forest. Another national forest with nothing but trees, a great place to get away from civilization but not that pleasant to drive through. Just like Central Oregon to me, but slightly different (it's like saying everything tastes like chicken). I reached the town of Adin and saw Mt. Shasta in the distance, a nice surprise. I then continued my way, through construction stops before reaching the exit for the Lava Beds National Monument. It took longer than I wanted (thanks to multiple construction stops) but I finally made it to the Lava Beds National Monument around 10:45 am. I didn't exactly know what I was in for, but I'm glad I visited and was pleasantly surprised.</p>
			<p>The first thing that stood out to me at Lava Beds was the butte near the southern entrance, Schonchin Butte. Not the park's main feature, but still impressive nonetheless, it made the views better. I found a viewpoint up the road and loved what I saw. As I drove around Schonchin Butte, I began noticing the lava beds and reached Devil's Homestead, a large collection of lava flows that reminded me of Lava Butte near Bend, Oregon. I always like places with the name Devil in it, and Devil's Homestead was no exception, a flat bed of black molten lava. It diversified the area and brought back memories of Lava Butte, though obviously, slightly different.</p>
			<p>I wasn't done with the park, oddly just outside the northern entrance, and its name was Captain Jack's Stronghold, where I spent my only significant walk, leaving really impressed with the whole damn area. So what is Captain Jack's Stronghold? It was a fortress made of lava used by the Native Modoc Tribe during the Modoc War from 1892-1893. I was really impressed with the trail as I was walking through it. I could feel the significance of the fortress and how it was used, as if I was back in time. The experience reminded me of my trip to Pipestone National Monument in Minnesota, where I peacefully walked through areas held strong by the Native Americans. At the highlight of the trail was a viewpoint of the area, with Medicine Lake Volcano and Mt. Shasta commanding the view. I've always found Native American culture to be fascinating, and this was no different, especially the history behind the area and the war that was fought.</p>
			<p>Another thing I noticed was all the white butterflies flying in the area. When I got home, I was told that someone I once knew who recently passed away appearantly being reincarnated as white butterflies. I don't know if thatstory is right, but it seemed fitting to say here. Please correct me if I'm wrong Jenn. When I was done at Captain Jack's Stronghold, I was ready to leave and get to Klamath Falls, passing through Tule Lake first with some nice views of the lake and Mt. Shasta.</p>
		</div>
		<div class="story">
			<h1 class="story-heading">My Facts</h1>
			<p>Medicine Lake Volcano, though not the tallest mountain of the Cascades (7,921 feet), has the largest total area of any mountain in Cascades.</p>
			<p>Captain Jack's Stronghold is named after the chief of the Modoc tribe, Kintpuash, whose nickname was Captain Jack.</p>
			<p>The Lava Beds National Monument was the site of the Modoc War from 1872-1873, where the Modoc tribe used the lava beds, particularly the lava fortress now known as Captain Jack's Stronghold to hold off US forces.</p>
			<p>It was the only major Native American war in California and the only one to have a Major General killed. Kintpuash became the only Native American charged with a war crime for killing a Major General and was executed for his crimes.</p>
			<p>Schonchin Butte is named for another Modoc chief, Old Schonchin, who was their Chief in the late 19th Century.</p>
			<p>Other prominent members of the Modoc War include Scarface Charley and Shaknasty Jim.</p>
			<p>After the Modoc War, the tribe was banished to Indian Territory (now Oklahoma). Today, there are about 800 members of the Modoc Tribe, with about 600 living in Oregon and about 200 living in Oklahoma.</p>
			<my-video title="captain-jack-video"></my-video>
			<img src="https://s3-us-west-2.amazonaws.com/reno.bodiewebdesign.com/static/images/lava-beds-map.jpg" class="map">	
		</div>
	</div>
</div>
</div>
</template>

<script>

export default {
  name: 'LavaBeds',
  data () {
    return {
      photos: [
        { title: 'Eagle Lake', name: 'eagle-lake' },
        { title: 'Mt. Shasta from Adin', name: 'shasta-adin' },
        { title: 'Lava Beds National Monument', name: 'lava-beds1' },
        { title: 'Lava Beds National Monument', name: 'lava-beds2' },
        { title: 'Schonchin Butte', name: 'schonchin1' },
        { title: 'Schonchin Butte', name: 'schonchin2' },
        { title: 'Schonchin Butte', name: 'schonchin3' },
        { title: 'Adam at Schonchin Butte', name: 'adam-schonchin' },
        { title: 'Schonchin Butte', name: 'schonchin4' },
        { title: 'Lava Beds National Monument', name: 'lava-beds3' },
        { title: 'Lava Beds National Monument', name: 'lava-beds4' },
        { title: 'Lava Beds National Monument', name: 'lava-beds5' },
        { title: 'Lava Beds National Monument', name: 'lava-beds6' },
        { title: 'Lava Beds National Monument', name: 'lava-beds7' },
        { title: 'Lava Beds National Monument', name: 'lava-beds8' },
        { title: 'Lava Beds National Monument', name: 'lava-beds9' },
        { title: 'Lava Beds National Monument', name: 'lava-beds10' },
        { title: 'Lava Beds National Monument', name: 'lava-beds11' },
        { title: 'Lava Beds National Monument', name: 'lava-beds12' },
        { title: 'Devil\'s Homestead', name: 'devils-homestead1' },
        { title: 'Devil\'s Homestead', name: 'devils-homestead2' },
        { title: 'Adam at Devil\'s Homestead', name: 'adam-devils-homestead1' },
        { title: 'Devil\'s Homestead', name: 'devils-homestead3' },
        { title: 'Devil\'s Homestead', name: 'devils-homestead4' },
        { title: 'Devil\'s Homestead', name: 'devils-homestead5' },
        { title: 'Devil\'s Homestead', name: 'devils-homestead6' },
        { title: 'Adam at Devil\'s Homestead', name: 'adam-devils-homestead2' },
        { title: 'Devil\'s Homestead', name: 'devils-homestead7' },
        { title: 'Lava Beds National Monument', name: 'captain-jack1' },
        { title: 'Lava Beds National Monument', name: 'captain-jack2' },
        { title: 'Lava Beds National Monument', name: 'captain-jack3' },
        { title: 'Lava Beds National Monument', name: 'captain-jack4' },
        { title: 'Lava Beds National Monument', name: 'captain-jack5' },
        { title: 'Lava Beds National Monument', name: 'captain-jack6' },
        { title: 'Lava Beds National Monument', name: 'captain-jack7' },
        { title: 'Lava Beds National Monument', name: 'captain-jack8' },
        { title: 'Lava Beds National Monument', name: 'captain-jack9' },
        { title: 'Lava Beds National Monument', name: 'captain-jack10' },
        { title: 'Lava Beds National Monument', name: 'captain-jack11' },
        { title: 'Lava Beds National Monument', name: 'captain-jack12' },
        { title: 'Lava Beds National Monument', name: 'captain-jack13' },
        { title: 'Adam at Captain Jack\'s Stronghold', name: 'adam-captain-jack1' },
        { title: 'Adam at Captain Jack\'s Stronghold', name: 'adam-captain-jack2' },
        { title: 'Captain Jack\'s Stronghold', name: 'captain-jack14' },
        { title: 'Captain Jack\'s Stronghold', name: 'captain-jack15' },
        { title: 'Captain Jack\'s Stronghold', name: 'captain-jack16' },
        { title: 'Captain Jack\'s Stronghold', name: 'captain-jack17' },
        { title: 'Captain Jack\'s Stronghold', name: 'captain-jack18' },
        { title: 'Captain Jack\'s Stronghold', name: 'captain-jack19' },
        { title: 'Captain Jack\'s Stronghold', name: 'captain-jack20' },
        { title: 'Captain Jack\'s Stronghold', name: 'captain-jack21' },
        { title: 'Captain Jack\'s Stronghold', name: 'captain-jack22' },
        { title: 'Tule Lake', name: 'tule-lake' },
        { title: 'Mt. Shasta', name: 'shasta-tule-lake1' },
        { title: 'Mt. Shasta', name: 'shasta-tule-lake2' }
      ]
    }
  }
}
</script>


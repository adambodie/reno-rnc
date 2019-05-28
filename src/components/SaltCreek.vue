<template>
<div>
    <div id='title'>
		<my-title message="Part 14: One Last Stop at Salt Creek Falls"></my-title>
    </div>
<div class='container'>
	<my-slick :photos="photos"></my-slick>
	<div>
		<div class="story">
			<h1 class="story-heading">My Story</h1>
			<p>After leaving Klamath Falls, I had just one more stop to make, Salt Creek Falls, located near my 'favorite' town in Oregon; Oakridge. Located on Salt Creek alongside the Willamette Pass on Highway 58, I was amazed by the depth of the falls upon first seeing it. I looked down the rail, seeing a wide and open area formed by the falls. Not the place for someone afraid of heights to say the least, that's why God invented rails. The views of the falls were impressive as was the creek way down the view.</p>
			<p>I walked along the trail down to the falls, with a up-close view of the falls right in front of me. With the falls front and center, I was impressed with the power and grace. I couldn't quite reach down to the bottom due to a rock slide that had happened along the trail, but not wanting to be stupid, I turned around when it looked unsafe and came back up to my car, ready to get back home.</p>
			<p>Remember how I told you I filled up my gas in Reno? Usually, driving on the highway, I can get from 330-350 miles before the gas light comes on my car warning me of low gas. Once I reached the magic number of 400 when I drove from Minneapolis to Paw Paw, Illinois on the way to Springfield, Illinois. While driving on the way home, I was amazed with how much gas I had left in the tank considering the miles driving. I started to wonder if I could make it to Eugene without the light coming on. I drove past Oakridge, still confident I could get to Eugene without filling up, as the miles increased. I also made sure I drove the speed limit in Oakridge, it didn't look like it did that one time I stopped there 11 years ago. In the end, I managed to drive 439 miles before that light turned on. A few miles after that, I got my car filled up with gas in Dexter, Oregon, just outside Eugene. Impressive considering I've had my Barracuda for 11 years.</p>
			<p>Once I filled up, I was ready to go home, surprisingly more refreshed when I was driving to Reno. I had pizza waiting for me at home with Jenn. I've driven from Eugene to Portland hundreds of times, and I saw nothing new, which was fine with me. I just wanted to get home. When it was all said and done, after 1429 miles of driving, my trip was over, and I was home at last.</p>
		</div>
		<div class="story">
			<h1 class="story-heading">My Facts</h1>
			<p>Diamond Peak, a shield volcano, stands at 8,748 feet.</p>
			<p>Salt Creek Falls is 286 feet tall.</p>
			<p>The falls were formed by glaciers, which scoured the valley during the last Ice Age, which along with lava flows created the narflex-container canyon walls for an amazing waterfall.</p>
			<p>Salt Creek Falls is named after the salt springs along the banks of the creek itself that are used as licks by deer.</p>
			<img src="https://s3-us-west-2.amazonaws.com/reno.bodiewebdesign.com/static/images/salt-creek-map.jpg" class="map">
		</div>
	</div>
</div>
</div>
</template>

<script>

export default {
  name: 'SaltCreek',
  data () {
    return {
      photos: [
    { title: 'Diamond Peak', name: 'diamond' },
    { title: 'Salt Creek Falls', name: 'salt-creek1' },
    { title: 'Salt Creek Falls', name: 'salt-creek2' },
    { title: 'Salt Creek Falls', name: 'salt-creek3' },
    { title: 'Salt Creek Falls', name: 'salt-creek4' },
    { title: 'Adam at Salt Creek Falls', name: 'adam-salt-creek' },
    { title: 'Salt Creek Falls', name: 'salt-creek5' },
    { title: 'Salt Creek Falls', name: 'salt-creek6' },
    { title: 'Salt Creek Falls', name: 'salt-creek7' }
      ]
    }
  }
}
</script>


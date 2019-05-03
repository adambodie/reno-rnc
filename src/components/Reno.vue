<template>
<div>
    <div id='title'>
		<my-title message="Part 4: Exploring Reno"></my-title>
    </div>
<div class='container'>
    <my-slick :photos="photos"></my-slick>
	<div>
		<div class="story">
			<h1 class="story-heading">My Story</h1>
			<p>Wanting to see some sights once I arrived in Reno, despite being tired, I couldn't stop, so I walked around a few blocks from my hotel.  There are three hotels connected to one another as part of the Eldorado Resorts family, with Circus Circus being the northernmost hotel of the three.  The other two were Silver Legacy, which was easy to spot with its giant sphere, and the Elforado, which looked like the classiest of the three.  I could have easily walked the skyway from one end to another without going outside.  I didn't figure that out until Wednesday, but still helpful to avoid the heat and the weirdos.  My first impression of Silver Legacy and Eldorado was that Silver Legacy looked hip and Eldorado looked fancy.  The sun was setting so I saw some lights.  I was impressed.</p>
			<p>The end of my first walk was to perhaps Reno's most iconic landmark, the Reno Arch.  It was neat to see, and definitely drew a cflex-containerd.  Of course, I first saw it while the sun was setting.  I obvious had to come back at some point.  After all, it was only three blocks away from my hotel.  Life can be pretty funny though...</p>
			<p>It's true what they say: You don't travel just to sleep.  How could I?  I was in a fun new place, and I can't stop, won't stop.  That's always been my motto, though I have my limits.  After struggling to get to sleep from the excitement, I returned at dark to get some nice pictures of the hotels and the Reno Arch lit up at night.  The fun comes out at night, but also the creeps.  How do you know which one is which?  Sometimes, it's easier to notice than others.  With all that said, how did I wind up at the Reno Arch holding a bell?</p>
			<p>While taking a picture, I was approached by a nice woman who asked me to hold the bell for a picture, something akin of a "Where in the World is Carmen San Diego," but with a rotary bell as part of some work joke.  I can pick out the creeps but this lady wasn't a creep, so I listened to her admitted odd request.  Afterwards, I thought it was funny enough to ask for a picture of me holding the bell, a nice reminder of an odd yet Nugget-worthystory.  Life is full of adventures, sometimes you gotta trust your gut and I wound up with not the best picture but the funniest picture of me.  I headed back to my room afterwards and went to bed for the night.</p>
		</div>
		<div class="story">
			<h1 class="story-heading">My Facts</h1>
			<p>Reno's nickname is 'The Biggest Little City in the World,' as featured on the Reno Arch.</p><p>Reno is the birthplace of Caesar's Entertainment.</p>
			<p>Reno is named after former Major General Jesse Lee Reno, a Union officer killed in the American Civil War at the Battle of South Mountain.</p>
			<p>The Reno Arch was originally built in 1926 to commemorate the completion of the Lincoln and Victory Highways.</p>
			<p>The current arch was completed in 1987; the original still stands on nearby Lake Street.</p>
			<p>Silver Legacy Reno, completed in 1995, is the tallest building in Reno.</p>
			<p>Eldorado Reno, completed in 1973, features a theatre and The Brew Brothers, the first microbrewery ever built in a casino.</p>
			<my-video title="topsy-the-clown"></my-video>
		</div>
	</div>
</div>
</div>
</template>

<script>

export default {
  name: 'Reno',
  data () {
    return {
      photos: [
    { title: 'A View of Reno', name: 'reno1' },
    { title: 'Circus Circus', name: 'circus-circus1' },
    { title: 'El Dorado', name: 'el-dorado1' },
    { title: 'Reno Arch', name: 'reno-arch1' },
    { title: 'Reno Arch', name: 'reno-arch2' },
    { title: 'Adam at the Reno Arch', name: 'adam-reno-arch1' },
    { title: 'El Dorado', name: 'el-dorado2' },
    { title: 'Silver Legacy', name: 'silver-legacy1' },
    { title: 'Circus Circus Clown', name: 'circus-circus2' },
    { title: 'Silver Legacy', name: 'silver-legacy2' },
    { title: 'Circus Circus', name: 'circus-circus3' },
    { title: 'Silver Legacy', name: 'silver-legacy3' },
    { title: 'Silver Legacy', name: 'silver-legacy4' },
    { title: 'Circus Circus Clown', name: 'circus-circus4' },
    { title: 'Silver Legacy', name: 'silver-legacy5' },
    { title: 'Reno Arch', name: 'reno-arch3' },
    { title: 'Reno Arch', name: 'reno-arch4' },
    { title: 'Adam returns to the Reno Arch', name: 'adam-reno-arch2' },
    { title: 'Adam with the Mystery Bell at the Reno Arch', name: 'adam-reno-arch3' },
    { title: 'Reno Arch', name: 'reno-arch5' },
    { title: 'El Dorado', name: 'el-dorado3' },
    { title: 'Circus Circus', name: 'circus-circus5' },
    { title: 'Another view of Reno', name: 'reno-view1' },
    { title: 'Another view of Reno', name: 'reno-view2' },
    { title: 'Circus Circus', name: 'circus-circus6' },
    { title: 'Tram', name: 'tram1' },
    { title: 'Tram', name: 'tram2' },
    { title: 'Tram', name: 'tram3' },
    { title: 'Circus Circus Clown', name: 'circus-circus7' },
    { title: 'Silver Legacy', name: 'silver-legacy6' },
    { title: 'Silver Legacy', name: 'silver-legacy7' },
    { title: 'El Dorado', name: 'el-dorado4' },
    { title: 'El Dorado', name: 'el-dorado5' },
    { title: 'Reno Arch', name: 'reno-arch6' },
    { title: 'One more time at the Reno Arch', name: 'adam-reno-arch4' },
    { title: 'El Dorado', name: 'el-dorado6' },
    { title: 'Silver Legacy', name: 'silver-legacy8' },
    { title: 'Adam on the Tram', name: 'adam-tram' },
    { title: 'Tram', name: 'tram4' },
    { title: 'Silver Legacy', name: 'silver-legacy9' },
    { title: 'Silver Legacy', name: 'silver-legacy10' },
    { title: 'El Dorado', name: 'el-dorado7' },
    { title: 'El Dorado', name: 'el-dorado8' },
    { title: 'El Dorado', name: 'el-dorado9' }
      ]
    }
  }
}
</script>


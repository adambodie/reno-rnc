<template>
<div>
    <div id='title'>
		<my-title message="Part 13: So I Finally Made it to Klamath Falls"></my-title>
    </div>
<div class='container'>
    <slick ref="slick" :options="slickOptions" class='carousel-class'>
		<div v-for="photo in photos" :key="photo.index">
			<div>
				<img :src="'./src/assets/images/' + photo.name + '.jpg'">
				<h2>{{photo.title}}</h2>
			</div>
		</div>       
	</slick>
	<div>
		<div class="story">
			<h1 class="story-heading">My Story</h1>
			<p>There aren't that many big towns between Reno and Eugene, so while taking the 'direct' route home, I had little to reference. The one place I knew I would be able to stop for lunch was Klamath Falls, with a population of about 21,000, the biggest town along the way in between. So I headed up to Klamath Falls after visiting the Lava Beds National Monument knowing two things: My Dad used to do business down at Klamath Falls and always spent the night while there, and now was the best time to stop in Klamath Falls to say I've been to Klamath Falls. Enough to make my Dad proud I guess, but at least it's not Sunnyside, Washington.</p>
			<p>After grabbing a quick lunch at McDonalds (boy it's been a long time) and a free drink at Dutch Bros., I briefly stopped at a park along Klamath Falls' Upper Klamath Lake, a rather nice and large lake with plenty of views. There were a lot of seagulls flying around, I managed to get a picture of one in the act, which I thought was a pretty cool picture. I didn't intend to spend much time in Klamath Falls, so after I was done walking, I headed north on US 97, where there were plenty of views of the lake alongside the highway. Another construction zone allowed me to get a few pictures, but I really got happy when great views of Mt. McLoughlin showed up. I love mountain views along a body of water, so I snapped a couple of pictures. After I left the area, it was time for my last stop before heading home.</p>
		</div>
		<div class="story">
			<h1 class="story-heading">My Facts</h1>
			<p>Klamath Falls is home of Oregon Institute of Technology.</p>
			<p>Klamath Falls was founded in 1867 and was originally named Linkville after the Link River whose falls the city sits on. The named changed to its current name in 1893</p>
			<p>Its native name is ʔiWLaLLoonʔa, whose literal translation is 'is all along the top'</p>
			<p>Upper Klamath Lake has the largest surface area of any fresh water lake in Oregon.</p>
			<p>Mt. McLoughlin, a part of the Cascades, is 9,499 feet</p>
			<p>Mt. McLoughlin is named after John McLoughlin, a Chief Factor for the Hudson's Bay Company. It has gone by other names, including Mount Pitt (after the Pit River), Big Butte, M'laiksini Yaina (Klamath), Malsi (Takelma), Mount Shasty (used for Mt. Shasta in 1841) and Snowy Butte.</p>
		</div>
	</div>
</div>
</div>
</template>

<script>
import Slick from 'vue-slick'

export default {
  name: 'Klamath',
  components: { Slick },
  data () {
    return {
      slickOptions: {
        dots: false,
        infinite: true,
        speed: 1000,
        fade: true,
        cssEase: 'linear'
      },
      photos: [
    { title: 'Seagull flying above Upper Klamath Lake', name: 'klamath3' },
    { title: 'Adam at Upper Klamath Lake', name: 'adam-klamath' },
    { title: 'Upper Klamath Lake', name: 'klamath2' },
    { title: 'Upper Klamath Lake', name: 'klamath1' },
    { title: 'Mt. McLoughlin', name: 'mcloughlin1' },
    { title: 'Mt. McLoughlin', name: 'mcloughlin2' }
      ]
    }
  },
  methods: {
    next () {
      this.$refs.slick.next()
    },
    prev () {
      this.$refs.slick.prev()
    },
    reInit () {
      this.$refs.slick.reSlick()
    }
  }
}
</script>


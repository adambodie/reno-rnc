<template>
<div>
    <div id='title'>
		<my-title message="Part 6: Lake Tahoe: The Nevada Edition"></my-title>
    </div>
<div class='container'>
    <slick ref="slick" :options="slickOptions" class='carousel-class'>
		<div v-for="photo in photos" :key="photo.index">
			<div>
				<h2>{{photo.title}}</h2>
                <img :src="'./src/assets/images/' + photo.name + '.jpg'" class='img-responsive'>
			</div>
		</div>       
	</slick>
	<div class="row">
		<div class="col-md-6 story">
			<h1 class="story-heading">My Story</h1>
			<p>As I left Carson City, I headed up into the mountains and made my way to Lake Tahoe. I knew Lake Tahoe had a high elevation, but I didn't know it was as high as 7,000 feet above sea level. I was amazed by the elevation. After about half an hour of going up and down the mountains, I reached my first viewpoint of Lake Tahoe, Logan Shoals Vista Point. It was an amazing view. The water is just so damn blue, and the mountains surrounding it were just so damn perfect with just the right amount of snow for summer. Similar to Crater Lake, but more of an actual lake instead of a caldera lake like Crater Lake. The mountains in the background were also magnificent, and it made the viewpoint all the more impressive, especially on a nice and clear day. To say the least, I was in for a treat.</p>
			<p>I continued my way down the highway and found a beach to stop at. A nice beach with plenty of people playing and relaxing. A different feeling from the high up viewpoints, something that Crater Lake doesn't have. I didn't spend too much time at the beach but I still enjoyed the experience of watching those in the Lake having fun. A few miles down the road was California, but I had another stop to make in between.</p>
		</div>
		<div class="col-md-6 story">
			<h1 class="story-heading">My Facts</h1>
			<p>Lake Tahoe has a surface elevation of 6,225 feet.</p>
			<p>Lake Tahoe is the largest alpine lake in North America and the second deepest lake in North America behind Crater Lake.</p>
			<p>Lake Tahoe is the largest lake by volume in the United States outside the Great Lakes.</p>
			<p>Tahoe gets its name from a Native Washo tribe word "dá'aw," meaning "The Lake."</p>
			<img src="/src/assets/images/reno-tahoe-map.jpg" class="img-responsive">
		</div>
	</div>
</div>
</div>
</template>

<script>
import Slick from 'vue-slick'

export default {
  name: 'LakeTahoeNV',
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
    { title: 'Lake Tahoe from Logan Shoals', name: 'lake-tahoe1' },
    { title: 'Lake Tahoe from Logan Shoals', name: 'lake-tahoe2' },
    { title: 'Lake Tahoe from Logan Shoals', name: 'lake-tahoe3' },
    { title: 'Lake Tahoe from Logan Shoals', name: 'lake-tahoe4' },
    { title: 'Lake Tahoe from Logan Shoals', name: 'lake-tahoe5' },
    { title: 'Adam at Logan Shoals', name: 'adam-lake-tahoe1' },
    { title: 'Lake Tahoe from Logan Shoals', name: 'lake-tahoe6' },
    { title: 'Lake Tahoe from Zephyr Cove', name: 'lake-tahoe7' },
    { title: 'Lake Tahoe from Zephyr Cove', name: 'lake-tahoe8' },
    { title: 'Accidental Selfie at Zephyr Cove', name: 'adam-lake-tahoe2' },
    { title: 'Adam at at Zephyr Cove', name: 'adam-lake-tahoe3' },
    { title: 'Lake Tahoe from Zephyr Cove', name: 'lake-tahoe9' },
    { title: 'Lake Tahoe from Zephyr Cove', name: 'lake-tahoe10' },
    { title: 'Lake Tahoe from Zephyr Cove', name: 'lake-tahoe11' }
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

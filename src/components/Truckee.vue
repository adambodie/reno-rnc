<template>
<div>
    <div id='title'>
		<my-title message="Part: 10: A Nice Trek to the Truckee River"></my-title>
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
			<p>After exploring Circus Circus, I decided to walk past the Reno Arch to see what I could find. After all, the map indicated the Truckee River wasn't too far, and walking along the river is always nice and relaxing. Plenty of fun things are found by the river, and reaching the Truckee Riverwalk, I was surprised with how elegant it was. The river itself was perfect for its surroundings, desert-like but with plenty of water flowing through, with rocks visible indicating its dry area, but with plenty of buildings around, had a nice festive feel to it. I even saw a building with a giant Masons logo on it, that of course, made me think of Grandpa. Along the riverwalk was a nice man-made waterfall and fountains showcasing the elegance of the area. I was impressed and surprised. An unexpected delight.</p>
			<p>I also found an open space with a beautiful sculpture that simply said 'Believe,' the type of uplifting message people really need these days. Negativity and Fear are not acceptable mottos to me, and I will believe in the best. That's what we live for. I didn't spend too much time at the Truckee Riverwalk, but was impressed with its presentation. I later returned in the afternoon for a better picture of the Believe sculpture, and though hotter, it was worth the walk since it wasn't too far from the hotel. By then, I had learned I could walk from Circus Circus to Eldorado without going outside.</p>
		</div>
		<div class="story">
			<h1 class="story-heading">My Facts</h1>
			<p>The Truckee River is the only outlet of Lake Tahoe, flowing 121 miles northeasterly to Pyramid Lake in Nevada.</p>
			<p>Truckee was the name of the Paiute Chief.</p>
			<p>Whitney Peak Hotel, located next to the Reno Arch, features the world's tallest climbing wall constructed on the exterior of a building.</p>
			<p>Harrah's Reno opened in 1937 and was the first hotel from its original owner. They have since merged with Ceasars Entertainment Corporation to become a big conglomerate of hotels.</p>
		</div>
	</div>
</div>
</div>
</template>

<script>
import Slick from 'vue-slick'

export default {
  name: 'Truckee',
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
    { title: 'Whitney Peak', name: 'whitney-peak1' },
    { title: 'Whitney Peak', name: 'whitney-peak2' },
    { title: 'Jack Daniels', name: 'jack-daniels' },
    { title: 'Truckee Riverwalk', name: 'truckee1' },
    { title: 'Truckee Riverwalk', name: 'truckee2' },
    { title: 'Truckee Riverwalk', name: 'truckee3' },
    { title: 'Truckee Riverwalk', name: 'truckee4' },
    { title: 'Truckee Riverwalk', name: 'truckee5' },
    { title: 'Truckee Riverwalk', name: 'truckee6' },
    { title: 'Adam at Truckee Riverwalk', name: 'adam-truckee1' },
    { title: 'Truckee Riverwalk', name: 'truckee7' },
    { title: 'Truckee Riverwalk', name: 'truckee8' },
    { title: 'Truckee Riverwalk', name: 'truckee9' },
    { title: 'Truckee Riverwalk', name: 'truckee10' },
    { title: 'Adam at Truckee Riverwalk', name: 'adam-truckee2' },
    { title: 'Truckee Riverwalk', name: 'truckee11' },
    { title: 'Washoe County Courthouse', name: 'washoe-county-courthouse' },
    { title: 'Pioneer Center', name: 'pioneer-center' },
    { title: 'Harrah’s', name: 'harrah' },
    { title: 'Truckee Riverwalk', name: 'truckee12' },
    { title: 'Adam at Truckee Riverwalk', name: 'adam-truckee3' }
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


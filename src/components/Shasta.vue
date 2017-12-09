<template>
<div>
<div class='container'>
    <slick ref="slick" :options="slickOptions" class='carousel-class'>
		<div v-for="photo in photos" :key="photo.index">
			<div>
				<img :src="'./src/assets/images/' + photo.name + '.jpg'">
				<h2>{{photo.title}}</h2>
			</div>
		</div>       
	</slick>
	<div id='title'>
		<my-title message="Part 1: For the Love of Shasta"></my-title>
    </div>
	<div>
		<div class="story">
			<h1 class="story-heading">My Story</h1>
			<p>The first thing anyone should know about Northern California is the prominence of Mt. Shasta in the area.  It's hard to miss the tall and up-close Mt. Shasta, and its sister cone, Shastina, making it difficult not to look at.  Mt. Shasta started to show just south of the Oregon border when the clouds started to disappeared.  After a brief stop at a nice rest stop with a view of the Klamath River, I saw a sign to a vista point and knew I needed to stop.  So I stopped at the Shasta Valley Vista Point and got my first major view of Mt. Shasta.  It was amazing to see, with little standing in its way.  The whole area was great to see, along with Black Butte in the distance, another nice mountain (not the one in Oregon).  After that, I made my first planned stop in the oddly named town of Yreka.</p>
			<p>Coincidentally, I needed to fill up with gas, so the stop couldn't have been any more perfect, but I briefly walked around the historic mining part of town, along with the city entrance, so I continued my way from Yreka.  Another rest stop followed Yreka, which also served as a vista point as well, for now we were really close to Mt. Shasta.  It was pretty obvious I needed to stop for more pictures, and I did.  A few miles down the road was my next stop, the funniest named city in California: Weed.</p>
			<p>I've never smoked Weed in my life, but it's funny to see all the humorous signs associated with the name.  The main entrance in town had the sign: "Weed like to Welcome You."  Again, Mt. Shasta was quite visible from Weed, which also played into the towns folklore.  Walking around for a few minutes, I decided to take a gander in The Weed Store, which has lots of souvenirs dedicated to the love of Weed... Weed, California that is.  I couldn't pass up a groovy hippy looking coffee mug, so I bought it and continued my way.</p>
			<p>Next stop was Mt. Shasta, a city which is named after the mountain itself.  Of course, there were plenty of views of Mt. Shasta, with a different angle showcasing both the main peak and its sister cone Shastina.  A nice charming little town, I first stopped as Shastice Park, a nice little park with amazing views of Shasta.  I stopped to have some lunch at a cafe named Wassayaks.  A funny named restaurant with charm, I had myself a bagel sandwich with a Cuban Espresso, complete with Whipped Cream and a dash of cayenne pepper on top.  Quite delicious.  It was a nice way to finish my first leg of the trip, as I needed to go southeast from Mt. Shasta and make my way to my next stop.</p>
		</div>
		<div class="story">
			<h1 class="story-heading">My Facts</h1>
			<p>At 14,179 feet, Mt. Shasta is the second tallest mountain of all the Cascades and fifth tallest in California.</p>
			<p>Shastina, the satellite cone of Mt. Shasta, is 12,330 feet, which would be the fourth tallest peak in the Cascades if it was its own mountain.</p>
			<p>Yreka is named from the native Shasta language meaning 'north mountain' or 'white mountain.'</p>
			<p>Yreka Bakery is a palindrome that was mentioned in Mark Twain's autobiography, which some consider to be the actual source of the name Yreka.</p>
			<p>Weed, California is not named after Marijuana but after the town's founder, Abner Weed, who founded a local lumber mill.</p>
			<p>Black Butte (not the one in Oregon) is a parasitic cone of Mt. Shasta, standing at 6,334 feet.</p>
		</div>
	</div>
</div>
</div>
</template>

<script>
import Slick from 'vue-slick'

export default {
  name: 'Shasta',
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
        { title: 'Adam at Klamath River', name: 'adam-klamath-river' },
        { title: 'Klamath River', name: 'klamath-river' },
        { title: 'Shasta Valley Vista Point', name: 'shasta-valley1' },
        { title: 'Shasta Valley Vista Point', name: 'shasta-valley2' },
        { title: 'Shasta Valley Vista Point', name: 'shasta-valley3' },
        { title: 'Yreka', name: 'yreka' },
        { title: 'Adam at Yreka', name: 'adam-yreka' },
        { title: 'Mt. Shasta', name: 'shasta-weed-rest' },
        { title: 'Weed Rest Area', name: 'weed-rest1' },
        { title: 'Weed Rest Area', name: 'weed-rest2' },
        { title: 'Weed, California', name: 'weed1' },
        { title: 'Mt. Shasta from Weed', name: 'weed2' },
        { title: 'Weed Like to Welcome You', name: 'weed3' },
        { title: 'Enjoy the Weed Shack', name: 'enjoy-weed-shack' },
        { title: 'The Weed Store', name: 'weed-store1' },
        { title: 'The Weed Store', name: 'weed-store2' },
        { title: 'Adam at The Weed Store', name: 'adam-weed-store' },
        { title: 'Adam at Shasta Valley Vista Point', name: 'adam-shasta-valley' },
        { title: 'Adam at West Rest Area', name: 'adam-weed-rest1' },
        { title: 'Adam at West Rest Area', name: 'adam-weed-rest2' },
        { title: 'Adam at West Rest Area', name: 'adam-weed-rest3' },
        { title: 'Mt. Shasta', name: 'shasta-city1' },
        { title: 'Mt. Shasta', name: 'shasta-city2' },
        { title: 'Mt. Shasta', name: 'shasta-city3' },
        { title: 'Adam at Mt. Shasta', name: 'adam-shasta-city' },
        { title: 'Black Butte', name: 'black-butte1' },
        { title: 'Wassayaks', name: 'wassayaks' },
        { title: 'Adam at Wassayaks', name: 'adam-wassayaks' },
        { title: 'Black Butte', name: 'black-butte2' }
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


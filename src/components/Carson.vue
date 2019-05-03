<template>
<div>
    <div id='title'>
		<my-title message="Part 5: A Brief Stop at the Capitol"></my-title>
    </div>
<div class='container'>
    <my-slick :photos="photos"></my-slick>
	<div>
		<div class="story">
			<h1 class="story-heading">My Story</h1>
			<p>I woke up Tuesday rather tired but determined to have a wonderful day. After all. Who travels just to sleep? I had specifically planned on Tuesday as my day to go to Lake Tahoe, an hour away from Reno, but first I made a stop as Carson City, the capital of Nevada, located conveniently halfway between Reno and Lake Tahoe.</p>
			<p>As a Geography buff, I've always liked my state capitals, and enjoy seeing their Capitol Buildings. Carson City marks my 10th State Capitol I've seen, along with Salem, Olympia, St. Paul, Madison, Springfield, Des Moines, Nashville, Denver and Boston. How does it compare to the others? To me, the grounds appeared a lot more peaceful than the others I've seen. Most of the Capitols I've seen are in big open spaces and command the surrounding area, but the Nevada State Capitol, with its surrounding trees, had a more intimate appearance than the others. While it made taking pictures more difficult, I still found the area to be more calm and sentimental. A passerby took a picture of me sitting on the steps. I also found the parking spot of Governor Brian Sandoval and the Lieutenant Governor, who happened to pull up as I walked by the parking spots. Otherwise I would've taken a picture. Once I was done, I left Carson City and headed towards Lake Tahoe. I didn't need to spend too much time in Carson City.</p>
		</div>
		<div class="story">
			<h1 class="story-heading">My Facts</h1>
			<p>Carson City is one of three cities outside of Virginia that is not in a county, with Baltimore and St. Louis the other two. Virginia has 38 indpendent cities.</p>
			<p>Carson City was once home of the Carson City Mint, which minted silver and gold coins in the 1800's for 15 years.</p>
			<p>Carson City has a population of about 53,000 and is named after Kit Carson, a mountain man who explored the area.</p>
			<p>Carson City was originally a stop for those headed to California during the Gold Rush of 1849, but after the discovery of The Comstock Lode, silver ore located nearby (the earliest silver ore found in the United States), people started to settle in what is now Nevada's capital.</p>
		</div>
	</div>
</div>
</div>
</template>

<script>
import Slick from 'vue-slick'

export default {
  name: 'Carson',
  components: { Slick },
  data () {
    return {
      photos: [
    { title: 'Nevada State Capitol', name: 'carsoncity1' },
    { title: 'Nevada State Capitol', name: 'carsoncity2' },
    { title: 'Nevada State Capitol', name: 'adam-carsoncity' },
    { title: 'Nevada State Capitol', name: 'carsoncity3' },
    { title: 'Nevada State Capitol', name: 'carsoncity4' },
    { title: 'Nevada State Capitol', name: 'carsoncity5' }
      ]
    }
  }
}
</script>


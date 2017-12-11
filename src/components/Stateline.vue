<template>
<div>
    <div id='title'>
		<my-title message="Part 7: In the Middle in Stateline "></my-title>
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
			<p>At some point, I was going to cross into California, and that point became clear when I reached the town of Stateline, Nevada. Clearly a border town, Stateline is Nevada's Tahoe resort town, with towering hotels dominating the view upon entering the town, four in total: Hard Rock, Harvey's, Harrah's and Montbleu, each with their own charm and character. Of course, they're known for gambling, something you just can't do in California. I didn't go inside, but I know their purpose. I walked around admiring the hotels, and eventually, I reached the California border, where the city of South Lake Tahoe is.</p>
			<p>It's hard to determine where the exact border is, but I managed to get my picture at the sign that said "California State Line," crossed the street and got my picture at the sign that said "Nevada State Line" on the other side. It's cool to be able to walk across a border, and not have to worry about pointless walls or gushing rivers. When I was done walking across borders, I continued my Lake Tahoe trip, heading back to my car in Nevada, before driving across the border into California.</p>
		</div>
		<div class="story">
			<h1 class="story-heading">My Facts</h1>
			<p>Stateline has a population of 842; but booms during the summer and winter months thanks to the tourists visiting Lake Tahoe.</p>
			<p>Stateline is popular for gambling; as many visiting from South Lake Tahoe and beyond in California coming to Stateline to gamble.</p>
			<p>Though the Heavenly Village Resort is in South Lake Tahoe, California, it was on an intermediate ski slope in Stateline where Sonny Bono crashed into a tree and passed away.</p>
		</div>
	</div>
</div>
</div>
</template>

<script>
import Slick from 'vue-slick'

export default {
  name: 'Stateline',
  components: { Slick },
  data () {
    return {
      slickOptions: {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 1000,
        fade: true,
        cssEase: 'linear'
      },
      photos: [
    { title: 'Harrahs', name: 'stateline1' },
    { title: 'Hard Rock', name: 'stateline2' },
    { title: 'Hard Rock', name: 'stateline3' },
    { title: 'Harveys', name: 'stateline4' },
    { title: 'Harvey’s', name: 'stateline5' },
    { title: 'Harrahs', name: 'stateline6' },
    { title: 'Harveys', name: 'stateline7' },
    { title: 'Harveys', name: 'stateline8' },
    { title: 'Adam at California Border', name: 'adam-ca-stateline' },
    { title: 'Adam at Nevada Border', name: 'adam-nv-stateline' },
    { title: 'Montbleu', name: 'stateline9' },
    { title: 'Flowers at Montbleu', name: 'stateline10' },
    { title: 'Hard Rock', name: 'stateline11' },
    { title: 'Montbleu', name: 'stateline12' },
    { title: 'Stateline', name: 'stateline13' },
    { title: 'Stateline', name: 'stateline14' },
    { title: 'Stateline', name: 'stateline15' },
    { title: 'Airplane', name: 'airplane' }
      ]
    }
  }
}
</script>

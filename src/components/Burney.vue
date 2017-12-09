<template>
<div>
    <div id='title'>
		<my-title message="Part 2: A Hunka Hunka Burney Love and the Escape from the Lassen Forest"></my-title>
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
			<p>Shortly after Mt. Shasta (city), it was time for me to say goodbye to I-5, as I headed onto Highway 89, where two hours deep within the forests, I stopped at McArthur-Burney Falls Memorial State Park, home of Burney Falls, a waterfall which former President Theodore Roosevelt once called the 'Eighth Wonder of the World.'  It's no wonder Theodore Roosevelt, the most nature loving President ever, would make that distinction.  I kept think of Bernie Sanders and how he proclaimed "The American people are sick and tired of hearing about her (Hillary's) damn emails!" I love quoting that in his deep Jewish accent.  As for the falls were a lot bigger than I envisioned from the pictures I saw.  With all the parts of Burney Falls and easy access, I was really impressed with the photogenic views of Burney Falls, from the voluminous plunges to the small trickles.  It reminded me a lot of Panther Creek Falls in Washington, but a lot wider and easier access.  The walk along the trail was nice and relaxing, with the creek also beautiful as well.  Afterwards, it was time for me to go finish the most dreaded part of the trip, the final leg where you just want to get there already.</p>
			<p>Driving through the Lassen National Forest was like a typical trip through Central Oregon.  There was a brief stop at Hat Creek Overlook, where there were views of the mountains, including Lassen Peak and Mt. Shasta further away, but after that, it took all my energy just to get to Reno.  Going through the forest was no fun, and I made sure I was following a convoy of cars just to be safe, but once I reached the city of Susanville, I was back in civilization and I knew it was only time before I would reach Reno.  I felt even more of the rush when I finally reached Nevada, conveniently at a place called Bordertown.  It was about 6:00 when I finally reached Reno, and I was extremely relieved.</p>
			<img src="/src/assets/images/burney-map.jpg" class="img-responsive">
		</div>
		<div class="story">
			<h1 class="story-heading">My Facts</h1>
			<p>Burney Falls, located on Burney Creek, comes from underground springs above and at the falls, stands 129 feet high and has a constant flow, even in summer.</p>
			<p>Theodore Roosevelt once described Burney Falls as 'The Eighth Wonder of the World.'  But I'm guessing Melania Trump would claim this quote as her own if she ever visited the falls.</p>
			<p>McArthur-Burney Falls Memorial State Park is the second oldest state park in California, formed in the 1920s.</p>
			<p>Burney Falls is named after pioneer Samuel Burney, who lived in the area in the 1850s.</p>
			<p>Lassen Peak, with an elevation of 10,457 feet, is the southernmost active volcano of the Cascades, and along with Mt. St. Helens, was the only volcano in the contiguous United States to erupt in the 20th Century (erupting in 1915).</p>
			<div class="easyhtml5video" style="position:relative;max-width:1280px;">
				<video controls="controls" poster="/src/assets/videos/burney-video.jpg" style="width:100%" title="burney-video">
					<source src="/src/assets/videos/burney-video.m4v" type="video/mp4">
					<source src="/src/assets/videos/burney-video.webm" type="video/webm">
					<source src="/src/assets/videos/burney-video.ogv" type="video/ogg">
				</video>
				
			</div>
		</div>
	</div>
</div>
</div>
</template>

<script>
import Slick from 'vue-slick'

export default {
  name: 'Burney',
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
        { title: 'Construction', name: 'forest' },
        { title: 'Adam stuck in Construction', name: 'adam-construction' },
        { title: 'Burney Falls', name: 'burney1' },
        { title: 'Burney Falls', name: 'burney2' },
        { title: 'Burney Falls', name: 'burney3' },
        { title: 'Burney Falls', name: 'burney4' },
        { title: 'Adam at Burney Falls', name: 'adam-burney1' },
        { title: 'Burney Falls', name: 'burney5' },
        { title: 'Burney Falls', name: 'burney6' },
        { title: 'Burney Falls', name: 'burney7' },
        { title: 'Burney Falls', name: 'burney8' },
        { title: 'Burney Falls', name: 'burney9' },
        { title: 'Burney Falls', name: 'burney10' },
        { title: 'Adam at Burney Falls', name: 'adam-burney2' },
        { title: 'Adam at Burney Falls', name: 'adam-burney3' },
        { title: 'Hat Point Overlook', name: 'hat-point1' },
        { title: 'Hat Point Overlook', name: 'hat-point2' },
        { title: 'Lassen Peak', name: 'lassen-peak' }
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

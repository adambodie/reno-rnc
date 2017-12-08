<template>
<div>
    <div id='title'>
		<my-title message="Part: 9: My Cave for the Trip: Circus Circus"></my-title>
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
			<p>With all the driving I had done the past two days, I planned to do as little driving as possible, staying in Reno and seeing what was in town. But first I did the exploring of Circus Circus itself. I saw the slots, the games, the tram. Now it was time to explore what they were all about.</p>
			<p>I walked around the casino with all the slots, blackjack and other poker games. It all looked rather lame to me. All these ridiculously outdated slot machines and people smoking and drinking (I saw a few drinking early in the morning, yikes!). It seems childish to me. I played one slot machine and took a picture just to say I did it once. But I find gambling to be lame, especially slot machines.</p>
			<p>Once the arcade opened at 10:00AM (opening later than the gambling, which seems odd to me), I walked around to see all the games they had. Again, I found the games to be outdated and lame. But I like games more than gambling. It was just like being at the Carnival, but I'm not a child anymore, so I tried the crane game once and a round of ski-ball, but it's just not the same as it was when I was young. I'm an adult now. With that said and done, I decided the venture out.</p>
		</div>
		<div class="col-md-6 story">
			<h1 class="story-heading">My Facts</h1>
			<p>Gambling became legal in Nevada in 1931, and with Reno having extremely liberal divorce laws, made Reno a popular place at the time.</p>
			<p>Before the sudden growth of Las Vegas in the 1950s and Native American Gambling in California, Reno was considered the gambling capital of the United States.</p>
			<p>Circus Circus Reno does not have a swimming pool. Attempts to build one failed in 2008. But with a sky bridge to next door Silver Legacy, pools are accessible there.</p>
			<p>Circus Circus features free Circus shows. I didn't get around to seeing one...</p>
		</div>
	</div>
</div>
</div>
</template>

<script>
import Slick from 'vue-slick'

export default {
  name: 'CircusCircus',
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
    { title: 'Inside Circus Circus', name: 'circus-circus-inside1' },
    { title: 'Inside Circus Circus', name: 'circus-circus-inside2' },
    { title: 'Inside Circus Circus', name: 'circus-circus-inside3' },
    { title: 'Inside Circus Circus', name: 'circus-circus-inside4' },
    { title: 'Inside Circus Circus', name: 'circus-circus-inside5' },
    { title: 'Inside Circus Circus', name: 'circus-circus-inside6' },
    { title: 'Inside Circus Circus', name: 'circus-circus-inside7' },
    { title: 'Inside Circus Circus', name: 'circus-circus-inside8' },
    { title: 'Inside Circus Circus', name: 'circus-circus-inside9' },
    { title: 'Inside Circus Circus', name: 'circus-circus-inside10' },
    { title: 'Inside Circus Circus', name: 'circus-circus-inside11' },
    { title: 'Inside Circus Circus', name: 'circus-circus-inside12' },
    { title: 'Inside Circus Circus', name: 'circus-circus-inside13' },
    { title: 'Inside Circus Circus', name: 'circus-circus-inside14' },
    { title: 'Inside Circus Circus', name: 'circus-circus-inside15' },
    { title: 'Adam playing Slots', name: 'adam-circus-circus-slot' }
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

<template>
<div>
    <div id="title">
            <my-title message="Welcome to Reno, Nice 'n' Cool"></my-title>
    </div>
    <div class="container intro">
        <p>Welcome to my web project Reno, Nice 'n' Cool.  Here you will find pictures, fun facts and the story behind my trip to Reno.  From Mt. Shasta to Reno to Lake Tahoe and everything else in between, I had quite the adventure.  When you're ready, scroll through my buttons below to view each section of my trip, fourteen in all.  Before then, you can read my thoughts of the Prelude to my trip: Leaving Oregon</p>
        <p>I left before 6:00, telling my Mom and Jenn I left with the help of my Glympse app, leaving them the first auto message I found in the app: "I forgot the salad, but I'm bringing the salami." With those words said, I was on my way.  Driving through Oregon for about 5 hours was, as expected, quite typical and mundane.  Having seen essentially all of I-5 in Oregon, I knew mostly what to expect, and the weather was quite cloudy, with some rain from a little in Cottage Grove to quite a bit in Roseburg.  Once I reached Medford and Ashland, I saw some sun peeking through the clouds.  Not surprisingly, after heading up and down the rollercoaster that is known as Siskiyou Pass (the highest point along I-5), I was in California, and of course, the clouds virtually disappeared like that (a few scattered, but still, a different world from Oregon).  Once I entered California and went through the checkpoint, the fun and adventure again.</p>
    </div>
</div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

p {
    color: #F14285;
    font-size: 1.3em;
}

@media (min-width: 767px) {
	.intro {
		width: 80%;
	}
}

</style>

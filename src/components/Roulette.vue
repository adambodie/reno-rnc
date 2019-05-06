<template>
	<div class="story">
		<h1 class="story-heading">Roulette</h1>
		<div class="roulette">
			<div id="wheel" v-bind:class="{ activeRoulette: isActive }" v-bind:style="'--rotation: ' + rotation + ';'"></div>
			<div id="ball" v-bind:class="{ activeBall: isActive }"></div>
			<div class="buttons">
				<button class="owl-next" @click="spin()">Spin</button>
				<button class="owl-next" @click="reset()">Reset</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'Roulette',
  data () {
    return {
      rotation: '3600deg',
      isActive: false,
      color: '',
      slots: [
        { number: 32, color: 'red', degree: 350 },
        { number: 15, color: 'black', degree: 341 },
        { number: 19, color: 'red', degree: 331 },
        { number: 4, color: 'black', degree: 321 },
        { number: 21, color: 'red', degree: 311 },
        { number: 2, color: 'black', degree: 301 },
        { number: 25, color: 'red', degree: 292 },
        { number: 17, color: 'black', degree: 282 },
        { number: 34, color: 'red', degree: 272 },
        { number: 6, color: 'black', degree: 263 },
        { number: 27, color: 'red', degree: 253 },
        { number: 13, color: 'black', degree: 243 },
        { number: 36, color: 'red', degree: 233 },
        { number: 11, color: 'black', degree: 223 },
        { number: 30, color: 'red', degree: 213 },
        { number: 8, color: 'black', degree: 204 },
        { number: 23, color: 'red', degree: 194 },
        { number: 10, color: 'black', degree: 184 },
        { number: 5, color: 'red', degree: 174 },
        { number: 24, color: 'black', degree: 164 },
        { number: 16, color: 'red', degree: 154 },
        { number: 33, color: 'black', degree: 145 },
        { number: 1, color: 'red', degree: 135 },
        { number: 20, color: 'black', degree: 125 },
        { number: 14, color: 'red', degree: 115 },
        { number: 31, color: 'black', degree: 106 },
        { number: 9, color: 'red', degree: 96 },
        { number: 22, color: 'black', degree: 87 },
        { number: 18, color: 'red', degree: 77 },
        { number: 29, color: 'black', degree: 68 },
        { number: 7, color: 'red', degree: 58 },
        { number: 28, color: 'black', degree: 49 },
        { number: 12, color: 'red', degree: 39 },
        { number: 35, color: 'black', degree: 29 },
        { number: 3, color: 'red', degree: 19 },
        { number: 26, color: 'black', degree: 10 }
      ]
    }
  },
  methods: {
    spin () {
      this.isActive = true
      const random = Math.floor(Math.random() * 360)
      const degree = 3600 + random
      this.rotation = degree + 'deg'
    },
    reset () {
      this.isActive = false
    }
  }
}
</script>
<style>
:root {
  --rotation: 3600deg;
}

.roulette {
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 0 auto;
	width: 60%;
	position: relative;
	padding: 20px;
}


#ball {
	width: 25px;
	height: 25px;
	border-radius: 100%;
	background-image: radial-gradient(circle, green, black);
	position: absolute;
	opacity: 0;
	top: 50%;
}

.buttons {
	width: 100%;
	margin-top: 20px;
}
#wheel {
  width: 400px;
  height: 400px;
  border-radius: 100%;
  background-image: url('../assets/american-roulette-wheel.gif');

}

.activeRoulette { 
  animation: spinning 2.0s ease-in forwards;
}

.activeBall {
  animation: ball 2.0s ease-out 0.25s forwards;
}
@keyframes spinning {
  0% { transform: rotate(0); }
  100% { transform: rotate(var(--rotation)); }
}

@keyframes ball {
  0% { opacity: 0; top: 50%;}
  100% { opacity: 1; top: 10%; }
}

</style>

<template>
	<div class="roulette">
	<h1>Roulette</h1>
	<div id="wheel" v-bind:class="{ activeRoulette: isActive }" v-bind:style="'--rotation: ' + rotation + ';'"></div>
	<div id="ball" v-bind:class="{ activeBall: isActive }"></div>
	<div class="buttons">
	<button class="owl-next" @click="spin()">Spin</button>
	<button class="owl-next" @click="reset()">Reset</button>
	</div>
	</div>
</template>

<script>
export default {
  name: 'Roulette',
  data () {
    return {
      rotation: '3600deg',
      isActive: false
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
}
.roulette h1 {
	font-family: 'Monoton', cursive;
	color: #F14285;
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

#wheel {
  width: 400px;
  height: 400px;
  border-radius: 100%;
  background-image: url('../assets/american-roulette-wheel.gif');

}

.activeRoulette { 
  animation: spinning 2.0s forwards;
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
  100% { opacity: 1; top: 25%; }
}

</style>

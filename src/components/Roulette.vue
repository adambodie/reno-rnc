<template>
	<div class="roulette">
	<h1>Roulette</h1>
	<div id="wheel" v-bind:class="{ activeRoulette: isActive }" v-bind:style="'--rotation: ' + rotation + ';'"></div>
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
}
.roulette h1 {
	font-family: 'Monoton', cursive;
	color: #F14285;
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

@keyframes spinning {
  0% { transform: rotate(0); }
  100% { transform: rotate(var(--rotation)); }
}

</style>

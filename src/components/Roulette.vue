<template>
  <div class="story">
    <h1 class="story-heading">Roulette</h1>
      <div class="roulette">
        <div class="roulette-row">
          <div class="roulette-column roulette-column-buttons">
            <div class="button" v-for="button in buttons" :key="button.index">
              <button @click="handle(button.method)" :disabled="button.disable">{{button.name}}</button>
            </div>
          </div>
          <div class="wheel-border">
            <div id="wheel" v-bind:class="{ activeRoulette: isActive }" v-bind:style="'--rotation: ' + rotation + ';'"></div>
            <div id="ball" v-bind:class="{ activeBall: isActive }"  v-bind:style="'left: ' + left + ';'"></div>
          </div>
          <div class="forms">
            <div class="radio-forms">
              <div class="roulette-column roulette-column-form">
                <h3>Red or Black</h3>
                <input type="radio" id="one" value="Red" v-model="colorPicked">
                <label for="one">Red</label>
                <input type="radio" id="two" value="Black" v-model="colorPicked">
                <label for="one">Black</label>
              </div>
              <div class="roulette-column roulette-column-form">
                <h3>Even or Odd</h3>
                <input type="radio" id="one" value="Even" v-model="evenPicked">
                <label for="one">Even</label>
                <input type="radio" id="two" value="Odd" v-model="evenPicked">
                <label for="one">Odd</label>
              </div>
              <div class="roulette-column roulette-column-form">
                <h3>High or Low</h3>
                <input type="radio" id="one" value="High" v-model="highPicked">
                <label for="one">High</label>
                <input type="radio" id="two" value="Low" v-model="highPicked">
                <label for="one">Low</label>
              </div>
            </div>
            <div class="roulette-column radio-forms">
              <div class="chips">
                <h3>Your Chips</h3>
                <p>{{chips}}</p>
              </div>
              <div class="wager">
                <h3>Wager:</h3>
                <p>{{betAmount}}</p>
              </div>
            </div>
          </div>
        </div>
        <h2 v-bind:class="{ activeWinner: updatedStatus }">{{winner}}</h2>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Roulette',
  data () {
    return {
      rotation: '3600deg',
      left: '',
      chips: 1000,
      betAmount: 0,
      colorPicked: '',
      evenPicked: '',
      highPicked: '',
      isActive: false,
      updatedStatus: false,
      color: '',
      winner: '',
      buttons: [
        { name: 'Add', method: 'placeBetAdd', disable: false },
        { name: 'Add All', method: 'placeBetAll', disable: false },
        { name: 'Minus', method: 'placeBetMinus', disable: false },
        { name: 'Spin', method: 'spin', disable: false },
        { name: 'Reset', method: 'reset', disable: false },
        { name: 'Clear', method: 'clear', disable: false }
      ],
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
    handle (method) {
      this[method]()
    },
    placeBetAdd () {
      let { buttons } = this
      if (this.chips === 0) {
        alert('No more chips to place your bet')
        buttons[0].disable = true
        buttons[1].disable = true
      } else {
        this.betAmount += 100
        this.chips -= 100
      }
      buttons[2].disable = false
    },
    placeBetAll () {
      if (this.chips === 0) {
        alert('No more chips to place your bet')
      } else {
        this.betAmount += this.chips
        this.chips = 0
      }
    },
    placeBetMinus () {
      let { buttons } = this
      if (this.betAmount > 0) {
        this.betAmount -= 100
        this.chips += 100
        buttons[0].disable = false
        buttons[1].disable = false
      } else {
        alert('Please try again')
        buttons[2].disable = true
      }
    },
    spin () {
      if (this.betAmount === 0) {
        alert('Please place a wager')
      }
      const random = Math.floor(Math.random() * 360)
      setTimeout(() => {
        this.isActive = false
        this.updatedStatus = false
        this.winner = ''
        this.left = (window.innerWidth > 768) ? '185px' : '140px'
      }, 0)
      setTimeout(() => {
        this.isActive = true
        this.updatedStatus = true
        const degree = 3600 + random
        this.rotation = degree + 'deg'
      }, 100)
      setTimeout(() => {
        const { colorPicked, evenPicked, highPicked, pickColor, pickEven, pickHigh } = this
        if (colorPicked !== '') {
          pickColor(random)
        }
        if (evenPicked !== '') {
          pickEven(random)
        }
        if (highPicked !== '') {
          pickHigh(random)
        }
      }, 2500)
      setTimeout(() => {
        this.clear()
      }, 2600)
    },
    reset () {
      this.isActive = false
      this.rotation = '3600deg'
      this.winner = ''
      this.betAmount = 0
      this.chips = 1000
      this.buttons[3].disable = false
    },
    clear () {
      this.colorPicked = ''
      this.evenPicked = ''
      this.highPicked = ''
    },
    setLeft (value) {
      this.left = (window.innerWidth > 768) ? `${185 + value}px` : `${140 + value}px`
    },
    loseSpin (number, color) {
      this.winner = `${number} ${color}. You Lose...`
      if (this.chips === 0) {
        alert('Game Over')
        this.buttons[3].disable = true
      }
    },
    winSpin (number, color) {
      this.winner = `${number} ${color}. You Win!!!`
      this.chips += (this.betAmount * 2)
    },
    pickColor (random) {
      this.slots.map((x, index) => {
        for (let i = -5; i < 6; i++) {
          if (x.degree === random - i) {
            let { setLeft, colorPicked, winSpin, loseSpin } = this
            let { number, color } = x
            setLeft(i)
            if (colorPicked.toUpperCase() === color.toUpperCase()) {
              winSpin(number, color)
            } else {
              loseSpin(number, color)
            }
            this.betAmount = 0
          }
        }
      })
    },
    pickEven (random) {
      this.slots.map((x, index) => {
        for (let i = -5; i < 6; i++) {
          if (x.degree === random - i) {
            let { setLeft, evenPicked, winSpin, loseSpin } = this
            let { number, color } = x
            setLeft(i)
            if (((number % 2 === 0) && (evenPicked === 'Even')) || ((number % 2 === 1) && (evenPicked === 'Odd'))) {
              winSpin(number, color)
            } else if (((number % 2 === 0) && (evenPicked === 'Odd')) || ((number % 2 === 1) && (evenPicked === 'Even'))) {
              loseSpin(number, color)
            } else {
              this.winner = 'Try Again'
            }
            this.betAmount = 0
          }
        }
      })
    },
    pickHigh (random) {
      this.slots.map((x, index) => {
        for (let i = -5; i < 6; i++) {
          if (x.degree === random - i) {
            let { setLeft, highPicked, winSpin, loseSpin } = this
            let { number, color } = x
            setLeft(i)
            if (((number > 18) && (highPicked === 'High')) || ((number <= 18) && (highPicked === 'Low'))) {
              winSpin(number, color)
            } else if (((number <= 18) && (highPicked === 'High')) || ((number > 18) && (highPicked === 'Low'))) {
              loseSpin(number, color)
            } else {
              this.winner = 'Try Again'
            }
            this.betAmount = 0
          }
        }
      })
    }
  }
}
</script>
<style>

.roulette {
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 0 auto;
	position: relative;
	padding: 20px;
}

.roulette h2 {
	opacity: 0;
	height: 30px;
	color: #F14285;
	font-family: 'Monoton', cursive;
}

.roulette-row {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column-reverse;
	border: 10px groove #F14285;
}

.roulette-column {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	margin: 2px;
	width: 295px;
}

.roulette-column h3, p {
	margin: 0;
}

.roulette-column h3 {
	font-family: 'Monoton', cursive;
	font-size: 1.05em;
	margin-right: 20px;
}

.roulette-column label {
	font-size: 13px;
	color: black;
}
.roulette-column button {
	padding: 10px;
	font-family: 'Monoton', cursive;
	background: #81F092;
	margin: 5px;
	width: 64px;
	height: 32px;
	font-size: 9px;
}

.roulette-column button:hover {
	background: #50C060;
}

.radio-forms {
	margin-bottom: 10px;
	background: #81F092;
}

.radio-forms h3 {
	color: black;
}
.radio-forms p {
	color: black;
}

.chips, .wager {
	margin: 10px;
	font-family: 'Monoton', cursive;
}
.forms {
	margin: 5px;
}
#ball {
	width: 20px;
	height: 20px;
	border-radius: 100%;
	background-image: radial-gradient(circle, green, black);
	position: absolute;
	opacity: 0;
}
.wheel-border {
	width: 300px;
	height: 300px;
	position: relative;
}

#wheel {
  width: 300px;
  height: 300px;
  border-radius: 100%;
  background-image: url('../assets/images/american-roulette-wheel.gif');
  background-position: center;
  background-size: cover;
}

.activeRoulette { 
  animation: spinning 2.0s ease-in forwards;
}

.activeBall {
  animation: ball 2.0s ease-out 0.25s forwards;
}
.activeWinner {
	opacity: 1!important;
}
@keyframes spinning {
  0% { transform: rotate(0); }
  100% { transform: rotate(var(--rotation)); }
}

@keyframes ball {
  0% { opacity: 0; top: 80%;}
  100% { opacity: 1; top: 10%; }
}
input {
	margin: 0;
}
@media (min-width: 768px) {
	.roulette-row {
		flex-direction: row;
	}
	.roulette-column {
		width: 140px;
		display: inherit;
	}
	.roulette-column h3 {
		margin-right: 0px;
	}
	.roulette-column button {
		font-size: 13px;
		margin: 5px;
		width: 140px;
		height: 55px;
	}
	.roulette-column-buttons {
		width: 172px;
	}
	#wheel {
		width: 400px;
		height: 400px;
	}
	#ball {
		width: 25px;
		height: 25px;
		top: 50%;
	}
	.wheel-border {
		width: 400px;
		height: 400px;
	}
	.radio-forms {
		padding: 10px;
	}  
	@keyframes ball {
		0% { opacity: 0; top: 80%;}
		100% { opacity: 1; top: 10%; }
	}
}
</style>

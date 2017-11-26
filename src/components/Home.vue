<template>
    <div class="site-wrapper">
      <div class="site-wrapper-inner">
        <div class="cover-container">
          <div class="inner cover">
            <h1 class="cover-heading">Reno Nice 'n' Cool - A Better RNC</h1>
            <p class="lead">Welcome to Reno Nice 'n' Cool!  From July 18th to July 21st, I spent four days of my week long vacation travelling to Reno.  I had lots of fun times while I was exploring new places.  To see the adventures I had, click Enter.</p>
            <p class="lead">
              <a href="/start.html" class="btn btn-lg btn-default">Enter</a>
            </p>
          </div>
          <div class="mastfoot">
            <div class="inner">
              <p>Adam Bodie &copy; 2016</p>
            </div>
          </div>
        </div>
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
a, a:focus, a:hover { 
  color: #fff; 
}

/* Custom default button */
.btn-default, .btn-default:hover, .btn-default:focus {
  color: #333;
  text-shadow: none; /* Prevent inheritence from `body` */
  border: none;
  background-image: linear-gradient(to bottom,#66B657 0,#81F092 100%);
  font-family: 'Monoton', cursive;
  background-position: 0;
}


/* Base structure */

html, body {
  font-family: 'Harmattan', sans-serif;
  font-size: 1.1em;
}
body {
  text-align: center;
  text-shadow: 0 1px 3px rgba(0,0,0,.5);
}
p {
    color: #F14285;
}
.main {
  background: black;
}
/* Extra markup and styles for table-esque vertical and horizontal centering */
.site-wrapper {
  display: table;
  width: 100%;
  height: 100%; /* For at least Firefox */
}
.site-wrapper-inner {
  display: table-cell;
  vertical-align: top;
}
.cover-container {
  margin-right: auto;
  margin-left: auto;
}

.cover-heading {
  font-size: 4em;
}
.cover-heading, #title {
  font-family: 'Monoton', cursive;
    -webkit-animation-name: title; /* Chrome, Safari, Opera */
    -webkit-animation-duration: 4s; /* Chrome, Safari, Opera */
    animation-name: title;
    animation-duration: 4s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    margin-top: 60px;
}
.story-heading {
  font-family: 'Monoton', cursive;

}
/* Chrome, Safari, Opera */
@-webkit-keyframes title {
    from {color: #F14285;}
    to {color: #FFF4DC;}
}

/* Standard syntax */
@keyframes title {
    from {color: #F14285;}
    to {color: #FFF4DC;}
}

/* Padding for spacing */
.inner {
  padding: 30px;
}

/* Cover */

.cover {
  padding: 0 20px;
}
.cover .btn-lg {
  padding: 10px 20px;
  font-weight: bold;
}


/* Footer */

.mastfoot {
  color: #999; /* IE8 proofing */
  color: rgba(255,255,255,.5);
}


/* Affix and center */

@media (min-width: 768px) {
  /* Start the vertical centering */
  .site-wrapper-inner {
    vertical-align: middle;
  }
  /* Handle the widths */
  .mastfoot,
  .cover-container {
    width: 100%; /* Must be percentage or pixels for horizontal alignment */
  }
}

@media (min-width: 992px) {
  .mastfoot,
  .cover-container {
    width: 700px;
  }

}
</style>

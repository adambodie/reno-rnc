<template>
    <div>
        <div id="header">
          <h1>Reno Nice 'n' Cool</h1>
        </div>
        <div class="borders">
            <my-border v-for="n in 85" :key="n"></my-border>
        </div>
        <my-owl :links="links"></my-owl>
        <div class="borders">
            <my-border v-for="n in 85" :key="n"></my-border>
        </div>
        <div id="app">
          <router-view/>
        </div>
        <div id="footer">
          <h2>Adam Bodie &copy; {{new Date().getFullYear()}}</h2>
        </div>
    </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      links: [
          {index: 0, route: '', thumbnail: 'home', alt: 'Home', message: 'Home'},
          {index: 1, route: 'shasta', thumbnail: 'weed', alt: 'Weed Store', message: 'Mt. Shasta'},
          {index: 2, route: 'burney', thumbnail: 'burney', alt: 'Burney Falls', message: 'Burney Falls'},
          {index: 3, route: 'hotel-room', thumbnail: 'circus', alt: 'Circus Circus', message: 'Welcome to Reno'},
          {index: 4, route: 'explore-reno', thumbnail: 'reno', alt: 'Reno Arch', message: 'Exploring Reno'},
          {index: 5, route: 'carson', thumbnail: 'carson-city', alt: 'Carson City', message: 'Carson City'},
          {index: 6, route: 'lake-tahoe-nv', thumbnail: 'tahoe-nv', alt: 'Lake Tahoe', message: 'Lake Tahoe (Nevada)'},
          {index: 7, route: 'stateline', thumbnail: 'stateline', alt: 'Stateline', message: 'Stateline'},
          {index: 8, route: 'lake-tahoe-ca', thumbnail: 'tahoe-ca', alt: 'Lake Tahoe', message: 'Lake Tahoe (California)'},
          {index: 9, route: 'inside-circus', thumbnail: 'slots', alt: 'a Slot Machine', message: 'Circus Circus'},
          {index: 10, route: 'truckee', thumbnail: 'truckee', alt: 'Truckee Riverwalk', message: 'Truckee Riverwalk'},
          {index: 11, route: 'reno-final', thumbnail: 'atlantis', alt: 'Atlantis', message: 'Reno Finale'},
          {index: 12, route: 'lava-beds', thumbnail: 'lava-bed', alt: 'Lava Beds National Monument', message: 'Lava Beds National Monument'},
          {index: 13, route: 'klamath', thumbnail: 'klamath-falls', alt: 'Klamath Falls', message: 'Klamath Falls'},
          {index: 14, route: 'salt-creek', thumbnail: 'saltcreek', alt: 'Salt Creek Falls', message: 'Salt Creek Falls'}
      ]
    }
  }
}
</script>

<style>
body {
    background-color: black;
    font-family: 'Harmattan', sans-serif;
    text-align: center;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#header {
    border-bottom: 7px solid transparent;
    font-family: 'Monoton', cursive;
    color: #F14285;
    text-align: left;
    background-color: black;
    margin-left: -10px;
    margin-top: -20px;
    margin-right: -10px;    
}

#header h1 {
    font-weight: 400;
    text-indent: 1.5em;
    margin-bottom: 0;
}

#footer {
    text-align: left;
    color: #F14285;  
    margin-left: -10px;
    padding: 10px;
    margin-right: -10px;    
}
.lazyTitle {
    font-size: 3em;
}
.owl-carousel {
    margin-top: 10px;
}
.owl-carousel .item img{
  width: 60%;
  height: auto;
  border-radius: 100%;
  z-index: 50;
  display: block;
  margin: 0 auto;
}

.owl-item {
  display: block;
  margin: 0 auto;
}

.owl-carousel .owl-wrapper-outer {
    height: 150px;
}

.owl-prev, .owl-next {
    color: #000!important;
    margin: 0 30px!important;
    font-size: 24px!important;
    background-image: linear-gradient(to bottom,#66B657 0,#81F092 100%)!important;
    filter: Alpha(Opacity=100);
    opacity: 1;
    font-family: 'Monoton', cursive;
}

.owl-prev:hover, .owl-next:hover {
    filter: Alpha(Opacity=100)!important;
    opacity: 0.8!important;

}

a:hover {
  text-decoration: none;
}
.item h1 {
  margin-top: -75px;
  position: relative;
  font-family: 'Monoton', cursive;
  z-index: 100;
  color: #F14285;
  opacity: 0;
  font-weight: bold;
}
.item:hover {
  cursor: pointer;
  opacity: 0.8;
}
.item h1:hover {
  opacity: 1;
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

@media (min-width: 767px) {
    .owl-carousel .item img{
    width: 60%;
    }
}
</style>

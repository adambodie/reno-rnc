<template>
<div>
    <div id="app">
        <router-view/>
    </div>
    <div class="container">
        <div class="row">
            <div class="span12">
                <div id="owl-demo" class="owl-carousel">
                    <div v-for="link in links" :key="link.index">
                        <router-link :to="'/' + link.route">
                            <div class="item" v-bind:title="link.message">
                                <img class="lazyOwl" :data-src="'./src/assets/thumbnails/adam-' + link.thumbnail + '.jpg'" :alt="'Adam at ' + link.alt">
                                <h1 class="lazyTitle">{{link.index}}</h1>
                            </div>
                        </router-link>
                    </div>
                </div>                
            </div>
          </div>
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
    text-align: center;
    font-family: 'Harmattan', sans-serif;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.jumbotron {
    background-color: black;
    padding: 10px;

}
#title h1 {
    border: 10px solid transparent;
    color: #F14285;
    text-align: center;
    padding-bottom: 10px;
    -webkit-border-image: url(assets/images/border.gif) 33 round repeat;
    -o-border-image: url(assets/images/border.gif) 33 round repeat;
    border-image: url(assets/images/border.gif) 33 round repeat;
}

.lazyTitle {
    font-size: 4em;
}
#owl-demo {
    box-shadow: 0 4px 8px 0 rgba(255, 255, 255, 0.3), 0 6px 20px 0 rgba(255, 255, 255, 0.2);
    margin-bottom: 50px;
}

#owl-demo .item{
  margin: 10px;
}
#owl-demo .item img{
  width: 50%;
  height: auto;
  border-radius: 100%;
  z-index: 50;
}

.owl-item {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.owl-theme .owl-controls .owl-buttons div {
    color: #000;
    margin: 20px;
    padding: 6px 15px;
    font-size: 24px;
    background-image: linear-gradient(to bottom,#66B657 0,#81F092 100%);
    filter: Alpha(Opacity=100);
    opacity: 1;
    font-family: 'Monoton', cursive;
}

.owl-prev:hover {
  opacity: 0.5!important;
}
.owl-next:hover {
  opacity: 0.5!important;
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
</style>

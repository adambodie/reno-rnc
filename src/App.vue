<template>
<div>
    <div id="title">
        <div class="cover-heading jumbotron">
            <h1 id="title">Welcome to Reno, Nice 'n' Cool</h1>
        </div>
    </div>
    <div id="app">
        <router-view/>
    </div>
    <div class="container">
        <div class="row">
            <div class="span12">
                <div id="owl-demo" class="owl-carousel">
                    <div v-for="link in links" :key="link.index">
                        <router-link :to="'/' + link.route">
                            <div class="item">
                                <img class="lazyOwl" :data-src="'./src/thumbnails/adam-' + link.thumbnail + '.jpg'" :alt="'Adam at ' + link.alt">
                                <h1>{{link.index}}</h1>
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
          {index: 1, route: 'weed', thumbnail: 'weed', alt: 'Weed Store'},
          {index: 2, route: 'burney', thumbnail: 'burney', alt: 'Burney Falls'},
          {index: 3, route: 'hotel-room', thumbnail: 'circus', alt: 'Circus Circus'},
          {index: 4, route: 'explore-reno', thumbnail: 'reno', alt: 'Reno Arch'},
          {index: 5, route: 'carson', thumbnail: 'carson-city', alt: 'Carson City'},
          {index: 6, route: 'lake-tahoe-nv', thumbnail: 'tahoe-nv', alt: 'Lake Tahoe'},
          {index: 7, route: 'stateline', thumbnail: 'stateline', alt: 'Stateline'},
          {index: 8, route: 'lake-tahoe-ca', thumbnail: 'tahoe-ca', alt: 'Lake Tahoe'},
          {index: 9, route: 'inside-circus', thumbnail: 'slots', alt: 'a Slot Machine'},
          {index: 10, route: 'truckee', thumbnail: 'truckee', alt: 'Truckee Riverwalk'},
          {index: 11, route: 'reno-final', thumbnail: 'atlantis', alt: 'Atlantis'},
          {index: 12, route: 'lava-beds', thumbnail: 'lava-bed', alt: 'Lava Beds National Monument'},
          {index: 13, route: 'klamath', thumbnail: 'klamath-falls', alt: 'Klamath Falls'},
          {index: 14, route: 'salt-creek', thumbnail: 'saltcreek', alt: 'Salt Creek Falls'}
      ]
    }
  }
}
</script>

<style>
body {
    background-color: black;
    text-align: center;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.jumbotron {
    background-color: black;
    padding: 10px;

}
.cover-heading, #title {
  font-family: 'Monoton', cursive;
    -webkit-animation-name: title; /* Chrome, Safari, Opera */
    -webkit-animation-duration: 4s; /* Chrome, Safari, Opera */
    animation-name: title;
    animation-duration: 4s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
}
#title h1 {
    border: 10px solid transparent;
    color: #F14285;
    padding: 40px 20px;
    text-align: center;
    -webkit-border-image: url(assets/border.gif) 33 round repeat;
    -o-border-image: url(assets/border.gif) 33 round repeat;
    border-image: url(assets/border.gif) 33 round repeat;
}
#owl-demo {
    box-shadow: 0 4px 8px 0 rgba(255, 255, 255, 0.3), 0 6px 20px 0 rgba(255, 255, 255, 0.2);
    padding-top: 50px;
    padding-bottom: 50px;
    margin-top: 50px;
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

.owl-buttons:hover {
  opacity: 0.5;
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
</style>

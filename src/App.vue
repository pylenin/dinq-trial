<template>
<div>
  <div class="promotab" @click="goToInstagram()">
    Follow us on Instagram
  </div>
<Header></Header>
  <div id="app">
    <router-view></router-view>
  </div>
<Footer></Footer>
</div>
</template>

<script>
import Header from './components/shared/Header'
import Footer from './components/shared/Footer'
export default {
  name: 'app',
  components: {
    Header,
    Footer
  },
  methods: {
    goToInstagram () {
      window.open('https://www.instagram.com/dinqindia/', '_blank');
    }
  }
}
</script>

<style>
body {
  background-color: #252c4a;
  color: #fefeff;
  font-family: 'Rubik', 'Avenir', Helvetica, Arial, sans-serif;;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
}
h1,h2,h3 {
  /* color: #838bb3; */
}
input[type=text] {
  background-color: rgba(255, 255, 255, 0.8);
  padding: 10px;
  min-height: 20px;
  min-width: 260px;
  font-size: 16px;
  color: #252c4a;
  font-weight: bold;
  border-radius: 6px;
  box-shadow: none;
}
div {
  margin: 0;
  padding: 0;
}
.primary-button {
    padding: 10px 40px;
    border-radius: 6px;
    font-weight: bold;
    color: rgb(156, 135, 16);
    font-size: 1.2em;
    background-color: #f2f600;
    bordeR: 1px solid #3b4b96;
    cursor: pointer;
}

.router-link-active h3 {
    color: #f2f600;
  }

.highlight {
    color: #838bb3;
    font-size: 1.3em;
    font-weight: bold;
}
#app {
  max-width: 1366px;
  margin: 0 auto;
}
.card {
    background-color: #838bb3;
    width: 300px;
    height: 400px;
    border: 1px solid white;
    border-radius: 4px; 
    margin-bottom: 20px;
    margin: 10px;
    cursor: pointer;
}

.card .card-image {
    width: 300px;
    height: 168px;
}
.card .card-heading {
    font-size: 1.6em;
    font-weight: bold;
    text-align: center;
}

.card .card-content {
    padding: 10px;
    font-size: 1.2em;
    text-align: center;
}
.card .banner {
  text-align: center;
  font-weight: bold;
  color: rgba(189, 189, 189, 0.1);
  background: -webkit-gradient(linear, left top, right top, from(rgb(189, 189, 189, 0.1)), to(rgb(189, 189, 189, 0.1)), color-stop(0.5, #fff));
  background: -moz-gradient(linear, left top, right top, from(rgb(189, 189, 189, 0.1)), to(rgb(189, 189, 189, 0.1)), color-stop(0.5, #fff));
  background: gradient(linear, left top, right top, from(#222), to(#222), color-stop(0.5, #fff));
  -webkit-background-size: 125px 100%;
  -moz-background-size: 125px 100%;
  background-size: 125px 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  -webkit-animation-name: banner;
  -moz-animation-name: banner;
  animation-name: banner;
  -webkit-animation-duration: 1s;
  -moz-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-iteration-count: infinite;
  -moz-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  background-repeat: no-repeat;
  background-position: 0 0;
}
@-moz-keyframes banner {
  0% {
    background-position: top left;
  }
  100% {
    background-position: top right;
  }
}
@-webkit-keyframes banner {
  0% {
    background-position: top left;
  }
  100% {
    background-position: top right;
  }
}
@-o-keyframes banner {
  0% {
    background-position: top left;
  }
  100% {
    background-position: top right;
  }
}
@keyframes banner {
  0% {
    background-position: top left;
  }
  100% {
    background-position: top right;
  }
}

.banner-cover {
  background-color: rgba(179, 27, 27, 0.8);
  padding: 9px;
  margin-top: -46px;
  position: relative;
}

.promotab {
  background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);
  height: 35px;
  text-align: center;
  padding-top: 14px;
  cursor: pointer;
}
</style>

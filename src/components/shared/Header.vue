<template>
<div class="header">
  <div>
    <!-- <div>
      <span class="nav-menu" v-on:click="openNav">&#9776;</span>
      <div id="dinqSideNav" class="sidenav">
        <a href="javascript:void(0)" class="closebtn" v-on:click="closeNav">&times;</a>        
        <div v-on:click="closeNav"><router-link class="mob-menu link" to="/categories">Play</router-link></div>
        <div v-on:click="closeNav"><router-link class="mob-menu link" to="/event-calendar">Event Calendar</router-link></div>
      </div>
    </div> -->
    <router-link to="/" class="link" >
      <div><img style="width:36px;margin: -5px 5px;" src="https://i.imgur.com/AUVhn2G.png" /> </div>
      <div><h3>DINQ</h3></div>
    </router-link>
  </div>
  <div class="header-right">
    <router-link to="/categories" class="link"><h3>Play</h3></router-link>
    <router-link to="/event-calendar" class="link"><h3>Event Calendar</h3></router-link>
  </div>
</div>
</template>

<script>
export default {
  name: 'Header',
  components: {
  },
  props: {
    game: String,
  },
  data() {
    return {}
  },
  // methods:{
  //   openNav: function(){
  //     document.getElementById('dinqSideNav').style.width = '300px';
  //   },
  //   closeNav: function(){
  //     document.getElementById('dinqSideNav').style.width = 0;
  //   }
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  /* display: flex;
  justify-content: space-between; */
  padding:20px 250px;
  height: 30px;
  font-size: 14px;
  /* width: 1200px; */
  margin: 0 auto;
}

.header h3 {
  cursor: pointer;
  border-top: 3px solid #ff9933;
  border-bottom: 3px solid #138808;
  margin: 5px;
}
.header-right {
  /* display: flex; */
  float: right;
}

.header-right h3 {
  border: none;
  margin-right: 20px;
}

.link {
    text-decoration: none;
    color: white;
    display: flex;
    float: left;
}
/* .nav-menu{
  font-size:30px;
  cursor:pointer;
  float: left; 
  margin-right: 10px;
  display: none;
}

.sidenav {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #252c4a;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
}

.mob-menu{
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 20px;
  color: #818181;
  display: block;
  transition: 0.3s;
}

.mob-menu{
  color: #f1f1f1;
} */

/* .sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
  color: white;
  text-decoration: none;
} */

@media screen and (max-width: 1200px) {
  .nav-menu{
    display: block
  }
  .header{
    padding: 20px 10px;
  }
}
</style>

<template>
<div class="header">
  <div>
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
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  padding:20px 250px;
  height: 30px;
  font-size: 14px;
  margin: 0 auto;
}

.header h3 {
  cursor: pointer;
  border-top: 3px solid #ff9933;
  border-bottom: 3px solid #138808;
  margin: 5px;
}
.header-right {
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

@media screen and (max-width: 1200px) {
  .nav-menu{
    display: block
  }
  .header{
    padding: 20px 10px;
  }
}
</style>

<template>
<div class="categories">
    <h1 class="page-title">Choose your category</h1>
    <div class="flex-container">
    <div v-for="category in categories" :style="{backgroundColor: category.category_color}" :key="category.id" class="card" @click="goToQuiz(category)">
      <img :src="category.image_url" class="card-image">
      <div v-if="category.latest" class="banner-cover">
        <div class="banner">LATEST</div>
      </div>
      <p class="card-heading">{{category.name}}</p>
      <p class="card-content">{{category.description}}</p>
    </div>
    </div>
</div>
</template>

<script>
import axios from 'axios';
import Modal from './shared/Modal'

export default {
  name: 'Categories',
  components: {
    'modal': Modal
  },
  props: {
    game: String,
  },
  data() {
    return {
        categories: [],
        name: '',
    }
  },
  methods: {
      async getAllCategories () {
        let result = await axios.get('https://dinq.in/rest/categories')
          .catch((err) => {
              alert(err);
          })
          this.categories = result.data.categories;
      },
      goToQuiz (category) {
          this.$router.push('/quiz/' + category.slug);
        }
  },
  mounted() {
    window.scrollTo(top);
    this.getAllCategories();
  },
  created() {
    this.getName();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.categories {
  min-height: 90vh;
}
.flex-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.page-title {
    text-align: center;
}

</style>

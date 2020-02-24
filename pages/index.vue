<template>
  <div>
    <div class="section">
      <p>
        So you think you know
        <span class="highlight">India</span>?
      </p>
      <img style="width: 100%" src="../assets/landing_1.png" />
    </div>
    <div class="section">
      <p>
        Be
        <span class="highlight">'D' INQ</span>uizitive | Explore
        <span class="highlight">India</span>
      </p>
      <button class="primary-button" @click="goToPage('/categories')">
        Get started
      </button>
    </div>
    <div class="section card-section">
      <div
        v-for="category in categories"
        :key="category.id"
        :style="{ backgroundColor: category.category_color }"
        class="card"
        @click="goToQuiz(category)"
      >
        <img :src="category.image_url" class="card-image" />
        <div v-if="category.latest" class="banner-cover">
          <div class="banner">LATEST</div>
        </div>
        <p class="card-heading">{{ category.name }}</p>
        <p class="card-content">{{ category.description }}</p>
      </div>
    </div>
    <div class="section" style="margin-bottom: 40px;">
      <div class="section-half">
        <img style="width: 100%" src="../assets/fact_check.png" />
        <p>
          Fact check your politicians!
          <br />They often lie
        </p>
      </div>
      <div class="third-section--right">
        <poll-card></poll-card>
      </div>
    </div>
    <div class="section">
      <p>
        No
        <span class="highlight">Drama</span>, No
        <span class="highlight">Propaganda</span>, only
        <span class="highlight">FACTS</span> !
      </p>
      <button class="primary-button" @click="goToPage('/categories')">
        Know news from facts
      </button>
    </div>
    <div class="section">
      <div>
        <p>
          <span class="highlight">UPSC</span>,
          <span class="highlight">SSC</span> OR
          <span class="highlight">STATE PSC</span> ASPIRANT?
        </p>
        <p>
          A fun and interesting place to
          <span class="highlight">learn</span>
        </p>
      </div>
      <div class="third-section--left">
        <img style=" width: 100%;" src="../assets/upsc.png" />
      </div>
      <button class="primary-button" @click="goToPage('/categories')">
        Start learning now
      </button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import PollCard from '../components/common/PollCard'

export default {
  components: {
    PollCard
  },
  data() {
    return {
      categories: []
    }
  },
  methods: {
    async getInitialCategories() {
      const result = await axios
        .get('https://dinq.in/rest/categories')
        .catch((err) => {
          alert(err)
        })
      this.categories = result.data.categories.splice(0, 7)
    },
    goToQuiz(category) {
      this.$store.commit('setCategory', category)
      this.$router.push('/quiz/' + category.slug)
    },
    goToPage(page) {
      this.$router.push(page)
    }
  },
  head() {
    return {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'keywords' },
        { property: 'og:title', content: 'dinq.in' },
        { property: 'og:type', content: 'quiz' },
        { property: 'og:url', content: 'https://dinq.in/' },
        { property: 'og:image', content: 'https://i.imgur.com/AUVhn2G.png' },
        {
          property: 'og:description',
          content: `Dinq aims to bring the news of India to the Indians through the medium of a Quiz. No more long blog posts and videos of people shouting on one another`
        }
      ]
    }
  },
  mounted() {
    this.getInitialCategories()
  }
}
</script>

<style>
.landing-page {
  margin-top: 20px;
  width: 100%;
}

.section {
  padding: 10px;
  margin-top: 20px;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  min-height: 30vh;
  /* border: 4px solid #f2f600; */
  justify-content: space-around;
  align-items: center;
}
.card-section {
  flex-wrap: nowrap;
  justify-content: flex-start;
  overflow-x: scroll;
  margin-bottom: 80px;
  -ms-overflow-style: none;
}

.section p {
  font-size: 1.5em;
}

.highlight {
  color: #f2f600;
}

.card-section .card-content {
  font-size: 19px;
}

.card-section::-webkit-scrollbar {
  display: none;
}
</style>

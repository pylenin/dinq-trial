<template>
<div class="result-page">
    <h1 class="quiz-category--header">{{category.name}}</h1>
    <h3 class="page-title">Results</h3>
    <div class="flex-container">
    <h1>You scored <span class="highlight" :style="{color: $store.getters.category.category_color}">{{score.score}}</span>/{{score.total}}</h1>
    <router-link to="/categories" class="link">
        <button class="primary-button" :style="{backgroundColor: $store.getters.category.category_color}">Play another Quiz</button>
    </router-link>
    <h2 v-if="category.slug !== 'n-covid-19'" class="share-header">Challenge your friends now! Share your scores on</h2>
    <h2 v-if="category.slug === 'n-covid-19'" class="share-header">
        It's your turn to fight against Fake news. <br>
        Spread the awareness about nCovid-19 among your friends and help them stay safe from this deadly virus.
    </h2>
    <br><br>
    <div>
        <social-sharing :url="getShareUrl"
                      title="D Inquizitive"
                      :description="getQuote"
                      :quote="getQuote"
                      hashtags="quiz,india,beinquizitive,dinqindia,dinqquiz"
                      inline-template>
        <div class="share-section">
            <network network="facebook">
            <div class="share facebook">
                <img src="../assets/fb.png" />
            </div>
            </network>
            <network network="twitter">
            <div class="share twitter">
                <img src="../assets/twitter.png" />
            </div>
            </network>
            <network network="whatsapp">
            <div class="share whatsapp">
                <img src="../assets/whatsapp.png" />
            </div>
            </network>
        </div>
    </social-sharing>
    </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'Result',
  components: {
  },
  props: {
    game: String,
  },
  data() {
    return {
        category: {},
        score: {},
        description: 'hey'
    }
  },
  methods: {
      getScore () {
          this.category = this.$store.getters.category;
          this.score = this.$store.getters.score;
          if (!this.category && !this.score) {
              this.$router.push('categories');
          }
      }
  },
  computed: {
      getQuote () {
          return 'Hey, I scored ' + this.score.score + '/' + this.score.total + ' in ' + this.category.name + ` on DInq. Why don't you try out?`;
      },
      getShareUrl () {
          return 'https://dinq.in/quiz/' + this.category.slug;
      }
  },
  mounted() {
    window.scrollTo(top);
    this.getScore();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.result-page {
    min-height: 85vh;
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    text-align: center;
}
.quiz-category--header {
    text-align: center;
}
.btn {
    margin-top: 40px;
}

.share-section {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
}

.share-header {
    margin-top: 80px;
}
.primary-button {
    color: white;
}

.share-section .share {
    border: 1px solid white;
    padding-top: 20px;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 6px;
    margin: 20px;
}
.share img {
    width: 32px;
}
.facebook {
    background-color: #4267b2;
}

.twitter {
    background-color: #1da1f3;
}

.whatsapp {
    background-color: #339933;
}
.link {
    text-decoration: none;
}
</style>

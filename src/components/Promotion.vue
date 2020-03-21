<template>
<div>
    <div class="promotion-background">
    <div style="position: relative">
        <img style="width: 100%; padding-top: 50px;" src="../assets/promo_background.png" />
        <div class="promotion-title">
        <p>DINQ</p>
        <p style="margin-top: 50px;font-size: 2em;">Marathon</p>
        <p style="margin-top: 140px; font-size: 2.5em;color: white;">
            <span class="instagram">Instagram </span>
            <span style="color: red">Quiz Challenge</span><br>
            <span style="margin-top: 270px;color: white; font-size: 0.5em;color: red;padding: 0;">Participate to win cash prizes and Dinq merchandise</span>
        </p>
        <button @click="goToInstagram()" class="primary-button promotion-button">Participate Now</button>
        </div>
    </div>
    <div class="hide-on-small">
        <img style="width: 100%" src="../assets/promotion_image2.png" />
    </div>
    </div>
    <div style="background-color: white; color: #252c4a;">
        <div style="max-width: 1000px; margin: 0 auto; text-align: center; padding: 40px 10px;">
            <p>The Coronavirus pandemic taught us one important lesson. That is we should always be “aware” of our
                surroundings.<br> In the words of Martin Luther King Jr. –</p>
        <h3><i>“Nothing in the world is more dangerous than sincere ignorance and conscientious stupidity.”</i></h3>
        <p>Keeping the above in mind, we are launching –</p>
        <div class="marathon-background">
            <p style="font-size: 3em; font-weight: bold;">DINQ Marathon</p>
            <p style="margin-top: -45px;">Our first “7-day Instagram competition”</p>
            <div class="sub-menu" @click="changeMenuContent">
                <div v-bind:style="showContent === 'About' ? 'border-bottom: 4px solid rgb(37, 44, 74);' : 'border-bottom: none;'">About</div>
                <div v-bind:style="showContent === 'Rules' ? 'border-bottom: 4px solid rgb(37, 44, 74);' : 'border-bottom: none;'">Rules</div>
                <div v-bind:style="showContent === 'Prizes' ? 'border-bottom: 4px solid rgb(37, 44, 74);' : 'border-bottom: none;'">Prizes</div>
                <div v-bind:style="showContent === 'Bonus' ? 'border-bottom: 4px solid rgb(37, 44, 74);' : 'border-bottom: none;'">Bonus</div>
            </div>
            <div class="sub-menu-content" v-if="showContent === 'About'">
                <h3>Dinq Alert is a 7 day Instagram Challenge, where we will ask questions relevant to India through the
                    medium of Instagram posts.</h3>
            </div>
            <div class="sub-menu-content" v-if="showContent === 'Rules'">
                <ul style="text-align: left;">
                    <li>The competition starts on March 23 rd , 2020 and continue for a week (until 29 th March, 2020).</li>
                    <li>Answers won’t be taken into consideration if you are not a follower.</li>
                    <li>Posts will be made anytime of the day in a random order. No fixed timings.</li>
                    <li>You have to be proactive and comment your answers in the comment section.</li>
                    <li>People who are the most proactive in posting comments and getting the correct answers shall
                    be rewarded at the end.</li>
                    <li>50 points for commenting and additional 100 points, if it is the right answer.</li>
                    <li>1 st person to comment the right answer - <b>+50 Points</b></li>
                    <li>2 nd person to comment the right answer - <b>+30 points</b></li>
                    <li>3 rd person to get the right answer - <b>+20 points</b></li>
                    <li>Dinq reserves the right to cancel the marathon/ disqualify someone in case of any issues.</li>
                </ul>
            </div>
            <div class="sub-menu-content" v-if="showContent === 'Prizes'">
                <h3>1 st prize – Rs 500 and merchandise</h3>
                <h3>2 nd prize – Rs 300 and merchandise</h3>
                <h3>3 rd prize – Rs 200 and merchandise</h3>
            </div>
            <div class="sub-menu-content" v-if="showContent === 'Bonus'">
                <p>Would you like to stay ahead of the curve? Earn some additional points? You can follow the steps below</p>
                <ul style="text-align: left;">
                    <li>Comment below and tag a friend(to get extra points you can comment as many times you wish
                        and tag as many friends you want) <b>(+5 Points each).</b></li>
                    <li>Like the post <b>(+10 POINTS).</b></li>
                    <li>Share this post on your Instagram story <b>(+50 Points).</b></li>
                </ul>
            </div>
            <button @click="goToInstagram()" class="primary-button" style="background-color: rgb(37, 44, 74); color: white;margin-top: 20px;">Go to Instagram handle</button>
        </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'Promotion',
  components: {
  },
  props: {
  },
  data() {
    return {
        eventList: [],
        showContent: 'About'
    }
  },
  methods: {
      changeMenuContent: function (e) {
          this.showContent = e.target.innerHTML;
      },
      goToInstagram () {
          window.open('https://www.instagram.com/dinqindia/', '_blank');
      }
  },
  mounted() {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.promotion-title {
    color: red;
}
ul li {
    padding: 4px 0px;
}
.active {
    border-bottom: 4px solid black;
}
.promotion-title p{
    position: absolute;
    top: 15%;
    left: 20%;
    color: red;
    font-size: 4em;
    padding: 0;
    margin: 0;
    transform: translateY(-20%);
}
.promotion-button {
    position: absolute;
    top: 470px;
    left: 18%;
    color: white;
    border: none;
    background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);
}

.promotion-background {
   display: flex;
   flex-wrap: wrap;
   justify-content: space-around;
}
.sub-menu {
    margin-top: 40px;
    display: flex;
    justify-content: space-around;
    cursor: pointer;
}
.sub-menu div {
    padding-bottom: 10px;
    width: 100%;
}
.sub-menu-content {
    margin: 0 auto;
    padding: 5px 5px;
    margin-top: 50px;
    max-width: 950px;
}
.marathon {
    background: linear-gradient(90deg, rgba(255,153,137,1) 29%, rgba(254,255,2,1) 88%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
.marathon-background {
    background: linear-gradient(90deg, rgba(255,153,137,1) 29%, rgba(254,255,2,1) 88%);
    padding: 20px 0px;
    padding-bottom: 60px;
}

.instagram {
    background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

@media screen and (max-width: 882px) {
  .hide-on-small {
    display: none;
  }
  .promotion-background {
      padding-bottom: 30px;
  }
}
</style>

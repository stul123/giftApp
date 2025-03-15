
<script>
import effectGiftPurchased from './assets/animations/effect-gift-purchased.json';
import emojiBalloons from './assets/animations/emoji-balloons.json';
import giftBlueStar from './assets/animations/gift-blue-star.json';
import giftDeliciousCake from './assets/animations/gift-delicious-cake.json';
import giftGreenStar from './assets/animations/gift-green-star.json';
import giftRedStar from './assets/animations/gift-red-star.json';
import tabGifts from './assets/animations/tab-gifts.json';
import tabLeaderboard from './assets/animations/tab-leaderboard.json';
import tabProfile from './assets/animations/tab-profile.json';
import tabStore from './assets/animations/tab-store.json';
import Animation from './components/Animation.vue';
import Store from './components/Store.vue';
import Menu from './components/Menu.vue';

export default {
  components: { 
    Animation,
    Store,
    Menu
  },
  data() {
    return {
      effectGiftPurchased,
      emojiBalloons,
      giftBlueStar,
      giftDeliciousCake,
      giftGreenStar,
      giftRedStar,
      tabGifts,
      tabLeaderboard,
      tabProfile,
      tabStore
    };
  }
};
</script>

<template>
  <router-view />
</template>

<style scoped>

</style>


<!-- <template>
  <p>dfdf</p>
  <br><p>dfdf</p>
  <br><p>dfdf</p>
  <br><p>dfdf</p>
  <br><p>dfdf</p>
  <br><p>dfdf</p>
  <br><p>dfdf</p>
  <br><p>dfdf</p>
  <br><p>dfdf</p>
  <br><p>dfdf</p>
  <br><p>dfdf</p>
  <br><p>dfdf</p>
  <br><p>dfdf</p>
  <br><p>dfdf</p>
  <br><p>dfdf</p>
  <br><p>dfdf</p>
  <br><p>dfdf</p>
  <br><p>dfdf</p>
  <br><p>dfdf</p>
  <br><p>dfdf</p>
  <br><p>dfdf</p>
  <br><p>dfdf</p>
  <br><p>dfdf</p>
  <br><p>dfdf</p>
  <br><p>dfdf</p>
  <br>  <div ref="parallax" class="parallax-content">
    GSAP Parallax
  </div><p>dfdf</p>
  <br><p>dfdf</p>
  <br><p>dfdf</p>
  <br><p>dfdf</p>
  <br><p>dfdf</p>
  <br><p>dfdf</p>
  <br><p>dfdf</p>
  <br><p>dfdf</p>
  <br><p>dfdf</p>
  <br><p>dfdf</p>
  <br><p>dfdf</p>
  <br><p>dfdf</p>
  <br><p>dfdf</p>
  <br><p>dfdf</p>
  <br><p>dfdf</p>
  <br><p>dfdf</p>
  <br><p>dfdf</p>
  <br><p>dfdf</p>
  <br><p>dfdf</p>
  <br> 
</template>-->

<script setup>
import { ref, onMounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const parallax = ref(null);

onMounted(() => {
  gsap.to(parallax.value, {
    y: -1000,
    scrollTrigger: {
      trigger: parallax.value,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    },
  });
});
</script>

<style>
.parallax-content {
  height: 500px;
  background: url('https://unsplash.com/assets/api/api-photo-grid@2x-388d83e210e483af53295e6574d71e343557875502b68b56b3cf0e1c0040b440.jpg') no-repeat center/cover;
}
</style>

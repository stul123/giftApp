
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

 

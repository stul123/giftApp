<script>
import Animation from './Animation.vue';
import emojiBalloons from '../assets/animations/emoji-balloons.json';
import myGifts from '../assets/data/myGifts.json';
import MiniGiftSend from './MiniGiftSend.vue';
import SwipeGift from './SwipeGift.vue';

export default {
    provide() {
        return {
            openGiftCard: this.openGiftCard
        };
    },
    data() {
        return {
            myGifts,
            emojiBalloons,
            openGift: false,
            giftId: null,
        }
    },
    components: {
        Animation,
        MiniGiftSend,
        SwipeGift
    },
    methods: {
        openGiftCard(id) {
            this.giftId = id
            this.openGift = true
        },
    },
};
</script>

<template>   
    <div v-if="myGifts.length < 1" className="flex flex-col gap-4 items-center justify-center py-8 px-4 bg-[#2C2C2E] rounded-xl">
        <Animation :animationData="emojiBalloons"  />
        <p className="text-[1.0625rem]  leading-[1.375rem]">You don't have any gifts yet.</p>
        <router-link to="/" className="text-[1.0625rem]  leading-[1.375rem] text-[#007AFF]">Open Store</router-link>
    </div>
    <div v-if="myGifts.length >= 1" className="myGifts flex flex-wrap gap-2 items-center justify-start mb-[6.25rem]">
        <MiniGiftSend v-for="gift in myGifts" :miniGift="gift" /> 
    </div>
    <SwipeGift :visible="openGift" @close="openGift = false"  :giftId='this.giftId'/>
</template>

<style scoped>
    .gift_icon{
        width: 6.25rem !important;
    }
</style>  
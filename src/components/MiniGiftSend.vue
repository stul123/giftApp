<script>
import Animation from './Animation.vue';
import giftBlueStar from '../assets/animations/gift-blue-star.json';
import giftDeliciousCake from '../assets/animations/gift-delicious-cake.json';
import giftGreenStar from '../assets/animations/gift-green-star.json';
import giftRedStar from '../assets/animations/gift-red-star.json';
import gifts from '../assets/data/gifts.json';

export default {
    data() {
        return {
            giftBlueStar,
            giftDeliciousCake,
            giftGreenStar,
            giftRedStar,
            gifts
        }
    },
    components: {
        Animation
    },
    props: {
        miniGift: {
            type: Object,
            required: true
        }
    },
    inject: ['openGiftCard'],
    methods: {
        SendGift(id) {
            this.openGiftCard(id);
        },
        getVariableValue(variableName) {
            return this[variableName];
        }
    }
};
</script>

<template>  
    <div className="flex flex-col gap-1 px-4 pt-2 pb-3 bg-[#2C2C2E] rounded-xl items-center justify-start w-[calc(33.3%-5.33px)]">    
        <p className="text-[12px] text-nowrap truncate  text-[#8E8E93] leading-[18px] text-center w-full">{{ miniGift.name }}</p>
        <Animation v-if="miniGift.id == 1" style="transform: translate(0, 13%) !important;" :animationData="getVariableValue(miniGift.anim)"  />
        <Animation v-if="miniGift.id != 1" :animationData="getVariableValue(miniGift.anim)"  />
        <button  @click="SendGift(miniGift.id)" className="w-full py-[6px] rounded-full bg-[#007AFF] text-[13px] font-semibold max-w-[100px]" :id="miniGift.name">Send</button>
    </div>
</template>

<style scoped>
    .gift_icon{
        width: 80px !important;
    } 

    
</style>  
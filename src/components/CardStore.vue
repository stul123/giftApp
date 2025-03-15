<script>
import giftBlueStar from '../assets/animations/gift-blue-star.json';
import giftDeliciousCake from '../assets/animations/gift-delicious-cake.json';
import giftGreenStar from '../assets/animations/gift-green-star.json';
import giftRedStar from '../assets/animations/gift-red-star.json';
import Animation from './Animation.vue';
import usdt from '../assets/img/usdt.svg';
import ton from '../assets/img/ton.svg';
import eth from '../assets/img/eth.svg';
export default {
    data() {
        return {
            usdt: usdt,
            ton: ton,
            eth: eth,
            soldCheck: null,
            giftBlueStar,
            giftDeliciousCake,
            giftGreenStar,
            giftRedStar,
            showGift: 0, 
        };
    },
    props: {
        gift: {
            type: Object,
            required: true
        }
    },
    mounted() {
        
    },
    computed: { 
        availabil() {
            let num = this.gift.availabil.split('|')
            this.soldCheck = num[0] 
            return  `${(num[0].length > 3) ? num[0].slice(0, -3) + 'K' : num[0]} of ${(num[1].length > 3) ? num[1].slice(0, -3) + 'K' : num[1]}`
        },
        bg() {
            return `flex flex-col rounded-xl w-[calc(50%-6px)] items-center ${this.gift.bg}`
        }
    },
    methods: {
        getVariableValue(variableName) {
            return this[variableName];
        }
    },
    components: { 
        Animation,
    },
};
</script>

<template> 
    <div :className='bg'>
        <p className="w-full text-end pt-2 pr-3 pb-2 text-[#a39a92] text-[13px] leading-[18px]">{{availabil}}</p>
        <Animation :animationData="getVariableValue(this.gift.anim)" width="128px" :loop="false" />
        <p className="pt-1 text-[17px] font-semibold leading-[22px]">{{ this.gift.name }}</p>
        <router-link :to="{ name: 'Gift', params: { giftProps: JSON.stringify(gift) } }" v-if="soldCheck != 0" class="mt-3 mb-4 py-[6px] px-4 bg-[#007AFF] gap-[4.2px] rounded-full flex items-center justify-center text-[13px] leading-[18px] font-semibold uppercase">
            <img :src="getVariableValue(this.gift.currency)" alt="">
            {{ this.gift.price }} {{ this.gift.currency }}
        </router-link>
        <button v-if="soldCheck == 0" disabled className="mt-3 mb-4 py-[6px] px-4 bg-[#8E8E9310] text-[#8E8E93] rounded-full flex items-center justify-center text-[13px] leading-[18px] font-semibold backdrop-blur-[50px]">
            Sold Out
        </button>
    </div>
</template> 

<style scoped>
    .gift_icon {
        width: 128px;
    }
</style>

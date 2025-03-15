<script> 
import Animation from './Animation.vue';
import GiftHistory from './GiftHistory.vue';
import giftBlueStar from '../assets/animations/gift-blue-star.json';
import giftDeliciousCake from '../assets/animations/gift-delicious-cake.json';
import giftGreenStar from '../assets/animations/gift-green-star.json';
import giftRedStar from '../assets/animations/gift-red-star.json';
import usdt from '../assets/img/usdt.svg';
import ton from '../assets/img/ton.svg';
import eth from '../assets/img/eth.svg';
import data from '../assets/data/recentlyActions.json';

export default {
    name: 'Gift',
    props: {
        giftProps: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            giftBlueStar,
            giftDeliciousCake,
            giftGreenStar,
            giftRedStar,
            usdt,
            ton,
            eth,
            soldCheck: null,
            gift: [],
            data,
        }
    },
    mounted() {  
    },
    methods: {
        getVariableValue(variableName) {
            return this[variableName];
        }
    },
    computed: {
        availabilCh() { 
            this.gift = JSON.parse(this.giftProps)
            console.log(this.gift)
            let num = this.gift.availabil.split('|') 
            this.soldCheck = num[0] - num[1]
            return  `${(num[0].length > 3) ? num[0].slice(0, -3) + 'K' : num[0]} of ${(num[1].length > 3) ? num[1].slice(0, -3) + 'K' : num[1]}`
        },
        bg() {
            return `flex flex-col rounded-xl w-[calc(100%-32px)] items-center m-4 mb-0 py-[47px]  ${this.gift.bg}`
        },
        cr() {
            return `w-[20px] h-[20px] flex items-center justify-center  rounded-full ${this.gift.currency}`
        }
    },
    components: {
        Animation,
        GiftHistory
    }
}
</script>

<template>
    <div :className="bg">
        <Animation :animationData="getVariableValue(this.gift.anim)" width="267px" :loop="false" />
    </div>
    <div className="pt-3 px-4 flex items-center gap-3">
        <p className="text-[24px] font-semibold leading-[32px] text-left">{{ this.gift.name }}</p>
        <p className="px-2 text-[#007AFF] bg-[#007AFF1F] text-[14px] leading-[22px] font-medium rounded-full max-w-fit">{{ availabilCh }}</p>
    </div>
    <p className="px-4 py-2 text-left text-[#8E8E93] text-[17px] leading-[22px]">Purchase this gift for the opportunity to give it to another user.</p>
    <div className="pb-3 pl-4 flex items-center gap-2 uppercase ">
        <div :className="cr">
            <img :src="getVariableValue(this.gift.currency)" alt="">
        </div>
        {{ this.gift.price }} {{ this.gift.currency }}
    </div>
    <div className="h-3 w-full bg-black"></div>
    <div className="pt-6 px-4 pb-3 text-[#6D6D71] text-[13px] leading-[18px] uppercase text-left">Recently Actions</div>
    <GiftHistory v-for="(line, index) in data" :info="line" :index="index" :le="data.length - 1" />
    <div className="flex pt-2 px-4 pb-[34px] w-full items-center fixed bottom-0 bg-[#1E1E1EBF] backdrop-blur-[100px] border-t-[.33px] border-[#3C3C435C] left-0">
        <button className="w-full py-[14px] bg-[#007AFF] rounded-xl text-[17px] font-semibold leading-[22px]">Buy a Gift</button>
    </div>
</template>

<style scoped>
    .gift_icon {
        width: 267px;
    }

    .usdt {
        background: #009393;
    }

    .ton {
        background: #35A;
    }

    .eth {
        background: #627EEA;
    }

    .usdt img {
        width: 14px;
    }

    .ton img {
        width: 11px;
    }

    .eth img {
        width: 10px;
    }
</style>  
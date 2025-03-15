<script>
import Animation from './Animation.vue'; 
import gifts from '../assets/data/gifts.json';
import giftBlueStar from '../assets/animations/gift-blue-star.json';
import giftDeliciousCake from '../assets/animations/gift-delicious-cake.json';
import giftGreenStar from '../assets/animations/gift-green-star.json';
import giftRedStar from '../assets/animations/gift-red-star.json';
import usdt from '../assets/img/usdt.svg';
import ton from '../assets/img/ton.svg';
import eth from '../assets/img/eth.svg';
import swipeStarsL from '../assets/img/swipeStarsL.svg';
import swipeStarsR from '../assets/img/swipeStarsR.svg';

export default { 
    data() {
        return {
            gifts, 
            giftDeliciousCake,
            giftBlueStar,
            giftGreenStar,
            giftRedStar,
            eth,
            usdt,
            ton,
            time: null,
            swipeStarsL,
            swipeStarsR
        }
    },
    components: { 
        Animation,
    },
    props: {
        giftId: {
            type: Number,
            required: true
        },
        visible: {
            type: Boolean,
            required: true
        }
    },
    methods: {
        getVariableValue(variableName) {
            return this[variableName];
        },
        close() {
            console.log('close')
            this.$emit('close');
        }
    },
    computed: {
        cr() { 
            return `w-[20px] h-[20px] flex items-center justify-center  rounded-full ${this.gifts[this.giftId - 1].currency}`
        },
        availability() {
            return parseInt(this.gifts[this.giftId - 1].availabil.split('|')[0]).toLocaleString('ru-RU') + ' of ' + parseInt(this.gifts[this.giftId - 1].availabil.split('|')[1]).toLocaleString('ru-RU')
        }
    },
    mounted() {
        let now = new Date();
        this.time = `${String(now.getDate()).padStart(2, '0')}.${String(now.getMonth() + 1).padStart(2, '0')}.${now.getFullYear()} at ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
    },
    created() { 
        this.timer = setInterval(() => {
            let now = new Date();
            this.time = `${String(now.getDate()).padStart(2, '0')}.${String(now.getMonth() + 1).padStart(2, '0')}.${now.getFullYear()} at ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
        }, 1000);
    },
    beforeDestroy() {
        clearInterval(this.timer);
    } 
};
</script>

<template>
    <div className="fixed bottom-0 left-0 flex flex-col w-full items-end justify-end h-[100vh] bg-[#0000007d] z-20" v-if="visible" @click.self="close">
        <div className="w-full p-4 bg-[#1C1C1E] flex items-center justify-center flex-col rounded-t-[10px] relative ">
            <button className="w-[30px] h-[30px] flex items-center justify-center bg-[#2C2C2E] rounded-full absolute top-3 right-3 z-30" @click="close">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="16.9502" y="5.63623" width="2" height="16" rx="1" transform="rotate(45 16.9502 5.63623)" fill="#8E8E93"/>
                    <rect x="18.3643" y="16.9502" width="2" height="16" rx="1" transform="rotate(135 18.3643 16.9502)" fill="#8E8E93"/>
                </svg>
            </button>  
            <div className="flex items-center justify-center relative ">
                <img className="absolute left-[-70px] z-0" :src="swipeStarsL">
                <Animation className="gift_icon relative z-1" :animationData="getVariableValue(this.gifts[this.giftId - 1].anim)" width="9.375rem" :loop="false" />
                <img className="absolute right-[-70px] z-0" :src="swipeStarsR">
            </div> 
            <p className="pt-3 pb-6 font-semibold text-[1.5rem] leading-[2rem]">Send Gift</p>
            <table class="border-collapse bg-[#2C2C2E] rounded-xl">
                <tbody>
                    <tr class="border-b-[.33px] border-[#3C3C435C] text-left">
                        <td class="px-4 min-w-[113px] py-[10px] border-r-[.33px] border-[#3C3C435C] text-[17px] leading-[22px] text-[#8E8E93]">Name</td>
                        <td class="px-4 py-2 w-full text-[17px] leading-[22px]">{{this.gifts[this.giftId - 1].name}}</td>
                    </tr>
                    <tr class="border-b-[.33px] border-[#3C3C435C] text-left">
                        <td class="px-4 min-w-[113px] py-[10px] border-r-[.33px] border-[#3C3C435C] text-[17px] leading-[22px] text-[#8E8E93]">Date</td>
                        <td class="px-4 py-2 w-full text-[17px] leading-[22px]">{{ time }}</td>
                    </tr>
                    <tr class="border-b-[.33px] border-[#3C3C435C] text-left">
                        <td class="px-4 min-w-[113px] py-[10px] border-r-[.33px] border-[#3C3C435C] text-[17px] leading-[22px] text-[#8E8E93]">Price</td>
                        <td class="px-4 py-2 w-full text-[17px] leading-[22px] flex items-center gap-2 uppercase">
                            <div :className="cr">
                                <img :src="getVariableValue(this.gifts[giftId - 1].currency)" alt="">  
                            </div>
                            {{ this.gifts[giftId - 1].price + ' ' + this.gifts[giftId - 1].currency }}  
                        </td>
                    </tr>
                    <tr class="text-left">
                        <td class="px-4 min-w-[113px] py-[10px] border-r-[.33px] border-[#3C3C435C] text-[17px] leading-[22px] text-[#8E8E93]">Availability</td>
                        <td class="px-4 py-2 w-full text-[17px] leading-[22px]">{{ availability }}</td>
                    </tr>
                </tbody>
            </table>
        </div> 
        <div className="flex pt-2 px-4 pb-[2.125rem] w-full items-center bg-[#1E1E1EBF] backdrop-blur-[6.25rem] border-t-[.0206rem] border-[#3C3C435C] left-0">
            <button className="w-full py-[.875rem] bg-[#007AFF] rounded-xl text-[1.0625rem] font-semibold leading-[1.375rem]">Copy link to send</button>
        </div>
    </div>
</template>

<style scoped> 
    .gift_icon {
        width: 9.375rem;
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
<script>
import lottie from 'lottie-web';  
export default {
    props: {
        animationData: {
            type: Object,
            required: true
        }
    },
    mounted() {
        this.animation = lottie.loadAnimation({
            container: this.$refs.animationContainer,
            renderer: 'svg',
            loop: false,
            autoplay: true,
            animationData: this.animationData,
            rendererSettings: { 
                progressiveLoad: true, 
            }
        });
    },
    beforeUnmount() {
        this.animation.destroy();
    }
};
</script>

<template>
    <div className="menu_icon" ref="animationContainer"></div>
</template>  

<style scoped>
    div {
        width: 27px;
    }
    div svg g path {
        fill: #007AFF !important;
    }
</style>   
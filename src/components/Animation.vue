<script>
  import lottie from 'lottie-web';
  
  export default{ 
    props: {
      animationData: {
        type: Object,
        required: true
      },
      width: {
        type: String,
        required: false
      },
      loop: {
        type: Boolean,
        required: true
      },
    },
    mounted() {
      this.animation = lottie.loadAnimation({
        container: this.$refs.animationContainer,
        renderer: 'svg',
        loop: this.loop,
        autoplay: true,
        animationData: this.animationData,
      }); 
    },
    beforeUnmount() {
      this.animation.destroy();
    }
  };
  </script>

<template>
    <div className="gift_icon" ref="animationContainer"></div>
</template>
  
<style scoped>
 

</style>  
<template>
  <transition name="fade">
    <div v-if="show" class="pre-loader">
      <div class="preloader-logo">
        <img src="../../assets/media/logo.png">
      </div>
      <div class="circels">
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
      </div>
      <div class="big"></div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      show: true,
    }
  },
  mounted() {
    this.showToggle();
    this.restoreBodyHeight();
  },
  methods: {
    showToggle () {
      setTimeout(() => {
        this.show = false;
      }, 800);
      if ( this.show == true ) {
        document.querySelector('body').style.overflowY = "hidden";
      }
    },

    restoreBodyHeight() {
      setTimeout(() => {
        document.querySelector('body').style.overflowY = "scroll";
      }, 1200);
    }
  }
}
</script>

<style lang="scss" scoped>
// START:: IMPORTING MAIN FILE
@import "../../assets/sass/main.scss";
// END:: IMPORTING MAIN FILE
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1.5s;
  .logo {
    animation-name: scaleOut;
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
  }
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

@keyframes scaleOut {
  0% {
    transform: scale(1) translateY(0) rotate(360deg);
  }
  50% {
    transform: scale(0.5) translateY(10px) rotate(0);
  }
  100% {
    transform: scale(0) translateY(-10px) rotate(360deg);
  }
}

@keyframes scaleIn {
  0% {
    transform: scale(0) translateY(-10px) rotate(360deg);
  }
  50% {
    transform: scale(0.5) translateY(10px) rotate(0);
  }
  100% {
    transform: scale(1) translateY(0) rotate(360deg);
  }
}

@keyframes rotateIt {
  0% {
    transform: scale(0) rotate(0);
  }
  50% {
    transform: scale(0.3) rotate(180deg);
  }
  100% {
    transform: scale(0.7) rotate(360deg);
  }
}

.pre-loader {
  background-color: #f1f1f1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 9999;
  img {
    width: 250px;
    height: 200px;
  }
  .circels {
    display: flex;
    margin-top: 15px;
    .circle {
      width: 15px;
      height: 15px;
      margin: 8px;
      background-color: $mainColor;
      animation-name: rotateIt;
      animation-duration: 1.5s;
      animation-iteration-count: infinite;
      transform: scale(0);
      &:nth-child(1) {
        animation-delay: 0;
      }
      &:nth-child(2) {
        animation-delay: 0.1s;
        background-color: $secondryColor;
      }
      &:nth-child(3) {
        animation-delay: 0.2s;
      }
      &:nth-child(4) {
        animation-delay: 0.3s;
        background-color: $secondryColor;
      }
      &:nth-child(5) {
        animation-delay: 0.4s;
      }
      &:nth-child(6) {
        animation-delay: 0.5s;
        background-color: $secondryColor;
      }
      &:nth-child(7) {
        animation-delay: 0.6s;
      }
    }
  }
}
</style>
<template>
  <div>
    <!-- START:: PRELOADER COMPONENT -->
    <pre-loader></pre-loader>
    <!-- END:: PRELOADER COMPONENT -->
    <div class="about">
      <div
        class="container d-flex flex-column align-items-center justify-content-center"
        v-if="pageData.text != ''"
      >
        <h2 class="sec-header"> {{ $t('about_us') }} </h2>
        <div class="row">
          <div class="svg-box col-12 col-md-7">
            <img src="../assets/media/svg/about-us.svg" alt="" />
          </div>

          <div class=" info col-12 col-md-5">
            <p v-html="pageData.text"> </p>
          </div>
        </div>
      </div>
    </div>

    <div 
      class="target mt-5 mt-md-0"
      v-if=" pageData.goals.length != 0 "
    >
      <div
        class="container d-flex flex-column align-items-center justify-content-center"
      >
        <h2 class="sec-header"> {{ $t('target') }} </h2>
        <div class="row">

          <div class="col-12 col-md-4" 
            v-for="goal in pageData.goals" 
            :key="goal.goal_icon"
          >
            <div class="card d-flex flex-wrap">
              <div class="icon-box">
                <icon :name="goal.goal_icon" color="#fff" />
              </div>

              <div
                class="text  d-flex flex-column align-items-center justify-content-center"
              >
                <h5> {{ goal.goal_title }} </h5>
                <p> {{ goal.goal_text }} </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import PreLoader from "../components/ui/PreLoader.vue";

export default {
  components: {
    "pre-loader": PreLoader,
  },

  data() {
    return {
      pageData: {},
    }
  },

  methods: {
    getaboutUsData() {
      axios.get(this.$store.state.api_link+'api/setting/about', {
        headers: {
          lang: localStorage.getItem("site_locale")
        }
      })
      .then( res => this.pageData = res.data.data ) 
    },
  },

  mounted() {
    this.getaboutUsData();
  }
}
</script>

<style lang="scss" scoped>
// START:: IMPORTING MAIN FILE
@import "../assets/sass/main.scss";
// END:: IMPORTING MAIN FILE

.about {
  padding: $sectionPadding;
  min-height: 80vh;
  h2 {
    margin-bottom: -17px;
  }
  .svg-box {
    img {
      width: 100%;
      height: 100%;
    }
  }
  .info {
    display: flex;
    justify-content: center;
    align-items: center;
    word-break: break-word;
    p {
      text-align: justify;
      font-size: 18px;
      line-height: 1.6;
      color: $mainColor;
    }
  }
}

.target {
  padding-bottom: 50px;
  .card {
    padding: 10px;
    margin-top: 30px;
    position: relative;
    border: 1px dashed $mainColor;
    @include borderRadius(15px);
    .icon-box {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50px;
      height: 50px;
      background-color: $mainColor;
      position: absolute;
      top: -25px;
      opacity: 0.95;
      @include borderRadius(50%);
      @include transitioning();
      svg {
        color: #fff;
        font-size: 25px;
      }
      &:hover {
        transform: scale(1.1);
        opacity: 1;
        box-shadow: 0 0 10px 2px $mainColor;
      }
    }
    &:hover {
      .icon-box {
        transform: scale(1.1);
        opacity: 1;
        box-shadow: 0 0 10px 2px $mainColor;
      }
    }
    .text {
      h5 {
        font-weight: 700;
        color: $mainColor;
      }
      p {
        color: #666;
      }
    }
  }
}
</style>

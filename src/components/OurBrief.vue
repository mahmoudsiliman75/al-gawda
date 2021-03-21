<template>
  <div class="brief-sec">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <h2 class="sec-header">{{ $t('home_about') }}</h2>
        </div>

        <div class="col-12 col-md-6 mb-3">
          <img
            :src="data.brief.image_path"
            alt="About Us Image"
            class="about-sec-img"
          />
        </div>

        <div
          class="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center"
        >
          <p v-html="data.brief.text"></p>
          <router-link to="/about"> {{ $t('view_more') }} </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['data'],
};
</script>

<style lang="scss" scoped>
// START:: INCLUDING MAIN FILE
@import "../assets/sass/main.scss";
// END:: INCLUDING MAIN FILE

.brief-sec {
  .about-sec-img {
    width: 100%;
    height: 100%;
  }
  p {
    text-align: start;
    color: #666;
    font-size: 18px;
    &:first-child {
      color: $mainColor;
    }
  }
  a {
    text-decoration: none;
    font-weight: bold;
    color: $mainColor;
    background-color: transparent;
    padding: 5px 15px;
    border: 2px solid $mainColor;
    @include borderRadius(20px);
    @include transitioning();
    &:hover {
      background-color: $mainColor;
      color: #fff;
    }
  }
}
</style>

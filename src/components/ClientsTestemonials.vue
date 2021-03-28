<template>
  <div class="testemonuals-sec">
    <div
      class="container d-flex flex-column align-items-center justify-content-center"
      v-if=" data.testimoials.length != 0 "
    >
      <h2 class="sec-header"> {{ $t('testemonials') }} </h2>
        <div id="testemonials" class="testemonials-box carousel slide" data-ride="carousel" dir="ltr">
          <div class="carousel-inner">
            <div 
              class="carousel-item"
              v-for="(slide,index) in data.testimoials"
              :class="index == 0 ? 'active' : ''" 
              :key="slide.id"
            >
              <div class="testemonial-card">
                <q> {{ slide.body }} </q>
              </div>
              <h4> {{ slide.name }} </h4>
            </div>
          </div>

          <ol class="carousel-indicators">
            <li
              v-for="(slide,index) in data.testimoials"
              :class="index == 0 ? 'active' : ''" 
              :key="slide.id"
              data-target="#testemonials" 
              :data-slide-to="index"
            ></li>
          </ol>
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
// START:: IMPORTING MAIN FILE
@import "../assets/sass/main.scss";
// END:: IMPORTING MAIN FILE

.testemonuals-sec {
  padding: $sectionPadding;
  padding-bottom: 40px;
  .carousel-indicators {
    li {
      background-color: $mainColor;
      width: 13px;
      height: 13px;
      border-radius: 50%;
      &.active {
        background-color: $secondryColor;
        width: 15px;
        height: 15px;
        transform: translateY(-2px);
      }
    }
  }

  .carousel-inner {
    .carousel-item {
      min-height: 300px;
      width: 100%;
      font-size: 20px;
      border-radius: 8px;
      display: none;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 10px;
      &.active {
        display: flex;
      }
      .testemonial-card {
        min-width: 350px;
        background-color: #e1e1e1;
        text-align: center;
        padding: 30px 20px;
        position: relative;
        @include borderRadius(10px);
        &::before {
          content: "";
          position: absolute;
          bottom: -20px;
          left: 45%;
          display: block;
          width: 40px;
          height: 40px;
          background-color: #e1e1e1;
          transform: rotate(45deg);
        }
        q {
          font-style: italic;
          color: #555;
          text-align: start;
        }
      }
      h4 {
        margin-top: 35px;
        margin-bottom: 45px;
        color: $mainColor;
      }
    }
  }
}
</style>

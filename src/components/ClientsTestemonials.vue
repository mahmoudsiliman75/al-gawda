<template>
  <div class="testemonuals-sec">
    <div class="container">
      <h2 class="sec-header"> What Our Clients Say </h2>

      <carousel :items-to-show="1" :wrapAround="true">
        <slide v-for="slide in slides" :key="slide.id">
          <div class="testemonial-card">
            <q> {{ slide.testemonial }} </q>
          </div>
          <h4 class="cllient-name"> {{slide.clientName}} </h4>
        </slide>

        <template #addons>
          <navigation/>
          <pagination />
        </template>
      </carousel>

    </div>
  </div>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";

export default {
  components: {
    Carousel,
    Slide,
    Navigation
  },

  data() {
    return {
      slides: [
        {
          id: "1",
          testemonial:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero deserunt maiores dolore laboriosam, veniam necessitatibus minima omnis assumenda, esse iusto fuga? Recusandae ipsam deleniti, rerum quo nam aspernatur eligendi. Consequuntur.",
          clientName: "Mahmoud Siliman",
        },
        {
          id: "2",
          testemonial:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero deserunt maiores dolore laboriosam, veniam necessitatibus minima omnis assumenda, esse iusto fuga? Recusandae ipsam deleniti, rerum quo nam aspernatur eligendi. Consequuntur.",
          clientName: "Mohamed Eid",
        },
        {
          id: "3",
          testemonial:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero deserunt maiores dolore laboriosam, veniam necessitatibus minima omnis assumenda, esse iusto fuga? Recusandae ipsam deleniti, rerum quo nam aspernatur eligendi. Consequuntur.",
          clientName: "Omar Ehab",
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
// START:: IMPORTING MAIN FILE
@import "../assets/sass/main.scss";
// END:: IMPORTING MAIN FILE

.testemonuals-sec {
  padding: $sectionPadding;
  .carousel {
    .carousel__viewport {
      .carousel__track {
        .carousel__slide {
          min-height: 300px;
          width: 100%;
          color: white;
          font-size: 20px;
          border-radius: 8px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 10px;
          .testemonial-card {
            width: 80%;
            background-color: #e1e1e1;
            padding: 30px 10px;
            position: relative;
            @include borderRadius(10px);
            &::before {
              content: "";
              position: absolute;
              bottom: -20px;
              left: 50%;
              display: block;
              width: 40px;
              height: 40px;
              background-color: #e1e1e1;
              transform: rotate(45deg);
            }
            q {
              font-style: italic;
              color: #555;
            }
          }
          h4 {
            margin-top: 35px;
            color: $mainColor;
          }
        }
      }
    }
  }

  .carousel__prev {
    background-color: #f00 !important;
  }
}
</style>

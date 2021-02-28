<template>
  <div class="testemonuals-sec">
    <div class="container d-flex flex-column align-items-center justify-content-center">
      <h2 class="sec-header">What Our Clients Say</h2>

      <div class="testemonials-box">
        <splide :options="options">

          <splide-slide v-for=" slide in slides " :key="slide.id">
            <div class="testemonial-card">
              <q> {{slide.testemonial}} </q>
            </div>
            <h4> {{slide.clientName}} </h4>
          </splide-slide>

        </splide>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: {
        type        : 'loop',
        autoplay    : 'playing',
        rewind      : true,
        width       : 800,
        perPage     : 1,
        gap         : '1rem',
        pagination  : false,
        fixedHeight : 70,
        cover       : true,
        focus       : 'center',
        isNavigation: true,
      },
      slides: [
        {
          id: "1",
          testemonial:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero deserunt maiores dolore laboriosam, veniam necessitatibus minima omnis assumenda, esse iusto fuga? Recusandae ipsam deleniti, rerum quo nam aspernatur eligendi. Consequuntur.",
          clientName: "Mahmoud Siliman"
        },
        {
          id: "2",
          testemonial:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero deserunt maiores dolore laboriosam, veniam necessitatibus minima omnis assumenda, esse iusto fuga? Recusandae ipsam deleniti, rerum quo nam aspernatur eligendi. Consequuntur.",
          clientName: "Mohamed Eid"
        },
        {
          id: "3",
          testemonial:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero deserunt maiores dolore laboriosam, veniam necessitatibus minima omnis assumenda, esse iusto fuga? Recusandae ipsam deleniti, rerum quo nam aspernatur eligendi. Consequuntur.",
          clientName: "Omar Ehab"
        }
      ]
    };
  },
};
</script>

<style lang="scss" scoped>
// START:: IMPORTING MAIN FILE
@import "../assets/sass/main.scss";
// END:: IMPORTING MAIN FILE

.testemonuals-sec {
  padding: $sectionPadding;
  padding-bottom: 90px;
  .testemonials-box {
    .splide__track {
      .splide__list {
        .splide__slide {
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
          &.is-active {
            border: none !important;
          }
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
}
</style>

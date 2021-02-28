<template>
  <div class="testemonuals-sec">
    <div class="container d-flex flex-column align-items-center justify-content-center">
      <h2 class="sec-header">What Our Clients Say</h2>

      <div class="testemonials-box">
        Testemonials Will go Here
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      transform: "0px",
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

<template>
  <div>
    <div class="about">
      <div
        class="container d-flex flex-column align-items-center justify-content-center"
      >
        <h2 class="sec-header">Who We Are</h2>
        <div class="row">
          <div class="svg-box col-12 col-md-7">
            <img src="../assets/media/svg/about-us.svg" alt="" />
          </div>

          <div class=" info col-12 col-md-5">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              nostrum nemo, aut, incidunt ipsam doloremque itaque eos
              voluptates, at id temporibus. Maxime neque quaerat, nulla
              laudantium iusto hic consequuntur nisi. Lorem ipsum, dolor sit
              amet consectetur adipisicing elit. At vel eaque architecto non
              debitis pariatur quam odit quis asperiores a tenetur, natus fugit
              quas in, voluptatem saepe totam, placeat neque.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="target mt-5 mt-md-0">
      <div
        class="container d-flex flex-column align-items-center justify-content-center"
      >
        <h2 class="sec-header">Our Target</h2>
        <div class="row">
          <div class="col-12 col-md-4">
            <div class="card d-flex flex-wrap">
              <div class="icon-box">
                <icon name="gem" color="#fff" />
              </div>

              <div
                class="text  d-flex flex-column align-items-center justify-content-center"
              >
                <h5>Title</h5>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Exercitationem facilis ipsum.
                </p>
              </div>
            </div>
          </div>

          <div class="col-12 col-md-4">
            <div class="card d-flex flex-wrap">
              <div class="icon-box">
                <icon name="award" color="#fff" />
              </div>

              <div
                class="text d-flex flex-column align-items-center justify-content-center"
              >
                <h5>Title</h5>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Exercitationem facilis ipsum.
                </p>
              </div>
            </div>
          </div>

          <div class="col-12 col-md-4">
            <div class="card d-flex flex-wrap">
              <div class="icon-box">
                <!-- <b-icon-journals /> -->
                <icon name="file-invoice" color="#fff" />
              </div>

              <div
                class="text d-flex flex-column align-items-center justify-content-center"
              >
                <h5>Title</h5>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Exercitationem facilis ipsum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// START:: IMPORTING MAIN FILE
@import "../assets/sass/main.scss";
// END:: IMPORTING MAIN FILE

.about {
  padding: $sectionPadding;
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

<template>
  <div class="brief-sec">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <h2 class="sec-header">{{ secTitle }}</h2>
        </div>

        <div class="col-12 col-md-6">
          <img
            src="../assets/media/svg/coding.svg"
            alt="About Us Image"
            class="about-sec-img"
          />
        </div>

        <div
          class="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center"
        >
          <p>{{ firstDesc }}</p>
          <p>{{ lastDesc }}</p>
          <router-link to="/about"> View More </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      secTitle: "We Will Give You Future",
      firstDesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam eos voluptatum illo voluptates dolorum cupiditate omnis? Nulla ipsum cumque recusandae commodi tempore, est doloribus accusamus veritatis sed reprehenderit sit rem.",
      lastDesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam eos voluptatum illo voluptates dolorum cupiditate omnis? Nulla ipsum cumque recusandae commodi tempore, est doloribus accusamus veritatis sed reprehenderit sit rem."
    };
  }
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

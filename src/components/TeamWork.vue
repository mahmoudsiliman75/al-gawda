<template>
  <div class="teamwork-sec">
    <div class="container ">
      <div class="row justify-content-center">
        <div
          class="col-12 d-flex flex-column align-items-center justify-content-center"
        >
          <h2 class="sec-header">{{ $t('team') }}</h2>
        </div>

        <div
          class="col-12 col-md-4 px-2 mb-2"
          v-for="member in members"
          :key="member.id"
        >
          <div
            class="member-card mb-2 d-flex flex-column justify-content-center align-items-center"
          >
            <!-- START:: FIRST SVG -->
            <svg
              class="first"
              viewBox="0 0 250 250"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.3,-30.2C30.1,-29.4,44.5,-31.7,56.2,-27.2C67.8,-22.7,76.6,-11.4,80.5,2.2C84.3,15.8,83.2,31.6,71.7,36.3C60.2,41,38.2,34.6,24.5,42.2C10.8,49.9,5.4,71.6,-3.9,78.3C-13.2,85,-26.3,76.7,-31.6,64.2C-36.9,51.7,-34.2,35,-41.9,23.6C-49.7,12.1,-67.8,6.1,-75.9,-4.7C-84.1,-15.5,-82.4,-31,-72.5,-38.7C-62.6,-46.4,-44.6,-46.2,-31.2,-44.9C-17.7,-43.5,-8.9,-41.1,-1.8,-37.9C5.2,-34.7,10.4,-30.9,20.3,-30.2Z"
                transform="translate(100 100)"
              />
            </svg>
            <!-- END:: FIRST SVG -->

            <img :src="member.imgUrl" />

            <h4>{{ member.name }}</h4>
            <h6>{{ member.role }}</h6>

            <ul class="list-unstyled">
              <li>
                <a :href="member.faceUrl" class="member-social">
                  <icon name="facebook-square" color="#9B7C29" />
                </a>
              </li>

              <li>
                <a :href="member.twitterUrl" class="member-social">
                  <icon name="twitter-square" color="#9B7C29" />
                </a>
              </li>

              <li>
                <a :href="member.linkedUrl" class="member-social">
                  <icon name="linkedin" color="#9B7C29" />
                </a>
              </li>
            </ul>

            <!-- START:: LAST SVG -->
            <svg
              class="last"
              viewBox="0 0 250 250"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.3,-30.2C30.1,-29.4,44.5,-31.7,56.2,-27.2C67.8,-22.7,76.6,-11.4,80.5,2.2C84.3,15.8,83.2,31.6,71.7,36.3C60.2,41,38.2,34.6,24.5,42.2C10.8,49.9,5.4,71.6,-3.9,78.3C-13.2,85,-26.3,76.7,-31.6,64.2C-36.9,51.7,-34.2,35,-41.9,23.6C-49.7,12.1,-67.8,6.1,-75.9,-4.7C-84.1,-15.5,-82.4,-31,-72.5,-38.7C-62.6,-46.4,-44.6,-46.2,-31.2,-44.9C-17.7,-43.5,-8.9,-41.1,-1.8,-37.9C5.2,-34.7,10.4,-30.9,20.3,-30.2Z"
                transform="translate(100 100)"
              />
            </svg>
            <!-- END:: LAST SVG -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  inject: ["members"]
};
</script>

<style lang="scss" scoped>
// START:: IMPORT MAIN FILE
@import "../assets/sass/main.scss";
// END:: IMPORT MAIN FILE

.teamwork-sec {
  padding: $sectionPadding;
  .member-card {
    position: relative;
    border: 1px solid #e1e1e1;
    overflow: hidden;
    @include borderRadius(10px);
    height: 350px;
    svg {
      &.first {
        position: absolute;
        top: -250px;
        right: -250px;
        z-index: -1;
        transform: rotate(90deg);
        path {
          fill: $mainColor;
        }
      }
      &.last {
        position: absolute;
        bottom: -295px;
        left: -196px;
        z-index: -1;
        transform: rotate(259deg);
        path {
          fill: $mainColor;
        }
      }
    }
    img {
      min-width: 150px;
      max-width: 150px;
      min-height: 150px;
      max-height: 150px;
      margin-bottom: 15px;
      border: 3px solid $mainColor;
      @include borderRadius(50%);
    }
    ul {
      margin-bottom: 0;
      padding: 25px 12px 8px;
      border-radius: 91% 0 0 0%;
      position: absolute;
      right: 0;
      bottom: 0;
      display: block;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      width: 60%;
      li {
        margin: 0 8px;
        transform: scale(1.1);
        .member-social {
          text-decoration: none;
          color: $secondryColor;
          font-size: 22px;
          @include transitioning();
          &:hover {
            color: $mainColor;
          }
        }
      }
    }
  }
  .view-more-btn {
    a {
      text-decoration: none;
      display: inline-block;
      color: $mainColor;
      font-weight: bold;
      margin: 15px 0;
      padding: 5px 10px;
      border: 2px solid $mainColor;
      @include borderRadius(20px);
      @include transitioning();
      &:hover {
        color: #fff;
        background-color: $mainColor;
      }
    }
  }
}

@media (max-width: 767px) {
  .teamwork-sec {
    .member-card {
      svg {
        &.first {
          top: -363px;
          right: -318px;
          transform: rotate(95deg);
        }
        &.last {
          bottom: -369px !important;
          left: -224px !important;
          transform: rotate(256deg) !important;
        }
      }
    }
  }
}
</style>

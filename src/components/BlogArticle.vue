<template>
  <div>
    <!-- START:: PRELOADER COMPONENT -->
    <pre-loader></pre-loader>
    <!-- END:: PRELOADER COMPONENT -->

    <!-- START:: HEADER PIC -->
    <div class="header-pic">
      <img src="../assets/media/svg/blog.svg" alt="" />

      <!-- START:: SECTION CURVE -->
      <div class="curve">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200,0H0V120H281.94C572.9,116.24,602.45,3.86,602.45,3.86h0S632,116.24,923,120h277Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
      <!-- END:: SECTION CURVE -->
    </div>
    <!-- END:: HEADER PIC -->

    <div class="blog-article">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-md-9 article-card">
            <div class="article-pic">
              <img :src="article.image_path" alt="Article Image" />
            </div>

            <div
              class="article-head d-flex flex-column justify-content-center align-items-center"
            >
              <h3 class="mt-3 mb-0 text-center">{{ article.title }}</h3>
              <span 
                v-if="article.author != '' "  
                class="mb-3 auther"
              >
                {{ article.author }}
              </span>

              <span 
                v-if="article.date != '' " 
                class="mb-3 date"
              > 
                " {{ article.date }} "
              </span>
            </div>

            <p class="article-subject" v-html="article.desc"></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import PreLoader from "../components/ui/PreLoader.vue";

export default {
  components: {
    "pre-loader": PreLoader,
  },

  data() {
    return {
      article: {},
      articleId: this.$route.params.articleId,
    };
  },

  methods: {
    getSinglePost() {
      axios.get(this.$store.state.api_link+"api/articles/"+this.articleId, {
        headers: {
          lang: localStorage.getItem("site_locale")
        }
      } )
      .then( res => this.article = res.data.data )
    }
  },

  mounted() {
    this.getSinglePost();
  },
};
</script>

<style lang="scss" scoped>
// START:: IMPORTING MAIN FILE
@import "../assets/sass/main.scss";
// END:: IMPORTING MAIN FILE

.header-pic {
  background-image: url("../assets/media/blog2_bg.jpg");
  background-size: cover;
  min-height: 450px;
  max-height: 450px;
  display: flex;
  justify-content: center;
  img {
    min-width: 400px;
    min-height: 400px;
    max-width: 400px;
    max-height: 400px;
  }

  .curve {
    position: absolute;
    top: 535px;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
  }

  .curve svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 115px;
  }

  .curve .shape-fill {
    fill: #ffffff;
  }
}

.blog-article {
  padding: $sectionPadding;
  padding-bottom: 50px;
  .article-card {
    background-color: $textColor;
    padding: 20px;
    box-shadow: 0 0 8px 1px $secondryColor;
    @include borderRadius(10px);
    text-decoration: none;
    .article-pic {
      width: 100%;
      min-height: 350px;
      max-height: 350px;
      img {
        width: 100%;
        min-height: 350px;
        max-height: 350px;
        border-radius: 10px 10px 0 0;
      }
    }
    .article-head {
      h3 {
        color: $mainColor;
        font-weight: 600;
      }
      .auther {
        color: #888;
      }
      .date {
        color: $secondryColor;
      }
    }
    .article-subject {
      text-align: justify;
      font-size: 20px;
      line-height: 1.6;
      color: #666;
    }
  }
}

// START:: MOBILE MEDIA
@media (max-width: 700px) {
  .header-pic {
    min-height: 400px;
    max-height: 400px;
    .curve {
      display: none !important;
    }
  }

  .blog-article {
    padding: 0;
    .article-card {
      box-shadow: 0 0 0 0 $secondryColor;
      @include borderRadius(0);
    }
  }
}
// END:: MOBILE MEDIA
</style>

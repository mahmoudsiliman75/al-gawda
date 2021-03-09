<template>
  <div class="blog">
    <div
      class="container d-flex flex-column align-items-center justify-content-center"
    >
      <h2 class="sec-header"> {{ $t('blog') }} </h2>
      <div class="row justify-content-center">
        <div
          class="col-12 col-md-8 my-5 px-4 card-box border-bottom"
          v-for="post in posts"
          :key="post.id"
        >
          <router-link
            :to="{ name: 'BlogArticle', params: { articleId: post.id } }"
          >
            <h3 class="title">{{ post.title }}</h3>
            <p class="desc">{{ post.subject }}</p>
            <p class="author d-flex"><span> {{ $t('by') }}: </span> {{ post.author }}</p>
            <p class="date d-flex"><span> {{ $t('posted_in') }}: </span> {{ post.date }}</p>
            <button> {{ $t('view_more') }} </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      posts: [],
    }
  },

  computed: {
    blogs() {
      return this.$store.state.blogs;
    }
  },

  methods: {
    getPosts() {
      axios.get("http://jawda-academy.com/api/articles")
      .then( res => this.posts = res.data.data )
    }
  },

  mounted() {
    this.getPosts();
  }
};
</script>

<style lang="scss" scoped>
// START:: IMPORTING MAIN FILE
@import "../assets/sass/main.scss";
// END:: IMPORTING MAIN FILE

.blog {
  padding: $sectionPadding;
  padding-bottom: 50px;
  .card-box {
    padding-bottom: 15px;
    text-align: start;
    a {
      text-decoration: none;
      .title {
        color: $mainColor;
      }
      .desc {
        color: #555;
        text-align: justify;
      }
      .author,
      .date {
        color: #888;
        margin-bottom: 0;
        span {
          color: $secondryColor;
          font-weight: bold;
        }
      }
    }
    button {
      padding: 5px 10px;
      margin-top: 15px;
      background-color: transparent;
      border: 2px solid $mainColor;
      color: $mainColor;
      font-size: 13px;
      font-weight: bold;
      text-transform: uppercase;
      @include borderRadius(20px);
      @include transitioning();
      &:hover {
        background-color: $mainColor;
        color: #fff;
      }
    }
  }
}
</style>

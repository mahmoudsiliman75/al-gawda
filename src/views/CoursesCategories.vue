<template>
  <div class="courses-cats">
    <!-- START:: PRELOADER COMPONENT -->
    <pre-loader></pre-loader>
    <!-- END:: PRELOADER COMPONENT -->
    <div
      class="container d-flex flex-column align-items-center justify-content-center"
    >
      <h2 class="sec-header"> {{ $t('courses') }} </h2>
      <div class="row justify-content-center">
        <div
          class="col-12 col-md-4 my-3"
          v-for="category in Thecategories"
          :key="category.id"
        >
          <router-link
            :to="{ name: 'CategoryContent', params: { id: category.id } }"
          >
            <div class="card category-card">
              <img :src="category.image" class="card-img-top" alt="..." />
              <div class="card-body text-center">
                <h5 class="card-title">{{ category.name }}</h5>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import PreLoader from "../components/ui/PreLoader.vue";

export default {
  components: {
    "pre-loader": PreLoader,
  },

  data() {
    return {
      Thecategories: [],
    }
  },

  computed: {
    categories() {
      return this.$store.state.coursesCategories;
    }
  },

  methods: {
    getCategoryData() {
      axios.get("http://jawda-academy.com/api/categories/")
      .then( res => this.Thecategories = res.data.data )
    }
  },

  mounted() {
    this.getCategoryData();
  }
};
</script>

<style lang="scss" scoped>
// START:: IMPORT MAIN FILE
@import "../assets/sass/main.scss";
// END:: IMPORT MAIN FILE

.courses-cats {
  padding: $sectionPadding;
  padding-bottom: 50px;
  min-height: 80vh;
  a {
    text-decoration: none;
    .category-card {
      img {
        width: 100%;
        min-height: 195px;
        max-height: 195px;
      }
      .card-body {
        h5 {
          color: $mainColor;
          font-weight: 600;
        }
      }
    }
  }
}
</style>

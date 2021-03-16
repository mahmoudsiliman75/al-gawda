<template>
  <div class="our-team">
    <team-work :allInstructors="instructors"></team-work>
  </div>
</template>

<script>
import TeamWork from "../components/TeamWork.vue";
import axios from "axios";

export default {
  components: {
    "team-work": TeamWork
  },

  data() {
    return {
      instructors: [],
    }
  },

  methods: {
    getMemberData() {
      axios.get(this.$store.state.api_link+'api/instructors')
      .then( res => this.instructors = res.data.data )
    }
  },

  mounted() {
    this.getMemberData();
  }
};
</script>

<style lang="scss" scoped>
// START:: IMPORTING MAIN FILE
@import "../assets/sass/main.scss";
// END:: IMPORTING MAIN FILE
.our-team {
  min-height: 80vh;
  padding-bottom: 60px;
}
</style>

<template>
  <div class="profile">
    <div class="container-fluid">
      <div class="row justify-content-between">
        <div class="col-md-9">content</div>

        <!-- START:: INCLUDING USER MENU -->
        <user-menu></user-menu>
        <!-- END:: INCLUDING USER MENU -->

      </div>
    </div>
  </div>
</template>

<script>
import UserMenu from "../components/layouts/UserProfileMenu";
export default {
  components: {
    "user-menu": UserMenu,
  }
}
</script>

<style lang="scss" scoped>
// START:: IMPORTING MAIN FILE
@import "../assets/sass/main.scss";
// END:: IMPORTING MAIN FILE

// .profile {}
</style>
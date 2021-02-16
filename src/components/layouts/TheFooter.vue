<template>
  <footer>
    <div class="container">
      <div class="row justify-content-around">
        <div class="col-4 col-md-2 p-2">
          <div class="footer-icon">
            <img src="../../assets/media/logo.png" alt="Logo">
          </div>
        </div>

        <div class="col-12 col-md-3 p-2">
          <h3> Use Links </h3>
          <ul class="short-cuts list-unstyled">
            <li>
              <router-link to="/"> Home </router-link>
            </li>

            <li>
              <router-link to="/about"> About Us </router-link>
            </li>

            <li>
              <router-link to="/courses"> Courses </router-link>
            </li>

            <li>
              <router-link to="/team"> Out Team </router-link>
            </li>

            <li>
              <router-link to="/blog"> Blog </router-link>
            </li>

            <li>
              <router-link to="/contact"> Contact </router-link>
            </li>
          </ul>
        </div>
      </div>

      </div>
        <div class="copy-right col-12 text-center d-flex justify-content-between">
          <div>
            powered By <a href="https://www.technomasr.com/"> Tehcnomasr </a>
          </div>

          <div>
            &copy; Al Gawda 2021
          </div>
      </div>

  </footer>
</template>

<style lang="scss" scoped>
// START:: IMPORTING MAIN FILE
@import "../../assets/sass/main.scss";
// END:: IMPORTING MAIN FILE

footer {
  background-color: $darkColor;
  .footer-icon {
    img {
      max-width: 100%;
      min-width: 100%;
      max-height: 100%;
      min-height: 100%;
    }
  }
  h3 {
    color: $secondryColor;
  }
  .short-cuts {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    li {
      text-align: start;
    }
    a {
      text-decoration: none;
      color: #fff;
      margin: 5px;
      font-size: 18px;
      @include transitioning();
      &:hover {
        color: $secondryColor;
      }
    }
  }
  .copy-right {
    padding: 5px 10px;
    background-color: #333;
    color: $secondryColor;
    a {
      text-decoration: none;
      color: #0079be;
    }
  }
}
</style>
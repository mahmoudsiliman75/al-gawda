<template>
  <footer>
    <div class="copy-right col-12 text-center d-flex justify-content-between">
      <div class="d-flex">
        {{ $t('powered') }} <a href="https://www.technomasr.com/" class="mx-2"> {{ $('techno_masr') }} </a>
      </div>

      <div>
        &copy; Al Gawda 2021
        TTTTTTTESTTTTTTTTT
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

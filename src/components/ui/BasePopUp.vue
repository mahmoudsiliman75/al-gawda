<template>
  <div></div>
  <dialog open>
    <h2> 
      You Must Download Our Mobile App To Watch These Videos
    </h2>
    <slot>

    </slot>
  </dialog>
</template>

<style lang="scss" scoped>
// START:: IMPORTING MAIN FILE
@import "../../assets/sass/main.scss";
// END:: IMPORTING MAIN FILE
div {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 10;
}

dialog {
  padding: 20px !important;
  position: fixed;
  top: 20vh;
  left: 5%;
  width: 90%;
  z-index: 100;
  border: none;
  box-shadow: 0 2px 8px $secondryColor;
  padding: 0;
  margin: 0;
  overflow: hidden;
  @include borderRadius(10px);
  h2 {
    color: $mainColor;
    margin: 10px 0;
  }
}

@media (min-width: 768px) {
  dialog {
    left: calc(50% - 30rem);
    width: 60rem;
  }
}
</style>
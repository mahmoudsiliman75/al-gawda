<template>
  <div class="contact-us">
    <div class="container">
      <h2 class="sec-header"> Get In Touch With Us </h2>

      <div class="row">
        <div class="map-box col-12 col-md-6">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d16261.614781627883!2d31.37979608834165!3d31.037854809698906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2seg!4v1613205394061!5m2!1sar!2seg" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        </div>

        <div class="form-box col-12 col-md-6">
          <form>
            <div class="row">
              <div class="form-controle col-12 col-md-6 mb-3">
                <label for="name" class="d-block mb-2"> Your Name </label>
                <input id="name" type="text" name="name" placeholder="Your Name">
              </div>

              <div class="form-controle col-12 col-md-6 mb-3">
                <label for="phone" class="d-block mb-2"> Phone Number </label>
                <input id="phone" type="tele" name="phone" placeholder="Phone Number">
              </div>

              <div class="form-controle col-12 col-md-6 mb-3">
                <label for="email" class="d-block mb-2">  Email </label>
                <input id="email" type="text" name="email" placeholder="Email">
              </div>

              <div class="form-controle col-12">
                <label for="email" class="d-block mb-2"> Message </label>
                <textarea id="message" placeholder="Write Your Message..."></textarea>
              </div>

              <div class="form-controle col-12">
                <button> Send </button>
              </div>

            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// START:: IMPORTING MAIN FILE
@import "../assets/sass/main.scss";
// END:: IMPORTING MAIN FILE

.contact-us {
  padding: $sectionPadding;
  .row {
    .map-box {
      padding: 0;
      iframe {
        width: 100%;
        height: 100%;
      }
    }
    .form-box {
      position: relative;
      overflow: hidden;
      background-color: #f1f1f1;
      border-right: 2px solid $mainColor;
      form {
        padding: 8px;
        .form-controle {
          label {
            text-align: start;
            color: $mainColor;
          }
          input, 
          textarea {
            width: 100%;
            padding: 3px 10px;
            border: 1px solid $mainColor;
            border-radius: 8px;
            &:focus {
              outline: none;
            }
          }
          textarea {
            height: 200px;
          }
          button {
            margin-top: 15px;
            padding: 5px 20px;
            border: 1px solid $mainColor;
            color: $mainColor;
            @include borderRadius(20px);
            @include transitioning();
            &:hover {
              color: #fff;
              background-color: $mainColor;
            }
          }
        }
      }
    }
  }
}
</style>
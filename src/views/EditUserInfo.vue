<template>
  <div class="profile">
    <div class="container-fluid">
      <div class="row justify-content-center">
        <!-- START:: INCLUDING USER MENU -->
        <user-menu></user-menu>
        <!-- END:: INCLUDING USER MENU -->

        <div class="col-11 content_wraper">
          <div class="header_wraper">
            <h2 class="sec-header"> Edit My Info </h2>
          </div>

          <div class="form_wraper">
            <form>
              <div class="row">
                <div class="form-controle col-12 mb-3">
                  <label for="name" class="d-block mb-2"> {{ $t('name') }} </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    :placeholder="$t('name')"
                  />
                </div>

                <div class="form-controle col-12 mb-3">
                  <label for="phone" class="d-block mb-2"> {{ $t('phone') }} </label>
                  <input
                    id="phone"
                    type="tele"
                    name="phone"
                    :placeholder="$t('phone')"
                  />
                </div>

                <div class="form-controle col-12 mb-3">
                  <label for="email" class="d-block mb-2"> {{ $t('email') }} </label>
                  <input
                    id="email"
                    type="text"
                    name="email"
                    :placeholder="$t('email')"
                  />
                </div>

                <div class="form-controle col-12 mb-3">
                  <label for="new_pass" class="d-block mb-2"> {{ $t('new_password') }} </label>
                  <input
                    id="new_pass"
                    type="password"
                    name="new_pass"
                    :placeholder="$t('new_password')"
                  />
                </div>

                <div class="form-controle col-12 mb-3">
                  <label for="email" class="d-block mb-2"> {{ $t('confirm_password') }} </label>
                  <input
                    id="email"
                    type="text"
                    name="email"
                    :placeholder="$t('confirm_password')"
                  />
                </div>

                <div class="form-controle col-12 d-flex justify-content-center">
                  <button> {{ $t('save') }} </button>
                </div>
              </div>
            </form>
          </div>
        </div>
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

.profile {
  .content_wraper {
    padding: $sectionPadding;
    min-height: 70vh;
    .header_wraper {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .form_wraper {
      position: relative;
      overflow: hidden;
      background-color: #f1f1f1;
      @include borderRadius(15px);
      box-shadow: 0 0 15px 2px #888;
      margin-bottom: 60px;
      form {
        padding: 20px;
        .form-controle {
          label {
            text-align: start;
            color: $mainColor;
          }
          input,
          textarea {
            width: 100%;
            padding: 10px;
            border: none;
            box-shadow: 0 0 15px 2px #888;
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
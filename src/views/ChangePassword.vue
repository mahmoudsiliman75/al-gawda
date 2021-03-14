<template>
  <div class="profile">
    <div class="container-fluid">
      <div class="row justify-content-center">
        <!-- START:: INCLUDING USER MENU -->
        <user-menu></user-menu>
        <!-- END:: INCLUDING USER MENU -->

        <div class="col-11 d-flex flex-column align-items-center justify-content-center content_wraper">
          <div class="header_wraper">
            <h2 class="sec-header"> {{ $t('reset_pass') }} </h2>
          </div>

          <div class="form_wraper col-12 col-md-6">
            <form @submit.prevent="submitrResestData()">
              <div class="row">
                <div class="form-controle col-12 mb-3">
                  <label for="recent_password" class="d-block mb-2"> {{ $t('recent_password') }} </label>
                  <input
                    id="recent_password"
                    type="password"
                    name="pasrecent_passwordsword"
                    v-model="formData.old_password"
                    :placeholder="$t('recent_password')"
                  />
                </div>

                <div class="form-controle col-12 mb-3">
                  <label for="new_password" class="d-block mb-2"> {{ $t('new_password') }} </label>
                  <input
                    id="new_password"
                    type="password"
                    name="new_password"
                    v-model="formData.new_password"
                    :placeholder="$t('new_password')"
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
import axios from 'axios';
import UserMenu from "../components/layouts/UserProfileMenu";
export default {
  components: {
    "user-menu": UserMenu,
  },

  data() {
    return {
      formData: {
        old_password: '',
        new_password: '',
      },
    }
  },

  methods: {
    successSweetAlert(message) {
      this.$swal( "", message , "success" );
    },

    errorSweetAlert(messages) {
      var box = '';
      messages.forEach(el => {
        box+= (el+'\n')
      });
      this.$swal( "", box, "error" );
    },

    submitrResestData() {
      axios.post('http://jawda-academy.com/api/clients/change_password', this.formData, {
        headers: {
          'x-api-key': localStorage.getItem('user_token')
        }
      })
      .then( res => {
        if ( res.data.success ) {
          this.successSweetAlert(this.$t('successfuly_saved'));
          this.formData.old_password = "";
          this.formData.new_password = "";
          return
        }
        this.errorSweetAlert( res.data.message )
      })
    },
  },
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
          a {
            text-decoration: none;
            color: $secondryColor;
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
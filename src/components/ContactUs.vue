<template>
  <div class="contact-us">
    <!-- START:: PRELOADER COMPONENT -->
    <pre-loader></pre-loader>
    <!-- END:: PRELOADER COMPONENT -->

    <div
      class="container d-flex flex-column align-items-center justify-content-center"
    >
      <h2 class="sec-header"> {{ $t('contact') }} </h2>

      <div class="row">
        <div class="map-box col-12 col-md-6">
          <iframe
            :src="theMap"
            frameborder="0"
            style="border:0;"
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>
          <div class="branch_info">
            <h4> {{ $t('main_branch') }} </h4>
            <ul class="list-unstyled">
              <li> 
                <icon name="map-marker" size="25px"/>
                <span> Main Branch Address - Main Branch Region </span>
              </li>
              <li> 
                <icon name="mobile-alt" size="25px"/>
                <a href="tele:01000000001"> 01000000001 </a>
              </li>
              <li> 
                <icon name="whatsapp" size="25px"/>
                <a href="https://wa.me/01000000022"> 01000000022 </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="form-box col-12 col-md-6">
          <form @submit.prevent="submitContactForm()">
            <div class="row p-3">
              <div class="form-controle col-12 col-md-6 mb-3">
                <label for="name" class="d-block mb-2"> {{ $t('name') }} </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  :placeholder="$t('name')"
                  v-model="contactFormData.name"
                />
              </div>

              <div class="form-controle col-12 col-md-6 mb-3">
                <label for="phone" class="d-block mb-2"> {{ $t('phone') }} </label>
                <input
                  id="phone"
                  type="tele"
                  name="phone"
                  :placeholder="$t('phone')"
                  v-model="contactFormData.mobile"
                />
              </div>

              <div class="form-controle col-12 col-md-6 mb-3">
                <label for="email" class="d-block mb-2"> {{ $t('email') }} </label>
                <input
                  id="email"
                  type="text"
                  name="email"
                  :placeholder="$t('email')"
                  v-model="contactFormData.email"
                />
              </div>

              <div class="form-controle col-12">
                <label for="email" class="d-block mb-2"> {{ $t('message') }} </label>
                <textarea
                  id="message"
                  :placeholder="$t('write_message')"
                  v-model="contactFormData.message"
                ></textarea>
              </div>

              <div class="form-controle col-12 d-flex justify-content-center">
                <button> {{ $t('send') }} </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="header_wraper d-flex justify-content-center align-items-center mt-5">
        <h2 class="sec-header"> {{ $t('our_branches') }} </h2>
      </div>

      <div 
        class="row justify-content-center" 
        style="box-shadow: none"
      >
        <div class="map-box col-12 col-md-4 p-2 mb-4">
          <iframe
            :src="theMap"
            frameborder="0"
            style="border:0;"
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>
          <div class="branch_info">
            <h4> Branch Name </h4>
            <ul class="list-unstyled">
              <li> 
                <icon name="map-marker" size="25px"/>
                <span> Branch Address - Branch Region </span>
              </li>
              <li> 
                <icon name="mobile-alt" size="25px"/>
                <a href="tele:01000000001"> 01000000001 </a>
              </li>
              <li> 
                <icon name="whatsapp" size="25px"/>
                <a href="https://wa.me/01000000022"> 01000000022 </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="map-box col-12 col-md-4 p-2 mb-4">
          <iframe
            :src="theMap"
            frameborder="0"
            style="border:0;"
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>
          <div class="branch_info">
            <h4> Branch Name </h4>
            <ul class="list-unstyled">
              <li> 
                <icon name="map-marker" size="25px"/>
                <span> Branch Address - Branch Region </span>
              </li>
              <li> 
                <icon name="mobile-alt" size="25px"/>
                <a href="tele:01000000001"> 01000000001 </a>
              </li>
              <li> 
                <icon name="whatsapp" size="25px"/>
                <a href="https://wa.me/01000000022"> 01000000022 </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="map-box col-12 col-md-4 p-2 mb-4">
          <iframe
            :src="theMap"
            frameborder="0"
            style="border:0;"
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>
          <div class="branch_info">
            <h4> Branch Name </h4>
            <ul class="list-unstyled">
              <li> 
                <icon name="map-marker" size="25px"/>
                <span> Branch Address - Branch Region </span>
              </li>
              <li> 
                <icon name="mobile-alt" size="25px"/>
                <a href="tele:01000000001"> 01000000001 </a>
              </li>
              <li> 
                <icon name="whatsapp" size="25px"/>
                <a href="https://wa.me/01000000022"> 01000000022 </a>
              </li>
            </ul>
          </div>
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
      theMap: null,
      contactFormData: {
        name: '',
        mobile: '',
        email: '',
        message: ''
      }
    }
  },

  methods: {
    errorSweetAlert(messages) {
      var box = '';
      messages.forEach(el => {
        box+= (el+'\n')
      });
      this.$swal( "", box, "error" );
    },

    successSweetAlert(message) {
      this.$swal( "", message , "success" );
    },

    getMapData() {
      axios.get(this.$store.state.api_link+'api/setting/map')
      .then( res => this.theMap = res.data.data.map )
    },

    submitContactForm() {
      axios.post(this.$store.state.api_link+'api/contact', this.contactFormData)
      .then( res => {
        if ( res.data.success ) {
          this.successSweetAlert( this.$t('successfuly_sent') );
          this.contactFormData.name = '';
          this.contactFormData.mobile = '';
          this.contactFormData.email = '';
          this.contactFormData.message = '';
          return
        }
        this.errorSweetAlert( res.data.message )
      })
    }
  },

  mounted() {
    this.getMapData();
  },
}
</script>

<style lang="scss" scoped>
// START:: IMPORTING MAIN FILE
@import "../assets/sass/main.scss";
// END:: IMPORTING MAIN FILE

.contact-us {
  padding: $sectionPadding;
  padding-bottom: 50px;
  .row {
    box-shadow: 0 0 15px #c2c2c2;
    .map-box {
      padding: 0;
      padding-bottom: 25px;
      iframe {
        width: 100%;
        height: 70%;
        min-height: 335px;
      }

      .branch_info {
        padding-bottom: 20px;
        h4 {
          color: $mainColor;
          font-weight: 600;
          margin: 8px 0;
          text-align: center;
        }

        ul {
          padding: 0 20px;
          li {
            display: flex;
            margin-bottom: 10px;
            svg {
              margin-inline-end: 8px;
              color: $secondryColor;
            }
            a {
              text-decoration: none;
            }
            a,
            span {
              color: #888
            }
          }
        }
      }
    }
    .form-box {
      position: relative;
      overflow: hidden;
      background-color: #f1f1f1;
      border-right: 2px solid $mainColor;
      form {
        // padding: 8px;
        .row {
          box-shadow: none;
        }
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

<template>
  <div class="login_wraper">
    <section>
      <div class="box">
        
        <div class="square" style="--i:0;"></div>
        <div class="square" style="--i:1;"></div>
        <div class="square" style="--i:2;"></div>
        <div class="square" style="--i:3;"></div>
        <div class="square" style="--i:4;"></div>
        <div class="square" style="--i:5;"></div>
        
        <div class="form-container"> 
          <div class="form"> 
            <h2 class="text-center"> {{ $t('login') }} </h2>
            <form action="" @submit.prevent="submitLogin()">
              <div class="inputBx">
                <input type="email" required="required" v-model="loginData.email">
                <span> {{ $t('email') }} </span>
                <img src="https://www.flaticon.com/svg/static/icons/svg/709/709699.svg" alt="user">
              </div>
              <div class="inputBx password">
                <input 
                  id="password-input" 
                  :type="inputType" 
                  name="password" 
                  required="required"
                  v-model="loginData.password"
                >

                <span>{{ $t('password') }}</span>
                <img src="https://www.flaticon.com/svg/static/icons/svg/1828/1828471.svg" alt="lock">
                <button class="password-control" @click.prevent="togglePassword"> 
                  <icon name="eye" color="#fff" v-if="inputType == 'password'" size="22px" />
                </button>

                <button class="password-control" @click.prevent="togglePassword"> 
                  <icon name="eye-slash" color="#fff" v-if="inputType == 'text'" size="22px" />
                </button>
                
                
              </div>

              <div class="inputBx d-flex">
                <input type="submit" :value=" $t('login') "> 
              </div>
            </form>
            <p> {{ $t('forgert_pass') }} <router-link to="/reset"> {{ $t('click_here') }} </router-link></p>
            <p> {{ $t('no_accout') }} <router-link to="/sign_up"> {{ $t('sign_up') }} </router-link></p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      inputType: 'password',
      loginData: {
        email: '',
        password: '',
      }
    }
  },

  methods: {
    sweetAlert(messages) {
      this.$swal( "", messages.toString(), "error" );
    },

    togglePassword() {
      this.inputType = this.inputType == 'password' ? 'text' : 'password';
    },

    submitLogin() {
      axios.post(this.$store.state.api_link+'api/clients/login', this.loginData)
      .then( res => {
        if ( res.data.success == true ) {
          this.saveUserDataAtLocalStorage(res);
          this.$router.push('/');
        } else {
          this.sweetAlert(res.data.message)
        }
      })
      .catch( error => console.log( error ) )
    },

    saveUserDataAtLocalStorage(res) {
      localStorage.setItem('user_token', res.data.data.api_token);
      localStorage.setItem('user', JSON.stringify(res.data.data));
      this.$store.state.api_token = localStorage.getItem('user_token');
    }
  },

  beforeCreate() {
    if ( localStorage.getItem("user_token") ) {
      this.$router.push('/')
      // TODO: validate token
    }
  },
}
</script>

<style lang="scss" scoped>
// START:: IMPORT MAIN FILE
@import "../assets/sass/main.scss";
// END:: IMPORT MAIN FILE

.login_wraper {
  overflow-x: hidden;
}

img {
  width: 32px;
}

section {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  background: linear-gradient(-45deg, #8bacc5, rgb(55, 118, 160) ,#bbf1fa);
  background-size: 400% 400%;
  animation: gradient 10s ease infinite;
}

@keyframes gradient {
0% {
  background-position: 0% 50%;
  }
50% {
  background-position: 100% 50%;
  }
100% {
  background-position: 0% 50%;
  }
}

.box {
  position: relative;
  padding: 50px 0;

  .square {
    position: absolute;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(5px);
    box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 15px;
    animation: square 10s linear infinite;
    animation-delay: calc(-1s * var(--i));
  }
  
  @keyframes square {
    0%,100% {
      transform: translateY(-20px);
    }
    
    50% {
      transform: translateY(20px);
    }
  }
  
  .square:nth-child(1) {
    width: 100px;
    height: 100px;
    top: -15px;
    right: -45px;
  }
  
  .square:nth-child(2) {
    width: 150px;
    height: 150px;
    top: 105px;
    left: -125px;
    z-index: 2;
  }
  
  .square:nth-child(3) {
    width: 60px;
    height: 60px;
    bottom: 85px;
    right: -45px;
    z-index: 2;
  }
  
  .square:nth-child(4) {
    width: 50px;
    height: 50px;
    bottom: 35px;
    left: -95px;
  }
  
  .square:nth-child(5) {
    width: 50px;
    height: 50px;
    top: -15px;
    left: -25px;
  }
  
  .square:nth-child(6) {
    width: 85px;
    height: 85px;
    top: 165px;
    right: -155px;
    z-index: 2;
  }
}

.form-container {
  cursor: pointer;
  position: relative;
  padding: 60px;
  min-height: 380px;
  min-width: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  border-radius: 10px;
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.2);
}

.form-container::after {
  content: '';
  position: absolute;
  top: 5px;
  right: 5px;
  bottom: 5px;
  left: 5px;
  border-radius: 5px;
  pointer-events: none;
  background: linear-gradient( to bottom, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 2%
  );
}

.form {
  position: relative;
  width: 100%;
  height: 100%;

  h2 {
    color: #fff;
    letter-spacing: 2px;
    margin-bottom: 30px;
  }

  .inputBx {
    position: relative;
    width: 100%;
    margin-bottom: 35px;
    
    input {
      direction: ltr;
      width: 100%;
      outline: none;
      border: none;
      border: 1px solid rgba(255, 255, 255, 0.2);
      background: rgba(255, 255, 255, 0.2);
      padding: 8px 10px;
      padding-left: 40px;
      border-radius: 15px;
      color: #fff;
      font-size: 16px;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    }
    
    .password-control {
      background-color: transparent;
      border: none;
      position: absolute;
      top: 5px;
      right: 25px;
      display: inline-block;
      width: 20px;
      height: 20px;
      transition: 0.5s;
}
  .view {
      background: url(https://snipp.ru/demo/495/no-view.svg) 0 0 no-repeat;
    transition: 0.5s;
  }

    
  
    img {
      position: absolute;
      top: 6px;
      left: 8px;
      transform: scale(0.6);
      filter: invert(1);
    }
    
    input[type="submit"] {
      background: #fff;
      color: #111;
      width: auto;
      padding: 8px 10px;
      box-shadow: none;
      letter-spacing: 1px;
      cursor: pointer;
      transition: 1.5s;
    }
    
    input[type="submit"]:hover {
      background: linear-gradient(115deg, 
        rgba(0,0,0,0.10), 
        rgba(255,255,255,0.25));
      color: #fff;
      transition: .5s;
    }
    
    input::placeholder {
      color: #fff;
    }
    
    span {
        position: absolute;
        left: 30px;
        padding: 10px;
        display: inline-block;
        color: #fff;
        transition: .5s;
        pointer-events: none;
      }
    
    input:focus ~ span,
    input:valid ~ span {
      transform: translateX(-30px) translateY(-30px);
      font-size: 15px;
    }
  }
  
  p {
    text-align: start;
    color: #fff;
    font-size: 15px;
    margin-top: 5px;
  
    a {
      color: #fff;
    }
    
    a:hover {
      text-decoration: none;
      color: #212121;
    }
  }
}

.remember {
  position: relative;
  display: inline-block;
  color: #fff;
  margin-bottom: 10px;
  cursor: pointer;
}
</style>
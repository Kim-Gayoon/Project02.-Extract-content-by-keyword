<template>
      <div id="container">
        <div class="front_logo">
        </div>
     
        <div id="Form">
        <div class="login-form">
          <h1>Member Login</h1>  
          <form @submit.prevent="loGin(this.form)" >
            
           <table>
            <div class="Input_info">

            <tr><!--첫번째 테이블-->
              <th><span class="material-icons">person</span></th>
              <th>
                <input class="input" name="uid" placeholder="Enter your ID" v-model="form.id"></th>
            </tr>

            <tr><!--두번째 테이블-->
              <th><span class="material-icons" >lock</span></th>
              <th>
                <input class= "inputPW" type="password" name="upw" placeholder="Enter your password"  v-model="form.password">
                
                <!-- 비밀번호 보이기 -->
                <div class="pw-eyes" @click.prevent="pwSee"> <i class='fa-solid fa-eye'></i> </div>
              </th>
              
              </tr>
            </div>
            

            <div class="serchGo">
              <tr> <!-- 세번째 테이블 -->
                <th colspan="2">
                  <a @click.prevent="goSerchID">아이디</a> &nbsp;/&nbsp;<a @click.prevent="goSerchPW">비밀번호</a>&nbsp;&nbsp;를 찾으시겠습니까?
                </th>  
            </tr>
            </div>

            <div class="enroll">
              <tr> <!-- 다섯번째 테이블 -->
                <th colspan="2">
                  <a @click.prevent="goSignUp">사원 등록을 진행해 주세요</a>
                </th>  
            </tr>
            </div>

            <div class="loginBtn">
              <tr><!--세번째 테이블-->
              <th colspan="2"><button type="submit" class="Login_btn">Login</button></th>
            </tr>
            </div>
           </table>           
          </form>
        </div>
      </div>
      </div>
</template>
  
<script>
import {  mapState, mapActions } from 'vuex';
import router from '@/router/router.js'

  export default {
    name: "container",
    data() {
      return {
        ...mapState(['form']),
        form :{
          id:'',
          password :''
        },        
      }
    },
    methods: {
      ...mapActions(['loGin','loGout']),
      fnLogin() {
        const uId = document.getElementById('userId')
        const uPw = document.getElementById('userPw')

        if( this.user_id === '' && this.user_pw === ''){
          uId.innerHTML = '<strong style="color: red;">ID - Please check your ID box</strong>'
          uPw.innerHTML = '<strong style="color: red;">ID - Please check your PW box</strong>'
          return
        }
        
        if (this.user_id === '') {
          uId.innerHTML = '<strong style="color: red;">ID - Please check your ID box</strong>'
          return
        }

        if (this.user_pw === '') {
          uPw.innerHTML = '<strong style="color: red;">ID - Please check your PW box</strong>'
          return
        }

        if(this.user_id ==='admin' && this.user_pw === 'admin'){
          alert('Welcome to Key득key득')
          router.push('/user');
        } else if(this.user_id ==='123' && this.user_pw === '123') {
          alert('Welcome to Key득key득')
          router.push('/user');
        } else {
          alert('You typed wrong ID or PW'); 
        }       
      },
    
      goSerchID : ()=>{
        router.push('/searchid');
      },

      goSerchPW : ()=>{
        router.push('/searchpw');
      },

      goSignUp : ()=>{
        router.push('/signup');
      },

    // 비밀번호 보이기 
      pwSee : () => {
        // console.log('hello');
        let clases = document.querySelector('.inputPW');
        let condition = clases.getAttribute('type');
        if (condition == "password") {
          clases.setAttribute('type','text');
          document.querySelector(".pw-eyes").innerHTML = "<i class='fa-solid fa-eye-slash'></i>";
        } else if (condition == "text") {
          clases.setAttribute('type','password');
          document.querySelector(".pw-eyes").innerHTML = "<i class='fa-solid fa-eye'></i>";
        }
        }
      }
    }
  </script>
  
  <style scoped>
    @import './common/css/default.css';
    
    h1{
      position: relative;
      top : 1rem;
      left: 3.5rem;
      color : white;
      font-size: 35px;
      margin-bottom: 10%;
    }

    .login-form {
      position : relative;
      top : 8.5rem;
      left : 5.5rem;
      font-family: 'Kanit', sans-serif
    }

    table{
      border:none;    
      position: relative;
      width: 600x;
      height: 300px;
    }

    input {
      background:transparent;
      border:none;
      border-bottom: solid 1px white;
      font-size:15pt;
      width:100%;
      outline:none;
      padding:20px 0px 5px 0px;
      padding-left: 5%;
      color:white;
      font-family: 'Kanit', sans-serif;
    } 

    .pw-eyes {
      color: white;
      transform: translateX(0.3rem);
      font-size:20px;     /* 아이콘 크기 조절*/
      position :relative;
      top: -1.8rem;
      left: 8rem;
    }
  
    input::placeholder{
      color:lightgrey;
      font-size:13pt;
      font-family: 'Kanit', sans-serif;
    }
    
    .material-icons {
      color: white;
      transform: translateX(0.3rem);
      font-size:33px;     /* 아이콘 크기 조절*/
      position :relative;
      top: 1.1rem;
      left: 0.3rem;
    }
    
    .loginBtn{
      margin-top: 10%;
      background: whitesmoke;
      position: relative;
      left: 34%;
      border: none;
      display: inline-block;
      padding: 5px 40px;
      border-radius: 15px;
      font-family: "paybooc-Light", sans-serif;
      box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
      text-decoration: none;
      font-weight: 600;
      transition: 0.25s;
    }
  
    .serchGo{
      margin-top: -5%;
      color:white;
      position: relative;
      font-size:13px; 
      left:18%;
    }

    .enroll{
      color:white;
      font-size:13px;
      position: relative;
      left:18%;
    }

    a:hover {
      color:aquamarine;
    }

    
  </style>
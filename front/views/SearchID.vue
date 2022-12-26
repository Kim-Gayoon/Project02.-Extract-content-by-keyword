<template>
    <div id="container">
        <div class="model-box">
            <div class="black-bg" v-if="module_page == true">
                <div class="white-bg">
                    <p> {{user_name}}님의 ID는 {{user_id}} 입니다.</p> <br/>
                    <button @click="Login_page()">확인</button>
                </div>
            </div>
        </div>
        <div class="front_logo">
            <!--로고 창-->
        </div>
        <div id="Form">
            <div class="searchid-form">
                <h1>ID 찾기</h1>
                <form @click.prevent="fnSearchID">
                <table>
                    <div class="Input_info">
                        <tr>
                            <th><span class="material-icons">account_circle</span></th>
                            <th><input name="uname" class="input" placeholder="Enter your name" v-model="form.name"/></th>
                        </tr>
                        <tr>
                            <th><span class="material-icons">alternate_email</span></th>
                            <th><input type="email" name="email" class="input" placeholder="Enter your Company E-mail" v-model="form.email"/></th>
                        </tr>
                        <div class="goGroup">
                        <tr>
                            <th colspan="2"> <a @click.prevent="goSignUp"> 로그인 페이지 </a>&nbsp;&nbsp;/&nbsp;&nbsp;<a @click.prevent="goSearchPW"> 비밀번호를 찾고 싶으신가요?</a> </th>
                        </tr>
                        </div>
                        <div class="searchid-btn">
                        <tr>
                            <th colspan="2"> <button type="submit" class="btn-border">ID 찾기</button>
                        </th>
                        </tr>
                        </div>
                    </div>
                </table>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import router from '@/router/router.js'
export default {
    name: "SearchIDForm",
    data(){
        return{
            module_page: false,
            form :{
                name: '',
                email: '',
            },
            val_info : {},
            err : 0
        }
    },
    methods:{
        checkBox(){
            this.err = 0
            if(this.form.name == '' ){
                err += 1
                alert('이름을 확인해 주세요')
            }
            if(this.form.email == ''){
                err += 1 
                alert('이메일을 확인해 주세요')
            }

        },
        fnSearchID(){
            this.checkBox()
            if (this.err == 0){
                axios.post('api/user/searchId',this.form)
                .then((res)=>{
                    console.log(res.data[0])
                    this.val_info = res.data[0]
                    alert(`당신의 아이디는 ${this.val_info.id} 입니다`)
                })
                .catch(err => {
                    console.log(err.response.data.message)
                    alert(err.response.data.message)
                })
            }
        },
        goSignUp: ()=>{
            router.push('/');
        },
        goSearchPW: ()=>{
            router.push('/searchpw');
        },

        ModuleMotion: function(){
            this.module_page = !this.module_page;
        },
        Login_page: function(){
            router.push('/');
        }
    }
}
</script>
<style scoped>
    @import './common/css/default.css';

    
    body {
        margin:0;
    }
    .model-box {
        box-sizing: border-box;
        z-index: 1050;
    }
    .black-bg {
        width: 100%; height: 100%;
        /*background: rgba(0,0,0,0.5);*/
        position: fixed; padding: 20px;
    }
    .white-bg {
        width: 100%; background: white;
        border: 1px solid black;
        border-radius: 8px;
        padding: 20px;
    }
    /* 모달창 끝*/

    h1{
        position: relative;
        top: 1rem;
        left: 7rem;
        color: white;
        font-size: 35px;
        margin-bottom: 10%;
    }

    .searchid-form{
        position: relative;
        top: 8.5rem;
        left: 5.5rem;
        font-family: 'kanit', sans-serif;
    }

    table{
        border: none;
        position: relative;
        width: 500px;
        height: 300px;
    }

    input{
        background: transparent;
        border: none;
        border-bottom: solid 1px white;
        font-size: 15pt;
        width: 100%;
        outline: none;
        padding: 20px 0px 5px 0px;
        padding-left: 5%;
        color: white;
        font-family: 'kanit', sans-serif;
    }

    input::placeholder{
        color: lightgrey;
        font-size: 13pt;
        font-family: "kanit", sans-serif;
    }
    
    .material-icons{
        color: white;
        transform: translateX(0.3rem);
        font-size: 33px;
        position: relative;
        top: 1.1rem;
        left: 0.3em;
    }

    .searchid-form > .Input_info {
        color: aqua;
    }

    .searchid-btn{
        margin: 10%;
        background: whitesmoke;
        position: relative;
        left : 3rem;
        border: none;
        display:inline-block;
        padding: 5px 40px;
        border-radius: 15px;
        font-family: "paybooc-Light", sans-serif;
        box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
        text-decoration: none;
        font-weight: 600;
        transition: 0.25s;
    }
    .btn-border{
        background-color: whitesmoke;
        position: relative;
        border: none;
    }
    
    .btn-border:hover{
        color:blue;
    }

    .goGroup{
        color: white;
        font-size: 13px;
        position: relative;
        left:5%;
    }
    
    a:hover{
        color: aquamarine;
    }
</style>

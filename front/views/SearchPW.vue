<template>
    <div id="container">
        <div class="front_logo">
            <!-- 로고 가져오기-->
        </div>
        <div id="Form">
            <div class="searchpw-form">
                <h1> PW 찾기 </h1>
                <form @submit.prevent="searchPw">
                    <!-- Submit.prevent = 자동으로 넘어가는 것 방지-->
                    <table>
                        <div class="Input_info">
                            <tr>
                                <th><span class="material-icons">account_circle</span></th>
                                <th>
                                    <input class="input" name="uname" placeholder="Enter your name" v-model="form.name"/>
                                </th>
                            </tr>
                            <tr>
                                <th><span class="material-icons">person</span></th>
                                <th>
                                    <input class="input" name="uid" placeholder="Enter your ID" v-model="form.id"/>
                                </th>
                            </tr>
                            <tr>
                                <th><span class="material-icons">alternate_email</span></th>
                                <th>
                                    <input type="email" name="email" placeholder="Enter your Company E-mail" v-model="form.email"/>
                                </th>
                            </tr>
                            <tr class="goGroup">
                                <th colspan="2">
                                    <a @click.prevent="goSignUp">메인으로</a>&nbsp;&nbsp;/&nbsp;&nbsp;<a @click.prevent="goSearchId">아이디를 찾고 싶나요?</a>
                                </th>
                            </tr>
                            <div class="searchpw-btn">
                            <tr>
                                <th colspan="2">
                                    <button type="submit" class="btn-border" @click.prevent="searchPw">PW찾기</button>
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
import router from '@/router/router'
import axios from 'axios'


export default {
    name: "SearchPWForm",
    data(){
        return{
            form : {
                name:'',
                id:'',
                email:''
            },
            checkData_dic : {

            }
            ,
            err : 0
        }
    },
    methods: {
        fnSearchPW(){
            this.err = 0
            if(this.form.name ===''){
                alert('이름을 입력해주세요.')
                this.err +=1
            }

            if(this.form.id === ''){
                alert('아이디를 입력해주세요.')
                this.err +=1
            }

            if(this.form.email === ''){
                alert('회사 이메일을 입력해주세요.')
                this.err +=1
            }
            
        },
        cheakData(){

        }
        ,
        searchPw(){
            this.fnSearchPW();
            if (this.err == 0){
                axios.post('/api/user/searchpw',this.form)
                .then((res) => {
                    console.log(res.data)
                    this.$router.push({
                        name: 'Renewpw',
                        query :{ id : this.form.id}
                    })
                })
                .catch(err => {
                    console.log(err)
                    alert(err.response.data.message)
                })

            }
        },
        
        goSignUp: ()=>{
            router.push('/');
        },
        goSearchId: ()=>{
            router.push('/searchid');
        },
        
    }
}
</script>

<style scoped>
    @import './common/css/default.css';

    body {
        margin:0;
    }
    div {
        box-sizing: border-box;
    }
    .black-bg {
        width: 100%; height: 100%;
        background: rgba(0,0,0,0.5);
        position: fixed; padding: 20px;
    }
    .white-bg {
        width: 100%; background: white;
        border-radius: 8px;
        padding: 20px;
    }
    /* 모달창 끝*/

    h1 {
        position: relative;
        top: 1rem;
        left: 6rem;
        color: white;
        font-size: 35px;
        margin-bottom: 10%;
    }
    .searchpw-form{
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
        font-family: 'kanit', sans-serif;
    }

    .material-icons{
        color: white;
        transform: translateX(0.3rem);
        font-size: 33px;
        position: relative;
        top: 1.1rem;
        left: 0.3rem;
    }

    .searchpw-form > .Input_info {
        color: aqua;
    }

    .searchpw-btn{
        margin: 10%;
        background-color: whitesmoke;
        position: relative;
        left : 2.2rem;
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
        left: 10%;
    }
    
    a:hover{
        color: aquamarine;
    }

</style>
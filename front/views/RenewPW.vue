<template>
    <div id="container">
        <div class="front_logo">
            <!-- 로고 가져오기-->
        </div>
        <div id="Form">
            <div class="renewpw-form">
            <h1> PW 변경 </h1>
            <form @submit.prevent="submitPW">
                <table >
                    <div class="Input_info">
                        <tr>
                            <th><span class="material-icons">lock</span></th>
                            <th>
                                <input class="input" type="password" name="upw" placeholder="Enter your new password" minlength="8" maxlength="16" v-model="form.password">
                                
                                <v-img class="seePW" src="@/assets/img/eye.png"/>
                            </th>
                        </tr>
                        <tr>
                        </tr>
                        <tr>
                            <th><span class="material-icons">verified</span></th>
                            <th>
                                <input class="input" type="password" name="upw_conform" placeholder="Enter your new password one more" minlength="8" maxlength="16" v-model="pw_confirm">
                                
                                <v-img class="seePW" src="@/assets/image/eye.png"/>
                            </th>
                        </tr>
                        <div class="renewpw-btn">
                        <tr>
                            <th colspan="2">
                                <button type="submit" class="btn-border">변경 완료</button>
                            </th>
                        </tr>
                        </div>
                        <!--<tr>
                            <th></th>
                            <th></th>
                        </tr>
                        -->
                    </div>
                </table>
            </form>
            </div>
        </div>
    </div>
</template>

<script>
import router from '@/router/router';
import axios from 'axios';

export default {
    name: "renewPWForm",
    data(){
        return{
            id: this.$route.query.id,
            form:{
                password: '',
            },
            pw_confirm: '',
            err:0
            
        }
    },
    methods: {
        check_PW(){
            this.err = 0;
            if(this.form.password === '' || this.pw_confirm ===''){
                this.err +=1
                alert('바꿀 비밀번호를 입력해주세요.')
            }
            if(this.form.password !== this.pw_confirm){
                this.err +=1
                alert('새로 정의한 비밀번호가 동일하지 않습니다.')
            }
        },
        submitPW(){
            this.check_PW();
            console.log('check_pw',this.id, this.form.password)
            if(this.err == 0){
                console.log('if 문 통과')
                axios.put(`/api/user/${this.id}`, this.form)
                .then((res)=>{
                    console.log(res.data)
                    alert('비밀번호가 변경 되었습니다.')
                    router.push('/')
                })
                .err(()=>{
                    console.log(err)
                })
            
            }
        }
    }

}
</script>

<style scoped>
    @import './common/css/default.css';

    h1 {
        position: relative;
        top: 1rem;
        left: 5.5rem;
        color: white;
        font-size: 35px;
        margin-bottom: 10%;
    }

    .renewpw-form{
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
        font-size: 10pt;
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

    .renewpw-form > .Input_info > .seePW{
        color: aqua;
    }

    .renewpw-btn{
        margin: 10%;
        background-color: whitesmoke;
        position: relative;
        left : 5%;
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

    a:hover{
        color: aquamarine;
    }
</style>
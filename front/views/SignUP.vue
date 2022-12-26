<template>
    <div id="container">
        <div class="front_logo"></div>

        <div id="Form">
            <h1 class = "logup_head">사원 등록</h1>
            <form @submit.prevent="submitForm">
                <table id="join-form">
                    <tr><!--첫번째 테이블-->
                        <th><label for="username">이름</label></th>
                        <th colspan='3'><input type="text" name="uname" v-model="form.name"/></th>
                    </tr>

                    <tr><!--두번쨰 테이블-->
                        <th><label for="teamName">부서</label></th>
                        <th>
                            <select class="select-grade" v-model="form.teamName">
                                <option value="개발팀" name="develop">개발팀</option>
                                <option value="부품관리팀" name="part management">부품관리팀</option>
                                <option value="시설팀" name="facility">시설팀</option>                     
                                <option value="자원팀" name="Resource">자원팀</option>
                                <option value="재무팀" name="finance">재무팀</option>  
                            </select>
                        </th>
                            
                        <th><label for="position" >직책</label></th>
                        <th>
                            <select class="select-grade" v-model="form.position">
                                <option name="Excute Team Leader" value="팀장">팀장</option>
                                <option name="Associate Director" value="차장">차장</option>
                                <option name="Associate Manager" value="대리">대리</option>
                                <option name="Associate" value="주임">주임</option>
                                <option name="Staff" value="사원">사원</option>
                            </select>
                        </th>                       
                    </tr>


                    <tr>
                        <th><label for="userId">아이디</label></th>
                        <th colspan='3'>
                            <input type="text" name="uID" v-model="form.id"/>
                            <button type="submit" value="중복확인"></button>
                        </th>
                    </tr>
                        
                    <tr>
                        <th><label for="userPw">비밀번호</label></th>
                        <th colspan='3'>
                            <input class=userPW type="password" name="uPw" v-model="form.password" />
                            <div class="pw-eyes" @click.prevent="pwSee"> <i class='fa-solid fa-eye'></i> </div>
                        </th>
                    </tr>

                    <tr>
                        <th> <label for="pwConfirm">비밀번호 확인</label></th>
                        <th colspan='3'>
                            <input class=userPW_confirm type="password" name="passwordConfirm" v-model="passwordConfirm" />
                            <div class="pw-eyes2" @click.prevent="pwSee2"> <i class='fa-solid fa-eye'></i> </div>
                        </th>
                    </tr>

                    <tr>
                        <th><label for="useremail">email</label></th>
                        <th colspan='3'><input type="text" name="email" v-model="form.email"/></th>
                    </tr>
                </table>

                <div class="join_Btn">
                    <button type="submit" value="Join">사원등록</button>
                </div>
            
            </form>        
        </div>
    </div>
</template>



<script>
import axios from 'axios';
export default {
        name: 'JoinForm',
        data() {
            return {
                form: {
                    name:'',        
                    teamName:'', 
                    position:'',
                    id:'',
                    password:'', 
                    email:''
                    },
                passwordConfirm:'',
                err : 0
                };
        },

    methods: {
        fnJoin(){
            if(this.form.password !== this.passwordConfirm){
               this.err += 1
               alert('비밀번호가 맞지 않습니다.')
            }
            if(this.form.name ===''){
               this.err += 1
               alert('이름을 확인해 주세요')
            }

            if(this.form.id === ''){
                this.err += 1
                alert('아이디를 확인해 주세요')
            }

            if(this.form.password === ''){
                this.err += 1
               alert('비밀번호를 확인해 주세요')
            }
            if(this.form.email === ''){
                this.err += 1
               alert('이메일을 확인해 주세요')
            }
        },
        submitForm(){
            this.fnJoin();
            if(this.err == 0){
                axios.get(`api/user/checkid/${this.form.id}`)
                .then((res) => {
                    if(res.data.length == 0){
                        axios.post('api/user/',this.form)
                        .then((res) =>{
                            console.log(res.data)
                            this.$router.push({path:'/'})
                        })
                    }else{
                        alert('중복된 아이디 입니다.')
                        this.$router.push({path:'/signup'})
                    }

                })
                .catch((err) => {
                    alert(err.data)
                })
            }
        },


        pwSee : () => {
        // console.log('hello');
        let clases = document.querySelector('.userPW');
        let condition = clases.getAttribute('type');
        if (condition == "password") {
          clases.setAttribute('type','text');
          document.querySelector(".pw-eyes").innerHTML = "<i class='fa-solid fa-eye-slash'></i>";
        } else if (condition == "text") {
          clases.setAttribute('type','password');
          document.querySelector(".pw-eyes").innerHTML = "<i class='fa-solid fa-eye'></i>";
        }
        }, 

        pwSee2 : () => {
        // console.log('hello');
        let clases2 = document.querySelector('.userPW_confirm');
        let condition = clases2.getAttribute('type');
        if (condition == "password") {
          clases2.setAttribute('type','text');
          document.querySelector(".pw-eyes2").innerHTML = "<i class='fa-solid fa-eye-slash'></i>";
        } else if (condition == "text") {
          clases2.setAttribute('type','password');
          document.querySelector(".pw-eyes2").innerHTML = "<i class='fa-solid fa-eye'></i>";
        }
        }, 


    }
}

</script>


<style>
    @import './common/css/default.css';

    h1{
        position: relative;
        top : 3rem;
        left: 13rem;
        color : white;
        font-size: 35px;   
        font-family: 'Kanit', sans-serif;  
        margin-bottom: 10%;
    }

    .join-form{
        position:relative;
        top : 3rem;
        left : 5.5rem;
        font-family: 'Kanit', sans-serif;
        font-size: 20px;
        color:white;
        font-family: 'Kanit', sans-serif;
    }

    table {
        position: relative;
        margin-top:15%;
        width: 80%;
        border-collapse: collapse;
        left: 10%;
        font-family: 'Kanit', sans-serif;
        color: white;
        font-size:14pt;   
    }

    th{
        padding: 8px;
    }

    input {
        background:transparent;
        border:none;
        border-bottom: solid 1px white;
        font-size:15pt;
        width: 100%;
        outline:none;
        padding:0px 0px 3px 0px;
        padding-left: 5%;
        color:white;
        font-family: 'Kanit', sans-serif;
    }

    .select-grade {
        position: relative;
        size: 15px;
    }

    .pw-eyes {
      color: white;
      transform: translateX(0.3rem);
      font-size:20px;     /* 아이콘 크기 조절*/
      position :relative;
      top: -1.8rem;
      left: 8rem;
    }

    .pw-eyes2 {
      color: white;
      transform: translateX(0.3rem);
      font-size:20px;     /* 아이콘 크기 조절*/
      position :relative;
      top: -1.8rem;
      left: 8rem;
    }


    .join_Btn{
    margin-top: 10%;
    background: whitesmoke;
    position: relative;
    left: 40%;
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


</style>


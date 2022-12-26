<template>
    <div class="app">
    <Header />
    <Sidebar />
    <div class="b_mp_page">
        <span id="b_mp_title">
            <h1>회원정보 수정</h1>
        </span>
        <div class="b_mp_contents">
            <pre id="b_mp_subtitle"><strong style="font-size :1.5rem; ">{{ user_name }}님 반가워요!</strong><br>
            회원 확인을 위해 비밀번호를 입력해주세요.</pre>
            <form action="" method="" enctype="application/x-www-form-urlencoded">
                <h4>비밀번호 입력&nbsp;&nbsp;
                    <input type="password" class="" @keyup="" @keydown="cf_pw" @keypress="" placeholder="비밀번호 입력해주세요.">
                </h4>
                <button id="bmp_btn" @click.prevent="submit_btn">확인</button>
            </form>
        </div>
    </div>
</div>
</template>
<script>
import router from '@/router/router';
import Header from '@/components/Header.vue';
import Sidebar from '@/components/Sidebar.vue';

export default {
    name: 'beforeMyPage',
    components: { Header, Sidebar },
    data() {
        return {
            confirm_pw: 'koko123',
            check_Pw: '',
            user_name: '하영진'
        }
    },

    methods: {
        cf_pw(e) {
            let events = false
            if(e.keyCode == 8){
                this.check_Pw = this.check_Pw.slice(0,-1)
                events = true
            }
            else if (e.keyCode >= 48 && e.keyCode <= 90) {
                let pwTxt = e.key
                this.check_Pw += pwTxt
                console.log(this.check_Pw)
            }
        },
        submit_btn(){
            console.log(this.check_Pw == this.confirm_pw)
            if(this.check_Pw == this.confirm_pw){
                router.push({name:'MyPage'})
            }
        }
    }
}
</script>
<style scoped lang="scss">
.b_mp_page {
    width: 86%;
    height: 500px;
    margin-top: 10%;
    margin-left: 10%;
    display: block;
    justify-content: center;
    text-align: center;
    border: 2px solid black;
    background-color: rgba(32, 32, 32, 0.1);
    box-shadow: 0 0 10px rgba(32, 32, 32, 0.3);

    #b_mp_title {
        width: 50rem;
        height: 50%;
        border-bottom: 5px solid black;
        font-size: 20px;
       #b_mp_subtitle{
        margin: 0 auto;
       }
    }

    .b_mp_contents {
        text-align: center;
        margin: 0 auto;

        #bmp_btn {
            width: 120px;
            height: 25px;
            background-color: #333;
            color: #ffff;
            font-weight: 600;
            font-size: 1rem;
            margin: 0 auto;
        }
    }
}
</style>
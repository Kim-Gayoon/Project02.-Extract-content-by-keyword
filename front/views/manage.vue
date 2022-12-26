<template>
    <Header />
    <sidebar />
    <div class="filePage">
        <p id="page_info_font">관리자페이지 > <strong>사원관리</strong></p>
        <div class="manage_search">
            <div class="manage_formSection">
                <form action="">
                    <span id="tit_manage">
                        <h4>사원 검색</h4>
                    </span>
                    <select name="Number" id="manage_search_option" v-model="search_option">
                        <option value="null">--선택--</option>
                        <option value="Name">이름</option>
                    </select>
                    <input type="text" name="search_txt" id="manage_Search_Input" v-model="search_keyword">
                    <button id="search_btn" @click.prevent="user_search"><i
                            class="fa-solid fa-magnifying-glass"></i>&nbsp;&nbsp;검색</button>
                </form>
            </div>
        </div>
        <div class="manage_Table">
            <div class="manage_TableInfo">
                <h3 id="tit_manageTable">사원관리</h3>
                <form action="">
                    <table id="employee_Table">
                        <tr>
                            <th>이름</th>
                            <th>e-mail</th>
                            <th>부서명</th>
                            <th>직급</th>
                            <th>관리</th>
                            <th>삭제</th>
                        </tr>
                        <tr v-for="user, index in formData" :key="index" id="employee_td">
                            <td id="in_name"><input type="text" name="user_name" id="in_name" :value="user.name"
                                    readonly>
                            </td>
                            <td id="in_email"><input type="text" name="user_email" id="in_email" :value="user.email"
                                    readonly>
                            </td>
                            <td id="in_teamName"><input type="text" name="user_teamName" id="in_teamName"
                                    :value="user.teamName" readonly></td>
                            <td id="in_Pos"><input type="text" name="user_Position" id="in_Pos" :value="user.position"
                                    readonly></td>
                            <td><button id="btn_approve" @click.prevent="updateOpen" :value="user.id">관리</button></td>
                            <td><button @click.prevnet="deleteUser" :value="user.id">삭제</button></td>
                        </tr>
                    </table>
                    <div class="updateForm" v-if="this.UpdateClick == true">
                        <div id="inline_box">
                            <span id="update_Title">
                                <h2 style="margin-top:10px">[{{ update_Data.name }}&nbsp;사원&nbsp;정보&nbsp;수정]</h2>
                            </span>
                            <div class="updateTable">
                                <div class="emp_wrap">
                                    <strong>ID</strong>
                                    <div id="emp_input">
                                        <span><input type="text" name="up_ID" id="up_emp_ID" :value="update_Data.id"
                                                disabled></span>
                                    </div>
                                </div>
                                <div class="user_name">
                                    <strong>이름</strong>
                                    <div id="name_input">
                                        <span><input type="text" name="user_name" id="user_name"
                                                :value="update_Data.name" disabled></span>
                                    </div>
                                </div>
                                <div class="user_Email">
                                    <strong>e-mail</strong>
                                    <div id="Email_input">
                                        <span><input type="text" name="user_Email" autocomplete="off"
                                                @input='update_email' id="user_Email"></span>
                                    </div>
                                </div>
                                <div class="user_teamName_Position">
                                    <strong>부서</strong>
                                    <div id="teamName">
                                        <select id="Div" v-model="up_sel_value">
                                            <option value="null">--선택--</option>
                                            <option value="F/E개발팀">F/E개발팀</option>
                                            <option value="B/E개발팀">B/E개발팀</option>
                                        </select>
                                    </div>
                                    <strong>직급</strong>
                                    <div id="Position">
                                        <select name="" id="Pos" v-model="up_Pos_value">
                                            <option value="null">--선택--</option>
                                            <option value="팀장">팀장</option>
                                            <option value="대리">대리</option>
                                            <option value="사원">사원</option>
                                        </select>
                                    </div>
                                    <strong>가입 승인</strong>
                                    <div id="user_approve">
                                        <select name="approve" id="approve" v-model="user_approve">
                                            <option value="null">--선택--</option>
                                            <option value="승인">승인</option>
                                            <option value="거부">거부</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <button id="modal_y" @click.prevent="UpdateAmend">확인</button>
                            <button id="modal_n" @click.prevent="UpdateClick = false">취소</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue';
import Header from '@/components/Header.vue';
import router from '@/router/router';
import axios from 'axios';
export default {
    name: "manageForm",
    components: { Header, Sidebar, },
    data() {
        return {
            update_Data: {
                email: '',
                teamName: '',
                position: '',
                approve: ''
            },
            formData: '',
            up_sel_value: null,
            up_Pos_value: null,
            up_user_email: [],
            UpdateClick: false,
            search_keyword: [],
            search_option: null,
            res_U_data: {
                email: '', teamName: '', position: '', approve: '',
            },
            user_approve: null,
            page: 1,
        }
    },
    mounted() {
        axios.get('/api/user')
            .then((res) => {
                this.formData = res.data
                console.log(this.formData)
            })
            .catch(err => {
                alert(err)
            })
    },
    methods: {
        user_search() {
            let option = this.search_option
            switch (option) {
                case 'Name':
                    for (let i = 0; i < this.formData.length; i++) {
                        if (this.search_keyword == '') {
                            alert('키워드를 입력해주세요!')
                        } else if (this.formData[i].name.includes(this.search_keyword)) {
                            axios.get(`/api/user/userName/${this.formData[i].name}`)
                                .then(res => {
                                    this.formData = res.data

                                }).catch(err => {
                                    alert(err)
                                })
                        } else if (!this.formData[i].name.includes(this.search_keyword)) {
                            continue;
                        } else {
                            alert('조회되는 정보가 없습니다.')
                        }
                    }
                    break;
                case 'teamName':
                    for (let i = 0; i < this.formData.length; i++) {
                        if (this.search_keyword == '') {
                            alert('키워드를 입력해주세요!')
                        } else if (this.formData[i].teamName.includes(this.search_keyword)) {
                            axios.get(`/api/user/userteamName/${this.formData[i].teamName}`)
                                .then(res => {
                                    this.formData = res.data

                                }).catch(err => {
                                    alert(err)
                                })
                        } else if (!this.formData[i].teamName.includes(this.search_keyword)) {
                            continue;
                        } else {
                            alert('조회되는 정보가 없습니다.')
                        }
                    }
                    break;
                case 'Position':
                    for (let i = 0; i < this.formData.length; i++) {
                        if (this.search_keyword == '') {
                            alert('키워드를 입력해주세요!')
                        } else if (!this.formData[i].position.includes(this.search_keyword)) {
                            continue;
                        }
                        else if (this.formData[i].position.includes(this.search_keyword)) {
                            console.log(this.formData[i].teamName)
                            axios.get(`/api/user/userPosition/${this.formData[i].position}`)
                                .then(res => {
                                    this.formData = res.data
                                    console.log(this.formData[i].position)

                                }).catch(err => {
                                    alert(err)
                                })
                        } else {
                            alert('조회되는 정보가 없습니다.')
                        }
                    }
                    break
                default:
                    alert('검색조건을 옳바르게 선택해주세요.')
            }
        },
        updateOpen(e) {
            let option = []
            console.log(e.target.value)
            for (let i = 0; i < this.formData.length; i++) {
                option.push(this.formData[i].id)
                console.log(option)
                if (e.target.value == option[i]) {
                    this.UpdateClick = true
                    axios.get(`api/user/${e.target.value}`)
                        .then((res) => {
                            this.update_Data = res.data[0]

                        })
                        .catch(err => {
                            alert(err)
                        })
                        .finally(() => {

                        })
                }
            }
        },
        UpdateAmend() {
            const regExpEmail = /^[a-zA-Z0-9]([-_\.]?[0-9a-zA-Z])*@[a-zA-Z0-9]([-_\.]?[a-zA-Z0-9])*\.[a-zA-Z]{2,3}$/i;
            const regen = new RegExp('[a-z0-9]+@naver.com')
            const regd = new RegExp('[a-z0-9]+@daum.net')
            const regg = new RegExp('[a-z0-9]+@google.com')
            let up_in_email = document.getElementById('user_Email')
            if (this.up_sel_value == null || this.up_Pos_value == null || this.up_user_email.length == 0 && this.user_approve == null) {
                alert('모든 값을 정상적으로 입력해주셔야 합니다.')
            } else if (regExpEmail.test(this.up_user_email) == false) {
                alert('유효하지 않는 이메일 형식입니다.')
                up_in_email.focus()
            } else if (regen.test(this.up_user_email) == false && regd.test(this.up_user_email) == false && regg.test(this.up_user_email) == false) {
                alert('이메일에 지원되는 도메인인지 확인해주세요.')
                up_in_email.focus()
            }
            else {
                this.res_U_data.email += this.up_user_email;
                this.res_U_data.teamName += this.up_sel_value;
                this.res_U_data.position += this.up_Pos_value;
                this.res_U_data.approve = this.user_approve;
                console.log(this.user_approve)
                axios.put(`/api/user/${this.update_Data.id}`, this.res_U_data)
                    .then(res => {
                        this.f
                        return window.location.reload();
                    })
                    .catch((err) => {
                        alert(err)
                    })
                this.UpdateClick = false
            }
        },
        deleteUser(e) {
            e.preventDefault();
            for (let i = 0; i < this.formData.length; i++) {
                let result = e.target.value == this.formData[i].id ? true : false
                if (result == true ? confirm('정말로 삭제하시겠습니까?') : '') {
                    console.log(this.formData.id)
                    axios.delete(`/api/user/${this.formData[i].id}`,e.target.value)
                        .then((res) => {
                            alert('해당 사원의 정보가 삭제되었습니다.')
                            return window.location.reload();
                        })
                        .catch(err => {
                            alert(err)
                        }).finally(()=>{
                            console.log(e.target.value, this.formData[i].id)
                        })
                    break;

                    }
            }

        },
        update_email(e) {
            this.up_user_email = e.target.value;
            console.log(this.up_user_email)

        }

    }
}
</script>

<style lang="scss" scoped>
select {
    appearance: menulist; border:none;
}
input{border:none; font-size: 1rem; font-weight: 500;}

#page_info_font {
    font-size: 14px;
    color: #808080;
    border-bottom: 1px solid #808080;
    width: 12rem;
    margin: 7.5rem 10rem 0rem 7.5rem;

    >strong {
        color: black;
    }
}

.manage_search {
    width: 50em;
    height: 30%;
    margin: 1rem 0.11rem 0.1rem 7rem;
    border-radius: 10px;
    padding: 1%;

    .manage_formSection {
        width: 70%;
        border-radius: 3.5px;
        min-height: auto;
        padding: 0.8rem;
        font-size: 18px;
        background-color: #fff;
        box-shadow: 0px 0px 3px #1e293b;

        >option {
            font-size: 0.3rem;
            background-color: black;
            color: #fff;
        }

        #tit_manage {
            >h4 {
                margin: 10px 0px 10px 0px;
                display: block;
                line-height: 1.5;
                width: 5rem;
            }
        }

        #manage_search_option {
            margin-right: 5px;
            height: 1.45rem;
            line-height: 1.5;
            outline: none;
            border-radius: 4px;
            width: 7rem;
            text-align: center;
            border: 1px solid black;
        }

        #manage_Search_Input {
            border-radius: 3px;
            outline: none;
            border: 1px solid black;
            line-height: 1.3;
        }

        #search_btn {
            border: 1px solid black;
            border-radius: 4px;
            width: 7rem;
            margin-left: 10px;
            height: 5.5%;
            line-height: 1.6;
            font-size: 15px;
            outline: none
        }
    }
}

.manage_Table {
    margin: 1rem 1rem 1rem 7rem;
    width: 85%;
    height: 100%;
    display: inline-block;
    justify-content: center;
    text-align: center;
    height: auto;

    .manage_TableInfo {
        padding: 0.3rem;
        padding-bottom: 5rem;
        background-color: #fff;
        border-radius: 10px;
        height: 100%;

        #tit_manageTable {
            text-align: center;
            padding: 5px;
        }

        #employee_Table {
            width: 95%;
            border-collapse: collapse;
            text-align: center;
            justify-content: center;

            margin: 0% 2% 0% 2%;

            #in_empnum {
                width: 4rem;
            }

            #in_name {
                width: 4rem;
            }

            #in_email {
                width: 12rem;
                font-size: 100%;
            }

            #in_teamName {
                width: 5.5rem;
                font-size: 100%;
            }

            #in_Pos {
                width: 6rem;
            }

            #approve_table {
                width: 5rem;
                border-radius: 2px;
                margin: 0 auto;
                text-align: center;
            }
        }

        th {
            border: 1px solid #808080;
            height: 25px;
            width: -1%;
            font-weight: 600;
        }

        td {
            border: 1px solid #808080;
            height: 30px;
            font-weight: 500;
            width: 10%;

            >input {
                text-align: center;
            }
        }

        button {
            border: 1px solid black;
            border-radius: 3px;
            width: 3.5rem;
            height: 1.5rem;
        }

        .admin_footer {
            #admin_submit_btn {
                text-align: center;
                width: 6rem;
                margin: 0 auto;
                justify-content: center;
                display: flex;
                margin-top: 30px;
                color: #fff;
                font-weight: 550;
                background-color: #1e293b;
                height: 2rem;
                padding: 5px;
                border-radius: 5px;
            }

            pagination-item-min-width {
                display: block;
                width: 100px;
                list-style: none;
                margin: 0 auto;
                position: relative;
                justify-content: center;
                overflow: hidden;
                top: 30px;

                >li {
                    border: 1px solid black;
                    width: 3%;
                    text-align: center;
                    padding: 5px;
                    border-radius: 3px;

                    &:hover {
                        background-color: #1e293b;
                        color: #fff;
                    }
                }

                #Pre {
                    width: 4%;
                    height: auto;
                    border: 1px solid black;
                    margin-right: 5px;
                    border-radius: 5px;
                    background-color: #1e293b;
                    color: #fff;
                }

                #Next {
                    width: 4%;
                    height: auto;
                    border: 1px solid black;
                    margin-left: 5px;
                    border-radius: 5px;
                    background-color: #1e293b;
                    color: #fff;
                }
            }
        }
    }

    .updateForm {
        display: flex;
        align-items: center;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.65);
        position: fixed;
        padding: 20px;
        top: 0;
        left: 0px;
        margin: 0px;
        justify-content: center;
        flex-direction: column;
        z-index: 1;

        #inline_box {
            background-color: var(--light);
            width: 85%;
            height: 80%;
            border-radius: 10px;
            margin-left: 32px;
        }

        .updateTable {
            display: flex;
            border: 1px solid black;
            width: 85%;
            height: 70%;
            margin: 1% auto;
            box-shadow: 0 0 3px black;
            flex-direction: column;
        }

        .emp_wrap {
            strong {
                display: block;
                position: static;
                text-align: left;
            }

            display: block;
            float: left;
            padding: 10px 10px 0px 10px;
            width: 20%;

            #up_emp_ID {
                background-color: #fff;
                padding: 2.5px;
                border: 1px solid rgba(32, 32, 32, 0.2);
                border-radius: 4px;
                padding: 2px;
            }
        }

        .user_name {
            strong {
                display: block;
                position: static;
                text-align: left;
            }

            display: block;
            float: left;
            padding: 10px 10px 0px 10px;
            width: 20%;

            #name_input {
                background-color: #fff;
                padding: 2.5px;
                border: 1px solid rgba(32, 32, 32, 0.2);
                border-radius: 4px;
                padding: 2px;
            }
        }

        .user_name,
        .user_Email {
            strong {
                display: block;
                position: static;
                text-align: left;
                width: 12rem;
            }

            display: block;
            float: left;
            padding: 10px 10px 0px 10px;
            width: 20%;

            #name_input,
            #Email_input {
                width: 100%;
                display: inline;
                background-color: #fff;
                padding: 2.5px;
                border: 1px solid rgba(32, 32, 32, 0.2);
                border-radius: 4px;
                padding: 2px;
            }
        }

        .user_teamName_Position {
            height: 20%;
            padding: 10px 10px 0px 10px;
            text-align: left;

            strong {
                text-align: left;
                width: 3rem;
            }

            #teamName,
            #Position {
                width: 30%;
                height: 50%;
                display: flex;
                background-color: #fff;
                padding: 2.5px;
                border: 1px solid rgba(32, 32, 32, 0.2);
                border-radius: 4px;
                padding: 2px;

            }

            #Div,
            #Pos {
                width: 100%;
            }

            #user_approve {
                width: 30%;
                height: 50%;
                display: block;
                background-color: #fff;
                padding: 2.5px;
                border: 1px solid rgba(32, 32, 32, 0.2);
                border-radius: 4px;
                padding: 2px
            }

            #approve {
                width: 100%;
            }
        }

        #modal_y,
        #modal_n {
            width: 100px;
            height: 30px;
            background-color: #1e293b;
            color: #fff;
            font-size: 14px;
            font-weight: 550;

            &:hover {
                background-color: rgba(32, 32, 32, 0.8);
                transition: 0.5s;
            }
        }

        #modal_y {
            margin-right: 15px;
        }

        #modal_n {
            margin-left: 15px;
        }
    }
}
</style>
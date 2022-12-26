<template>
    <Header />
    <Sidebar />
    <div class="userPage">
        <form action="/searching_page" method="POST" name="" enctype="multipart/form-data">
            <div class="Dropzon-style">
                <DropZone @drop.prevent="drop" @change.prevent="selectedFile" />
                <button id="addFile" @click.prevent="fileAdd">파일선택</button>
            </div><br>
        </form>
        <div class="DropzoneResultTable" v-if="fileInfo.length > 0">
            <div class="file-info">
                <table id="infoTable">
                    <button @click="remove_table" id="removeBtn">삭제하기</button>
                    <tr>
                        <th><input type="checkbox" name="" id="All_check" @click="all_Check"></th>
                        <th>No</th>
                        <th >파일명</th>
                        <th>파일 확장자</th>
                    </tr>
                    <tr v-for="(item, index) in fileInfo" :key="index">
                        <td><input type="checkbox" name="filecheck" id="file_check" :value="this.fileInfo"></td>
                        <td>{{ index }}</td>
                        <td>{{ item.name }}</td>
                        <td>{{ item.type == 'application/pdf' ? 'PDF' : '알 수 없는 확장자명' }}</td>
                    </tr>
                </table>
                <br>
                <button id="submit_file" @click.prevent="post_test">파일 업로드</button>
            </div>
        </div>
    </div>
    <div class="History">
        <button id="MoveLog" @click="MoveLog">로그창 이동</button>
        <div id="TodayList">
            <div class="dataTable" v-if="this.data = 0">
                <h3>오늘 내역</h3>
                <table>
                    <tr>
                        <th>날짜</th>
                        <th>시간</th>
                        <th>사용자</th>
                        <th>파일명</th>
                        <th>만료 예정일</th>
                        <th>처리 내용</th>
                        <th>비고</th>
                    </tr>
                    <tr>
                        <td colspan="7">조회된 데이터 없음</td>
                    </tr>
                </table>
            </div>
            <div class="dataTable" v-else="this.data=1">
                <h3>오늘 내역</h3>
                <table>
                    <tr>
                        <th>날짜</th>
                        <th>시간</th>
                        <th>사용자</th>
                        <th coll-span="2">파일명</th>
                        <th>만료 예정일</th>
                        <th>비고</th>
                    </tr>
                    <tr>
                        <td>2022.12.05</td>
                        <td>15:20</td>
                        <td>광인사</td>
                        <td coll-span="2">IPC/JEDEC J-STD-020D.1</td>
                        <td>30일 후</td>
                        <td><button>이동</button></td>
                    </tr>
                    <tr>
                        <td>2022.12.05</td>
                        <td>14:20</td>
                        <td>광인사</td>
                        <td coll-span="2">KCI_FI002579162</td>
                        <td>29일 후</td>
                        <td><button>이동</button></td>
                    </tr>
                    <tr>
                        <td>2022.12.05</td>
                        <td>11:20</td>
                        <td>광인사</td>
                        <td coll-span="2">KCI_FI00257927</td>
                        <td>26일 후</td>
                        <td><button>이동</button></td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
//데이터 만들기

import Sidebar from '@/components/Sidebar.vue';
import Header from '@/components/Header.vue';
import router from '@/router/router';
import { ref } from 'vue'
import DropZone from '@/components/DropZone.vue';
import axios from 'axios'
export default {
    name: "User",
    components: { Sidebar, Header, DropZone },
    data() {
        return {
            fileInfo: [],
            checkCnt: [],
            check_leng: 0,
            isUploading: false, // 파일 업로드 체크
            response: null,
            test: [1, 2, 3, 4, 5, 6],
        };
    },
    methods: {
        fileAdd: () => {
            let Add = document.getElementById('dropzoneFile')
            Add.click();
        },
        MoveLog: () => {
            router.push('/logpage')
        },
        drop(e) {
            let file = e.dataTransfer.files
            let fileType = [];
            for (let i = 0; i < file.length; i++) {
                fileType.push(file[i].type);
            }
            if (file.length < 2) {
                let fileTypeName = fileType
                fileTypeName = fileTypeName.map((item) => item == 'application/pdf' ? 'PDF' : item)
                fileTypeName = fileTypeName.map((item) => item == 'application/haansofthwp' ? 'hwp' : item)
                fileTypeName = fileTypeName.map((item) => item == 'image/png' ? 'png' : item)
                fileTypeName = fileTypeName.map((item) => item == 'image/jpeg' ? 'jpeg' : item)
                fileTypeName = fileTypeName.map((item) => item == 'application/x-zip-compressed' ? 'zip' : item)
                fileType = fileTypeName;
                if (fileType.includes('PDF')) {
                    for (let i = 0; i < fileType.length; i++) {
                        this.fileInfo.push(file[i])
                    }
                } else {
                    alert('지원되지 않는 파일유형 입니다.')
                }
            } else {
                alert('하나의 파일만 업로드 할 수 있습니다.')
            }
        },
        selectedFile() {
            let file = document.querySelector("#dropzoneFile").files
            let fileType = [];
            for (let i = 0; i < file.length; i++) {
                fileType.push(file[i].type);
            }
            if (file.length < 2) {
                let fileTypeName = fileType
                fileTypeName = fileTypeName.map((item) => item == 'application/pdf' ? 'PDF' : item)
                fileTypeName = fileTypeName.map((item) => item == 'application/haansofthwp' ? 'hwp' : item)
                fileTypeName = fileTypeName.map((item) => item == 'image/png' ? 'png' : item)
                fileTypeName = fileTypeName.map((item) => item == 'image/jpeg' ? 'jpeg' : item)
                fileTypeName = fileTypeName.map((item) => item == 'application/x-zip-compressed' ? 'zip' : item)
                fileType = fileTypeName;
                if (fileType.includes('PDF')) {
                    for (let i = 0; i < fileType.length; i++) {
                        this.fileInfo.push(file[i])
                    }
                } else {
                    alert('지원되지 않는 파일유형 입니다.')
                }
            }
        },
        remove_table() {
            const check_list = document.querySelectorAll('#file_check');
            for (let i = 0; i < check_list.length; i++) {
                if (check_list[i].checked) {
                    check_list[i].parentElement.parentElement.remove();
                    this.fileInfo.splice(i)
                }
            }
        },
        all_Check() {
            const allcheck = document.querySelector("#All_check");
            const check_list = document.querySelectorAll('#file_check');
            if (allcheck.checked) {
                for (let i = 0; i < check_list.length; i++) {
                    check_list[i].checked = true
                }
            } else {
                for (let i = 0; i < check_list.length; i++) {
                    check_list[i].checked = false
                }
            }
            return;
        },
        post_test() {
            const check = document.querySelectorAll('#file_check')
            let leng = 0;
            let sum = []
            let formData = new FormData();
            for (let i = 0; i < check.length; i++) {
                if (check[i].checked == true) {
                    leng += i
                    sum.push(leng)
                    let file = this.fileInfo[i].name
                    console.log(file)
                    formData.append('files', file)
                    axios
                        .get(`/func/pdf?file=${file}`, )
                        .then((res) => {
                            console.log(res.data)
                            sessionStorage.setItem('keyWordList',JSON.stringify(res.data))
                            router.push({ name: 'searching_page' })
                        })
                        .catch((err) => {
                            console.log(`errcod:${err}`);
                        })
                        .finally(
                            console.log(file)
                        )
                }
                if (sum.length > 1) {
                    alert('하나만 골라주세요!')
                }
                check[i].checked == false
            }

            // formData.append('files',file);

        }
    }
}

</script>
<style lang="scss" scoped>

 
.userPage {
    width: 80%;
    height: 100%;
    margin: 7.5rem 7.5rem 2.75rem 12.5%;
}


.Dropzon-style {
    width: 100%;
    height: 37vh;
    border: 1px solid var(--light);
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5); 
    display: grid;

}


#addFile {
    background-color: #1e293b;
    border: 1px solid white;
    border-radius: 0.3em;
    width: 8em;
    height: 3rem;
    font-size: 16px;
    font-weight: 550;
    color: #fff;
    position: relative;
    text-align: center;
    margin: 0 auto;

    &:hover {
        box-shadow: inset 0px 0px 3px #fff;
        background-color: #1e293b;
    }
}

.file-info {
    width: 100%;
    margin:  3.5% 1% 0% 0%;
    padding-bottom: 3%;
    text-align: center;
    display: grid;
    table-layout: fixed;
    word-break: break-all;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    margin-top: 3.5%; 
    #infoTable{
        margin: 3.5% 1% 0% 1%;
    }

    td {
        margin: auto;
        text-align: center;
        border-collapse: collapse;
        justify-content: space-between;
        box-shadow: 0 0 3px rgba(32, 32, 32, 0.7);
        background-color: var(--light);
        width: 20%;
        height: auto;
        border: 1px solid rgba(32, 32, 32, 0.5);
        border-radius: 3px;
        word-wrap: break-word;
    }

    th {
        margin: auto;
        text-align: center;
        border-collapse: collapse;
        justify-content: space-between;
        box-shadow: 0 0 3px rgba(32, 32, 32, 0.7);
        background-color: var(--light);
        width: 100px;
        height: auto;
        border: 1px solid rgba(32, 32, 32, 0.5);
        border-radius: 3px;
        word-wrap: break-word;
    }
}

#submit_file {
    background-color: #1e293b;
    border: 1px solid white;
    border-radius: 0.3em;
    width: 8em;
    height: 3rem;
    font-size: 15px;
    font-weight: 550;
    color: #fff;
    position: relative;
    text-align: center;
    margin: 0 auto;

    &#submit_file:hover {
        box-shadow: inset 0px 0px 3px #fff;
        background-color: #1e293b;
    }
}

.History {
    width: 80%;
    height: 10%;
    margin: 4% 10% 4% 12.5%;
    padding-left: 52px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    text-align: center;
}

.dataTable {
    width: 90%;
    height: 100%;
    margin: auto;
    padding-bottom: 3%;
    text-align: center;
    display: grid;
    table-layout: fixed;
    word-break: break-all;

    th,
    td {
        margin: auto;
        text-align: center;
        border-collapse: collapse;
        justify-content: space-between;
        box-shadow: 0 0 3px rgba(32, 32, 32, 0.7);
        background-color: var(--light);
        width: 4em;
        height: 1em;
        border: 1px solid rgba(32, 32, 32, 0.5);
        border-radius: 3px;
        word-wrap: break-word;

        button {
            border: 1px solid black;
            background-color: #1e293b;
            border-radius: 3px;
            color: #fff;
            font-weight: 400;
            font-size: 14px;
        }
    }

    td {
        height: 1.8em;
    }
}

#MoveLog {
    width: 100px;
    height: 35px;
    border: 1px solid black;
    float: right;
    position: relative;
    border-radius: 7px;
    background-color: #1e293b;
    color: white;
    font-size: 14px;
    font-weight: 550;
    top: 5px; right: 5px;

    &#MoveLog:hover {
        box-shadow: inset 0px 0px 3px #fff;
    }
}

#MoveRsBtn {
    border: 0.1em solid black;
    position: relative;
    border-radius: 3px;
    background-color: #1e293b;
    color: white
}

#removeBtn {
    float: left;
    margin: 10px 10px;
    width: 100px;
    height: 35px;
    background-color: #1e293b;
    color: #fff;
    font-size: 1rem;
    border-radius: 0.5rem;

    &:hover {
        box-shadow: 0 0 20px rgba(32, 32, 32, 0.3);
        color: #fff;
    }
}
</style>
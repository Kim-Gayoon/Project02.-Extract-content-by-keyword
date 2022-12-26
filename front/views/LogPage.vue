<template>
    <Header />
    <Sidebar/>
    <div class="LogPage_container">
        <div class="LogPage_header">
            <h4 id="tit">저장된 로그(활동내역)</h4>
            <div class="LogPageSearchTable">
                <input type="date" class="start_date" name="start_date" min="2000-01-01" max="2100-12-31" v-model="start_date"> ~
                <input type="date" class="end_date" name="end_date" min="2000-01-01" max="2100-12-31" v-model="end_date">
                <input type="submit" class="dateSubmit" value="검색"  @click.prevent="dateSubmit"  >
            </div>
        </div>        
        <hr>
        <div class="Log_margin">
            <div class="LogPageTable">
                <div class="LogPageDiv"> 
                    <h4 class="LogPageDay">2022년12월11일</h4>
                    <table class="table_border">
                        <tr>
                            <th>번호</th>
                            <th>처리자</th>
                            <th>날짜</th>
                            <th>시간</th>
                            <th>파일명</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>admin</td>
                            <td>2022년12월11일</td>
                            <td>10:13:22</td>
                            <td>IR Reflow Profile</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>admin</td>
                            <td>2022년12월11일</td>
                            <td>11:31:22</td>
                            <td>MMFA60R360Q Reliability Report (2022.07.06) [QART-2207-003]</td>
                        </tr>
                    </table>
                </div>
            </div>
            <div class="LogPageTable">
                <div class="LogPageDiv"> 
                    <h4 class="LogPageDay">2022년12월10일</h4>
                    <table class="table_border">
                        <tr>
                            <th>번호</th>
                            <th>처리자</th>
                            <th>날짜</th>
                            <th>시간</th>
                            <th>파일명</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>장건</td>
                            <td>2022년12월10일</td>
                            <td>9:59:33</td>
                            <td>QC Flow chart_SFA</td>
                        </tr>
                    </table>
                </div>
            </div>
            <div class="LogPageTable">
                <div class="LogPageDiv"> 
                    <h4 class="LogPageDay">2022년12월09일</h4>
                    <table class="table_border">
                        <tr>
                            <th>번호</th>
                            <th>처리자</th>
                            <th>날짜</th>
                            <th>시간</th>
                            <th>파일명</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>하영진</td>
                            <td>2022년12월09일</td>
                            <td>10:55:05</td>
                            <td>Mounting Strength</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>고경훈</td>
                            <td>2022년12월09일</td>
                            <td>15:42:59</td>
                            <td>MMFA60R360QTH ESD 보증</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>고경훈</td>
                            <td>2022년12월09일</td>
                            <td>17:54:32</td>
                            <td>MMFA60R360QTH SCM</td>
                        </tr>
                    </table>
                </div>
            </div>
            <div class="LogPageTable">
                <div class="LogPageDiv"> 
                    <h4 class="LogPageDay">2022년12월08일</h4>
                    <table class="table_border">
                        <tr>
                            <th>번호</th>
                            <th>처리자</th>
                            <th>날짜</th>
                            <th>시간</th>
                            <th>파일명</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>조호현</td>
                            <td>2022년12월08일</td>
                            <td>09:33:55</td>
                            <td>MMFA60R360Q_Datasheet_v0.0_20220624</td>
                        </tr>
                    </table>
                </div>
            </div>
            <div class="LogPageTable">
                <div class="LogPageDiv"> 
                    <h4 class="LogPageDay">2022년12월07일</h4>
                    <table class="table_border">
                        <tr>
                            <th>번호</th>
                            <th>처리자</th>
                            <th>날짜</th>
                            <th>시간</th>
                            <th>파일명</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>장건</td>
                            <td>2022년12월07일</td>
                            <td>17:00:19</td>
                            <td>TO220(F) (2)</td>
                        </tr>
                    </table>
                </div>
            </div>
            <div class="LogPageTable">
                <div class="LogPageDiv"> 
                    <h4 class="LogPageDay">2022년12월06일</h4>
                    <table class="table_border">
                        <tr>
                            <th>번호</th>
                            <th>처리자</th>
                            <th>날짜</th>
                            <th>시간</th>
                            <th>파일명</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>김가윤</td>
                            <td>2022년12월06일</td>
                            <td>10:22:25</td>
                            <td>MX_OQC REPORT_MMFA60R360Q</td>
                        </tr>
                    </table>
                </div>
            </div>
            <div class="LogPageTable">
                <div class="LogPageDiv"> 
                    <h4 class="LogPageDay">2022년12월05일</h4>
                    <table class="table_border">
                        <tr>
                            <th>번호</th>
                            <th>처리자</th>
                            <th>날짜</th>
                            <th>시간</th>
                            <th>파일명</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>김가윤</td>
                            <td>2022년12월05일</td>
                            <td>9:38:18</td>
                            <td>MBKB-D_MMFA60R360QTH_Marking Instruction</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

import Header from '@/components/Header.vue';
import Sidebar from '@/components/Sidebar.vue';
import router from '@/router/router';
export default {
    name: "LogPages",
    components: {Header, Sidebar},
    data(){
        return{
            dateSearch_rows: 0,
            dateSearch:false,
            start_date: '',
            end_date: '',
            date_list:[],
            pdata:['키득이'],
            fdata:[1,2,3,4,5,6,7]
        }
    },
    mounted:function(){
        // Today 지정
        let today = new Date()
        let todayYear = today.getFullYear()
        let todayMonth = today.getMonth()+1
        todayMonth = todayMonth.length == 1 ? '0' + todayMonth : todayMonth
        let todayDay = `${today.getDate() < 10 ? '0' + today.getDate() : today.getDate()}`

        for (let i=0; i<7; i++){
            let monthDate = todayDay-i
            if(monthDate <= 0){
                if(todayMonth === 4 || todayMonth === 6 || todayMonth === 9 || todayMonth === 11 ){
                    let date = todayYear + '년' + (todayMonth-1) + '월' + (36-i) + '일'
                    this.date_list.push(date)
                } else if(todayMonth === 2){
                    if(todayYear % 0){
                        let date = todayYear + '년' + (todayMonth-1) + '월' + (35-i) + '일'
                        this.date_list.push(date)
                    } else{
                        let date = todayYear + '년' + (todayMonth-1) + '월' + (34-i) + '일'
                        this.date_list.push(date)
                    }
                } else{
                    let date = todayYear + '년' + (todayMonth-1) + '월' + (37-i) + '일'
                    this.date_list.push(date)
                }
            } else if(monthDate>0){
                let date = todayYear + '년' + todayMonth + '월' + (todayDay-i) + '일'
                this.date_list.push(date)
            }
        }   
    },
    methods:{
        // table 구성 
        dateSubmit(){
            this.date_list=[]
            this.dateSearch_rows=0

            // Today 지정
            let today = new Date()
            let todayYear = today.getFullYear()
            let todayMonth = today.getMonth()+1
            todayMonth = todayMonth.length == 1 ? '0' + todayMonth : todayMonth
            let todayDay = `${today.getDate() < 10 ? '0' + today.getDate() : today.getDate()}`
            let today_R = todayYear + '년' + todayMonth + '월' + todayDay + '일'
            let today_M = todayYear + '년' + (todayMonth-1) + '월' + todayDay + '일'
            console.log(today)
            
            // Start_date 지정
            let startDate = new Date(this.start_date)
            let startYear = startDate.getFullYear()
            let startMonth = startDate.getMonth()+1
            startMonth = startMonth.length == 1 ? '0' + startMonth : startMonth
            let startDay = `${startDate.getDate() < 10 ? '0' + startDate.getDate() : startDate.getDate()}`
            let startDateT = startYear+ '년' + startMonth + '월' + startDay + '일'
            console.log(typeof(startDate))

            // End_date 지정
            let endDate = new Date(this.end_date)
            let endYear = endDate.getFullYear()
            let endMonth = endDate.getMonth() + 1
            endMonth = endMonth.length == 1 ? '0' + endMonth : endMonth
            let endDay = `${endDate.getDate() < 10 ? '0' + endDate.getDate() : endDate.getDate()}`
            let endDateT = endYear + '년' + endMonth + '월' + endDay + '일'
            console.log(endDate)

            let overMonth = todayMonth - startMonth
            let overMonth_ = startMonth - endMonth
            console.log(endDay, endDay-startDay)


            //당월과 전월 한정
            if( overMonth === 0 || overMonth ===1){
                //overMonth가  1인경우
                if(overMonth === 1){
                    // startDay < endDay
                    if( startDay < endDay){
                        if( startDay < todayDay || endDay < todayDay){
                            alert(`${today_M} 이전은 조회할 수 없습니다.`)
                            return router.push('/logpage')
                        } 
                        // 정상 가동시
                        else{
                            let gaps = endDay - startDay
                            for(i=0; i<= gaps; i++){
                                let date = startYear + '년' + startMonth + '월' + (startDay+i) + '일'
                                this.date_list.push(date)
                            }
                        }
                    } 
                    // startDay > endDay
                    else {
                        // 시작월과 끝월이 다를경우
                        if(startMonth+1 === endMonth){
                            if(startMonth === 2){
                                if(startYear % 4 === 0){
                                    let gaps = (parseInt(endDay) + 29)
                                console.log(gaps-startDay) 
                                    console.log(gaps, typeof(gaps))
                                    for(let i=0; i<= (gaps-parseInt(startDay)); i++){
                                        console.log(parseInt(endDay)-i)
                                        if((gaps-i) > 29){
                                            console.log(parseInt(endDay)-i)
                                            let date = endYear + '년' + endMonth + '월' + (endDay-i) + '일'
                                            this.date_list.push(date)
                                            console.log(this.date_list)
                                            console.log('성공')
                                        } else{
                                            let date = startYear + '년' + startMonth + '월' + (gaps - i) + '일'
                                            this.date_list.push(date)
                                            console.log(this.date_list)
                                        }     
                                    }
                                } else{
                                    let gaps = (parseInt(endDay) + 28)
                                    console.log(gaps-startDay) 
                                    console.log(gaps, typeof(gaps))
                                    for(let i=0; i<= (gaps-parseInt(startDay)); i++){
                                        console.log(parseInt(endDay)-i)
                                        if((gaps-i) > 28){
                                            console.log(parseInt(endDay)-i)
                                        let date = endYear + '년' + endMonth + '월' + (endDay-i) + '일'
                                            this.date_list.push(date)
                                            console.log(this.date_list)
                                            console.log('성공')
                                        } else{
                                            let date = startYear + '년' + startMonth + '월' + (gaps - i) + '일'
                                            this.date_list.push(date)
                                            console.log(this.date_list)
                                        }     
                                    }
                                }
                            } if(startMonth === 4 || startMonth === 6 || startMonth === 9 || startMonth === 11 ) {
                                let gaps = (parseInt(endDay) + 30)
                                console.log(gaps-startDay) 
                                console.log(gaps, typeof(gaps))
                                for(let i=0; i<= (gaps-parseInt(startDay)); i++){
                                    console.log(parseInt(endDay)-i)
                                    if((gaps-i) >30){
                                        console.log(parseInt(endDay)-i)
                                        let date = endYear + '년' + endMonth + '월' + (endDay-i) + '일'
                                        this.date_list.push(date)
                                        console.log(this.date_list)
                                        console.log('성공')
                                    } else{
                                        let date = startYear + '년' + startMonth + '월' + (gaps - i) + '일'
                                        this.date_list.push(date)
                                        console.log(this.date_list)
                                    }     
                                }
                            } else {
                                let gaps = (parseInt(endDay) + 31)
                                console.log(gaps-startDay) 
                                console.log(gaps, typeof(gaps))
                                for(let i=0; i<= (gaps-parseInt(startDay)); i++){
                                    console.log(parseInt(endDay)-i)
                                    if((gaps-i) > 31){
                                        console.log(parseInt(endDay)-i)
                                        let date = endYear + '년' + endMonth + '월' + (endDay-i) + '일'
                                        this.date_list.push(date)
                                        console.log(this.date_list)
                                        console.log('성공')
                                    } else{
                                        let date = startYear + '년' + startMonth + '월' + (gaps - i) + '일'
                                        this.date_list.push(date)
                                        console.log(this.date_list)
                                    }     
                                } 
                            }
                        }
                    }
                } 
                // overMonth가 0인 경우
                 else {
                    // 종료일이 시작일보다 큰 경우
                    if( startDay < endDay){
                        if( startDate > today || endDate > today){
                            alert(`${today_R}를 넘겨서 조회할 수 없습니다.`)
                            return router.push('/logpage')
                        } 
                        // 정상 가동시
                        else{
                            let gaps = endDay - startDay
                            for(let i=0; i<= gaps; i++){
                                let date = endYear + '년' + endMonth + '월' + (endDay-i) + '일'
                                this.date_list.push(date)
                            }
                        }
                    } else{
                        alert('입력하신 시작일과 종료일을 확인해 주십시오')
                        return router.push('/logpage')
                    }
                }
            } 
            // 시작일보다 종료일이 한달 앞일 때
            else if(overMonth_ === 1){
                alert('입력하신 시작일과 종료일을 확인해주십시오')
                return router.push('/logpage')
            } 
            // 그 외에
            else {
                alert(`${today_R} 이전 1달만 조회가 가능합니다.`)
                return router.push('/logpage')
            }
        } 
    }
}

</script>

<style scoped lang="scss">
    .LogPage_container{
        margin: 10%;
        bottom: 10vw;
        width: 100%;
        flex-direction: column;
        position: relative;
    }
    .LogPage_header{
        margin-top: 15rem;
        margin-bottom: 2rem;
        text-align: left;
         #tit{border-bottom: 1px solid black; display: inline-block; margin-bottom: 1rem;}
    }

    .start_date{
        width: 150px;
        text-align: center;
        color: black;
        border-radius: 4px;
    }
    
    .end_date{
        width: 150px;
        text-align: center;
        color: black;
        border-radius: 4px;
    }

    .dateSubmit{
        margin-left: 10px;
        width: 5rem;
        height: 30px;
        border: 1px solid black;
        border-radius: 8px;
        background-color: black;
        color: white;
        font-size: large;
        cursor: pointer;
    }

    .dateSubmit:hover{
        box-shadow: inset 0 0 10px #fff;
    }

    .Log_margin{
        margin: auto;
    }

    /* .LogPageTable{ } */

    .LogPageDiv{
        background-color: white;
        width: 80% ;
    }
    .LogPageDay{
        border: 2px solid rgba(32,32,32,0.5);
        width: 10rem;
        height: 2rem;
        border-radius: 10px;
        text-align: center;
    }
    
    .table_border{
        width: 90%;
        height: 100%;
        margin: auto;
        padding-bottom: 3%;
        text-align: center;
        display: grid;
        table-layout: fixed;
        word-break: break-all;
    }
    
    th,td{
        margin: auto;
        text-align: center;
        border-collapse: collapse;
        justify-content: space-between;
        box-shadow: 0 0 3px rgba(32, 32, 32, 0.7);
        width: 10em;
        height: 1em;
        border: 1px solid rgba(32, 32, 32, 0.5);
        border-radius: 3px;
        word-wrap: break-word;
    }  

</style>
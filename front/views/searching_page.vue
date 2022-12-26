<template>
  <Header />
  <Sidebar />
  <div class="FilePage">
    <div id="file_tit"><p>파일페이지><strong>서치 페이지</strong></p></div>
    <div class="KeyWordSelect">
      <div class="Key_form_section">
          <div class="v-KeySel">
            <div id="KeyFont"><label for="KeywordSelect">Choose your KeyWord</label></div>
            <select name="KeywordSelect" id="KeyWordSelect" v-model="select_keyword" >
              <option v-for="data in Key_data" :value="data" >{{data}}</option>
            </select>
            <button @click.prevent="addKeyword" id="addKeyword">조회하기</button>
          </div>
      </div>
      <div class="Val_form_section">
          <div class="v-ValuSel">
            <div id="val_Font"><label for="ValueSelect">Confirm value</label></div>
            <ul id="val_list">
              <li v-for="items,index in val_data" :key="index">
             {{index+1}}. {{items}}
              </li>
            </ul>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
//함수 선언
import Header from '@/components/Header.vue';
import Sidebar from '@/components/Sidebar.vue';
import axios from 'axios';
export default {
  name: 'FilePage',
  components: { Header, Sidebar },
  mounted(){
    this.Key_data=JSON.parse(sessionStorage.getItem('keyWordList'))
    },
  data() {
    return {
      keyWord:[],
      Key_data:[],
      val_data:[],
      select_value:'',
      select_keyword:'',
      outputResult:{
        keyword:'',
        val:'',
      }
    }
  },
  methods:{
    addKeyword(){
      console.log(this.select_keyword)
      axios.get(`/func/find?keyword=${this.select_keyword}`) //`/func/pdf?file=${file}
      .then((res) => {
        this.val_data = JSON.parse(res.data[0])
      })
      
    },
  }
}
</script>
<style lang="scss" scoped>
.FilePage {
  width: 170vw;
  display: inline-flex;
  margin: 10% 10% 10% 5%;
  #file_tit{position: absolute; margin: 0 auto; border-bottom: 1px solid #808080; margin-left: 2%;}  .KeyWordSelect {
    padding: 2%;
    width: 45%;
    height: 35rem;
    margin: 5% 5% 0% 5%;
    display: inline-block;
    flex-direction: column;
    box-shadow: 1px 0px 5px black;
    justify-content: center;
    #add_select{width: 50%; margin-top: 3rem; height: 7%; border:1px solid black; border-radius: 5px; background-color: #1E293B; color: #fff; margin-left: 3rem;
      font-weight: 550;}
    #KeyFont {
      margin-bottom: 0.5rem;
    }
    .Key_form_section {
      width: 100%;
      height: 12rem;
      margin-bottom: 2.5%;
      padding: 5%;
      display: block;
      box-shadow: 0 0 3px #1E293B;
      #KeyWordSelect {
        width: 100%;
        display: block;
        border-bottom: 1px solid #808080;
        appearance: menulist;
        outline: none;
        #research_btn{width: 10%; height: 10%; background-color: #1E293B;}
      }
      #addKeyword{width: 8rem; height: 1.7rem; background-color: #1E293B; color: #fff; border-radius: 5px; position: relative;
      top: 1.5rem;}
      .v-KeySel {
        width: 100%;
      }
    }
    .Val_form_section {
      width: 100%;
      height: 12rem;
      padding: 5%;
      margin-top: 5%;
      display: block;
      box-shadow: 0 0 3px #1E293B;
      position: static;
      
      #ValueSelect {
        width: 100%;
        display: block;
        border-bottom: 1px solid #808080;
        appearance: menulist;
        outline: none;
      }
      #val_Font {
        margin-bottom: 0.5rem;
      }
      .v-ValuSel {
        width: 100%;
      }
      #val_list{width: 100%; background-color: #fff; box-shadow: 1px 0px 5px black; list-style: none;}
    }
  }
  #submit_Box {
    width: 10%;
    #K_V_btn {
      border: 1px solid black;
      background-color: #1E293B;
      color: #fff;
      font-weight: 550;
      width: 100%;
      height: 1.7rem;
      justify-content: center;
      border-radius: 5px;
      position: relative;
      margin-top: 17rem;
    }
  }
}
</style>
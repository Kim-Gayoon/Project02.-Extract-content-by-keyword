<template>
  <Header />
  <Sidebar />
  <div id="FilePage">
    <form>
      <DropZone @drop.prevent="drop" @change="selectedFile"/> <br>
      <span class="file-info">선택 파일명:{{dropzoneFile.name}}</span>
      <br><br>
      <div id="FileUpLoad">
        <label for="">키워드 입력</label>
        <input type="text" id="">
        <button><i class="fa-solid fa-trash"></i></button> <br><br>
      </div>
      <strong>*파일 업로드 내역은 7일간 유지되며, Log페이지를 통해 확인하실 수 있습니다.</strong><br>
      <button type="submit" id="File-submit">제출</button>
    </form>
  </div>
</template>
<script>
//함수 선언
import Header from '@/components/Header.vue';
import Sidebar from '@/components/Sidebar.vue';
import DropZone from '@/components/DropZone.vue'
import { ref } from 'vue';
import { file } from '@babel/types';
export default {
  name: 'FilePage',
  components: { Header, Sidebar, DropZone },
  methods: {},
  setup() {
    let dropzoneFile = ref("")
    const drop = (e) => {
      dropzoneFile.value = e.dataTransfer.files[0]
      if(e.dataTransfer.files != 1) {
        const result= []
        let filename = '';
        for(let i =0; i>=e.dataTransfer.files.length; i++){
          result.push(e.dataTransfer.files[i])
          console.log(result)
        }
      }
      
    }

    const selectedFile = () => {
      dropzoneFile.value = document.querySelector("#dropzoneFile").files[0]
    }
    return { dropzoneFile, drop, selectedFile }
  }
}
</script>
<style>
@media screen and (max-width:1920px) {
#FilePage {
  align-items: center;
  width: 100vw;
  height: 30vh;
  display: block;
  position: relative;
  top: 3em;
  text-align: center;
  padding-left: 20vw;
}

.svg-inline--fa {
  font-size: 2em
}

#File-submit {
  text-align: center;
  margin: 0 auto;
  display: block;
  border: 1px solid black;
  border-radius: 0.5rem;
  width: 15vw;
  position: relative;
  top: 1em;
  background: rgba(0, 0, 0, 0.5);
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.8);
}

#inputFile {
  visibility: hidden;
}

#fileName {
  border: 1px solid black;
  text-align: left;
  padding: 0.5em 10em 0.5em 10em;
  background: rgba(255, 255, 255, 1);
  font-size: small;
  border-radius: 0.5em;
}

#textname {
  border: 1px solid black;
  text-align: center;
  padding: 0.5em 5em 0.5em 5em;
  background: rgba(255, 255, 255, 1);
  font-size: small;
  border-radius: 0.5em;
}
}
</style>
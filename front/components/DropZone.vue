<template>
    <form action="" id="form" enctype="multipart/form-data">
    <div @dragenter.prevent="toggleActive" 
        @dragleave.prevent="toggleActive" 
        @dragover.prevent
        @drop.prevent="toggleActive"
        @click="addFiles"
        :class="{'active-dropzone':active}"
        class="dropzone">
        <span>파일을 드래그해주세요.</span>
        <span>*파일형식은 PDF만 가능</span>
        <input type="file" id="dropzoneFile" name="" accept=".pdf">
    </div>
</form>
</template>
<script>
import {ref} from 'vue'
export default {
    name:"DropZone",
    data: ()=>{
        return{
        }
    },
    methods:{
        addFiles(){
            let files = document.getElementById('dropzoneFile')
            files.click()
        }
    },
    setup(){{
        const active = ref(false)

        const toggleActive = ()=>{
            active.value = !active.value;
        };
        return {active, toggleActive}
    }
}
}
</script>
<style scoped lang="scss">
.dropzone{
    width: 70vw;
    height: 25vh;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    border: none;
    border-radius: 10px;
    background-color: #fff;
    transition: 0.3s ease all;
    text-align: center;
    z-index: 0px;
    cursor: pointer;
}
#form{margin: auto;}
#fileLabel {
    padding: 8px 12px;
    color: #fff;
    background-color: rgb(165, 0, 52);
    cursor: pointer;
}
.active-dropzone{
    color: #fff;
    border-color: #fff;
    background-color: #41b883;
    label{ background-color: #fff;
        color: #41b883;
        }
}
#dropzoneFile{visibility: hidden;}
</style>
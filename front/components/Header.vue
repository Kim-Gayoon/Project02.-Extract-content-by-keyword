<template>
    <div class="headerBar">
        <button><i class="fas fa-bars" id="Icon"></i></button>
        <img :src="HeaderLogo" alt="LogoFont" id="LogoFont">
    </div>
</template>
<script>
export default {
    name:"Header",
    data: ()=>{
        return{
        HeaderLogo : require('@/assets/image/테두리 로고.png'),
    }
}
}
</script>
<style scoped>
@media screen and (max-width:1920px) {
.headerBar {
    width: 100%;
    height: 10%;
    background: rgb(165, 0, 52);
    display: flex;
    position: fixed;
    z-index: 99;
    top:0px;
    margin-bottom: 50px;
}
#Icon{width: 2.5rem; height: 2.0rem;display: inline; position: relative; font-size: xx-large; margin-left: 1rem; color: aliceblue;}
#LogoFont{text-align: center; margin: 0 auto; display:inline; position: relative;}
}
</style>
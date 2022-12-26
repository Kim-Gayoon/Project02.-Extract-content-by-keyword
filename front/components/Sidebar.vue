<template>
  <!-- HTML -->
       <aside :class="`${is_expanded ? 'is-expanded' : ''}`">
          <div class="logo">
              <!-- <img src="../assets/keykey.png" alt="Vue">     로고 삽입 -->
              <!-- src=이미지 경로 지정, alt= 이미지의 텍스트 설명, 필수x -->
          </div>
  
          <div class="menu-toggle-wrap">   
              <!-- 아이콘 메뉴(>>) -->
              <button class="menu-toggle" @click="ToggleMenu">  <!--  @click= = 클릭이벤트 -->
                  <!-- fonts.google.com/icons 에서 material아이콘 사용 -->
                  <span class="material-icons">keyboard_double_arrow_right</span>
              </button>
          </div>
  
          <h3>Menu</h3>
          <!-- 메뉴 추가 -->
          <div class="menu">
              <!-- router-link.button * 4 => f라우터 링크 4개 생성 하겠다 -->
  
              <!-- 1. Home -->
              <router-link class="button" to="/user">
                  <span class="material-icons">home</span>   <!-- 홈 아이콘 지정-->
                  <span class="text">Home</span>             <!-- 홈 텍스트 지정-->
              </router-link>
  
              <!-- 2. Search -->
              <router-link class="button" to="/searching_page">
                  <span class="material-icons">picture_as_pdf</span>   
                  <span class="text">Search</span>           
              </router-link>
  
              <!-- 3.Log -->
              <router-link class="button" to="/logpage">
                <span class="material-icons">history</span>
                <span class="text">Log</span>
              </router-link>
  
              <!-- 4.0. 관리자만 보도록 -> 사원관리페이지 -->
              <router-link class="button" to="/Manage" v-if="isStatusOn">
                <span class="material-icons">manage_accounts</span>
                <span class="text">Manage</span>
              </router-link>
  
              <!-- 4. Mypage-->
              <!-- <router-link class="button" to="/mypage">
                <span class="material-icons">account_box</span>
                <span class="text">Mypage</span>
              </router-link> -->
  
              <!-- 사이드바 확장 되었을 때 일자로 보임 -> 밑에.. menu-toggle 아래로 이동 -->
          </div>
  
         
          <div class="flex"></div>
          <!-- 5. User -->
          <div class="menu_underline">
            <router-link class="button" to="/mypage">
              <span class="material-icons">person</span>
              <span class="text">{{name}}</span>
            </router-link>
        
          <!-- 6. Logout-->   
            <router-link class="button" to="/" @click="loGout()">
              <span class="material-icons">logout</span>
              <span class="text">Logout</span>
            </router-link>
          </div>
      </aside>
  </template>
  
  
  
  
  <script>
  // JS
  // ref = 뷰에서 컴포넌트 또는 DOM에 접근하기 위해 사용하는 속성 
  import {ref} from 'vue';
  import {  mapActions } from 'vuex';


  export default {
  name: 'Sidebar',
  component: {},
  mounted(){
    if(sessionStorage.getItem('id') != this.var_id){
      this.isStatusOn = false
    }
    this.name = sessionStorage.getItem('name')
    this.teamName = sessionStorage.getItem('teamName')
    },
  /*  사이드가 사용자가 확장된 상태에서 시작 기본형이 확장인 것을 표시할때......
  const is_expanded = ref(false) 에서...
  const is_expanded = ref(localStorage.getItem("is_expanded") === "true")
  코드 변경해 주면 된다
  */
  // const is_expanded = ref(localStorage.getItem("is_expanded") === "true")
  // 기본은 확장된 형태이고, 아이콘 << 을 누르면 축소되는 것으로 기억
  setup() {
    {
      const is_expanded = ref(false)
      const ToggleMenu = ()=>{
        is_expanded.value = !is_expanded.value
        localStorage.setItem("is_expanded", is_expanded.value)
      }
      return { ToggleMenu, is_expanded }
    }
  },

  data() {
    return{
    isStatusOn: true,
    var_id : 'admin',
    name :'',
    teamName:''
  }
  },
  
  methods : {
    ...mapActions(['loGout'])

  }
  

}
  


  // const is_expanded = ref(false)  

  // /*  사이드가 사용자가 확장된 상태에서 시작 기본형이 확장인 것을 표시할때...... 
  // const is_expanded = ref(false) 에서... 
  // const is_expanded = ref(localStorage.getItem("is_expanded") === "true")
  // 코드 변경해 주면 된다
  // */ 
  // // const is_expanded = ref(localStorage.getItem("is_expanded") === "true")
  // // 기본은 확장된 형태이고, 아이콘 << 을 누르면 축소되는 것으로 기억 
  
  
  // const ToggleMenu = () => {
  //     is_expanded.value = !is_expanded.value
  //     localStorage.setItem("is_expanded", is_expanded.value)
  // }
  
  </script>
  
  
  
  
  
  <style scoped>
  /* CSS  */
  aside {
    display: flex;
    flex-direction: column;
    width: calc(2rem + 32px);
    overflow: hidden;
    min-height: 90vh;
    padding: 1rem;
    background-color: #A50034;
    color: var(--light);
    transition: 0.2s ease-out;
  }
  
  /* 하단 위치설정 */
  aside .flex {
    flex: 1 1 0;
  }
  
  /* ㅋㄷ 로고 설정 */
  aside .logo {
    margin-bottom: 1rem;
  }
  aside .logo img {
    width: 2rem;
  }
  
  
  /* 메뉴  */
  aside .menu-toggle-wrap {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1rem;
    position: relative;
    top: 0;
    transition: 0.2s ease-out;
  }
  aside .menu-toggle-wrap .menu-toggle {
    transition: 0.2s ease-out;
  }
  aside .menu-toggle-wrap .menu-toggle .material-icons {
    font-size: 2rem;
    color: var(--light);
    transition: 0.2s ease-out;
  }
  aside .menu-toggle-wrap .menu-toggle:hover .material-icons {
    color: var(--primary);
    transform: translateX(0.5rem);
  }
  
  
  aside h3, aside .button .text {
    opacity: 0;
    transition: opacity 0.3s ease-out;
  }
  
  
  aside h3 {
    color: var(--grey);
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
  }
  
  
  aside .menu {
    margin: 0 -1rem;
  }
  aside .menu .button {
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem 1rem;
    transition: 0.2s ease-out;
  }
  aside .menu .button .material-icons {
    font-size: 2rem;
    color: var(--light);
    transition: 0.2s ease-in-out;
  }
  aside .menu .button .text {
    color: var(--light);
    transition: 0.2s ease-in-out;
  }
  aside .menu .button:hover {
    background-color: var(--dark-alt);
  }
  aside .menu .button:hover .material-icons, aside .menu .button:hover .text {
    color: var(--primary);
  }
  aside .menu .button.router-link-exact-active {
    background-color: var(--dark-alt);
    border-right: 5px solid var(--primary);
  }
  aside .menu .button.router-link-exact-active .material-icons, aside .menu .button.router-link-exact-active .text {
    color: var(--primary);
  }
  
  
  
  /* menu_underline 아이콘 */
  aside .menu_underline {
    margin: 0 -1rem;
  }
  aside .menu_underline .button {
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem 1rem;
    transition: 0.2s ease-out;
  }
  aside .menu_underline .button .material-icons {
    font-size: 2rem;
    color: var(--light);
    transition: 0.2s ease-in-out;
  }
  aside .menu_underline .button .text {
    color: var(--light);
    transition: 0.2s ease-in-out;
  }
  aside .menu_underline .button:hover {
    background-color: var(--dark-alt);
  }
  aside .menu_underline .button:hover .material-icons, aside .menu_underline .button:hover .text {
    color: var(--primary);
  }
  aside .menu_underline .button.router-link-exact-active {
    background-color: var(--dark-alt);
    border-right: 5px solid var(--primary);
  }
  aside .menu_underline .button.router-link-exact-active .material-icons, aside .menu_underline .button.router-link-exact-active .text {
    color: var(--primary);
  }
  
  
  /* 사이드바 확장 */
  aside.is-expanded {
    width: var(--sidebar-width);
  }
  /* aside.is-expanded .menu-toggle-wrap {          >> 아이콘 확장했을 때 위로 이동 
    top: -3rem;
  } */
  aside.is-expanded .menu-toggle-wrap .menu-toggle {
    transform: rotate(-180deg);
  }
  aside.is-expanded h3, aside.is-expanded .button .text {
    opacity: 1;
  }
  aside.is-expanded .button .material-icons {
    margin-right: 1rem;
  }
  
  @media (max-width: 1920px) {
    aside {
      position: fixed;
     top: 10%;
      /* z-index: 99;       */
    }
  }
  
  </style>
  
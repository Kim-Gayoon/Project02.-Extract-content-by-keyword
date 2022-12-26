import { createRouter, createWebHistory } from 'vue-router';
const routes = [
  {
    path:'/',
    name:"Login",
    component:()=>import('@/views/Login.vue')
  },
  {
    path:'/user',
    name: "User",
    component: ()=>import('@/views/User.vue')  
  },

  {
      path: "/searching_page",
      name: "searching_page",
      component: () => import('@/views/searching_page.vue')
    },
    {
      path: "/logpage",
      name: "LogPage",
      component: () => import('@/views/LogPage.vue')
    },
    {
      path : "/manage/:page?",
      name : "manage",
      component: ()=> import('@/views/manage.vue')
    },
    {
      path: "/searchid",
      name: "searchID",
      component: ()=> import('@/views/SearchID.vue')
    },
    {
    path:"/searchpw",
    name:"searchPW",
    component: ()=> import('@/views/SearchPW.vue')
  },
  {
    path:"/signup",
    name:"Signup",
    component:()=>import('@/views/SignUP.vue')
  },
  {
    path:"/renewpw",
    name:"Renewpw",
    component:()=>import('@/views/RenewPW.vue')
  },
//   {
//   path:"/mypage",
//   name:"MyPage",
//   component:()=>import('@/views/MyPage.vue')
// },
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;
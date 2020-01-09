import Vue from  'vue';
import Router from 'vue-router';
 
import indexs from '../components/indexs/indexs';
import policy from '../components/policy/policy';
import company from '../components/company/company';
import company1 from '../components/company/company1';
import garden from '../components/garden/garden';
import aboutUs from '../components/aboutUs/aboutUs';
import  carousel from '../components/carousel/carousel';
import  carousels from '../components/carousel/carousels';
import  footers from '../components/footers/footers';
import  policy1 from '../components/policy/policy1';
import  news from '../components/news/news';
 

Vue.use(Router);

export default new Router({
  // mode:'hash',
    routes:[
        {
            path:'/',
            name:'',
            component:indexs
        },
        {
            path:'/indexs',
            name:'indexs',
            component:indexs
        },
        {
            path:'/policy',
            name:'policy',
            component:policy
        },
        {
            path:'/policy1',
            name:'policy1',
            component:policy1
        },
        {
            path:'/company',
            name:'company',
            component:company
        },
        {
            path:'/company1',
            name:'company1',
            component:company1
        },
        {
            path:'/garden',
            name:'garden',
            component:garden
        },
        {
            path:'/aboutUs',
            name:'aboutUs',
            component:aboutUs
        },
        {
            path:'/carousel',
            name:'carousel',
            component:carousel
        },
        {
            path:'/carousels',
            name:'carousels',
            component:carousels
        },
        {
            path:'/footers',
            name:'footers',
            component:footers
        },
        {
            path:'/news',
            name:'news',
            component:news
        }
    ]
})
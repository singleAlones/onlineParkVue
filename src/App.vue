<template>
  <div id="app">
      <tab></tab>
      <router-view/>
      <footers></footers>
  </div>
</template>
<script> 
import tab  from  './components/tab/tab'
  import  footers from "./components/footers/footers"
export default {
   name: 'App',
   provide(){
        return{
            reload:this.reload
        }
    },
    data(){
        return{
          isRouterAlive:true,
        }
    },
    methods:{
        reload(){
          this.isRouterAlive = false ;
          this.$nextTick(function(){
              this.isRouterAlive = true ;
          })
        }
    },
    components:{tab,footers}
  
}
</script>
<style>
     #app{
       width:100%
     }
</style>
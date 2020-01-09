 <template>
     <div class="container-fluid p-0 bg">
     <div id="header" class="container d-flex p-0 my-2">
            <div class="logo  mr-auto  ">
                <img class="img-fluid" src="../../assets/image/tabbar/logo.jpg" alt="">
            </div>
            <div class="concat  align-self-center d-flex  justify-content-end ">
                <img src="../../assets/image/tabbar/phone.png" class="img-fluid logo" alt="">
                <p class="m-0  align-self-center d-flex">客服电话：15353837992</p>
            </div>
     </div>
     <div class="container-fluid tabbar p-0 nav1">
            <nav class="nav nav-pills flex-column flex-sm-row container p-0">
                    <router-link  :to="'indexs'" class="flex-sm-fill text-sm-center nav-link" >首&nbsp;&nbsp;页</router-link>
                    <router-link :to="'policy'"  class="flex-sm-fill text-sm-center nav-link">扶&nbsp;持&nbsp;政&nbsp;策</router-link>
                    <router-link :to="'company'" class="flex-sm-fill text-sm-center nav-link" >企&nbsp;业&nbsp;风&nbsp;采</router-link>
                    <router-link :to="'garden'"  class="flex-sm-fill text-sm-center nav-link "  tabindex="-1" aria-disabled="true">入&nbsp;园&nbsp;指&nbsp;南</router-link>
                    <router-link :to="'aboutUs'" class="flex-sm-fill text-sm-center nav-link ">关&nbsp;于&nbsp;园&nbsp;区</router-link>
                </nav>
       </div>
       <!-- HTML-->
       <!-- HTML-->
 
 
    </div>
 </template>
 <script>
  import $ from  'jquery';
  $(window).scroll(function () {
  //小屏幕下的导航条折叠
  if ($(window).width() < 768) {
    //点击导航链接之后，把导航选项折叠起来
    $("#navbar a").click(function () {
      $("#navbar").collapse('hide');
    });
    //滚动屏幕时，把导航选项折叠起来
    $(window).scroll(function () {
      $("#navbar").collapse('hide');
    });
  }
});
 export default {
     name:'tab'
 }
 </script>
 <style scoped>
 .bg{
   background-color: #fff;
 }
    /* logo */
     .logo{
         width:28%; 
     }
     .logo img{
         width: 70%;
     }
     .concat p{
       font-weight: bold;
       font-size:16px;
       color:#8a8a8a;
     }
     .concat img{
       width:6%;
       height: 2%;
     }
     /* tabbar */
     .tabbar{
         width: 100%;
         background:#4F8DFE;
        
        font-family: "Microsoft YaHei";
         
     }
      
      
    .tabbar nav a{
        
        text-decoration: none;
        color:#ffff;
        display: inline-block;
      }
      .tabbar nav a:hover{
            color:#1b6fbe ;
            
      }
 </style>
<template>
    <div>
        <!-- 页尾第一部分 -->
        <div class="footer1">
            <h4>友情提醒</h4>
            <h4>入驻请联系我们：0919-2861222</h4>
        </div>
        <hr>
        <!-- 页尾第二部分 -->
        <div class="second"> 
            <div class="footer2">
                <div>
                    <div> 
                    <div class="about">
                    <p>关于我们</p>
                        <ul>
                            <li>
                                <router-link :to="'aboutUs'">园区规划</router-link>
                            </li>
                            <li>
                                <router-link :to="'aboutUs'">基本区情</router-link>
                            </li>
                            <li>
                                <router-link :to="'aboutUs'">区位交通</router-link>
                            </li>
                        
                        </ul>
                    </div>
                    <div class="policys">
                        <p>扶持政策</p>
                        <ul>
                                <li>
                                    <router-link :to="'policy'">产业优惠</router-link>
                                </li>
                                <li>
                                    <router-link :to="'policy'">资金扶持</router-link>
                                </li>
                                <li>
                                    <router-link :to="'policy'">招商扶持</router-link>
                                </li>
                            
                            </ul>
                        </div>
                        <div  >
                            <p><router-link :to="'company'"> 入驻企业介绍</router-link></p>
                        </div>
                        <div  >
                           <p><router-link :to="'garden'">入园指南</router-link></p>
                        </div>
                </div>
                </div>
            </div>
        <div class="last" >
            <!-- 竖线 -->
            <div class="line"></div>
            <!-- 页尾最右边 -->
            <div class="footer_last">
                 <p>联系我们</p>
                 <ul>
                     <li>
                         <img src="../../assets/image/footer/phone.png" alt="">
                         <span>0919-2861222</span>
                     </li>
                     <li>
                         <img src="../../assets/image/footer/address.png" alt="">
                         <span>地址:铜川市耀州区锦阳新城</span>
                     </li>
                     <li>
                         <img src="../../assets/image/footer/e-mail.png" alt="">
                         <span>bd@centurywealth.vip</span>
                     </li>
                 </ul>
            </div>
        </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'footers'
}
</script>
<style  scoped>
    /* 第一部分 */
    .footer1{
        display: flex;
        width: 80%;
        margin: 0 auto;
    }
    .footer1>h4{
        margin-right:2%;
        font-weight:bold;
    }
    h4{
        color:cornflowerblue;
        margin-bottom: 10px;
        margin-top: 10px;
        margin-right: 5px;
        font-size: 20px;
    }
    hr{
        width:30%;
        margin-left:10%;   
    }
    /* 第二部分 */
    .second{
        display: flex;
        height: 200px;
        background: #4F8DFE;
        align-items: center;
        font-family: "Microsoft YaHei";
    }
    .footer2{
        width:70%; 
        margin-left: 3%;
    }
    
    .footer2>div>div{
      margin:0 auto ;
      display: flex;
    }
    .footer2 div div div{
        width:24%;
    }
    .footer2 p{
        color: whitesmoke;     
        text-align: center;      
    }
    .footer2 div ul,.last div ul{
        padding: 0;
    }
    .footer2 div ul li{
        list-style: none;
        text-align: center;
    }
    .footer2 div ul li a,.footer2 div  p a {
        text-decoration: none;
        color:white;
    }
    /* 最后一部分 */
    .last{
        display: flex;
    }
    .line{
        border-right:2px solid #dddddd;
        height: 180px;

    }
    .last{
        width:30%
    }
    .last p{
        color:whitesmoke; 
        margin-left:5%;
    }
    .footer_last{
        width:98%;
        padding-top:26px;
    }
     .last div ul li{
         list-style-type: none;
     }
     .last div ul li span{
         color:#dddddd;
         margin-left:2%;
     }
     .footer_last ul li{
         display: flex;
         margin-bottom: 2px;
     }
     .footer_last img{
        margin-bottom: 5px;
        margin-left:5%;
        width:20px;
        height: 20px;
     }
</style>
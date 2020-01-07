<template>
        <div>
           
            <div class="bg ">
               <img src="../../assets/image/company/companys.jpg"  class="img-fluid" alt="">
            </div>
            <div class="company">
                <div class="d-flex justify-content-around">
                    <p>总数量达到10000+</p>
                    <p>园区总产值100亿</p>
                </div>
                <div class="d-flex justify-content-around">
                     <p>入驻企业</p>
                    <p>2017年-至今</p>
                </div>  
            </div>
            <div class="companys">
                
                    <p>一部分<span>入驻企业一</span></p>
                    <p>Field Office Enterprises</p>
                 
                 <div class="d-flex bd-highlight mobei  ">
                    <div class="p-4    bd-highlight">
                         <router-link :to="'company1'" >
                            <img src="../../assets/image/company/company1.png" class="img-fluid" alt="">
                        </router-link>
                    </div>
                    <div class="p-4 bd-highlight flex-grow-1">
                        <router-link :to="'company1'" >
                            <h5>陕西摩贝网供应链管理有限公司</h5>
                           
                        </router-link>
                    </div>
                </div>
                <div class="d-flex bd-highlight mobei">
                    <div class="p-4    bd-highlight">
                         <router-link :to="'company1'" >
                            <img src="../../assets/image/company/company2.png" class="img-fluid" alt="">
                         </router-link>
                    </div>
                    <div class="p-4 bd-highlight flex-grow-1">
                         <router-link :to="'company1'" >
                            <h5>山东海科化工集团</h5>
                          </router-link>
                    </div>
                </div>
                <div class="d-flex bd-highlight mobei">
                    <div class="p-4    bd-highlight">
                         <router-link :to="'company1'" >
                            <img src="../../assets/image/company/company3.png" class="img-fluid" alt="">
                         </router-link>
                    </div>
                    <div class="p-4 bd-highlight flex-grow-1"> 
                        <router-link :to="'company1'" >
                            <h5>山东信敏惠集团</h5>
                         </router-link>
                    </div>
                </div>
                <div class="d-flex bd-highlight mobei">
                    <div class="p-4    bd-highlight">
                         <router-link :to="'company1'" >
                             <img src="../../assets/image/company/company4.gif" class="img-fluid" alt="">
                         </router-link>
                    </div>
                    <div class="p-4 bd-highlight flex-grow-1">
                        <router-link :to="'company1'" >
                            <h5>裕华能源集团有限公司</h5>
                         </router-link>
                    </div>
                </div>
                <div class="d-flex bd-highlight mobei">
                    <div class="p-4    bd-highlight">
                         <router-link :to="'company1'" >
                            <img src="../../assets/image/company/company5.png" class="img-fluid" alt="">
                         </router-link>
                    </div>
                    <div class="p-4 bd-highlight flex-grow-1">
                        <router-link :to="'company1'" >
                            <h5>
                                每日优鲜
                            </h5>
                        </router-link>
                    </div>
                </div>
                <div class="d-flex bd-highlight mobei">
                    <div class="p-4    bd-highlight">
                         <router-link :to="'company1'" >
                            <img src="../../assets/image/company/company6.png" class="img-fluid" alt="">
                         </router-link>
                    </div>
                    <div class="p-4 bd-highlight flex-grow-1">
                        <router-link :to="'company1'" >
                            <h5>
                                找罐罐
                            </h5>
                        </router-link>
                    </div>
                </div>
                <div class="d-flex bd-highlight mobei">
                    <div class="p-4    bd-highlight">
                         <router-link :to="'company1'" >
                            <img src="../../assets/image/company/company7.png" class="img-fluid" alt="">
                         </router-link>
                    </div>
                    <div class="p-4 bd-highlight flex-grow-1">
                        <router-link :to="'company1'" >
                            <h5>
                                陕西创客互联网络科技有限公司
                            </h5>
                        </router-link>
                    </div>
                </div>
                <div class="d-flex bd-highlight mobei">
                    <div class="p-4    bd-highlight">
                         <router-link :to="'company1'" >
                            <img src="../../assets/image/company/company8.png" class="img-fluid" alt="">
                         </router-link>
                    </div>
                    <div class="p-4 bd-highlight flex-grow-1">
                        <router-link :to="'company1'" >
                            <h5>
                                陕西原池新能源科技有限公司
                            </h5>
                        </router-link>
                    </div>
                </div>
                <div class="d-flex bd-highlight mobei">
                    <div class="p-4    bd-highlight">
                         <router-link :to="'company1'" >
                            <img src="../../assets/image/company/company9.png" class="img-fluid" alt="">
                         </router-link>
                    </div>
                    <div class="p-4 bd-highlight flex-grow-1">
                        <router-link :to="'company1'" >
                            <h5>
                                陕西精化快车生物科技有限公司
                            </h5>
                        </router-link>
                    </div>
                </div>
                <div class="d-flex bd-highlight mobei">
                    <div class="p-4    bd-highlight">
                         <router-link :to="'company1'" >
                            <img src="../../assets/image/company/company10.png" class="img-fluid" alt="">
                         </router-link>
                    </div>
                    <div class="p-4 bd-highlight flex-grow-1">
                        <router-link :to="'company1'" >
                            <h5>
                                澳隆供应链（陕西）有限公司
                            </h5>
                        </router-link>
                    </div>
                </div>
               
            </div>
             <carousels></carousels>
        </div>
    </template>
    <script>
    import carousels from '../carousel/carousels'
    export default {
        name:'company',
        components:{carousels},
         mounted () {
        this.$router.afterEach(( ) => {
            window.scrollTo(0, 0)
    })
    }
    }
    </script>
    <style scoped>
     .company img{
            border:1px solid transparent;
            border-radius:5%;
        }
    .company{
        width:62%;
        margin:0 auto;
        padding-top: 50px;   
        }
         .company div{
            margin-top: 20px;
            margin-right:18px ;
            
           
         }
         .company div p{
           width: 100%;
           text-align: center;
           font-size: 20px;
           font-weight: bold;
           color:cornflowerblue;
           
          
         }
        .companys  {
            margin:0 auto;
            width: 100%;
        }
        .companys>p{
            width:100%;
            text-align: center;
            font-size:20px;
            font-weight: bold;
        }
        .companys p {
            color:cornflowerblue;
           
        }
        
        .companys :nth-child(2){
            color:cornflowerblue;
              margin-right: 100px;
            
        }
        .mobei{
            padding-left:15%;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #F4F4F4;
            width: 60%;
            margin:15px auto;
            border-radius: 20px;
        }
        .mobei div{
            width:25%;
        }
        .mobei img{
            border-radius: 10px;
        }
        .mobei h5{
             font-size:16px;
              font-weight: bold;
              color: cornflowerblue;
        }
        
        .mobei  a{
            text-decoration: none;
        }
       
        
     
        
    </style>
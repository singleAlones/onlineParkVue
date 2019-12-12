<template>
        <div>
           
            <div class="bg ">
               <img src="../../assets/image/company/companys.jpg"  class="img-fluid" alt="">
            </div>
            <div class="company">
                <div class="d-flex justify-content-around">
                    <p>总数量达到10000</p>
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
                            <img src="../../assets/image/company/mobei.jpg" class="img-fluid" alt="">
                        </router-link>
                    </div>
                    <div class="p-4 bd-highlight flex-grow-1">
                        <router-link :to="'company1'" >
                            <h5>陕西摩贝生物科技有限公司</h5>
                            <p>
                                致力于打造集化合物数据枢纽、化学品现货交易、支付结算、供应链
                                金融、专业物流和仓储、专业化学品进出口服务为一体的产业生态体
                                系，使全球化学品交易变得透明、简单、高效。
                            </p>
                        </router-link>
                    </div>
                </div>
                <div class="d-flex bd-highlight mobei">
                    <div class="p-4    bd-highlight">
                         <router-link :to="'company1'" >
                            <img src="../../assets/image/company/jinghuakuaiche.jpg" class="img-fluid" alt="">
                         </router-link>
                    </div>
                    <div class="p-4 bd-highlight flex-grow-1">
                         <router-link :to="'company1'" >
                            <h5>陕西精化快车生物科技有限公司</h5>
                            <p>精化快车(Chemhigh)平台是全球首家精细化学品产业化赋能服务平台，由多位精细化工行业资深人士联合多家大型公司共同发起成立，针对精细化工行业的痛点和发展趋势，以互联网大数据作为核心</p>
                         </router-link>
                    </div>
                </div>
                <div class="d-flex bd-highlight mobei">
                    <div class="p-4    bd-highlight">
                         <router-link :to="'company1'" >
                            <img src="../../assets/image/company/huichuang.jpg" class="img-fluid" alt="">
                         </router-link>
                    </div>
                    <div class="p-4 bd-highlight flex-grow-1"> 
                        <router-link :to="'company1'" >
                            <h5>陕西惠创供应链管理有限公司</h5>
                            <p>为山东惠创新材料有限公司旗下从事供应链管理的平台型服务公司，2018年注册成立于陕西铜川大数据园区，是以“智慧化工供应链” 为商业模式的平台服务型公司。</p>
                        </router-link>
                    </div>
                </div>
                <div class="d-flex bd-highlight mobei">
                    <div class="p-4    bd-highlight">
                         <router-link :to="'company1'" >
                             <img src="../../assets/image/company/dashujuxueyuan.jpg" class="img-fluid" alt="">
                         </router-link>
                    </div>
                    <div class="p-4 bd-highlight flex-grow-1">
                        <router-link :to="'company1'" >
                            <h5>陕西翰海睿智大数据科技有限公司</h5>
                            <p>
                                公司负责将全球大数据顶级公司Cloudera 的技术优势、项目资源、行业资源以及其他大数据技术领先公司，联手国内高校在大数据领域校企合作、产教融合，为铜川打造一个高效共赢的大数据人才培养生态环境，为地方经济发展提供持续人才支撑与科技支撑。
                            </p>
                         </router-link>
                    </div>
                </div>
                <div class="d-flex bd-highlight mobei">
                    <div class="p-4    bd-highlight">
                         <router-link :to="'company1'" >
                            <img src="../../assets/image/company/zhaoguanche.jpg" class="img-fluid" alt="">
                         </router-link>
                    </div>
                    <div class="p-4 bd-highlight flex-grow-1">
                        <router-link :to="'company1'" >
                            <h5>
                                陕西罐罐新能源科技有限公司
                            </h5>
                            <p>
                                找罐车是一家专注在化工品领域的智慧物流平台，中国目前是全球最大的原油进口国，2017年化工工业总产值达到16.2万亿，其中大部分产品都是通过罐车来运输，物流市场规模在4000亿元人民币。
                            </p>
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
     .company    img{
            border:1px solid transparent;
            border-radius:5%;
        }
        .company{
            width:80%;
            margin:0 auto;
            padding-top: 50px;
            
         
        }
         .company div{
            margin-top: 20px;
             margin-right: 20px ;
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
            font-size:24px;
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
        }
        .mobei div{
            width:25%;
        }
        .mobei p{
            font-size:16px;
            color:black !important;
        }
        .mobei  a{
            text-decoration: none;
        }
       
        
     
        
    </style>
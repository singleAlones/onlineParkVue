<template>
    <div class="container">
        <div class="m-5 p_information d-flex justify-content-center">部分企业介绍</div>
         <div class="mb-4">
                 <router-link  class="btn btn-primary" role="button" :to="'company'">返回</router-link>
            </div>
        <div class="content">
             
            <h5>陕西摩贝生物科技有限公司</h5>
            <p>致力于打造集化合物数据枢纽、化学品现货交易、支付结算、供应链
                 金融、专业物流和仓储、专业化学品进出口服务为一体的产业生态体
                 系，使全球化学品交易变得透明、简单、高效。
            </p>
            <h5>陕西精化快车生物科技有限公司</h5>
            <p>精化快车(Chemhigh)平台是全球首家精细化学品产业化赋能服务平台，由多位精细化工行业资深人士联合多家大型公司共同发起成立，针对精细化工行业的痛点和发展趋势，以互联网大数据作为核心</p>
            <h5>陕西惠创供应链管理有限公司</h5>
             <p>为山东惠创新材料有限公司旗下从事供应链管理的平台型服务公司，2018年注册成立于陕西铜川大数据园区，是以“智慧化工供应链” 为商业模式的平台服务型公司。</p>
            <h5>陕西翰海睿智大数据科技有限公司</h5>
              <p>
                  公司负责将全球大数据顶级公司Cloudera 的技术优势、项目资源、行业资源以及其他大数据技术领先公司，联手国内高校在大数据领域校企合作、产教融合，为铜川打造一个高效共赢的大数据人才培养生态环境，为地方经济发展提供持续人才支撑与科技支撑。
                 </p>
            <h5>  陕西罐罐新能源科技有限公司</h5>
                <p>
                    找罐车是一家专注在化工品领域的智慧物流平台，中国目前是全球最大的原油进口国，2017年化工工业总产值达到16.2万亿，其中大部分产品都是通过罐车来运输，物流市场规模在4000亿元人民币。
                </p>
            
        </div>
        <carousels></carousels>
    </div>
</template>
<script>
 import carousels from '../carousel/carousels'
export default {
     name:'company1',
     components:{carousels},
     
 
}
</script>
<style scoped>
    .p_information{
         color:cornflowerblue;
         font-size: 30px;
         font-weight: bold;
     }
     .btn a{
         text-decoration: none;
         color:white;
     }
     .content{
         margin-top:5px;
     }
     .content h5{
         color:cornflowerblue;
         font-weight: bold;
     }
     .content>p{
         text-indent: 2em;
     }
     @media (max-width:768px) {  
        .content h5{
            font-size:14px;
        }
         .content p{
            font-size:12px;
         }
         .content a{
             font-size: 12px;
         }
         .p_information{
            font-size: 20px;
        }
    }
</style>
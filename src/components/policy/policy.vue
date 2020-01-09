<template>
    <div>
        <div >
            <div class="policy7 container-fluid p-0"> <img src="../../assets/image/policy/policy7.jpg" class="img-fluid" alt=""></div>
            <div class="m-5 p_information d-flex justify-content-center">——政策洼地——</div>
            <div class="p_content container">
                    <div class="media position-relative">
                            <img src="../../assets/image/policy/policy1.jpg" class="mr-3" alt="">
                            <div class="media-body">
                              <h5 class="mt-0">产业优惠政策</h5>
                              <p>1.阶梯型税收地方留成部分产业奖励政策</p>
                              <p>2.对高管、特殊人才实行个人所得税区级留成部分人才奖励政策</p>
                              <router-link :to="'policy1'">详情...</router-link>
                            </div>
                    </div>
                    <div class="media position-relative">
                            <img src="../../assets/image/policy/policy2.jpg" class="mr-3" alt="">
                            <div class="media-body">
                              <h5 class="mt-0">公共服务优惠政策</h5>
                              <p>3.入驻园区的企业享有办公场所租金补贴</p>
                              <p>4.入驻园区的企业聘用的本科以上学历的人才有住房补贴</p>
                              <router-link :to="'policy1'">详情...</router-link>
                            </div>
                    </div>
                    <div class="media position-relative">
                            <img src="../../assets/image/policy/policy3.jpg" class="mr-3" alt="">
                            <div class="media-body">
                              <h5 class="mt-0">科技人才激励政策</h5>
                              <p>5.鼓励入驻园区的企业引进高科技人才，取得成果者予以丰厚的奖励</p>
                              <p>6.支持科技成果转化</p>
                              <router-link :to="'policy1'">详情...</router-link>
                            </div>
                    </div>
                    <div class="media position-relative">
                            <img src="../../assets/image/policy/policy4.jpg" class="mr-3" alt="">
                            <div class="media-body">
                              <h5 class="mt-0">资金扶持政策(可叠加享受)</h5>
                              <p>7.对入驻园区在泸深两市主板、中小板及创业板上市的予以奖励,并且对获得私募股权及创业投资机构的园区企业予以奖励</p>
                              <p>8.鼓励入驻园区企业引入其他实体企业并予以奖励，对通过金融机构借款的项目予以一定数额的贴息</p>
                              <router-link :to="'policy1'">详情...</router-link>
                            </div>
                    </div>
                    <div class="media position-relative">
                            <img src="../../assets/image/policy/policy5.jpg" class="mr-3" alt="">
                            <div class="media-body">
                              <h5 class="mt-0">招商扶持政策</h5>
                              <p>大数据产业园采取以商招商、委托招商等模式，通过招商入驻园区，连续运营3个月予以奖励</p>                         
                              <router-link :to="'policy1'">详情...</router-link>
                            </div>
                    </div>
                    <div class="media position-relative">
                            <img src="../../assets/image/policy/policy6.jpg" class="mr-3 img-fluid" alt="">
                            <div class="media-body">
                              <h5 class="mt-0">实施叠加扶持政策</h5>
                              <p>11.《耀州区关于尽快商贸服务业发展的实施意见》与本优惠政策可以叠加享受</p>
                              <p>优惠政策的实施范围为在耀州区注册纳税并入驻大数据产业园的企业</p>
                              <router-link :to="'policy1'">详情...</router-link>
                            </div>
                    </div>
            </div>
        </div>
    </div>
</template>
<script>
 
export default {
    name:'policy',
     mounted () {
        this.$router.afterEach(( ) => {
            window.scrollTo(0, 0)
    })
    }
}
</script>
<style scoped>
     .p_information{
         color:cornflowerblue;
         font-size: 30px;
         font-weight: bold;
     }
    .p_content img{
        
        margin:10px;
        border-radius: 10px;
        
    }
     
    .p_content div{
        margin:10px;
    }
    .p_content h5{
        color: cornflowerblue;
        font-weight: bold;
        font-size: 18px;
    }
   .p_content p{
     font-size: 14px;
   }
    
</style>
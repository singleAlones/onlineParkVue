<template>
    <div class="container">
        <div class="m-5 p_information d-flex justify-content-center">扶持政策</div>
        <button type="button" class="btn btn-primary"><router-link :to="'policy'">返回</router-link></button>
        <div class="content">
            <p>
                耀州区大数据产业园是贯彻落实十九大精神、落实"五新"战略决策、发展"三个经济"的重要部署，是
                推进耀州区经济结构转型的重大工程。为了支持落户产业园企业发展壮大，结合《耀州区关于加快商贸服务
                业发展的实施意见》（铜耀子[2017]84号）和《耀州区关于加强财源建设的意见》（铜耀政发[2016]10号），
                现就促进大数据产业园入园企业发展提出以下优惠政策:
            </p>
            <h5>产业优惠政策</h5>
            <p>1.在耀州区注册并纳税的大数据企业，根据纳税情况实施阶梯型税收地方留成部分产业奖励政策。企业前三年
                上缴税收区级留成部分（不含个人所得税区级留成部分）予以全额产业奖励，第四、第五年按区级留成部分的
                85%予以产业奖励。奖励资金逐月兑现。
            </p>
            <p>
                2.在耀州区注册并纳税的大数据企业聘用的高管、特殊人才，实行个人所得税区级留成部分人才奖励政策。个人所得税
                五年内区级留成部分全额奖励。
            </p>
            <h5>公共服务优惠政策</h5>
            <p>3.在耀州区注册并纳税的大数据企业，第一、二年入园办公场所租金全部补贴、第三、第四、五年办公场所
                租金补贴50%。采取先交后补的办法，每半年兑现一次。
            </p>
            <p>
                4.在耀州区注册并纳税的大数据企业聘用的缴纳社保的全日制大学本科（含本科）以上学历毕业生，与企业签订
                劳动合同后，每月给予500元的住房补贴。补贴期限为5年。
            </p>
            <h5>科技人才激励政策</h5>
            <p>
                5.鼓励入驻耀州区大数据产业园的大数据企业引进高科技人才。对取得省重大科技成果转化的科技创业人才，给予20
                万元一次性奖励。对获得省级及以上重大科技成果转化的科技创业团队，给予一次性奖励50万元。
            </p>
            <p>
                6.支持科技成果转化。对获得省级重大科技成果转化项目的企业，给予一次性奖励50万元
            </p>
            <h5>资金扶持政策</h5>
            <p>7.在耀州区注册并纳税的大数据企业在泸深两市主板、中小板上市的经历企业100万元，在创业板上市的奖励企业50万</p>
            <p>8.对获得私募股权投资、创业投资机构投资的园区内企业，按照年度实际到位投资额的5%，给予不超过50万元的奖励</p>
            <p>9.鼓励企业主动引入其上下游实体企业集聚发展，每吸引一家具有独立法人资格的实体企业落户，且达到规上企业要求
                的落地项目，给予入园大数据企业和实体企业各50万元奖励政策
            </p>
            <p>10.对通过金融机构借款筹集资金的项目，根据项目贷款实际发生额和同期金融贷款基准利率给予30%，贴息期限最多
                不超过两年，单个项目的贴息额度不超过100万元。
            </p>
            <p>上述资金扶持政策课叠加享受</p>
            <h5>招商扶持政策</h5>
            <p>耀州区大数据产业园采取以商招商、委托招商等模式，企业通过招商入驻大数据产业园，达到线上企业要求，连续3个月
            运营正常，一次性奖励招商企业或个人20万元。
            </p>
            <p>大数据企业、创新创业企业、电商企业招商引进由区经贸局进行认定。入驻大数据产业园的必要条件为在耀州区设立结算中心。</p>
            <h5>
                实施叠加扶持政策
            </h5>
            <p>11.《耀州区关于加快商贸服务业发展的实施意见》（铜耀字[2017]84号）与本优惠政策可以叠加享受。</p>
            <p>优惠持政策的实施范围为在耀州区注册纳税并入驻大数据产业园的大数据企业。优惠扶持政策的兑现实行申报制，
                由企业向区经贸局提出申请，区经贸局组织税务、财政、人社等相关部门审核认定后，予以兑现奖励，奖励资金由
                区财政列支。
            </p>
            <p>该优惠扶持政策从2018年执行，有效期5年（2018-2022年）</p>
        </div>
    </div>
</template>
<script>
export default {
    
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
         font-size: 20px;
     }
     .content>p{
         text-indent: 2em;
         font-size: 14px
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
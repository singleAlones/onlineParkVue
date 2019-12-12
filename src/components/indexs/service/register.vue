<template>
    <div class="container  ">
           <img src="../../../assets/image/index/service.jpg"  class="img-fluid" alt="">
            <h4  class="d-flex justify-content-center mt-4 mb-2" >工商服务</h4>
            <p class="d-flex justify-content-center mt-2 mb-4">咨询请拨打  0919-2861222</p>
             <div class="mb-4">
                 <router-link  class="btn btn-primary" role="button" :to="'indexs'">返回</router-link>
            </div>
            
                 
           
           <div  class="mb-5">
                <h4 class="mt-4 mb-4">公司注册流程</h4>
                <img src="../../../assets/image/index/service1.jpg"  class="img-fluid" alt="">
             </div>



           <div class="accordion" id="accordionExample">
                  <h4 class="mt-4 mb-4">注册知识了解</h4>
                <div class="card">
                    <div class="card-header" id="headingOne">
                    <h2 class="mb-0">
                        <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                           个人独资企业  
                        </button>
                    </h2>
                    </div>

                    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                    <div class="card-body">
                        <p>个人独资企业概念</p>
                              <p class="text"> 独资企业是指一人投资经营的企业，一般都是退休或者下岗的人士注册此类企业居多。</p> 
                               <p  class="text"> 
                                    企业负责人是投资者本人。企业负责人姓名须与身份证相符，不得使用别名。按照我国现行税法有关规定，私营独资企业取得的生产经营所得和其他所得，
                                   应按规定缴纳个人所得税。 他和有限责任最大的区别在于没有企业所得税，只有个人生产经营所得，也就是个税。    
                              </p>         
                              
                    </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header" id="headingTwo">
                    <h2 class="mb-0">
                        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            个人独资企业  和个体工商的区别
                        </button>
                    </h2>
                    </div>
                    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                        <div class="card-body">
                              <p class="text">1、个人独资企业必须要有固定的生产经营场所和合法的企业名称，而个体工商户可以不起字号名称，
                                  也可以没有固定的生产经营场所而流动经营。换句话说，合法的企业名称和固定的生产经营场所是个人独资企业的成立要件，但不是个体工商户的成立要件。</p>
                              <p class="text"> 2、个体工商户的投资者与经营者是同一人，都必须是投资设立个体工商户的自然人。而个人独资企业的投资者与经营者可以是不同的人，投资人
                                  可以委托或聘用他人管理个人独资企业事务。</p> 
                               <p  class="text"> 
                                  3、个人独资企业可以设立分支机构，也可以委派他人作为个人独资企业分支机构负责人。而个体工商户根据规定不能设立分支机构。由此可以看出，个人独资企业的总体规模一般大于个体工商户。  
                              </p>
                              <p  class="text">
                                  4、个人独资企业与个体工商户的法律地位不尽相同。在民事、行政、经济法律制度中个人独资企业是其他组织或其它经济组织的一种形式，能以企业自身的名义进行法律活动。而个体工商户是否能够
                                  作为其它组织或其它经济组织的一种形式，一直是国内民法学家的争论对象。在日常法律活动中，个体工商户的法律行为能力往往受到一定的限制，更多的时候，个体工商户是以公民个人名义进行法律活动的。
                              </p>
                              <p  class="text">
                                  5、个人独资企业与个体工商户在财务制度和税收政策上的要求也不尽相同，个人独资企业的财务制度是个人独资企业的必备条件，不以任何部门的要求而改变。而个体工商户由于情况复杂，是否要建立会计
                                  制度争论较多，在即将实施的新《会计法》中也只作了原则规定。
                                </p>              
                        </div>
                    </div>
                </div>
           </div>

</div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
      .container h4{
        color:cornflowerblue;
        font-weight: bold;
    }
     .text{
         text-indent: 2em;
     }
</style>
<template>
  <div id="carouselExampleIndicators" class="carousel slide container" data-ride="carousel">

  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="../../assets/image/company/company2.jpg" class="d-block w-100 img-fluid" alt="">
    </div>
    <div class="carousel-item">
      <img src="../../assets/image/company/company3.jpg" class="d-block w-100 img-fluid" alt="">
    </div>
    <div class="carousel-item">
      <img src="../../assets/image/company/company4.jpg" class="d-block w-100 img-fluid" alt="">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
</template>
<script>
export default {
     name:'carousels'
}
</script>
<style scoped>
     .carousel{
       width: 60% !important;
       padding: 0px !important;    
     }
     .carousel-item img{
        border-radius: 15px !important;
     }
    
</style>
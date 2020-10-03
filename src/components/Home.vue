<template>
<div>
<div class="container-fluid" style="background-color:#caeaf1">
<div class="row">
<div class="col-lg-6 pt-5">
<div class=" text-left pt-5 pl-5">
<p class="h1 text-uppercase">How our products</p>

<p class="h1 ">save you</p>
<p class="">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
<br>
<a class="btn btn-info ml-auto" style="border-radius: 30px;">Learn</a>
</div>

</div>
<div class="col-lg-6 text-left bg-art">
<img src="@/assets/mask.png" style=" transform: rotate(325deg); width:60%; padding-top: 120px;">
</div>
</div>
</div>
<Certificate/>
<Info/>
<Testimonial/>
</div>
</template>

<script>
import Certificate from '@/components/certificate';
import Testimonial from '@/components/testimonial';
import Info from '@/components/infograph';
export default{
components: {
Certificate,
Testimonial,
Info
}
}
</script>
<style>
.bg-art{
  background-image: url("~@/assets/bgart.png");
  background-size:cover;
  background-position:top;
  background-repeat:no-repeat;
height: 500px;
}
</style>

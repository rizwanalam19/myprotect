<template>
<div>
  <br><br>
  <div class="container">
      <h3 class="font-weight-bold mb-5">Billing Details</h3>
    <div class="row">
      <div class="col-lg-8 z-depth-1 mx-auto">
  <div class="tab-pane fade in show active" id="tabCheckoutBilling123" role="tabpanel">

                 <!--Card content-->
                 <form class="p-3">

                   <!--Grid row-->
                   <div class="row">

                     <!--Grid column-->
                     <div class="col-md-6 mb-4">

                       <!--firstName-->
                       <label for="firstName" class="">First name</label>
                       <input type="text" id="firstName" class="form-control">

                     </div>
                     <!--Grid column-->

                     <!--Grid column-->
                     <div class="col-md-6 mb-2">

                       <!--lastName-->
                       <label for="lastName" class="">Last name</label>
                       <input type="text" id="lastName" class="form-control">

                     </div>
                     <!--Grid column-->

                   </div>
                   <!--Grid row-->



                   <!--email-->
                   <label for="email" class="">Email (optional)</label>
                   <input type="text" id="email" class="form-control mb-4" placeholder="youremail@example.com">

                   <!--address-->
                   <label for="address" class="">Address</label>
                   <input type="text" id="address" class="form-control mb-4" placeholder="1234 Main St">

                   <!--address-2-->
                   <label for="address-2" class="">Address 2 (optional)</label>
                   <input type="text" id="address-2" class="form-control mb-4" placeholder="Apartment or suite">



                   <hr>






<div class="text-left">
                   <div class="mb-1">
                     <input type="checkbox" class="form-check-input filled-in" id="chekboxRules">
                     <label class="form-check-label" for="chekboxRules">I accept the terms and conditions</label>
                   </div>
                   <div class="mb-1">
                     <input type="checkbox" class="form-check-input filled-in" id="safeTheInfo">
                     <label class="form-check-label" for="safeTheInfo">Save this information for next time</label>
                   </div>
                   <div class="mb-1">
                     <input type="checkbox" class="form-check-input filled-in" id="subscribeNewsletter">
                     <label class="form-check-label" for="subscribeNewsletter">Subscribe to the newsletter</label>
                   </div>
                 </div>

                   <hr>
  <router-link to="/checkout">
                   <button class="btn btn-primary btn-lg btn-block" type="submit">Next</button>
  </router-link>
                 </form>

               </div>


</div>



</div>

</div>

</div>
</template>

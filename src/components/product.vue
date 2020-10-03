<template>
<div>
  <br>
    <h3 class="font-weight-bold  mt-5">Product Details</h3>
  <div class="container my-5 py-5 z-depth-1">

<div class="row">
<div class="col-lg-6 bg-info">
  <div class="">
          <img src="@/assets/mask.png">
  </div>
 </div>
<div class="col-lg-6 text-center text-md-left">
  <h2 class="h2-responsive text-center text-md-left product-name font-weight-bold dark-grey-text mb-1 ml-xl-0 ml-4">
    <strong>N95 MASK</strong>
  </h2>
  <span class="badge badge-danger product mb-4 ml-xl-0 ml-4">bestseller</span>
  <h3 class="h3-responsive text-center text-md-left mb-5 ml-xl-0 ml-4">
    <span class="red-text font-weight-bold">
      <strong>Rs 249</strong>
    </span>
    <br>
    <span class="grey-text">
      <small>
        <s>Rs 349</s>
      </small>
    </span>
  </h3>


  <!-- Add to Cart -->
  <section class="color pl-5">
    <div class="mt-5">
      <p class="grey-text">Choose your color</p>
      <div class="row text-center text-md-left">

        <div class="col-md-3 col-12">
          <!--Radio group-->
          <div class="form-group">
            <input class="form-check-input" name="group100" type="radio" id="radio100" checked="checked">
            <label for="radio100" class="form-check-label dark-grey-text">Blue</label>
          </div>
        </div>
        <div class="col-md-3">
          <!--Radio group-->
          <div class="form-group">
            <input class="form-check-input" name="group100" type="radio" id="radio101">
            <label for="radio101" class="form-check-label dark-grey-text">Orange</label>
          </div>
        </div>
        <div class="col-md-3">
          <!--Radio group-->
          <div class="form-group">
            <input class="form-check-input" name="group100" type="radio" id="radio102">
            <label for="radio102" class="form-check-label dark-grey-text">Red</label>
          </div>
        </div>
        <div class="col-md-3">
          <!--Radio group-->
          <div class="form-group">
            <input class="form-check-input" name="group100" type="radio" id="radio102">
            <label for="radio102" class="form-check-label dark-grey-text">Black</label>
          </div>
        </div>
      </div>
<a href="" class="h6 font-weight-lighter">55 User Reviews</a>

      <div class="row mt-3 text-center">
        <div class="col-lg-6 text-center">
            <router-link to="/cart">
          <button class="btn btn-primary " style="border-radius: 30px;">
            <i class="fas fa-cart-plus mr-2" aria-hidden="true"></i> Add to cart</button>
          </router-link>
        </div>
        <div class="col-lg-6 text-center">
            <router-link to="/billing">
          <button class="btn btn-primary " style="border-radius: 30px;">
            <i class="fas fa-cart-plus mr-2" aria-hidden="true"></i> Buy Now</button>
              </router-link>
        </div>
      </div>
    </div>
  </section>
  <!-- /.Add to Cart -->
 </div>

</div>
    <!--Section: Content-->
  </div>
</div>
</template>

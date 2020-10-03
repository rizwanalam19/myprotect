<template>
<div>
  <br><br>
  <div class="container my-5 py-5 z-depth-1 mt-5">


    <!--Section: Content-->
    <section class="px-md-5 mx-md-5 text-center text-lg-left dark-grey-text">



      <!--Grid row-->
      <div class="row d-flex justify-content-center">

        <!--Grid column-->
        <div class="col-md-6 text-center">

          <h3 class="font-weight-bold">Contact Us</h3>

          <p class="text-muted">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id quam sapiente
            molestiae.</p>

        </div>
        <!--Grid column-->

      </div>
      <!--Grid row-->

      <!--Grid row-->
      <div class="row">

        <!--Grid column-->
        <div class="col-lg-6 col-md-12 mb-4 mb-md-0">

          <!-- Material outline input -->
          <div class="md-form md-outline mt-3">
            <input type="email" id="form-email" class="form-control">
            <label for="form-email">E-mail</label>
          </div>

          <!-- Material outline input -->
          <div class="md-form md-outline">
            <input type="text" id="form-subject" class="form-control">
            <label for="form-subject">Subject</label>
          </div>

          <!--Material textarea-->
          <div class="md-form md-outline mb-3">
            <textarea id="form-message" class="md-textarea form-control" rows="3"></textarea>
            <label for="form-message">How we can help?</label>
          </div>

          <button type="submit" class="btn btn-info btn-sm ml-0">Submit<i class="far fa-paper-plane ml-2"></i></button>

        </div>
        <!--Grid column-->

        <!--Grid column-->
        <div class="col-lg-6 col-md-12 mb-0 mb-md-0">
            <!--Google map-->
            <div id="map-container-google-1" class="z-depth-1 map-container mb-4">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.8000939191706!2d72.74090031395511!3d21.120534590016934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be052f201ed4421%3A0xf2797c037e17a35e!2sSurat%20International%20Airport%20Gujarat!5e0!3m2!1sen!2sin!4v1601735827243!5m2!1sen!2sin" frameborder="0"
                style="border:0" allowfullscreen></iframe>
            </div>
            <!--Google Maps-->

            <p class="font-weight-bold">Gujarat, India</p>

          </div>
          <!--Grid column-->

      </div>
      <!--Grid row-->


    </section>
    <!--Section: Content-->


  </div>


</div>
</template>
<style>
  .map-container {
    height: 230px;
    position: relative;
  }

  .map-container iframe {
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    position: absolute;
  }
</style>

<template>

  <div class="container  z-depth-1 rounded mt-5 pt-2">
<br>

    <!--Section: Content-->
    <section class="dark-grey-text">

      <!-- Shopping Cart table -->
      <div class="table-responsive">

        <table class="table product-table mb-0">

          <!-- Table head -->
          <thead class="mdb-color lighten-5">
            <tr>
              <th>  <strong>Product</strong></th>
              <th class="font-weight-bold">
                <strong>Product Name</strong>
              </th>
              <th class="font-weight-bold">
                <strong>Color</strong>
              </th>
              <th></th>
              <th class="font-weight-bold">
                <strong>Price</strong>
              </th>
              <th class="font-weight-bold">
                <strong>QTY</strong>
              </th>
              <th class="font-weight-bold">
                <strong>Amount</strong>
              </th>
              <th></th>
            </tr>
          </thead>
          <!-- /.Table head -->

          <!-- Table body -->
          <tbody>

            <!-- First row -->
            <tr>
              <th scope="row">
                <img src="@/assets/mask.png" width="20%">
              </th>
              <td>
                <h5 class="">
                  <strong>N95</strong>
                </h5>

              </td>
              <td>White</td>
              <td></td>
              <td>Rs 800</td>
              <td>
                <input type="number" value="2" aria-label="Search" class="form-control" style="width: 100px">
              </td>
              <td class="font-weight-bold">
                <strong>Rs 800</strong>
              </td>
              <td>
                <button type="button" class="btn btn-sm btn-primary" data-toggle="tooltip" data-placement="top"
                title="Remove item">X
              </button>
            </td>
          </tr>
          <!-- /.First row -->

          <!-- Second row -->
          <tr>
            <th scope="row">
              <img src="@/assets/mask.png" width="20%">              </th>
              <td>
                <h5 class="">
                  <strong>KN95</strong>
                </h5>

              </td>
              <td>Red</td>
              <td></td>
              <td>Rs 200</td>
              <td>
                <input type="number" value="2" aria-label="Search" class="form-control" style="width: 100px">
              </td>
              <td class="font-weight-bold">
                <strong>Rs 600</strong>
              </td>
              <td>
                <button type="button" class="btn btn-sm btn-primary" data-toggle="tooltip" data-placement="top"
                title="Remove item">X
              </button>
            </td>
          </tr>
          <!-- /.Second row -->

          <!-- Third row -->
          <tr>
            <th scope="row">
              <img src="@/assets/mask.png" width="20%">
            </th>
            <td>
              <h5 class="">
                <strong>Venus</strong>
              </h5>

            </td>
            <td>Pink</td>
            <td></td>
            <td>Rs 600</td>
            <td>
              <input type="number" value="2" aria-label="Search" class="form-control" style="width: 100px">
            </td>
            <td class="font-weight-bold">
              <strong>Rs 1200</strong>
            </td>
            <td>
              <button type="button" class="btn btn-sm btn-primary" data-toggle="tooltip" data-placement="top"
              title="Remove item">X
            </button>
          </td>
        </tr>
        <!-- /.Third row -->

        <!-- Fourth row -->
        <tr>
          <td colspan="3"></td>
          <td>
            <h4 class="mt-2">
              <strong>Total</strong>
            </h4>
          </td>
          <td class="text-right">
            <h5 class="mt-2">
              <strong> 2600</strong>
            </h5>
          </td>
          <td colspan="3" class="text-right">
              <router-link to="/billing">
            <button type="button" class="btn btn-primary" style="border-radius: 20px;">Complete purchase
              <i class="fas fa-angle-right right"></i>
            </button>
            </router-link>
          </td>
        </tr>
        <!-- Fourth row -->

      </tbody>
      <!-- /.Table body -->

    </table>

  </div>
  <!-- /.Shopping Cart table -->

</section>
<!--Section: Content-->


</div>


</template>

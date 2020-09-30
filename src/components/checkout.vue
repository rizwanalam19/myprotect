<template>
<div>
  <br><br>
  <h3 class="font-weight-bold">Payment Details</h3>

  <div class="container p-5">
    <div class="row">
      <div class="col-lg-8 z-depth-1 mx-auto">
  <div class=" my-3">
    <div class="row">
    <div class="col-lg-4 mb-2">
      <input name="group2" type="radio" class="form-check-input with-gap" id="radioWithGap" checked
        required>
      <label class="form-check-label" for="radioWithGap4">Credit card</label>
    </div>
    <div class="col-lg-4 mb-2">
      <input iname="group2" type="radio" class="form-check-input with-gap" id="radioWithGap"
        required>
      <label class="form-check-label" for="radioWithGap5">Debit card</label>
    </div>
    <div class="col-lg-4 mb-2">
      <input name="group2" type="radio" class="form-check-input with-gap" id="radioWithGap" required>
      <label class="form-check-label" for="radioWithGap6">Paypal</label>
    </div>
    </div>
  </div>
  <div class="row">
    <div class="col-md-6 mb-3">
      <label for="cc-name123">Name on card</label>
      <input type="text" class="form-control" id="cc-name123" placeholder="" required>
      <small class="text-muted">Full name as displayed on card</small>
      <div class="invalid-feedback">
        Name on card is required
      </div>
    </div>
    <div class="col-md-6 mb-3">
      <label for="cc-number123">Credit card number</label>
      <input type="text" class="form-control" id="cc-number123" placeholder="" required>
      <div class="invalid-feedback">
        Credit card number is required
      </div>
    </div>
  </div>
  <div class="row justify-content-start">
    <div class="col-md-3 mb-3">
      <label for="cc-expiration123">Expiration</label>
      <input type="text" class="form-control" id="cc-expiration123" placeholder="" required>
      <div class="invalid-feedback">
        Expiration date required
      </div>
    </div>
    <div class="col-md-3 mb-3">
      <label for="cc-cvv123">CVV</label>
      <input type="text" class="form-control" id="cc-cvv123" placeholder="" required>
      <div class="invalid-feedback">
        Security code required
      </div>
    </div>

  </div>
  <button class="btn btn-primary btn-lg btn-block" style="border-radius: 30px;" type="submit">Order Confirm</button>
  <br>
</div>

  </div>

</div>
</div>
</template>

<template>
  <div
    class="offcanvas offcanvas-end offcanvas-01"
    id="offcanvasRight"
    tabindex="-1"
    aria-labelledby="offcanvasRightLabel"
  >
    <div class="offcanvas-header">
      <h5 class="text-dark" id="offcanvasRightLabel">Complaint Details</h5>
      <button
        class="btn btn-danger btn-sm"
        type="button"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      >
        <i class="ic-close"></i>
      </button>
    </div>
    <div class="offcanvas-body">
      <div class="flex-center-between">
        <div>
          <h6 class="text-blue mb-8">Madhu Bhattarai</h6>
          <p class="mb-4">bhattaraimadhu215@gmail.com</p>
          <p>9841333569</p>
        </div>
        <div>
          <p class="text-success mb-4">Active</p>
          <button class="btn btn-green">
            <i class="ic-download mr-8"></i>Download File
          </button>
        </div>
      </div>

      <form class="row mt-24" action="">
        <div class="col-md-4">
          <div class="mb-16">
            <label class="form-label">Set Date</label>
            <div class="form-icon trail">
              <input
                class="form-control"
                type="date"
                id="exampleFormControlInput1"
                value="1/27/2022"
                disabled
              /><i class="ic-calendar"></i>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="mb-16">
            <label class="form-label">Reference ID</label>
            <input
              class="form-control"
              type="text"
              id="exampleFormControlInput1"
              value="CZ-QR-1656268364"
              disabled
            />
          </div>
        </div>
        <div class="col-12">
          <div class="mb-16">
            <label class="form-label">Complaint Message</label
            ><textarea
              class="form-control"
              disabled
              placeholder="Good afternoon Madhu,You have been shortlisted for an interview for the position of Junior Python Developer. Following are the meeting details:"
            ></textarea>
          </div>
        </div>
      </form>
    </div>
    <div class="offcanvas-footer">
      <button class="btn btn-red mr-16">
        <i class="ic-close mr-8"></i>Reject
      </button>
      <button class="btn btn-green">
        <i class="ic-checkmark mr-8"></i>Approve
      </button>
    </div>
  </div>
</template>

<script setup></script>

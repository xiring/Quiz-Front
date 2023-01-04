<template>
  <flex-layout>
    <Details />
    <page-header heading="Dashboard" />
    <div class="pt-24 px-24">
      <div class="row">
        <div class="col-md-3">
          <div class="card-dashboard">
            <p class="fw-semibold">Total Complaints</p>
            <h4 class="mt-4">1256</h4>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card-dashboard secondary">
            <p class="fw-semibold">Total Requests</p>
            <h4 class="mt-4">1896</h4>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card-dashboard">
            <p class="fw-semibold">Total Requests</p>
            <h4 class="mt-4">1896</h4>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card-dashboard secondary">
            <p class="fw-semibold">Total Requests</p>
            <h4 class="mt-4">1896</h4>
          </div>
        </div>
      </div>
    </div>
  </flex-layout>
</template>

<script setup>
import FlexLayout from "../components/layout/FlexLayout.vue";
import Details from "../components/Offcanvas/Details.vue";
import PageHeader from "../components/Utility/PageHeader.vue";
</script>

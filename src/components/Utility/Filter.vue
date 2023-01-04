<template>
  <div class="dropdown-01">
    <button
      class="btn btn-outline-gray ms-2"
      id="dropdownMenuButton1"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      <i class="ic-filter"></i>
    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
      <li v-for="item in vehicleList" :key="item.index">
        <a class="dropdown-item" href="#"
          ><i :class="'ic-car ' + item.status"></i>{{ item.vehicle }}</a
        >
      </li>
    </ul>
  </div>
</template>

<script setup></script>

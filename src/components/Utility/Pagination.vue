<template>
  <div class="pagination border-top">
    <div class="pagination-data-count">
      <p>View</p>
      <select class="form-select" aria-label="Default select example">
        <option selected>10</option>
        <option value="1">20</option>
        <option value="2">30</option>
        <option value="3">40</option>
      </select>
      <p>per Page</p>
    </div>
    <div class="pagination-data-page">
      <p>1-10 of 200</p>
      <ul class="list list__inline">
        <li>
          <a href="#" class="ic-chevron-left"></a>
        </li>
        <li class="page">
          <a href="#" class="active"> 1 </a>
        </li>
        <li class="page">
          <a href="#"> 2 </a>
        </li>
        <li class="page">
          <a href="#"> 3 </a>
        </li>
        <li class="page">
          <a href="#"> 4 </a>
        </li>
        <li class="page">
          <a href="#"> ... </a>
        </li>
        <li class="page">
          <a href="#"> 99 </a>
        </li>
        <li>
          <a href="#" class="ic-chevron-right"></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup></script>

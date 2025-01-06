<template>
    <div class="flex border-b py-6">
      <!-- Skeleton untuk Avatar -->
      <div>
        <div
          class="skeleton rounded-full max-h-[60px]"
          :style="{ width: '60px', height: '60px' }"
        ></div>
      </div>
  
      <!-- Skeleton untuk Konten -->
      <div class="pl-3 w-full px-4">
        <!-- Skeleton Header -->
        <div class="flex items-center justify-between pb-0.5">
          <div>
            <div
              class="skeleton"
              :style="{ height: '16px', width: '120px', marginBottom: '4px' }"
            ></div>
            <div
              class="skeleton"
              :style="{ height: '13px', width: '80px' }"
            ></div>
          </div>
          <div
            class="skeleton rounded-md"
            :style="{ height: '30px', width: '80px' }"
          ></div>
        </div>
  
        <!-- Skeleton untuk Deskripsi -->
        <div>
          <div
            class="skeleton"
            :style="{ height: '15px', width: '90%', marginBottom: '8px' }"
          ></div>
          <div
            class="skeleton"
            :style="{ height: '15px', width: '70%' }"
          ></div>
        </div>
  
        <!-- Skeleton untuk Tags -->
        <div
          class="skeleton"
          :style="{ height: '14px', width: '50%', marginBottom: '8px' }"
        ></div>
  
        <!-- Skeleton untuk Footer -->
        <div class="flex items-center">
          <div
            class="skeleton"
            :style="{ height: '14px', width: '140px', marginRight: '8px' }"
          ></div>
          <div
            class="skeleton"
            :style="{ height: '14px', width: '20px' }"
          ></div>
        </div>
  
        <!-- Skeleton untuk Media -->
        <div class="mt-2.5 flex">
          <div
            class="skeleton rounded-xl bg-black"
            :style="{ minHeight: '480px', maxHeight: '580px', maxWidth: '260px', flex: 1 }"
          ></div>
          <div class="relative mr-[75px]">
            <div class="absolute bottom-0 pl-2">
              <!-- Skeleton untuk Tombol -->
              <div v-for="n in 3" :key="n" class="pb-4 text-center">
                <div
                  class="skeleton rounded-full bg-gray-200"
                  :style="{ height: '50px', width: '50px', marginBottom: '4px' }"
                ></div>
                <div
                  class="skeleton"
                  :style="{ height: '10px', width: '30px' }"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      post: {
        type: Object,
        required: true,
      },
    },
  };
  </script>
  
  <style>
  .skeleton {
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200% 100%;
    animation: skeleton-loading 1.5s infinite;
  }
  
  @keyframes skeleton-loading {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
  </style>
  
<script setup>
import { onMounted, ref } from 'vue';
import Loading from './Loading.vue';
import Swal from 'sweetalert2';

import { useCartStore } from '@/stores/useCartStore';
const cartStore = useCartStore();

const props = defineProps(["item"]);

const LoadingValue = ref(true);
const thisValue = ref(1)

function increaseValue() {
  if (thisValue.value < props.item.Max) {
    thisValue.value++;
  }
}
function decreaseValue() {
  if (thisValue.value > 1) {
    thisValue.value--;
  }
}

function AddToCart() {
  const itemData = {
    ID: props.item.ID,
    Title: props.item.Title,
    Image: props.item.Image,
    Price: props.item.Price,
    Max: props.item.Max,
    Value: thisValue.value,
  };
  cartStore.AddCart(itemData);
  console.log(cartStore.CartData);
  Swal.fire({
    title: '加入購物車',
    text: `已加入 ${thisValue.value} 個 ${props.item.Title} 到購物車`,
    icon: 'success',
    confirmButtonText: '繼續購物',
    confirmButtonColor: '#8cb1ed',
  });
}

onMounted(() => {
  // 初始化數量
  if (props.item.Value) {
    thisValue.value = props.item.Value;
  } else {
    thisValue.value = 1;
  }
});
</script>
<template>
  <div class="cursor-pointer text-center w-full flex flex-wrap justify-center items-center">
    <!-- <p class="text-base font-black text-center">{{ props.title }}</p> -->
    <img loading="lazy" :src="props.item.Image" alt="" @load="LoadingValue = false"
      class="w-4/5 max-w-[200px] h-[200px] rounded-lg mx-auto my-2 hover:scale-110 transition-all" />
    <p class="w-full text-center">{{ props.item.Title }}</p>
    <p class="w-full text-center">{{ props.item.Price }} 元</p>
    <div class="w-full mx-auto">
      <div class="w-full">
        <button @click="decreaseValue" class="mx-2">-</button>
        <input type="number" class="text-center" v-model="thisValue" :max="props.item.Max" min="1" />
        <button @click="increaseValue" class="mx-2">+</button>
        <p>目前庫存：{{ props.item.Max }}個</p>
      </div>
      <button class="w-full bg-defaultButton hover:bg-defaultCancel p-2 rounded-lg m-1"
        @click="AddToCart">加入購物車</button>
    </div>
  </div>
  <Loading :Loading="LoadingValue"></Loading>
</template>

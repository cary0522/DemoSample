import { defineStore } from "pinia";
import Swal from "sweetalert2";
import { ref, computed } from "vue";

export const useCartStore = defineStore("CartStore", () => {
  // 購物車清單
  const CartData = ref([]);
  // 計算總金額
  const TotalPrice = computed(() => {
    return CartData.value.reduce((total, item) => {
      return total + (item.Value * item.Price || 0);
    }, 0);
  })

  function IncreaseValue(item) {
    if (item.Value < item.Max) {
      item.Value++;
    }
  }
  function DecreaseValue(item) {
    if (item.Value > 1) {
      item.Value--;
    }
  }


  // 新增商品到購物車，如果已經存在更新數量
  function AddCart(item) {
    const ExistItem = CartData.value.find(cartItem => cartItem.ID == item.ID)
    if (ExistItem) {
      ExistItem.Value += item.Value;
    } else {
      CartData.value.push({
        ID: item.ID,
        Title: item.Title,
        Price: item.Price,
        Value: item.Value,
        Max: item.Max,
        Image: item.Image
      });
    }
  }

  function DeleteCart(id) {
    const index = CartData.value.findIndex((item) => { item.ID == id })
    CartData.value.splice(index, 1)
  }

  // 清空購物車
  function ClearCart() {
    CartData.value = [];
  }

  // 結帳
  function Checkout() {
    if (CartData.value.length === 0) {
      Swal.fire({
        title: '購物車是空的，請先選購商品。',
        confirmButtonText: '確認',
        confirmButtonColor: '#8cb1ed',
      })
      return;
    } else {
      Swal.fire({
        title: `感謝您的購買`,
        text: `總金額為 ${TotalPrice.value} 元`,
        confirmButtonText: '確認',
        confirmButtonColor: '#8cb1ed',
      })
      ClearCart();
    }
  }

  return {
    CartData,
    TotalPrice,
    IncreaseValue,
    DecreaseValue,
    AddCart,
    DeleteCart,
    ClearCart,
    Checkout
  };
}, {
  persist: true
});

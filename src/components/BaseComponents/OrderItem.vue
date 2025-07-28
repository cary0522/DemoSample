<script setup>
import { ref } from 'vue';
import "animate.css"
import CartItem from "@/components/BaseComponents/CartItem.vue";
import Swal from 'sweetalert2';

const props = defineProps(["order"]);
const ShowItems = ref(false);

function PrintOrder() {
    window.print();
}
function CancelOrder() {
    Swal.fire({
        title: '確定要取消訂單嗎？',
        text: "取消後將無法恢復！",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#b9e1ff',
        cancelButtonColor: '#eb98ac',
        cancelButtonText: '取消',
        confirmButtonText: '確認'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                '已取消！',
                '您的訂單已被取消。',
                'success'
            );
            // 這裡可以添加取消訂單的 API 呼叫
        }
    });
}
</script>

<template>
    <div class="printOnly w-4/5 mx-auto mt-4 mb-0 border rounded-lg shadow-sm p-4 flex justify-between items-center">
        訂單編號：{{ props.order.OrderId }}
        {{ props.order.CreatedAt }}
        <div class="flex justify-end ms-auto">
            <v-icon icon="mdi-triangle-down" @click="ShowItems = !ShowItems" v-if="!ShowItems"></v-icon>
            <v-icon icon="mdi-triangle" @click="ShowItems = !ShowItems" v-if="ShowItems"></v-icon>
        </div>
    </div>
    <Transition enter-active-class="animate__animated animate__fadeIn animate__fast" leave-active-class="animate__animated animate__fadeOut animate__fast">
        <div v-if="ShowItems" class="w-4/5 mx-auto mb-4 mt-0 border rounded-lg shadow-sm p-4">
            <div v-for="item in props.order.Items" :key="item.ID">
                <CartItem :item="item" />
            </div>
            <div class="w-[200px] ms-auto me-2">
                <p>訂單金額：{{ props.order.TotalAmount }} 元</p>
                <p>付款方式：{{ props.order.Payment.Method }}</p>
                <p>訂單狀態：{{ props.order.Payment.Status }}</p>
                <button @click="PrintOrder" class="printNone text-defaultColor my-2 mx-1 bg-defaultButton hover:bg-defaultColor hover:text-defaultBg rounded-lg text-xs sm:text-sm min-w-[60px] w-full sm:w-auto px-2 sm:px-5 py-2.5 text-center">列印訂單明細</button>
                <button @click="CancelOrder" class="printNone text-defaultColor my-2 mx-1 bg-defaultButton hover:bg-defaultColor hover:text-defaultBg rounded-lg text-xs sm:text-sm min-w-[60px] w-full sm:w-auto px-2 sm:px-5 py-2.5 text-center">取消訂單</button>
            </div>
        </div>
    </Transition>
</template>
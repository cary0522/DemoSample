<script setup>
import { ref } from 'vue';
import "animate.css"
import CartItem from "@/components/BaseComponents/CartItem.vue";
import Swal from 'sweetalert2';

const props = defineProps(["question"]);
const ShowAnswer = ref(false);

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
    <div class="printOnly w-full mx-auto mt-4 mb-0 border rounded-lg shadow-sm p-4 flex justify-between items-center">
        {{ props.question.question }}
        <div class="flex justify-end ms-auto">
            <v-icon icon="mdi-triangle-down" @click="ShowAnswer = !ShowAnswer" v-if="!ShowAnswer"></v-icon>
            <v-icon icon="mdi-triangle" @click="ShowAnswer = !ShowAnswer" v-if="ShowAnswer"></v-icon>
        </div>
    </div>
    <Transition enter-active-class="animate__animated animate__fadeIn animate__fast"
        leave-active-class="animate__animated animate__fadeOut animate__fast">
        <div v-if="ShowAnswer" class="w-full mx-auto mb-4 mt-0 border rounded-lg shadow-sm p-4">
            <div>
                 {{ props.question.answer }}
            </div>
        </div>
    </Transition>
</template>
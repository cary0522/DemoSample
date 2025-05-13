<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2';
import UserPage from '@/components/MasterPageUser.vue'
import Breadcrumb from "@/components/BaseComponents/Breadcrumb.vue";
import LeftOptions from '@/components/BaseComponents/LeftOptions.vue'
import Search from '@/components/BaseComponents/Search.vue'
import Night from '@/components/ActivityPage/Night.vue'
import PerformanceTeam from '@/components/ActivityPage/PerformanceTeam.vue'
import ScienceJourney from '@/components/ActivityPage/ScienceJourney.vue'
import Registration from '@/components/ActivityPage/Registration.vue'
import Master from '@/components/ActivityPage/Master.vue'
import Workshop from '@/components/ActivityPage/Workshop.vue'

import { useI18n } from "vue-i18n";
const { t, locale } = useI18n();

const router = useRouter()

function SubmitForm() {
    Swal.fire({
        title: t('感謝您的來信！'),
        text: t('我們會儘快回覆您！'),
        icon: 'success',
        confirmButtonText: t('確定')
    })
}

</script>
<template>
    <div class="w-full md:flex flex-wrap justify-start my-4">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7236.569589358758!2d121.2946249!3d24.9223662!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346818f623ac48cb%3A0x88a1795d71fd27af!2z5qGD5ZyS5biC5aSn5rqq5Y2A5YOR5oSb5ZyL5rCR5bCP5a24!5e0!3m2!1szh-TW!2stw!4v1742968422699!5m2!1szh-TW!2stw"
            class="w-4/5 mx-2 max-w-[400px] h-96 max-h-[300px]" style="border:0;" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
        <div class="flex justify-around flex-col text-start m-4 items-start">
            <p>{{ t('桃園市原住民族教育資源中心') }}</p>
            <p>{{ t('地址') }}：335001 {{ t('桃園市大溪區仁義里介壽路214號') }}</p>
            <p>{{ t('電話') }}：03-3892762</p>
            <p>{{ t('傳真') }}：03-3906990</p>
        </div>
        <form action="" id="ContactUs" class="w-full m-4">
            <h3 class="text-xl font-black">{{ t('聯絡我們') }}</h3>
            <p>{{ t('姓名') }}</p>
            <input type="text" name="" id="" required placeholder="請輸入姓名" class="w-1/2">
            <p>{{ t('電話') }}</p>
            <input type="number" name="" id="" required placeholder="請輸入電話" class="w-1/2">
            <p>{{ t('電子郵件') }}</p>
            <input type="text" name="" id="" required placeholder="請輸入電子郵件" class="w-1/2">
            <p>{{ t('詳細內容') }}</p>
            <textarea name="" id="" rows="10"></textarea>
            <button type="submit" @click="SubmitForm"
                class="text-defaultColor m-2 bg-defaultButton hover:bg-defaultColor hover:text-defaultBg rounded-lg text-xs sm:text-sm min-w-[60px] w-full sm:w-auto px-2 sm:px-5 py-2.5 text-center">{{
                    t('確認') }}</button>
        </form>
    </div>
</template>
<style>
#ContactUs input,
#ContactUs textarea {
    border: 1px solid #000;
    padding: 10px;
    margin: 10px;
}
</style>
<script setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

//接受參數型別設定
const props = defineProps(['BtnText', 'ClickFunction']);

</script>

<template>
    <div class="text-center">
        <button type="button"
            class="text-defaultColor m-2 bg-defaultButton hover:bg-defaultColor hover:text-defaultBg rounded-lg text-xs sm:text-sm min-w-[60px] w-full sm:w-auto px-2 sm:px-5 py-2.5 text-center"
            v-on:click=ClickFunction>
            {{ t(`${props.BtnText}`) }}
        </button>
    </div>
</template>
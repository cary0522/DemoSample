// src/components/DearFlipViewer.vue
<template>
    <div ref="flipbookContainer" class="df-element" :id="containerId">
        <div v-if="isLoading" class="loading-message">
            正在載入 DearFlip...
        </div>
        <div v-if="error" class="error-message">
            {{ error }}
        </div>
    </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, defineProps, defineExpose, ref, nextTick } from 'vue'

const props = defineProps({
    options: {
        type: Object,
        default: () => ({})
    }
})

const flipbookContainer = ref(null);
const containerId = `flipbook-${Math.random().toString(36).substr(2, 9)}`;
const isLoading = ref(true);
const error = ref('');
let flipbookInstance = null;

const waitForLibrary = () => {
    return new Promise((resolve, reject) => {
        let attempts = 0;
        const maxAttempts = 100; // 10秒超時

        const checkLibrary = () => {
            attempts++;
            console.log(`檢查 DearFlip 庫載入狀態 (嘗試 ${attempts}/${maxAttempts})`);
            console.log('jQuery available:', typeof window.jQuery !== 'undefined');
            console.log('DEARFLIP available:', typeof window.DEARFLIP !== 'undefined');

            if (typeof window.DEARFLIP !== 'undefined' && typeof window.jQuery !== 'undefined') {
                console.log('DearFlip library loaded successfully');
                resolve();
            } else if (attempts >= maxAttempts) {
                const errorMsg = `DearFlip library failed to load within timeout. jQuery: ${typeof window.jQuery !== 'undefined'}, DEARFLIP: ${typeof window.DEARFLIP !== 'undefined'}`;
                reject(new Error(errorMsg));
            } else {
                setTimeout(checkLibrary, 100);
            }
        };

        checkLibrary();
    });
};

onMounted(async () => {
    await nextTick();

    try {
        isLoading.value = true;
        error.value = '';

        // 等待 DearFlip 庫載入
        await waitForLibrary();

        // 設置 DearFlip 的基本配置
        const defaultOptions = {
            backgroundColor: '#ffffff',
            viewerType: 'flipbook',
            is3D: true,
            autoSound: false,
            enableDownload: false,
            enablePrint: false,
            enableShare: false,
            enableAutoFlip: false,
            direction: 1, // LTR
            ...props.options
        };

        // 確保容器存在
        if (!flipbookContainer.value) {
            throw new Error('Flipbook container not found');
        }

        console.log('正在初始化 DearFlip，配置:', defaultOptions);

        // 初始化 flipbook
        flipbookInstance = new window.DEARFLIP(flipbookContainer.value, defaultOptions);

        isLoading.value = false;
        console.log("Flipbook initialized successfully:", flipbookInstance);
    } catch (err) {
        isLoading.value = false;
        error.value = `初始化 DearFlip 時發生錯誤: ${err.message}`;
        console.error("Error initializing flipbook:", err);
    }
})

onBeforeUnmount(() => {
    // Cleanup when component is destroyed
    if (flipbookInstance && typeof flipbookInstance.dispose === 'function') {
        try {
            flipbookInstance.dispose();
            flipbookInstance = null;
            console.log("Flipbook disposed");
        } catch (error) {
            console.error("Error disposing flipbook:", error);
        }
    }
})

defineExpose({
    getFlipbookInstance: () => flipbookInstance
})
</script>

<style scoped>
.df-element {
    width: 100%;
    height: 100%;
    position: relative;
    min-height: 600px;
}

.loading-message {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
    font-size: 18px;
    color: #666;
}

.error-message {
    background-color: #fee;
    border: 1px solid #fcc;
    color: #c33;
    padding: 16px;
    border-radius: 4px;
    margin: 16px 0;
}
</style>
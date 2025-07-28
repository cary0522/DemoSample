<script setup>
import { ref, onMounted } from 'vue';
import Loading from './Loading.vue';
import * as pdfjsLib from 'pdfjs-dist/build/pdf';
import 'pdfjs-dist/web/pdf_viewer.css';
import { PageFlip } from 'page-flip';

const LoadingValue = ref(true);

// 設定 pdf.js 的 Worker
import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.min?url';
pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;

// 接收 pdf 檔案
const props = defineProps(['pdfScr']);

// 預設頁數為0
const pageCount = ref(0);
const CurrentPage = ref(0)

onMounted(async () => {
    LoadingValue.value = true;
    try {
        const loadingTask = pdfjsLib.getDocument(`/DemoSample${props.pdfScr}`);
        const pdf = await loadingTask.promise;

        // 取得總頁數
        pageCount.value = pdf.numPages;
        // 將 pdf 分割成 canvas 元素
        for (let i = 1; i < pdf.numPages; i++) {
            const page = await pdf.getPage(i);
            const scale = 1.5;
            const viewport = page.getViewport({ scale });
            const canvas = document.getElementById(`pdf-page-${i - 1}`);
            const ctv = canvas.getContext('2d');
            canvas.height = viewport.height;
            canvas.width = viewport.width;
            const renderContext = {
                canvasContext: ctv,
                viewport: viewport
            };
            await page.render(renderContext).promise;
        }

        // 建立翻頁實例
        const pageFlip = new PageFlip(document.getElementById('flipBook'), {
            width: 375,
            height: 600,
            showCover: true,
        });
        pageFlip.loadFromHTML(document.querySelectorAll('.bookPages'))
        pageFlip.on('flip', () => {
            CurrentPage.value = pageFlip.getCurrentPageIndex()
        })
    } catch (error) {
        console.error('Error rendering PDF pages:', error);
    } finally {
        LoadingValue.value = false;
    }
});
</script>
<template>
    <div id="flipBook" class="w-full min-h-screen mb-2 mx-auto">
        <canvas v-for="page, index in pageCount" :id="`pdf-page-${index}`" :key="index"
            class="bookPages max-w-full h-full mx-2"></canvas>
        <div class="mx-auto mt-16 w-full text-center">{{ CurrentPage }}／{{ pageCount }}</div>
    </div>
    <Loading :-loading="LoadingValue" />
</template>
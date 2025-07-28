<script setup>
import UserPage from '@/components/MasterPageUser.vue'
import PictureView from '../BaseComponents/PictureView.vue';

import PdfSrc from '/EbookTest.pdf'
PDFJS.workerSrc = "//mozilla.github.io/pdf.js/build/pdf.worker.js";
var loadingTask = PDFJS.getDocument(url);
loadingTask.promise.then(
    function (pdf) {
        console.log("PDF loaded");
        var pageNumber = 1;
        pdf.getPage(pageNumber).then(function (page) {
            console.log("Page loaded");
            var scale = 1.5;
            var viewport = page.getViewport(scale);
            var canvas = document.getElementById("example");
            var context = canvas.getContext("2d");
            canvas.height = viewport.height;
            canvas.width = viewport.width;
            var renderContext = {
                canvasContext: context,
                viewport: viewport
            };
            var renderTask = page.render(renderContext);
            renderTask.then(function () { console.log("Page rendered"); });
        });
    }, function (reason) {
        console.error(reason);
    }
);
</script>
<template>
    <div>

        <canvas id="example"></canvas>
        <div style="position:relative;padding-top:max(60%,324px);width:100%;height:0;"><iframe
                style="position:absolute;border:none;width:100%;height:100%;left:0;top:0;"
                src="https://online.fliphtml5.com/hluzz/nhly/" seamless="seamless" scrolling="no" frameborder="0"
                allowtransparency="true" allowfullscreen="true"></iframe></div>
    </div>
</template>
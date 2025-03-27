<script setup>
import { ref, onMounted } from "vue";
import ApiHelper from "@/helpers/ApiHelper.js";
import Breadcrumb from "@/components/BaseComponents/Breadcrumb.vue";

const props = defineProps(["indexNum"]);

const VideoData = ref();

function GetData() {
  ApiHelper.Axios(
    "api/announce/viedo",
    "GET",
    null,
    (res) => {
      if (res.status == 200) {
        VideoData.value = res.data;
      }
    },
    (err) => {
      ApiHelper.ProcessErrMsg(err);
    }
  );
}

onMounted(() => {
  GetData();
});
</script>
<template>
  <div>
    <Breadcrumb :BreadcrumbList="['活動相簿', '宣傳影片']" class="mx-4"></Breadcrumb>
    <div class="flex flex-wrap mx-auto justify-center">
      <div v-for="(item, index) in VideoData" :key="item.id">
        <template v-if="
          props.indexNum ? index < props.indexNum : index < VideoData.length
        ">
          <div v-html="item.iframe" class="mx-2 flex justify-center"></div>
          <p class="text-center w-[560px]">{{ item.Title }}</p>
        </template>
      </div>
    </div>
  </div>
</template>

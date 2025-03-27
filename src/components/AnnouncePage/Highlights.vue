<script setup>
import Card from "../BaseComponents/Card.vue";
import ApiHelper from "@/helpers/ApiHelper";
import Breadcrumb from "@/components/BaseComponents/Breadcrumb.vue";
import { ref, onMounted } from "vue";


const props = defineProps(["indexNum"]);

const highlightData = ref([]);
function GetPageData() {
  ApiHelper.Axios(
    "api/announce/highlights",
    "GET",
    null,
    (res) => {
      if (res.status == 200) {
        highlightData.value = res.data;
      }
    },
    (err) => {
      ApiHelper.ProcessErrMsg(err);
    }
  );
}

onMounted(() => {
  GetPageData();
});
</script>
<template>
  <div>
    <Breadcrumb :BreadcrumbList="['活動相簿', '精彩時刻']" class="mx-4 w-full"></Breadcrumb>
    <div class="flex flex-wrap justify-start">
      <div v-for="(item, index) in highlightData" :key="item.id" class="min-w-[280px] w-1/4">
        <Card v-if="
          props.indexNum
            ? index < props.indexNum
            : index < highlightData.length
        " :title="item.title" :content="item.content" :img="item.img"></Card>
      </div>
    </div>
  </div>
</template>

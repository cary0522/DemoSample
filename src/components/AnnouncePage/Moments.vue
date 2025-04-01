<script setup>
import ApiHelper from "@/helpers/ApiHelper";
import Card from "../BaseComponents/Card.vue";
import Breadcrumb from "@/components/BaseComponents/Breadcrumb.vue";
import { ref, onMounted } from "vue";

const props = defineProps(["indexNum"]);

const momentData = ref([]);
function GetPageData() {
  ApiHelper.Axios(
    "api/announce/moments",
    "GET",
    null,
    (res) => {
      if (res.status == 200) {
        momentData.value = res.data;
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
    <div class="flex flex-wrap justify-start">
      <div v-for="(item, index) in momentData" :key="item.id" class="w-1/4">
        <Card v-if="props.indexNum ? index < props.indexNum : momentData.length" :content="item.content"
          :title="item.title" :img="item.img"></Card>
      </div>
    </div>
  </div>
</template>

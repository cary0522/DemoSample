<script setup>
import UserPage from "@/components/MasterPageUser.vue";
import AreaTitle from "../BaseComponents/AreaTitle.vue";
import ApiHelper from "@/helpers/ApiHelper";
import Breadcrumb from "../BaseComponents/Breadcrumb.vue";
import Table from "../BaseComponents/Table.vue";
import TableContent from "../BaseComponents/TableContent.vue";
import { ref, onMounted } from "vue";

const TableHeader = [
  {
    Key: "StartTime",
    Value: "日期",
  },
  {
    Key: "Title",
    Value: "標題",
  },
  {
    Key: "Top",
    Value: "置頂",
  },
];
const TableDate = ref([]);
// 取得最新消息資料
function GetPageData() {
  ApiHelper.Axios(
    "api/LatestNews/GetPageData",
    "GET",
    null,
    (res) => {
      if (res.status == 200) {
        TableDate.value = res.data.DataList;
        console.log(TableDate.value);
      }
    },
    (err) => {
      ApiHelper.ProcessErrMsg(err);
    }
  );
}
// 取得單筆最新消息資料
const DetailData = ref([]);
function GetDetail(id) {
  console.log(id);
  ApiHelper.Axios(
    `api/LatestNews/${id}`,
    "GET",
    null,
    (res) => {
      if (res.status == 200) {
        DetailData.value = res.data;
        console.log(DetailData.value);
      }
    },
    (err) => {
      ApiHelper.ProcessErrMsg(err);
    }
  );
}
const DetailShow = ref(false);

onMounted(() => {
  GetPageData();
});
</script>
<template>
  <Table :-table-header="TableHeader" v-model:TableData="TableDate" :-get-page-data="GetPageData"
    :-detail-function="GetDetail" :Pointer="true" class="mx-4"></Table>
  <TableContent v-if="DetailShow"></TableContent>
</template>

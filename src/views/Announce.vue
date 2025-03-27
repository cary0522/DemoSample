<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import UserPage from "@/components/MasterPageUser.vue";
import LeftOptions from "@/components/BaseComponents/LeftOptions.vue";
import Search from "@/components/BaseComponents/Search.vue";
import LatestNews from "@/components/AnnouncePage/LatestNews.vue";
import Highlights from "@/components/AnnouncePage/Highlights.vue";
import Moments from "@/components/AnnouncePage/Moments.vue";
import Video from "@/components/AnnouncePage/Video.vue";

const router = useRouter();

const OptionsList = ref([
  { Value: "最新消息", Path: "/announce/latestNews" },
  { Value: "每日花絮", Path: "/announce/moments" },
  { Value: "精彩時刻", Path: "/announce/highlights" },
  { Value: "宣傳影片", Path: "/announce/video" },
]);
</script>
<template>
  <div>
    <UserPage>
      <div class="flex justify-between mx-4">
        <LeftOptions :OptionsList="OptionsList" :select="false" class="w-1/3"></LeftOptions>
        <div class="w-full flex flex-wrap">
          <Search class="w-full"></Search>
          <LatestNews v-if="router.currentRoute.value.path == '/announce/latestNews'"></LatestNews>
          <Highlights v-if="router.currentRoute.value.path == '/announce/highlights'"></Highlights>
          <Moments v-if="router.currentRoute.value.path == '/announce/moments'"></Moments>
          <Video v-if="router.currentRoute.value.path == '/announce/video'"></Video>
        </div>
      </div>
    </UserPage>
  </div>
</template>

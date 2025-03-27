import { createRouter, createWebHistory, createWebHashHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Info from "@/views/Info.vue";
import Announce from "@/views/Announce.vue";
import Competition from "@/views/Competition.vue";
import Fair from "@/views/Fair.vue";
import Celebration from "@/views/Celebration.vue";
import Activity from "@/views/Activity.vue";
import Serve from "@/views/Serve.vue";
import Dp_index from "@/views/Dp_index.vue";
import TrafficSetting from "@/components/Admin/TrafficSetting.vue";


const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: { title: "桃園市原住民教育資源中心" },
    },
    {
      path: "/info",
      name: "info",
      component: Info,
      meta: { title: "認識我們" },
    },
    {
      path: "/info/calendar",
      name: "Center Introduction",
      component: Info,
      meta: { title: "中心簡介" },
    },
    {
      path: "/info/organization",
      name: "Central Mission",
      component: Info,
      meta: { title: "中心任務" },
    },
    {
      path: "/info/logo",
      name: "Division of Labor",
      component: Info,
      meta: { title: "組織分工" },
    },
    {
      path: "/announce",
      name: "announce",
      component: Announce,
      meta: { title: "活動相簿" },
    },
    {
      path: "/announce/latestNews",
      name: "latestNews",
      component: Announce,
      meta: { title: "最新消息" },
    },
    {
      path: "/announce/highlights",
      name: "highlights",
      component: Announce,
      meta: { title: "每日花絮" },
    },
    {
      path: "/announce/moments",
      name: "moments",
      component: Announce,
      meta: { title: "精彩時刻" },
    },
    {
      path: "/announce/video",
      name: "video",
      component: Announce,
      meta: { title: "宣傳影片" },
    },
    {
      path: "/competition",
      name: "competition",
      component: Competition,
      meta: { title: "教材資源" },
    },
    {
      path: "/competition/schedule",
      name: "schedule",
      component: Competition,
      meta: { title: "泰雅" },
    },
    {
      path: "/competition/file",
      name: "file",
      component: Competition,
      meta: { title: "布農" },
    },
    {
      path: "/competition/excellentInstructor",
      name: "excellentInstructor",
      component: Competition,
      meta: { title: "排灣" },
    },
    {
      path: "/competition/award",
      name: "award",
      component: Competition,
      meta: { title: "太鲁閣" },
    },
    {
      path: "/fair",
      name: "fair",
      component: Fair,
      meta: { title: "好站連結" },
    },
    {
      path: "/fair/method",
      name: "method",
      component: Fair,
      meta: { title: "政府機關" },
    },
    {
      path: "/fair/stall",
      name: "stall",
      component: Fair,
      meta: { title: "教育學習" },
    },
    {
      path: "/fair/themePavilion",
      name: "themePavilion",
      component: Fair,
      meta: { title: "研究單位" },
    },
    {
      path: "/fair/radioProgramList",
      name: "radioProgramList",
      component: Fair,
      meta: { title: "財團法人" },
    },
    {
      path: "/celebration",
      name: "celebration",
      component: Celebration,
      meta: { title: "" },
    },
    {
      path: "/celebration/opening",
      name: "opening",
      component: Celebration,
      meta: { title: "開幕典禮流程" },
    },
    {
      path: "/celebration/awardProcess",
      name: "awardProcess",
      component: Celebration,
      meta: { title: "頒獎典禮流程" },
    },
    {
      path: "/celebration/openingLIVE",
      name: "openingLIVE",
      component: Celebration,
      meta: { title: "開幕典禮LIVE" },
    },
    {
      path: "/celebration/awardLIVE",
      name: "awardLIVE",
      component: Celebration,
      meta: { title: "頒獎典禮LIVE" },
    },
    {
      path: "/activity",
      name: "activity",
      component: Info,
      meta: { title: "聯絡我們" },
    },
    {
      path: "/activity/night",
      name: "night",
      component: Activity,
      meta: { title: "科展之夜" },
    },
    {
      path: "/activity/performanceTeam",
      name: "performanceTeam",
      component: Activity,
      meta: { title: "科展之夜表演團隊介紹" },
    },
    {
      path: "/activity/scienceJourney",
      name: "scienceJourney",
      component: Activity,
      meta: { title: "科學之旅" },
    },
    {
      path: "/activity/registration",
      name: "registration",
      component: Activity,
      meta: { title: "科學之旅報名" },
    },
    {
      path: "/activity/master",
      name: "master",
      component: Activity,
      meta: { title: "與大師有約" },
    },
    {
      path: "/activity/workshop",
      name: "workshop",
      component: Activity,
      meta: { title: "科學教師交流工作坊" },
    },
    {
      path: "/serve",
      name: "serve",
      component: Serve,
      meta: { title: "檔案下載" },
    },
    {
      path: "/serve/contact",
      name: "contact",
      component: Serve,
      meta: { title: "影音紀錄" },
    },
    {
      path: "/serve/accommodation",
      name: "accommodation",
      component: Serve,
      meta: { title: "課後族語班" },
    },
    {
      path: "/serve/gift",
      name: "gift",
      component: Serve,
      meta: { title: "原住民族教育數位平台" },
    },
    {
      path: "/serve/traffic",
      name: "traffic",
      component: Serve,
      meta: { title: "原住民族知識體系" },
    },
    {
      path: "/serve/traffic/Setting",
      name: "TrafficSetting",
      component: TrafficSetting,
      meta: { title: "交通資訊設定" },
    },
    {
      path: "/serve/parking",
      name: "parking",
      component: Serve,
      meta: { title: "師資培訓" },
    },
    {
      path: "/serve/trafficFloorPlan",
      name: "trafficFloorPlan",
      component: Serve,
      meta: { title: "三一教學" },
    },
    {
      path: "/serve/shuttle",
      name: "shuttle",
      component: Serve,
      meta: { title: "多元方案" },
    },
    {
      path: "/serve/shuttleMap",
      name: "shuttleMap",
      component: Serve,
      meta: { title: "教材編輯" },
    },
    {
      path: "/dp_index",
      name: "Dp_index",
      component: Dp_index,
      meta: { title: "後臺首頁" },
    },
  ],
});
router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title;
  next();
});

export default router;

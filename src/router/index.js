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
import Download from "@/views/Download.vue";

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
      path: "/about",
      name: "info",
      component: Info,
      meta: { title: "認識我們" },
    },
    {
      path: "/about/introduction",
      name: "Center Introduction",
      component: Info,
      meta: { title: "中心簡介" },
    },
    {
      path: "/about/mission",
      name: "Central Mission",
      component: Info,
      meta: { title: "中心任務" },
    },
    {
      path: "/about/division",
      name: "Division of Labor",
      component: Info,
      meta: { title: "組織分工" },
    },
    {
      path: "/announce",
      name: "announce",
      component: Announce,
      meta: { title: "最新消息" },
    },
    {
      path: "/announce/latestNews",
      name: "Latest News",
      component: Announce,
      meta: { title: "中心最新消息" },
    },
    {
      path: "/announce/cip",
      name: "The Council of Indigenous Peoples",
      component: Announce,
      meta: { title: "原委會最新消息" },
    },
    {
      path: "/announce/dia",
      name: "Department of Indigenous Aflinks",
      component: Announce,
      meta: { title: "原民局最新消息" },
    },
    {
      path: "/announce/titv",
      name: "Taiwan Indigenous TV",
      component: Announce,
      meta: { title: "原視新聞" },
    },
    {
      path: "/resources",
      name: "competition",
      component: Competition,
      meta: { title: "教材資源" },
    },
    {
      path: "/resources/atayal",
      name: "Atayal",
      component: Competition,
      meta: { title: "泰雅" },
    },
    {
      path: "/resources/bunun",
      name: "Bunun",
      component: Competition,
      meta: { title: "布農" },
    },
    {
      path: "/resources/paiwan",
      name: "Paiwan",
      component: Competition,
      meta: { title: "排灣" },
    },
    {
      path: "/resources/taroko",
      name: "Taroko",
      component: Competition,
      meta: { title: "太鲁閣" },
    },
    {
      path: "/resources/amis",
      name: "Amis",
      component: Competition,
      meta: { title: "阿美" },
    },
    {
      path: "/resources/teachers",
      name: "Teachers",
      component: Competition,
      meta: { title: "全市族語師資查詢" },
    },
    {
      path: "/link",
      name: "link",
      component: Fair,
      meta: { title: "好站連結" },
    },
    {
      path: "/link/method",
      name: "method",
      component: Fair,
      meta: { title: "政府機關" },
    },
    {
      path: "/link/stall",
      name: "stall",
      component: Fair,
      meta: { title: "教育學習" },
    },
    {
      path: "/link/themePavilion",
      name: "themePavilion",
      component: Fair,
      meta: { title: "研究單位" },
    },
    {
      path: "/link/foundation",
      name: "Foundation",
      component: Fair,
      meta: { title: "財團法人" },
    },
    {
      path: "/link/center",
      name: "center",
      component: Fair,
      meta: { title: "原教中心" },
    },
    {
      path: "/results/writing",
      name: "ReportAchievements",
      component: Celebration,
      meta: { title: "成果填報" },
    },
    {
      path: "/results/achievements",
      name: "achievements",
      component: Celebration,
      meta: { title: "年度計畫與成果展示" },
    },
    {
      path: "/results/album",
      name: "album",
      component: Celebration,
      meta: { title: "活動相簿" },
    },
    {
      path: "/about/contact",
      name: "activity",
      component: Info,
      meta: { title: "聯絡我們" },
    },
    {
      path: "/plans/video",
      name: "contact",
      component: Serve,
      meta: { title: "教案" },
    },
    {
      path: "/plans/language",
      name: "accommodation",
      component: Serve,
      meta: { title: "照片" },
    },
    {
      path: "/plans/digital",
      name: "gift",
      component: Serve,
      meta: { title: "影片" },
    },
    {
      path: "/plans/knowledge",
      name: "traffic",
      component: Serve,
      meta: { title: "計畫" },
    },
    {
      path: "/plans/teacherTraining",
      name: "parking",
      component: Serve,
      meta: { title: "補充教材" },
    },
    {
      path: "/plans/trinity",
      name: "trafficFloorPlan",
      component: Serve,
      meta: { title: "研習公告" },
    },
    {
      path: "/activity/announcements",
      name: "Workshop Announcements",
      component: Activity,
      meta: { title: "研習公告" },
    },
    {
      path: "/activity/registration",
      name: "Workshop Registration",
      component: Activity,
      meta: { title: "研習報名" },
    },
    {
      path: "/activity/highlights",
      name: "Event Highlights",
      component: Activity,
      meta: { title: "成果照片" },
    },
    {
      path: "/download/rules",
      name: "rules",
      component: Download,
      meta: { title: "政策法規" },
    },
    {
      path: "/download/files",
      name: "files",
      component: Download,
      meta: { title: "原教文件" },
    },
    {
      path: "/download/forms",
      name: "forms",
      component: Download,
      meta: { title: "表單下載" },
    },
    {
      path: "/download/data",
      name: "data",
      component: Download,
      meta: { title: "申請資料" },
    },
    {
      path: "/plans/knowledge/Setting",
      name: "TrafficSetting",
      component: TrafficSetting,
      meta: { title: "交通資訊設定" },
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

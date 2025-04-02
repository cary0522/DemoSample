# 展示用的樣板頁面，部屬於 GitHub Pages

這是一個使用 Vue 3 開發的樣板專案，提供前台網站展示，部屬到 GitHub Pages。

---

## 🔗 線上展示網址

👉 [https://cary0522.github.io/DemoSample/#/](https://cary0522.github.io/DemoSample/#/)

---

## 🛠️ 安裝與啟動

請依下列步驟安裝並啟動開發伺服器：

```bash
npm install
npm run dev
```

打包與部署至 GitHub Pages：

```bash
npm run demo
```

---

## 🔧 導覽設定說明

本專案的網站標題與導覽列皆透過 `src/assets/Setting.json` 設定，無需修改程式碼即可直接調整畫面內容。

### 🏷 網站標題設定

```json
"setting": {
  "WebTitle": "桃園市政府原住民族教育資源中心",
  "SideTitle": "Taoyuan Indigenous Education Resource Center"
}
```

- `WebTitle`：顯示在網頁標籤上的主標題。
- `SideTitle`：顯示於主標題下方的副標題，通常為英文標題。

---

### 📂 導覽選單設定

```json
"menuList": [
  {
    "groupName": "認識我們",
    "englishName": "About Us",
    "icon": ["fas", "house-chimney"],
    "items": [
      {
        "name": "中心簡介",
        "englishName": "Center Introduction",
        "icon": ["fas", "circle-exclamation"],
        "path": "/about/introduction"
      },
      ...
    ]
  }
]
```

- `groupName` / `englishName`：主選單的中、英文標題。
- `icon`：Font Awesome 圖示（陣列格式，例如 `["fas", "users"]`）。
- `items`：子選單清單：
  - `name` / `englishName`：子選單中、英文名稱。
  - `path`：路由對應的前端路徑（例：`/about/introduction`）。
  - `icon`：子選單 Font Awesome 圖示（陣列格式，例如 `["fas", "users"]`）。
- `ShowItem`：可控制是否展開子選單（布林值），預設為  `false`。

* 設定完成後，記得至 `src/i18n/ch.json` 及 `src/i18n/en.json` 檔案中設定各語言呈現文字
---

## 📁 專案結構簡介

```
DemoSample/
├── public/
│   ├── images          -> 靜態圖片主要放置處
│   │   └── Banner      -> 放置首頁輪播圖圖片
│   └── favicon.ico 
├── src/
│   ├── assets          -> 放置各個設定 json 檔案處
│   ├── components
│   ├── helpers         -> 設定常用 api funciton
│   ├── i18n            -> 設定翻譯呈現文字
│   └── views
├── index.html
├── vite.config.js
└── package.json
```

---

## 📦 使用技術

- [Vue 3](https://vuejs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- GitHub Pages

---

## 🙋‍♀️ 作者

Cary0522

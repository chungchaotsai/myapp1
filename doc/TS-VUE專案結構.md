# TS-VUE 專案結構與建置規則


><b>規則: VUE 元件的 class name 用 PascalCase 方式命名。</b>  
範例: export default class `ConfigView` extends Vue {}

<br>

><b>規則: VUE 元件的檔案名稱 用 Pascal 方式命名。</b>  
範例: `ConfigView.vue`

<br>

><b>規則: 若 VUE 元件本身是以整頁的方式呈現，需在 `/src/views` 資料夾下建立元件。</b>  

<br>

><b>規則: 承上，建立 views 元件，建立一個資料夾，資料夾名稱以元件名稱但用 [`烤肉串皆小寫`] 方式來命名。</b>  
範例: 元件名稱為 ConfigView，資料夾名稱為 config-view

<br>

><b>規則: 若屬於 views 某個主頁元件內的子元件，到 `/src/components` 資料夾下，建立主頁資料夾(烤肉串+小寫)檔尾加 "-group"，把子元件建立在此資料夾下。</b>  
範例: /src/components/config-view-group/ConfigSet.vue

<br>

><b>規則: 若是一般的元件，到 /src/components 資料夾下， 以[`烤肉串皆小寫`]方式建立資料夾，再把元件放進去。</b>  
範例: /src/components/side-bar/SideBar.vue

<br>

><b>規則: 定義與後台 API 請求的內容對應的 json schema 類別，請定義在 /src/models/ 資料夾下新增 class。</b>  
範例:   


<br>

陸續補充...





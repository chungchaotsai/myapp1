
# TS-VUE 專案建置流程

## 基本套件
---

首先，必須先安裝相關套件
+ Nodejs (https://nodejs.org/en/)
+ vue/cli
```
   npm install -g vue/cli
```

以下示範的版本是:  
基本套件 | 版本
--------|:-----
Nodejs  | v12.18.0  
vue/cli | @vue/cli 4.1.1


<br><br>

## VUE 專案建置流程 (Typescript 版本)
---

1) 用 VS Code 開啟一個資料夾，當作專案的目錄

2) 開啟 Terminal (終端機)，輸入下列指令: (vue create <專案名稱>) 後按下 Enter
```
    vue create ts-vue
```

3) 選擇 Manually select features 項目

```
    Vue CLI v4.1.1
    ┌─────────────────────────────────────────┐
    │                                         │
    │   New version available 4.1.1 → 4.5.4   │
    │    Run npm i -g @vue/cli to update!     │
    │                                         │
    └─────────────────────────────────────────┘

    ? Please pick a preset:  
      default (babel, eslint)
    > Manually select features
```


4) 用上、下鍵切換選項，用空白鍵來選擇，如下有打星號(*)的項目給選起來
```
    ? Check the features needed for your project: 
    ( ) Babel
    >(*) TypeScript
    ( ) Progressive Web App (PWA) Support        
    (*) Router
    (*) Vuex
    (*) CSS Pre-processors
    ( ) Linter / Formatter
    (*) Unit Testing
    ( ) E2E Testing
```

5) 詢問是否用 class-style 的元件語法，要輸入Y (Yes)
```
    ? Use class-style component syntax? (Y/n) Y
```

6) 如下詢問，輸入 N (No)
```
    ? Use Babel alongside TypeScript (required for modern mode, auto-detected polyfills, transpiling JSX)? (y/N) N
```

7) 詢問 router 是否使用 history 模式，輸入 Y (Yes)
```
    ? Use history mode for router? (Requires proper server setup for index fallback in production) (Y/n) Y
```

8) 詢問使用 CSS 前置處理器，選擇 Sass/SCSS (with node-sass)
```
    ? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported by default): 
      Sass/SCSS (with dart-sass)
    > Sass/SCSS (with node-sass)
      Less
      Stylus
```

9) 詢問選擇單元測試的套件，選擇 Mocha + Chai
```
    ? Pick a unit testing solution: (Use arrow keys)
    > Mocha + Chai
      Jest
```

10) 選擇 package.json
```
    ? Where do you prefer placing config for Babel, ESLint, etc.? 
      In dedicated config files
    > In package.json
```

11) 詢問是否要把這些設定儲存成一個 preset，選擇 N
```
    ? Save this as a preset for future projects? (y/N) N
```
>PS: 若選擇 Y (Yes)，下次在 vue create 專案時，就可以直接選 preset，不用再一個一個流程重新選擇。  

<br>

12) 以上設定完畢，會開始下載相關套件 (需等待一段時間)
```
    ⚓  Running completion hooks...

    �  Generating README.md...

    �  Successfully created project ts-vue.
    �  Get started with the following commands:

    $ cd ts-vue
    $ npm run serve
```
> 可以進入專案目錄下，輸入 npm run serve 來執行瀏覽網站

<br><br>

# ICE 專案必須套件

在 package.json 的 dependencies 套件(佈署需要的套件)清單，如下:

```json
  "dependencies": {
    "@progress/kendo-data-query": "^1.5.4",
    "@progress/kendo-datasource-vue-wrapper": "^2020.2.722",
    "@progress/kendo-dateinputs-vue-wrapper": "^2020.2.722",
    "@progress/kendo-layout-vue-wrapper": "^2020.2.713",
    "@progress/kendo-listview-vue-wrapper": "^2020.2.625",
    "@progress/kendo-theme-bootstrap": "^4.19.0",
    "@progress/kendo-theme-material": "^3.16.0",
    "@progress/kendo-ui": "^2020.2.617",
    "@progress/kendo-vue-animation": "^1.0.3",
    "@progress/kendo-vue-data-tools": "^1.0.3",
    "@progress/kendo-vue-dateinputs": "^1.0.3",
    "@progress/kendo-vue-dropdowns": "^1.0.3",
    "@progress/kendo-vue-grid": "^1.0.3",
    "@progress/kendo-vue-inputs": "^1.0.3",
    "@progress/kendo-vue-intl": "^1.0.3",
    "@progress/kendo-vue-popup": "^1.0.3",
    "axios": "^0.19.2",
    "bootstrap": "^4.5.2",
    "jquery": "^3.5.1",
    "jsonwebtoken": "^8.5.1",
    "popper": "^1.0.1",
    "vue": "^2.6.11",
    "vue-class-component": "^7.2.3",
    "vue-property-decorator": "^8.4.2",
    "vue-router": "^3.2.0",
    "vuex": "^3.4.0",
    "vuex-class": "^0.3.2"
  },
```
<br>

devDependencies 套件(開發用的套件)清單如下:  
```json
 "devDependencies": {
    "@types/bootstrap": "^4.5.0",
    "@types/chai": "^4.2.11",
    "@types/mocha": "^5.2.4",
    "@types/sinon": "^9.0.4",
    "@types/sinon-chai": "^3.2.4",
    "@vue/cli-plugin-router": "^4.5.0",
    "@vue/cli-plugin-typescript": "^4.5.0",
    "@vue/cli-plugin-unit-mocha": "^4.5.0",
    "@vue/cli-plugin-vuex": "^4.5.0",
    "@vue/cli-service": "^4.5.0",
    "@vue/test-utils": "^1.0.3",
    "chai": "^4.1.2",
    "flush-promises": "^1.0.2",
    "node-sass": "^4.12.0",
    "sass-loader": "^8.0.2",
    "sinon": "^9.0.3",
    "sinon-chai": "^3.5.0",
    "typescript": "~3.9.3",
    "vue-template-compiler": "^2.6.11"
  },

```
<br>

## 第三方套件說明
---

### JQuery (必要)

jquery 在 Kendo-UI 和 Bootstrap 都會用到的基礎套件，本身在 DOM 的處理也很有效率，在 ICE VUE 專案預設是要啟用的。

啟用方法:  
在 `vue.config.js` 檔案，新增下列設定，用 webpack 方式載入 jquery，這樣在 vue 元件就能直接使用:

```javascript
const webpack = require('webpack');

module.exports = {
  // 省略...

  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'windows.jQuery': 'jquery',
      }),
    ],
    externals: {
      'kendo': '@progress/kendo-ui'   // Kendo ui 要使用
    }
  }
}
```
<br>

### Kendo Bootstrap Theme (必要)
因為，團隊是使用 Kendo UI 的 Bootstrap Theme，套用方法在 `/src/main.ts` 如下 import 進來:
```javascript
import '@progress/kendo-theme-bootstrap/dist/all.css';
```
<br>

### Bootstrap (選項)

Bootstrap 套件最新版 (V4) 會因與 UI 套版 (V3.3.7) 版本差異，看需求是否要啟用最新版。

啟用方法:  
在 `/src/main.ts` 如下 import 進來:
```javascript
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap"; // import bootstrap js
```
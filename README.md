# Vue-TypeScript-Scaffolding


流程:  

1. 首先，先 git clone 此骨架程式

<br>

2. 到 package.json 修改專案名稱和確認版本號 (0.0.1 是初始版)
```
{
  "name": "LogUI",
  "version": "0.0.1",
  
}
```
<br>

3. 設定 git remote set-url 位址到新專案的位址
```
  git remote set-url origin https://github.com/USERNAME/REPOSITORY.git
```
注意: 新專案的 git reposity 必須是新的空專案。

<br>

4. 查詢 git 網址有沒有設定成功
```
  git remote -v
```
<br>

5. 再執行 git commit, git pull, git push 把修改好的骨架程式出版上傳到新專案的 Repository

    PS: 如果有使用 git 工具，是執行 git sync。  

<br>

---

以上做法，是針對新專案的 git repository 是空的(剛建好的)。假使有一個 git 專案已經有更新的歷程 (上面已有資料)，流程大致如下:
<br>
1. 首先，先 git clone 此骨架程式
```
  git clone xxx.git    
```

2. 再把此骨架程式所在的資料夾下把隱藏資料夾 .git 給刪除


3. 把骨架程式所有檔案複製到新專案的資料夾下。

4. 再執行 git commit, git pull, git push 等動作。

---

<br>


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

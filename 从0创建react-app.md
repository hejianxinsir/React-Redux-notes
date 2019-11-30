
## 如何创建一个 react app ？

- create-react-app my-app
- cd my-app
- yarn start
- 到这里我报错了，终端有 123456789 等操作步骤提示你如何解决，但没什么用。我 google 了一下，把 package.json 里的 react-scripts 改成 1.1.4 版本就行了。
- 然后，yarn install。下载你更改的版本之用。
- yarn build 这时候你能看到你的网页了。
-  提交到 github 。
- 接着在终端里 yarn build
- 我的又报错了，解决办法是把 package.json 里的 browserlist 这一段代码全删了。
- 然后 yarn build ，成功。
- 再次提交到 github 。第一次 build 。注意！！！要先把 .gitignore 里的 build 删了，否则 build 上传不了。
- 注意，这一次 build 成功了，信息提示你在 package.json 里改 homepage 这是关键。
- 这时候在 github 里搞出预览页面：settings - Github-Pages - click None - choose master branch - copy link from Github Pages.
- copy 了这个链接还不够，要在链接后面加 build/index.html . 比如 https://hejianxinsir.github.io/second-react-app/build/index.html 你才能预览这个网页。
- 但你预览了发现页面什么也没有，去控制台看一看，请求 404 了。说明请求的路径是错的。
- 前面说了，终端信息提示你修改 homepage ，这时候派上用场了。在 package.json 里添加 homepage ，比如这样：https://hejianxinsir.github.io/second-react-app/build
- 然后再次 yarn build，提交到 github 。
- 这时候你预览完整的链接，就能看到内容了，至此完毕。https://hejianxinsir.github.io/second-react-app/build/index.html

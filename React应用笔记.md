1. yarn build   报错的时候，试试把 browserlist 这一片删掉。

2. build 才是给用户看的东西。

3. 注意看终端的提示，这很重要。把信息联系起来，你才可能想到解决办法。

4. 如何创建一个 react app ？
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
- 再次提交到 github 。第一次 build 。
- 注意，这一次 build 成功了，信息提示你在 package.json 里改 homepage 这是关键。

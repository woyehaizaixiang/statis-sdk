# 错误日志上报SDK

拒绝让代码裸奔在客户端，因此诞生了本sdk

## 使用方法

#### [npm](https://www.npmjs.com/)安装

```bash
npm install statis-sdk
```

#### 使用

一、vue项目
在项目代码第一行加入
```js
import statisReport from 'statis-sdk';
statisReport.init(Vue);
```

二、普通项目
在项目代码第一行加入
```js
import statisReport from 'statis-sdk';
statisReport.init();
```
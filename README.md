# starlight

## 项目简介

[蔡的小站]( https://com.shimmer.fit) 

https://com.shimmer.fit

这是一个个人网站, 它包含很多功能. (博客\笔记\教学\知识字典\分享\碎语\分析\网页app\美食\爱好\在线游戏\记录\相册\音乐\随机在线 url\友链)

这是整个项目的部分代码, 只是前端部分, 后端部分会再立一个java项目



## 项目技术栈

Vue3

VueCli

Element UI

Html Css JavaScript 



## 工具

VS code

npm

Vue ui



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

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).









# 开发安排

在主页增加功能页列表

增加笔记页

增加教学页

增加最新动态页

分享站

碎语

分析

热点

app

时间线

....



# 更新记录

## v1.0.0

2021年09月15日16:50:27

初次提交目前网站的样子

- 增加大封面组件
  - 显示大图
  - 显示标题内容
  - 快捷跳转到正文的按钮
- 增加右下角进度条按钮
  - 显示网页浏览进度
  - 点击后显示 3 个功能按钮
    - 查找文章按钮
    - 滚动到顶部
    - 滚动到底部

截图 : 

<img src="https://shimmerimg.oss-cn-beijing.aliyuncs.com/blog/screenshot/20210915170641.png" style="zoom: 25%;" />



# 笔记

## Css动画 让元素下滑淡出

```css
.slide-fade-animation {
  animation-name: example;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  position: relative;
}

@keyframes example {
  0% {
    left: 0px;
    top: 0px;
    opacity: 1;
  }

  100% {
    left: 0px;
    top: 20px;
    opacity: 0;
  }
}
```

```html
<a
          class="a-anim"
          href="javascript:void(0)"
        >
          <div class="slide-fade-animation" style="font-size: 2.5rem">
            <span class="el-icon-arrow-down"></span>
          </div>
        </a>
```



## js禁止a点击后跳转

```js
<a  href="javascript:void(0)" ></a>
```

## 背景图居中对齐

```css
background: "url(" + require("../../../assets/images/bgi.jpeg") + ")  no-repeat top center",
```

## Vue 背景图动态值

​	vue 不能识别样式参数中的图片路径, 无法正常显示. vue需要 图片先 require 方法对图片进行导入后再使用, 必须使用动态值传入样式`:style="xxxxx"`

### 先写死使用项目中相对路径的图片

```css
background: "url(" + require("../../../assets/images/bgi.jpeg") + ")  no-repeat top center",
```

### 动态传入图片的路径

动态引入背景图片需要使用require关键字

require内不能使用纯变量，可以使用将字符串类型的变量改为拼接字符串

```css
backgroundImage: "url(" + require("@/" + this.imgUrl) + ")",
```

## 背景图不滚动固定住

```css
backgroundAttachment: "fixed",
position: "relative"
```

## 

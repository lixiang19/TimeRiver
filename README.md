# 时间流

项目灵感来源于一本书《柳比歇夫奇特的一生》，读书笔记点此。当时想实践一下发现纸笔确实不太好用，就预想实现一个能够快速记录，自动计算时长，还能够统计的小软件。

后端地址点此。

## 技术栈

本项目前后端完全分离，前端将打包成静态文件，只通过RESTful api与后端通信，后端鉴权使用jwt。

前端：vue+vuex+vue-router、axios、vuetifyjs

后端：koa2、mongodb、mongoose

## 项目地址

暂未上线，准备改成pwa后再上。
## 已实现功能
1. 账号系统支持注册登录，后天签发令牌token
2. 前端路由及响应拦截，本地无令牌则自动跳转登录页
3. 智能结算时长，添加跨天事件，快速记录只需要点击三次。
4. 回溯过往任何一天的记录
5. 统计总学习时间和周学习时间
## 待加入功能
1. 登录注册页美化及优化
2. 添加固定时间记录及任务记录两种记录方式
3. 统计图表多样化，可定制，自动生成周报、月报。

## 项目截图
![主页](https://upload-images.jianshu.io/upload_images/13792683-9d0e3c416fd7166c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![添加界面](https://upload-images.jianshu.io/upload_images/13792683-2e4a02fc2e52582e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![管理标签](https://upload-images.jianshu.io/upload_images/13792683-e60da098f62c1b9b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![统计图表](https://upload-images.jianshu.io/upload_images/13792683-a2dcf78b00f4ab92.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![任意日期回忆](https://upload-images.jianshu.io/upload_images/13792683-a30f5e7a89786225.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![侧边导航](https://upload-images.jianshu.io/upload_images/13792683-d6e068bfc2cfd2cf.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


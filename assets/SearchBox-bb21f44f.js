import{h as f,i as b,l as C,f as j,t as I,u as N,m as O,o as p,c as u,n as P,p as F,a as E,q as x,x as y,F as B,y as T,z as S,A as v,B as z}from"./app-2b248397.js";import{_ as R}from"./plugin-vue_export-helper-c27b6911.js";const U=[{path:"/frontmatter%E9%85%8D%E7%BD%AE",title:"Frontmatter配置",pathLocale:"/",contents:[{header:"Frontmatter配置",slug:"frontmatter配置",content:""},{header:"信息配置",slug:"信息配置",content:`字段
作用
类型 title
页面内容标题，默认为markdown第一个h1标签内容
string shortTitle
页面短标题，导航栏、侧边栏、导航路径中作为首选
string description
当前页面内容描述
string icon
页面图标的fontClass或者文件路径(图标支持)
string author
作者，默认为系统设置作者 isOriginal
是否原创
boolean date
写作时间，格式: YYYY-MM-DD 或 YYYY-MM-DD hh:mm:ss
DateString category
分类
string |string [] tag
标签
string |string [] sticky
是否在列表中置顶，填入数字时，数字越大，排名越靠前
boolean | number star
是否收藏在博客主题的文章列表中，数字越大，排名越靠前
boolean | number article
是否将该文章添加至文章列表
boolean timeline
是否将该文章添加至时间线中
boolean image
设置预览图（分享图），请填入绝对路径
string banner
设置横幅图片 (宽屏分享图)，请填入绝对路径
string`},{header:"布局配置",slug:"布局配置",content:""}]},{path:"/",title:"首页",pathLocale:"/",contents:[]},{path:"/resume",title:"求职简历",pathLocale:"/",contents:[{header:"求职简历",slug:"求职简历",content:"姓名：郭延赞"}]},{path:"/linux/nginx%E4%BD%BF%E7%94%A8",title:"nginx使用",pathLocale:"/",contents:[{header:"nginx使用",slug:"nginx使用",content:""},{header:"安装",slug:"安装",content:""},{header:"linux 安装",slug:"linux-安装",content:`# 安装 nginx 需要的依赖环境
yum -y install gcc zlib zlib-devel pcre-devel openssl openssl-devel
# 创建一个 soft 目录安装软件
mkdir /home/soft && cd /home/soft
# 创建一个 nginx 的安装目录
mkdir nginx
# 下载 nginx 压缩包（用最新的版本号替换下面的版本号）
wget http://nginx.org/download/nginx-1.24.0.tar.gz
# 解压 nginx 压缩包（版本号跟上面的版本号相同）
tar -xvf nginx-1.24.0.tar.gz
# 进入加压后的目录（版本号跟上面的版本号相同）
cd nginx-1.24.0/
# 指定 nginx 的安装目录
./configure --prefix=/home/soft/nginx
# 执行 make 命令编译
make
# 执行 make install 命令安装
make install
# 查看 nginx 目录下内容
cd /home/soft/nginx && ll
安装成功`},{header:"放行 nginx 端口号",slug:"放行-nginx-端口号",content:`如果是云服务器，到云服务器控制台配置防火墙（腾讯云）或安全组入方向规则（华为云、阿里云）
如果是公司服务器，使用以下命令 // 放行nginx端口号 (80替换成需要开发的端口号)
firewall-cmd --add-port=80/tcp --zone=public --permanent
// 重启防火墙
systemctl restart firewalld
// 查看防火墙放行端口号
firewall-cmd --list-port`},{header:"在任意路径下都可以使用nginx",slug:"在任意路径下都可以使用nginx",content:`方法1：创建软连接
# 将 nginx 安装目录下脚本文件夹中的 nginx 程序以软连接的形式映射到 /user/local/bin 下
ln -s /home/soft/nginx/sbin/nginx /usr/local/bin/nginx
# 如果需要删除软连接，可以使用以下命令 rm -f <软连接路径>
rm -f /usr/local/bin/nginx
注：/usr/local/bin是一个常用的目录，用于存放用户自行安装的可执行程序。当将程序安装到/usr/local/bin目录时，可以直接在终端中运行该程序，而无需指定完整的路径。
软连接配置成功
删除软连接命令
方法2：配置环境变量
echo "export PATH=$PATH:/home/soft/nginx/sbin" >> /etc/profile && source /etc/profile
删除成功之后我们使用配置环境变量的方法，同样可用`},{header:"常用命令",slug:"常用命令",content:`# 启动nginx
nginx
# 关闭nginx
nginx -s stop
# 重新加载nginx配置
nginx -s reload`}]},{path:"/linux/service%E6%96%87%E4%BB%B6%E7%BC%96%E5%86%99",title:"编写service文件",pathLocale:"/",contents:[{header:"编写service文件",slug:"编写service文件",content:`# vim /etc/systemd/system/<服务名>.service
vim /etc/systemd/system/blog_server.service`},{header:"配置解析",slug:"配置解析",content:`# 描述服务的基本信息
[Unit]
# 描述服务的简短说明
Description=Blog Server [Service]
# 服务类型：简单服务，不会派生出其他进程
Type=simple
# 发生错误或异常退出时自动重启
Restart=always
# 定义服务重启间隔
RestartSec=3s
# 指定服务的工作目录：提供服务执行命令时的参考路径
WorkingDirectory=/home/blog/server
# 启动服务执行命令
ExecStart=/home/blog/server/server [Install]
# 定义为开机启动项
WantedBy=multi-user.target`},{header:"systemctl 常用命令",slug:"systemctl-常用命令",content:`# 重新加载 systemd 服务
systemctl daemon-reload
# 启动服务
systemctl start <服务名>
# 停止服务
systemctl stop <服务名>
# 查看状态
systemctl status <服务名>
# 重启服务
systemctl restart <服务名>
# 开机自启服务
systemctl enable <服务名>
# 关闭开机自启服务
systemctl disable <服务名>`}]},{path:"/linux/%E8%85%BE%E8%AE%AF%E4%BA%91%E5%B8%AE%E5%8A%A9%E6%96%87%E6%A1%A3",title:"腾讯云帮助文档",pathLocale:"/",contents:[{header:"腾讯云帮助文档",slug:"腾讯云帮助文档",content:`ubuntu系统如何使用root用户登录实例
nginx服务器证书安装
免费证书续费流程`}]},{path:"/%E5%89%8D%E7%AB%AF/pm2%E4%BD%BF%E7%94%A8",title:"pm2使用",pathLocale:"/",contents:[{header:"pm2使用",slug:"pm2使用",content:"PM2是一个流行的进程管理工具，用于在生产环境中管理Node.js应用程序。它提供了许多有用的功能，包括： 进程守护：PM2可以启动、停止和重启应用程序，并确保它们在服务器上持续运行，即使发生崩溃或错误也能自动重启。 负载均衡：PM2可以根据系统资源和负载情况自动进行负载均衡，将请求分发给多个应用程序实例，以提高性能和可靠性。 日志管理：PM2可以收集和管理应用程序的日志，包括标准输出和错误输出。它提供了强大的日志管理功能，包括日志轮转、日志切割、日志时间戳等。 环境变量管理：PM2可以管理应用程序的环境变量，包括配置不同环境的变量、保护敏感信息等。 远程部署和管理：PM2提供了远程部署和管理功能，可以通过命令行或Web界面对远程服务器上的应用程序进行管理和监控。 监控和告警：PM2可以监控应用程序的状态、资源使用情况和运行指标，并提供告警功能，以便及时处理异常情况。"},{header:"安装",slug:"安装",content:"npm i pm2 -g"},{header:"常用命令",slug:"常用命令",content:`# 列出所有正在运行的程序
pm2 list
# 查看所有程序的日志
pm2 logs
# 使用 pm2 启动一个 npm run dev 命令
pm2 start --name <自定义进程名称> npm -- run dev
# 重启进程
pm2 restart <需要重启的进程名称>
# 停止进程
pm2 stop <需要停止的进程名称>`}]},{path:"/%E5%89%8D%E7%AB%AF/%E5%89%8D%E7%AB%AF%E5%AD%A6%E4%B9%A0%E8%B7%AF%E7%BA%BF",title:"前端学习路线",pathLocale:"/",contents:[{header:"前端学习路线",slug:"前端学习路线",content:""}]},{path:"/%E5%AF%BC%E8%88%AA/golang",title:"golang",pathLocale:"/",contents:[{header:"golang",slug:"golang",content:""},{header:"web框架",slug:"web框架",content:"gin web框架 gorm golang的orm库(操作数据库)"},{header:"工具",slug:"工具",content:"curlconverter 将curl转换成go，方便于爬虫 gofrp 内网穿透工具"}]},{path:"/%E5%AF%BC%E8%88%AA/%E5%89%8D%E7%AB%AF",title:"前端",pathLocale:"/",contents:[{header:"前端",slug:"前端",content:""},{header:"vue及其生态",slug:"vue及其生态",content:"vue3官网 渐进式JavaScript框架 vue-router Vue.js的官方路由器 pinia Vue.js的状态管理库 vuex Vue.js的状态管理库 webpack 工程化构建工具 vite 下一代前端开发和构建工具 eslint 查找并修复js代码问题"},{header:"vue组件库",slug:"vue组件库",content:"element-plus 饿了么开发的vue3ui组件库 ant-design-vue 阿里开发的vue3ui组件库 arco design 字节跳动开发的vue3ui组件库（有很多坑）"},{header:"vuepress",slug:"vuepress",content:"vuepress-theme-hope 本站使用的vuepress主题 vuepress插件市场 提供丰富的vuepress插件"},{header:"工具",slug:"工具",content:"MDN 前端属性方法查询 Can I use 前端兼容性自查工具 ppcharts echarts示例网站"},{header:"设计",slug:"设计",content:"优设网 设计类网站 配色表 颜色搭配网站 颜色表 颜色搭配网站 站酷 网页设计网站 css布局 布局设计网站（需要外网访问） 100素材网 网站样式素材"},{header:"开源组件",slug:"开源组件",content:"vue-super-flow 前端流程图组件 jsplumb 前端流程图组件 tinymce 富文本编辑器中文文档 时间线组件 时间线组件 echarts 数据可视化组件库"},{header:"其他",slug:"其他",content:"前端知识点汇总 前端知识点汇总 猫云 免费前端开源项目cdn加速 自定义工具函数库 手撕前端函数库"},{header:"文章收藏",slug:"文章收藏",content:"Axios在vue项目中的二次封装 Axios在vue项目中的二次封装"}]},{path:"/%E5%AF%BC%E8%88%AA/%E5%8F%8B%E6%83%85%E9%93%BE%E6%8E%A5",title:"友情链接",pathLocale:"/",contents:[{header:"友情链接",slug:"友情链接",content:""}]},{path:"/%E5%89%8D%E7%AB%AF/js/%E5%88%87%E7%89%87%E4%B8%8A%E4%BC%A0%E3%80%81%E6%96%AD%E7%82%B9%E7%BB%AD%E4%BC%A0",title:"切片上传、断点续传、秒传功能实现",pathLocale:"/",contents:[{header:"切片上传、断点续传、秒传功能实现",slug:"切片上传、断点续传、秒传功能实现",content:`断点续传：允许上传中断后继续上传，而无需从头开始
分片上传：将大文件分割成多个小块（分片），然后逐个上传，这些小块可以并行上传，从而提升长传速度，一旦所有分片完成上传，服务器可以将这些分片合并成完整的文件
秒传：用户上传文件时，校验服务器是否存在完全相同的文件，如果存在，直接跳过上传过程，实现秒传效果
代码地址：https://github.com/guoyz10/big-file-upload`},{header:"前端",slug:"前端",content:""},{header:"获取文件创建切片",slug:"获取文件创建切片",content:`<template> <input ref="fileRef" type="file" @change="fileChange" /> <button @click="upload">上传</button>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { createChunk, createMd5, getExtension } from "./utils";
import { verifyFile, fileUpload, fileMerge } from "./request"; const files = ref<File | null>(null);
const fileRef = ref<HTMLInputElement | null>(null);
const fileChange = () => { if (fileRef.value?.files && fileRef.value?.files?.length > 0) files.value = fileRef.value?.files[0];
}; const upload = async () => { if (!files.value) { return console.log("请选择要上传的文件"); } // 创建切片列表 const chunkList = createChunk(files.value); // 生成文件md5值 const md5 = await createMd5(chunkList); console.log(md5); // 验证文件状态接口 const { uploadedList, url } = await verifyFile( md5, getExtension(files.value.name) ); if (url) { console.log("文件上传成功"); return; } // 获取需要上传的切片 const needUploadList: { file: Blob; filename: string; }[] = []; chunkList.forEach((file: Blob, index: number) => { console.log(file); const filename = \`\${md5}-\${index}\`; if (uploadedList.indexOf(filename) === -1) { needUploadList.push({ filename, file, }); } }); // 上传切片 Promise.all( needUploadList.map((item) => { // console.log('需要上传的切片', item) const data = new FormData(); data.append("file", item.file); data.append("filename", item.filename); data.append("fileMd5", md5); return fileUpload(data); }) ) .then(async (res) => { console.log(res); // 全部上传成功，合并切片 const { code } = await fileMerge( md5, getExtension(files.value?.name as string) ); if (code === 200) { console.log("文件上传成功"); } }) .catch((err) => { console.log(err); });
};
<\/script>`},{header:"工具方法",slug:"工具方法",content:`// utils.ts
import SparkMD5 from "spark-md5"; // 创建切片
export const chunkSize = 10 * 1024 * 1024;
export const createChunk = (file: File) => { console.log(file); const chunkList = []; for (let i = 0; i < file.size; i += chunkSize) { console.log(i, i + chunkSize); chunkList.push(file.slice(i, i + chunkSize)); } console.log(chunkList); return chunkList;
}; // 使用spark-md5生成文件的唯一标识(使用哈希算法md5生成文件的hash值)
export const createMd5: (chunkList: Blob[]) => Promise<string> = ( chunkList: Blob[]
) => { return new Promise((resolve, reject) => { const spark = new SparkMD5.ArrayBuffer(); const loadNext = (index: number) => { const fileReader = new FileReader(); fileReader.readAsArrayBuffer(chunkList[index]); fileReader.onload = (e) => { console.log(index); index++; spark.append(e.target?.result as ArrayBuffer); // 当前切片是最后一个 if (index === chunkList.length) { resolve(spark.end()); // return } else { loadNext(index); } }; fileReader.onerror = (e) => { reject(e); }; }; loadNext(0); });
}; // 获取文件名后缀
export const getExtension = (fileName: string) => { const arr = fileName.split("."); if (arr.length > 0) { return arr[arr.length - 1]; } return "";
};`},{header:"请求方法",slug:"请求方法",content:`import axios from "axios"; const baseUrl = "http://localhost:10000"; // fileMd5: 文件hash值，唯一标识
// extension：文件扩展名
interface verifyFileType { uploadedList: string[]; url: string;
}
export const verifyFile: ( fileMd5: string, extension: string
) => Promise<verifyFileType> = (fileMd5: string, extension: string) => { return new Promise((resolve, reject) => { axios({ url: baseUrl + "/api/upload/verify", method: "POST", data: { fileMd5, extension, }, }) .then((result) => resolve(result.data)) .catch((err) => reject(err)); });
}; export const fileUpload = (data: FormData) => { return new Promise((resolve, reject) => { axios({ url: baseUrl + "/api/upload", data, method: "POST", }) .then((result) => resolve(result.data)) .catch((err) => reject(err)); });
}; // fileMd5: 文件hash值，唯一标识
// extension：文件扩展名
interface fileMergeType { code: number; message: string;
}
export const fileMerge: ( fileMd5: string, extension: string
) => Promise<fileMergeType> = (fileMd5: string, extension: string) => { return new Promise((resolve, reject) => { axios({ url: baseUrl + "/api/upload/merge", method: "POST", data: { fileMd5, extension, }, }) .then((result) => resolve(result.data)) .catch((err) => reject(err)); });
};`},{header:"后端",slug:"后端",content:`const express = require("express");
const fs = require("fs-extra");
const rimraf = require("rimraf");
const bodyParser = require("body-parser");
const formidable = require("express-formidable");
const app = express(); // 配置请求参数解析器
app.use(bodyParser.json({ extended: false })); const filePath = "/static/";
const fileUrl = "http://localhost:10000"; // 配置跨域
app.use(function (req, res, next) { res.setHeader("Access-Control-Allow-Origin", "*"); res.setHeader("Access-Control-Allow-Headers", "*"); next();
}); // 验证文件状态接口
app.post("/api/upload/verify", (req, res) => { // 接受前端传递参数 let { fileMd5, extension } = req.body; console.log(fileMd5, extension); // 判断文件是否存在, 如果存在，秒传：返回上传成功 if (fs.existsSync(__dirname + filePath + fileMd5 + "." + extension)) { res.send({ url: fileUrl + filePath + fileMd5 + "." + extension, code: 200, uploadedList: [], }); return; } // 如果不存在，判断是否有已经上传的切片，如果有，返回已上传切片list const dirPath = __dirname + filePath + fileMd5; let files = []; try { files = fs.readdirSync(dirPath); } catch (e) { // 目录不存在，使用文件的md5值为目录名创建文件 fs.mkdirSync(dirPath); res.send({ url: "", code: 200, uploadedList: [], }); return; } res.send({ url: "", code: 200, uploadedList: files, });
}); // 分片上传接口
app.post("/api/upload", formidable(), (req, res) => { let { file } = req.files; let { filename, fileMd5 } = req.fields; const newPath = __dirname + filePath + fileMd5 + "/" + filename; console.log(newPath); fs.move(file.path, newPath, (err) => { if (err) { console.log(err); res.send("failed"); return; } res.send("success"); });
}); // 合并文件接口
app.post("/api/upload/merge", async (req, res) => { let { fileMd5, extension } = req.body; let files = []; const dirPath = __dirname + filePath + fileMd5; console.log(dirPath); files = fs.readdirSync(dirPath); console.log(files); files.sort((a, b) => a.split("-")[1] - b.split("-")[1]); const fileSavePath = __dirname + filePath + fileMd5 + "." + extension; const writeStream = fs.createWriteStream(fileSavePath); files.map((chunk, index) => { const chunkName = dirPath + "/" + fileMd5 + "-" + index; const readStream = fs.readFileSync(chunkName); writeStream.write(readStream); }); if (rimraf.rimrafSync(dirPath)) { console.log("删除目录成功"); } else { console.log("删除目录失败"); } res.send({ code: 200, message: "上传成功", });
}); app.get("", (req, res) => { res.send("success");
}); app.listen(10000, () => { console.log("大文件上传服务器已启动");
});`}]},{path:"/%E5%89%8D%E7%AB%AF/js/%E5%B8%B8%E7%94%A8%E5%B7%A5%E5%85%B7%E6%96%B9%E6%B3%95",title:"常用工具方法",pathLocale:"/",contents:[{header:"常用工具方法",slug:"常用工具方法",content:""},{header:"下载文件",slug:"下载文件",content:`axios请求中携带responseType: 'blob'参数
export const downJson = (res: Blob, filename: string) => { const content = res const blob = new Blob([content]) const fileName = filename const elink = document.createElement('a') elink.download = fileName elink.style.display = 'none' elink.target = '_blank' elink.href = URL.createObjectURL(blob) document.body.appendChild(elink) elink.click() URL.revokeObjectURL(elink.href) document.body.removeChild(elink)
}`}]},{path:"/%E5%89%8D%E7%AB%AF/js/%E6%8E%A7%E5%88%B6%E5%8F%B0%E6%89%93%E5%8D%B0%E5%89%8D%E7%AB%AF%E9%A1%B5%E9%9D%A2%E5%8A%A0%E8%BD%BD%E6%80%A7%E8%83%BD",title:"前端性能分析",pathLocale:"/",contents:[{header:"前端性能分析",slug:"前端性能分析",content:""},{header:"控制台打印前端页面加载性能",slug:"控制台打印前端页面加载性能",content:'let timing = performance.getEntriesByType("navigation")[0]\nconsole.log(`dns查询耗时：${timing.domainLookupEnd - timing.domainLookupStart}`)\nconsole.log(`tcp连接耗时：${timing.connectEnd - timing.connectStart}`)\nconsole.log(`内容加载耗时：${timing.responseEnd - timing.requestStart}`)\nconsole.log(`首包时间：${timing.responseStart - timing.domainLookupStart}`)\nconsole.log(`首次渲染时间（白屏时间）：${timing.responseEnd - timing.fetchStart}`)\nconsole.log(`首次可交互时间：${timing.domInteractive - timing.fetchStart}`)\nconsole.log(`html加载完成时间：${timing.domContentLoadedEventEnd - timing.fetchStart}`)\nconsole.log(`页面完全加载时间：${timing.loadEventStart - timing.fetchStart}`)'},{header:"控制台性能分析",slug:"控制台性能分析",content:`控制台性能分析截图 录制一段时间
重启页面，录制整个页面加载的过程。比较常用
清除这一次性能录制的记录
上传页面性能录制的数据
下载页面性能录制的数据
多次录制时可选择要展示的性能记录
是否捕捉页面加载过程的截图
是否记录内存变化
垃圾回收，点击了即进行一次垃圾回收 谷歌开发者工具性能分析&调试技巧（https://zhuanlan.zhihu.com/p/409739342）`}]},{path:"/%E5%89%8D%E7%AB%AF/js/%E8%AF%B7%E6%B1%82%E8%BD%AE%E8%AF%A2",title:"请求轮询",pathLocale:"/",contents:[{header:"请求轮询",slug:"请求轮询",content:`需求：大模型评测系统有一个测试执行的功能，需求方要求测试开始执行之后，页面实时获取结果打印日志
解决方案：使用定时器 + 递归轮询发送请求更新页面数据
// 绑定显示日志的 html 容器
const logsContent = ref<HTMLInputElement | null>(null)
// 开始查询日志
let timer: number | undefined
const getLogsInfo = async () => { clearTimeout(timer) // 封装的 axios 请求获取数据 const [err, res] = await benchmarkExecLogsApi({ // 接口传递的参数 environment_name: currentEnv?.value as string, model_name: currentModel?.value.model_name as string, version_name: currentVersion?.value as string }) if (err) return Message.error(err.Message) if (res.code === 200) { logs.info = res.data nextTick(const logsContent = ref<HTMLInputElement | null>(null)() => { // 数据更新后，日志显示部分滚动条滚动到最底部 logsContent.value?.scrollTo({ top: logsContent.value?.scrollHeight }) }) // 根据后端返回判断当前测试是否执行完毕，如果没有执行完毕，5秒后重新调用接口 currentStatus?.value = res.data.status if (currentStatus?.value) { // 如果当前环境处于运行状态，30s后获取该环境的日志 timer = setTimeout(() => { getLogsInfo() }, 5000) } return } Message.error(res.message || 'request failed')
}
getLogsInfo()`}]},{path:"/%E5%89%8D%E7%AB%AF/js/%E8%B7%A8%E5%9F%9F%E5%8F%82%E6%95%B0%E4%BC%A0%E9%80%92",title:"跨域传参处理",pathLocale:"/",contents:[{header:"跨域传参处理",slug:"跨域传参处理",content:`为什么需要跨域传参？
项目主站和管理端不是一个域名，但是老板要求主站跳管理端免登录。
为什么不用单点登录？
老板要求快速完成，单点登录相对于 postMessage 成本较高。
发送端(主站)
let url = "http://localhost:9002"
const targetWindow = window.open(url,"_blank")
setTimeout(() => { // 需要传递的数据，从本地缓存中获取 let token = localStorage.getItem("token") let info = localStorage.getItem("store") const message = JSON.stringify({token,info}); // 要传递的数据 targetWindow.postMessage(message, url);
},100)
接收端(管理端)
// 接受跨域传递的参数
window.addEventListener('message', function(event) { if (event.origin === 'http://localhost:8080' || event.origin === 'http://10.121.118.60:8080') { const message = JSON.parse(event.data); // 接收到的数据 localStorage.setItem("info",message.info) localStorage.setItem("token",message.token) // 刷新页面 window.location.reload() }
});`}]},{path:"/%E5%89%8D%E7%AB%AF/js/%E8%B7%A8%E5%9F%9F%E5%A4%84%E7%90%86",title:"跨域问题产生的原因及解决办法",pathLocale:"/",contents:[{header:"跨域问题产生的原因及解决办法",slug:"跨域问题产生的原因及解决办法",content:""},{header:"原因",slug:"原因",content:"跨域是因为浏览器同源策略的限制，是浏览器的一种安全机制。同源是指协议、域名、端口号完全相同，如果有任意一个不同就会产生跨域"},{header:"解决方法",slug:"解决方法",content:""},{header:"1.jsonp",slug:"_1-jsonp",content:`jsonp 的原理是浏览器的同源策略限制了页面向非同源服务器发送http请求，但是没有限制向非同源服务器请求js脚本。我们可以使用 script、img、a 这些标签来向服务器发送请求，这种方式有两点需要注意。 需要服务端支持
只能使用 get 请求 使用方法如下： 服务端支持jsonp，通过参数获取前端定义的方法名
将返回值类型设置为'text/javascript'
通过将结果放入方法的参数中返回给前端 const express = require("express")
const app = express()
app.get("/jsonp",(req,res) => { callback = req.query.callback let result = { user: "张三" } res.type('text/javascript'); res.send(\`\${callback}(\${JSON.stringify(result)})\`)
})
app.listen(3000,() => { console.log("监听3000端口")
}) 前端发起请求 <!DOCTYPE html>
<html lang="en">
<head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <title>Document</title>
</head> <body> <script> let script = document.createElement("script") let filed = \`callback\${new Date().getTime()}\` window[filed] = (data) => { console.log(data) } script.src = \`http://localhost:3000/jsonp?callback=\${filed}\` document.body.append(script) script.onload = () => { document.body.removeChild(script) delete window[filed] } <\/script>
</body>
</html> 查看结果 结果获取成功`},{header:"2.后端配置允许跨域",slug:"_2-后端配置允许跨域",content:`后端在响应头中添加以下内容(以express为例)
使用express启动一个后端，并暴露一个/hello接口
express服务
然后使用前端去请求这个接口，代码如下：
<!DOCTYPE html>
<html lang="en">
<head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <title>Document</title> <script src="https://cdn.bootcdn.net/ajax/libs/axios/1.5.0/axios.min.js"><\/script>
</head>
<body> <script> axios({ url: "http://localhost:3000/hello", }).then(res => { console.log(res) }) <\/script>
</body>
</html>
打开html对应会发现报了跨域错误
跨域报错
然后我们在响应头中加入Access-Control-Allow-Origin：*，请求就可以成功调用了
添加响应头
前端请求正常`},{header:"3.反向代理",slug:"_3-反向代理",content:"因为同源策略是浏览器的安全策略，所以我们可以通过一个中间服务器去代理发起请求。"},{header:"开发环境",slug:"开发环境",content:`工程化项目的开发环境下，可以使用 webpack 或者 vite 启动一个开发服务器配置代理去将固定前缀的地址转发给后端。下面我们使用vue-cli初始化一个工程化框架并进行配置
vue-cli 创建工程化项目教程https://next.cli.vuejs.org/zh/guide/installation.html 我们将刚才后端加上的响应头注释掉
然后在 main.ts 中使用 axios 发起 http 请求
然后再 webpack 中添加代理服务器的配置 使用axios发起http请求
webpack配置代理服务器
运行项目查看效果，代理请求成功`},{header:"生产环境",slug:"生产环境",content:`生产环境的情况下，我们一般使用 nginx 部署，nginx 的代理配置如下 将打包后的静态资源文件移动到 nginx 的 html 目录下
nginx 配置文件中添加代理配置
访问 nginx 的web服务查看结果 nginx配置文件中添加代理配置
代理请求成功`}]},{path:"/%E7%88%AC%E8%99%AB/%E6%8E%98%E9%87%91%E8%87%AA%E5%8A%A8%E7%AD%BE%E5%88%B0",title:"Golang+selenium实现掘金自动签到",pathLocale:"/",contents:[{header:"Golang+selenium实现掘金自动签到",slug:"golang-selenium实现掘金自动签到",content:""},{header:"使用技术",slug:"使用技术",content:"golang、cron(定时任务)、selenium(浏览器自动化)"},{header:"实现思路",slug:"实现思路",content:`登录掘金
进入签到页面
点击签到按钮
点击去抽奖
点击免费抽奖
定时执行 登录掘金输入密码或者验证码登录时，需要滑动验证，所以需要使用selenium打开已经登录掘金的浏览器，并且保证session不丢失
使用selenium需要对应浏览器和驱动，在此我使用的是chorme浏览器和chromedriver`},{header:"开发步骤",slug:"开发步骤",content:`第一步：确认chrome浏览器版本
谷歌浏览器打开地址栏输入chrome://settings/help
image-20230505000934242
第二步：下载对应版本的chromedriver，如果没有对应的版本，就下载相近的版本
https://registry.npmmirror.com/binary.html?path=chromedriver/
image-20230505001344674
image-20230505001520835
第三步：打开一个chrome浏览器并监听端口
进入chrome的文件目录(右键谷歌浏览器图标，打开文件所在位置)
使用cmd命令行输入以下命令
chrome.exe --remote-debugging-port=9222 --user-data-dir="C:\\selenum\\AutomationProfile"
在打开的浏览器中登录掘金账号
第四步：写代码 新建juejin-auto文件夹将chromedriver解压下来的exe文件放进去 打开终端初始化gomod文件 安装cron和selenium
image-20230505004008042 编写main.go文件
package main import ( "fmt" "math/rand" "time" cron "github.com/robfig/cron/v3" "github.com/tebeka/selenium" "github.com/tebeka/selenium/chrome"
) func main() { c := cron.New() c.AddFunc("30 9 * * *", autoCheckIn) c.Start() select {} // 因为定时任务是协程，所以在这里阻塞一下，防止程序直接退出
} func autoCheckIn() { // 随机延时，防止每天同一时间签到检测 randomSleep(10) ops := []selenium.ServiceOption{} s, _ := selenium.NewChromeDriverService("./chromedriver.exe", 1000, ops...) defer s.Stop() c := selenium.Capabilities{} var args []string args = append(args, "--remote-debugging-port=9222") // 监听9222端口 args = append(args, "--user-data-dir=C:\\\\selenum\\\\AutomationProfile") // 设置浏览器数据文件目录，保证session、cookie不丢失 c.AddChrome(chrome.Capabilities{ Path: "C:\\\\Program Files\\\\Google\\\\Chrome\\\\Application\\\\Chrome.exe", Args: args, }) wd, err := selenium.NewRemote(c, "http://127.0.0.1:1000/wd/hub") if err != nil { fmt.Printf("err: %v\\n", err) } defer wd.Quit() fmt.Println("---进入掘金抽奖页面---") err = wd.Get("https://juejin.cn/user/center/signin?avatar_menu") randomSleep(5) fmt.Println("---点击签到按钮---") we, err := wd.FindElement(selenium.ByCSSSelector, (".code-calender .signin")) we.Click() randomSleep(5) fmt.Println("---点击去抽奖---") we, _ = wd.FindElement(selenium.ByCSSSelector, (".btn-area .btn")) we.Click() randomSleep(5) fmt.Println("---点击免费抽奖---") we, _ = wd.FindElement(selenium.ByCSSSelector, (".cost-box #turntable-item-0")) we.Click() randomSleep(5) fmt.Println("---点击收下奖励---") we, _ = wd.FindElement(selenium.ByCSSSelector, (".byte-modal__body .wrapper .submit")) we.Click() randomSleep(5) fmt.Println("---收下奖励后去百度，避免长时间停留页面检测（猜的）---") wd.Get("https://www.baidu.com")
} func randomSleep(n int) { rand.Seed(time.Now().UnixNano()) // 设置随机数种子 delay := rand.Intn(n) + 3 // 随机延时秒数 time.Sleep(time.Second * time.Duration(delay)) fmt.Println("延时了", delay+3, "秒")
} 运行程序
go run main.go ​ 搞定！！`},{header:"后续计划",slug:"后续计划",content:"开发可以在linux上运行的版本"}]},{path:"/%E7%88%AC%E8%99%AB/%E8%AF%BB%E5%8F%96excel%E7%88%AC%E5%8F%96%E5%AF%B9%E5%BA%94%E7%BD%91%E7%AB%99%E7%94%9F%E6%88%90%E5%AF%BC%E8%88%AA%E4%BF%A1%E6%81%AF",title:"读取excel爬取对应网站生成导航信息",pathLocale:"/",contents:[{header:"读取excel爬取对应网站生成导航信息",slug:"读取excel爬取对应网站生成导航信息",content:""},{header:"为什么要做这个？",slug:"为什么要做这个",content:"我的博客中的导航page是通过手动添加链接，然后去对应网站控制台抓取对应图标，手动写到 markdown 文件中的，维护成本过高。"},{header:"我要做什么？",slug:"我要做什么",content:"使用excel维护网站导航列表，通过代码读取excel自动去对应网站抓取我需要的东西，然后生成markdown文件，并可以进行增量式更新，后续我只需要维护excel表就可以"},{header:"理论成型，实践开始",slug:"理论成型-实践开始",content:""},{header:"1.设计excel表格",slug:"_1-设计excel表格",content:`一个导航需要三个信息，站点名称，站点描述，站点链接
将导航分成两级分类，第一级sheet分文件，将前端，golang，友情链接，第二季分类再表格中体现，按导航的作用分类 设计 excel 表格`},{header:"2.设计数据结构",slug:"_2-设计数据结构",content:`let data = { "前端": { "vue及其生态":[ { title: "", desc: "", icon: "", link: "" } ], "vue及其生态":[ { title: "", desc: "", icon: "", link: "" } ], }, "golang" : { "其他":[ { title: "", desc: "", icon: "", link: "" } ], }
}`},{header:"3.解析excel,组合数据",slug:"_3-解析excel-组合数据",content:`步骤： 使用 node-xlsx 解析 excel，并处理成上面的数据结构
使用 axios 配合 cheerio 向网站发送请求并抓取网站使用的 icon
将最终结果组合成 markdown 优化： 为了防止重复发送请求，我将对应网站的 icon 转换成了 base64 存储到了 txt 文件中，每次重新生成导航文件，都会先判断对应网站的 icon 是否下载过，只有没有下载的文件才会重新发送请求
icon 取的是标签栏的小图标，有些网站没有小图标，我生成一个默认的图标
在开发过程中发现将 .ico 后缀的文件转换成 .png 后缀的文件，图片大小相对较小，所以我将 ico 图标转换成了 png 整体代码如下： index.js
utils.js
package.json
网站导航.xlsx const xlsx = require("node-xlsx")
const { getIcon, genTemplate } = require("./utils.js")
const fs = require("fs") // 创建临时文件夹
fs.mkdirSync('temp', { recursive: true }); // 判断icon目录是否存在
let defaultIcon = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjk1NzMyOTgyMTA3IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE3MjYiIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxwYXRoIGQ9Ik00MTUuNTkwNCA0MjkuNjE5MmM1OS42OTkyIDEwMC4xOTg0IDEzMS4zMjggMTg2LjIxNDQgMjE0LjM3NDQgMjU3Ljc0MDggNDEuNjI1Ni02Ny4yMjU2IDc2LjA4MzItMTM0LjU1MzYgMTAzLjg4NDgtMTk1LjQ4MTYtNS4xMi01LjEyLTkuMzY5Ni0xMS4xMTA0LTEyLjY5NzYtMTcuNjY0LTExOS4zOTg0LTQuNjA4LTIyMS4yODY0LTIyLjA2NzItMzA1LjU2MTYtNDQuNTk1MnpNNzg2Ljg5MjggNTExLjc5NTJjLTI5Ljg0OTYgNjUuNjg5Ni02Ny4yMjU2IDEzOC43MDA4LTExMi43OTM2IDIxMS41MDcyIDQ0LjAzMiAzMy42Mzg0IDkwLjk4MjQgNjMuNTM5MiAxNDAuNzQ4OCA4OS42NTEyIDc5LjAwMTYtNzguMDggMTI3Ljk0ODgtMTg2LjUyMTYgMTI3Ljk0ODgtMzA2LjMyOTYgMC0xMy4wMDQ4LTAuNjE0NC0yNS45MDcyLTEuNzQwOC0zOC42MDQ4LTMzLjQ4NDggMy4wMjA4LTY2LjA0OCA1LjA2ODgtOTcuNDg0OCA2LjE5NTItMTAuNjQ5NiAyMS4wOTQ0LTMxLjg0NjQgMzUuOTQyNC01Ni42Nzg0IDM3LjU4MDh6TTM1My41MzYgMzEwLjIyMDhjMC41NjMyIDAgMS4wNzUyLTAuMTAyNCAxLjYzODQtMC4xMDI0IDM3LjA2ODggMCA2Ny41MzI4IDI3Ljk1NTIgNzEuNjI4OCA2My45NDg4IDgwLjE3OTIgMjEuNzA4OCAxNzcuNTEwNCAzOC43NTg0IDI5Mi4xOTg0IDQzLjQ2ODggMTAuMjQtMjQuOTM0NCAzNC43MTM2LTQyLjU0NzIgNjMuMzg1Ni00Mi41NDcyIDAuMjA0OCAwIDAuNDA5NiAwLjA1MTIgMC42MTQ0IDAuMDUxMiAyMi41MjgtNTguNDE5MiAzOS45ODcyLTExMC44OTkyIDUyLjczNi0xNTIuNjI3MkM3NTYuNzg3MiAxMzIuNTU2OCA2NDEuMDI0IDc1LjgyNzIgNTEyIDc1LjgyNzJjLTgwLjU4ODggMC0xNTYuMDU3NiAyMi4xNjk2LTIyMC41Njk2IDYwLjcyMzIgMTEuNTIgNDMuMDA4IDMwLjkyNDggMTA0LjE5MiA2Mi4xMDU2IDE3My42NzA0ek05MzIuMzUyIDQxMi4xMDg4Yy0xMC43NTItNDguMTI4LTI5LjU5MzYtOTMuMTg0LTU0Ljk4ODgtMTMzLjc4NTZhMjMzNi4yMDQ4IDIzMzYuMjA0OCAwIDAgMS00My4wNTkyIDEyMC42MjcyYzQuNzYxNiA1LjUyOTYgOC42NTI4IDExLjgyNzIgMTEuNDE3NiAxOC42ODhhMTc1OC4yMDggMTc1OC4yMDggMCAwIDAgODYuNjMwNC01LjUyOTZ6TTY0My43ODg4IDc2OS44OTQ0Yy0zOS42Mjg4IDU4LjQxOTItODQuNzM2IDExNS42MDk2LTEzNS40MjQgMTY3LjQyNCAxLjIyODggMCAyLjQwNjQgMC4wNTEyIDMuNjM1MiAwLjA1MTIgOTYuNTEyIDAgMTg1LjY1MTItMzEuNzQ0IDI1Ny40MzM2LTg1LjM1MDQtNDUuNTY4LTI1LjM5NTItODcuMzk4NC01Mi45OTItMTI1LjY0NDgtODIuMTI0OHpNNTk5LjY1NDQgNzM0LjQ2NGMtMTA3LjA1OTItOTAuODgtMTgyLjg4NjQtMTkyLTIzNS40MTc2LTI4MC43Mjk2LTIuOTY5NiAwLjM1ODQtNS45OTA0IDAuNjE0NC05LjA2MjQgMC42MTQ0LTM4LjcwNzIgMC03MC4xNDQtMzAuNTE1Mi03MS45MzYtNjguNzYxNi0wLjkyMTYtMC4zNTg0LTEuODQzMi0wLjcxNjgtMi43MTM2LTEuMDc1Mi02MS42OTYtMjUuMTM5Mi0xMTEuNjY3Mi01Mi4yMjQtMTUwLjczMjgtNzYuOC0zMS4wMjcyIDU5LjQ5NDQtNDguNTg4OCAxMjcuMTgwOC00OC41ODg4IDE5OC45MTIgMCAyMTEuNTA3MiAxNTIuMzcxMiAzODcuMzc5MiAzNTMuMzgyNCA0MjMuODMzNiA2My4xMjk2LTU4LjI2NTYgMTE4LjAxNi0xMjYuMTU2OCAxNjUuMDY4OC0xOTUuOTkzNnpNMzAxLjI2MDggMzMxLjkyOTZjLTI3Ljk1NTItNjIuMzEwNC00Ni43OTY4LTExOC4wMTYtNTkuMTM2LTE2MS4wNzUyQTQzMi45OTg0IDQzMi45OTg0IDAgMCAwIDE1OS4yMzIgMjU5LjMyOGMzNi41NTY4IDIzLjA5MTIgODMuNzYzMiA0OC43OTM2IDE0Mi4wMjg4IDcyLjYwMTZ6IiBmaWxsPSIjNTA1NTg3IiBwLWlkPSIxNzI3Ij48L3BhdGg+PC9zdmc+"
if (!fs.existsSync("icon")) { // 如果目录不存在，则创建目录 fs.mkdirSync("icon", { recursive: true }); fs.writeFileSync("icon/default.txt", defaultIcon)
} // 判断 output 目录是否存在，如果不存在，则创建 output 目录
if (!fs.existsSync("output")) { // 如果目录不存在，则创建目录 fs.mkdirSync("output", { recursive: true });
} const workSheetsFromFile = xlsx.parse(\`\${__dirname}/网站导航.xlsx\`); let data = {}
let completeCount = 0
workSheetsFromFile.forEach(async (item,index) => { if (!data[item.name]) data[item.name] = {} for (let i = 1; i < item.data.length; i++) { let [title,desc,link,category] = item.data[i] if (!category) category = "其他" if (!data[item.name][category]) data[item.name][category] = [] let icon = await getIcon(link) data[item.name][category].push({ title, desc, icon, link }) } completeCount++ console.log(completeCount,workSheetsFromFile.length) if (completeCount === workSheetsFromFile.length) { // 处理完成数量等于总sheet数 for (let key in data) { let result = \`---
article: false
sidebar: false
breadcrumb: false
pageInfo: false
editLink: false
--- # \${key} \` for(let key1 in data[key]) { result += \` ## \${key1}
<div class="vp-card-container"> \` data[key][key1].forEach(item => { if (item.title && item.link && item.icon) { let content = genTemplate(item.title,item.desc || '',item.link,item.icon) result += content } }) result += \`</div>\` } fs.writeFile(\`output/\${key}.md\`, result, (err) => { if (err) { console.error(\`\${key}.md写入文件失败:\`, err); } else { console.log(\`\${key}.md写入成功\`); } }); } // 删除临时文件夹 fs.rm('temp', { recursive: true },(err) => { if (err) { console.error('临时文件删除失败', err); return; } console.log('临时文件删除成功'); }) }
}) const axios = require("axios")
const cheerio = require('cheerio');
const fs = require("fs")
const https = require('https');
const ICO = require("icojs") const agent = new https.Agent({ rejectUnauthorized: false
}); // 发送请求获取网站icon
const request = async (url) => { let option = {} if (url.indexOf('.svg') === -1) { option["responseType"] = 'arraybuffer' option["httpsAgent"] = agent } const response = await axios.get(url,option); return response
} // 从域名中获取协议
function getProtocolFromUrl(url) { if(url=="") return '' const regex = /^(https?)/i; const match = url.match(regex); return match[1];
} // 从域名中获取域名
function getDomainFromUrl(url) { if(url=="") return '' const regex = /^https?:\\/\\/([^\\/]+)/i; const match = url.match(regex); return match[1];
}
const imgUrl = async (url,data) => { if (url.indexOf(".ico") !== -1) { let icoName = \`temp/\${new Date().getTime()}\` fs.writeFileSync(\`\${icoName}.ico\`,data) const buffer = fs.readFileSync(\`\${icoName}.ico\`) let result = '' let images = await ICO.parse(buffer,"image/png") images.forEach( image => { const bufferdata = Buffer.from(image.buffer) result = \`data:image/png;base64,\${bufferdata.toString("base64")}\` }) return result } if (url.indexOf('.svg') === -1) { // 非svg // saveIcon(getDomainFromUrl(url),\`data:image/png;base64,\${Buffer.from(data).toString("base64")}\`) return \`data:image/png;base64,\${Buffer.from(data).toString("base64")}\` } else { // svg // saveIcon(getDomainFromUrl(url),\`data:image/svg+xml;base64,\${Buffer.from(data).toString("base64")}\`) return \`data:image/svg+xml;base64,\${Buffer.from(data).toString("base64")}\` }
}
const getIcon = async (url) => { if (!url) return let protocol = getProtocolFromUrl(url) let domain = getDomainFromUrl(url) // 查看 icon 是否已经被存储，如果被存储，则从存储中取出 let readResult = getIconContent(domain) if (readResult === '') { return getIconContent('default') } if (readResult) { return readResult } let response = null try { response = await request(url) } catch (e) { console.log("网站无法访问,保存空文件夹，防止后续重新发送请求") saveIcon(domain,'') return getIconContent('default') } const $ = cheerio.load(String(response.data)); let iconUrl = '' // console.log("link-length:",$('link').length) $('link').map(function(i,el) { // 如果地址已经存在，跳过当前循环 if (iconUrl) return // if ($(this).attr("rel").toLowerCase().indexOf("icon") !== -1) {} if ($(this).attr("rel").toLowerCase().indexOf("icon") !== -1) { href = $(this).prop("href") if (href.indexOf("http") !== -1) { // 跟当前链接域名不同 iconUrl = href } else if (href.startsWith("//")) { // 判断链接是否以 "//" 开头,像站酷之类的网站 iconUrl = protocol + ":" + href } else { iconUrl = protocol + "://" + domain + href } return } // console.log("数组长度",$("link").length,"===","当前是：",i) else if ($("link").length - 1 === i && !iconUrl) { // 查看默认图标是否设置 // console.log("没有在代码中明显标出",url) iconUrl = protocol + "://" + domain + "/favicon.ico" } }) let iconResponse = null try { iconResponse = await request(iconUrl) } catch (e) { saveIcon(domain,'') return getIconContent('default') } let imgBase64Url = await imgUrl(iconUrl,iconResponse.data) saveIcon(domain,imgBase64Url) return imgBase64Url
} // 生成导航模板
const genTemplate = (title,desc,link,icon) => { return \`
<a href="\${link}" target="_blank" class="vp-card"> <img class="vp-card-logo" src="\${icon}"> <div class="vp-card-content"> <div class="vp-card-title">\${title}</div> <hr/> <div class="vp-card-desc">\${desc}</div> </div>
</a> \`
} // 存储icon，如果有存储，则使用存储，不发送请求
// 写入文件，文件名使用不带协议的 icon 地址
const saveIcon = (name,content) => { fs.writeFile(\`icon/\${name}.txt\`, content, (err) => { if (err) { console.error(\`\${name} 的 icon 保存失败\`); } else { console.error(\`\${name} 的 icon 保存成功\`); } });
} const getIconContent = (name) => { try { const data = fs.readFileSync(\`icon/\${name}.txt\`, 'utf8') console.log(\`\${name} 从内容中读取\`) return data || '' } catch (e) { console.log(\`\${name} 文件没有被存储\`) return false }
} module.exports = { getIcon, genTemplate
} { "description": "", "scripts": { "start": "node index.js" }, "dependencies": { "axios": "^1.5.0", "cheerio": "^1.0.0-rc.12", "icojs": "^0.17.1", "node-xlsx": "^0.23.0" }
} 上面设计的excel`},{header:"4.使用方法",slug:"_4-使用方法",content:`修改excel
安装依赖npm i
运行node index.js`},{header:"5.效果展示",slug:"_5-效果展示",content:"效果展示"}]},{path:"/%E5%89%8D%E7%AB%AF/vue/arco%20desion%20%E6%89%8B%E5%8A%A8%E8%A7%A6%E5%8F%91%E7%BA%A7%E8%81%94%E9%80%89%E6%8B%A9%E6%A1%86%E9%80%89%E9%A1%B9%E6%B8%85%E7%A9%BA",title:"arco desion 手动触发级联选择框选项清空",pathLocale:"/",contents:[{header:"arco desion 手动触发级联选择框选项清空",slug:"arco-desion-手动触发级联选择框选项清空",content:`功能实现： 限制选项数量，最多选三个
点击按钮触发级联选择选项清空（文档中无对应方法）
根据当前级联选项是否为空修改按钮显示状态 <template> <a-card :style="{ width: '100%' }"> <a-button shape="round" v-if="!needClear" style="margin-right: 20px" >Clear filter</a-button > <a-button shape="round" v-if="needClear" type="primary" style="margin-right: 20px" @click="handleClearSelect" >Clear filter</a-button > <span style="margin-right: 20px">fliter:</span> <a-cascader :options="options" :default-value="['datunli']" :style="{ width: '320px' }" placeholder="Please select ..." multiple v-model="selected" @change="selectChange" :format-label="format" allow-clear @clear="clearSelect" ref="levelSelect" :max-tag-count="1" /> </a-card>
</template> <script setup lang="ts">
import { levelSelectValueType } from '@/types/component'
import { CascaderInstance, CascaderOption, Message } from '@arco-design/web-vue'
import { computed, reactive, ref, nextTick } from 'vue' // 级联选择框的ref对象
const levelSelect = ref<CascaderInstance | undefined>(undefined)
// 级联选择框的绑定值
const selected: levelSelectValueType = reactive([]) // 选项修改后，同步修改对应的绑定值
const selectChange = (val: levelSelectValueType) => { if ((val as levelSelectValueType[]).length > 3) { return Message.warning('最多选三个') } selected.length = 0 selected.push(...(val as levelSelectValueType[]))
} // 组件的clear事件触发后，清空对应的绑定值
const clearSelect = () => { selected.length = 0
} // 手动触发清除级联选择框数据
const handleClearSelect = () => { nextTick(() => { const e = { stopPropagation: () => { console.log('清除选中数据') } } // 级联选择框实例的handleClear方法需要传递一个时间对象阻止冒泡 // 由于我们外部触发清空，所以不需要阻止冒泡 // 但是需要传递给他一个包含阻止冒泡方法的参数 levelSelect.value?.handleClear(e as MouseEvent) }) Message.success('清除选中')
} // 是否需要清空级联选择
const needClear = computed(() => { return selected.length !== 0
}) // 级联选择框数据
const options = [ { value: 'Language', label: 'Language', children: [ { value: 'Coreference Resolution', label: 'Coreference Resolution', children: [ { value: 'WSC', label: 'WSC' }, { value: 'CLUEWSC', label: 'CLUEWSC' } ] }, { value: 'Idiom Learning', label: 'Idiom Learning', children: [ { value: 'CHID', label: 'CHID' } ] } ] }, { value: 'Knowledge', label: 'Knowledge', children: [ { value: 'Knowledge Question Answering', label: 'Knowledge Question Answering', children: [ { value: 'BoolQ', label: 'BoolQ' }, { value: 'CommonSenseQA', label: 'CommonSenseQA' } ] } ] }
] // 格式化级联选择框显示
const format = (options: CascaderOption[]) => { return options[options.length - 1].label as string
}
<\/script>`}]},{path:"/%E5%89%8D%E7%AB%AF/vue/vue-router%E7%9A%84history%E8%B7%AF%E7%94%B1%E9%83%A8%E7%BD%B2nginx%E5%88%B7%E6%96%B0404%E9%97%AE%E9%A2%98%E8%A7%A3%E5%86%B3",title:"vue-router的history路由部署nginx刷新404问题解决",pathLocale:"/",contents:[{header:"vue-router的history路由部署nginx刷新404问题解决",slug:"vue-router的history路由部署nginx刷新404问题解决",content:""},{header:"问题",slug:"问题",content:"如果用histroy模式操作切换页面的话，URL会被改变、浏览器不会刷新页面也不会往服务端发请求，但会触发代码内的监听事件从而改变页面内容，所以无需用到服务器也可以自由切换页面了。但是这里有个很核心的点就是URL会改变，即有新的URL诞生，所以如果这时用户主动刷新页面（F5），浏览器发送给服务端的是新的URL，所以服务端要做适配，配置一个合理的规则让这些URL返回的都是同一个index.html"},{header:"history路由和hash路由的区别？",slug:"history路由和hash路由的区别",content:`hash 路由模式地址中有 #，history路由模式地址中没有 #
hash 路由模式是基于锚点链接，以及 onhashchange 事件，history 路由模式是基于 h5 的 history API 以及监听 popstate 事件`},{header:"解决方案",slug:"解决方案",content:`server { listen 80; server_name your_domain.com; location / { root /path/to/vue/dist; # Vue应用的构建输出目录 try_files $uri $uri/ /index.html; }
}
try_files指令按照从左到右的顺序逐个查找文件路径，并返回第一个找到的文件。如果没有找到任何文件，则会将请求转发给uri指定的备用URI。
在上面的配置中，当请求的文件路径（$uri）不存在时，Nginx会尝试查找以$uri/结尾的目录。如果目录也不存在，则会将请求转发到/index.html备用URI`}]},{path:"/%E5%89%8D%E7%AB%AF/vue/vue%E7%9B%91%E5%90%ACdom%E5%85%83%E7%B4%A0%E5%8F%98%E5%8C%96",title:"vue监听dom元素变化",pathLocale:"/",contents:[{header:"vue监听dom元素变化",slug:"vue监听dom元素变化",content:`场景：适用于echarts随容器大小变化自适应的情况
好处：比直接监听浏览器页面变化更好，有些时候可能会出现浏览器页面宽高没变，但是dom容器宽高发生变化的可能。`},{header:"html版本",slug:"html版本",content:`以下代码可拖拽浏览器宽度查看效果 <div class="content"></div>
<div class="info"></div>
let resizeObserver = new ResizeObserver((entries) => { let { contentRect } = entries[0] console.log(entries) console.log(contentRect.width) document.querySelector(".info").innerHTML = \`content宽高：\${contentRect.width}*\${contentRect.height}\`
})
resizeObserver.observe(document.querySelector(".content"))
.content{ width: 30%; height: 100px; background-color: #999;
}
<!DOCTYPE html>
<html lang="en">
<head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <title>监听dom宽高变化</title> <style> .content{ width: 30%; height: 100px; background-color: #999; } </style>
</head>
<body> <div class="content"></div> <div class="info"></div> <script> let resizeObserver = new ResizeObserver((entries) => { let { contentRect } = entries[0] console.log(entries) console.log(contentRect.width) document.querySelector(".info").innerHTML = \` content宽高：\${contentRect.width}*\${contentRect.height} \` }) resizeObserver.observe(document.querySelector(".content")) <\/script>
</body>
</html>`},{header:"vue版本",slug:"vue版本",content:`<template> <div style="width: 100%; height: 100%" ref="chartDom"></div>
</template> <script lang="ts" setup>
import { onMounted, ref, watch, markRaw, onBeforeUnmount } from 'vue'
import * as echarts from 'echarts' const chartDom = ref(null)
const myChart = ref(null)
const props = defineProps({ // echarts图表配置 options: { type: Object, required: true }
}) const resizeHandle = () => { myChart.value.resize() myChart.value.setOption(props.options, true)
}
const resizeObserver = new ResizeObserver(() => { resizeHandle()
})
onMounted(() => { myChart.value = markRaw(echarts.init(chartDom.value)) myChart.value.setOption(props.options, true) // window.addEventListener('resize', resizeHandle) if (chartDom.value) { console.log('echarts图注入监听') resizeObserver.observe(chartDom.value) }
}) watch( () => props.options, (newOptions) => { myChart.value.setOption(newOptions, true) }, { deep: true }
)
onBeforeUnmount(() => { // window.removeEventListener('resize', resizeHandle) if (chartDom.value) { console.log('echarts图注销监听') resizeObserver.unobserve(chartDom.value) }
})
<\/script>`}]},{path:"/%E5%89%8D%E7%AB%AF/vue/%E4%BD%BF%E7%94%A8%E5%8F%8Ctoken%E6%9C%BA%E5%88%B6%E5%AE%9E%E7%8E%B0%E6%97%A0%E6%84%9F%E5%88%B7%E6%96%B0%E5%8A%9F%E8%83%BD",title:"使用双token机制实现无感刷新功能",pathLocale:"/",contents:[{header:"使用双token机制实现无感刷新功能",slug:"使用双token机制实现无感刷新功能",content:""}]},{path:"/%E5%89%8D%E7%AB%AF/vue/%E5%89%8D%E7%AB%AF%E7%9B%91%E6%8E%A7",title:"前端监控系统Sentry使用",pathLocale:"/",contents:[{header:"前端监控系统Sentry使用",slug:"前端监控系统sentry使用",content:"前提：需要安装docker和python3"},{header:"安装",slug:"安装",content:`sentry自建仓库：https://github.com/getsentry/self-hosted
# 拉代码
git clone https://github.com/getsentry/self-hosted.git
cd self-hosted
./install.sh
docker-compose up -d`},{header:"生成key",slug:"生成key",content:`# 生成key
docker-compose run --rm web config generate-secret-key
生成 key
将生成的key填入 .env 文件
生成 key 填入 .env 文件`},{header:"更新配置",slug:"更新配置",content:`如果第一次没有创建用户，可以使用这个命令创建管理员用户（需要输入邮箱、密码、确认密码）
docker-compose run --rm web upgrade`},{header:"配置邮件服务",slug:"配置邮件服务",content:`设置 sentry/config.yml
mail.host: 'smtp.qq.com'
mail.port: 25
mail.username: '78300406@qq.com'
mail.password: 'XXXXXXX' # 是邮件服务的授权码，不是邮箱的密码
mail.use-tls: false
## The email address to send on behalf of
mail.from: '78300406@qq.com'`},{header:"修改配置应该先关闭再启动",slug:"修改配置应该先关闭再启动",content:`# 关闭
docker-compose down
# 启动
docker-compose up -d
删除所有跟sentry的相关镜像
docker rm -f \`docker ps -a | grep sentry | awk '{print $1}'\``},{header:"邮箱配置",slug:"邮箱配置",content:""},{header:"语言配置",slug:"语言配置",content:""},{header:"使用",slug:"使用",content:""}]},{path:"/%E5%89%8D%E7%AB%AF/%E9%81%87%E5%88%B0%E7%9A%84%E9%97%AE%E9%A2%98/%E5%BC%82%E6%AD%A5%E8%AF%B7%E6%B1%82%E5%85%88%E5%8F%91%E5%90%8E%E8%87%B3%E7%9A%84%E8%A7%A3%E5%86%B3%E6%96%B9%E6%B3%95",title:"异步请求先发后至的解决方法",pathLocale:"/",contents:[{header:"异步请求先发后至的解决方法",slug:"异步请求先发后至的解决方法",content:`取消之前相同的请求（调用axios的取消请求方法）
防抖函数（请求接口很慢的情况下，同样不解决问题）
强制改为同步（影响页面）
添加状态位，判断当前请求是不是最新请求`}]},{path:"/%E5%89%8D%E7%AB%AF/%E9%81%87%E5%88%B0%E7%9A%84%E9%97%AE%E9%A2%98/%E6%96%87%E4%BB%B6%E7%9B%91%E6%8E%A7%E8%B6%85%E5%87%BA%E7%B3%BB%E7%BB%9F%E9%99%90%E5%88%B6",title:"报错：System limit for number of file watchers reached",pathLocale:"/",contents:[{header:"报错：System limit for number of file watchers reached",slug:"报错-system-limit-for-number-of-file-watchers-reached",content:`使用 pm2 启动 npm run dev 的时候遇到以下错误
文件监控超出系统限制报错
"System limit for number of file watchers reached"报错表示系统已达到文件监视器的数量限制。文件监视器用于监控文件系统中的变化，比如文件的创建、修改和删除等操作。当文件监视器数量达到系统限制时，无法再创建新的文件监视器，从而导致该错误的发生。（启动的 npm run dev 过多）
解决方法：
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf
sudo sysctl -p
命令解析 echo命令用于输出文本内容。
fs.inotify.max_user_watches=524288是要输出的文本内容，表示将fs.inotify.max_user_watches参数的值设置为524288。
|是管道符号，用于将echo命令的输出结果传递给后面的命令。
sudo用于以管理员权限执行后续的命令。
tee命令用于将输入的数据同时输出到屏幕和文件中。
-a选项表示以追加模式打开文件，如果文件不存在则创建文件。
/etc/sysctl.conf是要追加内容的文件路径。
sudo sysctl -p命令使配置修改生效 sysctl.conf是一个配置文件，用于定义和调整内核参数。通过修改sysctl.conf文件，可以更改系统的各种内核参数，如网络参数、文件系统参数、虚拟内存参数等。`}]},{path:"/%E5%89%8D%E7%AB%AF/%E9%9D%A2%E8%AF%95%E9%A2%98/html-css",title:"HTML、CSS知识点",pathLocale:"/",contents:[{header:"HTML、CSS知识点",slug:"html、css知识点",content:""},{header:"有哪些常用的HTML标签",slug:"有哪些常用的html标签",content:`核心标签： <!DOCTYPE>文档类型声明
<html>HTML文档的根标签
<head>文档的头部信息
<title>文档的标题信息
<body>文档的主题内容信息 文本标签： <h1>到<h6>标题标签，用于定义标题级别，依次递减
<p>用于定义段落
<a>用于创建超链接，通过 href 属性指定链接目标
<span>用于包裹行内元素
<div>用于组合布局其他元素
<i>文本斜体显示
<b>文本加粗显示
<br>用于换行显示
<hr>添加一条分割线
<del>删除线 列表标签： <ul>无序列表标签
<ol>有序列表标签
<li>列表项标签 图像标签 <img>用于插入图像，通过 src 属性指定图像地址 表格标签 <table>用于创建表格
<tr>用于定义表格的行
<td>用于定义表格的列
<th>用于定义表格表头 表单标签 <form>用于定义表单
<input>用于定义输入框
<textarea>用于定义文本域
<button>用于定义按钮
<select>用于定义选择框
<option>用于定义选择项
<label>用于表单标签的标签 音频标签 <audio>用于嵌入音频文件
<source>在<audio>标签内使用，指定不同格式的视频源，浏览器会选择支持的格式进行播放
<track>用于指定视频的文本轨道，如字幕或描述 视频标签 <video>用于嵌入视频文件
<source>在<video>标签内使用，指定不同格式的视频源，浏览器会选择支持的格式进行播放
<track>用于指定视频的文本轨道，如字幕或描述 嵌入内容标签 <iframe>用于嵌入其他网页`},{header:"html5的新特性有哪些？css3的新特性有哪些？",slug:"html5的新特性有哪些-css3的新特性有哪些",content:`h5新特性： 自定义属性 data-id
语义化标签（header、nav、footer、aside、article、section）
音频、视频标签（audio，video）
canvas
localStorage、sessionStorage
表单控件 calendar，date，time，email，url，search，tel，file，number
新技术 webworker，websocket，geolocation
拖拽释放API c3新特性： 颜色：新增 RGBA、HSLA模式
文字阴影（text-shadow）
边框：圆角（border-radius）边框阴影（box-shadow）
盒子模型：box-sizing
背景：background-size background-origin background-clip
渐变：linera-gradient radial-gradient
字体图标 iconfont/icomoon
弹性布局 flex
图片边框 border-image
2d转换/3d转换 transform: translate(x,y) rotate(x,y) skew(x,y) scale(x,y)
自定义动画 animate @keyfrom
媒体查询 多栏布局 @media screen and (width:800px)
过渡 ：transition可实现属性渐变`},{header:"iframe标签的作用是什么？有哪些优缺点",slug:"iframe标签的作用是什么-有哪些优缺点",content:`作用：用于在网页中嵌入另一个网页或外部资源
优点： 灵活：可以将不同来源的内容继承到一个页面中
可复用：可以在多个页面中重复使用同一个 iframe 标签，减少代码重复
可以使用html5的 postMessage API标签实现跨域通信 缺点： SEO影响：搜索引擎可能无法正确解析 iframe 中的内容
iframe 会阻塞主页面的 onload 事件，影响加载性能
浏览器的后退按钮无效（只能针对实现当前光标所在页面的前进与后退）
安全性差：iframe 标签可以被用于进行点击劫持、钓鱼等安全攻击`},{header:"什么是HTML语义化？为什么要语义化？常见的语义化标签有哪些？",slug:"什么是html语义化-为什么要语义化-常见的语义化标签有哪些",content:`什么是语义化标签：具有语义的标签，可以清晰的展示标签中内容的作用和用途
问什么要语义化： 方便代码的阅读和维护
有利于搜索引擎优化，提高网站的搜索排名 常见的语义化标签： <header>定义文档的头部
<nav>定义文档的导航链接部分（无序列表）
<main>定义文档的主要内容
<section>定义文档分区（有语义化的div）
<article>注意内容
<aside>侧边栏
<footer>定义文档的底部
<em>文本斜体显示（有语义化的i）
<strong>文本加粗显示（有语义化的b）`},{header:"如何使一个盒子水平垂直居中？",slug:"如何使一个盒子水平垂直居中",content:`方法1：使用相对定位＋位移 <div class="parent"> <div class="child"> </div>
</div>
.parent { width: 300px; height: 300px; border:1px solid #000; position: relative;
}
.child { width: 100px; height: 100px; position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%); border:1px solid #000;
}
方法2：使用flex布局 <div class="parent"> <div class="child"> </div>
</div>
.parent { width: 300px; height: 300px; border:1px solid #000; display: flex; justify-content: center; align-items: center;
}
.child { width: 100px; height: 100px; border:1px solid #000;
}
方法3：使用margin:auto <div class="parent"> <div class="child"> </div>
</div>
.parent { width: 300px; height: 300px; border:1px solid #000; position: relative;
}
.child { width: 100px; height: 100px; border:1px solid #000; margin: auto; position: absolute; top: 0; left: 0; bottom: 0; right: 0;
}`},{header:"如何实现双飞翼（圣杯）布局",slug:"如何实现双飞翼-圣杯-布局",content:`方法1： 父盒子设置左右 padding 值
给左右盒子的 width 设置为父盒子的 padding，分别定位到 padding 处
中间的盒子自适应 <div class="parent"> <div class="left"> </div> <div class="center"> </div> <div class="right"> </div>
</div>
.parent { width: 100%; padding: 0 100px; background: pink; position: relative; box-sizing: border-box;
}
.left,.right { width: 100px; height: 100px; position: absolute; background: yellow; top: 0;
}
.left{ left:0;
}
.right{ right:0;
}
.center{ background: blue; height: 100px;
}
方法2：使用 flex 布局实现两侧固定，中间自适应 <div class="parent"> <div class="left"> </div> <div class="center"> </div> <div class="right"> </div>
</div>
.parent { width: 100%; background: pink; display: flex;
}
.left,.right { width: 100px; height: 100px; background: yellow;
}
.center{ background: blue; flex: 1;
}`},{header:"CSS盒模型",slug:"css盒模型",content:`css盒模型有两类 标准盒模型（W3C标准）：盒子大小 = content + padding + border + margin
width、height 指的是内容区域的 content 的宽高 怪异盒模型（IE标准）：盒子大小 = width（content + padding + border）+ margin
width、height 指的是内容、边框、内边距的总宽高 我们可以通过 box-sizing 设置使用标准盒模型（content-box）还是怪异盒模型（border-box）`},{header:"CSS选择器有哪些？优先级分别是什么？",slug:"css选择器有哪些-优先级分别是什么",content:`标签选择器、类选择器、id选择器、属性选择器、伪类选择器、伪元素选择器、后代选择器、子元素选择器、相邻兄弟选择器、通用兄弟选择器
优先级：!important > 行内样式(元素的 style 属性) > id选择器 > 类选择器、属性选择器、伪类选择器 > 元素选择器、伪元素选择器 > 通配符选择器 > 继承样式`},{header:"有哪些常见的CSS布局？",slug:"有哪些常见的css布局",content:`流式布局：元素按照其在 HTML 中出现的顺序自上而下排列
浮动布局：设置元素的 float 属性，使元素浮动在父元素的左侧或右侧
定位布局：设置元素的 position 属性，使元素相对于其父元素或文档定位
弹性盒子布局：设置元素的 display 属性为 flex，使用弹性盒子进行布局
网格布局：设置元素的 display 属性为 grid，使用网格模型进行布局
响应式布局：通过使用媒体查询或弹性布局等技术，使网页在分辨率不同的设备上具有不同的布局和样式`},{header:"哪些CSS属性可以继承？",slug:"哪些css属性可以继承",content:`字体：font、font-family、font-weight、font-size、font-style
文本：color、line-height、word-spacing(设置单词之间的间距)、text-indent、text-align
元素可见性：visibility
列表布局属性：list-style`},{header:"怎么用 CSS 实现一个宽高自适应的正方形？",slug:"怎么用-css-实现一个宽高自适应的正方形",content:`<div class="square">
</div>
.square { width: 30%; height: 0; padding-top: 30%; background: pink;
}`},{header:"CSS 中有哪些方式可以隐藏页面元素？有什么区别?",slug:"css-中有哪些方式可以隐藏页面元素-有什么区别",content:`display:none完全移除元素，不占据布局空间，元素不可见，无法通过CSS或JavaScript重新显示
visibility:hidden元素在页面中依然存在，占据页面布局空间，但是不可见，可以通过CSS和JavaScript重新显示
opcity:0元素依然占据页面布局空间，但是完全透明，不可见，通过CSS或JavaScript重新显示`},{header:"什么是 CSS 工程化？你用过哪些相关的工具？",slug:"什么是-css-工程化-你用过哪些相关的工具",content:""},{header:"怎么使用 CSS3 来实现动画？你实现过哪些动画？",slug:"怎么使用-css3-来实现动画-你实现过哪些动画",content:""},{header:"CSS 有哪些常用单位？这些单位各有什么区别？",slug:"css-有哪些常用单位-这些单位各有什么区别",content:""},{header:"有哪些 CSS 性能优化的操作或技巧？",slug:"有哪些-css-性能优化的操作或技巧",content:""},{header:"用 CSS 和 JS 来实现动画分别有哪些优缺点？",slug:"用-css-和-js-来实现动画分别有哪些优缺点",content:""},{header:"什么是响应式设计？响应式设计的基本原理是什么？如何进行实现？",slug:"什么是响应式设计-响应式设计的基本原理是什么-如何进行实现",content:""}]},{path:"/%E5%89%8D%E7%AB%AF/%E9%9D%A2%E8%AF%95%E9%A2%98/js%E5%9F%BA%E7%A1%80",title:"js",pathLocale:"/",contents:[{header:"js",slug:"js",content:""},{header:"数组的常用方法",slug:"数组的常用方法",content:`push()：向数组末尾添加一个或多个元素，并返回新的数组长度4
pop()：删除数组最后一个元素，并返回被删除的元素
shift()：删除数组的第一个元素，并返回被删除的元素，后续元素会向前移动一个位置
unshift()：像数组开头添加一个或多个元素，并返回新的数组长度，同时，原有元素会后移一个位置
concat()：将两个或多个数组合并成一个新的数组，并返回该数组
slice()：返回一个新的数组，包含原数组中指定的部分元素。原数组不会被修改
splice()：从数组中添加、删除或替换元素，并返回被删除的元素，原数组会被修改
indexOf()：返回数组中第一个匹配到的元素的索引，如果没有找到则返回-1
includes()：判断数组中是否包含某个元素，返回一个布尔值
forEach()：遍历数组并对每个元素执行指定操作
map()：创建一个新数组，包含对原数组中每个元素执行指定操作后的结果
filter()：创建一个新数组，包含符合条件的所有元素
reverse()：反转数组中元素的顺序
find()：返回数组中满足条件的第一个元素，如果没有找到则返回undefined
findIndex()：返回数组中满足条件的第一个元素的索引，如果没有找到则返回-1
some()：检测数组中是否至少有一个元素满足条件，返回一个布尔值
every()：检测数组中是否所有元素都满足条件，返回一个布尔值
join()：将数组中的所有元素以指定分割符连接成一个字符串`},{header:"如何判断变量的类型",slug:"如何判断变量的类型",content:`typeof 可以判断一个变量的类型
使用 typeof 判断数组、对象、null 返回的都是object
可以先使用 Array.isArray(value) 判断是不是数组，然后判断值是否不等于 null，最后就可以确定被判断的值是对象了
// 判断值类型的工具函数
function judgeType(value) { if (typeof value !== "object") return typeof value if (value === null) return "null" if (Array.isArray(value)) return "array" return "object"
}
instanceof 用于判断一个对象是否属于某个构造函数的实例
// 用法:object是对象 constructor 是构造函数
object instanceof constructor`},{header:"JavaScript中如何终止网络请求",slug:"javascript中如何终止网络请求",content:""},{header:"什么是BOM和DOM？分别列举一些他们的函数？",slug:"什么是bom和dom-分别列举一些他们的函数",content:""},{header:"深拷贝和浅拷贝有什么区别？JS怎么实现深拷贝？",slug:"深拷贝和浅拷贝有什么区别-js怎么实现深拷贝",content:""},{header:"如何使用JavaScript来判断用户设备类型？比如判断是PC访问还是移动端访问？",slug:"如何使用javascript来判断用户设备类型-比如判断是pc访问还是移动端访问",content:""},{header:"JS数组是如何在内存中存储的？",slug:"js数组是如何在内存中存储的",content:""},{header:"JS中的Map和WeakMap有什么区别？",slug:"js中的map和weakmap有什么区别",content:""},{header:"JS中怎么阻止事件冒泡和事件默认行为？",slug:"js中怎么阻止事件冒泡和事件默认行为",content:""},{header:"什么防抖和节流？如何使用JS编码实现？",slug:"什么防抖和节流-如何使用js编码实现",content:""},{header:"什么是虚拟DOM？使用虚拟DOM一定会更快吗？(可以结合vue中的diff算法看一看)",slug:"什么是虚拟dom-使用虚拟dom一定会更快吗-可以结合vue中的diff算法看一看",content:""},{header:"JS 脚本延迟加载的方式有哪些？",slug:"js-脚本延迟加载的方式有哪些",content:""},{header:"什么是 JS 对象的可枚举性（enumerable）？",slug:"什么是-js-对象的可枚举性-enumerable",content:""},{header:"JS 如何顺序执行 10 个异步任务？",slug:"js-如何顺序执行-10-个异步任务",content:""},{header:"介绍一下 JS 中 setTimeout 的运行机制？",slug:"介绍一下-js-中-settimeout-的运行机制",content:""},{header:"怎么用 JS 实现大型文件上传？要考虑哪些问题？",slug:"怎么用-js-实现大型文件上传-要考虑哪些问题",content:""},{header:"为什么 JS 要被设计为单线程？",slug:"为什么-js-要被设计为单线程",content:""},{header:"JS 代码中的 use strict 是什么？有什么作用？",slug:"js-代码中的-use-strict-是什么-有什么作用",content:""},{header:"如何使用 JS 判断某个字符串长度（要求支持 Emoji 表情）？",slug:"如何使用-js-判断某个字符串长度-要求支持-emoji-表情",content:""},{header:"JS 在什么情况下会存在数字精度丢失的问题，如何解决？",slug:"js-在什么情况下会存在数字精度丢失的问题-如何解决",content:""},{header:"说说你对 TypeScript 的理解？与 JavaScript 的区别？",slug:"说说你对-typescript-的理解-与-javascript-的区别",content:""},{header:"TypeScript 的内置数据类型有哪些？",slug:"typescript-的内置数据类型有哪些",content:""},{header:"TypeScript 中的 Declare 关键字有什么用？",slug:"typescript-中的-declare-关键字有什么用",content:""},{header:"什么是 TypeScript 中的命名空间和模块？两者有什么区别？",slug:"什么是-typescript-中的命名空间和模块-两者有什么区别",content:""},{header:"ES6 有哪些新特性？",slug:"es6-有哪些新特性",content:`新增声明命令 let 和 const
模板字符串
函数的扩展 函数的默认参数
箭头函数 对象的扩展 属性的简写，直接写变量
Object.keys() 方法，获取对象的所有属性名或方法名，返回一个数组
Object.assign() 方法，将多个源对象的属性和方法合并到目标对象上，接收多个参数，第一个参数是目标对象，后面的都是源对象 for ... of 循环4
import export
Promise
class
展开运算符...
async、await
Symbol：一种基本类型，通过调用 symbol 函数产生，接收一个可选名字的参数，返回的symbol是唯一的
Set：类似数组，所有数据是唯一的，没有重复的值，主要用于去重
Proxy：使用代理监听对象的操作，然后可以做一些相应的事
解构赋值
修饰器@decorator`},{header:"ES5 中的类和 ES6 中的 class 有什么区别？",slug:"es5-中的类和-es6-中的-class-有什么区别",content:""},{header:"什么是 ES6 中的 Promise？它的使用场景有哪些？",slug:"什么是-es6-中的-promise-它的使用场景有哪些",content:""},{header:"什么是箭头函数？能使用 new 来创建箭头函数么？",slug:"什么是箭头函数-能使用-new-来创建箭头函数么",content:""},{header:"ES6 中的 Reflect 对象有什么用？",slug:"es6-中的-reflect-对象有什么用",content:""},{header:"Eventloop",slug:"eventloop",content:""}]},{path:"/%E5%89%8D%E7%AB%AF/%E9%9D%A2%E8%AF%95%E9%A2%98/vue",title:"vue",pathLocale:"/",contents:[{header:"vue",slug:"vue",content:""},{header:"说说 Vue 中的 diff 算法",slug:"说说-vue-中的-diff-算法",content:""},{header:"Vue 模板是如何编译的？经历了哪些过程？",slug:"vue-模板是如何编译的-经历了哪些过程",content:""},{header:"Vue 中 computed 和 watch 区别？分别适用于什么场景",slug:"vue-中-computed-和-watch-区别-分别适用于什么场景",content:""},{header:"什么是 Vuex？使用 Vuex 有哪些好处？",slug:"什么是-vuex-使用-vuex-有哪些好处",content:""},{header:"Vue Router 的 $route 和 $router 对象有什么区别？",slug:"vue-router-的-route-和-router-对象有什么区别",content:""},{header:"Vue Router 路由有哪些模式？各模式有什么区别？",slug:"vue-router-路由有哪些模式-各模式有什么区别",content:""}]},{path:"/%E5%89%8D%E7%AB%AF/%E9%9D%A2%E8%AF%95%E9%A2%98/%E5%85%B6%E4%BB%96",title:"其他",pathLocale:"/",contents:[{header:"其他",slug:"其他",content:""},{header:"说说你对Node.js 的理解？优缺点？应用场景？",slug:"说说你对node-js-的理解-优缺点-应用场景",content:""},{header:"什么是 Node.js 中的 process？它有哪些方法和应用场景？",slug:"什么是-node-js-中的-process-它有哪些方法和应用场景",content:""},{header:"什么是浏览器的同源策略？为什么要有同源策略？",slug:"什么是浏览器的同源策略-为什么要有同源策略",content:""},{header:"怎么解决跨域问题？",slug:"怎么解决跨域问题",content:""},{header:"什么是 webpack？它有什么作用？",slug:"什么是-webpack-它有什么作用",content:""},{header:"如何提高 webpack 的打包速度？",slug:"如何提高-webpack-的打包速度",content:""},{header:"什么是 webpack 的热更新？它的实现原理是什么？",slug:"什么是-webpack-的热更新-它的实现原理是什么",content:""},{header:"前端有哪些实现跨页面通信的方法？",slug:"前端有哪些实现跨页面通信的方法",content:""},{header:"什么是点击穿透，怎么解决？",slug:"什么是点击穿透-怎么解决",content:""},{header:"什么是前端路由？什么时候适合使用前端路由？它有哪些优点和缺点？",slug:"什么是前端路由-什么时候适合使用前端路由-它有哪些优点和缺点",content:""},{header:"什么是前后端分离？它有什么优点和缺点？",slug:"什么是前后端分离-它有什么优点和缺点",content:""}]},{path:"/%E5%89%8D%E7%AB%AF/%E9%9D%A2%E8%AF%95%E9%A2%98/%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96",title:"前端性能优化",pathLocale:"/",contents:[{header:"前端性能优化",slug:"前端性能优化",content:""},{header:"说说常规的前端性能优化手段",slug:"说说常规的前端性能优化手段",content:`减少http请求：使用压缩工具来减小文件大小，并将多个小文件合并成一个大文件，减少HTTP请求次数，使用缓存技术（localStorage、SessionStorage）存储数据，提升页面加载速度
减少重绘和回流：避免频繁的DOM操作和样式改变，使用CSS3动画代替JavaScript 动画，减少页面的重绘和回流
使用CDN加速：将静态资源部署再 CDN 上，使用户能够从离自己最近的服务器获取资源，提高加载速度
图片优化：使用合适的图片格式来减小图片文件的大小，使用图片压缩工具来优化图片
懒加载：延迟加载非关键资源，当用户需要访问时再进行加载，减少初始加载的资源量
资源缓存：通过设置适当的缓存策略（例如设置HTTP响应头的Cache-Control来让浏览器缓存资源，减少重复的网络请求）`},{header:"前端性能优化指标有哪些？怎么进行性能检测？",slug:"前端性能优化指标有哪些-怎么进行性能检测",content:""},{header:"浏览器的重绘与回流",slug:"浏览器的重绘与回流",content:""}]},{path:"/%E5%89%8D%E7%AB%AF/%E9%9D%A2%E8%AF%95%E9%A2%98/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C",title:"计算机网络",pathLocale:"/",contents:[{header:"计算机网络",slug:"计算机网络",content:""},{header:"http 和 https的区别",slug:"http-和-https的区别",content:""},{header:"介绍下从 HTTP/1.0、HTTP/1.1 到 HTTP/2 再到 HTTP/3 的演化过程，各个阶段相对前一阶段做了哪些优化？",slug:"介绍下从-http-1-0、http-1-1-到-http-2-再到-http-3-的演化过程-各个阶段相对前一阶段做了哪些优化",content:""}]},{path:"/%E5%90%8E%E7%AB%AF/golang/golang%E7%89%88%E6%9C%AC%E7%AE%A1%E7%90%86%E5%B7%A5%E5%85%B7",title:"golang 版本管理工具",pathLocale:"/",contents:[{header:"golang 版本管理工具",slug:"golang-版本管理工具",content:""},{header:"查看系统架构",slug:"查看系统架构",content:`windows 系统可以在 cmd 命令行中可以使用 systeminfo 命令
windows查看系统架构
linux 系统使用 uname -a 命令，结果有 x86_64 的是 amd 架构
linux查看系统架构`},{header:"下载版本管理工具",slug:"下载版本管理工具",content:"下载地址：https://github.com/voidint/g/releases"},{header:"windows 安装",slug:"windows-安装",content:`下载解压之后将解压后的目录添加到系统环境变量中
下载并解压
添加到系统环境变量
打开命令行输入 g 显示一下内容为安装成功
查看工具是否安装成功`},{header:"linux 安装",slug:"linux-安装",content:`创建目录
mkdir ~/.g
切换目录
cd ~/.g
创建 bin 目录
mkdir bin
上传二进制文件到 bin 目录下
解压二进制文件
tar xzf g1.5.2.linux-amd64.tar.gz
所需环境变量写入 ~/.g/env
cat >~/.g/env <<'EOF'
#!/bin/sh
# g shell setup
export GOROOT="\${HOME}/.g/go"
export PATH="\${HOME}/.g/bin:\${GOROOT}/bin:$PATH"
export G_MIRROR=https://golang.google.cn/dl/
EOF
将~/.g/env 导入 shell 环境变量
cat >>~/.bashrc <<'EOF'
# g shell setup
if [ -f "\${HOME}/.g/env" ]; then . "\${HOME}/.g/env"
fi
EOF
启用环境变量
source ~/.bashrc`},{header:"工具使用",slug:"工具使用",content:`查看可供安装的稳定状态的 go 版本
g ls-remote stable
查看可供安装的所有 go 版本
g ls-remote
查看已安装的 go 版本
g ls
安装对应版本的 go
g install 1.14.7
切换 go 版本
g use 1.19.10
清空 go 安装包文件缓存
g clean
查看 g 版本信息
g version 1.5.0
更新 g 软件
g self update
卸载 g 软件
g self uninstall`},{header:"单独安装 golang 环境",slug:"单独安装-golang-环境",content:`安装包下载：https://golang.google.cn/dl/
配置环境变量，切换代理：https://goproxy.cn/
windows:
$ go env -w GO111MODULE=on
$ go env -w GOPROXY=https://goproxy.cn,direct
linux:
$ echo "export GOROOT=/home/go" >> ~/.bashrc
$ echo "export GOPATH=/home/go" >> ~/.bashrc
$ echo "export PATH=$PATH:$GOROOT/bin:$GOPATH/bin" >> ~/.bashrc
$ echo "export GO111MODULE=on" >> ~/.bashrc
$ echo "export GOPROXY=https://goproxy.cn" >> ~/.bashrc
$ source ~/.bashrc
设置 golang 环境变量脚本
#!/usr/bin/env sh set -e echo "export GOROOT=/home/go" >> ~/.bashrc
echo "export GOPATH=/root/go" >> ~/.bashrc
echo "export PATH=$PATH:$GOROOT/bin:$GOPATH/bin" >> ~/.bashrc
echo "export GO111MODULE=on" >> ~/.bashrc
echo "export GOPROXY=https://goproxy.cn" >> ~/.bashrc
source ~/.bashrc`}]},{path:"/%E5%90%8E%E7%AB%AF/golang/%E5%90%8E%E7%AB%AF%E5%AD%A6%E4%B9%A0%E8%B7%AF%E7%BA%BF",title:"后端学习路线",pathLocale:"/",contents:[{header:"后端学习路线",slug:"后端学习路线",content:""}]},{path:"/%E5%90%8E%E7%AB%AF/node/nvm%E4%BD%BF%E7%94%A8",title:"nvm 使用",pathLocale:"/",contents:[{header:"nvm 使用",slug:"nvm-使用",content:"后续计划： 如何将自己开发的模块发布到 npm 注册表 node.js 是前端工程化中常用的环境，当接手一个项目时，经常遇到安装依赖包不成功的情况。大部分是因为 node 版本不兼容导致的。项目只有一个是还好说。当项目多了之后。可能出现多个项目使用 node 版本不同的情况，这时，我们可以使用 nvm 来快速的切换 node 版本。"},{header:"nvm 安装",slug:"nvm-安装",content:`# 定义一个环境变量(nvm的安装目录)
export NVM_DIR="/home/soft/.nvm"
# 拉取 nvm 代码,如果github下载慢，可以使用gitee同步一下github的代码，然后从gitee克隆
git clone https://github.com/nvm-sh/nvm.git "$NVM_DIR"
cd "$NVM_DIR"
# 将当前分支切换到最新的以 "v" 开头的标签版本的分支
git checkout \`git describe --abbrev=0 --tags --match "v[0-9]*" $(git rev-list --tags --max-count=1)\`
# 配置环境变量
vim ~/.bashrc
# 将下面的内容放到 .bashrc 文件的最下面
export NVM_DIR="/home/soft/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \\. "$NVM_DIR/nvm.sh" # 加载nvm
[ -s "$NVM_DIR/bash_completion" ] && \\. "$NVM_DIR/bash_completion"
export NVM_NODEJS_ORG_MIRROR=http://npm.taobao.org/mirrors/node # 设置node安装镜像
export NVM_IOJS_ORG_MIRROR=http://npm.taobao.org/mirrors/iojs
# 重新加载环境变量
source ~/.bashrc`},{header:"nvm 常用命令",slug:"nvm-常用命令",content:`# 查看所有可以安装的版本(长期支持版，--lts去掉是全部版本)
nvm ls-remote --lts
# 安装特定版本的 node
nvm install <node版本号>
# 卸载特定版本的 node
nvm uninstall <node版本号>
# 切换到某个版本
nvm use <node版本号>
# 查看已安装的 node 版本
nvm ls`},{header:"单独安装 node",slug:"单独安装-node",content:`# 下载
wget https://cdn.npm.taobao.org/dist/node/v16.20.2/node-v16.20.2-linux-x64.tar.xz
# 解压：
xz -d node-v16.20.2-linux-x64.tar.xz
tar -xvf node-v16.20.2-linux-x64.tar
# 移动
mv node-v16.20.2-linux-x64 /usr/local/
# 重命名
mv /usr/local/node-v16.20.2-linux-x64/ /usr/local/node
# 配置环境变量
vim /etc/profile
# 文件末尾增加内容，按 i 命令，进行新增
export NODE_HOME=/usr/local/node
export PATH=$NODE_HOME/bin:$PATH
# ps:内容新增后，先按esc键，退出插入模式，然后按住shift键，并连按两次z字符，
# 即可保存刚才的编辑并退出vim编辑状态
# 执行source才能使环境变量立即有效
source /etc/profile
# 安装成功后，查看对应版本信息
node -v
npm -v`},{header:"node 常用命令",slug:"node-常用命令",content:`# 使用官方注册表(发布npm包到npm仓库时使用)
npm config set registry=https://registry.npmjs.org/
# 设置淘宝镜像
npm config set registry=https://registry.npm.taobao.org/
# 初始化
npm init
# 安装指定版本的包
npm i <包名>@版本号
# 全局安装
npm i <包名>
# 安装到开发依赖
npm i <包名> -D
# 卸载包
npm uninstall <包名>
# 运行 package.json 中定义的脚本名称
npm run <脚本名称>
# 运行 package.json 中定义的start名称
npm start
# 将当前项目打包成 npm 全局模块
npm link
# 可以在其他项目中引入作为依赖包
npm link 包名
# 将当前项目发布到 npm 注册表
npm publish`}]},{path:"/%E5%B7%A5%E5%85%B7/git/%E5%AE%89%E8%A3%85%E6%95%99%E7%A8%8B",title:"git安装教程",pathLocale:"/",contents:[{header:"git安装教程",slug:"git安装教程",content:""},{header:"windows安装教程",slug:"windows安装教程",content:`git官网下载windows安装包
如果官网下载速度过慢，可以使用华为镜像站搜索下载。（搜索栏搜索git）
华为镜像站搜索git
git镜像地址找到最新版本号的目录
找到对应的安装包
根据系统是64位还是32位，下载对应的安装程序，安装过程无脑下一步，这里就不截图了。`},{header:"linux安装教程",slug:"linux安装教程",content:""},{header:"centos安装git （使用这个方式安装版本有点旧）",slug:"centos安装git-使用这个方式安装版本有点旧",content:`安装：yum install git -y
移除：yum remove git`},{header:"源代码编译",slug:"源代码编译",content:`安装编译依赖
yum install curl-devel expat-devel gettext-devel openssl-devel zlib-devel asciidoc
yum install gcc perl-ExtUtils-MakeMaker
打开文件夹存放git包(位置自定义)
cd /usr/local/src/
下载git压缩包（在git官网查看最新版本版本号，在镜像站找对应的压缩包）
wget https://mirrors.edge.kernel.org/pub/software/scm/git/git-2.42.0.tar.xz
解压安装包
tar -xvf git-2.42.0.tar.xz
打开解压好的git文件夹
cd git-2.42.0
编译git
make prefix=/usr/local/git all
安装git
make prefix=/usr/local/git install
配置环境变量
echo "export PATH=$PATH:/usr/local/git/bin" >> /etc/profile && source /etc/profile
查看版本(确认是否安装成功)
git --verison
windows git小乌龟安装`},{header:"TortoiseGit（git小乌龟可视化工具安装）",slug:"tortoisegit-git小乌龟可视化工具安装",content:`下载地址：https://tortoisegit.org/download/
下载安装包和语言包
使用正常安装软件的方式安装这两个文件`},{header:"汉化",slug:"汉化",content:"右键桌面选择 TortoiseGit 中的 Setting 点击setting 切换语言为中文简体，点击确定 切换语言为中文简体 或许提交代码就可以使用 TortoiseGit 可视化提交代码啦 在初始化git的文件夹中右键选择git提交 在弹出的选框中可以勾选提交哪些文件 勾选提交文件 双击文件可以查看修改了哪些内容 查看差异 填写日志信息点击提交 提交代码 可以直接点击推送按钮，也可以使用 git bash 推送到远程仓库"}]},{path:"/%E5%B7%A5%E5%85%B7/git/%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4",title:"git常用命令",pathLocale:"/",contents:[{header:"git常用命令",slug:"git常用命令",content:""},{header:"首次使用基本配置",slug:"首次使用基本配置",content:`git config --global user.email "你的邮箱"
git config --global user.name "你的名字"`},{header:"初始化 git 仓库",slug:"初始化-git-仓库",content:"git init"},{header:"克隆一个远程仓库到本地",slug:"克隆一个远程仓库到本地",content:"git clone <仓库地址>"},{header:"将文件提交到暂存区",slug:"将文件提交到暂存区",content:`# 添加单个文件
git add <文件>
# 添加多个文件
git add <文件> <文件> ...
# 添加指定目录及其子目录下的所有文件到暂存区
git add <目录>
# 添加当前目录及其子目录下的文件到暂存区
git add .
# 将项目的所有文件添加到暂存区，和 git add . 的区别是无论当前目录处于项目中的哪一层级
git add --all
# 将指定文件撤销到上次commit的状态
git reset <文件>
# 将指定文件从暂存区撤销，但不影响该文件的修改
git restore --staged <文件>
# 放弃工作区中的修改
git restore <文件>
# 清空所有已暂存（未提交）的文件和目录，并重置所有工作区修改（重置到上次commit状态）
git reset -hard HEAD
# 清空所有已暂存（未提交）的文件和目录，并保留所有工作区修改
git reset HEAD`},{header:"提交暂存区的文件到本地仓库（可以使用-m指定本次提交的版本号，用于编写本次提交的说明信息，包括本次提交的目的、修改的内容等）",slug:"提交暂存区的文件到本地仓库-可以使用-m指定本次提交的版本号-用于编写本次提交的说明信息-包括本次提交的目的、修改的内容等",content:"git commit -m 说明信息"},{header:"查看工作区和暂存区的状态",slug:"查看工作区和暂存区的状态",content:"git status"},{header:"从远程仓库拉取最新代码到本地",slug:"从远程仓库拉取最新代码到本地",content:`git pull
注意：执行 git pull 操作之前应先提交或暂存本地的修改，以免与远程仓库代码产生冲突`},{header:"将本地的commit提交到远程仓库",slug:"将本地的commit提交到远程仓库",content:`git push -u 命令用于将当前分支的提交推送到与之关联的远程分支，并建立起追踪关系
具体而言，使用 git push -u 命令可以完成两个操作 将当前分支的提交推送到与之关联的远程分支
建立起本地分支与远程分支的追踪关系，使得以后的 git push 命令可以自动推送到正确的远程分支 # 将当前分支的提交推送到名为 origin 的远程仓库的 master 分支，并建立起本地 master 分支与远程 master 分支的追踪关系。
git push -u origin master
执行过程： git push 会将本地的提交推送到远程仓库
如果远程仓库中不存在对应的远程分支，git push 会自动创建该分支
如果远程仓库中已经存在对应的远程分支，git push 会将本地分支的提交合并到远程分支中
如果推送过程中出现冲突，git push 会提示解决冲突，并在解决后继续推送
最后，git push 完成推送后，远程仓库中的代码将与本地代码保持一致 注意事项： 执行 git push 前，建议先提交或暂存本地修改，以免推送到远程仓库时出现冲突
可以使用 git push --force 命令来强制推送，即覆盖远程仓库中的内容，需要谨慎使用，因为可能覆盖其他人的修改，容易被骂
如果想要推送所有分支到远程仓库，可以使用 git push --all 命令
-u 参数只需要在第一次推送时使用，之后的推送可以直接使用 git push。
如果当前分支与远程分支已经建立了追踪关系，再次执行 git push -u 会更新远程分支上的提交，但不会重新建立追踪关系。
可以使用 git branch -vv 命令查看本地分支与远程分支的追踪关系。`},{header:"查看、创建和删除分支",slug:"查看、创建和删除分支",content:`# 查看当前仓库的所有分支，当前分支会有*标识
git branch
# 创建一个新分支
git branch <分支名>
# 删除指定分支，如果该分支的工作尚未合并到其他分支，则删除操作将会被拒绝。如果要强制删除未合并的分支，可以使用-D参数
git branch -d <分支名>
# 重命名分支
git branch -m <旧分支名> <新分支名>
# 查看所有的本地分支和远程分支
git branch -a
# 查看远程分支
git branch -r
# 查看本地分支与远程分支的追踪关系
git branch -vv
# 查看已合并到当前分支的分支
git branch --merged
# 查看尚未合并到当前分支的分支
git branch --no-merged
# 查看包含指定提交的分支
git branch --contain <commit>`},{header:"git checkout 常见用法",slug:"git-checkout-常见用法",content:`# 切换到指定分支
git checkout <分支名>
# 创建并切换到新分支
git checkout -b <新分支名>
# 将指定文件恢复到最近提交的状态，丢弃所有未提交修改
git checkout -- <文件名>
# 恢复到指定提交
git checkout <commit>
# 切换到指定远程分支
git checkout origin/<分支名>
注意事项： 在切换分支之前，确保当前分支的修改已经提交或者保存。
在恢复文件之前，确保未提交的修改已经保存，因为恢复文件将丢弃所有未提交的修改。
当切换到远程分支时，Git 会自动创建一个本地分支来跟踪远程分支。`},{header:"合并分支",slug:"合并分支",content:`# 将指定分支的更改合并到当前分支
git merge <分支名>`},{header:"git log 常见用法",slug:"git-log-常见用法",content:`# 显示当前分支的所有提交记录，按照时间顺序从最近到最早的排列
git log
# 限制显示数量
git log -n <数量>
# 显示每个提交的详细信息，包括修改的文件和具体的更改内容
git log -p
# 以一行的简介形式显示每个提交的简略信息
git log --oneline
# 仅显示指定日期之后的提交记录
git log --since=<date>
# 仅显示指定作者的提交记录
git log --author=<author>
# 图形化显示提交历史，显示分支和合并的关系
git log --graph
# 仅显示指定分支的提交历史
git log <分支名>
提示：使用 q 键可以退出 git log 的查看模式`},{header:"远程仓库管理",slug:"远程仓库管理",content:`# 显示当前仓库配置的所有远程仓库的名称
git remote
# 添加远程仓库，并指定一个名称和url
git remote add <名称> <url>
# 移除指定名称的远程仓库
git remote remove <名称>
# 重命名远程仓库
git remote rename <旧名称> <新名称>
# 显示指定远程仓库详细信息
git remote show <仓库名称>
# 查看远程仓库的详细信息，包括URL和跟踪的分支
git remote -v
注意： 本地仓库可以与一个或多个远程仓库进行关联
远程仓库名通常是 origin，也可以自定义其他名称
远程仓库的操作不会影响本地仓库的提交历史，只用于与其他仓库进行交互和同步代码`},{header:"查看文件或代码之间的差异",slug:"查看文件或代码之间的差异",content:`# 比较工作区和暂存区的差异
git diff
# 比较暂存区和最新提交的差异
git diff --cached 或 git diff --staged
# 比较两个提交之间的差异
git diff <commit1> <commit2>
# 比较指定文件的差异
git diff <文件>
# 比较分支之间的差异
git diff <分支1> <分支2>
注意： git diff 默认会以行的形式显示差异，显示被修改的行和具体更改的内容
git diff 只会显示文件的差异，并不会实际修改文件
git diff 可以与其他选项和参数一起使用，如 --stat 显示简略的差异统计信息，--word-diff 显示单词级别的差异`}]},{path:"/%E5%B7%A5%E5%85%B7/redis/redis%E5%AE%89%E8%A3%85",title:"redis安装教程",pathLocale:"/",contents:[{header:"redis安装教程",slug:"redis安装教程",content:"进入https://download.redis.io/releases/选择想安装的版本"},{header:"安装并编译",slug:"安装并编译",content:`# 下载 redis 压缩包
wget https://download.redis.io/releases/redis-6.2.6.tar.gz
# 解压 redis 压缩包
tar xzf redis-6.2.6.tar.gz
# 移动解压后的目录
mv redis-6.2.6 /usr/local/redis
# 切换到移动后的目录
cd /usr/local/redis
# 编译redis
make
如果执行make命令报错：cc 未找到命令，原因是虚拟机系统中缺少gcc，执行下面命令安装gcc：
yum -y install gcc automake autoconf libtool make
如果执行make命令报错：致命错误:jemalloc/jemalloc.h: 没有那个文件或目录，则需要在make指定分配器为libc。执行下面命令即可正常编译：
make MALLOC=libc
make命令执行完，redis就编译完成了。`},{header:"redis配置",slug:"redis配置",content:`如果不可以从本地访问云服务器安装的redis
bind 127.0.0.1 ::1
修改为：
bind * -::*
守护进程使用，如果redis被upstart或systemd监管时，这个参数没有影响。
daemonize no
修改为
daemonize yes
redis配置解析：https://blog.csdn.net/Rambo_Yang/article/details/128584227
运行 redis
/usr/local/redis/bin/redis-server /usr/local/redis/redis.conf
关闭
# 查找进程id
ps -aux | grep redis
# 杀掉 redis 进程
kill <进程id>`}]},{path:"/%E5%B7%A5%E5%85%B7/vuepress/live2d%E6%9C%8D%E5%8A%A1",title:"给我的博客加一个看板娘",pathLocale:"/",contents:[{header:"给我的博客加一个看板娘",slug:"给我的博客加一个看板娘",content:""},{header:"阶段性计划",slug:"阶段性计划",content:"提供静态使用服务 提供上传可视化页面操作 提供已上传live2d模型列表展示 命令行参数控制是否启用https 申请的免费ip证书 遗留问题，解压出来的文本文件乱码"},{header:"起因",slug:"起因",content:"作为一个喜欢看动漫的二次元，我想给我的博客添加一个可爱的看板娘。博客系统使用 vuepress 的 VuePress Theme Hope 主题搭建。可以通过 oh-my-live2d 插件给博客添加一个看板娘，可以通过本地路径或者url的方式添加 live2d 模型。于是小脑瓜灵机一动，我要搞个自己的 live2d 服务。冲冲冲！"},{header:"功能",slug:"功能",content:`live2d模型上传
live2d模型已上传列表展示
让我的博客可以使用live2d模型`},{header:"技术选型",slug:"技术选型",content:"golang、gin"},{header:"项目初始化",slug:"项目初始化",content:`初始化go.mod文件
go mod init live2d-server
安装 gin 依赖包
go get -u github.com/gin-gonic/gin
首先使用 gin 提供一个静态资源服务，先让模型可以通过网址访问
新建 main.go 代码如下
package main import ( "github.com/gin-gonic/gin"
) func main() { r := gin.Default() r.Static("/live2d", "./live2d") r.Run(":9111")
}
新建 live2d 文件夹存放 live2d 模型，live2d模型可以从这个模型站(版权要求见模型站)下载
然后在浏览器中打开模型链接
浏览器地址打开live2d模型文件
哎呦！可以正常访问。
然后将他配置到我的博客系统中
plugins: [ // live2d看板娘配置 ohmylive2dPlugin({ source: "http://localhost:9111/live2d", models: { path: "/umaru/model.json", }, }),
],
live2d配置到博客中
不出所料，翻车了！！！出现了跨域问题
使用cros解决跨域问题
下载并安装cors
go get github.com/gin-contrib/cors
代码中导入
import "github.com/gin-contrib/cors"
func main() { r := gin.Default() // 允许所有的源 r.Use(cors.Default()) r.Static("/live2d", "./live2d") r.Run(":9111")
}
于是，我可爱的小看板娘出来啦
我可爱的小看板娘出来啦！
接下来开发上传文件的服务
上传服务流程图
开发上传页面
新建html文件夹，文件夹新建 index.html 作为上传页面，代码如下：
<!doctype html>
<html lang="en">
<head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"> <meta http-equiv="X-UA-Compatible" content="ie=edge"> <title>live模型</title>
</head>
<body>
<form action="/live2d/upload" method="post" enctype="multipart/form-data"> <p>live2d model name: <input type="text" name="name" /></p> <p>file: <input type="file" name="file" /></p> <button type="submit">上传live2d模型</button>
</form>
</body>
</html>
新建 upload-result.html 作为上传成功页面，代码如下
<!DOCTYPE html>
<html lang="en">
<head> <meta charset="UTF-8"> <title>live模型</title>
</head>
<body> 上传{{.result}}，<a href="/">返回</a>
</body>
</html>
将html文件夹下静态资源嵌入gin框架
r.LoadHTMLGlob("html/*")
在 main.go 文件中新增路由，当访问根目录的时候返回index.html页面，代码如下
// live2d模型上传页面
r.GET("/", func(c *gin.Context) { c.HTML(200, "index.html", nil)
})
在 main.go 文件中新增路由，当上传操作完成后，返回upload-result.html页面，代码如下
// 上传live2d模型到接口
r.POST("/live2d/upload", func(c *gin.Context) { file, err := c.FormFile("file") name := c.PostForm("name") if err != nil { c.HTML(200, "upload-result.html", gin.H{ "result": "失败，错误为：" + err.Error(), }) return } // 保存 live2d 压缩包到 live2d 文件夹下 c.SaveUploadedFile(file, "./live2d/"+file.Filename) // 解压 live2d 压缩包 err = unzipFile("./live2d/"+file.Filename, "./live2d/"+name) if err != nil { c.HTML(200, "upload-result.html", gin.H{ "result": "失败，错误为：" + err.Error(), }) return } c.HTML(200, "upload-result.html", gin.H{ "result": "成功", })
})
编写解压zip文件方法
// zip文件路径和目标文件路径
func unzipFile(zipFile, destDir string) error { r, err := zip.OpenReader(zipFile) if err != nil { return err } defer r.Close() for _, f := range r.File { rc, err := f.Open() if err != nil { return err } defer rc.Close() path := filepath.Join(destDir, f.Name) if f.FileInfo().IsDir() { os.MkdirAll(path, f.Mode()) } else { os.MkdirAll(filepath.Dir(path), os.ModePerm) f, err := os.OpenFile(path, os.O_WRONLY|os.O_CREATE|os.O_TRUNC, f.Mode()) if err != nil { return err } defer f.Close() _, err = io.Copy(f, rc) if err != nil { return err } } } return nil
}
访问页面上传模型，查看结果
输入模型名称，上传live2d模型压缩包
上传成功
上传成功之后查看结果发现解压之后发现txt文件名称和内容有乱码，所以，我们要对txt文件进行一个转码
live2d文件夹下结果
编写转码方法
导入使用的包
"golang.org/x/text/encoding/simplifiedchinese"
"golang.org/x/text/transform"
// 解码文件名
func decodeFileName(name string) string { decoder := simplifiedchinese.GBK.NewDecoder() //decodedName, err := transform.String(decoder, name) decodedName, _, err := transform.String(decoder, name) if err != nil { log.Println("Failed to decode file name:", name) return name } return decodedName
}
修改解压方法代码
path := filepath.Join(destDir, f.Name) 修改为
path := filepath.Join(destDir, decodeFileName(f.Name)) // 对txt类型的文件进行特殊处理
if filepath.Ext(f.Name()) == ".txt" { reader := bufio.NewReader(rc) for { line,err:= reader.ReadString('\\n') if err != nil { // 判断是否到达文件末尾 if err == io.EOF { break } fmt.Println("读取文件内容失败:", err) return err } f.WriteString(decodeFileName(line)) } continue
}
再次上传模型文件文件内容显示正常，至此，上传模型功能结束
作完上传功能，现在要将它打包成二进制文件放到linux云服务器上，首先修改编译后可执行文件的目标平台
go env -w GOOS=linux
go build -o live2d-server
直接启动打包后文件
直接启动打包后文件发现，html模板文件没有被打包进去，所以在这里我们要处理一下
使用embed包的embed.FS类型来嵌入HTML模板文件。通过//go:embed指令，我们告诉编译器将html/*.html下的所有文件嵌入到二进制文件中
//go:embed html/*.html
var templates embed.FS
加载模板文件代码修改
r.LoadHTMLGlob("html/*") 修改为
r.SetHTMLTemplate(template.Must(template.ParseFS(templates, "html/*.html")))
将他部署到我的华为云服务器之后，然后在vuepress中使用链接地址，博客中就有一个可爱的看板娘啦
编写service文件
vim /etc/systemd/system/live2d_server.service
[Unit]
Description=live2d Server [Service]
Type=simple
Restart=always
RestartSec=3s
WorkingDirectory=/go
ExecStart=/go/live2d-server [Install]
WantedBy=multi-user.target
systemctl daemon-reload
systemctl start live2d_server #启动
systemctl stop live2d_server #停止
systemctl restart live2d_server #重启
systemctl status live2d_server #查看状态`}]},{path:"/%E5%B7%A5%E5%85%B7/vuepress/markdown%E5%9B%BE%E5%BA%8A%E4%BD%BF%E7%94%A8",title:"markdown图床使用",pathLocale:"/",contents:[{header:"markdown图床使用",slug:"markdown图床使用",content:""},{header:"picgo安装",slug:"picgo安装",content:"下载地址：山东大学镜像站"}]},{path:"/%E5%B7%A5%E5%85%B7/ssh/%E7%BB%88%E7%AB%AF%E9%93%BE%E6%8E%A5%E5%B7%A5%E5%85%B7",title:"ssh工具",pathLocale:"/",contents:[{header:"ssh工具",slug:"ssh工具",content:"finalshell"}]},{path:"/%E5%B7%A5%E5%85%B7/%E6%8A%93%E5%8C%85%E5%B7%A5%E5%85%B7/Whistle",title:"Whistle 抓包工具使用",pathLocale:"/",contents:[{header:"Whistle 抓包工具使用",slug:"whistle-抓包工具使用",content:"官网：https://wproxy.org/whistle/"},{header:"安装",slug:"安装",content:"npm install -g whistle"},{header:"常用命令",slug:"常用命令",content:`# 查看帮助信息
w2 help
# 启动whistle
w2 start
# 停止whistle
w2 stop
# 调试模式启动whistle(主要用于查看whistle的异常及插件开发)
w2 run
启动whistle
打开 http://127.0.0.1:8899 就可以抓包了`},{header:"配置代理",slug:"配置代理",content:""},{header:"全局代理",slug:"全局代理",content:`windows 使用命令行配置全局代理：
# 设置本机默认 whistle 实例代理
w2 proxy
# 指定端口
w2 proxy <端口号>
# 指定域名（ip）和端口号的代理
w2 proxy <域名:端口号>
# 设置本机默认 whistle 实例代理，并设置不代理请求的域名
w2 proxy -x "www.test.com, www.abc.com, *.xxx.com"
# 设置指定指定域名（ip）和端口号的代理，并设置不代理请求的域名
w2 proxy <xxx.domain.com:8888> -x "www.test.com, www.abc.com, *.xxx.com"`},{header:"浏览器代理",slug:"浏览器代理",content:`谷歌浏览器插件下载 下载网盘中的 SwitchyOmega_Chromium.rar 文件并解压 谷歌浏览器地址栏输入 chrome://extensions/ 选择加载已解压的扩展程序插件，选中刚才解压的 SwitchyOmega_Chromium 在 SwitchyOmega 配置启动的 whistle 服务 点击扩展程序图标选择 SwitchyOmega 将 SwitchyOmega 设置为 proxy 情景模式 设置自动切换情景模式可以控制哪些网站走代理抓包（需要将 SwitchyOmega 设置为 auto switch 情景模式，方法同6） 加载已解压的扩展程序
插件安装成功
配置刚刚启动的whistle服务
点击扩展程序图标选择 SwitchyOmega
将 SwitchyOmega 设置为 proxy 情景模式
设置自动切换情景模式可以控制哪些网站走代理抓包`},{header:"移动端代理（使用时再补充）",slug:"移动端代理-使用时再补充",content:""},{header:"安装 ca 证书",slug:"安装-ca-证书",content:`抓 https 的包需要安装 ca 证书
# 安装本机默认的 whistle 实例的证书
w2 ca
# 安装指定端口的 whistle 实例的证书
w2 ca <端口号>
# 安装指定域名（ip）和端口号的 whistle 实例的证书
w2 ca <域名:端口号>
# 下载指定 url 的根证书并安装
w2 ca <url>
# 下载指定本地路径的根证书并安装
w2 ca <文件路径>`}]},{path:"/%E5%B7%A5%E5%85%B7/%E7%BD%91%E5%85%B3/apinto%E7%BD%91%E5%85%B3",title:"apinto网关",pathLocale:"/",contents:[{header:"apinto网关",slug:"apinto网关",content:""},{header:"apinto Debug运行",slug:"apinto-debug运行",content:""},{header:"apinto网关自定义插件",slug:"apinto网关自定义插件",content:`第一步：
定义工厂注册方法factory.go
const ( Name = "response_rewrite"
) func Register(register eosc.IExtenderDriverRegister) { // 接受一个名字，一个工厂创建方法 register.RegisterExtenderDriver(Name, NewFactory())
} // 定义工厂创建方法
func NewFactory() eosc.IExtenderDriverFactory { // 传递一个插件配置结构体， return drivers.NewFactory[Config](Create, Check)
}
在/app/apinto/plugin.go中注册自定义插件
customer_plugin.Register(extenderRegister)
config.go文件
定义了Config结构体
定义了Config结构体的错误类型
定义了config结构体的校验方法 判断状态码
判断code数组不能为空
状态码最大值为598，最小值为200 driver.go文件 create方法接受一个id、name、Config类型的值、workers map[eosc.RequireId]eosc.IWorker 反悔了一个实现了eosc.IWorker的结构体类型的值，和错误码 check方法是个断言方法，传递泛型和值，返回对应泛型的结构体指针和一个error,开头字母是小写，只在当前go文件中使用
Check方法 传入Config结构值指针的值、和workers map[eosc.RequireId]eosc.IWorker ,返回一个通过Config.doCheck方法返回的错误 factory.go文件 Register() func NewFactory[T any](createFunc func(id, name string, v *T, workers map[eosc.RequireId]eosc.IWorker) (eosc.IWorker, error), configCheckFunc ...func(v *T, workers map[eosc.RequireId]eosc.IWorker) error)
*Factory[T]
respose-rewrite.go export GOPATH=/root/go
cd /home/apinto/code/app/apinto/
go build -gcflags="all=-N -l" -o apinto
./apinto debug master
dlv debug --headless --listen=:2345 --api-version=2 --accept-multiclient
go build -gcflags "all=-N -l" github.com/app/demo
dlv --listen=:2345 --headless=true --api-version=2 --accept-multiclient exec ./demo.exe`}]},{path:"/%E5%B7%A5%E5%85%B7/%E7%BD%91%E5%85%B3/express-gateway%E7%BD%91%E5%85%B3",title:"express-gate网关",pathLocale:"/",contents:[{header:"express-gate网关",slug:"express-gate网关",content:`安装express gateway
npm install -g express-gateway
创建一个express gateway
eg gateway create
根据提示词并选择入门服务模板 ➜ eg gateway create ? What is the name of your Express Gateway? my-gateway ? Where would you like to install your Express Gateway? my-gateway ? What type of Express Gateway do you want to create? (Use arrow keys) ❯ Getting Started with Express Gateway Basic (default pipeline with proxy)
运行express gateway
cd my-gateway && npm start`},{header:"5分钟入门导航",slug:"_5分钟入门导航",content:`开始之前，确保已安装express gateway并使用入门服务器模板将其启动
本导航中，你可以： 制定微服务并作为api公开
定义api的消费者
使用秘钥授权保护api安全 注：这个网关附带一个内存数据库，作为指南的一部分所做的所有配置文件更改都不需要启动express网关，热重新加载功能将自动处理此问题，无需重新启动`},{header:"制定微服务并作为api公开",slug:"制定微服务并作为api公开",content:`我们指定现有服务 https://httpbin.org/ip 代理和管理，就好像它是我们自己从防火墙内发起的一样。该服务允许用户获取get并返回JSON字符串作为输出。它是免费提供的，我们将展示Express Gateway的功能
这个服务被指定为express gateway中默认流水线的服务终点，流水线是一组策略，express gateway具有代理策略，使用默认流水线的代理策略，网关现在将位于https://httpbin.org/ip 服务，并将外部请求作为服务端点路由到它 cd config
打开 gateway.comfig.yml 并找到定义了httpbin的服务端点的 serviceEndpoint 部分
接下来在默认流水线的代理策略中查找httpbin serviceEndpoint 我们将通过express gateway 将httpbin服务公开为api端点，当api通过api端点公开时，可以从外部访问API 打开 gateway.comfig.yml
找到定义了名为“api”的API端点的apiEndpoints部分 ​ 注：默认情况下，代理策略会将API请求的路径附加到服务端点 现在我们有了一个端点，他能通过express gateway访问api`},{header:"定义api的消费者",slug:"定义api的消费者",content:`为了管理我们的API，我们将定义被称为“消费者”的授权用户，允许他们使用API。 使用eg users create 创建用户
eg users create
Configuring yargs through package.json is deprecated and will be removed in a future major release, please use the JS API instead.
Configuring yargs through package.json is deprecated and will be removed in a future major release, please use the JS API instead.
Configuring yargs through package.json is deprecated and will be removed in a future major release, please use the JS API instead.
? Enter firstname [required]: guo
? Enter lastname [required]: yz
? Enter username [required]: guoyz
? Enter email: 78300406@qq.com
? Enter redirectUri: undefined
√ Created 22de903f-3087-4df2-84b2-e8c0def22d81
{ "isActive": true, "username": "guoyz", "id": "22de903f-3087-4df2-84b2-e8c0def22d81", "firstname": "guo", "lastname": "yz", "email": "78300406@qq.com", "createdAt": "Sat Aug 26 2023 23:17:58 GMT+0800 (中国标准时间)", "updatedAt": "Sat Aug 26 2023 23:17:58 GMT+0800 (中国标准时间)"
}`},{header:"使用秘钥授权保护api",slug:"使用秘钥授权保护api",content:`目前api已完全公开，并可以通过其api端点进行访问，我们现在要用秘钥授权来保护它，为此，我们将秘钥授权策略添加到了默认流水线中
给guoyz分配一个密钥 eg credentials create -c guoyz -t key-auth -q`},{header:"核心概念",slug:"核心概念",content:`有关Express Gateway及其工作方式的概述，请查看“关于”页面，熟悉Express Gateway中的核心实体及其使用方式。
Express Gateway具有以下核心实体`},{header:"endpoints",slug:"endpoints",content:"端点是URL。Express Gateway有两种不同类型的端点： API endpoints Service endpoints Express Gateway通过API endpoints公开API。作为网关，它将来自API端点的API请求代理到服务端点中引用的微服务。"},{header:"Policies Reference（策略参考）",slug:"policies-reference-策略参考",content:`策略是Express Gateway中功能的构建块。策略可以被视为Express中间件的包装器，通过以下方式添加动态评估和执行行为： 条件 行动 参数 一个策略可以有一个或多个条件和操作对。一个条件和一个动作都可以有自己的一组唯一参数，使这对参数是唯一的。
可以使用Express Gateway公开的JavaScript对象和函数对策略进行高度定制。JavaScript对象和函数可以在条件、操作和参数中指定，以动态执行逻辑。
有关如何在条件、操作和策略（如表达式策略）中指定逻辑的信息，请参阅策略自定义参考。`},{header:"Basic Authorization",slug:"basic-authorization",content:`基本授权策略遵循RFC-7617标准。根据标准，如果用户代理想要发送用户id和密码，它将使用以下HTTP头。
示例: Authorization: Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==`},{header:"用法",slug:"用法",content:"为了使用基本授权策略，必须创建使用者并为其创建基本身份验证凭据。 要创建使用者（用户和应用程序）：请使用CLI并创建用户或创建应用程序命令。 要为应用程序或用户创建基本身份验证凭据：请使用CLI并键入basic auth的create credential命令。 要启用基本授权策略，请在policys部分的gateway.config.yml中添加基本授权。 policies: - basic-auth # 其他策略"},{header:"Customization（自定义策略）",slug:"customization-自定义策略",content:"Express Gateway的动态功能源于一组丰富的自定义功能，这些功能将Express.js中间件与可以使用纯JavaScript指定的表达式和逻辑相结合。"},{header:"Conditions（条件）",slug:"conditions-条件",content:"条件控制Express Gateway操作的执行流程。Express Gateway提供了一组丰富的核心条件，可用于Express Gateway中的任何策略。整个Express Gateway共享的应用程序数据存储在JavaScript对象中，可以使用JavaScript表达式和函数进行评估。"},{header:"Express Gateway Context Object (egContext)（网关上下文对象）",slug:"express-gateway-context-object-egcontext-网关上下文对象",content:`状态和其他应用程序数据和元数据存储在Express Gateway上下文对象或egContext对象中。上下文对象及其相关属性会根据执行范围而更改。
示例
在流水线1中，调用API端点的用户将在egContext.user.id中设置其用户id数据，该数据与调用同一API端点的另一用户不同。尽管它是同一个对象，但运行时上下文会创建同一对象和数据的不同实例。`},{header:"egContext",slug:"egcontext",content:`将用于执行条件、操作和表达式策略中的JavaScript代码的JavaScript沙盒对象。它可以用于实现非标准场景。
由于安全原因，所有Node.JS全局变量（如process、require等）都将不可用。
egContext包含以下可使用的属性： req:ExpressJS请求对象
res:ExpressJS响应对象
apiEndpoint：正在执行的配置或API端点。例如，apiEndpoint.scopes将为端点提供所有配置的作用域
consumer：关于当前消费者的信息（可以是应用程序或用户）
requestID:uuidv4（base62编码）当前请求的标识符，用于跟踪目的。如果需要，可以使用headers策略将此值作为header向下传播。
requestStream：如果设置了，则此流将通过流水线传输到代理的请求主体中，而不是原始请求主体中。这可以实现有趣的场景。`},{header:"CLI Reference (命令行参考)",slug:"cli-reference-命令行参考",content:""},{header:"plugins (插件)",slug:"plugins-插件",content:`Express Gateway v1.2.0+附带了一个插件框架，用于扩展Express Gateway核心。插件框架允许任何人使用Express中间件并将它们作为插件集成到Express网关中。Express Gateway提供了一种声明性的方式来利用Express中间件进行集中驱动和动态执行。
注意：使用此框架，Express Gateway核心中的现有策略最终将从核心重构为Express Gateway插件。`},{header:"插件结构",slug:"插件结构",content:`Express网关插件包含实体并允许事件订阅。您可以将插件看作Express网关实体的容器，这些实体通过添加实体和提供事件处理程序来扩展核心。
在插件框架的第一次迭代中，支持以下实体： Policies-策略
Conditions-条件
为admin 和 gateway服务自定义路由和中间件 对于所有考虑中的扩展点，请参考Express Gateway插件规范。
插件框架公开了一个事件总线，可以对Express网关生命周期中的事件做出反应。`},{header:"自动插件安装",slug:"自动插件安装",content:""},{header:"插件不在NPM上（自定义插件）",slug:"插件不在npm上-自定义插件",content:`在插件不在NPM上的罕见情况下（如果您有专用代码存储库，则可能会发生这种情况），您可以使用特定插件部分的package属性指定确切的入口点：
plugins: example: # "express-gateway-plugin-example" param1: 'global per plugin param1' package: '../manifest.js'`},{header:"Plugin Development（插件开发）",slug:"plugin-development-插件开发",content:""},{header:"Policy Development（策略开发）",slug:"policy-development-策略开发",content:""},{header:"定义策略",slug:"定义策略",content:`该策略是ExpressJS中间件的包装器
./policies/example-policy.js文件里的内容
module.exports = { name: "example", schema: { $id: "http://express-gateway.io/schemas/policies/example-policy.json", type: "object", properties: { baseUrl: { type: "string", format: "url", default: "https://example.com", }, }, }, policy: (actionParams) => { return (req, res, next) => { console.log( "executing policy-from-example-plugin with params", actionParams ); next(); // 调用下一个策略 // 或者写入响应: res.json({result: "this is the response"}) }; },
};
name-策略的名称，这是在流水线中引用策略的方式
schema-在执行策略时将用于验证的JSON schema。
policy-返回ExpressJS中间件的函数。函数接受actionParams。actionParams是该策略管道中的所有配置选项`},{header:"Action 参数",slug:"action-参数",content:`假设您将流水线定义为：
pipelines: apiPipeline: apiEndpoints: - api policies: - example: - action: # action 中的所有内容都将是 actionParams baseUrl: 'https://example.com'
在这种情况下，当构建流水线时，您的策略将具有actionParams是
{ "baseUrl":"https://example.com"
}`},{header:"使用插件导出策略",slug:"使用插件导出策略",content:`现在是时候在插件初始化期间注册策略了：这是在manifest.js init函数中完成的
module.exports = { version: '1.2.0', init: function (pluginContext) { let policy = require('./policies/example-policy') pluginContext.registerPolicy(policy) }
}`},{header:"策略注册和执行顺序",slug:"策略注册和执行顺序",content:`综合来看，我们在插件中看到了策略的三个主要组成部分： pluginContext.registerPolicy-将策略注册为插件的一部分
（actionParams）=>ExpressJS_Middleware_Function-从管道配置提供参数的包装器
（req，res，next）=>｛…｝-标准ExpressJS中间件 主要区别在于执行这些部分的时间`},{header:"pluginContext.registerPolicy",slug:"plugincontext-registerpolicy",content:`在Express Gateway启动时执行。在流水线引擎和http服务器启动之前。
仅执行一次`},{header:"(actionParams) => ExpressJS_Middleware_Function 封装器",slug:"actionparams-expressjs-middleware-function-封装器",content:`当流水线引擎将yml转换为ExpressJS中间件时执行。
在每次配置更改时执行（热重新加载gateway.config文件）`},{header:"(req,res,next) => { ... } 中间件",slug:"req-res-next-中间件",content:"对当前流水线中的每个请求执行"},{header:"geteway.config.yml文件解析",slug:"geteway-config-yml文件解析",content:"定义并描述了网关的所有功能，此配置文件简要描述了整个网关的微服务和API操作"},{header:"http",slug:"http",content:`配置http，express gateway 网关将在指定端口上监听 http 请求
http: port: 9080 # 在9080上监听请求 hostname: localhost`},{header:"https",slug:"https",content:`配置https，express gateway 网关将在指定端口上监听 https 请求
https: port: 9443 hostname: localhost tls: # 密钥证书对 "*.demo.io": key: example/keys/demo.io.key.pem cert: example/keys/demo.io.cert.pem "api.acme.com": key: example/keys/acme.com.key.pem cert: example/keys/acme.com.cert.pem "default": key: example/keys/eg.io.key.pem cert: example/keys/eg.io.cert.pem
express gateway支持TLS，包括SNI（特定于域的TLS证书），每个tls密钥都可以指定一个主机域，主机域匹配支持通配符。TLS密钥和证书的路径在密钥与证书密钥中成对制定
如果其他tls域条目都不匹配，或者客户端没有使用SNI，则将使用默认密钥。`},{header:"admin",slug:"admin",content:`admin部分是admin REST API的内部端点。Express Gateway将在指定的主机和端口上侦听内部API请求
admin: host: localhost port: 9080 # EG will listen for http requests on port 9080`},{header:"apiEndpoints",slug:"apiendpoints",content:`Express Gateway通过称为apiEndpoints的URL将微服务公开为API。API消费者可以通过API端点进行API请求。
apiEndpoints: help: # 名称，用作流水线中的引用 host: '*' # 必填项, '*' 将不会检查主机名 paths: /help # 选填，默认情况下将为所有请求提供服务，与 * 类似 api: # 名称，用作流水线中的引用 host: '*.com' # 支持通配符模式 paths: - '/v1/*' # 字符串或字符串数组 - '/v2/*' example: # 名称，用作流水线中的引用 host: 'example.com' paths: /v2/* # 字符串或字符串数组 example2: # 可以在同一apiEndpoint中提供一组匹配条件 - host: 'example2.com' paths: /v2/* methods: ["GET", "OPTIONS"] # 匹配的方法 scopes: ["example2:read"] - host: 'example2.com' paths: /v2/* methods: ["PUT", "POST", "PATCH", "DELETE"] scopes: ["example2:write"] # 访问此类资源所需的作用域数组`},{header:"配置：",slug:"配置",content:`名称
描述 host
接受请求的主机名 paths
路径数组 methods
访问此类资源所需方法数组 scopes
访问此类资源所需的作用域数组`},{header:"Host：",slug:"host",content:`host值是一个字符串，将与请求的“host”标头相匹配。
示例:
任何域和路径
apiEndpoints: help: host: '*' paths: /help
匹配: cdn.test.example.com/help, example.com/help, 没有“HOST”标头404： cdn.test.example.com, example.com/admin
一个没有子域和路径的域
apiEndpoints: help: host: 'example.com' paths: /help
匹配: example.com/help 404: test.example.com/help, example.com
一个域和路径的任何一级子域
apiEndpoints: help: host: '*.example.com' paths: /help`},{header:"Paths",slug:"paths",content:`路径可以是字符串或字符串数组。支持通配符模式。路径遵循ExpressJS路由约定-https://expressjs.com/en/4x/api.html#router
示例
精确字符串匹配
paths: /admin 匹配: 只有/admin
404: /admin/bob; /admin/charlie/1; /staff 没有父级的深层匹配
paths: /admin/* 匹配: /admin/bob; /admin/charlie/1
404: /admin 带有父级的深层匹配
paths: ['/admin','/admin/*'] 匹配: /admin; /admin/bob; /admin/charlie/1
404: /staff 一级匹配，无父级，变量赋值
paths: '/admin/:id' 匹配: /admin/bob; /admin/charlie
id: bob; charlie
404: /admin; /staff 具有变量分配的不带父级的多级子目录匹配
paths: '/admin/:group/:id' 匹配: /admin/ops/bob
group: ops
id: bob
404: /admin; /admin/bob; /admin/alex/bob/charlie 无父级的多级子目录匹配
paths: ['/student/*', '/teacher/*','/admin/*'] 匹配: - /admin/… multi-level - /student/… multi-level - /teacher/… multi-level
404: - / - /admin; /teacher; /student - /staff 重叠
API端点指定的顺序很重要。可以通过通配符指定重叠模式。在进行更一般的匹配之前，应首先指定更具体的模式以进行优先级评估。
示例
apiEndpoints: tabby: host: '*.tabby.cat.com' paths: '*' # 可选，如果未指定，则默认为* cat: host: '*.cat.com' com: host: '*.com'
Scopes
“scopes”值是一个字符串数组，用于指定当前凭据访问资源所需的作用域。
示例
apiEndpoints: tabby: host: '*.tabby.cat.com' paths: '*' scopes: - read - write - delete
只有当当前用户具有“读取”、“写入”和“删除”作用域时，才能访问以下api端点。`},{header:"serviceEndpoints",slug:"serviceendpoints",content:`Express Gateway在apiEndpoints上接收API请求，对其进行处理，然后将其代理到下游微服务。serviceEndpoints部分指定了这些代理微服务的URL。
serviceEndpoints: # 下游微服务 cats: # 名称，用作流水线中的引用 url: "http://cats1.example.com" dogs: # 名称，用作流水线中的引用 urls: # 多个url可以用于负载均衡 - "http://dogs1.example.com" - "http://dogs2.example.com"`},{header:"配置",slug:"配置-1",content:`名称
描述 url
代理请求的协议和主机名 urls
URL数组，用于负载均衡 proxyOptions
用于调用proxy-policy(代理策略)，使用此服务端点 serviceEndpoint必须具有带有单个字符串的url属性或带有字符串数组的urls属性`},{header:"policies",slug:"policies",content:`策略部分是已启用策略的白名单。必须在此处声明Express Gateway要使用的策略。有关Express Gateway支持的所有策略，请参阅“策略参考"
policies: - cors - rate-limiter - log - proxy - oauth2 - key-auth - basic-auth
配置 名字
描述 name
policy的名称，也是/lib/policys下对应的目录名`},{header:"pipelines",slug:"pipelines",content:`流水线部分通过请求和响应流将上面部分中声明的所有实体绑定在一起，从而指定核心Express Gateway的操作。
流水线是为从所有链接的apiEndpoint接收的请求执行的策略的有序列表。
pipelines: pipeline_1: # 流水线的名字 apiEndpoints: # 按名称引用的 API endpoints - api1 # 示例apiEndpoint名称 - api2 - api3 policies: - - policy_1 - #condition/action - #condition/action - policy_2 - #condition/action - #condition/action pipeline_2 . . .
示例
http: port: 3000 serviceEndpoints: example: # 将在代理策略中引用 url: 'http://example.com' apiEndpoints: api: host: '*' paths: / pipelines: default: apiEndpoints: - api policies: - simple-logger: # 策略名称 - # 条件\\动作属性的对象数组 condition: #可选; 默认为始终执行 name: pathExact path: /v1 action: message: "\${req.method} \${req.originalUrl}" - proxy: # 策略名称 - # 条件\\动作属性的对象数组 action: serviceEndpoint: example # 见上文声明`},{header:"策略中的条件和动作对象",slug:"策略中的条件和动作对象",content:`策略包含一个带有参数的操作列表。每个操作都可以通过一个条件被控。 名称
必填
描述 condition
选填
必须满足才能触发其相应操作的规则 action 此特定步骤的操作参数 条件和操作都有自己的参数列表。每个条件/动作对都是独立于其他条件/动作执行的。执行顺序与策略中的声明相同
示例
pipelines: default: apiEndpoints: - api policies: - simple-logger: # 策略名称 - # 可由条件选通的操作数组 condition: # 只有当路径恰好为/v1时，才会执行此操作 name: pathExact path: /v1 action: message: "V1: \${req.originalUrl}" - # 仅在上一个操作完成后执行 condition: # 只有当路径恰好为/v2时才执行此操作 name: pathExact path: /v2 action: message: "V2: \${req.originalUrl}" - # 仅在前两个操作完成后执行 action: # 无条件，始终执行 message: "GENERIC: \${req.method}" - proxy: # 策略名称 - # 具有条件\\操作属性的对象数组 action: serviceEndpoint: example`}]},{path:"/404.html",title:"",pathLocale:"/",contents:[]},{path:"/linux/",title:"Linux",pathLocale:"/",contents:[]},{path:"/%E5%89%8D%E7%AB%AF/",title:"前端",pathLocale:"/",contents:[]},{path:"/%E5%AF%BC%E8%88%AA/",title:"导航",pathLocale:"/",contents:[]},{path:"/%E5%89%8D%E7%AB%AF/js/",title:"Js",pathLocale:"/",contents:[]},{path:"/%E7%88%AC%E8%99%AB/",title:"爬虫",pathLocale:"/",contents:[]},{path:"/%E5%89%8D%E7%AB%AF/vue/",title:"Vue",pathLocale:"/",contents:[]},{path:"/%E5%89%8D%E7%AB%AF/%E9%81%87%E5%88%B0%E7%9A%84%E9%97%AE%E9%A2%98/",title:"遇到的问题",pathLocale:"/",contents:[]},{path:"/%E5%89%8D%E7%AB%AF/%E9%9D%A2%E8%AF%95%E9%A2%98/",title:"面试题",pathLocale:"/",contents:[]},{path:"/%E5%90%8E%E7%AB%AF/golang/",title:"Golang",pathLocale:"/",contents:[]},{path:"/%E5%90%8E%E7%AB%AF/",title:"后端",pathLocale:"/",contents:[]},{path:"/%E5%90%8E%E7%AB%AF/node/",title:"Node",pathLocale:"/",contents:[]},{path:"/%E5%B7%A5%E5%85%B7/git/",title:"Git",pathLocale:"/",contents:[]},{path:"/%E5%B7%A5%E5%85%B7/",title:"工具",pathLocale:"/",contents:[]},{path:"/%E5%B7%A5%E5%85%B7/redis/",title:"Redis",pathLocale:"/",contents:[]},{path:"/%E5%B7%A5%E5%85%B7/vuepress/",title:"Vuepress",pathLocale:"/",contents:[]},{path:"/%E5%B7%A5%E5%85%B7/ssh/",title:"Ssh",pathLocale:"/",contents:[]},{path:"/%E5%B7%A5%E5%85%B7/%E6%8A%93%E5%8C%85%E5%B7%A5%E5%85%B7/",title:"抓包工具",pathLocale:"/",contents:[]},{path:"/%E5%B7%A5%E5%85%B7/%E7%BD%91%E5%85%B3/",title:"网关",pathLocale:"/",contents:[]},{path:"/category/",title:"分类",pathLocale:"/",contents:[]},{path:"/tag/",title:"标签",pathLocale:"/",contents:[]},{path:"/article/",title:"文章",pathLocale:"/",contents:[]},{path:"/star/",title:"收藏",pathLocale:"/",contents:[]},{path:"/timeline/",title:"时间轴",pathLocale:"/",contents:[]},{path:"/category/linux/",title:"linux 分类",pathLocale:"/",contents:[]},{path:"/tag/%E5%89%8D%E7%AB%AF/",title:"标签: 前端",pathLocale:"/",contents:[]},{path:"/category/%E9%83%A8%E7%BD%B2/",title:"部署 分类",pathLocale:"/",contents:[]},{path:"/tag/%E5%A4%A7%E6%96%87%E4%BB%B6%E4%B8%8A%E4%BC%A0/",title:"标签: 大文件上传",pathLocale:"/",contents:[]},{path:"/category/node/",title:"node 分类",pathLocale:"/",contents:[]},{path:"/tag/%E5%B8%B8%E7%94%A8%E5%B7%A5%E5%85%B7%E6%96%B9%E6%B3%95/",title:"标签: 常用工具方法",pathLocale:"/",contents:[]},{path:"/category/%E5%89%8D%E7%AB%AF/",title:"前端 分类",pathLocale:"/",contents:[]},{path:"/tag/%E5%89%8D%E7%AB%AF%E6%80%A7%E8%83%BD/",title:"标签: 前端性能",pathLocale:"/",contents:[]},{path:"/category/%E8%B7%A8%E5%9F%9F/",title:"跨域 分类",pathLocale:"/",contents:[]},{path:"/tag/js/",title:"标签: js",pathLocale:"/",contents:[]},{path:"/category/js/",title:"js 分类",pathLocale:"/",contents:[]},{path:"/tag/%E8%AF%B7%E6%B1%82%E8%BD%AE%E8%AF%A2/",title:"标签: 请求轮询",pathLocale:"/",contents:[]},{path:"/category/golang/",title:"golang 分类",pathLocale:"/",contents:[]},{path:"/tag/%E7%88%AC%E8%99%AB/",title:"标签: 爬虫",pathLocale:"/",contents:[]},{path:"/category/vue/",title:"vue 分类",pathLocale:"/",contents:[]},{path:"/tag/%E6%8E%98%E9%87%91%E5%B7%A5%E5%85%B7/",title:"标签: 掘金工具",pathLocale:"/",contents:[]},{path:"/category/vue-router/",title:"vue-router 分类",pathLocale:"/",contents:[]},{path:"/tag/%E8%87%AA%E5%8A%A8%E7%AD%BE%E5%88%B0/",title:"标签: 自动签到",pathLocale:"/",contents:[]},{path:"/category/nginx/",title:"nginx 分类",pathLocale:"/",contents:[]},{path:"/tag/%E5%AF%BC%E8%88%AA/",title:"标签: 导航",pathLocale:"/",contents:[]},{path:"/category/%E9%9D%A2%E8%AF%95%E9%A2%98/",title:"面试题 分类",pathLocale:"/",contents:[]},{path:"/tag/excel%E8%A7%A3%E6%9E%90/",title:"标签: excel解析",pathLocale:"/",contents:[]},{path:"/category/html/",title:"html 分类",pathLocale:"/",contents:[]},{path:"/tag/vuepress/",title:"标签: vuepress",pathLocale:"/",contents:[]},{path:"/category/%E5%85%B6%E4%BB%96/",title:"其他 分类",pathLocale:"/",contents:[]},{path:"/tag/vue/",title:"标签: vue",pathLocale:"/",contents:[]},{path:"/category/%E5%89%8D%E7%AB%AF%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96/",title:"前端性能优化 分类",pathLocale:"/",contents:[]},{path:"/tag/arco-design/",title:"标签: arco design",pathLocale:"/",contents:[]},{path:"/category/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/",title:"计算机网络 分类",pathLocale:"/",contents:[]},{path:"/tag/%E7%9B%91%E5%90%ACdom%E5%85%83%E7%B4%A0%E5%AE%BD%E9%AB%98%E5%8F%98%E5%8C%96/",title:"标签: 监听dom元素宽高变化",pathLocale:"/",contents:[]},{path:"/category/%E5%90%8E%E7%AB%AF/",title:"后端 分类",pathLocale:"/",contents:[]},{path:"/tag/%E9%81%87%E5%88%B0%E7%9A%84%E9%97%AE%E9%A2%98/",title:"标签: 遇到的问题",pathLocale:"/",contents:[]},{path:"/category/git/",title:"git 分类",pathLocale:"/",contents:[]},{path:"/tag/pm2/",title:"标签: pm2",pathLocale:"/",contents:[]},{path:"/category/%E5%AE%89%E8%A3%85%E6%95%99%E7%A8%8B/",title:"安装教程 分类",pathLocale:"/",contents:[]},{path:"/tag/%E6%8A%A5%E9%94%99/",title:"标签: 报错",pathLocale:"/",contents:[]},{path:"/category/%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4/",title:"常用命令 分类",pathLocale:"/",contents:[]},{path:"/tag/golang/",title:"标签: golang",pathLocale:"/",contents:[]},{path:"/category/redis/",title:"redis 分类",pathLocale:"/",contents:[]},{path:"/tag/%E5%AE%89%E8%A3%85%E6%95%99%E7%A8%8B/",title:"标签: 安装教程",pathLocale:"/",contents:[]},{path:"/category/gin/",title:"gin 分类",pathLocale:"/",contents:[]},{path:"/tag/%E7%89%88%E6%9C%AC%E7%AE%A1%E7%90%86%E5%B7%A5%E5%85%B7/",title:"标签: 版本管理工具",pathLocale:"/",contents:[]},{path:"/category/vuepress/",title:"vuepress 分类",pathLocale:"/",contents:[]},{path:"/tag/nvm/",title:"标签: nvm",pathLocale:"/",contents:[]},{path:"/category/%E6%8A%93%E5%8C%85/",title:"抓包 分类",pathLocale:"/",contents:[]},{path:"/tag/node/",title:"标签: node",pathLocale:"/",contents:[]}],$="update-vuepress-plugin-full-text-search2-search-index";var M=f(U),_=b(()=>{const e=new Map;for(const t of M.value)e.set(t.path,t);return e});import.meta.webpackHot&&(__VUE_HMR_RUNTIME__[$]=e=>{M.value=e});function G(e){const t=f([]);let i=null;return C(e,()=>{i&&clearTimeout(i),i=setTimeout(a,100)}),t;function a(){const c=e.value.toLowerCase().trim();if(!c){t.value=[];return}const s=new Map,n=new Set;for(const o of M.value)for(const r of H(o,c)){n.add(r.parentPageTitle);let l=s.get(r.parentPageTitle);l||(l=[],s.set(r.parentPageTitle,l)),l.push(r)}const d=[...n].sort((o,r)=>{const l=s.get(o);return s.get(r).length-l.length});t.value=[...s].flatMap(([,o])=>o).sort((o,r)=>o.parentPagePriority-r.parentPagePriority||d.indexOf(o.parentPageTitle)-d.indexOf(r.parentPageTitle)||o.priority-r.priority)}}function*H(e,t){const i=w(e.title,t);if(i){yield{path:e.path,parentPageTitle:A(e),title:e.title,display:i,page:e,content:null,parentPagePriority:1,priority:1};return}for(const a of e.contents){const c=w(a.header,t);if(c){yield{path:e.path+(a.slug?`#${a.slug}`:""),parentPageTitle:A(e),title:e.title,display:c,page:e,content:null,parentPagePriority:10,priority:2};continue}const s=w(a.content,t);s&&(yield{path:e.path+(a.slug?`#${a.slug}`:""),parentPageTitle:A(e),title:e.title,display:[{type:"header",str:`${a.header}
`},...s],page:e,content:null,parentPagePriority:10,priority:10})}}function A(e){const t=e.path.split("/");let i="/";return t[1]&&(i=`/${t[1]}/`),(_.value.get(i)||e).title}function w(e,t){const i=[];let a=0;const c=e.toLowerCase().replace(/\s/gu," ");let s=0,n=c.indexOf(t,s);if(n<0)return null;for(;n>=0;){const o=n+t.length;if(d(e.slice(s,n),"normal"),d(e.slice(n,o),"highlight"),s=o,n=c.indexOf(t,s),a>100)break}return d(e.slice(s),"normal"),i.filter(o=>o.str);function d(o,r){let l=o;r==="normal"&&l.length>100&&a===0&&(l=`… ${l.slice(-10)}`);let h=!1;if(a+l.length>100){if(i.some(m=>m.type==="ellipsis"))return;l=l.slice(0,Math.max(100-a,1)),h=!0}i.push({type:r,str:l}),a+=l.length,h&&(i.push({type:"ellipsis",str:" …"}),a+=2)}}const q={"/":{placeholder:"搜索"}},Y=j({name:"SearchBox",props:{locales:{type:Object,required:!1,default:()=>q}},setup(e){const{locales:t}=I(e),i=f(""),a=f(!1),c=f(-1),s=G(i),n=b(()=>i.value&&a.value&&s.value.length),d=N(),o=O(),r=b(()=>t.value[o.value]??{});function l(){if(!n.value)return;let g=c.value-1;g<0&&(g=s.value.length-1),m(g)}function h(){if(!n.value)return;let g=c.value+1;g>=s.value.length&&(g=0),m(g)}function m(g){c.value=g}function k(){c.value=-1}function D(g){if(!n.value)return;const L=s.value[g];L&&d.push(L.path)}return{query:i,focused:a,focusIndex:c,suggestions:s,activeSuggestion:n,onUp:l,onDown:h,focus:m,unfocus:k,go:D,locale:r}}});const Q={class:"search-box",role:"search"},J=["placeholder"],V=["onMousedown","onMouseenter"],W=["href"],X={key:0,class:"parent-page-title"},Z={class:"suggestion-row"},K={class:"page-title"},ee={class:"suggestion-content"};function te(e,t,i,a,c,s){return p(),u("div",Q,[P(E("input",{ref:"input","onUpdate:modelValue":t[0]||(t[0]=n=>e.query=n),"aria-label":"Search",class:x({focused:e.focused}),placeholder:e.locale.placeholder??"Search",autocomplete:"off",spellcheck:"false",onFocus:t[1]||(t[1]=()=>e.focused=!0),onBlur:t[2]||(t[2]=()=>e.focused=!1),onKeyup:[t[3]||(t[3]=y(n=>e.go(e.focusIndex),["enter"])),t[4]||(t[4]=y((...n)=>e.onUp&&e.onUp(...n),["up"])),t[5]||(t[5]=y((...n)=>e.onDown&&e.onDown(...n),["down"]))]},null,42,J),[[F,e.query]]),e.activeSuggestion?(p(),u("ul",{key:0,class:"suggestions",onMouseleave:t[7]||(t[7]=(...n)=>e.unfocus&&e.unfocus(...n))},[(p(!0),u(B,null,T(e.suggestions,(n,d)=>(p(),u("li",{key:d,class:x(["suggestion",{focused:d===e.focusIndex}]),onMousedown:o=>e.go(d),onMouseenter:o=>e.focus(d)},[E("a",{href:n.path,onClick:t[6]||(t[6]=z(()=>{},["prevent"]))},[n.parentPageTitle&&(!e.suggestions[d-1]||e.suggestions[d-1].parentPageTitle!==n.parentPageTitle)?(p(),u("div",X,v(n.parentPageTitle),1)):S("v-if",!0),E("div",Z,[E("div",K,v(n.title||n.path),1),E("div",ee,[(p(!0),u(B,null,T(n.display,(o,r)=>(p(),u("span",{key:r,class:x(o.type)},v(o.str),3))),128))])])],8,W)],42,V))),128))],32)):S("v-if",!0)])}const ae=R(Y,[["render",te],["__scopeId","data-v-e574e488"],["__file","SearchBox.vue"]]);export{ae as default};

import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o,c as s,a as e,b as t,d as c,e as r}from"./app-d0b2b34c.js";const l={},n=r('<h1 id="git安装教程" tabindex="-1"><a class="header-anchor" href="#git安装教程" aria-hidden="true">#</a> git安装教程</h1><h2 id="centos安装git-安装版本过旧" tabindex="-1"><a class="header-anchor" href="#centos安装git-安装版本过旧" aria-hidden="true">#</a> centos安装git （安装版本过旧）</h2><p>安装：yum install git -y</p><p>移除：yum remove git</p><h2 id="源代码编译" tabindex="-1"><a class="header-anchor" href="#源代码编译" aria-hidden="true">#</a> 源代码编译</h2><p>安装编译依赖</p><p>yum install curl-devel expat-devel gettext-devel openssl-devel zlib-devel asciidoc</p><p>yum install gcc perl-ExtUtils-MakeMaker</p><p>打开文件夹存放git包</p><p>cd /usr/local/src/</p><p>下载git压缩包（在git官网查看最新版本版本号，在镜像站找对应的压缩包）</p>',11),d={href:"https://mirrors.edge.kernel.org/pub/software/scm/git/git-2.42.0.tar.xz",target:"_blank",rel:"noopener noreferrer"},g=r("<p>解压安装包</p><p>tar -xvf git-2.42.0.tar.xz</p><p>打开解压好的git文件夹</p><p>cd git-2.42.0</p><p>编译git</p><p>make prefix=/usr/local/git all</p><p>安装git</p><p>make prefix=/usr/local/git install</p><p>配置环境变量</p><p>echo &quot;export PATH=$PATH:/usr/local/git/bin&quot; &gt;&gt; /etc/profile &amp;&amp; source /etc/profile</p><p>查看版本</p><p>git --verison</p>",12);function h(_,m){const a=p("ExternalLinkIcon");return o(),s("div",null,[n,e("p",null,[t("wget "),e("a",d,[t("https://mirrors.edge.kernel.org/pub/software/scm/git/git-2.42.0.tar.xz"),c(a)])]),g])}const x=i(l,[["render",h],["__file","git安装教程.html.vue"]]);export{x as default};

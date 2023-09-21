import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as i,e as d}from"./app-d0b2b34c.js";const s={},a=d(`<h1 id="nvm-使用" tabindex="-1"><a class="header-anchor" href="#nvm-使用" aria-hidden="true">#</a> nvm 使用</h1><h1 id="使用nvm对node版本进行管理" tabindex="-1"><a class="header-anchor" href="#使用nvm对node版本进行管理" aria-hidden="true">#</a> 使用nvm对node版本进行管理</h1><p>node.js是前端工程化中常用的环境，当接手一个项目时，经常遇到安装依赖包不成功的情况。大部分是因为node版本不兼容导致的。项目只有一个是还好说。当项目多了之后。可能出现多个项目使用node版本不同的情况，这时，我们可以使用nvm来快速的切换node版本。本片主要讲述nvm的使用</p><p>切换淘宝镜像</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>vim ~/.bashrc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>export NVM_DIR=&quot;$HOME/.nvm&quot;
[ -s &quot;$NVM_DIR/nvm.sh&quot; ] &amp;&amp; \\. &quot;$NVM_DIR/nvm.sh&quot; # This loads nvm
[ -s &quot;$NVM_DIR/bash_completion&quot; ] &amp;&amp; \\. &quot;$NVM_DIR/bash_completion&quot;
export NVM_NODEJS_ORG_MIRROR=http://npm.taobao.org/mirrors/node
export NVM_IOJS_ORG_MIRROR=http://npm.taobao.org/mirrors/iojs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>source ~/.bashrc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1.下载
wget https://cdn.npm.taobao.org/dist/node/v12.13.1/node-v12.13.1-linux-x64.tar.xz

2.解压：
xz -d node-v12.13.1-linux-x64.tar.xz
tar -xvf node-v12.13.1-linux-x64.tar

3.移动
mv node-v12.13.1-linux-x64  /usr/local/

4.重命名
mv /usr/local/node-v12.13.1-linux-x64/  /usr/local/node

5.编辑配置文件
vim /etc/profile

6.文件末尾增加内容，按 i 命令，进行新增
export NODE_HOME=/usr/local/node
export PATH=$NODE_HOME/bin:$PATH

ps:内容新增后，先按esc键，退出插入模式，然后按住shift键，并连按两次z字符，
即可保存刚才的编辑并退出vim编辑状态

7.执行source才能使环境变量立即有效
source /etc/profile

安装成功后，查看对应版本信息
node -v
npm -v
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),l=[a];function v(r,t){return n(),i("div",null,l)}const m=e(s,[["render",v],["__file","nvm使用.html.vue"]]);export{m as default};

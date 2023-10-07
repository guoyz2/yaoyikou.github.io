import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e}from"./app-2b248397.js";const t={},l=e(`<h1 id="nvm-使用" tabindex="-1"><a class="header-anchor" href="#nvm-使用" aria-hidden="true">#</a> nvm 使用</h1><p>后续计划：</p><ul class="task-list-container"><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> 如何将自己开发的模块发布到 npm 注册表</label></li></ul><p>node.js 是前端工程化中常用的环境，当接手一个项目时，经常遇到安装依赖包不成功的情况。大部分是因为 node 版本不兼容导致的。项目只有一个是还好说。当项目多了之后。可能出现多个项目使用 node 版本不同的情况，这时，我们可以使用 nvm 来快速的切换 node 版本。</p><h2 id="nvm-安装" tabindex="-1"><a class="header-anchor" href="#nvm-安装" aria-hidden="true">#</a> nvm 安装</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 定义一个环境变量(nvm的安装目录)</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">NVM_DIR</span><span class="token operator">=</span><span class="token string">&quot;/home/soft/.nvm&quot;</span>
<span class="token comment"># 拉取 nvm 代码,如果github下载慢，可以使用gitee同步一下github的代码，然后从gitee克隆</span>
<span class="token function">git</span> clone https://github.com/nvm-sh/nvm.git <span class="token string">&quot;<span class="token variable">$NVM_DIR</span>&quot;</span>
<span class="token builtin class-name">cd</span> <span class="token string">&quot;<span class="token variable">$NVM_DIR</span>&quot;</span>
<span class="token comment"># 将当前分支切换到最新的以 &quot;v&quot; 开头的标签版本的分支</span>
<span class="token function">git</span> checkout <span class="token variable"><span class="token variable">\`</span><span class="token function">git</span> describe <span class="token parameter variable">--abbrev</span><span class="token operator">=</span><span class="token number">0</span> <span class="token parameter variable">--tags</span> <span class="token parameter variable">--match</span> <span class="token string">&quot;v[0-9]*&quot;</span> <span class="token punctuation">$(</span>git rev-list <span class="token parameter variable">--tags</span> --max-count<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token variable">\`</span></span>
<span class="token comment"># 配置环境变量</span>
<span class="token function">vim</span> ~/.bashrc
<span class="token comment"># 将下面的内容放到 .bashrc 文件的最下面</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">NVM_DIR</span><span class="token operator">=</span><span class="token string">&quot;/home/soft/.nvm&quot;</span>
<span class="token punctuation">[</span> <span class="token parameter variable">-s</span> <span class="token string">&quot;<span class="token variable">$NVM_DIR</span>/nvm.sh&quot;</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\\</span>. <span class="token string">&quot;<span class="token variable">$NVM_DIR</span>/nvm.sh&quot;</span> <span class="token comment"># 加载nvm</span>
<span class="token punctuation">[</span> <span class="token parameter variable">-s</span> <span class="token string">&quot;<span class="token variable">$NVM_DIR</span>/bash_completion&quot;</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\\</span>. <span class="token string">&quot;<span class="token variable">$NVM_DIR</span>/bash_completion&quot;</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">NVM_NODEJS_ORG_MIRROR</span><span class="token operator">=</span>http://npm.taobao.org/mirrors/node <span class="token comment"># 设置node安装镜像</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">NVM_IOJS_ORG_MIRROR</span><span class="token operator">=</span>http://npm.taobao.org/mirrors/iojs
<span class="token comment"># 重新加载环境变量</span>
<span class="token builtin class-name">source</span> ~/.bashrc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="nvm-常用命令" tabindex="-1"><a class="header-anchor" href="#nvm-常用命令" aria-hidden="true">#</a> nvm 常用命令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看所有可以安装的版本(长期支持版，--lts去掉是全部版本)</span>
nvm ls-remote <span class="token parameter variable">--lts</span>
<span class="token comment"># 安装特定版本的 node</span>
nvm <span class="token function">install</span> <span class="token operator">&lt;</span>node版本号<span class="token operator">&gt;</span>
<span class="token comment"># 卸载特定版本的 node</span>
nvm uninstall <span class="token operator">&lt;</span>node版本号<span class="token operator">&gt;</span>
<span class="token comment"># 切换到某个版本</span>
nvm use <span class="token operator">&lt;</span>node版本号<span class="token operator">&gt;</span>
<span class="token comment"># 查看已安装的 node 版本</span>
nvm <span class="token function">ls</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="单独安装-node" tabindex="-1"><a class="header-anchor" href="#单独安装-node" aria-hidden="true">#</a> 单独安装 node</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 下载</span>
<span class="token function">wget</span> https://cdn.npm.taobao.org/dist/node/v16.20.2/node-v16.20.2-linux-x64.tar.xz
<span class="token comment"># 解压：</span>
xz <span class="token parameter variable">-d</span> node-v16.20.2-linux-x64.tar.xz
<span class="token function">tar</span> <span class="token parameter variable">-xvf</span> node-v16.20.2-linux-x64.tar
<span class="token comment"># 移动</span>
<span class="token function">mv</span> node-v16.20.2-linux-x64  /usr/local/
<span class="token comment"># 重命名</span>
<span class="token function">mv</span> /usr/local/node-v16.20.2-linux-x64/  /usr/local/node
<span class="token comment"># 配置环境变量</span>
<span class="token function">vim</span> /etc/profile
<span class="token comment"># 文件末尾增加内容，按 i 命令，进行新增</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">NODE_HOME</span><span class="token operator">=</span>/usr/local/node
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token variable">$NODE_HOME</span>/bin:<span class="token environment constant">$PATH</span>
<span class="token comment"># ps:内容新增后，先按esc键，退出插入模式，然后按住shift键，并连按两次z字符，</span>
<span class="token comment"># 即可保存刚才的编辑并退出vim编辑状态</span>
<span class="token comment"># 执行source才能使环境变量立即有效</span>
<span class="token builtin class-name">source</span> /etc/profile
<span class="token comment"># 安装成功后，查看对应版本信息</span>
<span class="token function">node</span> <span class="token parameter variable">-v</span>
<span class="token function">npm</span> <span class="token parameter variable">-v</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="node-常用命令" tabindex="-1"><a class="header-anchor" href="#node-常用命令" aria-hidden="true">#</a> node 常用命令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 使用官方注册表(发布npm包到npm仓库时使用)</span>
<span class="token function">npm</span> config <span class="token builtin class-name">set</span> <span class="token assign-left variable">registry</span><span class="token operator">=</span>https://registry.npmjs.org/
<span class="token comment"># 设置淘宝镜像</span>
<span class="token function">npm</span> config <span class="token builtin class-name">set</span> <span class="token assign-left variable">registry</span><span class="token operator">=</span>https://registry.npm.taobao.org/
<span class="token comment"># 初始化</span>
<span class="token function">npm</span> init
<span class="token comment"># 安装指定版本的包</span>
<span class="token function">npm</span> i <span class="token operator">&lt;</span>包名<span class="token operator">&gt;</span>@版本号
<span class="token comment"># 全局安装</span>
<span class="token function">npm</span> i <span class="token operator">&lt;</span>包名<span class="token operator">&gt;</span>
<span class="token comment"># 安装到开发依赖</span>
<span class="token function">npm</span> i <span class="token operator">&lt;</span>包名<span class="token operator">&gt;</span> <span class="token parameter variable">-D</span>
<span class="token comment"># 卸载包</span>
<span class="token function">npm</span> uninstall <span class="token operator">&lt;</span>包名<span class="token operator">&gt;</span>
<span class="token comment"># 运行 package.json 中定义的脚本名称</span>
<span class="token function">npm</span> run <span class="token operator">&lt;</span>脚本名称<span class="token operator">&gt;</span>
<span class="token comment"># 运行 package.json 中定义的start名称</span>
<span class="token function">npm</span> start
<span class="token comment"># 将当前项目打包成 npm 全局模块</span>
<span class="token function">npm</span> <span class="token function">link</span>
<span class="token comment"># 可以在其他项目中引入作为依赖包</span>
<span class="token function">npm</span> <span class="token function">link</span> 包名
<span class="token comment"># 将当前项目发布到 npm 注册表</span>
<span class="token function">npm</span> publish
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),i=[l];function p(o,c){return s(),a("div",null,i)}const d=n(t,[["render",p],["__file","nvm使用.html.vue"]]);export{d as default};

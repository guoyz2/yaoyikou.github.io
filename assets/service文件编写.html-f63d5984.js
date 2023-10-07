import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as a,e}from"./app-2b248397.js";const t={},l=e(`<h1 id="编写service文件" tabindex="-1"><a class="header-anchor" href="#编写service文件" aria-hidden="true">#</a> 编写service文件</h1><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># vim /etc/systemd/system/&lt;服务名&gt;.service</span>
<span class="token function">vim</span> /etc/systemd/system/blog_server.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置解析" tabindex="-1"><a class="header-anchor" href="#配置解析" aria-hidden="true">#</a> 配置解析</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 描述服务的基本信息</span>
<span class="token punctuation">[</span>Unit<span class="token punctuation">]</span>
<span class="token comment"># 描述服务的简短说明</span>
<span class="token assign-left variable">Description</span><span class="token operator">=</span>Blog Server

<span class="token punctuation">[</span>Service<span class="token punctuation">]</span>
<span class="token comment"># 服务类型：简单服务，不会派生出其他进程</span>
<span class="token assign-left variable">Type</span><span class="token operator">=</span>simple
<span class="token comment"># 发生错误或异常退出时自动重启</span>
<span class="token assign-left variable">Restart</span><span class="token operator">=</span>always
<span class="token comment"># 定义服务重启间隔</span>
<span class="token assign-left variable">RestartSec</span><span class="token operator">=</span>3s
<span class="token comment"># 指定服务的工作目录：提供服务执行命令时的参考路径</span>
<span class="token assign-left variable">WorkingDirectory</span><span class="token operator">=</span>/home/blog/server
<span class="token comment"># 启动服务执行命令</span>
<span class="token assign-left variable">ExecStart</span><span class="token operator">=</span>/home/blog/server/server

<span class="token punctuation">[</span>Install<span class="token punctuation">]</span>
<span class="token comment"># 定义为开机启动项</span>
<span class="token assign-left variable">WantedBy</span><span class="token operator">=</span>multi-user.target
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="systemctl-常用命令" tabindex="-1"><a class="header-anchor" href="#systemctl-常用命令" aria-hidden="true">#</a> systemctl 常用命令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 重新加载 systemd 服务</span>
systemctl daemon-reload
<span class="token comment"># 启动服务</span>
systemctl start <span class="token operator">&lt;</span>服务名<span class="token operator">&gt;</span>
<span class="token comment"># 停止服务</span>
systemctl stop <span class="token operator">&lt;</span>服务名<span class="token operator">&gt;</span>
<span class="token comment"># 查看状态</span>
systemctl status <span class="token operator">&lt;</span>服务名<span class="token operator">&gt;</span>
<span class="token comment"># 重启服务</span>
systemctl restart <span class="token operator">&lt;</span>服务名<span class="token operator">&gt;</span>
<span class="token comment"># 开机自启服务</span>
systemctl <span class="token builtin class-name">enable</span> <span class="token operator">&lt;</span>服务名<span class="token operator">&gt;</span>
<span class="token comment"># 关闭开机自启服务</span>
systemctl disable <span class="token operator">&lt;</span>服务名<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),i=[l];function c(r,o){return n(),a("div",null,i)}const m=s(t,[["render",c],["__file","service文件编写.html.vue"]]);export{m as default};

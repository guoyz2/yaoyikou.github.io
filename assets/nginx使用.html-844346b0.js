import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as s,e}from"./app-2b248397.js";const i={},l=e(`<h1 id="nginx使用" tabindex="-1"><a class="header-anchor" href="#nginx使用" aria-hidden="true">#</a> nginx使用</h1><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><h3 id="linux-安装" tabindex="-1"><a class="header-anchor" href="#linux-安装" aria-hidden="true">#</a> linux 安装</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装 nginx 需要的依赖环境</span>
yum <span class="token parameter variable">-y</span> <span class="token function">install</span> gcc zlib zlib-devel pcre-devel openssl openssl-devel
<span class="token comment"># 创建一个 soft 目录安装软件</span>
<span class="token function">mkdir</span> /home/soft <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> /home/soft
<span class="token comment"># 创建一个 nginx 的安装目录</span>
<span class="token function">mkdir</span> nginx
<span class="token comment"># 下载 nginx 压缩包（用最新的版本号替换下面的版本号）</span>
<span class="token function">wget</span> http://nginx.org/download/nginx-1.24.0.tar.gz
<span class="token comment"># 解压 nginx 压缩包（版本号跟上面的版本号相同）</span>
<span class="token function">tar</span> <span class="token parameter variable">-xvf</span> nginx-1.24.0.tar.gz
<span class="token comment"># 进入加压后的目录（版本号跟上面的版本号相同）</span>
<span class="token builtin class-name">cd</span> nginx-1.24.0/
<span class="token comment"># 指定 nginx 的安装目录</span>
./configure <span class="token parameter variable">--prefix</span><span class="token operator">=</span>/home/soft/nginx
<span class="token comment"># 执行 make 命令编译</span>
<span class="token function">make</span>
<span class="token comment"># 执行 make install 命令安装</span>
<span class="token function">make</span> <span class="token function">install</span>
<span class="token comment"># 查看 nginx 目录下内容</span>
<span class="token builtin class-name">cd</span> /home/soft/nginx <span class="token operator">&amp;&amp;</span> ll
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://chart-1253420647.cos.ap-beijing.myqcloud.com/markdown/image-20230930110049428.png" alt="安装成功" tabindex="0" loading="lazy"><figcaption>安装成功</figcaption></figure><h3 id="放行-nginx-端口号" tabindex="-1"><a class="header-anchor" href="#放行-nginx-端口号" aria-hidden="true">#</a> 放行 nginx 端口号</h3><ol><li>如果是云服务器，到云服务器控制台配置防火墙（腾讯云）或安全组入方向规则（华为云、阿里云）</li><li>如果是公司服务器，使用以下命令</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>// 放行nginx端口号 <span class="token punctuation">(</span><span class="token number">80</span>替换成需要开发的端口号<span class="token punctuation">)</span>
firewall-cmd --add-port<span class="token operator">=</span><span class="token number">80</span>/tcp <span class="token parameter variable">--zone</span><span class="token operator">=</span>public <span class="token parameter variable">--permanent</span>
// 重启防火墙
systemctl restart firewalld
// 查看防火墙放行端口号
firewall-cmd --list-port
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="在任意路径下都可以使用nginx" tabindex="-1"><a class="header-anchor" href="#在任意路径下都可以使用nginx" aria-hidden="true">#</a> 在任意路径下都可以使用nginx</h3><p>方法1：创建软连接</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 将 nginx 安装目录下脚本文件夹中的 nginx 程序以软连接的形式映射到 /user/local/bin 下</span>
<span class="token function">ln</span> <span class="token parameter variable">-s</span> /home/soft/nginx/sbin/nginx /usr/local/bin/nginx
<span class="token comment"># 如果需要删除软连接，可以使用以下命令 rm -f &lt;软连接路径&gt;</span>
<span class="token function">rm</span> <span class="token parameter variable">-f</span> /usr/local/bin/nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注：<code>/usr/local/bin</code>是一个常用的目录，用于存放用户自行安装的可执行程序。当将程序安装到<code>/usr/local/bin</code>目录时，可以直接在终端中运行该程序，而无需指定完整的路径。</p><figure><img src="https://chart-1253420647.cos.ap-beijing.myqcloud.com/markdown/image-20230930111959916.png" alt="软连接配置成功" tabindex="0" loading="lazy"><figcaption>软连接配置成功</figcaption></figure><figure><img src="https://chart-1253420647.cos.ap-beijing.myqcloud.com/markdown/image-20230930112235442.png" alt="删除软连接命令" tabindex="0" loading="lazy"><figcaption>删除软连接命令</figcaption></figure><p>方法2：配置环境变量</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;export PATH=<span class="token environment constant">$PATH</span>:/home/soft/nginx/sbin&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/profile <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">source</span> /etc/profile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://chart-1253420647.cos.ap-beijing.myqcloud.com/markdown/image-20230930112316758.png" alt="删除成功之后我们使用配置环境变量的方法，同样可用" tabindex="0" loading="lazy"><figcaption>删除成功之后我们使用配置环境变量的方法，同样可用</figcaption></figure><h2 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令" aria-hidden="true">#</a> 常用命令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 启动nginx</span>
nginx
<span class="token comment"># 关闭nginx</span>
nginx <span class="token parameter variable">-s</span> stop
<span class="token comment"># 重新加载nginx配置</span>
nginx <span class="token parameter variable">-s</span> reload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19),c=[l];function t(r,o){return a(),s("div",null,c)}const m=n(i,[["render",t],["__file","nginx使用.html.vue"]]);export{m as default};

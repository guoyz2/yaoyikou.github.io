import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as r,c as t,a,b as e,d as c,e as d}from"./app-2b248397.js";const l={},o=a("h1",{id:"前端监控系统sentry使用",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#前端监控系统sentry使用","aria-hidden":"true"},"#"),e(" 前端监控系统Sentry使用")],-1),p=a("p",null,"前提：需要安装docker和python3",-1),h=a("h2",{id:"安装",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#安装","aria-hidden":"true"},"#"),e(" 安装")],-1),m={href:"https://github.com/getsentry/self-hosted",target:"_blank",rel:"noopener noreferrer"},u=d(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 拉代码</span>
<span class="token function">git</span> clone https://github.com/getsentry/self-hosted.git
<span class="token builtin class-name">cd</span> self-hosted
./install.sh
<span class="token function">docker-compose</span> up <span class="token parameter variable">-d</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="生成key" tabindex="-1"><a class="header-anchor" href="#生成key" aria-hidden="true">#</a> 生成key</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 生成key</span>
<span class="token function">docker-compose</span> run <span class="token parameter variable">--rm</span> web config generate-secret-key
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://chart-1253420647.cos.ap-beijing.myqcloud.com/markdown/image-20231007005023677.png" alt="生成 key" tabindex="0" loading="lazy"><figcaption>生成 key</figcaption></figure><p>将生成的key填入 .env 文件</p><figure><img src="https://chart-1253420647.cos.ap-beijing.myqcloud.com/markdown/image-20231007004916467.png" alt="生成 key 填入 .env 文件" tabindex="0" loading="lazy"><figcaption>生成 key 填入 .env 文件</figcaption></figure><h3 id="更新配置" tabindex="-1"><a class="header-anchor" href="#更新配置" aria-hidden="true">#</a> 更新配置</h3><p>如果第一次没有创建用户，可以使用这个命令创建管理员用户（需要输入邮箱、密码、确认密码）</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker-compose</span> run <span class="token parameter variable">--rm</span> web upgrade
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="配置邮件服务" tabindex="-1"><a class="header-anchor" href="#配置邮件服务" aria-hidden="true">#</a> 配置邮件服务</h3><p>设置 sentry/config.yml</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mail.host: <span class="token string">&#39;smtp.qq.com&#39;</span>
mail.port: <span class="token number">25</span>
mail.username: <span class="token string">&#39;78300406@qq.com&#39;</span>
mail.password: <span class="token string">&#39;XXXXXXX&#39;</span>  <span class="token comment"># 是邮件服务的授权码，不是邮箱的密码</span>
mail.use-tls: <span class="token boolean">false</span>
<span class="token comment">## The email address to send on behalf of</span>
mail.from: <span class="token string">&#39;78300406@qq.com&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="修改配置应该先关闭再启动" tabindex="-1"><a class="header-anchor" href="#修改配置应该先关闭再启动" aria-hidden="true">#</a> 修改配置应该先关闭再启动</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 关闭</span>
<span class="token function">docker-compose</span> down
<span class="token comment"># 启动</span>
<span class="token function">docker-compose</span> up <span class="token parameter variable">-d</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>删除所有跟sentry的相关镜像</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">rm</span> <span class="token parameter variable">-f</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-a</span> <span class="token operator">|</span> <span class="token function">grep</span> sentry <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $1}&#39;</span><span class="token variable">\`</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="邮箱配置" tabindex="-1"><a class="header-anchor" href="#邮箱配置" aria-hidden="true">#</a> 邮箱配置</h3><h3 id="语言配置" tabindex="-1"><a class="header-anchor" href="#语言配置" aria-hidden="true">#</a> 语言配置</h3><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2>`,19);function v(b,k){const n=i("ExternalLinkIcon");return r(),t("div",null,[o,p,h,a("p",null,[e("sentry自建仓库："),a("a",m,[e("https://github.com/getsentry/self-hosted"),c(n)])]),u])}const _=s(l,[["render",v],["__file","前端监控.html.vue"]]);export{_ as default};

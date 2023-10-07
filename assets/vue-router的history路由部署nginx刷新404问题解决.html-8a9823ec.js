import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e}from"./app-2b248397.js";const i={},t=e(`<h1 id="vue-router的history路由部署nginx刷新404问题解决" tabindex="-1"><a class="header-anchor" href="#vue-router的history路由部署nginx刷新404问题解决" aria-hidden="true">#</a> vue-router的history路由部署nginx刷新404问题解决</h1><h2 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题</h2><p>如果用histroy模式操作切换页面的话，URL会被改变、浏览器不会刷新页面也不会往服务端发请求，但会触发代码内的监听事件从而改变页面内容，所以无需用到服务器也可以自由切换页面了。但是这里有个很核心的点就是URL会改变，即有新的URL诞生，所以如果这时用户主动刷新页面（F5），浏览器发送给服务端的是新的URL，所以服务端要做适配，配置一个合理的规则让这些URL返回的都是同一个index.html</p><h2 id="history路由和hash路由的区别" tabindex="-1"><a class="header-anchor" href="#history路由和hash路由的区别" aria-hidden="true">#</a> history路由和hash路由的区别？</h2><ol><li>hash 路由模式地址中有 #，history路由模式地址中没有 #</li><li>hash 路由模式是基于锚点链接，以及 onhashchange 事件，history 路由模式是基于 h5 的 history API 以及监听 popstate 事件</li></ol><h2 id="解决方案" tabindex="-1"><a class="header-anchor" href="#解决方案" aria-hidden="true">#</a> 解决方案</h2><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
  <span class="token directive"><span class="token keyword">listen</span> <span class="token number">80</span></span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">server_name</span> your_domain.com</span><span class="token punctuation">;</span>

  <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">root</span> /path/to/vue/dist</span><span class="token punctuation">;</span>  <span class="token comment"># Vue应用的构建输出目录</span>
    <span class="token directive"><span class="token keyword">try_files</span> <span class="token variable">$uri</span> <span class="token variable">$uri</span>/ /index.html</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>try_files</code>指令按照从左到右的顺序逐个查找文件路径，并返回第一个找到的文件。如果没有找到任何文件，则会将请求转发给<code>uri</code>指定的备用URI。</p><p>在上面的配置中，当请求的文件路径（<code>$uri</code>）不存在时，Nginx会尝试查找以<code>$uri/</code>结尾的目录。如果目录也不存在，则会将请求转发到<code>/index.html</code>备用URI</p>`,9),o=[t];function r(c,d){return s(),a("div",null,o)}const h=n(i,[["render",r],["__file","vue-router的history路由部署nginx刷新404问题解决.html.vue"]]);export{h as default};

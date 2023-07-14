import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o,c as l,a as n,b as s,d as u,e as a}from"./app-804aff0b.js";const c={},d=a('<h1 id="权限修改" tabindex="-1"><a class="header-anchor" href="#权限修改" aria-hidden="true">#</a> 权限修改</h1><p>今日计划：</p><ul class="task-list-container"><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> 发版权限流程打通</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> 测试报告竞品说明去掉</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-2" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-2"> 测试报告下拉框没有写权限，加个没有权限的字段</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-3" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-3"> 跨域参数传递处理（从datafactory点击到管理系统如果登录有效，无需重新登录）进行中...</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-4" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-4"> reviewboard邮件发送人修改</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-5" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-5"> 系统管理的侧边栏接口对接</label></li></ul><h2 id="发版权限流程打通" tabindex="-1"><a class="header-anchor" href="#发版权限流程打通" aria-hidden="true">#</a> 发版权限流程打通</h2>',4),p={href:"https://gitlab.xpaas.lenovo.com/edgetest/knowledgeweb-admin.git",target:"_blank",rel:"noopener noreferrer"},v=a(`<p>开发环境：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /root/test/ <span class="token comment"># 切换到开发环境目录</span>
<span class="token function">rm</span> –rf knowledgeweb-admin <span class="token comment"># 如果有这个文件先删除</span>
<span class="token function">git</span> clone https://gitlab.xpaas.lenovo.com/edgetest/knowledgeweb-admin.git <span class="token comment"># 从gitlab克隆项目</span>
<span class="token builtin class-name">cd</span> knowledgeweb-admin <span class="token comment"># 切换到项目目录</span>
<span class="token function">npm</span> i <span class="token comment"># 安装依赖包</span>
pm2 start <span class="token parameter variable">--name</span> df_admin_dev <span class="token function">npm</span> -- run dev <span class="token comment"># 使用pm2启动（没有加入pm2 list的时候使用）</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>生产环境:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /usr/local/
<span class="token function">rm</span> –rf knowledgeweb-admin <span class="token comment"># 如果有这个文件先删除</span>
<span class="token function">git</span> clone https://gitlab.xpaas.lenovo.com/edgetest/knowledgeweb-admin.git <span class="token comment"># 从gitlab克隆项目</span>
<span class="token builtin class-name">cd</span> knowledgeweb-admin <span class="token comment"># 切换到项目目录</span>
<span class="token function">npm</span> i <span class="token comment"># 安装依赖包</span>
<span class="token function">npm</span> run build:prod
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> /usr/local/nginx/dfahtml/*
<span class="token function">cp</span> <span class="token parameter variable">-rf</span> ./dist/* /usr/local/nginx/dfahtml/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>跨域传参处理</p><p>发送端</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> url <span class="token operator">=</span> <span class="token string">&quot;http://localhost:9002&quot;</span>
<span class="token keyword">const</span> targetWindow <span class="token operator">=</span> window<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span><span class="token string">&quot;_blank&quot;</span><span class="token punctuation">)</span>
<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// 需要传递的数据，从本地缓存中获取</span>
  <span class="token keyword">let</span> token <span class="token operator">=</span> localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">&quot;token&quot;</span><span class="token punctuation">)</span>
  <span class="token keyword">let</span> info <span class="token operator">=</span> localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">&quot;store&quot;</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> message <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span>token<span class="token punctuation">,</span>info<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 要传递的数据</span>
  targetWindow<span class="token punctuation">.</span><span class="token function">postMessage</span><span class="token punctuation">(</span>message<span class="token punctuation">,</span> url<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">100</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接受端</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 接受跨域传递的参数</span>
window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;message&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>origin <span class="token operator">===</span> <span class="token string">&#39;http://localhost:8080&#39;</span> <span class="token operator">||</span> event<span class="token punctuation">.</span>origin <span class="token operator">===</span> <span class="token string">&#39;http://10.121.118.60:8080&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> message <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 接收到的数据</span>
    localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">&quot;info&quot;</span><span class="token punctuation">,</span>message<span class="token punctuation">.</span>info<span class="token punctuation">)</span>
    localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">&quot;token&quot;</span><span class="token punctuation">,</span>message<span class="token punctuation">.</span>token<span class="token punctuation">)</span>
    <span class="token comment">// 刷新页面</span>
    window<span class="token punctuation">.</span>location<span class="token punctuation">.</span><span class="token function">reload</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>pm2命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pm2 logs <span class="token comment"># 查看 pm2 日志</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>报错（文件监控超出系统限制）</p><figure><img src="https://chart-1253420647.cos.ap-beijing.myqcloud.com/markdown/image-20230713141226640.png" alt="文件监控超出系统限制报错" tabindex="0" loading="lazy"><figcaption>文件监控超出系统限制报错</figcaption></figure><p>nginx配置：</p><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">listen</span>       <span class="token number">9001</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">server_name</span>  localhost</span><span class="token punctuation">;</span>

        <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
            <span class="token directive"><span class="token keyword">root</span>   dfahtml</span><span class="token punctuation">;</span>
            <span class="token directive"><span class="token keyword">index</span>  index.html index.htm</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token directive"><span class="token keyword">location</span> ~ /api/</span> <span class="token punctuation">{</span>
            <span class="token directive"><span class="token keyword">proxy_pass</span> http://10.121.118.60:5000</span><span class="token punctuation">;</span>
            <span class="token directive"><span class="token keyword">proxy_read_timeout</span> <span class="token number">1200</span></span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token directive"><span class="token keyword">error_page</span>   <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span>  /50x.html</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">location</span> = /50x.html</span> <span class="token punctuation">{</span>
            <span class="token directive"><span class="token keyword">root</span>   dfahtml</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">listen</span>       <span class="token number">9002</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">server_name</span>  localhost</span><span class="token punctuation">;</span>

        <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
            <span class="token directive"><span class="token keyword">root</span>   dfahtml</span><span class="token punctuation">;</span>
            <span class="token directive"><span class="token keyword">index</span>  index.html index.htm</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token directive"><span class="token keyword">location</span> ~ /api/</span> <span class="token punctuation">{</span>
            <span class="token directive"><span class="token keyword">proxy_pass</span> http://10.121.118.60:8090</span><span class="token punctuation">;</span>
            <span class="token directive"><span class="token keyword">proxy_read_timeout</span> <span class="token number">1200</span></span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token directive"><span class="token keyword">error_page</span>   <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span>  /50x.html</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">location</span> = /50x.html</span> <span class="token punctuation">{</span>
            <span class="token directive"><span class="token keyword">root</span>   dfahtml</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>datafactory管理生产环境：9001</p><p>datafactory管理开发环境：9002</p><h2 id="沟通记录" tabindex="-1"><a class="header-anchor" href="#沟通记录" aria-hidden="true">#</a> 沟通记录</h2><p>下拉框没有写权限，加个没有权限的字段</p><p>首页列表加读权限字段</p><p>最新报告接口加读权限字段</p><p>reviewboard邮件发送人修改</p><p>竞品说明干掉</p><p>没有写权限，添加删除编辑上传设置禁用</p><p>系统管理的侧边栏接口</p><p>有权限后端返回：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
      &quot;msg&quot;: &quot;操作成功&quot;,
      &quot;code&quot;: 200,
      &quot;data&quot;: [
        {
          &quot;name&quot;: &quot;Project&quot;,
          &quot;path&quot;: &quot;/project&quot;,
          &quot;hidden&quot;: false,
          &quot;redirect&quot;: &quot;noRedirect&quot;,
          &quot;component&quot;: &quot;Layout&quot;,
          &quot;alwaysShow&quot;: true,
          &quot;meta&quot;: {
            &quot;title&quot;: &quot;项目管理&quot;,
            &quot;icon&quot;: &quot;tool&quot;,
            &quot;noCache&quot;: false,
            &quot;link&quot;: null
          },
          &quot;children&quot;: [
            {
              &quot;name&quot;: &quot;prolist&quot;,
              &quot;path&quot;: &quot;prolist&quot;,
              &quot;hidden&quot;: false,
              &quot;component&quot;: &quot;project/pro/index&quot;,
              &quot;meta&quot;: {
                &quot;title&quot;: &quot;项目管理&quot;,
                &quot;icon&quot;: &quot;tree&quot;,
                &quot;noCache&quot;: false,
                &quot;link&quot;: null
              }
            },
            {
              &quot;name&quot;: &quot;Dataset&quot;,
              &quot;path&quot;: &quot;dataset&quot;,
              &quot;hidden&quot;: false,
              &quot;component&quot;: &quot;project/dataset/index&quot;,
              &quot;meta&quot;: {
                &quot;title&quot;: &quot;数据集管理&quot;,
                &quot;icon&quot;: &quot;post&quot;,
                &quot;noCache&quot;: false,
                &quot;link&quot;: null
              }
            },
          ]
        },
        {
          &quot;name&quot;: &quot;System&quot;,
          &quot;path&quot;: &quot;/system&quot;,
          &quot;hidden&quot;: false,
          &quot;redirect&quot;: &quot;noRedirect&quot;,
          &quot;component&quot;: &quot;Layout&quot;,
          &quot;alwaysShow&quot;: true,
          &quot;meta&quot;: {
            &quot;title&quot;: &quot;系统管理&quot;,
            &quot;icon&quot;: &quot;system&quot;,
            &quot;noCache&quot;: false,
            &quot;link&quot;: null
          },
          &quot;children&quot;: [
            {
              &quot;name&quot;: &quot;User&quot;,
              &quot;path&quot;: &quot;user&quot;,
              &quot;hidden&quot;: false,
              &quot;component&quot;: &quot;system/user/index&quot;,
              &quot;meta&quot;: {
                &quot;title&quot;: &quot;用户管理&quot;,
                &quot;icon&quot;: &quot;user&quot;,
                &quot;noCache&quot;: false,
                &quot;link&quot;: null
              }
            },
            {
              &quot;name&quot;: &quot;Role&quot;,
              &quot;path&quot;: &quot;role&quot;,
              &quot;hidden&quot;: false,
              &quot;component&quot;: &quot;system/role/index&quot;,
              &quot;meta&quot;: {
                &quot;title&quot;: &quot;角色管理&quot;,
                &quot;icon&quot;: &quot;peoples&quot;,
                &quot;noCache&quot;: false,
                &quot;link&quot;: null
              }
            },
            {
              &quot;name&quot;: &quot;Menu&quot;,
              &quot;path&quot;: &quot;menu&quot;,
              &quot;hidden&quot;: false,
              &quot;component&quot;: &quot;system/permission/index&quot;,
              &quot;meta&quot;: {
                &quot;title&quot;: &quot;功能权限管理&quot;,
                &quot;icon&quot;: &quot;tree-table&quot;,
                &quot;noCache&quot;: false,
                &quot;link&quot;: null
              }
            },
            {
              &quot;name&quot;: &quot;propermission&quot;,
              &quot;path&quot;: &quot;propermission&quot;,
              &quot;hidden&quot;: false,
              &quot;component&quot;: &quot;system/projectPermission/index&quot;,
              &quot;meta&quot;: {
                &quot;title&quot;: &quot;项目权限管理&quot;,
                &quot;icon&quot;: &quot;tree-table&quot;,
                &quot;noCache&quot;: false,
                &quot;link&quot;: null
              }
            },
          ]
        },
        {
          &quot;name&quot;: &quot;http://10.121.118.60:8080&quot;,
          &quot;path&quot;: &quot;http://10.121.118.60:8080&quot;,
          &quot;hidden&quot;: false,
          &quot;component&quot;: &quot;Layout&quot;,
          &quot;meta&quot;: {
            &quot;title&quot;: &quot;Data Factory&quot;,
            &quot;icon&quot;: &quot;guide&quot;,
            &quot;noCache&quot;: false,
            &quot;link&quot;: &quot;http://10.121.118.60:8080&quot;
          }
        }
      ]
    })
  }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>无权限后端返回：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
      &quot;msg&quot;: &quot;操作成功&quot;,
      &quot;code&quot;: 200,
      &quot;data&quot;: [
        {
          &quot;name&quot;: &quot;Project&quot;,
          &quot;path&quot;: &quot;/project&quot;,
          &quot;hidden&quot;: false,
          &quot;redirect&quot;: &quot;noRedirect&quot;,
          &quot;component&quot;: &quot;Layout&quot;,
          &quot;alwaysShow&quot;: true,
          &quot;meta&quot;: {
            &quot;title&quot;: &quot;项目管理&quot;,
            &quot;icon&quot;: &quot;tool&quot;,
            &quot;noCache&quot;: false,
            &quot;link&quot;: null
          },
          &quot;children&quot;: [
            {
              &quot;name&quot;: &quot;prolist&quot;,
              &quot;path&quot;: &quot;prolist&quot;,
              &quot;hidden&quot;: false,
              &quot;component&quot;: &quot;project/pro/index&quot;,
              &quot;meta&quot;: {
                &quot;title&quot;: &quot;项目管理&quot;,
                &quot;icon&quot;: &quot;tree&quot;,
                &quot;noCache&quot;: false,
                &quot;link&quot;: null
              }
            },
            {
              &quot;name&quot;: &quot;Dataset&quot;,
              &quot;path&quot;: &quot;dataset&quot;,
              &quot;hidden&quot;: false,
              &quot;component&quot;: &quot;project/dataset/index&quot;,
              &quot;meta&quot;: {
                &quot;title&quot;: &quot;数据集管理&quot;,
                &quot;icon&quot;: &quot;post&quot;,
                &quot;noCache&quot;: false,
                &quot;link&quot;: null
              }
            },
          ]
        },
        {
          &quot;name&quot;: &quot;http://10.121.118.60:8080&quot;,
          &quot;path&quot;: &quot;http://10.121.118.60:8080&quot;,
          &quot;hidden&quot;: false,
          &quot;component&quot;: &quot;Layout&quot;,
          &quot;meta&quot;: {
            &quot;title&quot;: &quot;Data Factory&quot;,
            &quot;icon&quot;: &quot;guide&quot;,
            &quot;noCache&quot;: false,
            &quot;link&quot;: &quot;http://10.121.118.60:8080&quot;
          }
        }
      ]
    })
  }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,29);function r(m,q){const e=i("ExternalLinkIcon");return o(),l("div",null,[d,n("p",null,[s("仓库地址："),n("a",p,[s("https://gitlab.xpaas.lenovo.com/edgetest/knowledgeweb-admin.git"),u(e)])]),v])}const h=t(c,[["render",r],["__file","权限修改.html.vue"]]);export{h as default};

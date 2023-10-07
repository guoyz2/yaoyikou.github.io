const n=JSON.parse(`{"key":"v-0d570f4b","path":"/%E5%89%8D%E7%AB%AF/js/%E8%AF%B7%E6%B1%82%E8%BD%AE%E8%AF%A2.html","title":"请求轮询","lang":"zh-CN","frontmatter":{"date":"2023-09-28T00:00:00.000Z","title":"请求轮询","category":["前端"],"tag":["js","请求轮询"],"description":"请求轮询 需求：大模型评测系统有一个测试执行的功能，需求方要求测试开始执行之后，页面实时获取结果打印日志 解决方案：使用定时器 + 递归轮询发送请求更新页面数据 // 绑定显示日志的 html 容器 const logsContent = ref&lt;HTMLInputElement | null&gt;(null) // 开始查询日志 let timer: number | undefined const getLogsInfo = async () =&gt; { clearTimeout(timer) // 封装的 axios 请求获取数据 const [err, res] = await benchmarkExecLogsApi({ // 接口传递的参数 environment_name: currentEnv?.value as string, model_name: currentModel?.value.model_name as string, version_name: currentVersion?.value as string }) if (err) return Message.error(err.Message) if (res.code === 200) { logs.info = res.data nextTick(const logsContent = ref&lt;HTMLInputElement | null&gt;(null)() =&gt; { // 数据更新后，日志显示部分滚动条滚动到最底部 logsContent.value?.scrollTo({ top: logsContent.value?.scrollHeight }) }) // 根据后端返回判断当前测试是否执行完毕，如果没有执行完毕，5秒后重新调用接口 currentStatus?.value = res.data.status if (currentStatus?.value) { // 如果当前环境处于运行状态，30s后获取该环境的日志 timer = setTimeout(() =&gt; { getLogsInfo() }, 5000) } return } Message.error(res.message || 'request failed') } getLogsInfo()","head":[["meta",{"property":"og:url","content":"https://xianyufs.top/%E5%89%8D%E7%AB%AF/js/%E8%AF%B7%E6%B1%82%E8%BD%AE%E8%AF%A2"}],["meta",{"property":"og:site_name","content":"咸鱼要翻身"}],["meta",{"property":"og:title","content":"请求轮询"}],["meta",{"property":"og:description","content":"请求轮询 需求：大模型评测系统有一个测试执行的功能，需求方要求测试开始执行之后，页面实时获取结果打印日志 解决方案：使用定时器 + 递归轮询发送请求更新页面数据 // 绑定显示日志的 html 容器 const logsContent = ref&lt;HTMLInputElement | null&gt;(null) // 开始查询日志 let timer: number | undefined const getLogsInfo = async () =&gt; { clearTimeout(timer) // 封装的 axios 请求获取数据 const [err, res] = await benchmarkExecLogsApi({ // 接口传递的参数 environment_name: currentEnv?.value as string, model_name: currentModel?.value.model_name as string, version_name: currentVersion?.value as string }) if (err) return Message.error(err.Message) if (res.code === 200) { logs.info = res.data nextTick(const logsContent = ref&lt;HTMLInputElement | null&gt;(null)() =&gt; { // 数据更新后，日志显示部分滚动条滚动到最底部 logsContent.value?.scrollTo({ top: logsContent.value?.scrollHeight }) }) // 根据后端返回判断当前测试是否执行完毕，如果没有执行完毕，5秒后重新调用接口 currentStatus?.value = res.data.status if (currentStatus?.value) { // 如果当前环境处于运行状态，30s后获取该环境的日志 timer = setTimeout(() =&gt; { getLogsInfo() }, 5000) } return } Message.error(res.message || 'request failed') } getLogsInfo()"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-30T05:58:45.000Z"}],["meta",{"property":"article:author","content":"guoyz"}],["meta",{"property":"article:tag","content":"js"}],["meta",{"property":"article:tag","content":"请求轮询"}],["meta",{"property":"article:published_time","content":"2023-09-28T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-30T05:58:45.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"请求轮询\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-09-28T00:00:00.000Z\\",\\"dateModified\\":\\"2023-09-30T05:58:45.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"guoyz\\",\\"url\\":\\"https://xianyufs.top\\",\\"email\\":\\"78300406@qq.com\\"}]}"]]},"headers":[],"git":{"createdTime":1696053525000,"updatedTime":1696053525000,"contributors":[{"name":"guoyz","email":"18733972792@163.com","commits":1}]},"readingTime":{"minutes":0.93,"words":280},"filePathRelative":"前端/js/请求轮询.md","localizedDate":"2023年9月28日","excerpt":"<h1> 请求轮询</h1>\\n<p>需求：大模型评测系统有一个测试执行的功能，需求方要求测试开始执行之后，页面实时获取结果打印日志</p>\\n<p>解决方案：使用定时器 + 递归轮询发送请求更新页面数据</p>\\n<div class=\\"language-typescript line-numbers-mode\\" data-ext=\\"ts\\"><pre class=\\"language-typescript\\"><code><span class=\\"token comment\\">// 绑定显示日志的 html 容器</span>\\n<span class=\\"token keyword\\">const</span> logsContent <span class=\\"token operator\\">=</span> <span class=\\"token generic-function\\"><span class=\\"token function\\">ref</span><span class=\\"token generic class-name\\"><span class=\\"token operator\\">&lt;</span>HTMLInputElement <span class=\\"token operator\\">|</span> <span class=\\"token keyword\\">null</span><span class=\\"token operator\\">&gt;</span></span></span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">null</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token comment\\">// 开始查询日志</span>\\n<span class=\\"token keyword\\">let</span> timer<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">number</span> <span class=\\"token operator\\">|</span> <span class=\\"token keyword\\">undefined</span>\\n<span class=\\"token keyword\\">const</span> <span class=\\"token function-variable function\\">getLogsInfo</span> <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">async</span> <span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token function\\">clearTimeout</span><span class=\\"token punctuation\\">(</span>timer<span class=\\"token punctuation\\">)</span>\\n  <span class=\\"token comment\\">// 封装的 axios 请求获取数据</span>\\n  <span class=\\"token keyword\\">const</span> <span class=\\"token punctuation\\">[</span>err<span class=\\"token punctuation\\">,</span> res<span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">await</span> <span class=\\"token function\\">benchmarkExecLogsApi</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token comment\\">// 接口传递的参数</span>\\n    environment_name<span class=\\"token operator\\">:</span> currentEnv<span class=\\"token operator\\">?.</span>value <span class=\\"token keyword\\">as</span> <span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">,</span>\\n    model_name<span class=\\"token operator\\">:</span> currentModel<span class=\\"token operator\\">?.</span>value<span class=\\"token punctuation\\">.</span>model_name <span class=\\"token keyword\\">as</span> <span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">,</span>\\n    version_name<span class=\\"token operator\\">:</span> currentVersion<span class=\\"token operator\\">?.</span>value <span class=\\"token keyword\\">as</span> <span class=\\"token builtin\\">string</span>\\n  <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span>\\n  <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>err<span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">return</span> Message<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">error</span><span class=\\"token punctuation\\">(</span>err<span class=\\"token punctuation\\">.</span>Message<span class=\\"token punctuation\\">)</span>\\n  <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>res<span class=\\"token punctuation\\">.</span>code <span class=\\"token operator\\">===</span> <span class=\\"token number\\">200</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    logs<span class=\\"token punctuation\\">.</span>info <span class=\\"token operator\\">=</span> res<span class=\\"token punctuation\\">.</span>data\\n    <span class=\\"token function\\">nextTick</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">const</span> logsContent <span class=\\"token operator\\">=</span> <span class=\\"token generic-function\\"><span class=\\"token function\\">ref</span><span class=\\"token generic class-name\\"><span class=\\"token operator\\">&lt;</span>HTMLInputElement <span class=\\"token operator\\">|</span> <span class=\\"token keyword\\">null</span><span class=\\"token operator\\">&gt;</span></span></span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">null</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token punctuation\\">{</span>\\n      <span class=\\"token comment\\">// 数据更新后，日志显示部分滚动条滚动到最底部</span>\\n      logsContent<span class=\\"token punctuation\\">.</span>value<span class=\\"token operator\\">?.</span><span class=\\"token function\\">scrollTo</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">{</span>\\n        top<span class=\\"token operator\\">:</span> logsContent<span class=\\"token punctuation\\">.</span>value<span class=\\"token operator\\">?.</span>scrollHeight\\n      <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span>\\n    <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span>\\n    <span class=\\"token comment\\">// 根据后端返回判断当前测试是否执行完毕，如果没有执行完毕，5秒后重新调用接口</span>\\n    currentStatus<span class=\\"token operator\\">?.</span>value <span class=\\"token operator\\">=</span> res<span class=\\"token punctuation\\">.</span>data<span class=\\"token punctuation\\">.</span>status\\n    <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>currentStatus<span class=\\"token operator\\">?.</span>value<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n      <span class=\\"token comment\\">// 如果当前环境处于运行状态，30s后获取该环境的日志</span>\\n      timer <span class=\\"token operator\\">=</span> <span class=\\"token function\\">setTimeout</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token function\\">getLogsInfo</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n      <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">5000</span><span class=\\"token punctuation\\">)</span>\\n    <span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token keyword\\">return</span>\\n  <span class=\\"token punctuation\\">}</span>\\n  Message<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">error</span><span class=\\"token punctuation\\">(</span>res<span class=\\"token punctuation\\">.</span>message <span class=\\"token operator\\">||</span> <span class=\\"token string\\">'request failed'</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token punctuation\\">}</span>\\n<span class=\\"token function\\">getLogsInfo</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{n as data};

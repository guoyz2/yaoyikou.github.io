import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as e,c as o,a as n,b as c,d as i,e as s}from"./app-d0b2b34c.js";const u={},l=s('<h1 id="golang-selenium实现掘金自动签到" tabindex="-1"><a class="header-anchor" href="#golang-selenium实现掘金自动签到" aria-hidden="true">#</a> Golang+selenium实现掘金自动签到</h1><h2 id="使用技术" tabindex="-1"><a class="header-anchor" href="#使用技术" aria-hidden="true">#</a> 使用技术</h2><p>golang、cron(定时任务)、selenium(浏览器自动化)</p><h2 id="实现思路" tabindex="-1"><a class="header-anchor" href="#实现思路" aria-hidden="true">#</a> 实现思路</h2><ul><li>登录掘金</li><li>进入签到页面</li><li>点击签到按钮</li><li>点击去抽奖</li><li>点击免费抽奖</li><li>定时执行</li></ul><p>登录掘金输入密码或者验证码登录时，需要滑动验证，所以需要使用selenium打开已经登录掘金的浏览器，并且保证session不丢失</p><p>使用selenium需要对应浏览器和驱动，在此我使用的是chorme浏览器和chromedriver</p><h2 id="开发步骤" tabindex="-1"><a class="header-anchor" href="#开发步骤" aria-hidden="true">#</a> 开发步骤</h2><p>第一步：确认chrome浏览器版本</p><p>谷歌浏览器打开地址栏输入chrome://settings/help</p><figure><img src="https://chart-1253420647.cos.ap-beijing.myqcloud.com/markdown/image-20230505000934242.png" alt="image-20230505000934242" tabindex="0" loading="lazy"><figcaption>image-20230505000934242</figcaption></figure><p>第二步：下载对应版本的chromedriver，如果没有对应的版本，就下载相近的版本</p>',12),r={href:"https://registry.npmmirror.com/binary.html?path=chromedriver/",target:"_blank",rel:"noopener noreferrer"},k=s(`<figure><img src="https://chart-1253420647.cos.ap-beijing.myqcloud.com/markdown/image-20230505001344674.png" alt="image-20230505001344674" tabindex="0" loading="lazy"><figcaption>image-20230505001344674</figcaption></figure><figure><img src="https://chart-1253420647.cos.ap-beijing.myqcloud.com/markdown/image-20230505001520835.png" alt="image-20230505001520835" tabindex="0" loading="lazy"><figcaption>image-20230505001520835</figcaption></figure><p>第三步：打开一个chrome浏览器并监听端口</p><p>进入chrome的文件目录(右键谷歌浏览器图标，打开文件所在位置)</p><p>使用cmd命令行输入以下命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>chrome.exe --remote-debugging-port<span class="token operator">=</span><span class="token number">9222</span> --user-data-dir<span class="token operator">=</span><span class="token string">&quot;C:\\selenum\\AutomationProfile&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在打开的浏览器中登录掘金账号</p><p>第四步：写代码</p><ol><li><p>新建juejin-auto文件夹将chromedriver解压下来的exe文件放进去</p></li><li><p>打开终端初始化gomod文件</p></li><li><p>安装cron和selenium</p><figure><img src="https://chart-1253420647.cos.ap-beijing.myqcloud.com/markdown/image-20230505004008042.png" alt="image-20230505004008042" tabindex="0" loading="lazy"><figcaption>image-20230505004008042</figcaption></figure></li><li><p>编写main.go文件</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;math/rand&quot;</span>
	<span class="token string">&quot;time&quot;</span>

	cron <span class="token string">&quot;github.com/robfig/cron/v3&quot;</span>
	<span class="token string">&quot;github.com/tebeka/selenium&quot;</span>
	<span class="token string">&quot;github.com/tebeka/selenium/chrome&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	c <span class="token operator">:=</span> cron<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	c<span class="token punctuation">.</span><span class="token function">AddFunc</span><span class="token punctuation">(</span><span class="token string">&quot;30 9 * * *&quot;</span><span class="token punctuation">,</span> autoCheckIn<span class="token punctuation">)</span>
	c<span class="token punctuation">.</span><span class="token function">Start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">select</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">// 因为定时任务是协程，所以在这里阻塞一下，防止程序直接退出</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">autoCheckIn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 随机延时，防止每天同一时间签到检测</span>
	<span class="token function">randomSleep</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
	ops <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>selenium<span class="token punctuation">.</span>ServiceOption<span class="token punctuation">{</span><span class="token punctuation">}</span>
	s<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> selenium<span class="token punctuation">.</span><span class="token function">NewChromeDriverService</span><span class="token punctuation">(</span><span class="token string">&quot;./chromedriver.exe&quot;</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">,</span> ops<span class="token operator">...</span><span class="token punctuation">)</span>
	<span class="token keyword">defer</span> s<span class="token punctuation">.</span><span class="token function">Stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	c <span class="token operator">:=</span> selenium<span class="token punctuation">.</span>Capabilities<span class="token punctuation">{</span><span class="token punctuation">}</span>
	<span class="token keyword">var</span> args <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span>
	args <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>args<span class="token punctuation">,</span> <span class="token string">&quot;--remote-debugging-port=9222&quot;</span><span class="token punctuation">)</span>                   <span class="token comment">// 监听9222端口</span>
	args <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>args<span class="token punctuation">,</span> <span class="token string">&quot;--user-data-dir=C:\\\\selenum\\\\AutomationProfile&quot;</span><span class="token punctuation">)</span> <span class="token comment">// 设置浏览器数据文件目录，保证session、cookie不丢失</span>
	c<span class="token punctuation">.</span><span class="token function">AddChrome</span><span class="token punctuation">(</span>chrome<span class="token punctuation">.</span>Capabilities<span class="token punctuation">{</span>
		Path<span class="token punctuation">:</span> <span class="token string">&quot;C:\\\\Program Files\\\\Google\\\\Chrome\\\\Application\\\\Chrome.exe&quot;</span><span class="token punctuation">,</span>
		Args<span class="token punctuation">:</span> args<span class="token punctuation">,</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>
	wd<span class="token punctuation">,</span> err <span class="token operator">:=</span> selenium<span class="token punctuation">.</span><span class="token function">NewRemote</span><span class="token punctuation">(</span>c<span class="token punctuation">,</span> <span class="token string">&quot;http://127.0.0.1:1000/wd/hub&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;err: %v\\n&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">defer</span> wd<span class="token punctuation">.</span><span class="token function">Quit</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;---进入掘金抽奖页面---&quot;</span><span class="token punctuation">)</span>
	err <span class="token operator">=</span> wd<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span><span class="token string">&quot;https://juejin.cn/user/center/signin?avatar_menu&quot;</span><span class="token punctuation">)</span>
	<span class="token function">randomSleep</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;---点击签到按钮---&quot;</span><span class="token punctuation">)</span>
	we<span class="token punctuation">,</span> err <span class="token operator">:=</span> wd<span class="token punctuation">.</span><span class="token function">FindElement</span><span class="token punctuation">(</span>selenium<span class="token punctuation">.</span>ByCSSSelector<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string">&quot;.code-calender .signin&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	we<span class="token punctuation">.</span><span class="token function">Click</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token function">randomSleep</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;---点击去抽奖---&quot;</span><span class="token punctuation">)</span>
	we<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">=</span> wd<span class="token punctuation">.</span><span class="token function">FindElement</span><span class="token punctuation">(</span>selenium<span class="token punctuation">.</span>ByCSSSelector<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string">&quot;.btn-area .btn&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	we<span class="token punctuation">.</span><span class="token function">Click</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token function">randomSleep</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;---点击免费抽奖---&quot;</span><span class="token punctuation">)</span>
	we<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">=</span> wd<span class="token punctuation">.</span><span class="token function">FindElement</span><span class="token punctuation">(</span>selenium<span class="token punctuation">.</span>ByCSSSelector<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string">&quot;.cost-box #turntable-item-0&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	we<span class="token punctuation">.</span><span class="token function">Click</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token function">randomSleep</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;---点击收下奖励---&quot;</span><span class="token punctuation">)</span>
	we<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">=</span> wd<span class="token punctuation">.</span><span class="token function">FindElement</span><span class="token punctuation">(</span>selenium<span class="token punctuation">.</span>ByCSSSelector<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string">&quot;.byte-modal__body .wrapper .submit&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	we<span class="token punctuation">.</span><span class="token function">Click</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token function">randomSleep</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;---收下奖励后去百度，避免长时间停留页面检测（猜的）---&quot;</span><span class="token punctuation">)</span>
	wd<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span><span class="token string">&quot;https://www.baidu.com&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">randomSleep</span><span class="token punctuation">(</span>n <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	rand<span class="token punctuation">.</span><span class="token function">Seed</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">UnixNano</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 设置随机数种子</span>
	delay <span class="token operator">:=</span> rand<span class="token punctuation">.</span><span class="token function">Intn</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">3</span>        <span class="token comment">// 随机延时秒数</span>
	time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second <span class="token operator">*</span> time<span class="token punctuation">.</span><span class="token function">Duration</span><span class="token punctuation">(</span>delay<span class="token punctuation">)</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;延时了&quot;</span><span class="token punctuation">,</span> delay<span class="token operator">+</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">&quot;秒&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>运行程序</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>go run main.go
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol><p>​ 搞定！！</p><h2 id="后续计划" tabindex="-1"><a class="header-anchor" href="#后续计划" aria-hidden="true">#</a> 后续计划</h2><ul class="task-list-container"><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> 开发可以在linux上运行的版本</label></li></ul>`,12);function d(m,v){const a=p("ExternalLinkIcon");return e(),o("div",null,[l,n("p",null,[n("a",r,[c("https://registry.npmmirror.com/binary.html?path=chromedriver/"),i(a)])]),k])}const f=t(u,[["render",d],["__file","掘金自动签到.html.vue"]]);export{f as default};

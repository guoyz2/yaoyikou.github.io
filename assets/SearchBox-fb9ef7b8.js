import{i as f,j as w,w as T,f as D,t as I,u as k,m as G,o as g,c as u,p as _,q as R,a as E,x,y as A,F,z as S,A as O,B as y,D as M}from"./app-d0b2b34c.js";import{_ as $}from"./plugin-vue_export-helper-c27b6911.js";const N=[{path:"/frontmatter%E9%85%8D%E7%BD%AE",title:"Frontmatter配置",pathLocale:"/",contents:[{header:"Frontmatter配置",slug:"frontmatter配置",content:""},{header:"信息配置",slug:"信息配置",content:`字段
作用
类型 title
页面内容标题，默认为markdown第一个h1标签内容
string shortTitle
页面短标题，导航栏、侧边栏、导航路径中作为首选
string description
当前页面内容描述
string icon
页面图标的fontClass或者文件路径(图标支持)
string author
作者，默认为系统设置作者 isOriginal
是否原创
boolean date
写作时间，格式: YYYY-MM-DD 或 YYYY-MM-DD hh:mm:ss
DateString category
分类
string |string [] tag
标签
string |string [] sticky
是否在列表中置顶，填入数字时，数字越大，排名越靠前
boolean | number star
是否收藏在博客主题的文章列表中，数字越大，排名越靠前
boolean | number article
是否将该文章添加至文章列表
boolean timeline
是否将该文章添加至时间线中
boolean image
设置预览图（分享图），请填入绝对路径
string banner
设置横幅图片 (宽屏分享图)，请填入绝对路径
string`},{header:"布局配置",slug:"布局配置",content:""}]},{path:"/",title:"首页",pathLocale:"/",contents:[]},{path:"/resume",title:"求职简历",pathLocale:"/",contents:[{header:"求职简历",slug:"求职简历",content:"姓名：郭延赞"}]},{path:"/%E5%85%B6%E4%BB%96/apinto%E7%BD%91%E5%85%B3",title:"apinto网关",pathLocale:"/",contents:[{header:"apinto网关",slug:"apinto网关",content:""},{header:"apinto Debug运行",slug:"apinto-debug运行",content:"centos虚拟机用户名密码：root ssdlh.12345 guoyz qazwsx123."},{header:"apinto网关自定义插件",slug:"apinto网关自定义插件",content:`第一步：
定义工厂注册方法factory.go
const ( Name = "response_rewrite"
) func Register(register eosc.IExtenderDriverRegister) { // 接受一个名字，一个工厂创建方法 register.RegisterExtenderDriver(Name, NewFactory())
} // 定义工厂创建方法
func NewFactory() eosc.IExtenderDriverFactory { // 传递一个插件配置结构体， return drivers.NewFactory[Config](Create, Check)
}
在/app/apinto/plugin.go中注册自定义插件
customer_plugin.Register(extenderRegister)
config.go文件
定义了Config结构体
定义了Config结构体的错误类型
定义了config结构体的校验方法 判断状态码
判断code数组不能为空
状态码最大值为598，最小值为200 driver.go文件 create方法接受一个id、name、Config类型的值、workers map[eosc.RequireId]eosc.IWorker 反悔了一个实现了eosc.IWorker的结构体类型的值，和错误码 check方法是个断言方法，传递泛型和值，返回对应泛型的结构体指针和一个error,开头字母是小写，只在当前go文件中使用
Check方法 传入Config结构值指针的值、和workers map[eosc.RequireId]eosc.IWorker ,返回一个通过Config.doCheck方法返回的错误 factory.go文件 Register() func NewFactory[T any](createFunc func(id, name string, v *T, workers map[eosc.RequireId]eosc.IWorker) (eosc.IWorker, error), configCheckFunc ...func(v *T, workers map[eosc.RequireId]eosc.IWorker) error)
*Factory[T]
respose-rewrite.go export GOPATH=/root/go
cd /home/apinto/code/app/apinto/
go build -gcflags="all=-N -l" -o apinto
./apinto debug master
dlv debug --headless --listen=:2345 --api-version=2 --accept-multiclient
go build -gcflags "all=-N -l" github.com/app/demo
dlv --listen=:2345 --headless=true --api-version=2 --accept-multiclient exec ./demo.exe`}]},{path:"/%E5%85%B6%E4%BB%96/express-gateway%E7%BD%91%E5%85%B3",title:"express-gate网关",pathLocale:"/",contents:[{header:"express-gate网关",slug:"express-gate网关",content:`安装express gateway
npm install -g express-gateway
创建一个express gateway
eg gateway create
根据提示词并选择入门服务模板 ➜ eg gateway create ? What is the name of your Express Gateway? my-gateway ? Where would you like to install your Express Gateway? my-gateway ? What type of Express Gateway do you want to create? (Use arrow keys) ❯ Getting Started with Express Gateway Basic (default pipeline with proxy)
运行express gateway
cd my-gateway && npm start`},{header:"5分钟入门导航",slug:"_5分钟入门导航",content:`开始之前，确保已安装express gateway并使用入门服务器模板将其启动
本导航中，你可以： 制定微服务并作为api公开
定义api的消费者
使用秘钥授权保护api安全 注：这个网关附带一个内存数据库，作为指南的一部分所做的所有配置文件更改都不需要启动express网关，热重新加载功能将自动处理此问题，无需重新启动`},{header:"制定微服务并作为api公开",slug:"制定微服务并作为api公开",content:`我们指定现有服务 https://httpbin.org/ip 代理和管理，就好像它是我们自己从防火墙内发起的一样。该服务允许用户获取get并返回JSON字符串作为输出。它是免费提供的，我们将展示Express Gateway的功能
这个服务被指定为express gateway中默认流水线的服务终点，流水线是一组策略，express gateway具有代理策略，使用默认流水线的代理策略，网关现在将位于https://httpbin.org/ip服务，并将外部请求作为服务端点路由到它 cd config
打开 gateway.comfig.yml 并找到定义了httpbin的服务端点的 serviceEndpoint 部分
接下来在默认流水线的代理策略中查找httpbin serviceEndpoint 我们将通过express gateway 将httpbin服务公开为api端点，当api通过api端点公开时，可以从外部访问API 打开 gateway.comfig.yml
找到定义了名为“api”的API端点的apiEndpoints部分 ​ 注：默认情况下，代理策略会将API请求的路径附加到服务端点 现在我们有了一个端点，他能通过express gateway访问api`},{header:"定义api的消费者",slug:"定义api的消费者",content:`为了管理我们的API，我们将定义被称为“消费者”的授权用户，允许他们使用API。 使用eg users create 创建用户
eg users create
Configuring yargs through package.json is deprecated and will be removed in a future major release, please use the JS API instead.
Configuring yargs through package.json is deprecated and will be removed in a future major release, please use the JS API instead.
Configuring yargs through package.json is deprecated and will be removed in a future major release, please use the JS API instead.
? Enter firstname [required]: guo
? Enter lastname [required]: yz
? Enter username [required]: guoyz
? Enter email: 78300406@qq.com
? Enter redirectUri: undefined
√ Created 22de903f-3087-4df2-84b2-e8c0def22d81
{ "isActive": true, "username": "guoyz", "id": "22de903f-3087-4df2-84b2-e8c0def22d81", "firstname": "guo", "lastname": "yz", "email": "78300406@qq.com", "createdAt": "Sat Aug 26 2023 23:17:58 GMT+0800 (中国标准时间)", "updatedAt": "Sat Aug 26 2023 23:17:58 GMT+0800 (中国标准时间)"
}`},{header:"使用秘钥授权保护api",slug:"使用秘钥授权保护api",content:`目前api已完全公开，并可以通过其api端点进行访问，我们现在要用秘钥授权来保护它，为此，我们将秘钥授权策略添加到了默认流水线中
给guoyz分配一个密钥 eg credentials create -c guoyz -t key-auth -q`},{header:"核心概念",slug:"核心概念",content:`有关Express Gateway及其工作方式的概述，请查看“关于”页面，熟悉Express Gateway中的核心实体及其使用方式。
Express Gateway具有以下核心实体`},{header:"endpoints",slug:"endpoints",content:"端点是URL。Express Gateway有两种不同类型的端点： API endpoints Service endpoints Express Gateway通过API endpoints公开API。作为网关，它将来自API端点的API请求代理到服务端点中引用的微服务。"},{header:"Policies Reference（策略参考）",slug:"policies-reference-策略参考",content:`策略是Express Gateway中功能的构建块。策略可以被视为Express中间件的包装器，通过以下方式添加动态评估和执行行为： 条件 行动 参数 一个策略可以有一个或多个条件和操作对。一个条件和一个动作都可以有自己的一组唯一参数，使这对参数是唯一的。
可以使用Express Gateway公开的JavaScript对象和函数对策略进行高度定制。JavaScript对象和函数可以在条件、操作和参数中指定，以动态执行逻辑。
有关如何在条件、操作和策略（如表达式策略）中指定逻辑的信息，请参阅策略自定义参考。`},{header:"Basic Authorization",slug:"basic-authorization",content:`基本授权策略遵循RFC-7617标准。根据标准，如果用户代理想要发送用户id和密码，它将使用以下HTTP头。
示例: Authorization: Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==`},{header:"用法",slug:"用法",content:"为了使用基本授权策略，必须创建使用者并为其创建基本身份验证凭据。 要创建使用者（用户和应用程序）：请使用CLI并创建用户或创建应用程序命令。 要为应用程序或用户创建基本身份验证凭据：请使用CLI并键入basic auth的create credential命令。 要启用基本授权策略，请在policys部分的gateway.config.yml中添加基本授权。 policies: - basic-auth # 其他策略"},{header:"Customization（自定义策略）",slug:"customization-自定义策略",content:"Express Gateway的动态功能源于一组丰富的自定义功能，这些功能将Express.js中间件与可以使用纯JavaScript指定的表达式和逻辑相结合。"},{header:"Conditions（条件）",slug:"conditions-条件",content:"条件控制Express Gateway操作的执行流程。Express Gateway提供了一组丰富的核心条件，可用于Express Gateway中的任何策略。整个Express Gateway共享的应用程序数据存储在JavaScript对象中，可以使用JavaScript表达式和函数进行评估。"},{header:"Express Gateway Context Object (egContext)（网关上下文对象）",slug:"express-gateway-context-object-egcontext-网关上下文对象",content:`状态和其他应用程序数据和元数据存储在Express Gateway上下文对象或egContext对象中。上下文对象及其相关属性会根据执行范围而更改。
示例
在流水线1中，调用API端点的用户将在egContext.user.id中设置其用户id数据，该数据与调用同一API端点的另一用户不同。尽管它是同一个对象，但运行时上下文会创建同一对象和数据的不同实例。`},{header:"egContext",slug:"egcontext",content:`将用于执行条件、操作和表达式策略中的JavaScript代码的JavaScript沙盒对象。它可以用于实现非标准场景。
由于安全原因，所有Node.JS全局变量（如process、require等）都将不可用。
egContext包含以下可使用的属性： req:ExpressJS请求对象
res:ExpressJS响应对象
apiEndpoint：正在执行的配置或API端点。例如，apiEndpoint.scopes将为端点提供所有配置的作用域
consumer：关于当前消费者的信息（可以是应用程序或用户）
requestID:uuidv4（base62编码）当前请求的标识符，用于跟踪目的。如果需要，可以使用headers策略将此值作为header向下传播。
requestStream：如果设置了，则此流将通过流水线传输到代理的请求主体中，而不是原始请求主体中。这可以实现有趣的场景。`},{header:"CLI Reference (命令行参考)",slug:"cli-reference-命令行参考",content:""},{header:"plugins (插件)",slug:"plugins-插件",content:`Express Gateway v1.2.0+附带了一个插件框架，用于扩展Express Gateway核心。插件框架允许任何人使用Express中间件并将它们作为插件集成到Express网关中。Express Gateway提供了一种声明性的方式来利用Express中间件进行集中驱动和动态执行。
注意：使用此框架，Express Gateway核心中的现有策略最终将从核心重构为Express Gateway插件。`},{header:"插件结构",slug:"插件结构",content:`Express网关插件包含实体并允许事件订阅。您可以将插件看作Express网关实体的容器，这些实体通过添加实体和提供事件处理程序来扩展核心。
在插件框架的第一次迭代中，支持以下实体： Policies-策略
Conditions-条件
为admin 和 gateway服务自定义路由和中间件 对于所有考虑中的扩展点，请参考Express Gateway插件规范。
插件框架公开了一个事件总线，可以对Express网关生命周期中的事件做出反应。`},{header:"自动插件安装",slug:"自动插件安装",content:""},{header:"插件不在NPM上（自定义插件）",slug:"插件不在npm上-自定义插件",content:`在插件不在NPM上的罕见情况下（如果您有专用代码存储库，则可能会发生这种情况），您可以使用特定插件部分的package属性指定确切的入口点：
plugins: example: # "express-gateway-plugin-example" param1: 'global per plugin param1' package: '../manifest.js'`},{header:"Plugin Development（插件开发）",slug:"plugin-development-插件开发",content:""},{header:"Policy Development（策略开发）",slug:"policy-development-策略开发",content:""},{header:"定义策略",slug:"定义策略",content:`该策略是ExpressJS中间件的包装器
./policies/example-policy.js文件里的内容
module.exports = { name: "example", schema: { $id: "http://express-gateway.io/schemas/policies/example-policy.json", type: "object", properties: { baseUrl: { type: "string", format: "url", default: "https://example.com", }, }, }, policy: (actionParams) => { return (req, res, next) => { console.log( "executing policy-from-example-plugin with params", actionParams ); next(); // 调用下一个策略 // 或者写入响应: res.json({result: "this is the response"}) }; },
};
name-策略的名称，这是在流水线中引用策略的方式
schema-在执行策略时将用于验证的JSON schema。
policy-返回ExpressJS中间件的函数。函数接受actionParams。actionParams是该策略管道中的所有配置选项`},{header:"Action 参数",slug:"action-参数",content:`假设您将流水线定义为：
pipelines: apiPipeline: apiEndpoints: - api policies: - example: - action: # action 中的所有内容都将是 actionParams baseUrl: 'https://example.com'
在这种情况下，当构建流水线时，您的策略将具有actionParams是
{ "baseUrl":"https://example.com"
}`},{header:"使用插件导出策略",slug:"使用插件导出策略",content:`现在是时候在插件初始化期间注册策略了：这是在manifest.js init函数中完成的
module.exports = { version: '1.2.0', init: function (pluginContext) { let policy = require('./policies/example-policy') pluginContext.registerPolicy(policy) }
}`},{header:"策略注册和执行顺序",slug:"策略注册和执行顺序",content:`综合来看，我们在插件中看到了策略的三个主要组成部分： pluginContext.registerPolicy-将策略注册为插件的一部分
（actionParams）=>ExpressJS_Middleware_Function-从管道配置提供参数的包装器
（req，res，next）=>｛…｝-标准ExpressJS中间件 主要区别在于执行这些部分的时间`},{header:"pluginContext.registerPolicy",slug:"plugincontext-registerpolicy",content:`在Express Gateway启动时执行。在流水线引擎和http服务器启动之前。
仅执行一次`},{header:"(actionParams) => ExpressJS_Middleware_Function 封装器",slug:"actionparams-expressjs-middleware-function-封装器",content:`当流水线引擎将yml转换为ExpressJS中间件时执行。
在每次配置更改时执行（热重新加载gateway.config文件）`},{header:"(req,res,next) => { ... } 中间件",slug:"req-res-next-中间件",content:"对当前流水线中的每个请求执行"},{header:"geteway.config.yml文件解析",slug:"geteway-config-yml文件解析",content:"定义并描述了网关的所有功能，此配置文件简要描述了整个网关的微服务和API操作"},{header:"http",slug:"http",content:`配置http，express gateway 网关将在指定端口上监听 http 请求
http: port: 9080 # 在9080上监听请求 hostname: localhost`},{header:"https",slug:"https",content:`配置https，express gateway 网关将在指定端口上监听 https 请求
https: port: 9443 hostname: localhost tls: # 密钥证书对 "*.demo.io": key: example/keys/demo.io.key.pem cert: example/keys/demo.io.cert.pem "api.acme.com": key: example/keys/acme.com.key.pem cert: example/keys/acme.com.cert.pem "default": key: example/keys/eg.io.key.pem cert: example/keys/eg.io.cert.pem
express gateway支持TLS，包括SNI（特定于域的TLS证书），每个tls密钥都可以指定一个主机域，主机域匹配支持通配符。TLS密钥和证书的路径在密钥与证书密钥中成对制定
如果其他tls域条目都不匹配，或者客户端没有使用SNI，则将使用默认密钥。`},{header:"admin",slug:"admin",content:`admin部分是admin REST API的内部端点。Express Gateway将在指定的主机和端口上侦听内部API请求
admin: host: localhost port: 9080 # EG will listen for http requests on port 9080`},{header:"apiEndpoints",slug:"apiendpoints",content:`Express Gateway通过称为apiEndpoints的URL将微服务公开为API。API消费者可以通过API端点进行API请求。
apiEndpoints: help: # 名称，用作流水线中的引用 host: '*' # 必填项, '*' 将不会检查主机名 paths: /help # 选填，默认情况下将为所有请求提供服务，与 * 类似 api: # 名称，用作流水线中的引用 host: '*.com' # 支持通配符模式 paths: - '/v1/*' # 字符串或字符串数组 - '/v2/*' example: # 名称，用作流水线中的引用 host: 'example.com' paths: /v2/* # 字符串或字符串数组 example2: # 可以在同一apiEndpoint中提供一组匹配条件 - host: 'example2.com' paths: /v2/* methods: ["GET", "OPTIONS"] # 匹配的方法 scopes: ["example2:read"] - host: 'example2.com' paths: /v2/* methods: ["PUT", "POST", "PATCH", "DELETE"] scopes: ["example2:write"] # 访问此类资源所需的作用域数组`},{header:"配置：",slug:"配置",content:`名称
描述 host
接受请求的主机名 paths
路径数组 methods
访问此类资源所需方法数组 scopes
访问此类资源所需的作用域数组`},{header:"Host：",slug:"host",content:`host值是一个字符串，将与请求的“host”标头相匹配。
示例:
任何域和路径
apiEndpoints: help: host: '*' paths: /help
匹配: cdn.test.example.com/help, example.com/help, 没有“HOST”标头404： cdn.test.example.com, example.com/admin
一个没有子域和路径的域
apiEndpoints: help: host: 'example.com' paths: /help
匹配: example.com/help 404: test.example.com/help, example.com
一个域和路径的任何一级子域
apiEndpoints: help: host: '*.example.com' paths: /help`},{header:"Paths",slug:"paths",content:`路径可以是字符串或字符串数组。支持通配符模式。路径遵循ExpressJS路由约定-https://expressjs.com/en/4x/api.html#router
示例
精确字符串匹配
paths: /admin 匹配: 只有/admin
404: /admin/bob; /admin/charlie/1; /staff 没有父级的深层匹配
paths: /admin/* 匹配: /admin/bob; /admin/charlie/1
404: /admin 带有父级的深层匹配
paths: ['/admin','/admin/*'] 匹配: /admin; /admin/bob; /admin/charlie/1
404: /staff 一级匹配，无父级，变量赋值
paths: '/admin/:id' 匹配: /admin/bob; /admin/charlie
id: bob; charlie
404: /admin; /staff 具有变量分配的不带父级的多级子目录匹配
paths: '/admin/:group/:id' 匹配: /admin/ops/bob
group: ops
id: bob
404: /admin; /admin/bob; /admin/alex/bob/charlie 无父级的多级子目录匹配
paths: ['/student/*', '/teacher/*','/admin/*'] 匹配: - /admin/… multi-level - /student/… multi-level - /teacher/… multi-level
404: - / - /admin; /teacher; /student - /staff 重叠
API端点指定的顺序很重要。可以通过通配符指定重叠模式。在进行更一般的匹配之前，应首先指定更具体的模式以进行优先级评估。
示例
apiEndpoints: tabby: host: '*.tabby.cat.com' paths: '*' # 可选，如果未指定，则默认为* cat: host: '*.cat.com' com: host: '*.com'
Scopes
“scopes”值是一个字符串数组，用于指定当前凭据访问资源所需的作用域。
示例
apiEndpoints: tabby: host: '*.tabby.cat.com' paths: '*' scopes: - read - write - delete
只有当当前用户具有“读取”、“写入”和“删除”作用域时，才能访问以下api端点。`},{header:"serviceEndpoints",slug:"serviceendpoints",content:`Express Gateway在apiEndpoints上接收API请求，对其进行处理，然后将其代理到下游微服务。serviceEndpoints部分指定了这些代理微服务的URL。
serviceEndpoints: # 下游微服务 cats: # 名称，用作流水线中的引用 url: "http://cats1.example.com" dogs: # 名称，用作流水线中的引用 urls: # 多个url可以用于负载均衡 - "http://dogs1.example.com" - "http://dogs2.example.com"`},{header:"配置",slug:"配置-1",content:`名称
描述 url
代理请求的协议和主机名 urls
URL数组，用于负载均衡 proxyOptions
用于调用proxy-policy(代理策略)，使用此服务端点 serviceEndpoint必须具有带有单个字符串的url属性或带有字符串数组的urls属性`},{header:"policies",slug:"policies",content:`策略部分是已启用策略的白名单。必须在此处声明Express Gateway要使用的策略。有关Express Gateway支持的所有策略，请参阅“策略参考"
policies: - cors - rate-limiter - log - proxy - oauth2 - key-auth - basic-auth
配置 名字
描述 name
policy的名称，也是/lib/policys下对应的目录名`},{header:"pipelines",slug:"pipelines",content:`流水线部分通过请求和响应流将上面部分中声明的所有实体绑定在一起，从而指定核心Express Gateway的操作。
流水线是为从所有链接的apiEndpoint接收的请求执行的策略的有序列表。
pipelines: pipeline_1: # 流水线的名字 apiEndpoints: # 按名称引用的 API endpoints - api1 # 示例apiEndpoint名称 - api2 - api3 policies: - - policy_1 - #condition/action - #condition/action - policy_2 - #condition/action - #condition/action pipeline_2 . . .
示例
http: port: 3000 serviceEndpoints: example: # 将在代理策略中引用 url: 'http://example.com' apiEndpoints: api: host: '*' paths: / pipelines: default: apiEndpoints: - api policies: - simple-logger: # 策略名称 - # 条件\\动作属性的对象数组 condition: #可选; 默认为始终执行 name: pathExact path: /v1 action: message: "\${req.method} \${req.originalUrl}" - proxy: # 策略名称 - # 条件\\动作属性的对象数组 action: serviceEndpoint: example # 见上文声明`},{header:"策略中的条件和动作对象",slug:"策略中的条件和动作对象",content:`策略包含一个带有参数的操作列表。每个操作都可以通过一个条件被控。 名称
必填
描述 condition
选填
必须满足才能触发其相应操作的规则 action 此特定步骤的操作参数 条件和操作都有自己的参数列表。每个条件/动作对都是独立于其他条件/动作执行的。执行顺序与策略中的声明相同
示例
pipelines: default: apiEndpoints: - api policies: - simple-logger: # 策略名称 - # 可由条件选通的操作数组 condition: # 只有当路径恰好为/v1时，才会执行此操作 name: pathExact path: /v1 action: message: "V1: \${req.originalUrl}" - # 仅在上一个操作完成后执行 condition: # 只有当路径恰好为/v2时才执行此操作 name: pathExact path: /v2 action: message: "V2: \${req.originalUrl}" - # 仅在前两个操作完成后执行 action: # 无条件，始终执行 message: "GENERIC: \${req.method}" - proxy: # 策略名称 - # 具有条件\\操作属性的对象数组 action: serviceEndpoint: example`}]},{path:"/%E5%85%B6%E4%BB%96/live2d%E6%9C%8D%E5%8A%A1",title:"给我的博客加一个看板娘",pathLocale:"/",contents:[{header:"给我的博客加一个看板娘",slug:"给我的博客加一个看板娘",content:""},{header:"阶段性计划",slug:"阶段性计划",content:"提供静态使用服务 提供上传可视化页面操作 提供已上传live2d模型列表展示 命令行参数控制是否启用https 申请的免费ip证书 遗留问题，解压出来的文本文件乱码"},{header:"起因",slug:"起因",content:"作为一个喜欢看动漫的二次元，我想给我的博客添加一个可爱的看板娘。博客系统使用 vuepress 的 VuePress Theme Hope 主题搭建。可以通过 oh-my-live2d 插件给博客添加一个看板娘，可以通过本地路径或者url的方式添加 live2d 模型。于是小脑瓜灵机一动，我要搞个自己的 live2d 服务。冲冲冲！"},{header:"功能",slug:"功能",content:`live2d模型上传
live2d模型已上传列表展示
让我的博客可以使用live2d模型`},{header:"技术选型",slug:"技术选型",content:"golang、gin"},{header:"项目初始化",slug:"项目初始化",content:`初始化go.mod文件
go mod init live2d-server
安装 gin 依赖包
go get -u github.com/gin-gonic/gin
首先使用 gin 提供一个静态资源服务，先让模型可以通过网址访问
新建 main.go 代码如下
package main import ( "github.com/gin-gonic/gin"
) func main() { r := gin.Default() r.Static("/live2d", "./live2d") r.Run(":9111")
}
新建 live2d 文件夹存放 live2d 模型，live2d模型可以从这个模型站(版权要求见模型站)下载
然后在浏览器中打开模型链接
浏览器地址打开live2d模型文件
哎呦！可以正常访问。
然后将他配置到我的博客系统中
plugins: [ // live2d看板娘配置 ohmylive2dPlugin({ source: "http://localhost:9111/live2d", models: { path: "/umaru/model.json", }, }),
],
live2d配置到博客中
不出所料，翻车了！！！出现了跨域问题
使用cros解决跨域问题
下载并安装cors
go get github.com/gin-contrib/cors
代码中导入
import "github.com/gin-contrib/cors"
func main() { r := gin.Default() // 允许所有的源 r.Use(cors.Default()) r.Static("/live2d", "./live2d") r.Run(":9111")
}
于是，我可爱的小看板娘出来啦
我可爱的小看板娘出来啦！
接下来开发上传文件的服务
上传服务流程图
开发上传页面
新建html文件夹，文件夹新建 index.html 作为上传页面，代码如下：
<!doctype html>
<html lang="en">
<head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"> <meta http-equiv="X-UA-Compatible" content="ie=edge"> <title>live模型</title>
</head>
<body>
<form action="/live2d/upload" method="post" enctype="multipart/form-data"> <p>live2d model name: <input type="text" name="name" /></p> <p>file: <input type="file" name="file" /></p> <button type="submit">上传live2d模型</button>
</form>
</body>
</html>
新建 upload-result.html 作为上传成功页面，代码如下
<!DOCTYPE html>
<html lang="en">
<head> <meta charset="UTF-8"> <title>live模型</title>
</head>
<body> 上传{{.result}}，<a href="/">返回</a>
</body>
</html>
将html文件夹下静态资源嵌入gin框架
r.LoadHTMLGlob("html/*")
在 main.go 文件中新增路由，当访问根目录的时候返回index.html页面，代码如下
// live2d模型上传页面
r.GET("/", func(c *gin.Context) { c.HTML(200, "index.html", nil)
})
在 main.go 文件中新增路由，当上传操作完成后，返回upload-result.html页面，代码如下
// 上传live2d模型到接口
r.POST("/live2d/upload", func(c *gin.Context) { file, err := c.FormFile("file") name := c.PostForm("name") if err != nil { c.HTML(200, "upload-result.html", gin.H{ "result": "失败，错误为：" + err.Error(), }) return } // 保存 live2d 压缩包到 live2d 文件夹下 c.SaveUploadedFile(file, "./live2d/"+file.Filename) // 解压 live2d 压缩包 err = unzipFile("./live2d/"+file.Filename, "./live2d/"+name) if err != nil { c.HTML(200, "upload-result.html", gin.H{ "result": "失败，错误为：" + err.Error(), }) return } c.HTML(200, "upload-result.html", gin.H{ "result": "成功", })
})
编写解压zip文件方法
// zip文件路径和目标文件路径
func unzipFile(zipFile, destDir string) error { r, err := zip.OpenReader(zipFile) if err != nil { return err } defer r.Close() for _, f := range r.File { rc, err := f.Open() if err != nil { return err } defer rc.Close() path := filepath.Join(destDir, f.Name) if f.FileInfo().IsDir() { os.MkdirAll(path, f.Mode()) } else { os.MkdirAll(filepath.Dir(path), os.ModePerm) f, err := os.OpenFile(path, os.O_WRONLY|os.O_CREATE|os.O_TRUNC, f.Mode()) if err != nil { return err } defer f.Close() _, err = io.Copy(f, rc) if err != nil { return err } } } return nil
}
访问页面上传模型，查看结果
输入模型名称，上传live2d模型压缩包
上传成功
上传成功之后查看结果发现解压之后发现txt文件名称和内容有乱码，所以，我们要对txt文件进行一个转码
live2d文件夹下结果
编写转码方法
导入使用的包
"golang.org/x/text/encoding/simplifiedchinese"
"golang.org/x/text/transform"
// 解码文件名
func decodeFileName(name string) string { decoder := simplifiedchinese.GBK.NewDecoder() //decodedName, err := transform.String(decoder, name) decodedName, _, err := transform.String(decoder, name) if err != nil { log.Println("Failed to decode file name:", name) return name } return decodedName
}
修改解压方法代码
path := filepath.Join(destDir, f.Name) 修改为
path := filepath.Join(destDir, decodeFileName(f.Name)) // 对txt类型的文件进行特殊处理
if filepath.Ext(f.Name()) == ".txt" { reader := bufio.NewReader(rc) for { line,err:= reader.ReadString('\\n') if err != nil { // 判断是否到达文件末尾 if err == io.EOF { break } fmt.Println("读取文件内容失败:", err) return err } f.WriteString(decodeFileName(line)) } continue
}
再次上传模型文件文件内容显示正常，至此，上传模型功能结束
作完上传功能，现在要将它打包成二进制文件放到linux云服务器上，首先修改编译后可执行文件的目标平台
go env -w GOOS=linux
go build -o live2d-server
直接启动打包后文件
直接启动打包后文件发现，html模板文件没有被打包进去，所以在这里我们要处理一下
使用embed包的embed.FS类型来嵌入HTML模板文件。通过//go:embed指令，我们告诉编译器将html/*.html下的所有文件嵌入到二进制文件中
//go:embed html/*.html
var templates embed.FS
加载模板文件代码修改
r.LoadHTMLGlob("html/*") 修改为
r.SetHTMLTemplate(template.Must(template.ParseFS(templates, "html/*.html")))
将他部署到我的华为云服务器之后，然后在vuepress中使用链接地址，博客中就有一个可爱的看板娘啦
编写service文件
vim /etc/systemd/system/live2d_server.service
[Unit]
Description=live2d Server [Service]
Type=simple
Restart=always
RestartSec=3s
WorkingDirectory=/go
ExecStart=/go/live2d-server [Install]
WantedBy=multi-user.target
systemctl daemon-reload
systemctl start live2d_server #启动
systemctl stop live2d_server #停止
systemctl restart live2d_server #重启
systemctl status live2d_server #查看状态`}]},{path:"/%E5%85%B6%E4%BB%96/window%E7%A7%BB%E5%8A%A8%E6%96%87%E4%BB%B6%E5%A4%B9",title:"window移动文件夹",pathLocale:"/",contents:[{header:"window移动文件夹",slug:"window移动文件夹",content:`在Windows中，你可以使用xcopy命令来复制文件夹，并且如果目标文件夹不存在，它会自动创建。
以下是使用xcopy命令复制文件夹的语法：
xcopy <源文件夹路径> <目标文件夹路径> /E /I
其中： <源文件夹路径>是要复制的文件夹的路径。
<目标文件夹路径>是要将文件夹复制到的目标路径。
/E表示复制目录和子目录，包括空目录。
/I表示如果目标文件夹不存在，则创建目标文件夹。 例如，要将名为C:\\SourceFolder的文件夹复制到C:\\DestinationFolder，可以使用以下命令：
xcopy C:\\SourceFolder C:\\DestinationFolder /E /I
这将复制C:\\SourceFolder及其所有子文件夹和文件到C:\\DestinationFolder。如果C:\\DestinationFolder不存在，它将自动创建。`}]},{path:"/%E5%90%8E%E7%AB%AF/apinto%E4%BD%BF%E7%94%A8",title:"",pathLocale:"/",contents:[]},{path:"/%E5%90%8E%E7%AB%AF/api%E5%BC%80%E6%94%BE%E5%B9%B3%E5%8F%B0%E6%8E%A5%E5%8F%A3%E5%AE%9A%E4%B9%89",title:"api开放平台接口定义",pathLocale:"/",contents:[{header:"api开放平台接口定义",slug:"api开放平台接口定义",content:""},{header:"用户相关",slug:"用户相关",content:""},{header:"用户登录",slug:"用户登录",content:`POST /user/login
备注： 为了安全用户名密码不使用明文，此处使用base64加密
测试用户名：guoyz10 密码123456，加密后数据-用户名：Z3VveXoxMA== 密码：MTIzNDU2 请求参数： 名称
类型
必填
说明 username
string
true
用户名 password
string
true
密码 返回参数： 名称
类型
说明 data.user_name
string
用户名 data.nick_name
string
昵称 data.user_id
number
用户id data.user_type
number
用户类型：1管理员 2普通用户 data.avatar_url
string
头像地址 data.gender
number
性别：0 未填写 1 男 2 女 data.email
string
邮箱 data.phone
string
电话 json返回示例 { "code": 200, "message": "success", "data": { "user_name": "guoyz10", "nick_name": "", "user_id": 1, "user_type": 2, "avatar_url": "", "gender": 0, "email": "", "phone": "" }
}`},{header:"用户注册",slug:"用户注册",content:`POST /user/register
备注： 用户名长度不能低于6位且不能大于18位
密码长度不能低于6位且不能大于18位
密码和确认密码必须一致 请求参数： 名称
类型
必填
说明 username
string
true
用户名 password
string
true
密码 check_password
string
true
确认密码 返回参数 名称
类型
说明 data
number
用户id json返回示例：
{ "code": 200, "data": 2, "message": "Success!"
}`},{header:"获取当前用户状态",slug:"获取当前用户状态",content:`GET /user/status
备注： token有效返回当前用户信息，token无效返回401 返回参数： 名称
类型
说明 data.user_name
string
用户名 data.nick_name
string
昵称 data.user_id
number
用户id data.user_type
number
用户类型：1管理员 2普通用户 data.avatar_url
string
头像地址 data.gender
number
性别：0 未填写 1 男 2 女 data.email
string
邮箱 data.phone
string
电话 json返回示例
{ "code": 200, "message": "success", "data": { "user_name": "guoyz10", "nick_name": "", "user_id": 1, "user_type": 2, "avatar_url": "", "gender": 0, "email": "", "phone": "" }
}`},{header:"用户列表（仅管理员）",slug:"用户列表-仅管理员",content:`GET /user/list
请求参数： 名称
类型
必填
说明 page
number
false
页码，默认为1 size
number
false
每页显示条数，默认为20 username
string
false
根据用户名检索 usertype
string
false
根据用户类型检索 返回参数：
json返回示例：`},{header:"用户删除（仅管理员）",slug:"用户删除-仅管理员",content:`DELETE /user/delete 参数
类型
描述 id
number
要删除的用户id`},{header:"接口相关",slug:"接口相关",content:`添加接口
POST /interface/add
删除接口
DELETE /interface/delete
更新接口
PUT /interface/update
接口列表
GET /interface/list`}]},{path:"/%E5%90%8E%E7%AB%AF/git%E5%AE%89%E8%A3%85%E6%95%99%E7%A8%8B",title:"git安装教程",pathLocale:"/",contents:[{header:"git安装教程",slug:"git安装教程",content:""},{header:"centos安装git （安装版本过旧）",slug:"centos安装git-安装版本过旧",content:`安装：yum install git -y
移除：yum remove git`},{header:"源代码编译",slug:"源代码编译",content:`安装编译依赖
yum install curl-devel expat-devel gettext-devel openssl-devel zlib-devel asciidoc
yum install gcc perl-ExtUtils-MakeMaker
打开文件夹存放git包
cd /usr/local/src/
下载git压缩包（在git官网查看最新版本版本号，在镜像站找对应的压缩包）
wget https://mirrors.edge.kernel.org/pub/software/scm/git/git-2.42.0.tar.xz
解压安装包
tar -xvf git-2.42.0.tar.xz
打开解压好的git文件夹
cd git-2.42.0
编译git
make prefix=/usr/local/git all
安装git
make prefix=/usr/local/git install
配置环境变量
echo "export PATH=$PATH:/usr/local/git/bin" >> /etc/profile && source /etc/profile
查看版本
git --verison`}]},{path:"/%E5%90%8E%E7%AB%AF/golang%E5%AE%89%E8%A3%85",title:"go环境安装",pathLocale:"/",contents:[{header:"go环境安装",slug:"go环境安装",content:`安装包下载：https://golang.google.cn/dl/
配置环境变量，切换代理：https://goproxy.cn/
windows:
$ go env -w GO111MODULE=on
$ go env -w GOPROXY=https://goproxy.cn,direct
linux:
$ export GO111MODULE=on
$ export GOPROXY=https://goproxy.cn
或者
$ echo "export GOROOT=/home/go" >> ~/.profile
$ echo "export GOPATH=/home/go" >> ~/.profile
$ echo "export PATH=$PATH:$GOROOT/bin:$GOPATH/bin" >> ~/.profile
$ echo "export GO111MODULE=on" >> ~/.profile
$ echo "export GOPROXY=https://goproxy.cn" >> ~/.profile
$ source ~/.profile $ echo "export GOROOT=/home/go" >> ~/.bashrc
$ echo "export GOPATH=/home/go" >> ~/.bashrc
$ echo "export PATH=$PATH:$GOROOT/bin:$GOPATH/bin" >> ~/.bashrc
$ echo "export GO111MODULE=on" >> ~/.bashrc
$ echo "export GOPROXY=https://goproxy.cn" >> ~/.bashrc
$ source ~/.bashrc
设置golang环境变量脚本
#!/usr/bin/env sh set -e echo "export GOROOT=/home/go" >> ~/.bashrc
echo "export GOPATH=/root/go" >> ~/.bashrc
echo "export PATH=$PATH:$GOROOT/bin:$GOPATH/bin" >> ~/.bashrc
echo "export GO111MODULE=on" >> ~/.bashrc
echo "export GOPROXY=https://goproxy.cn" >> ~/.bashrc
source ~/.bashrc
/root/go
/home/node-v18.16.1-linux-x64/bin
echo "export PATH=$PATH:/home/node-v18.16.1-linux-x64/bin" >> ~/.bashrc`}]},{path:"/%E5%90%8E%E7%AB%AF/golang%E7%89%88%E6%9C%AC%E7%AE%A1%E7%90%86%E5%B7%A5%E5%85%B7",title:"golang版本管理工具",pathLocale:"/",contents:[{header:"golang版本管理工具",slug:"golang版本管理工具",content:""},{header:"查看系统架构",slug:"查看系统架构",content:`windows系统可以在cmd命令行中可以使用 systeminfo 命令
windows查看系统架构
linux系统使用 uname -a 命令，结果有 x86_64 的是 amd 架构
linux查看系统架构`},{header:"下载版本管理工具",slug:"下载版本管理工具",content:"下载地址：https://github.com/voidint/g/releases"},{header:"windows安装",slug:"windows安装",content:`下载解压之后将解压后的目录添加到系统环境变量中
下载并解压
添加到系统环境变量
打开命令行输入 g 显示一下内容为安装成功
查看工具是否安装成功`},{header:"linux安装",slug:"linux安装",content:`创建目录
mkdir ~/.g
切换目录
cd ~/.g
创建bin目录
mkdir bin
上传二进制文件到 bin 目录下
解压二进制文件
tar xzf g1.5.2.linux-amd64.tar.gz
所需环境变量写入 ~/.g/env
cat >~/.g/env <<'EOF'
#!/bin/sh
# g shell setup
export GOROOT="\${HOME}/.g/go"
export PATH="\${HOME}/.g/bin:\${GOROOT}/bin:$PATH"
export G_MIRROR=https://golang.google.cn/dl/
EOF
将~/.g/env导入shell环境变量
cat >>~/.bashrc <<'EOF'
# g shell setup
if [ -f "\${HOME}/.g/env" ]; then . "\${HOME}/.g/env"
fi
EOF
启用环境变量
source ~/.bashrc`},{header:"工具使用",slug:"工具使用",content:`查看可供安装的稳定状态的 go 版本
g ls-remote stable
查看可供安装的所有 go 版本
g ls-remote
查看已安装的 go 版本
g ls
安装对应版本的 go
g install 1.14.7
切换 go 版本
g use 1.19.10
清空 go 安装包文件缓存
g clean 查看 g 版本信息
g version 1.5.0
更新 g 软件
g self update
卸载 g 软件
g self uninstall`}]},{path:"/%E5%90%8E%E7%AB%AF/redis%E5%AE%89%E8%A3%85%E6%95%99%E7%A8%8B",title:"redis安装教程",pathLocale:"/",contents:[{header:"redis安装教程",slug:"redis安装教程",content:`下载安装包
可以进入https://download.redis.io/releases/选择想安装的版本
wget https://download.redis.io/releases/redis-6.2.6.tar.gz
解压
tar xzf redis-6.2.6.tar.gz
mv redis-6.2.6 /usr/local/redis
cd /usr/local/redis
make
如果执行make命令报错：cc 未找到命令，原因是虚拟机系统中缺少gcc，执行下面命令安装gcc：
yum -y install gcc automake autoconf libtool make
如果执行make命令报错：致命错误:jemalloc/jemalloc.h: 没有那个文件或目录，则需要在make指定分配器为libc。执行下面命令即可正常编译：
make MALLOC=libc
make命令执行完，redis就编译完成了。
redis安装shell脚本 redis配置
不可以从本地访问云服务器安装的redis
bind 127.0.0.1 ::1
修改为：
bind * -::*
守护进程使用，如果redis被upstart或systemd监管时，这个参数没有影响。
daemonize no
修改为
daemonize yes
redis配置解析：https://blog.csdn.net/Rambo_Yang/article/details/128584227
计划，开发一个开源的redis可是化管理网站
运行redis /bin/redis-server /redis.conf
关闭ps -aux | grep redis`}]},{path:"/%E5%90%8E%E7%AB%AF/%E5%90%8E%E7%AB%AF%E5%AD%A6%E4%B9%A0%E8%B7%AF%E7%BA%BF",title:"后端学习路线",pathLocale:"/",contents:[{header:"后端学习路线",slug:"后端学习路线",content:""}]},{path:"/%E5%AD%A6%E4%B9%A0%E6%97%A5%E8%AE%B0/2023%E5%B9%B47%E6%9C%88",title:"2023年7月",pathLocale:"/",contents:[{header:"2023年7月",slug:"_2023年7月",content:`项目计划：
api 开放平台`},{header:"2023/7/22",slug:"_2023-7-22",content:`使用golang+gin搭建一个live2d服务器（输出文章） 给博客添加有趣的插件 写一份文章frontmatter配置的模板，后续写文章直接复制模板 学习网关 开发网关？ 写一套 golang + gin 后端模板
[ ]`}]},{path:"/%E5%89%8D%E7%AB%AF/nvm%E4%BD%BF%E7%94%A8",title:"nvm 使用",pathLocale:"/",contents:[{header:"nvm 使用",slug:"nvm-使用",content:""},{header:"使用nvm对node版本进行管理",slug:"使用nvm对node版本进行管理",content:`node.js是前端工程化中常用的环境，当接手一个项目时，经常遇到安装依赖包不成功的情况。大部分是因为node版本不兼容导致的。项目只有一个是还好说。当项目多了之后。可能出现多个项目使用node版本不同的情况，这时，我们可以使用nvm来快速的切换node版本。本片主要讲述nvm的使用
切换淘宝镜像
vim ~/.bashrc
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \\. "$NVM_DIR/nvm.sh" # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \\. "$NVM_DIR/bash_completion"
export NVM_NODEJS_ORG_MIRROR=http://npm.taobao.org/mirrors/node
export NVM_IOJS_ORG_MIRROR=http://npm.taobao.org/mirrors/iojs
source ~/.bashrc
1.下载
wget https://cdn.npm.taobao.org/dist/node/v12.13.1/node-v12.13.1-linux-x64.tar.xz 2.解压：
xz -d node-v12.13.1-linux-x64.tar.xz
tar -xvf node-v12.13.1-linux-x64.tar 3.移动
mv node-v12.13.1-linux-x64 /usr/local/ 4.重命名
mv /usr/local/node-v12.13.1-linux-x64/ /usr/local/node 5.编辑配置文件
vim /etc/profile 6.文件末尾增加内容，按 i 命令，进行新增
export NODE_HOME=/usr/local/node
export PATH=$NODE_HOME/bin:$PATH ps:内容新增后，先按esc键，退出插入模式，然后按住shift键，并连按两次z字符，
即可保存刚才的编辑并退出vim编辑状态 7.执行source才能使环境变量立即有效
source /etc/profile 安装成功后，查看对应版本信息
node -v
npm -v`}]},{path:"/%E5%89%8D%E7%AB%AF/pm2%E4%BD%BF%E7%94%A8",title:"pm2使用",pathLocale:"/",contents:[{header:"pm2使用",slug:"pm2使用",content:""}]},{path:"/%E5%89%8D%E7%AB%AF/postmessage%E4%BD%BF%E7%94%A8",title:"postmessage使用",pathLocale:"/",contents:[{header:"postmessage使用",slug:"postmessage使用",content:""}]},{path:"/%E5%89%8D%E7%AB%AF/%E5%89%8D%E7%AB%AF%E5%AD%A6%E4%B9%A0%E8%B7%AF%E7%BA%BF",title:"前端学习路线",pathLocale:"/",contents:[{header:"前端学习路线",slug:"前端学习路线",content:""}]},{path:"/%E5%89%8D%E7%AB%AF/%E6%94%AF%E4%BB%98%E5%AE%9D%E5%BE%AE%E4%BF%A1%E6%94%B6%E6%AC%BE%E7%A0%81%E4%BA%8C%E5%90%88%E4%B8%80%E5%AE%9E%E7%8E%B0",title:"支付宝微信收款码二合一实现",pathLocale:"/",contents:[{header:"支付宝微信收款码二合一实现",slug:"支付宝微信收款码二合一实现",content:""}]},{path:"/%E5%89%8D%E7%AB%AF/%E8%B7%A8%E5%9F%9F%E4%BC%A0%E5%8F%82%E5%AE%9E%E7%8E%B0",title:"跨域传参",pathLocale:"/",contents:[{header:"跨域传参",slug:"跨域传参",content:""}]},{path:"/%E7%88%AC%E8%99%AB/%E6%8E%98%E9%87%91%E8%87%AA%E5%8A%A8%E7%AD%BE%E5%88%B0",title:"Golang+selenium实现掘金自动签到",pathLocale:"/",contents:[{header:"Golang+selenium实现掘金自动签到",slug:"golang-selenium实现掘金自动签到",content:""},{header:"使用技术",slug:"使用技术",content:"golang、cron(定时任务)、selenium(浏览器自动化)"},{header:"实现思路",slug:"实现思路",content:`登录掘金
进入签到页面
点击签到按钮
点击去抽奖
点击免费抽奖
定时执行 登录掘金输入密码或者验证码登录时，需要滑动验证，所以需要使用selenium打开已经登录掘金的浏览器，并且保证session不丢失
使用selenium需要对应浏览器和驱动，在此我使用的是chorme浏览器和chromedriver`},{header:"开发步骤",slug:"开发步骤",content:`第一步：确认chrome浏览器版本
谷歌浏览器打开地址栏输入chrome://settings/help
image-20230505000934242
第二步：下载对应版本的chromedriver，如果没有对应的版本，就下载相近的版本
https://registry.npmmirror.com/binary.html?path=chromedriver/
image-20230505001344674
image-20230505001520835
第三步：打开一个chrome浏览器并监听端口
进入chrome的文件目录(右键谷歌浏览器图标，打开文件所在位置)
使用cmd命令行输入以下命令
chrome.exe --remote-debugging-port=9222 --user-data-dir="C:\\selenum\\AutomationProfile"
在打开的浏览器中登录掘金账号
第四步：写代码 新建juejin-auto文件夹将chromedriver解压下来的exe文件放进去 打开终端初始化gomod文件 安装cron和selenium
image-20230505004008042 编写main.go文件
package main import ( "fmt" "math/rand" "time" cron "github.com/robfig/cron/v3" "github.com/tebeka/selenium" "github.com/tebeka/selenium/chrome"
) func main() { c := cron.New() c.AddFunc("30 9 * * *", autoCheckIn) c.Start() select {} // 因为定时任务是协程，所以在这里阻塞一下，防止程序直接退出
} func autoCheckIn() { // 随机延时，防止每天同一时间签到检测 randomSleep(10) ops := []selenium.ServiceOption{} s, _ := selenium.NewChromeDriverService("./chromedriver.exe", 1000, ops...) defer s.Stop() c := selenium.Capabilities{} var args []string args = append(args, "--remote-debugging-port=9222") // 监听9222端口 args = append(args, "--user-data-dir=C:\\\\selenum\\\\AutomationProfile") // 设置浏览器数据文件目录，保证session、cookie不丢失 c.AddChrome(chrome.Capabilities{ Path: "C:\\\\Program Files\\\\Google\\\\Chrome\\\\Application\\\\Chrome.exe", Args: args, }) wd, err := selenium.NewRemote(c, "http://127.0.0.1:1000/wd/hub") if err != nil { fmt.Printf("err: %v\\n", err) } defer wd.Quit() fmt.Println("---进入掘金抽奖页面---") err = wd.Get("https://juejin.cn/user/center/signin?avatar_menu") randomSleep(5) fmt.Println("---点击签到按钮---") we, err := wd.FindElement(selenium.ByCSSSelector, (".code-calender .signin")) we.Click() randomSleep(5) fmt.Println("---点击去抽奖---") we, _ = wd.FindElement(selenium.ByCSSSelector, (".btn-area .btn")) we.Click() randomSleep(5) fmt.Println("---点击免费抽奖---") we, _ = wd.FindElement(selenium.ByCSSSelector, (".cost-box #turntable-item-0")) we.Click() randomSleep(5) fmt.Println("---点击收下奖励---") we, _ = wd.FindElement(selenium.ByCSSSelector, (".byte-modal__body .wrapper .submit")) we.Click() randomSleep(5) fmt.Println("---收下奖励后去百度，避免长时间停留页面检测（猜的）---") wd.Get("https://www.baidu.com")
} func randomSleep(n int) { rand.Seed(time.Now().UnixNano()) // 设置随机数种子 delay := rand.Intn(n) + 3 // 随机延时秒数 time.Sleep(time.Second * time.Duration(delay)) fmt.Println("延时了", delay+3, "秒")
} 运行程序
go run main.go ​ 搞定！！`},{header:"后续计划",slug:"后续计划",content:"开发可以在linux上运行的版本"}]},{path:"/%E7%88%AC%E8%99%AB/%E8%AF%BB%E5%8F%96excel%E7%88%AC%E5%8F%96%E5%AF%B9%E5%BA%94%E7%BD%91%E7%AB%99%E7%94%9F%E6%88%90%E5%AF%BC%E8%88%AA%E4%BF%A1%E6%81%AF",title:"读取excel爬取对应网站生成导航信息",pathLocale:"/",contents:[{header:"读取excel爬取对应网站生成导航信息",slug:"读取excel爬取对应网站生成导航信息",content:""}]},{path:"/%E5%AF%BC%E8%88%AA/AI",title:"AI",pathLocale:"/",contents:[{header:"AI",slug:"ai",content:`科学上网工具
科学上网工具备份地址
chatgpt学习手册
chatgpt部署教程
十款生成ppt的工具实测
chatgpt账号注册
充值chatgpt plus
AIGC收藏库
ai技术
AI孙燕姿模型教程
AI技术精华
炼丹Lora终极攻略
Stable Diffusion终极宝典
mj技术
mj教程
ai变现
AI美女号抖音爆粉——一个视频破万粉
AI自动生成视频撸自媒体收益
如何使用chatgpt，每天自动批量产出100+条爆款短视频
批量生成表情包`}]},{path:"/%E5%AF%BC%E8%88%AA/golang",title:"golang",pathLocale:"/",contents:[{header:"golang",slug:"golang",content:""}]},{path:"/%E5%AF%BC%E8%88%AA/%E5%89%8D%E7%AB%AF",title:"前端",pathLocale:"/",contents:[{header:"前端",slug:"前端",content:""},{header:"vue3 及生态",slug:"vue3-及生态",content:""},{header:"工具",slug:"工具",content:""},{header:"vuepress",slug:"vuepress",content:""}]},{path:"/%E5%89%8D%E7%AB%AF/vue/vue-router%E7%9A%84history%E8%B7%AF%E7%94%B1%E9%83%A8%E7%BD%B2nginx%E5%88%B7%E6%96%B0404%E9%97%AE%E9%A2%98%E8%A7%A3%E5%86%B3",title:"vue-router的history路由部署nginx刷新404问题解决",pathLocale:"/",contents:[{header:"vue-router的history路由部署nginx刷新404问题解决",slug:"vue-router的history路由部署nginx刷新404问题解决",content:""},{header:"问题",slug:"问题",content:""},{header:"history路由和hash路由的区别？",slug:"history路由和hash路由的区别",content:""},{header:"解决方案",slug:"解决方案",content:`server { listen 80; server_name your_domain.com; location / { root /path/to/vue/dist; # Vue应用的构建输出目录 try_files $uri $uri/ /index.html; }
}
try_files指令按照从左到右的顺序逐个查找文件路径，并返回第一个找到的文件。如果没有找到任何文件，则会将请求转发给uri指定的备用URI。
在上面的配置中，当请求的文件路径（$uri）不存在时，Nginx会尝试查找以$uri/结尾的目录。如果目录也不存在，则会将请求转发到/index.html备用URI`}]},{path:"/%E5%89%8D%E7%AB%AF/%E9%9D%A2%E8%AF%95%E9%A2%98/js%E5%9F%BA%E7%A1%80",title:"js基础",pathLocale:"/",contents:[{header:"js基础",slug:"js基础",content:""}]},{path:"/%E5%89%8D%E7%AB%AF/js/%E8%B7%A8%E5%9F%9F%E5%A4%84%E7%90%86",title:"跨域的原因及解决办法",pathLocale:"/",contents:[{header:"跨域的原因及解决办法",slug:"跨域的原因及解决办法",content:""}]},{path:"/404.html",title:"",pathLocale:"/",contents:[]},{path:"/%E5%85%B6%E4%BB%96/",title:"其他",pathLocale:"/",contents:[]},{path:"/%E5%90%8E%E7%AB%AF/",title:"后端",pathLocale:"/",contents:[]},{path:"/%E5%AD%A6%E4%B9%A0%E6%97%A5%E8%AE%B0/",title:"学习日记",pathLocale:"/",contents:[]},{path:"/%E5%89%8D%E7%AB%AF/",title:"前端",pathLocale:"/",contents:[]},{path:"/%E7%88%AC%E8%99%AB/",title:"爬虫",pathLocale:"/",contents:[]},{path:"/%E5%AF%BC%E8%88%AA/",title:"导航",pathLocale:"/",contents:[]},{path:"/%E5%89%8D%E7%AB%AF/vue/",title:"Vue",pathLocale:"/",contents:[]},{path:"/%E5%89%8D%E7%AB%AF/%E9%9D%A2%E8%AF%95%E9%A2%98/",title:"面试题",pathLocale:"/",contents:[]},{path:"/%E5%89%8D%E7%AB%AF/js/",title:"Js",pathLocale:"/",contents:[]},{path:"/category/",title:"分类",pathLocale:"/",contents:[]},{path:"/tag/",title:"标签",pathLocale:"/",contents:[]},{path:"/article/",title:"文章",pathLocale:"/",contents:[]},{path:"/star/",title:"收藏",pathLocale:"/",contents:[]},{path:"/timeline/",title:"时间轴",pathLocale:"/",contents:[]},{path:"/category/golang/",title:"golang 分类",pathLocale:"/",contents:[]},{path:"/tag/vuepress/",title:"标签: vuepress",pathLocale:"/",contents:[]},{path:"/category/gin/",title:"gin 分类",pathLocale:"/",contents:[]},{path:"/tag/nvm/",title:"标签: nvm",pathLocale:"/",contents:[]},{path:"/category/%E6%97%A5%E8%AE%B0/",title:"日记 分类",pathLocale:"/",contents:[]},{path:"/tag/node/",title:"标签: node",pathLocale:"/",contents:[]},{path:"/category/%E5%89%8D%E7%AB%AF/",title:"前端 分类",pathLocale:"/",contents:[]},{path:"/tag/%E7%88%AC%E8%99%AB/",title:"标签: 爬虫",pathLocale:"/",contents:[]},{path:"/category/vue-router/",title:"vue-router 分类",pathLocale:"/",contents:[]},{path:"/tag/%E6%8E%98%E9%87%91%E5%B7%A5%E5%85%B7/",title:"标签: 掘金工具",pathLocale:"/",contents:[]},{path:"/category/%E9%83%A8%E7%BD%B2/",title:"部署 分类",pathLocale:"/",contents:[]},{path:"/tag/%E8%87%AA%E5%8A%A8%E7%AD%BE%E5%88%B0/",title:"标签: 自动签到",pathLocale:"/",contents:[]},{path:"/category/nginx/",title:"nginx 分类",pathLocale:"/",contents:[]},{path:"/tag/%E5%AF%BC%E8%88%AA/",title:"标签: 导航",pathLocale:"/",contents:[]},{path:"/category/%E9%9D%A2%E8%AF%95%E9%A2%98/",title:"面试题 分类",pathLocale:"/",contents:[]},{path:"/tag/excel%E8%A7%A3%E6%9E%90/",title:"标签: excel解析",pathLocale:"/",contents:[]},{path:"/category/%E8%B7%A8%E5%9F%9F/",title:"跨域 分类",pathLocale:"/",contents:[]},{path:"/category/js/",title:"js 分类",pathLocale:"/",contents:[]}],H="update-vuepress-plugin-full-text-search2-search-index";var B=f(N),j=w(()=>{const e=new Map;for(const n of B.value)e.set(n.path,n);return e});import.meta.webpackHot&&(__VUE_HMR_RUNTIME__[H]=e=>{B.value=e});function z(e){const n=f([]);let r=null;return T(e,()=>{r&&clearTimeout(r),r=setTimeout(o,100)}),n;function o(){const c=e.value.toLowerCase().trim();if(!c){n.value=[];return}const s=new Map,t=new Set;for(const a of B.value)for(const i of U(a,c)){t.add(i.parentPageTitle);let l=s.get(i.parentPageTitle);l||(l=[],s.set(i.parentPageTitle,l)),l.push(i)}const p=[...t].sort((a,i)=>{const l=s.get(a);return s.get(i).length-l.length});n.value=[...s].flatMap(([,a])=>a).sort((a,i)=>a.parentPagePriority-i.parentPagePriority||p.indexOf(a.parentPageTitle)-p.indexOf(i.parentPageTitle)||a.priority-i.priority)}}function*U(e,n){const r=b(e.title,n);if(r){yield{path:e.path,parentPageTitle:v(e),title:e.title,display:r,page:e,content:null,parentPagePriority:1,priority:1};return}for(const o of e.contents){const c=b(o.header,n);if(c){yield{path:e.path+(o.slug?`#${o.slug}`:""),parentPageTitle:v(e),title:e.title,display:c,page:e,content:null,parentPagePriority:10,priority:2};continue}const s=b(o.content,n);s&&(yield{path:e.path+(o.slug?`#${o.slug}`:""),parentPageTitle:v(e),title:e.title,display:[{type:"header",str:`${o.header}
`},...s],page:e,content:null,parentPagePriority:10,priority:10})}}function v(e){const n=e.path.split("/");let r="/";return n[1]&&(r=`/${n[1]}/`),(j.value.get(r)||e).title}function b(e,n){const r=[];let o=0;const c=e.toLowerCase().replace(/\s/gu," ");let s=0,t=c.indexOf(n,s);if(t<0)return null;for(;t>=0;){const a=t+n.length;if(p(e.slice(s,t),"normal"),p(e.slice(t,a),"highlight"),s=a,t=c.indexOf(n,s),o>100)break}return p(e.slice(s),"normal"),r.filter(a=>a.str);function p(a,i){let l=a;i==="normal"&&l.length>100&&o===0&&(l=`… ${l.slice(-10)}`);let h=!1;if(o+l.length>100){if(r.some(m=>m.type==="ellipsis"))return;l=l.slice(0,Math.max(100-o,1)),h=!0}r.push({type:i,str:l}),o+=l.length,h&&(r.push({type:"ellipsis",str:" …"}),o+=2)}}const q={"/":{placeholder:"搜索"}},J=D({name:"SearchBox",props:{locales:{type:Object,required:!1,default:()=>q}},setup(e){const{locales:n}=I(e),r=f(""),o=f(!1),c=f(-1),s=z(r),t=w(()=>r.value&&o.value&&s.value.length),p=k(),a=G(),i=w(()=>n.value[a.value]??{});function l(){if(!t.value)return;let d=c.value-1;d<0&&(d=s.value.length-1),m(d)}function h(){if(!t.value)return;let d=c.value+1;d>=s.value.length&&(d=0),m(d)}function m(d){c.value=d}function L(){c.value=-1}function C(d){if(!t.value)return;const P=s.value[d];P&&p.push(P.path)}return{query:r,focused:o,focusIndex:c,suggestions:s,activeSuggestion:t,onUp:l,onDown:h,focus:m,unfocus:L,go:C,locale:i}}});const V={class:"search-box",role:"search"},Y=["placeholder"],W=["onMousedown","onMouseenter"],X=["href"],K={key:0,class:"parent-page-title"},Q={class:"suggestion-row"},Z={class:"page-title"},ee={class:"suggestion-content"};function ne(e,n,r,o,c,s){return g(),u("div",V,[_(E("input",{ref:"input","onUpdate:modelValue":n[0]||(n[0]=t=>e.query=t),"aria-label":"Search",class:x({focused:e.focused}),placeholder:e.locale.placeholder??"Search",autocomplete:"off",spellcheck:"false",onFocus:n[1]||(n[1]=()=>e.focused=!0),onBlur:n[2]||(n[2]=()=>e.focused=!1),onKeyup:[n[3]||(n[3]=A(t=>e.go(e.focusIndex),["enter"])),n[4]||(n[4]=A((...t)=>e.onUp&&e.onUp(...t),["up"])),n[5]||(n[5]=A((...t)=>e.onDown&&e.onDown(...t),["down"]))]},null,42,Y),[[R,e.query]]),e.activeSuggestion?(g(),u("ul",{key:0,class:"suggestions",onMouseleave:n[7]||(n[7]=(...t)=>e.unfocus&&e.unfocus(...t))},[(g(!0),u(F,null,S(e.suggestions,(t,p)=>(g(),u("li",{key:p,class:x(["suggestion",{focused:p===e.focusIndex}]),onMousedown:a=>e.go(p),onMouseenter:a=>e.focus(p)},[E("a",{href:t.path,onClick:n[6]||(n[6]=M(()=>{},["prevent"]))},[t.parentPageTitle&&(!e.suggestions[p-1]||e.suggestions[p-1].parentPageTitle!==t.parentPageTitle)?(g(),u("div",K,y(t.parentPageTitle),1)):O("v-if",!0),E("div",Q,[E("div",Z,y(t.title||t.path),1),E("div",ee,[(g(!0),u(F,null,S(t.display,(a,i)=>(g(),u("span",{key:i,class:x(a.type)},y(a.str),3))),128))])])],8,X)],42,W))),128))],32)):O("v-if",!0)])}const oe=$(J,[["render",ne],["__scopeId","data-v-e574e488"],["__file","SearchBox.vue"]]);export{oe as default};

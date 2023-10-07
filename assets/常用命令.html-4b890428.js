import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e}from"./app-2b248397.js";const i={},t=e(`<h1 id="git常用命令" tabindex="-1"><a class="header-anchor" href="#git常用命令" aria-hidden="true">#</a> git常用命令</h1><h3 id="首次使用基本配置" tabindex="-1"><a class="header-anchor" href="#首次使用基本配置" aria-hidden="true">#</a> 首次使用基本配置</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--global</span> user.email <span class="token string">&quot;你的邮箱&quot;</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.name <span class="token string">&quot;你的名字&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="初始化-git-仓库" tabindex="-1"><a class="header-anchor" href="#初始化-git-仓库" aria-hidden="true">#</a> 初始化 git 仓库</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="克隆一个远程仓库到本地" tabindex="-1"><a class="header-anchor" href="#克隆一个远程仓库到本地" aria-hidden="true">#</a> 克隆一个远程仓库到本地</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone <span class="token operator">&lt;</span>仓库地址<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="将文件提交到暂存区" tabindex="-1"><a class="header-anchor" href="#将文件提交到暂存区" aria-hidden="true">#</a> 将文件提交到暂存区</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 添加单个文件</span>
<span class="token function">git</span> <span class="token function">add</span> <span class="token operator">&lt;</span>文件<span class="token operator">&gt;</span>
<span class="token comment"># 添加多个文件</span>
<span class="token function">git</span> <span class="token function">add</span> <span class="token operator">&lt;</span>文件<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>文件<span class="token operator">&gt;</span> <span class="token punctuation">..</span>.
<span class="token comment"># 添加指定目录及其子目录下的所有文件到暂存区</span>
<span class="token function">git</span> <span class="token function">add</span> <span class="token operator">&lt;</span>目录<span class="token operator">&gt;</span>
<span class="token comment"># 添加当前目录及其子目录下的文件到暂存区</span>
<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
<span class="token comment"># 将项目的所有文件添加到暂存区，和 git add . 的区别是无论当前目录处于项目中的哪一层级</span>
<span class="token function">git</span> <span class="token function">add</span> <span class="token parameter variable">--all</span>
<span class="token comment"># 将指定文件撤销到上次commit的状态</span>
<span class="token function">git</span> reset <span class="token operator">&lt;</span>文件<span class="token operator">&gt;</span>
<span class="token comment"># 将指定文件从暂存区撤销，但不影响该文件的修改</span>
<span class="token function">git</span> restore <span class="token parameter variable">--staged</span> <span class="token operator">&lt;</span>文件<span class="token operator">&gt;</span>
<span class="token comment"># 放弃工作区中的修改</span>
<span class="token function">git</span> restore <span class="token operator">&lt;</span>文件<span class="token operator">&gt;</span>
<span class="token comment"># 清空所有已暂存（未提交）的文件和目录，并重置所有工作区修改（重置到上次commit状态）</span>
<span class="token function">git</span> reset <span class="token parameter variable">-hard</span> HEAD
<span class="token comment"># 清空所有已暂存（未提交）的文件和目录，并保留所有工作区修改</span>
<span class="token function">git</span> reset HEAD
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="提交暂存区的文件到本地仓库-可以使用-m指定本次提交的版本号-用于编写本次提交的说明信息-包括本次提交的目的、修改的内容等" tabindex="-1"><a class="header-anchor" href="#提交暂存区的文件到本地仓库-可以使用-m指定本次提交的版本号-用于编写本次提交的说明信息-包括本次提交的目的、修改的内容等" aria-hidden="true">#</a> 提交暂存区的文件到本地仓库（可以使用-m指定本次提交的版本号，用于编写本次提交的说明信息，包括本次提交的目的、修改的内容等）</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> commit <span class="token parameter variable">-m</span> 说明信息
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="查看工作区和暂存区的状态" tabindex="-1"><a class="header-anchor" href="#查看工作区和暂存区的状态" aria-hidden="true">#</a> 查看工作区和暂存区的状态</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> status
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="从远程仓库拉取最新代码到本地" tabindex="-1"><a class="header-anchor" href="#从远程仓库拉取最新代码到本地" aria-hidden="true">#</a> 从远程仓库拉取最新代码到本地</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> pull
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>注意：执行 git pull 操作之前应先提交或暂存本地的修改，以免与远程仓库代码产生冲突</p><h3 id="将本地的commit提交到远程仓库" tabindex="-1"><a class="header-anchor" href="#将本地的commit提交到远程仓库" aria-hidden="true">#</a> 将本地的commit提交到远程仓库</h3><p>git push -u 命令用于将当前分支的提交推送到与之关联的远程分支，并建立起追踪关系</p><p>具体而言，使用 git push -u 命令可以完成两个操作</p><ol><li>将当前分支的提交推送到与之关联的远程分支</li><li>建立起本地分支与远程分支的追踪关系，使得以后的 git push 命令可以自动推送到正确的远程分支</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 将当前分支的提交推送到名为 origin 的远程仓库的 master 分支，并建立起本地 master 分支与远程 master 分支的追踪关系。</span>
<span class="token function">git</span> push <span class="token parameter variable">-u</span> origin master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>执行过程：</p><ol><li>git push 会将本地的提交推送到远程仓库</li><li>如果远程仓库中不存在对应的远程分支，git push 会自动创建该分支</li><li>如果远程仓库中已经存在对应的远程分支，git push 会将本地分支的提交合并到远程分支中</li><li>如果推送过程中出现冲突，git push 会提示解决冲突，并在解决后继续推送</li><li>最后，git push 完成推送后，远程仓库中的代码将与本地代码保持一致</li></ol><p>注意事项：</p><ol><li>执行 git push 前，建议先提交或暂存本地修改，以免推送到远程仓库时出现冲突</li><li>可以使用 git push --force 命令来强制推送，即覆盖远程仓库中的内容，需要谨慎使用，因为可能覆盖其他人的修改，容易被骂</li><li>如果想要推送所有分支到远程仓库，可以使用 git push --all 命令</li><li><code>-u</code> 参数只需要在第一次推送时使用，之后的推送可以直接使用 <code>git push</code>。</li><li>如果当前分支与远程分支已经建立了追踪关系，再次执行 <code>git push -u</code> 会更新远程分支上的提交，但不会重新建立追踪关系。</li><li>可以使用 <code>git branch -vv</code> 命令查看本地分支与远程分支的追踪关系。</li></ol><h3 id="查看、创建和删除分支" tabindex="-1"><a class="header-anchor" href="#查看、创建和删除分支" aria-hidden="true">#</a> 查看、创建和删除分支</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看当前仓库的所有分支，当前分支会有*标识</span>
<span class="token function">git</span> branch
<span class="token comment"># 创建一个新分支</span>
<span class="token function">git</span> branch <span class="token operator">&lt;</span>分支名<span class="token operator">&gt;</span>
<span class="token comment"># 删除指定分支，如果该分支的工作尚未合并到其他分支，则删除操作将会被拒绝。如果要强制删除未合并的分支，可以使用-D参数</span>
<span class="token function">git</span> branch <span class="token parameter variable">-d</span> <span class="token operator">&lt;</span>分支名<span class="token operator">&gt;</span>
<span class="token comment"># 重命名分支</span>
<span class="token function">git</span> branch <span class="token parameter variable">-m</span> <span class="token operator">&lt;</span>旧分支名<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>新分支名<span class="token operator">&gt;</span>
<span class="token comment"># 查看所有的本地分支和远程分支</span>
<span class="token function">git</span> branch <span class="token parameter variable">-a</span>
<span class="token comment"># 查看远程分支</span>
<span class="token function">git</span> branch <span class="token parameter variable">-r</span>
<span class="token comment"># 查看本地分支与远程分支的追踪关系</span>
<span class="token function">git</span> branch <span class="token parameter variable">-vv</span>
<span class="token comment"># 查看已合并到当前分支的分支</span>
<span class="token function">git</span> branch <span class="token parameter variable">--merged</span>
<span class="token comment"># 查看尚未合并到当前分支的分支</span>
<span class="token function">git</span> branch --no-merged
<span class="token comment"># 查看包含指定提交的分支</span>
<span class="token function">git</span> branch <span class="token parameter variable">--contain</span> <span class="token operator">&lt;</span>commit<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="git-checkout-常见用法" tabindex="-1"><a class="header-anchor" href="#git-checkout-常见用法" aria-hidden="true">#</a> git checkout 常见用法</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 切换到指定分支</span>
<span class="token function">git</span> checkout <span class="token operator">&lt;</span>分支名<span class="token operator">&gt;</span>
<span class="token comment"># 创建并切换到新分支</span>
<span class="token function">git</span> checkout <span class="token parameter variable">-b</span> <span class="token operator">&lt;</span>新分支名<span class="token operator">&gt;</span>
<span class="token comment"># 将指定文件恢复到最近提交的状态，丢弃所有未提交修改</span>
<span class="token function">git</span> checkout -- <span class="token operator">&lt;</span>文件名<span class="token operator">&gt;</span>
<span class="token comment"># 恢复到指定提交</span>
<span class="token function">git</span> checkout <span class="token operator">&lt;</span>commit<span class="token operator">&gt;</span>
<span class="token comment"># 切换到指定远程分支</span>
<span class="token function">git</span> checkout origin/<span class="token operator">&lt;</span>分支名<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意事项：</p><ol><li>在切换分支之前，确保当前分支的修改已经提交或者保存。</li><li>在恢复文件之前，确保未提交的修改已经保存，因为恢复文件将丢弃所有未提交的修改。</li><li>当切换到远程分支时，Git 会自动创建一个本地分支来跟踪远程分支。</li></ol><h3 id="合并分支" tabindex="-1"><a class="header-anchor" href="#合并分支" aria-hidden="true">#</a> 合并分支</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 将指定分支的更改合并到当前分支</span>
<span class="token function">git</span> merge <span class="token operator">&lt;</span>分支名<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="git-log-常见用法" tabindex="-1"><a class="header-anchor" href="#git-log-常见用法" aria-hidden="true">#</a> git log 常见用法</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 显示当前分支的所有提交记录，按照时间顺序从最近到最早的排列</span>
<span class="token function">git</span> log
<span class="token comment"># 限制显示数量</span>
<span class="token function">git</span> log <span class="token parameter variable">-n</span> <span class="token operator">&lt;</span>数量<span class="token operator">&gt;</span>
<span class="token comment"># 显示每个提交的详细信息，包括修改的文件和具体的更改内容</span>
<span class="token function">git</span> log <span class="token parameter variable">-p</span>
<span class="token comment"># 以一行的简介形式显示每个提交的简略信息</span>
<span class="token function">git</span> log <span class="token parameter variable">--oneline</span>
<span class="token comment"># 仅显示指定日期之后的提交记录</span>
<span class="token function">git</span> log <span class="token parameter variable">--since</span><span class="token operator">=</span><span class="token operator">&lt;</span>date<span class="token operator">&gt;</span>
<span class="token comment"># 仅显示指定作者的提交记录</span>
<span class="token function">git</span> log <span class="token parameter variable">--author</span><span class="token operator">=</span><span class="token operator">&lt;</span>author<span class="token operator">&gt;</span>
<span class="token comment"># 图形化显示提交历史，显示分支和合并的关系</span>
<span class="token function">git</span> log <span class="token parameter variable">--graph</span>
<span class="token comment"># 仅显示指定分支的提交历史</span>
<span class="token function">git</span> log <span class="token operator">&lt;</span>分支名<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>提示：使用 q 键可以退出 git log 的查看模式</p><h3 id="远程仓库管理" tabindex="-1"><a class="header-anchor" href="#远程仓库管理" aria-hidden="true">#</a> 远程仓库管理</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 显示当前仓库配置的所有远程仓库的名称</span>
<span class="token function">git</span> remote
<span class="token comment"># 添加远程仓库，并指定一个名称和url</span>
<span class="token function">git</span> remote <span class="token function">add</span> <span class="token operator">&lt;</span>名称<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>url<span class="token operator">&gt;</span>
<span class="token comment"># 移除指定名称的远程仓库</span>
<span class="token function">git</span> remote remove <span class="token operator">&lt;</span>名称<span class="token operator">&gt;</span>
<span class="token comment"># 重命名远程仓库</span>
<span class="token function">git</span> remote <span class="token function">rename</span> <span class="token operator">&lt;</span>旧名称<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>新名称<span class="token operator">&gt;</span>
<span class="token comment"># 显示指定远程仓库详细信息</span>
<span class="token function">git</span> remote show <span class="token operator">&lt;</span>仓库名称<span class="token operator">&gt;</span>
<span class="token comment"># 查看远程仓库的详细信息，包括URL和跟踪的分支</span>
<span class="token function">git</span> remote <span class="token parameter variable">-v</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：</p><ol><li>本地仓库可以与一个或多个远程仓库进行关联</li><li>远程仓库名通常是 origin，也可以自定义其他名称</li><li>远程仓库的操作不会影响本地仓库的提交历史，只用于与其他仓库进行交互和同步代码</li></ol><h3 id="查看文件或代码之间的差异" tabindex="-1"><a class="header-anchor" href="#查看文件或代码之间的差异" aria-hidden="true">#</a> 查看文件或代码之间的差异</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 比较工作区和暂存区的差异</span>
<span class="token function">git</span> <span class="token function">diff</span>
<span class="token comment"># 比较暂存区和最新提交的差异</span>
<span class="token function">git</span> <span class="token function">diff</span> <span class="token parameter variable">--cached</span> 或 <span class="token function">git</span> <span class="token function">diff</span> <span class="token parameter variable">--staged</span>
<span class="token comment"># 比较两个提交之间的差异</span>
<span class="token function">git</span> <span class="token function">diff</span> <span class="token operator">&lt;</span>commit<span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span> <span class="token operator">&lt;</span>commit<span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span>
<span class="token comment"># 比较指定文件的差异</span>
<span class="token function">git</span> <span class="token function">diff</span> <span class="token operator">&lt;</span>文件<span class="token operator">&gt;</span>
<span class="token comment"># 比较分支之间的差异</span>
<span class="token function">git</span> <span class="token function">diff</span> <span class="token operator">&lt;</span>分支<span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span> <span class="token operator">&lt;</span>分支<span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：</p><ol><li>git diff 默认会以行的形式显示差异，显示被修改的行和具体更改的内容</li><li>git diff 只会显示文件的差异，并不会实际修改文件</li><li>git diff 可以与其他选项和参数一起使用，如 --stat 显示简略的差异统计信息，--word-diff 显示单词级别的差异</li></ol>`,44),l=[t];function o(c,p){return s(),a("div",null,l)}const m=n(i,[["render",o],["__file","常用命令.html.vue"]]);export{m as default};

import{_ as s,e as a,f as e,o as t}from"./app-DMWf9-jJ.js";const n={};function h(l,i){return t(),a("div",null,i[0]||(i[0]=[e(`<h2 id="内容" tabindex="-1"><a class="header-anchor" href="#内容"><span>内容</span></a></h2><h3 id="_1-镜像获取" tabindex="-1"><a class="header-anchor" href="#_1-镜像获取"><span>1.镜像获取</span></a></h3><h4 id="_1-1-查询docker-hub镜像" tabindex="-1"><a class="header-anchor" href="#_1-1-查询docker-hub镜像"><span>1.1.查询docker hub镜像</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> docker</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> search</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ollama</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="_1-2-拉取镜像" tabindex="-1"><a class="header-anchor" href="#_1-2-拉取镜像"><span>1.2.拉取镜像</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">docker</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> pull</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ollama/ollama</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="_1-3-查看本地镜像" tabindex="-1"><a class="header-anchor" href="#_1-3-查看本地镜像"><span>1.3.查看本地镜像</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> docker</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> images</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_2-环境准备" tabindex="-1"><a class="header-anchor" href="#_2-环境准备"><span>2.环境准备</span></a></h3><h4 id="_2-1-新建宿主机挂载目录" tabindex="-1"><a class="header-anchor" href="#_2-1-新建宿主机挂载目录"><span>2.1.新建宿主机挂载目录</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> mkdir</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -p</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> /opt/app/ollama</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="_2-2-安装nvidia-容器工具包" tabindex="-1"><a class="header-anchor" href="#_2-2-安装nvidia-容器工具包"><span>2.2.安装NVIDIA 容器工具包</span></a></h4><p>[【Linux】【Ubuntu】【NVIDIA】NVIDIA 容器工具包安装](./【Linux】【Ubuntu】【NVIDIA】NVIDIA 容器工具包安装.md)</p><h4 id="_2-3-配置-docker-以使用-nvidia-驱动程序" tabindex="-1"><a class="header-anchor" href="#_2-3-配置-docker-以使用-nvidia-驱动程序"><span>2.3.配置 Docker 以使用 Nvidia 驱动程序</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> nvidia-ctk</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> runtime</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> configure</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --runtime=docker</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> systemctl</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> restart</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> docker</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-启动镜像" tabindex="-1"><a class="header-anchor" href="#_3-启动镜像"><span>3.启动镜像</span></a></h3><h4 id="_3-1-运行镜像" tabindex="-1"><a class="header-anchor" href="#_3-1-运行镜像"><span>3.1.运行镜像</span></a></h4><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> docker</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> run</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -d</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> \\</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">  --gpus=all</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> \\</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">  --name</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ollama</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> \\</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">  -v</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> /opt/app/ollama:/root/.ollama</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> \\</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">  -p</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 11434:11434</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> \\</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">  --restart</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> always</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> \\</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  ollama/ollama</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-2-参数解释" tabindex="-1"><a class="header-anchor" href="#_3-2-参数解释"><span>3.2.参数解释</span></a></h4><table><thead><tr><th>指令</th><th>描述</th></tr></thead><tbody><tr><td><code>-p</code></td><td>映射端口</td></tr><tr><td><code>--gpus</code></td><td>分配所有可用的 GPU 给容器</td></tr><tr><td><code>--name</code></td><td>容器名称</td></tr><tr><td><code>-v</code></td><td>卷挂载</td></tr><tr><td><code>-d</code></td><td>后台运行</td></tr><tr><td><code>--restart</code></td><td>重启策略</td></tr></tbody></table><table><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td><code>-d</code></td><td>后台运行容器</td></tr><tr><td><code>--gpus=all</code></td><td>分配所有 GPU 给容器（用于模型推理加速）</td></tr><tr><td><code>--name ollama</code></td><td>容器命名为 ollama</td></tr><tr><td><code>-v /opt/app/ollama:/root/.ollama</code></td><td>映射模型和配置文件目录（持久化模型数据）</td></tr><tr><td><code>-p 11434:11434</code></td><td>映射端口 11434（Ollama 默认服务端口）</td></tr><tr><td><code>--restart always</code></td><td>容器意外停止或系统重启时自动启动</td></tr><tr><td><code>ollama/ollama</code></td><td>使用 ollama 官方镜像</td></tr></tbody></table><h4 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令"><span>常用命令</span></a></h4><div class="language-markdown line-numbers-mode" data-highlighter="shiki" data-ext="markdown" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">##</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 查看所有容器</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">docker ps -a</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">##</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 查看所有镜像</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">docker images</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">##</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 查看容器日志</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">docker logs </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">容器ID或容器名</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">##</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 删除容器</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">docker rm </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">容器ID或容器名</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">##</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 删除镜像</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">docker rmi </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">镜像ID</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">##</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 停止容器</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">docker stop </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">容器ID或容器名</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">##</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 启动容器</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">docker start </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">容器ID或容器名</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,23)]))}const r=s(n,[["render",h],["__file","index.html.vue"]]),k=JSON.parse(`{"path":"/blog/4f5zpe3s/","title":"【Linux】【Docker】【Ollama】Ollama服务安装","lang":"zh-CN","frontmatter":{"title":"【Linux】【Docker】【Ollama】Ollama服务安装","copyright":"CC-BY-4.0","tags":["linux","docker","Ollama"],"createTime":"2025/03/18 09:00:00","updateTime":"2025/04/12 19:11:00","permalink":"/blog/4f5zpe3s/","description":"内容 1.镜像获取 1.1.查询docker hub镜像 1.2.拉取镜像 1.3.查看本地镜像 2.环境准备 2.1.新建宿主机挂载目录 2.2.安装NVIDIA 容器工具包 [【Linux】【Ubuntu】【NVIDIA】NVIDIA 容器工具包安装](./【Linux】【Ubuntu】【NVIDIA】NVIDIA 容器工具包安装.md) 2.3....","head":[["meta",{"property":"og:url","content":"https://notonull.github.io/logic-hub/blog/4f5zpe3s/"}],["meta",{"property":"og:site_name","content":"aGeng 's Blog"}],["meta",{"property":"og:title","content":"【Linux】【Docker】【Ollama】Ollama服务安装"}],["meta",{"property":"og:description","content":"内容 1.镜像获取 1.1.查询docker hub镜像 1.2.拉取镜像 1.3.查看本地镜像 2.环境准备 2.1.新建宿主机挂载目录 2.2.安装NVIDIA 容器工具包 [【Linux】【Ubuntu】【NVIDIA】NVIDIA 容器工具包安装](./【Linux】【Ubuntu】【NVIDIA】NVIDIA 容器工具包安装.md) 2.3...."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-04-13T10:26:37.000Z"}],["meta",{"property":"article:tag","content":"linux"}],["meta",{"property":"article:tag","content":"docker"}],["meta",{"property":"article:tag","content":"Ollama"}],["meta",{"property":"article:modified_time","content":"2025-04-13T10:26:37.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"【Linux】【Docker】【Ollama】Ollama服务安装\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-04-13T10:26:37.000Z\\",\\"author\\":[]}"]]},"headers":[],"readingTime":{"minutes":1.34,"words":402},"git":{"updatedTime":1744539997000,"contributors":[{"name":"ronggeng.chen","username":"ronggeng.chen","email":"chen.ronggeng.email@gmail.com","commits":1,"avatar":"https://avatars.githubusercontent.com/ronggeng.chen?v=4","url":"https://github.com/ronggeng.chen"}]},"autoDesc":true,"filePathRelative":"部署教程/【Linux】【Docker】【Ollama】Ollama服务安装.md","categoryList":[{"id":"9e37c9","sort":10001,"name":"部署教程"}]}`);export{r as comp,k as data};

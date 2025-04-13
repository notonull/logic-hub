import{_ as n,e,f as s,g as t,h,i as l,r as d,o as k,j as r}from"./app-CD0VK3h8.js";const p={};function o(g,i){const a=d("RouteLink");return k(),e("div",null,[i[1]||(i[1]=s(`<h2 id="_1-镜像获取" tabindex="-1"><a class="header-anchor" href="#_1-镜像获取"><span>1.镜像获取</span></a></h2><h3 id="_1-1-查询docker-hub镜像" tabindex="-1"><a class="header-anchor" href="#_1-1-查询docker-hub镜像"><span>1.1.查询docker hub镜像</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> docker</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> search</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> nginx</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_1-2-拉取镜像" tabindex="-1"><a class="header-anchor" href="#_1-2-拉取镜像"><span>1.2.拉取镜像</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> docker</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> pull</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> nginx</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_1-3-查看本地镜像" tabindex="-1"><a class="header-anchor" href="#_1-3-查看本地镜像"><span>1.3.查看本地镜像</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> docker</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> images</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="_2-环境准备" tabindex="-1"><a class="header-anchor" href="#_2-环境准备"><span>2.环境准备</span></a></h2><h3 id="_2-1-新建宿主机挂载目录" tabindex="-1"><a class="header-anchor" href="#_2-1-新建宿主机挂载目录"><span>2.1.新建宿主机挂载目录</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> mkdir</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -p</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> /opt/app/nginx</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> mkdir</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -p</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> /opt/app/nginx/conf</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> mkdir</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -p</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> /opt/app/nginx/logs</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> mkdir</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -p</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> /opt/app/nginx/html</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-启动镜像" tabindex="-1"><a class="header-anchor" href="#_3-启动镜像"><span>3.启动镜像</span></a></h2><h3 id="_3-1-运行镜像" tabindex="-1"><a class="header-anchor" href="#_3-1-运行镜像"><span>3.1.运行镜像</span></a></h3><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> docker</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> run</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -d</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> \\</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">  --name</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> nginx</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> \\</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">  -p</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 80:80</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> \\</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">  -p</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 443:443</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> \\</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">  -v</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> /opt/app/nginx/conf/nginx.conf:/etc/nginx/nginx.conf</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> \\</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">  -v</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> /opt/app/nginx/conf/conf.d:/etc/nginx/conf.d</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> \\</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">  -v</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> /opt/app/nginx/logs:/var/log/nginx</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> \\</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">  -v</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> /opt/app/nginx/html:/usr/share/nginx/html</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> \\</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">  --restart</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> always</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> \\</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  nginx:latest</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-参数解释" tabindex="-1"><a class="header-anchor" href="#_3-2-参数解释"><span>3.2.参数解释</span></a></h3><table><thead><tr><th>指令</th><th>描述</th></tr></thead><tbody><tr><td><code>-d</code></td><td>后台运行</td></tr><tr><td><code>-name</code></td><td>容器名称</td></tr><tr><td><code>-e</code></td><td>容器环境</td></tr><tr><td><code>-p</code></td><td>映射端口</td></tr><tr><td><code>-v</code></td><td>卷挂载</td></tr><tr><td><code>--restart</code></td><td>重启策略</td></tr></tbody></table><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td><code>-d</code></td><td>后台运行容器</td></tr><tr><td><code>--name nginx</code></td><td>容器命名为 nginx</td></tr><tr><td><code>-p 80:80</code></td><td>映射 80 端口</td></tr><tr><td><code>-p 443:443</code></td><td>映射 443 端口</td></tr><tr><td><code>-v /opt/app/nginx/conf/nginx.conf:/etc/nginx/nginx.conf</code></td><td>映射主配置文件</td></tr><tr><td><code>-v /opt/app/nginx/conf/conf.d:/etc/nginx/conf.d</code></td><td>映射子配置目录（多站点配置）</td></tr><tr><td><code>-v /opt/app/nginx/logs:/var/log/nginx</code></td><td>映射日志目录</td></tr><tr><td><code>-v /opt/app/nginx/html:/usr/share/nginx/html</code></td><td>映射网页目录</td></tr><tr><td><code>--restart always</code></td><td>容器意外停止或系统重启时自动启动</td></tr><tr><td><code>nginx:latest</code></td><td>使用 nginx:latest 镜像</td></tr></tbody></table><h2 id="_4-后续配置" tabindex="-1"><a class="header-anchor" href="#_4-后续配置"><span>4.后续配置</span></a></h2><h3 id="_4-1-配置conf" tabindex="-1"><a class="header-anchor" href="#_4-1-配置conf"><span>4.1. 配置conf</span></a></h3>`,18)),t("p",null,[h(a,{to:"/%E4%BB%A3%E7%A0%81%E6%A8%A1%E6%9D%BF/%E3%80%90Nginx%E3%80%91conf%E9%85%8D%E7%BD%AE%E6%A8%A1%E6%9D%BF.html"},{default:l(()=>i[0]||(i[0]=[r("【Nginx】conf配置模板")])),_:1})]),i[2]||(i[2]=s(`<h2 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令"><span>常用命令</span></a></h2><div class="language-markdown line-numbers-mode" data-highlighter="shiki" data-ext="markdown" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold;">##</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold;"> 查看所有容器</span></span>
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
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">docker start </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">容器ID或容器名</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2))])}const b=n(p,[["render",o],["__file","index.html.vue"]]),y=JSON.parse(`{"path":"/blog/rek825cy/","title":"【Linux】【Docker】【Nginx】Nginx服务安装","lang":"zh-CN","frontmatter":{"title":"【Linux】【Docker】【Nginx】Nginx服务安装","copyright":"CC-BY-4.0","tags":["linux","docker","nginx"],"createTime":"2025/04/12 17:00:02","permalink":"/blog/rek825cy/","description":"1.镜像获取 1.1.查询docker hub镜像 1.2.拉取镜像 1.3.查看本地镜像 2.环境准备 2.1.新建宿主机挂载目录 3.启动镜像 3.1.运行镜像 3.2.参数解释 4.后续配置 4.1. 配置conf 常用命令","head":[["meta",{"property":"og:url","content":"https://notonull.github.io/logic-hub/blog/rek825cy/"}],["meta",{"property":"og:site_name","content":"aGeng 's Blog"}],["meta",{"property":"og:title","content":"【Linux】【Docker】【Nginx】Nginx服务安装"}],["meta",{"property":"og:description","content":"1.镜像获取 1.1.查询docker hub镜像 1.2.拉取镜像 1.3.查看本地镜像 2.环境准备 2.1.新建宿主机挂载目录 3.启动镜像 3.1.运行镜像 3.2.参数解释 4.后续配置 4.1. 配置conf 常用命令"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-04-13T10:42:05.000Z"}],["meta",{"property":"article:tag","content":"linux"}],["meta",{"property":"article:tag","content":"docker"}],["meta",{"property":"article:tag","content":"nginx"}],["meta",{"property":"article:modified_time","content":"2025-04-13T10:42:05.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"【Linux】【Docker】【Nginx】Nginx服务安装\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-04-13T10:42:05.000Z\\",\\"author\\":[]}"]]},"headers":[],"readingTime":{"minutes":1.29,"words":388},"git":{"updatedTime":1744540925000,"contributors":[{"name":"ronggeng.chen","username":"ronggeng.chen","email":"chen.ronggeng.email@gmail.com","commits":3,"avatar":"https://avatars.githubusercontent.com/ronggeng.chen?v=4","url":"https://github.com/ronggeng.chen"}]},"autoDesc":true,"filePathRelative":"部署教程/【Linux】【Docker】【Nginx】Nginx服务安装.md","categoryList":[{"id":"9e37c9","sort":10002,"name":"部署教程"}]}`);export{b as comp,y as data};

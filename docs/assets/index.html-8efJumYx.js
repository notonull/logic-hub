import{_ as e,e as s,f as n,o as i}from"./app-DMWf9-jJ.js";const t={};function r(o,a){return i(),s("div",null,a[0]||(a[0]=[n(`<h2 id="内容" tabindex="-1"><a class="header-anchor" href="#内容"><span>内容</span></a></h2><h3 id="_1-问题描述" tabindex="-1"><a class="header-anchor" href="#_1-问题描述"><span>1.问题描述</span></a></h3><h4 id="_1-1-问题背景" tabindex="-1"><a class="header-anchor" href="#_1-1-问题背景"><span>1.1.问题背景</span></a></h4><p>该问题出现在我尝试安装 TrueNAS SCALE 时，特别是在升级或安装过程中的某个阶段，系统未能成功导入 <em><strong>*boot-pool*</strong></em>。尽管安装过程中没有错误提示，但在启动时无法找到启动池，导致无法正常启动操作系统。</p><h4 id="_1-2-影响范围" tabindex="-1"><a class="header-anchor" href="#_1-2-影响范围"><span>1.2.影响范围</span></a></h4><p>无法正确安装truenas。</p><h3 id="_2-参考资料" tabindex="-1"><a class="header-anchor" href="#_2-参考资料"><span>2.参考资料</span></a></h3><h4 id="_2-1-truenas论坛" tabindex="-1"><a class="header-anchor" href="#_2-1-truenas论坛"><span>2.1.TrueNAS论坛</span></a></h4><p>https://ixsystems.atlassian.net/browse/NAS-131890</p><h4 id="_2-2-reddit-truenas-社区" tabindex="-1"><a class="header-anchor" href="#_2-2-reddit-truenas-社区"><span>2.2.Reddit TrueNAS 社区</span></a></h4><p>https://www.reddit.com/r/truenas/comments/1b13tf9/scale_clean_install_bootpool_not_found/</p><h3 id="_3-场景还原" tabindex="-1"><a class="header-anchor" href="#_3-场景还原"><span>3.场景还原</span></a></h3><h4 id="_3-1-安装步骤" tabindex="-1"><a class="header-anchor" href="#_3-1-安装步骤"><span>3.1.安装步骤</span></a></h4><p>我按照官方文档进行安装，使用的是 <strong>TrueNAS SCALE 24.10.1</strong> 镜像。</p><h4 id="_3-2-硬件环境" tabindex="-1"><a class="header-anchor" href="#_3-2-硬件环境"><span>3.2.硬件环境</span></a></h4><p>SDD 安装过程中未选择任何额外的存储池，仅使用默认的启动池。</p><h4 id="_3-3-错误信息" tabindex="-1"><a class="header-anchor" href="#_3-3-错误信息"><span>3.3.错误信息</span></a></h4><p>启动时出现如下错误信息：cannot import &#39;boot-pool&#39;: no such pool available</p><h3 id="_4-排查过程" tabindex="-1"><a class="header-anchor" href="#_4-排查过程"><span>4.排查过程</span></a></h3><h5 id="_4-1-重新安装" tabindex="-1"><a class="header-anchor" href="#_4-1-重新安装"><span>4.1.重新安装</span></a></h5><p>多次尝试重新安装，使用不同的磁盘进行测试，但问题仍然存在。</p><h5 id="_4-2-检查zfs池" tabindex="-1"><a class="header-anchor" href="#_4-2-检查zfs池"><span>4.2.检查ZFS池</span></a></h5><p>使用 <code>zpool import</code> 命令检查可用池，但返回的结果没有显示任何有效的池。</p><h5 id="_4-3-浏览社区" tabindex="-1"><a class="header-anchor" href="#_4-3-浏览社区"><span>4.3.浏览社区</span></a></h5><p>参考多个社区问题发现可能存在ZFS磁盘元数据残留问题导致</p><h3 id="_5-问题原因" tabindex="-1"><a class="header-anchor" href="#_5-问题原因"><span>5.问题原因</span></a></h3><ul><li><strong>ZFS 元数据</strong> 残留导致的启动池问题，可能是安装过程中未完全清除磁盘上的旧数据或分区信息，导致系统无法找到正确的 <strong>boot-pool</strong>。</li><li>可能是非全新硬盘有历史元数据即便是重新分区格式依旧存在问题</li></ul><h3 id="_4-解决过程" tabindex="-1"><a class="header-anchor" href="#_4-解决过程"><span>4.解决过程</span></a></h3><h4 id="_4-1-使用iso启动盘启动" tabindex="-1"><a class="header-anchor" href="#_4-1-使用iso启动盘启动"><span>4.1.使用ISO启动盘启动</span></a></h4><p>然后系统进入 <strong>initramfs shell</strong></p><h4 id="_4-2-查看磁盘信息查找系统盘" tabindex="-1"><a class="header-anchor" href="#_4-2-查看磁盘信息查找系统盘"><span>4.2.查看磁盘信息查找系统盘</span></a></h4><p>即你用于安装 <strong>TrueNAS</strong> 的磁盘（比如 <code>/dev/sda</code> 或 <code>/dev/nvme0n1</code>），这是你要清除的磁盘。</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">lsblk</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>*注意：清除元数据会导致磁盘信息丢失，如有重要信切记备份后再执行操作。</p><h4 id="_4-3-清除磁盘元数据" tabindex="-1"><a class="header-anchor" href="#_4-3-清除磁盘元数据"><span>4.3.清除磁盘元数据</span></a></h4><p>使用 <code>wipefs</code> 清除磁盘上的所有文件系统标签：</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># HDD 硬盘</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">wipefs</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --all</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> /dev/sda</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># SSD 硬盘</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> blkdiscard</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> /dev/sda</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">exit</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-4-重新安装或升级系统" tabindex="-1"><a class="header-anchor" href="#_4-4-重新安装或升级系统"><span>4.4.重新安装或升级系统</span></a></h4><p>重新安装或升级系统 问题会得到解决。</p><h3 id="_5-结论" tabindex="-1"><a class="header-anchor" href="#_5-结论"><span>5.结论</span></a></h3><p>其实解决方案并不理想，如链接所说，如果可以再升级或安装过程中弹出有效提示用户进行清除此问题就没那么难以解决。</p>`,41)]))}const p=e(t,[["render",r],["__file","index.html.vue"]]),l=JSON.parse(`{"path":"/blog/zjf0rp91/","title":"TrueNAS SCALE 24.10.1 安装后出现 cannot import boot-pool no such pool available错误","lang":"zh-CN","frontmatter":{"title":"TrueNAS SCALE 24.10.1 安装后出现 cannot import boot-pool no such pool available错误","copyright":"CC-BY-4.0","tags":["truenas"],"createTime":"2025/04/13 01:30:19","permalink":"/blog/zjf0rp91/","description":"内容 1.问题描述 1.1.问题背景 该问题出现在我尝试安装 TrueNAS SCALE 时，特别是在升级或安装过程中的某个阶段，系统未能成功导入 *boot-pool*。尽管安装过程中没有错误提示，但在启动时无法找到启动池，导致无法正常启动操作系统。 1.2.影响范围 无法正确安装truenas。 2.参考资料 2.1.TrueNAS论坛 https...","head":[["meta",{"property":"og:url","content":"https://notonull.github.io/logic-hub/blog/zjf0rp91/"}],["meta",{"property":"og:site_name","content":"aGeng 's Blog"}],["meta",{"property":"og:title","content":"TrueNAS SCALE 24.10.1 安装后出现 cannot import boot-pool no such pool available错误"}],["meta",{"property":"og:description","content":"内容 1.问题描述 1.1.问题背景 该问题出现在我尝试安装 TrueNAS SCALE 时，特别是在升级或安装过程中的某个阶段，系统未能成功导入 *boot-pool*。尽管安装过程中没有错误提示，但在启动时无法找到启动池，导致无法正常启动操作系统。 1.2.影响范围 无法正确安装truenas。 2.参考资料 2.1.TrueNAS论坛 https..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-04-13T10:26:37.000Z"}],["meta",{"property":"article:tag","content":"truenas"}],["meta",{"property":"article:modified_time","content":"2025-04-13T10:26:37.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"TrueNAS SCALE 24.10.1 安装后出现 cannot import boot-pool no such pool available错误\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-04-13T10:26:37.000Z\\",\\"author\\":[]}"]]},"headers":[],"readingTime":{"minutes":2.1,"words":631},"git":{"updatedTime":1744539997000,"contributors":[{"name":"ronggeng.chen","username":"ronggeng.chen","email":"chen.ronggeng.email@gmail.com","commits":1,"avatar":"https://avatars.githubusercontent.com/ronggeng.chen?v=4","url":"https://github.com/ronggeng.chen"}]},"autoDesc":true,"filePathRelative":"问题记录/TrueNAS SCALE 24.10.1 安装后出现 cannot import boot-pool no such pool available错误.md","categoryList":[{"id":"4acd14","sort":10000,"name":"问题记录"}]}`);export{p as comp,l as data};

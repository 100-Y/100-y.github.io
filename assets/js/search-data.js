// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-关于-about",
    title: "关于 / About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-博客-blog",
          title: "博客 / Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-归类-c-a",
          title: "归类 / C-A",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/c-a/";
          },
        },{id: "nav-声明-notice",
          title: "声明 / Notice",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/notice/";
          },
        },{id: "nav-隐私-privacy",
          title: "隐私 / Privacy",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/privacy/";
          },
        },{id: "post-上海密局-the-shanghai-gambit",
        
          title: "上海密局 / The Shanghai Gambit",
        
        description: "一场关于信念与现实冲突的惊悚小说。A political thriller about belief colliding with reality.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025-06-24/the-shanghai-gambit/";
          
        },
      },{id: "post-1925年的中国战略-china-strategy-in-1925",
        
          title: "1925年的中国战略 / China Strategy in 1925",
        
        description: "拥有更强境外支持的你，能否在1925年中国重构统一与现代化？从教育、外交、治理到经济，设想一套超越历史局限的战略。With stronger external support, could you reshape unification and modernization in China in 1925? From education and diplomacy to governance and the economy, this is a strategy that seeks to transcend the historical constraints of the time.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025-06-23/china-strategy-in-1925/";
          
        },
      },{id: "post-html-标签-markdown-语法-在-vs-code-中结合使用的实战指南",
        
          title: "HTML 标签 + Markdown 语法：在 VS Code 中结合使用的实战指南",
        
        description: "通过 VS Code 快捷键与 Emmet 包裹功能，实现 Markdown 文本加粗、高亮、下划线等扩展格式，全面掌握 Markdown 语法 × HTML 标签 的实战技巧。",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025-06-22/html-tags-and-markdown-syntax/";
          
        },
      },{id: "post-批量将图片文件名改为小写",
        
          title: "批量将图片文件名改为小写",
        
        description: "使用 Bash 脚本批量将图片文件名统一转换为小写，解决 GitHub Pages 线上图片因大小写敏感导致无法显示的问题。",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025-06-21/image-file-names-to-lowercase/";
          
        },
      },{id: "post-用-python-脚本自动同步-markdown-文章-front-matter-的图片链接",
        
          title: "用 Python 脚本自动同步 Markdown 文章 Front Matter 的图片链接",
        
        description: "通过 Python 脚本批量更新 博客 Front Matter 中的图片字段，实现文章与图片文件名自动匹配，提升维护效率。",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025-06-20/python-update-frontmatter-link/";
          
        },
      },{id: "post-使用-imagemagick-批量转换-jpg-为-webp-格式-提升网页性能",
        
          title: "使用 ImageMagick 批量转换 JPG 为 WebP 格式，提升网页性能",
        
        description: "介绍如何使用 ImageMagick 在本地批量将 JPG 图片转换为 WebP 格式，有效减小图片体积、提升网页加载速度，并提供适用于 macOS、Linux 的完整脚本与操作指南。",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025-06-20/imagemagick-convert-jpg-to-webp/";
          
        },
      },{id: "post-github-pages-cloudflare-自定义域名-https-配置指南",
        
          title: "GitHub Pages + Cloudflare 自定义域名 HTTPS 配置指南",
        
        description: "使用 GitHub Pages 与 Cloudflare 配置自定义域名与 HTTPS，加速部署个人网站。Configure custom domains and HTTPS with GitHub Pages and Cloudflare to securely deploy personal websites.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025-06-20/https-github-pages-and-cloudflare/";
          
        },
      },{id: "post-markdown-批量更新-front-matter-日期并重命名文件的实用脚本教程",
        
          title: "Markdown 批量更新 Front Matter 日期并重命名文件的实用脚本教程",
        
        description: "利用 Python 与 Shell 脚本，从正文提取日期并自动写入或更新 YAML Front Matter 中的 date 字段，并批量按日期重命名文件名，适用于静态博客内容管理。",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025-06-19/markdown-frontmatter-auto-date/";
          
        },
      },{id: "post-macos-本地从零开始配置-prettier-vs-code",
        
          title: "macOS 本地从零开始配置 Prettier + VS Code",
        
        description: "本文详细介绍如何在 macOS 本地通过 Homebrew 安装 Node.js，并结合 Prettier 与 VS Code，实现对 Markdown、YAML、HTML、JS 等常见格式的自动与批量格式化。",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025-06-18/prettier-nodejs-vscode/";
          
        },
      },{id: "post-jekyll-依赖管理-正确修改-gemfile-并避免构建错误",
        
          title: "Jekyll 依赖管理：正确修改 Gemfile 并避免构建错误",
        
        description: "本文整理了在 Jekyll 项目中正确修改 Gemfile 和 Gemfile.lock 的最佳实践，并附上常见问题与解决方案。",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025-06-17/jekyll-update-gemfile-guide/";
          
        },
      },{id: "post-危机生存法则-crisis-survival-rules",
        
          title: "危机生存法则 / Crisis Survival Rules",
        
        description: "在生命威胁、求助无门或体制失灵的危机中，理性与坚韧才是手中最锋利的剑刃，劈开一条通向生存与正义的幽径。In times of crisis, when life is threatened, help is unavailable, or systems fail, reason and tenacity are the sharpest blades in hands, cutting a hidden path toward survival and justice.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025-06-17/crisis-survival-rules/";
          
        },
      },{id: "post-全流程指南-用-jekyll-al-folio-github-orbstack-打造本地博客系统-macos-专用",
        
          title: "全流程指南：用 Jekyll + al-folio + GitHub + Orbstack 打造本地博客系统（macOS 专用）",
        
        description: "教你如何用 Jekyll + al-folio 打造结构优雅、可自动部署、支持本地预览的博客系统，适用于 macOS 用户，结合 Orbstack、GitHub 与 VS Code 全流程优化。",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025-06-15/build-blog-with-jekyll-orbstack/";
          
        },
      },{id: "post-被托管的世界-猪的乌托邦-the-managed-world-pig-39-s-utopia",
        
          title: "被托管的世界，猪的乌托邦 / The Managed World, Pig&#39;s Utopia",
        
        description: "逃出屠宰场的猪建起乌托邦，却在幸福托管中陷入新围栏。这是结构性的问题。Pigs escaped slaughterhouse to build a utopia—only to find new fences in the name of protection. This is about structure.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025-05-08/pigs-utopia/";
          
        },
      },{id: "post-安全的定义权-信任结构之争",
        
          title: "安全的定义权：信任结构之争",
        
        description: "Citizen揭示安全并非技术产物，而是信任结构中的制度投射与参与权力之争。Citizen reveals that safety is not technological outcome, but projection of institutional trust and right to define danger.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025-05-07/define-safety/";
          
        },
      },{id: "post-新时代的支黑-anti-chinese-of-new-era",
        
          title: "新时代的支黑 / Anti-Chinese of New Era",
        
        description: "新时代的支黑，不是远方敌人，而是身边压迫者，披着忠诚外衣以信仰之名燃烧人民。The new-era anti-Chinese, not far enemies, are near oppressors cloaked in loyalty, burning people in the name of faith.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025-05-06/anti-chinese-of-new-era/";
          
        },
      },{id: "post-domains-for-sale",
        
          title: "Domains for Sale",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025-05-05/domains-for-sale/";
          
        },
      },{id: "post-洒米驱赶邪祟的隔房幺娘",
        
          title: "洒米驱赶邪祟的隔房幺娘",
        
        description: "在面对危机时，洒米驱邪是一种带有安慰性质的传统行为，它揭示了民间信仰在人类情感应对机制中的价值。Scattering rice during crisis is a comforting traditional act, revealing the value of folk beliefs in human emotional coping.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025-05-02/rice-to-ward-off-evil-spirits/";
          
        },
      },{id: "post-换气过度综合征处理指南",
        
          title: "换气过度综合征处理指南",
        
        description: "从心理疏导到急性应对，掌握换气过度综合征的标准处理路径。A clear treatment approach for hyperventilation syndrome—from psychological relief to acute-phase rebreathing techniques.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025-05-01/hyperventilation-syndrome/";
          
        },
      },{id: "post-隐秘突围-在集体愚昧中构建心理独立的认知系统",
        
          title: "隐秘突围：在集体愚昧中构建心理独立的认知系统",
        
        description: "在情绪混乱与集体愚昧的环境中，悄然构建心理独立系统，完成一场温柔而坚定的自我突围。Amid emotional turmoil and collective ignorance, quietly build a mentally independent system for a gentle yet resolute breakout.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025-04-30/hidden-breakout/";
          
        },
      },{id: "post-要做勤快的懒人",
        
          title: "要做勤快的懒人",
        
        description: "懒≠低效，勤快≠聪明。本篇文章带你识别四种行动模型，理解如何选择适合自己的“效率路径”。Laziness doesn’t mean inefficiency, and diligence isn’t always smart. This article helps you identify four action models and choose your personal path to efficiency.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025-04-29/diligent-lazy-man/";
          
        },
      },{id: "post-chatgpt中国用户估算-免费与付费结构",
        
          title: "ChatGPT中国用户估算：免费与付费结构",
        
        description: "2025年4月中国大陆约有1000万活跃用户与100万付费用户，折射VPN与支付结构下的真实使用图景。As of April 2025, around 10 million active and 1 million paid users in China reflect real usage under VPN and payment constraints.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025-04-29/chatgpt-china-users/";
          
        },
      },{id: "post-真正的爱-是在慌乱中稳住船",
        
          title: "真正的爱，是在慌乱中稳住船",
        
        description: "真正的爱，不是陪同献祭，而是在慌乱中按下暂停键，拒绝让恐惧替代判断。True love is not rushing into sacrifice, but pausing in chaos to resist fear-based decisions.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025-04-25/true-love-steady-the-boat/";
          
        },
      },{id: "post-契合度的探讨",
        
          title: "契合度的探讨",
        
        description: "契合不是同频，而是在差异中仍能共振的能力，是一种持续生成的关系。Compatibility is not sameness but the capacity to resonate through difference—a dynamic, ongoing relation.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025-04-21/nature-of-compatibility/";
          
        },
      },{id: "post-无知的协奏曲-化疗如何悄然毁灭一个生命",
        
          title: "无知的协奏曲：化疗如何悄然毁灭一个生命",
        
        description: "无知不是知识缺失，而是系统性合谋；它令化疗在终末期悄然加速崩塌。Ignorance is not lack of knowledge, but systemic collusion; It lets chemotherapy quietly dismantle life at the end.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025-04-19/symphony-of-unknowing/";
          
        },
      },{id: "post-药神中的洛基-吞咽之死的技术暴力",
        
          title: "药神中的洛基：吞咽之死的技术暴力",
        
        description: "当药物剥夺进食能力，生的尊严悄然被抽空——这不是拯救，而是无声的谋杀。When medicine deprives one of the ability to eat, dignity of life is quietly hollowed out—this is not salvation, but a silent murder.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025-04-16/loki-in-medicine-god/";
          
        },
      },{id: "post-喇叭的方向-媒介放大与表达异化的隐喻分析",
        
          title: "喇叭的方向：媒介放大与表达异化的隐喻分析",
        
        description: "文章通过喇叭与隧道的隐喻，揭示表达在媒介放大下的异化过程，反思现代语言如何被技术剥离主观性，沦为机制化的虚响。The article, through the metaphors of the megaphone and tunnel, reveals how expression is alienated under media amplification, reflecting on the loss of subjectivity in modern language as it becomes a mechanized echo.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025-04-11/direction-of-megaphone-the-metaphors-of-media-amplification-and-expression-alienation/";
          
        },
      },{id: "post-代谢的权利-当系统拒绝腐烂-骨灰终将埋葬一切",
        
          title: "代谢的权利：当系统拒绝腐烂，骨灰终将埋葬一切",
        
        description: "一篇以“代谢”为象征的深度社会批评文章，揭示系统拒绝腐烂所引发的慢性崩坏。骨灰终将掩埋的，不只是制度本身，还有我们逃避的改变。A profound societal critique using &quot;metabolism&quot; as metaphor, exposing how the refusal to decay leads to systemic stagnation. The ashes will bury not just the system, but the change we feared to face.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025-04-10/right-to-decay-when-systems-refuse-to-rot-the-ashes-will-bury-all/";
          
        },
      },{id: "post-跨境出入金路径对比-加密货币-fiat24-wise",
        
          title: "跨境出入金路径对比：加密货币 + Fiat24 + Wise",
        
        description: "本文分析了多种跨境资金出入路径的成本与风险，指出通过加密货币、Fiat24 和 Wise 组合的路径在降低费用和提高安全性方面表现最佳。​This article analyzes various cross-border fund transfer routes, highlighting that the combination of cryptocurrency, Fiat24, and Wise offers the lowest costs and highest security.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025-04-10/cross-border-transfer-crypto-fiat24-wise/";
          
        },
      },{id: "post-再见-可以安静一点-一首关于温柔归还与内心和解的诗",
        
          title: "再见，可以安静一点：一首关于温柔归还与内心和解的诗",
        
        description: "一首关于归还与放下的诗，以宁静的语言讲述在黄昏中悄然告别的方式，唤起对内在和平的共鸣。A poem about returning and letting go, told in serene language, evoking a gentle farewell whispered at dusk and resonating with inner peace.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025-04-09/goodbye-let-it-be-quiet-a-poem-of-gentle-return-and-inner-peace/";
          
        },
      },{id: "post-匿名者的渡口-一场关于-存在-与-身份-的诗性摆渡",
        
          title: "匿名者的渡口：一场关于“存在”与“身份”的诗性摆渡",
        
        description: "《匿名者的渡口》是一首探索“存在”与“身份”边界的哲学诗篇，在时间的皱褶中展开一场不被定义的摆渡。&quot;Anonymous’s Ferry&quot; is a philosophical poem exploring the boundaries of identity and existence, navigating a formless journey through the folds of time.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025-04-09/anonymouss-ferry-a-poetic-crossing-on-existence-and-identity/";
          
        },
      },{id: "post-危机中的自我误伤-命如何被悄然抵押",
        
          title: "危机中的自我误伤：命如何被悄然抵押",
        
        description: "反思危机中的自救误区：当防御成为倒钩，命运悄然被抵押，揭示结构性反伤机制。A reflection on how crisis responses turn into barbed defenses, silently pledging life and exposing the paradox of self-harm within self-preservation.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025-04-08/pledged-lives/";
          
        },
      },{id: "post-恒定的夜-数字剧本中的被演绎之人",
        
          title: "恒定的夜：数字剧本中的被演绎之人",
        
        description: "探索《恒定的夜》，一首揭示系统操控与个体命运之间张力的诗歌，在算法时代的静默中，黑夜成为舞台上的主角。Explore The Constant Night, a poem unveiling the tension between system control and human fate, where silence reigns and night becomes the lead actor on a digitized stage.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025-04-07/the-constant-night/";
          
        },
      },{id: "post-反收割自我操作系统-anti-harvest-self-operating-system",
        
          title: "反收割自我操作系统——Anti-harvest Self-operating System",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025-04-07/anti-harvest-self-operating-system/";
          
        },
      },{id: "post-无味之作-你是在生活-还是在执行程序",
        
          title: "无味之作：你是在生活，还是在执行程序？",
        
        description: "很多人如同无魂做菜般地生活，仅为完成任务却失去热情与自我。Many live like they cook without soul—just completing tasks, losing passion and identity along the way.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025-04-06/soulless-cooking-life-metaphor/";
          
        },
      },{id: "post-两极餐桌-polar-tables",
        
          title: "两极餐桌——Polar Tables",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025-04-06/polar-tables/";
          
        },
      },{id: "post-引力之下-全球秩序的无声重构-under-the-pull-of-gravity-the-silent-restructuring-of-global-order",
        
          title: "引力之下——全球秩序的无声重构 / Under the Pull of Gravity - The Silent Restructuring of Global...",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025-04-04/under-the-pull-of-gravity-the-silent-restructuring-of-global-order/";
          
        },
      },{id: "post-思想漫游的边境哨站-the-border-outpost-of-thought-roaming",
        
          title: "思想漫游的边境哨站——The Border Outpost of Thought Roaming",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025-04-04/the-border-outpost-of-thought-roaming/";
          
        },
      },{id: "post-裂缝里的回声-那些未说出口的理想之声",
        
          title: "裂缝里的回声：那些未说出口的理想之声",
        
        description: "裂缝中的低语也能震响历史。在静默中传承理想，这是一段属于众人的无声史诗。Whispers in the cracks can still shake history. This is a silent epic of ideals passed on by the voices of the many.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025-04-04/echoes-in-the-cracks/";
          
        },
      },{id: "post-三层结构-双态网络-家庭网络架构中的角色分工与流量分流策略",
        
          title: "三层结构，双态网络：家庭网络架构中的角色分工与流量分流策略",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025-04-02/three-tier-structure-dual-mode-network/";
          
        },
      },{id: "post-网络就像一栋楼-network-is-like-an-apartment-building",
        
          title: "网络就像一栋楼——Network Is Like an Apartment Building",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025-04-02/network-is-like-an-apartment-building/";
          
        },
      },{id: "post-cudy-路由器完全配置手册-从原厂到-openwrt-the-complete-cudy-router-setup-guide-from-factory-to-openwrt",
        
          title: "Cudy 路由器完全配置手册——从原厂到 OpenWRT / The Complete Cudy Router Setup Guide - From Factory...",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025-04-02/cudy-router-complete-setup-factory-to-openwrt/";
          
        },
      },{id: "post-香蕉和牛奶的狂欢-a-carnival-of-bananas-and-milk",
        
          title: "香蕉和牛奶的狂欢——A Carnival of Bananas and Milk",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025-04-01/a-carnival-of-bananas-and-milk/";
          
        },
      },];

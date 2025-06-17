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
        },{id: "nav-归类-ca",
          title: "归类 / CA",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/ca/";
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
        },{id: "post-被托管的世界-the-managed-world",
        
          title: "被托管的世界 / The Managed World",
        
        description: "逃出屠宰场的猪建起乌托邦，却在幸福托管中陷入新围栏。这是结构性的问题。Pigs escaped slaughterhouse to build a utopia—only to find new fences in the name of protection. This is about structure.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025-05-08/pigs-utopia/";
          
        },
      },{id: "post-安全的定义权-信任结构之争",
        
          title: "安全的定义权：信任结构之争",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
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
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025-05-05/domains-for-sale/";
          
        },
      },{id: "post-洒米驱赶邪祟的隔房幺娘",
        
          title: "洒米驱赶邪祟的隔房幺娘",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025-05-02/rice-to-ward-off-evil-spirits/";
          
        },
      },{id: "post-换气过度综合征处理指南",
        
          title: "换气过度综合征处理指南",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025-05-01/hyperventilation-syndrome/";
          
        },
      },{id: "post-隐秘突围-在集体愚昧中构建心理独立的认知系统",
        
          title: "隐秘突围：在集体愚昧中构建心理独立的认知系统",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025-04-30/hidden-breakout/";
          
        },
      },{id: "post-要做勤快的懒人",
        
          title: "要做勤快的懒人",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025-04-29/diligent-lazy-man/";
          
        },
      },{id: "post-chatgpt中国用户估算-免费与付费结构",
        
          title: "ChatGPT中国用户估算：免费与付费结构",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025-04-29/chatgpt-china-users/";
          
        },
      },{id: "post-真正的爱-是在慌乱中稳住船",
        
          title: "真正的爱，是在慌乱中稳住船",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025-04-25/true-love-steady-the-boat/";
          
        },
      },{id: "post-契合度的探讨",
        
          title: "契合度的探讨",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025-04-21/nature-of-compatibility/";
          
        },
      },{id: "post-无知的协奏曲-化疗如何悄然毁灭一个生命",
        
          title: "无知的协奏曲：化疗如何悄然毁灭一个生命",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025-04-19/symphony-of-unknowing/";
          
        },
      },{id: "post-药神中的洛基-吞咽之死的技术暴力",
        
          title: "药神中的洛基：吞咽之死的技术暴力",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025-04-16/loki-in-medicine-god/";
          
        },
      },{id: "post-喇叭的方向-媒介放大与表达异化的隐喻分析",
        
          title: "喇叭的方向：媒介放大与表达异化的隐喻分析",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025-04-11/direction-of-megaphone-the-metaphors-of-media-amplification-and-expression-alienation/";
          
        },
      },{id: "post-代谢的权利-当系统拒绝腐烂-骨灰终将埋葬一切",
        
          title: "代谢的权利：当系统拒绝腐烂，骨灰终将埋葬一切",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025-04-10/right-to-decay-when-systems-refuse-to-rot-the-ashes-will-bury-all/";
          
        },
      },{id: "post-跨境出入金路径对比-加密货币-fiat24-wise",
        
          title: "跨境出入金路径对比：加密货币 + Fiat24 + Wise",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025-04-10/cross-border-transfer-crypto-fiat24-wise/";
          
        },
      },{id: "post-再见-可以安静一点-一首关于温柔归还与内心和解的诗",
        
          title: "再见，可以安静一点：一首关于温柔归还与内心和解的诗",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025-04-09/goodbye-let-it-be-quiet-a-poem-of-gentle-return-and-inner-peace/";
          
        },
      },{id: "post-匿名者的渡口-一场关于-存在-与-身份-的诗性摆渡",
        
          title: "匿名者的渡口：一场关于“存在”与“身份”的诗性摆渡",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025-04-09/anonymouss-ferry-a-poetic-crossing-on-existence-and-identity/";
          
        },
      },{id: "post-危机中的自我误伤-命如何被悄然抵押",
        
          title: "危机中的自我误伤：命如何被悄然抵押",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025-04-08/pledged-lives/";
          
        },
      },{id: "post-恒定的夜-数字剧本中的被演绎之人",
        
          title: "恒定的夜：数字剧本中的被演绎之人",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025-04-07/the-constant-night/";
          
        },
      },{id: "post-反收割自我操作系统-anti-harvest-self-operating-system",
        
          title: "反收割自我操作系统——Anti-harvest Self-operating System",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025-04-07/anti-harvest-self-operating-system/";
          
        },
      },{id: "post-无味之作-你是在生活-还是在执行程序",
        
          title: "无味之作：你是在生活，还是在执行程序？",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025-04-06/soulless-cooking-life-metaphor/";
          
        },
      },{id: "post-两极餐桌-polar-tables",
        
          title: "两极餐桌——Polar Tables",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025-04-06/polar-tables/";
          
        },
      },{id: "post-引力之下-全球秩序的无声重构-under-the-pull-of-gravity-the-silent-restructuring-of-global-order",
        
          title: "引力之下：全球秩序的无声重构——Under the Pull of Gravity: The Silent Restructuring of Global Order",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025-04-04/under-the-pull-of-gravity-the-silent-restructuring-of-global-order/";
          
        },
      },{id: "post-思想漫游的边境哨站-the-border-outpost-of-thought-roaming",
        
          title: "思想漫游的边境哨站——The Border Outpost of Thought Roaming",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025-04-04/the-border-outpost-of-thought-roaming/";
          
        },
      },{id: "post-裂缝里的回声-那些未说出口的理想之声",
        
          title: "裂缝里的回声：那些未说出口的理想之声",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025-04-04/echoes-in-the-cracks/";
          
        },
      },{id: "post-三层结构-双态网络-家庭网络架构中的角色分工与流量分流策略",
        
          title: "三层结构，双态网络：家庭网络架构中的角色分工与流量分流策略",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025-04-02/three-tier-structure-dual-mode-network/";
          
        },
      },{id: "post-网络就像一栋楼-network-is-like-an-apartment-building",
        
          title: "网络就像一栋楼——Network Is Like an Apartment Building",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025-04-02/network-is-like-an-apartment-building/";
          
        },
      },{id: "post-cudy-路由器完全配置手册-从原厂到-openwrt-the-complete-cudy-router-setup-guide-from-factory-to-openwrt",
        
          title: "Cudy 路由器完全配置手册：从原厂到 OpenWRT——The Complete Cudy Router Setup Guide: From Factory to OpenWRT",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025-04-02/cudy-router-complete-setup-factory-to-openwrt/";
          
        },
      },{id: "post-香蕉和牛奶的狂欢-a-carnival-of-bananas-and-milk",
        
          title: "香蕉和牛奶的狂欢——A Carnival of Bananas and Milk",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025-04-01/a-carnival-of-bananas-and-milk/";
          
        },
      },{id: "post-谁动了奶酪-who-moved-the-cheese",
        
          title: "谁动了奶酪？——Who Moved the Cheese?",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025-03-19/who-moved-the-cheese/";
          
        },
      },{id: "post-将-10-美元转入-fiat24-账户的完整指南",
        
          title: "将 10 美元转入 Fiat24 账户的完整指南",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025-03-14/a-complete-guide-to-depositing-10-dollars-into-your-fiat24-account/";
          
        },
      },{id: "post-思想入骨-肉身觉醒-thought-to-the-bone-the-body-awakens",
        
          title: "思想入骨，肉身觉醒——Thought to the Bone, the Body Awakens",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025-03-12/thought-to-the-bone-the-body-awakens/";
          
        },
      },{id: "post-无知者无罪-the-ignorant-are-not-guilty",
        
          title: "无知者无罪——The Ignorant are not Guilty",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025-03-12/the-ignorant-are-not-guilty/";
          
        },
      },{id: "post-存在的裂缝-the-fracture-of-existence",
        
          title: "存在的裂缝——The Fracture of Existence",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025-03-12/the-fracture-of-existence/";
          
        },
      },{id: "post-燃尽之书-the-burnt-book",
        
          title: "燃尽之书——The Burnt Book",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025-03-12/the-burnt-book/";
          
        },
      },{id: "post-剥皮点灯-flayed-to-light-the-lamp",
        
          title: "剥皮点灯——Flayed to Light the Lamp",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025-03-12/flayed-to-light-the-lamp/";
          
        },
      },{id: "post-一篇-deta-surf-的产品使用介绍",
        
          title: "一篇 deta-surf 的产品使用介绍",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025-03-12/an-introduction-to-the-use-of-deta-surf-product/";
          
        },
      },{id: "post-谁能被点名-谁须要供奉-who-bears-a-name-and-who-bears-the-altar",
        
          title: "谁能被点名，谁须要供奉——Who Bears a Name, and Who Bears the Altar",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025-03-08/who-bears-a-name-and-who-bears-the-altar/";
          
        },
      },{id: "post-体能训练与营养补给-癌症干预的生活式可能",
        
          title: "体能训练与营养补给：癌症干预的生活式可能",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025-03-08/exercise-and-nutrition-a-lifestyle-path-to-cancer-intervention/";
          
        },
      },{id: "post-程序即治理-program-as-governance",
        
          title: "程序即治理——Program as Governance",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025-03-06/program-as-governance/";
          
        },
      },{id: "post-信任的单向流动-制度化服从与觉醒的隐喻",
        
          title: "信任的单向流动：制度化服从与觉醒的隐喻",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025-03-06/one-way-passage/";
          
        },
      },{id: "post-镜墙后的回声-echoes-behind-the-mirror-wall",
        
          title: "镜墙后的回声——Echoes Behind the Mirror Wall",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025-03-06/echoes-behind-the-mirror-wall/";
          
        },
      },{id: "post-ai-内容生成与分发聚合系统",
        
          title: "AI 内容生成与分发聚合系统",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025-03-06/ai-content-generation-and-distribution-system/";
          
        },
      },{id: "post-遗言-ipsri的终幕-final-testament-the-last-curtain-of-ipsri",
        
          title: "遗言：IPSRI的终幕——Final Testament: The Last Curtain of IPSRI",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025-03-05/final-testament-the-last-curtain-of-ipsri/";
          
        },
      },{id: "post-删句的-在编史-the-one-who-deletes-is-writing-history",
        
          title: "删句的，在编史——The One Who Deletes Is Writing History",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025-03-03/the-one-who-deletes-is-writing-history/";
          
        },
      },{id: "post-影子秩序之下-beneath-the-shadow-order",
        
          title: "影子秩序之下——Beneath the Shadow Order",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025-03-03/beneath-the-shadow-order/";
          
        },
      },{id: "post-执行力的真相-the-truth-of-execution",
        
          title: "执行力的真相——The Truth of Execution",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025-02-28/the-truth-of-execution/";
          
        },
      },{id: "post-制度的手指-the-fingers-of-the-system",
        
          title: "制度的手指——The Fingers of the System",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025-02-28/the-fingers-of-the-system/";
          
        },
      },{id: "post-36525-day-个人ip与内容变现行动方案",
        
          title: "36525.day：个人IP与内容变现行动方案",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025-02-28/36525-day-personal-ip-and-content-monetization-action-plan/";
          
        },
      },{id: "post-你将获得你所求的一切-you-shall-have-what-you-seek",
        
          title: "你将获得你所求的一切——You Shall Have What You Seek",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025-02-27/you-shall-have-what-you-seek/";
          
        },
      },{id: "post-乱世生存五法则-如何在风暴中保持自我",
        
          title: "乱世生存五法则：如何在风暴中保持自我",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025-02-27/survival-manual/";
          
        },
      },{id: "post-新域名计划-new-domain-plan",
        
          title: "新域名计划——New Domain Plan",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025-02-26/new-domain-plan/";
          
        },
      },{id: "post-荣耀的重量-the-weight-of-glory",
        
          title: "荣耀的重量——The Weight of Glory",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025-02-25/the-weight-of-glory/";
          
        },
      },{id: "post-在喧哗中看见结构-seeing-structure-in-the-noise",
        
          title: "在喧哗中看见结构——Seeing Structure in the Noise",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025-02-25/seeing-structure-in-the-noise/";
          
        },
      },{id: "post-36525天-yaniék-雅捏克-яниэк-يانيك-百年-新词-跨文化的构造逻辑",
        
          title: "36525天，Yaniék—雅捏克—Яниэк—يانيك：“百年”新词，跨文化的构造逻辑",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025-02-24/cross-cultural-construction-logic-of-a-new-word-yaniek/";
          
        },
      },{id: "post-教育是口锅-education-is-an-old-pot",
        
          title: "教育是口锅——Education is an Old Pot",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025-02-23/education-is-an-old-pot/";
          
        },
      },{id: "post-个人出海-personal-going-overseas",
        
          title: "个人出海——Personal Going Overseas",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025-02-21/personal-going-overseas/";
          
        },
      },{id: "post-流动中的意义暴力-the-fluid-violence-of-meaning",
        
          title: "流动中的意义暴力——The Fluid Violence of Meaning",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025-02-17/the-fluid-violence-of-meaning/";
          
        },
      },{id: "post-符号的囚笼-the-cage-of-symbols",
        
          title: "符号的囚笼——The Cage of Symbols",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025-02-17/the-cage-of-symbols/";
          
        },
      },{id: "post-顺从的建筑学-the-architecture-of-obedience",
        
          title: "顺从的建筑学——The Architecture of Obedience",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025-02-17/the-architecture-of-obedience/";
          
        },
      },{id: "post-科学上网-scientific-internet-surfing",
        
          title: "科学上网——Scientific Internet Surfing",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025-02-10/scientific-internet-surfing/";
          
        },
      },{id: "post-无名之境-the-nameless-realm",
        
          title: "无名之境——The Nameless Realm",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025-02-07/the-nameless-realm/";
          
        },
      },{id: "post-伤口上的盐-salt-on-the-wound",
        
          title: "伤口上的盐——Salt on the Wound",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024-12-30/salt-on-the-wound/";
          
        },
      },{id: "post-光的楔子-wedges-of-light",
        
          title: "光的楔子——Wedges of Light",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024-12-30/holidays-and-time/";
          
        },
      },{id: "post-那个精致利己的毛左-that-left-egoism-maoist",
        
          title: "那个精致利己的毛左——That Left Egoism Maoist",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024-12-03/that-left-egoism-maoist/";
          
        },
      },{id: "post-初心-the-original-aspiration",
        
          title: "初心——The Original Aspiration",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024-12-02/the-original-aspiration/";
          
        },
      },{id: "post-权力擦边的过程-the-edge-walking-of-power",
        
          title: "权力擦边的过程——The Edge-Walking of Power",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024-12-02/the-edge-walking-of-power/";
          
        },
      },{id: "post-不是树-而是森林-not-a-tree-but-a-forest",
        
          title: "不是树，而是森林——Not a Tree, But a Forest",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024-12-02/not-a-tree-but-a-forest/";
          
        },
      },{id: "post-人民之词-the-word-people",
        
          title: "人民之词——The Word People",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024-11-30/the-word-people/";
          
        },
      },{id: "post-挺胸和收腹-chest-out-and-stomach-in",
        
          title: "挺胸和收腹——Chest out and Stomach in",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024-11-30/chest-out-and-stomach-in/";
          
        },
      },{id: "post-不再等待-no-longer-waiting",
        
          title: "不再等待——No Longer Waiting",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024-11-28/no-longer-waiting/";
          
        },
      },{id: "post-历史正确的一边-the-right-side-of-history",
        
          title: "历史正确的一边——The Right Side of History",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024-11-25/the-right-side-of-history/";
          
        },
      },{id: "post-晨间失衡-morning-disorientation",
        
          title: "晨间失衡——Morning Disorientation",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024-11-25/morning-disorientation/";
          
        },
      },{id: "post-速度的泪腺-在光的断层中失明-tear-duct-of-speed-going-blind-in-the-faultline-of-light",
        
          title: "速度的泪腺：在光的断层中失明——Tear Duct of Speed: Going Blind in the Faultline of Light",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024-11-20/tear-duct-of-speed-going-blind-in-the-faultline-of-light/";
          
        },
      },{id: "post-抑郁的个体-the-depressed-individual",
        
          title: "抑郁的个体——The Depressed Individual",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024-11-19/the-depressed-individual/";
          
        },
      },{id: "post-钱与人-money-and-people",
        
          title: "钱与人——Money and People",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024-11-19/money-and-people/";
          
        },
      },{id: "post-亡者-路的尽头-end-road-of-deceased",
        
          title: "亡者，路的尽头——End Road of Deceased",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024-11-19/end-road-of-deceased/";
          
        },
      },{id: "post-死亡的贡献-contribution-of-death",
        
          title: "死亡的贡献——Contribution of Death",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024-11-19/contribution-of-death/";
          
        },
      },{id: "post-喊着人民万岁却把人民万碎的人-those-who-shout-long-live-the-people-but-bring-about-long-live-the-broken-people",
        
          title: "喊着人民万岁却把人民万碎的人——Those who Shout Long Live the People but Bring about Long Live the...",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024-11-17/those-who-shout-long-live-the-people-but-bring-about-long-live-the-broken-people/";
          
        },
      },{id: "post-闭嘴的力量-power-of-shut-up",
        
          title: "闭嘴的力量——Power of Shut Up",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024-11-17/the-power-of-shut-up/";
          
        },
      },{id: "post-报复社会的行为-the-act-of-social-revenge",
        
          title: "报复社会的行为——The Act of Social Revenge",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024-11-17/the-act-of-social-revenge/";
          
        },
      },{id: "post-空想的良药-remedy-for-delusion",
        
          title: "空想的良药——Remedy for Delusion",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024-11-15/remedy-for-delusion/";
          
        },
      },{id: "post-遍地献忠-的文化症候-the-cultural-syndrome-of-universal-xianzhong",
        
          title: "“遍地献忠”的文化症候——The Cultural Syndrome of Universal Xianzhong",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024-11-14/the-cultural-syndrome-of-universal-xianzhong/";
          
        },
      },{id: "post-出门装瓜娃儿-的智慧-wisdom-of-feigning-simplicity",
        
          title: "“出门装瓜娃儿”的智慧——Wisdom of Feigning Simplicity",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024-11-13/wisdom-of-feigning-simplicity/";
          
        },
      },{id: "post-理解的界限-the-limit-of-understandings",
        
          title: "理解的界限——The Limit of Understandings",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024-11-13/the-limit-of-understandings/";
          
        },
      },{id: "post-直觉-从感知到灵感的艺术-intuition-the-art-of-transforming-perception-into-inspiration",
        
          title: "直觉：从感知到灵感的艺术——Intuition: The Art of Transforming Perception into Inspiration",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024-11-13/intuition-the-art-of-transforming-perception-into-inspiration/";
          
        },
      },{id: "post-家丑-family-scandal",
        
          title: "家丑——Family Scandal",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024-11-13/family-scandal/";
          
        },
      },{id: "post-不可预知的旅途-the-unpredictable-journey",
        
          title: "不可预知的旅途——The Unpredictable Journey",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024-11-12/the-unpredictable-journey/";
          
        },
      },{id: "post-疯狂的导火索-the-fuse-of-madness",
        
          title: "疯狂的导火索——The Fuse of Madness",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024-11-12/the-fuse-of-madness/";
          
        },
      },{id: "post-末句-the-final-sentence",
        
          title: "末句——The Final Sentence",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024-11-12/the-final-sentence/";
          
        },
      },{id: "post-遗失的回声-the-echo-of-the-lost",
        
          title: "遗失的回声——The Echo of the Lost",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024-11-12/the-echo-of-the-lost/";
          
        },
      },{id: "post-绿洲-oasis",
        
          title: "绿洲——Oasis",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024-11-12/oasis/";
          
        },
      },{id: "post-李子柒的作品-li-ziqi-amp-8217-s-work",
        
          title: "李子柒的作品——Li Ziqi&amp;#8217;s Work",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024-11-12/li-ziqis-work/";
          
        },
      },{id: "post-一场混沌的舞台剧-a-chaotic-stage-play",
        
          title: "一场混沌的舞台剧——A Chaotic Stage Play",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024-11-12/a-chaotic-stage-play/";
          
        },
      },{id: "post-随机群发事件的解读及其社会隐喻-the-interpretation-of-random-mass-incidents-and-their-social-implications",
        
          title: "随机群发事件的解读及其社会隐喻——The Interpretation of Random Mass Incidents and Their Social Implications",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024-11-11/the-interpretation-of-random-mass-incidents-and-their-social-implications/";
          
        },
      },{id: "post-无形之物-the-intangible-entity",
        
          title: "无形之物——The Intangible Entity",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024-11-11/the-intangible-entity/";
          
        },
      },{id: "post-一篇-狗撵科学-的短文-a-short-piece-on-dogs-chasing-science",
        
          title: "一篇“狗撵科学”的短文——A Short Piece on Dogs Chasing Science",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024-11-11/a-short-piece-on-dogs-chasing-science/";
          
        },
      },{id: "post-如果说鲁迅是-支黑-那么胡适又是-什么-if-lu-xun-is-the-black-of-chinese-then-what-is-hu-shi",
        
          title: "如果说鲁迅是“支黑”，那么胡适又是“什么”？——If Lu Xun is the Black of Chinese, Then What is Hu Shi?...",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024-11-10/if-lu-xun-is-the-black-of-chinese-then-what-is-hu-shi/";
          
        },
      },{id: "post-自行车-a-bicycle",
        
          title: "自行车——A Bicycle",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024-11-09/a-bicycle/";
          
        },
      },{id: "post-文盲不识字-发文凭就好了-the-illiterate-may-not-read-but-a-diploma-will-be-fine",
        
          title: "文盲不识字，发文凭就好了——The Illiterate May Not Read, But a Diploma Will Be Fine",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024-11-08/the-illiterate-may-not-read-but-a-diploma-will-be-fine/";
          
        },
      },{id: "post-现实中的呢喃-murmurs-in-reality",
        
          title: "现实中的呢喃——Murmurs in Reality",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024-11-08/murmurs-in-reality/";
          
        },
      },{id: "post-如何自定义chatgpt-how-to-customize-chatgpt",
        
          title: "如何自定义ChatGPT——How to Customize Chatgpt",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024-11-08/how-to-customize-chatgpt/";
          
        },
      },{id: "post-遥远的温柔-distant-gentleness",
        
          title: "遥远的温柔——Distant Gentleness",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024-11-08/distant-gentleness/";
          
        },
      },{id: "post-如何隐喻地进行创作-how-to-create-metaphorically",
        
          title: "如何隐喻地进行创作？——How to Create Metaphorically?",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024-11-02/how-to-create-metaphorically/";
          
        },
      },{id: "post-遥远的土地-a-distant-land",
        
          title: "遥远的土地——A Distant Land",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024-11-02/a-distant-land/";
          
        },
      },{id: "post-善意象征的王座-throne-of-benevolent-symbols",
        
          title: "善意象征的王座——Throne of Benevolent Symbols",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024-11-01/throne-of-benevolent-symbols/";
          
        },
      },{id: "post-缔造者与卖国贼-founder-and-traitor",
        
          title: "缔造者与卖国贼——Founder and Traitor",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024-11-01/founder-and-traitor/";
          
        },
      },{id: "post-朝阳-the-morning-sun",
        
          title: "朝阳——The Morning Sun",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024-10-31/the-morning-sun/";
          
        },
      },{id: "post-游戏-终焉的百合花-有感-game-ender-lilies",
        
          title: "游戏《终焉的百合花》有感——Game: Ender Lilies",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024-10-30/game-ender-lilies/";
          
        },
      },{id: "post-道德绑架之恶与平衡-evil-and-balance-of-moral-coercion",
        
          title: "道德绑架之恶与平衡——Evil and Balance of Moral Coercion",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024-10-29/evil-and-balance-of-moral-coercion/";
          
        },
      },{id: "post-真相与视角-truth-and-perspective",
        
          title: "真相与视角——Truth and Perspective",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024-10-25/truth-and-perspective/";
          
        },
      },{id: "post-温室中的生命-life-in-greenhouse",
        
          title: "温室中的生命——Life in Greenhouse",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024-09-29/life-in-greenhouse/";
          
        },
      },{id: "post-岁月时光-time-and-year",
        
          title: "岁月时光——Time and Year",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024-09-19/time-and-year/";
          
        },
      },{id: "post-梦中梦-鬼魅娃娃-dream-in-a-dream-ghost-doll",
        
          title: "梦中梦：鬼魅娃娃——Dream in a Dream: Ghost Doll",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024-08-26/dream-in-a-dream-ghost-doll/";
          
        },
      },{id: "post-统一指示下的虚假自由-false-freedom-under-unified-command",
        
          title: "统一指示下的虚假自由——False Freedom Under Unified Command",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024-08-11/false-freedom-under-unified-command/";
          
        },
      },{id: "post-从虚假的善到切实的恶-from-false-goodness-to-real-evil",
        
          title: "从虚假的善到切实的恶——From False Goodness to Real Evil",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024-08-08/from-false-goodness-to-real-evil/";
          
        },
      },{id: "post-左右-赞美和批评-从-尾巴-谈论到-精神病-left-and-right-praise-and-criticism-from-tail-to-mental-illness",
        
          title: "“左右”赞美和批评：从“尾巴”谈论到“精神病”——Left and Right, Praise and Criticism: From Tail to Mental Illness",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024-08-07/left-and-right-praise-and-criticism-from-tail-to-mental-illness/";
          
        },
      },{id: "post-有得选-之从具体的人谈论到抽象的历史-having-a-choice-from-specific-individuals-to-abstract-history",
        
          title: "有得选：之从具体的人谈论到抽象的历史——Having a Choice: From Specific Individuals to Abstract History",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024-08-06/having-a-choice-from-specific-individuals-to-abstract-history/";
          
        },
      },{id: "post-年富-力强-rich-mind-strong-body",
        
          title: "年富、力强——Rich Mind, Strong Body",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024-08-04/rich-mind-strong-body/";
          
        },
      },{id: "post-增肌减脂终极指南-系统饮食-训练计划",
        
          title: "增肌减脂终极指南：系统饮食+训练计划",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023-09-17/muscle-building-and-fat-loss-handbook/";
          
        },
      },{id: "post-节日快乐-happy-holidays",
        
          title: "节日快乐——Happy Holidays",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023-01-22/happy-holidays/";
          
        },
      },{id: "post-花儿-flower",
        
          title: "花儿——Flower",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022-10-09/flower/";
          
        },
      },{id: "post-天空和鱼儿-the-sky-and-the-fish",
        
          title: "天空和鱼儿——The sky and The Fish",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022-09-30/the-sky-and-the-fish/";
          
        },
      },{id: "post-怛的战后庆典-da-amp-8217-s-postwar-celebration-3",
        
          title: "怛的战后庆典——Da&amp;#8217;s Postwar Celebration (3-)",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022-09-10/das-postwar-celebration/";
          
        },
      },{id: "post-怛的战前动员-da-amp-8217-s-prewar-mobilization-3",
        
          title: "怛的战前动员——Da&amp;#8217;s Prewar Mobilization (3-)",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022-09-09/das-prewar-mobilization/";
          
        },
      },{id: "post-怛的袭来-da-amp-8217-s-attacking-3",
        
          title: "怛的袭来——Da&amp;#8217;s Attacking (3-)",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022-09-09/das-attacking/";
          
        },
      },{id: "post-疯城-mad-city-4",
        
          title: "疯城——Mad City (4-)",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022-07-29/mad-city/";
          
        },
      },{id: "post-胞弟-brothers-3",
        
          title: "胞弟——Brothers (3-)",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022-07-29/brothers/";
          
        },
      },{id: "post-真爱-true-love",
        
          title: "真爱——True Love",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022-06-29/true-love/";
          
        },
      },{id: "post-美好地方-the-beautiful-place",
        
          title: "美好地方——The Beautiful Place",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022-06-28/the-beautiful-place/";
          
        },
      },{id: "post-双重标准-double-standards",
        
          title: "双重标准——Double Standards",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022-06-23/double-standards/";
          
        },
      },{id: "post-造车-build-cars",
        
          title: "造车——Build Cars",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022-06-21/build-cars/";
          
        },
      },{id: "post-官利-officials-for-profit",
        
          title: "官利——Officials for Profit",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022-06-14/officials-for-profit/";
          
        },
      },{id: "post-枪与刀-gun-and-knife",
        
          title: "枪与刀——Gun and Knife",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022-06-14/gun-and-knife/";
          
        },
      },{id: "post-勇敢的人民-brave-people",
        
          title: "勇敢的人民——Brave People",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022-06-14/brave-people/";
          
        },
      },{id: "post-打赌-bet",
        
          title: "打赌——Bet",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022-06-14/bet/";
          
        },
      },{id: "post-群体社会-内耗与悲剧-group-society-consumption-and-tragedy",
        
          title: "群体社会：内耗与悲剧——Group Society: Consumption and Tragedy",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022-06-11/group-society-consumption-and-tragedy/";
          
        },
      },{id: "post-宝-baby",
        
          title: "宝——Baby",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022-06-08/baby/";
          
        },
      },{id: "post-英雄-奴隶-hero-and-slave",
        
          title: "英雄、奴隶——Hero and Slave",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022-06-06/hero-and-slave/";
          
        },
      },{id: "post-杀人犯-警察-the-murderer-the-police",
        
          title: "杀人犯、警察——The Murderer, The Police",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022-06-01/the-murderer-the-cop/";
          
        },
      },{id: "post-谈爱国-on-patriotism",
        
          title: "谈爱国——On Patriotism",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022-05-31/on-patriotism/";
          
        },
      },{id: "post-无限悲哀-infinite-sorrow",
        
          title: "无限悲哀——Infinite Sorrow",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022-05-28/infinite-sorrow/";
          
        },
      },{id: "post-相通的梦-similar-dreams",
        
          title: "相通的梦——Similar Dreams",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022-05-24/similar-dreams/";
          
        },
      },{id: "post-呜呜喳喳-whining-and-babbling",
        
          title: "呜呜喳喳——Whining and Babbling",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022-05-18/whining-and-babbling/";
          
        },
      },{id: "post-编织彩虹的人-the-man-weaving-rainbows",
        
          title: "编织彩虹的人——The man Weaving Rainbows",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022-05-18/the-man-weaving-rainbows/";
          
        },
      },{id: "post-单身的好处-benefits-of-being-single",
        
          title: "单身的好处——Benefits of Being Single",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022-05-12/benefits-of-being-single/";
          
        },
      },{id: "post-定数-destiny",
        
          title: "定数——Destiny",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022-05-11/destiny/";
          
        },
      },{id: "post-文爱-word-love",
        
          title: "文爱——Word Love",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022-05-06/word-love/";
          
        },
      },{id: "post-树洞谬论-tree-hole-fallacy",
        
          title: "树洞谬论——Tree Hole Fallacy",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022-05-05/tree-hole-cheating-fallacy/";
          
        },
      },{id: "post-帝王的屎-the-emperor-s-shit",
        
          title: "帝王的屎——The Emperor’s Shit",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022-05-04/the-emperors-shit/";
          
        },
      },{id: "post-古代朝鲜-ancient-korea",
        
          title: "古代朝鲜｜Ancient Korea",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022-05-04/ancient-korea/";
          
        },
      },{id: "post-少年秘密警察-the-secret-teenage-police",
        
          title: "少年秘密警察——The Secret Teenage Police",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022-05-03/the-secret-teenage-police/";
          
        },
      },{id: "post-高潮-orgasm",
        
          title: "高潮——Orgasm",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022-05-03/orgasm/";
          
        },
      },{id: "post-沁润-moistening",
        
          title: "沁润——Moistening",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022-05-03/moistening/";
          
        },
      },{id: "post-打拳的本质-essence-of-boxing",
        
          title: "打拳的本质——Essence of Boxing",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022-05-01/essence-of-boxing/";
          
        },
      },{id: "post-教育的奴隶-slave-of-education",
        
          title: "教育的奴隶——Slave of Education",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022-04-27/slave-of-education/";
          
        },
      },{id: "post-摇摆的戏子-wavering-actors",
        
          title: "摇摆的戏子——Wavering Actors",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022-04-26/wavering-actors/";
          
        },
      },{id: "post-种子与播种者-seeds-and-sowers",
        
          title: "种子与播种者——Seeds and Sowers",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022-04-26/seeds-and-sowers/";
          
        },
      },{id: "post-剥削后袋-exploiting-later-bags",
        
          title: "剥削后袋——Exploiting Later Bags",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022-04-18/exploiting-later-bags/";
          
        },
      },{id: "post-意识和罪-consciousness-and-guilty",
        
          title: "意识和罪——Consciousness and Guilty",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022-04-17/consciousness-and-guilty/";
          
        },
      },{id: "post-权力的交接-handover-of-power",
        
          title: "权力的交接——Handover of Power",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022-04-15/handover-of-power/";
          
        },
      },{id: "post-命运的窗口-the-window-of-fate",
        
          title: "命运的窗口——The Window of Fate",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022-04-14/the-window-of-fate/";
          
        },
      },{id: "post-为谁而唱-who-to-sing-for",
        
          title: "为谁而唱——Who to Sing for",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022-04-13/e4b8bae8b081e8808ce594b1-who-to-sing-for/";
          
        },
      },{id: "post-香港-海参崴-伯力-xiāng-gǎng-hǎi-shēn-wǎi-and-bó-lì",
        
          title: "香港，海参崴、伯力——Xiāng Gǎng，Hǎi Shēn Wǎi and Bó Lì",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022-04-05/xiang-ganghai-shen-wai-and-bo-li/";
          
        },
      },{id: "post-无耻的人-shameless-people",
        
          title: "无耻的人——Shameless People",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022-03-24/shameless-people/";
          
        },
      },{id: "post-企业-领导-狗-enterprises-leaders-and-dogs",
        
          title: "企业、领导、狗——Enterprises, Leaders and Dogs",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022-03-24/enterprises-leaders-and-dogs/";
          
        },
      },{id: "post-万金油-panacea",
        
          title: "万金油——Panacea",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022-03-12/panacea/";
          
        },
      },{id: "post-平凡的人-ordinary-human-being",
        
          title: "平凡的人——Ordinary Human Being",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022-03-09/ordinary-human-being/";
          
        },
      },{id: "post-飞的是命-flew-away-is-fate",
        
          title: "飞的是命——Flew away is Fate",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022-03-09/e9a39ee79a84e698afe591bd-flew-away-is-fate/";
          
        },
      },{id: "post-三个什么-three-it-is",
        
          title: "三个什么——Three It is",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022-03-08/three-it-is/";
          
        },
      },{id: "post-台湾必然回归的两点说明-two-points-about-taiwan-s-inevitable-return",
        
          title: "台湾必然回归的两点说明——Two Points about Taiwan’s Inevitable Return",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022-02-27/two-points-about-taiwans-inevitable-return/";
          
        },
      },{id: "post-战后宣言-postwar-anifesto",
        
          title: "战后宣言——Postwar Anifesto",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022-02-26/postwar-anifesto/";
          
        },
      },{id: "post-0-00000001的机会-chance-0-00000001",
        
          title: "0.00000001的机会——Chance 0.00000001",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022-02-26/chance-0-00000001/";
          
        },
      },{id: "post-俄乌战争-russia-ukraine-war",
        
          title: "俄乌战争｜Russia Ukraine War",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022-02-25/russia-ukraine-war/";
          
        },
      },{id: "post-美国-中国-俄罗斯-usa-china-and-russia",
        
          title: "美国、中国、俄罗斯——USA, China and Russia",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022-02-24/usa-china-and-russia/";
          
        },
      },{id: "post-选择比努力重要-choice-is-more-important-than-effort",
        
          title: "选择比努力重要——Choice is more Important than Effort",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022-02-24/choice-is-more-important-than-effort/";
          
        },
      },{id: "post-对话-嘴炮与官员和资本家-dialogue-mouth-cannon-with-officials-and-capitalists",
        
          title: "对话：嘴炮与官员和资本家——Dialogue: Mouth Cannon with Officials and Capitalists",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022-02-23/dialogue-mouth-cannon-with-officials-and-capitalists/";
          
        },
      },{id: "post-历史和规则-history-and-rules",
        
          title: "历史和规则——History and Rules",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022-02-22/history-and-rules/";
          
        },
      },{id: "post-3万字小说-a-30-000-words-novel",
        
          title: "3万字小说——A 30,000 Words Novel",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022-02-19/a-30000-words-novel/";
          
        },
      },{id: "post-如何维持长久的幸福-快乐-安康-how-to-maintain-long-term-happiness-joy-and-well-being",
        
          title: "如何维持长久的幸福、快乐，安康——How to Maintain Long-term Happiness, Joy, and Well-being",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022-02-15/how-to-maintain-long-term-happiness-joy-and-well-being/";
          
        },
      },{id: "post-文字的力量-power-of-words",
        
          title: "文字的力量——Power of Words",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022-02-11/power-of-words/";
          
        },
      },{id: "post-吃头发的人-the-man-eats-hair",
        
          title: "吃头发的人——The Man Eats Hair",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022-02-09/the-man-eats-hair/";
          
        },
      },{id: "post-骂人的道理-逻辑-logic-of-scolding",
        
          title: "骂人的道理（逻辑）——Logic of Scolding",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022-02-03/logic-of-scolding/";
          
        },
      },{id: "post-国家是什么-what-is-a-country",
        
          title: "国家是什么——What is a Country",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022-02-02/what-is-a-country/";
          
        },
      },{id: "post-过年的灵魂-soul-of-the-new-year",
        
          title: "过年的灵魂——Soul of the New Year",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022-01-31/soul-of-the-new-year/";
          
        },
      },{id: "post-我的黄金时间-my-gloden-time",
        
          title: "我的黄金时间——My Gloden Time",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022-01-31/my-gloden-time/";
          
        },
      },{id: "post-我希望我是你-i-hope-i-am-you",
        
          title: "我希望我是你——I Hope I am You",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022-01-31/i-hope-i-am-you/";
          
        },
      },{id: "post-这个世界-this-world",
        
          title: "这个世界——This World",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022-01-23/this-world/";
          
        },
      },{id: "post-我的爸爸-my-father",
        
          title: "我的爸爸——My Father",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022-01-23/my-father/";
          
        },
      },{id: "post-恶的相对论-relativity-of-evil",
        
          title: "恶的相对论——Relativity of Evil",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022-01-20/relativity-of-evil/";
          
        },
      },{id: "post-一个惊天地泣鬼神的梦-a-dream-shocking-sky-and-earth-weeping-ghosts-and-gods",
        
          title: "一个惊天地泣鬼神的梦——A Dream Shocking Sky and Earth, Weeping Ghosts and Gods",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022-01-19/a-dream-shocking-sky-and-earth-weeping-ghosts-and-gods/";
          
        },
      },{id: "post-杀死该演员-kill-the-actor",
        
          title: "杀死该演员——Kill the Actor",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022-01-14/kill-the-actor/";
          
        },
      },{id: "post-谈民主-on-democracy",
        
          title: "谈民主——On Democracy",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021-12-07/on-democracy/";
          
        },
      },{id: "post-标准-standard",
        
          title: "标准——Standard",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021-12-01/standard/";
          
        },
      },{id: "post-校园霸凌-school-bullying",
        
          title: "校园霸凌——School Bullying",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021-12-01/school-bullying/";
          
        },
      },{id: "post-救命稻草-life-saving-straw",
        
          title: "救命稻草——Life Saving Straw",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021-12-01/life-saving-straw/";
          
        },
      },{id: "post-成长-growth",
        
          title: "成长——Growth",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021-11-30/growth/";
          
        },
      },{id: "post-半篇作文-half-composition",
        
          title: "半篇作文——Half Composition",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021-11-28/e58d8ae7af87e4bd9ce69687-half-composition/";
          
        },
      },{id: "post-若这就是我的遗言-if-this-is-my-last-words",
        
          title: "若这就是我的遗言——If This is My Last Words",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021-11-24/if-this-is-my-last-words/";
          
        },
      },{id: "post-流氓-富人-rogues-and-rich-men",
        
          title: "流氓、富人——Rogues and Rich Men",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021-11-22/e6b581e6b093e38081e5af8ce4baba-rogues-and-rich-men/";
          
        },
      },{id: "post-意义的有无-the-yes-and-no-of-meaning",
        
          title: "意义的有无——The Yes and No of Meaning",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021-11-19/the-yes-and-no-of-meaning/";
          
        },
      },{id: "post-假-死的意义-hypothesis-meaning-of-death",
        
          title: "假：死的意义——Hypothesis: Meaning of Death",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021-11-19/hypothesis-meaning-of-death/";
          
        },
      },{id: "post-我的灵魂-my-soul",
        
          title: "我的灵魂——My Soul",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021-11-15/my-soul/";
          
        },
      },{id: "post-在岸上-on-the-shore",
        
          title: "在岸上——On the Shore",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021-11-08/on-the-shore/";
          
        },
      },{id: "post-每一天的生活-everyday-s-life",
        
          title: "每一天的生活——Everyday’s Life",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021-11-04/everydays-life/";
          
        },
      },{id: "post-游戏的意义-meaning-of-game",
        
          title: "游戏的意义——Meaning of Game",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021-10-28/meaning-of-game/";
          
        },
      },{id: "post-今夜的拯救-tonight-s-rescue",
        
          title: "今夜的拯救——Tonight’s Rescue",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021-10-15/tonights-rescue/";
          
        },
      },{id: "post-个人的悲欢-personal-joys-and-sorrows",
        
          title: "个人的悲欢——Personal Joys and Sorrows",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021-10-14/personal-joys-and-sorrows/";
          
        },
      },{id: "post-最大的公平与正义-the-greatest-fairness-and-justice",
        
          title: "最大的公平与正义——The Greatest Fairness and Justice",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021-10-13/the-greatest-fairness-and-justice/";
          
        },
      },{id: "post-讲道德的人-moral-people",
        
          title: "讲道德的人——Moral People",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021-10-12/moral-people/";
          
        },
      },{id: "post-鱿鱼游戏-不同的观点-squid-games-different-view",
        
          title: "鱿鱼游戏，不同的观点——Squid Games, Different View",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021-09-29/squid-games-different-views/";
          
        },
      },{id: "post-山那边的白云-white-clouds-on-other-side-of-mountain",
        
          title: "山那边的白云——White Clouds on other Side of Mountain",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021-09-26/white-clouds-on-other-side-of-mountain/";
          
        },
      },{id: "post-雨水和土壤-rain-and-soil",
        
          title: "雨水和土壤——Rain and Soil",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021-09-18/rain-and-soil/";
          
        },
      },{id: "post-反对的声音-voice-of-opposition",
        
          title: "反对的声音｜Voice of Opposition",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021-09-15/voice-of-opposition/";
          
        },
      },{id: "post-共同富裕的本质-essence-of-common-prosperity",
        
          title: "共同富裕的本质——Essence of Common Prosperity",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021-09-15/essence-of-common-prosperity/";
          
        },
      },{id: "post-修行人的生-死-life-and-death-of-people-who-believe-in-buddhism",
        
          title: "修行人的生、死——Life and Death of People who Believe in Buddhism",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021-09-08/life-and-death-of-people-who-believe-in-buddhism/";
          
        },
      },{id: "post-自我安慰的话语-self-comforting-words",
        
          title: "自我安慰的话语——Self Comforting Words",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021-09-05/self-comforting-words/";
          
        },
      },{id: "post-人性悖论-直曲之间的辩证-paradox-of-human-nature-the-dialectic-between-straight-and-twisted",
        
          title: "人性悖论：直曲之间的辩证——Paradox of Human Nature: The Dialectic Between Straight and Twisted",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021-09-05/paradox-of-human-nature-the-dialectic-between-straight-and-twisted/";
          
        },
      },{id: "post-论我的存在-on-exist-of-i",
        
          title: "论我的存在——On Exist of I",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021-09-05/on-exist-of-i/";
          
        },
      },{id: "post-共生关系-symbiosis",
        
          title: "共生关系——Symbiosis",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021-08-29/symbiosis/";
          
        },
      },{id: "post-三角关系-triangular-relationship",
        
          title: "三角关系——Triangular Relationship",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021-08-15/triangular-relationship/";
          
        },
      },{id: "post-权力的喉舌-爱国大v-mouthpiece-of-power-patriots-big-v",
        
          title: "权力的喉舌：爱国大V——Mouthpiece of Power: Patriots Big V",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021-07-17/mouthpiece-of-power-patriots-big-v/";
          
        },
      },{id: "post-实话和反语-truth-and-irony",
        
          title: "实话和反语——Truth and Irony",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021-07-14/truth-and-irony/";
          
        },
      },{id: "post-文人最基本的道德-most-basic-morality-of-the-literati",
        
          title: "文人最基本的道德——Most Basic Morality of the Literati",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021-06-30/most-basic-morality-of-the-literati/";
          
        },
      },{id: "post-理想国-utopia",
        
          title: "理想国……——Utopia…",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021-06-15/utopia/";
          
        },
      },{id: "post-之一我的罪恶-one-of-my-sins",
        
          title: "之一我的罪恶——One of My Sins",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021-06-14/one-of-my-sins/";
          
        },
      },{id: "post-藩篱-栅栏和鲜花-fences-and-flowers",
        
          title: "藩篱、栅栏和鲜花——Fences and Flowers",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021-05-31/fences-and-flowers/";
          
        },
      },{id: "post-暗网-dark-web",
        
          title: "暗网｜dark-web",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021-05-23/dark-web/";
          
        },
      },{id: "post-生老病死-birth-and-aging-illness-and-death",
        
          title: "生老病死｜Birth and Aging, Illness and Death",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021-05-22/birth-and-aging-illness-and-death/";
          
        },
      },{id: "post-免费观看中国境内-会员-付费-视频的方法",
        
          title: "免费观看中国境内（会员+付费）视频的方法",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021-05-13/free-watching-videos-in-china-for-membership-and-paid/";
          
        },
      },{id: "post-观点与表达-views-and-expressions",
        
          title: "观点与表达｜Views and Expressions",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021-05-11/views-and-expressions/";
          
        },
      },{id: "post-一些一些一些-some-some-some",
        
          title: "一些一些一些｜Some Some Some",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021-05-11/some-some-some/";
          
        },
      },{id: "post-人性以偏概全的定义-partial-definition-of-human-nature",
        
          title: "人性以偏概全的定义｜Partial Definition of Human Nature",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021-02-19/partial-definition-of-human-nature/";
          
        },
      },{id: "post-同性恋是不是病-is-homosexuality-a-disease",
        
          title: "同性恋是不是病｜Is Homosexuality a Disease",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021-01-31/is-homosexuality-a-disease/";
          
        },
      },{id: "post-生命的终极-ultimate-of-life",
        
          title: "生命的终极——Ultimate of Life",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020-11-04/ultimate-of-life/";
          
        },
      },{id: "post-台前幕后的婚礼-the-wedding-front-stage-behind-scenes",
        
          title: "台前幕后的婚礼——The Wedding Front Stage Behind Scenes",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020-10-01/the-wedding-front-stage-behind-scenes/";
          
        },
      },{id: "post-流星的死亡-death-of-meteor",
        
          title: "流星的死亡——Death of Meteor",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020-09-16/death-of-meteor/";
          
        },
      },{id: "post-死亡的一些理解-some-understandings-of-death",
        
          title: "死亡的一些理解——Some Understandings of Death",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020-09-07/some-understandings-of-death/";
          
        },
      },{id: "post-中国不会亡-china-will-not-perish",
        
          title: "中国不会亡——China will not Perish",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020-09-06/china-will-not-perish/";
          
        },
      },{id: "post-未即当下-future-is-now",
        
          title: "未即当下——Future is Now",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020-06-17/future-is-now/";
          
        },
      },{id: "post-浪漫星空-romantic-starry-sky",
        
          title: "浪漫星空——Romantic Starry Sky",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020-06-04/romantic-starry-sky/";
          
        },
      },{id: "post-前进的苦楚-pains-of-moving-forward",
        
          title: "前进的苦楚——Pains of Moving Forward",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020-03-23/pains-of-moving-forward/";
          
        },
      },{id: "post-新造人-ncp",
        
          title: "新造人——NCP",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020-02-07/ncp/";
          
        },
      },{id: "post-史记世系表",
        
          title: "史记世系表",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2019-12-08/shiji/";
          
        },
      },{id: "post-退守迷蒙森林-retreat-to-misty-forest-3-99",
        
          title: "退守迷蒙森林——Retreat to Misty Forest (3-99)",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2019-09-22/retreat-to-misty-forest/";
          
        },
      },{id: "post-城墙与人心-wall-and-human-heart-3",
        
          title: "城墙与人心——Wall and Human Heart (3-)",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2019-06-27/wall-and-human-heart/";
          
        },
      },{id: "post-爱是什么-what-is-a-love",
        
          title: "爱是什么——What is a Love",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2019-03-30/what-is-a-love/";
          
        },
      },{id: "post-希雅-海神的女儿-sea-daughter-of-ocean-4",
        
          title: "希雅，海神的女儿——Sea, Daughter of Ocean (4-)",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2019-01-27/sea-daughter-of-ocean/";
          
        },
      },{id: "post-寻找海盗-looking-for-the-pirates-4",
        
          title: "寻找海盗——Looking for the Pirates (4-)",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2019-01-01/looking-for-the-pirates/";
          
        },
      },{id: "post-每个人的负重-everyone-s-burden",
        
          title: "每个人的负重——Everyone’s Burden",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018-12-11/everyones-burden/";
          
        },
      },{id: "post-爱人与护己-love-others-and-protect-oneself",
        
          title: "爱人与护己——Love Others and Protect Oneself",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018-12-10/love-others-and-protect-oneself/";
          
        },
      },{id: "post-要过的日子-days-to-live",
        
          title: "要过的日子——Days to Live",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018-11-05/days-to-live/";
          
        },
      },{id: "post-黑暗中的星-stars-in-darkness",
        
          title: "黑暗中的星——Stars in Darkness",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018-10-04/stars-in-darkness/";
          
        },
      },{id: "post-最终结局-the-final-end",
        
          title: "最终结局——The Final End",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018-08-21/the-final-end/";
          
        },
      },{id: "post-地图的一些讲解-explanations-of-the-map",
        
          title: "地图的一些讲解——Explanations of the Map",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018-08-13/explanations-of-the-map/";
          
        },
      },{id: "post-线装书的制法-method-of-making-thread-bound-books",
        
          title: "线装书的制法——Method of Making Thread Bound Books",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018-08-02/method-of-making-thread-bound-books/";
          
        },
      },{id: "post-关于爱情-about-love",
        
          title: "关于爱情——About Love",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018-07-13/about-love/";
          
        },
      },{id: "post-于你无内的诗-poem-without-u",
        
          title: "于你无内的诗——Poem Without U",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018-07-04/poem-without-u/";
          
        },
      },{id: "post-下跪与爱情-kneel-and-love",
        
          title: "下跪与爱情——Kneel and Love",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018-05-18/kneel-and-love/";
          
        },
      },{id: "post-她的无知-我的愚昧-her-ignorance-and-mine",
        
          title: "她的无知，我的愚昧——Her Ignorance and mine",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018-04-17/her-ignorance-and-mine/";
          
        },
      },{id: "post-迷茫道路-confusion-road",
        
          title: "迷茫道路——Confusion Road",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018-04-14/confusion-road/";
          
        },
      },{id: "post-爱的艺术-art-of-love",
        
          title: "爱的艺术——Art of Love",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018-03-12/art-of-love/";
          
        },
      },{id: "post-黑夜过后-after-night",
        
          title: "黑夜过后——After Night",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018-03-06/after-night/";
          
        },
      },{id: "post-地狱-生命的海洋-hell-the-ocean-of-life-1-2",
        
          title: "地狱，生命的海洋——Hell, the Ocean of Life (1-2)",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018-01-22/hell-the-ocean-of-life/";
          
        },
      },{id: "post-诗人的海洋-poet-s-ocean",
        
          title: "诗人的海洋——Poet’s Ocean",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018-01-18/poets-ocean/";
          
        },
      },{id: "post-天空坠落一粒尘埃-a-dust-falling-from-sky-1-1",
        
          title: "天空坠落一粒尘埃——A Dust Falling from Sky (1-1)",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018-01-08/a-dust-falling-from-sky/";
          
        },
      },{id: "post-平和-我的心",
        
          title: "平和，我的心",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018-01-04/peace-my-heart/";
          
        },
      },{id: "post-生活-诗和远方-life-poetry-and-distance",
        
          title: "生活、诗和远方——Life, Poetry and Distance",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018-01-02/life-poetry-and-distance/";
          
        },
      },{id: "post-缘分-岁月-fate-years",
        
          title: "缘分、岁月——Fate, Years",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018-01-02/fate-years/";
          
        },
      },{id: "post-死亡和希望-death-and-hope",
        
          title: "死亡和希望——Death and Hope",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018-01-02/death-and-hope/";
          
        },
      },{id: "post-百年鸿沟-a-gap-of-a-hundred-years",
        
          title: "百年鸿沟——A Gap of a Hundred Years",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018-01-02/a-gap-of-a-hundred-years/";
          
        },
      },{id: "post-前言-序",
        
          title: "前言、序",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018-01-01/qianyan-xu/";
          
        },
      },{id: "post-乩学初知",
        
          title: "乩学初知",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018-01-01/jixue/";
          
        },
      },{id: "post-香山菩萨传",
        
          title: "香山菩萨传",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018-01-01/e9a699e5b1b1e88fa9e890a8e4bca0/";
          
        },
      },{id: "post-饮中八仙联诗",
        
          title: "饮中八仙联诗",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018-01-01/e9a5aee4b8ade585abe4bb99e88194e8af97/";
          
        },
      },{id: "post-逍遥文",
        
          title: "逍遥文",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018-01-01/e9808de981a5e69687/";
          
        },
      },{id: "post-舟子挽船诗",
        
          title: "舟子挽船诗",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018-01-01/e8889fe5ad90e68cbde888b9e8af97/";
          
        },
      },{id: "post-瑶池内侍仙姬传",
        
          title: "瑶池内侍仙姬传",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018-01-01/e791b6e6b1a0e58685e4be8de4bb99e5a7ace4bca0/";
          
        },
      },{id: "post-理事-坛规-凡例",
        
          title: "理事、坛规、凡例",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018-01-01/e79086e4ba8be38081e59d9be8a784e38081e587a1e4be8b/";
          
        },
      },{id: "post-清秋咏月醉仙家赋-以题为韵",
        
          title: "清秋咏月醉仙家赋（以题为韵）",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018-01-01/e6b885e7a78be5928fe69c88e98689e4bb99e5aeb6e8b58befbc88e4bba5e9a298e4b8bae99fb5efbc89/";
          
        },
      },{id: "post-海蝉仙歌",
        
          title: "海蝉仙歌",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018-01-01/e6b5b7e89d89e4bb99e6ad8c/";
          
        },
      },{id: "post-张宋二公联诗-二月十五日",
        
          title: "张宋二公联诗（二月十五日）",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018-01-01/e5bca0e5ae8be4ba8ce585ace88194e8af97efbc88e4ba8ce69c88e58d81e4ba94e697a5efbc89/";
          
        },
      },{id: "post-张-宋二公传",
        
          title: "张、宋二公传",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018-01-01/e5bca0e38081e5ae8be4ba8ce585ace4bca0/";
          
        },
      },{id: "post-开坛降",
        
          title: "开坛降",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018-01-01/e5bc80e59d9be9998d/";
          
        },
      },{id: "post-岳武穆王诗歌",
        
          title: "岳武穆王诗歌",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018-01-01/e5b2b3e6ada6e7a986e78e8be8af97e6ad8c/";
          
        },
      },{id: "post-宋公愚人自愚说",
        
          title: "宋公愚人自愚说",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018-01-01/e5ae8be585ace6849ae4babae887aae6849ae8afb4/";
          
        },
      },{id: "post-原集目录",
        
          title: "原集目录",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018-01-01/e58e9fe99b86e79baee5bd95/";
          
        },
      },{id: "post-南华老人排律诗",
        
          title: "南华老人排律诗",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018-01-01/e58d97e58d8ee88081e4babae68e92e5be8be8af97/";
          
        },
      },{id: "post-八天君联诗",
        
          title: "八天君联诗",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018-01-01/e585abe5a4a9e5909be88194e8af97/";
          
        },
      },{id: "post-词语释义",
        
          title: "词语释义",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018-01-01/ciyu/";
          
        },
      },{id: "post-孤山处士述梦",
        
          title: "孤山处士述梦",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018-01-01/chushi-shumeng/";
          
        },
      },{id: "post-时间线-time-line",
        
          title: "时间线——Time Line",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2017-12-25/time-line/";
          
        },
      },{id: "post-相关介质-以及结局-medium-and-ending",
        
          title: "相关介质、以及结局——Medium and Ending",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2017-12-25/medium-and-ending/";
          
        },
      },{id: "post-昨夜-今日-last-night-today",
        
          title: "昨夜、今日——Last Night, Today",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2017-12-21/last-night-today/";
          
        },
      },{id: "post-当你沉睡时-when-you-are-asleep",
        
          title: "当你沉睡时——When You are Asleep",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2017-12-13/e5bd93e4bda0e6b289e79da1e697b6-when-you-are-asleep/";
          
        },
      },{id: "post-人物关系-城墙内的居民-characters-relationship-residents-inside-the-wall",
        
          title: "人物关系：城墙内的居民——Characters Relationship: Residents inside the Wall",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2017-12-10/characters-relationship-residents-inside-the-wall/";
          
        },
      },{id: "post-创作计划-writing-plan",
        
          title: "创作计划——Writing Plan",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2017-12-06/writing-plan/";
          
        },
      },{id: "post-繁忙的地下世界-the-busy-underworld",
        
          title: "繁忙的地下世界——The Busy Underworld",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2017-11-21/the-busy-underworld/";
          
        },
      },{id: "post-钱和理想-money-and-ideals",
        
          title: "钱和理想——Money and Ideals",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2017-10-27/money-and-ideals/";
          
        },
      },{id: "post-鸡汤和爱情-chicken-soup-and-love",
        
          title: "鸡汤和爱情——Chicken Soup and Love",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2017-10-22/chicken-soup-and-love/";
          
        },
      },{id: "post-人物关系-大洋居民-characters-relationship-ocean-residents",
        
          title: "人物关系：大洋居民——Characters Relationship: Ocean Residents",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2017-10-13/characters-relationship-ocean-residents/";
          
        },
      },{id: "post-生命中的河流-女鬼与我-rivers-in-life-ghost-and-me",
        
          title: "生命中的河流，女鬼与我——Rivers in Life, Ghost and Me",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2017-10-12/rivers-in-life-ghost-and-me/";
          
        },
      },{id: "post-这是爱情啊-更是诗歌-this-is-love-but-also-poetry",
        
          title: "这是爱情啊，更是诗歌——This is Love, but also Poetry",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2017-10-10/this-is-love-but-also-poetry/";
          
        },
      },{id: "post-王子如梦记-princes-amp-8217-dream-4-1",
        
          title: "王子如梦记｜Princes&amp;#8217; Dream (4-1)",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2017-10-05/princes-dream/";
          
        },
      },{id: "post-冬雪寒-winter-snow-and-cold-plum",
        
          title: "冬雪寒——Winter Snow and Cold Plum",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2017-09-22/winter-snow-and-cold-plum/";
          
        },
      },{id: "post-八月-花儿与微风-august-flowers-and-breeze",
        
          title: "八月、花儿与微风——August, Flowers and Breeze",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2017-09-22/august-flowers-and-breeze/";
          
        },
      },{id: "post-国王-马修之墓-king-and-matthew-amp-8217-s-cemetery-3-100",
        
          title: "国王、马修之墓——King and Matthew&amp;#8217;s Cemetery (3-100)",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2017-09-07/king-and-matthews-cemetery/";
          
        },
      },{id: "post-给蟋蟀们的赞歌-hymn-for-crickets",
        
          title: "给蟋蟀们的赞歌——Hymn for Crickets",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2017-08-24/hymn-for-crickets/";
          
        },
      },{id: "post-苦难人的爱情-love-of-victims",
        
          title: "苦难人的爱情——Love of Victims",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2017-08-22/love-of-victims/";
          
        },
      },{id: "post-现实世界我是一个哑巴-i-m-a-mute-in-real-world",
        
          title: "现实世界我是一个哑巴——I’m a Mute in Real World",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2017-08-17/im-a-mute-in-real-world/";
          
        },
      },{id: "post-马修的形体-matthew-amp-8217-s-body-4",
        
          title: "马修的形体——Matthew&amp;#8217;s Body (4-)",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2017-08-09/matthews-body/";
          
        },
      },{id: "post-灵魂伴侣-soulmate",
        
          title: "灵魂伴侣——Soulmate",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2017-08-01/soulmate/";
          
        },
      },{id: "post-爱你的人-one-loves-you",
        
          title: "爱你的人——One Loves You",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2017-08-01/one-loves-you/";
          
        },
      },{id: "post-王子的情劫-love-robbery-of-prince-4",
        
          title: "王子的情劫——Love Robbery of Prince (4-)",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2017-08-01/love-robbery-of-prince/";
          
        },
      },{id: "post-征程开始-on-the-journey-4",
        
          title: "征程开始——On the Journey (4-)",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2017-07-27/on-the-journey/";
          
        },
      },{id: "post-思考和想象力-thinking-and-imagination",
        
          title: "思考和想象力——Thinking and Imagination",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2017-07-26/thinking-and-imagination/";
          
        },
      },{id: "post-六月的风-wind-in-june",
        
          title: "六月的风——Wind in June",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2017-07-23/e585ade69c88e79a84e9a38e-wind-in-june/";
          
        },
      },{id: "post-离开-leaving",
        
          title: "离开——Leaving",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2017-06-14/leaving/";
          
        },
      },{id: "post-像是抑郁-depression",
        
          title: "像是抑郁——Depression",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2017-05-31/depression/";
          
        },
      },{id: "post-中华新韵到底是怎么一回事-what-exactly-is-the-new-chinese-rhyme-system",
        
          title: "中华新韵到底是怎么一回事？——What Exactly is the New Chinese Rhyme System?",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2017-05-06/what-exactly-is-the-new-chinese-rhyme-system/";
          
        },
      },{id: "post-韵发展史略-a-brief-history-of-the-development-of-rhymes",
        
          title: "韵发展史略——A Brief History of the Development of Rhymes",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2017-04-06/a-brief-history-of-the-development-of-rhymes/";
          
        },
      },{id: "post-3月8日成都的雨-march-8th-rain-in-chengdu",
        
          title: "3月8日成都的雨——March 8th, Rain in Chengdu",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2017-03-08/march-8th-rain-in-chengdu/";
          
        },
      },{id: "post-吾系不知汝-i-don-amp-8217-t-know-you",
        
          title: "吾系不知汝——I Don&amp;#8217;t Know You",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2017-02-09/i-dont-know-you/";
          
        },
      },{id: "post-黑暗痛苦-dark-pains",
        
          title: "黑暗痛苦——Dark Pains",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2017-01-02/dark-pains/";
          
        },
      },{id: "post-浪仙-wandering-immortal",
        
          title: "浪仙——Wandering Immortal",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2016-12-08/wandering-immortal/";
          
        },
      },{id: "post-孤独的月亮-the-lonely-moon",
        
          title: "孤独的月亮——The Lonely Moon",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2016-10-25/the-lonely-moon/";
          
        },
      },{id: "post-恰似冬风-just-like-winter-wind",
        
          title: "恰似冬风——Just Like Winter Wind",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2016-08-09/just-like-winter-wind/";
          
        },
      },{id: "post-如果明天我离开-if-i-die-tomorrow",
        
          title: "如果明天我离开——If I Die Tomorrow",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2016-07-21/if-i-die-tomorrow/";
          
        },
      },{id: "post-过去式-past-tense",
        
          title: "过去式——Past Tense",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2016-06-08/past-tense/";
          
        },
      },{id: "post-美芽胚子-bud-embryo",
        
          title: "美芽胚子——Bud Embryo",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2016-06-03/bud-embryo/";
          
        },
      },{id: "post-悬崖-precipice",
        
          title: "悬崖——Precipice",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2016-06-02/precipice/";
          
        },
      },{id: "post-什么是诗歌-what-is-poetry",
        
          title: "什么是诗歌——What is Poetry",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2016-06-01/what-is-poetry/";
          
        },
      },{id: "post-生活是什么-what-is-life",
        
          title: "生活是什么——What is Life",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2016-05-06/what-is-life/";
          
        },
      },{id: "post-甘肃西和白雀寺-僧人的一天-a-day-of-a-monk-at-baique-temple-xihe-gansu",
        
          title: "甘肃西和白雀寺，僧人的一天——A Day of a Monk at Baique Temple, Xihe, Gansu",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2016-04-01/a-day-in-the-life-of-a-monk-at-baique-temple-xihe-gansu/";
          
        },
      },{id: "post-樵牧-woodcutters-and-herders",
        
          title: "樵牧——Woodcutters and Herders",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2016-03-06/woodcutters-and-herders/";
          
        },
      },{id: "post-暂别白雀寺-temporary-farewell-to-baique-temple",
        
          title: "暂别白雀寺——Temporary Farewell to Baique Temple",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2016-03-01/temporary-farewell-to-baique-temple/";
          
        },
      },{id: "post-露西-尼塞-我-lucy-nisai-and-me",
        
          title: "露西、尼塞、我——Lucy, Nisai and Me",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2016-01-24/lucy-nisai-and-me/";
          
        },
      },{id: "post-尸体-the-corpse",
        
          title: "尸体——The Corpse",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015-12-09/the-corpse/";
          
        },
      },{id: "post-诗人送花-poet-sending-the-flowers",
        
          title: "诗人送花——Poet Sending the Flowers",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015-10-30/poet-sending-the-flowers/";
          
        },
      },{id: "post-我已经完成的事-things-i-have-done",
        
          title: "我已经完成的事——Things I Have Done",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015-10-29/things-i-have-done/";
          
        },
      },{id: "post-锥子之死-death-of-the-awl",
        
          title: "锥子之死——Death of the Awl",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015-10-28/death-of-the-awl/";
          
        },
      },{id: "post-它们-他们-they-and-them",
        
          title: "它们，他们——They and Them",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015-10-17/they-and-them/";
          
        },
      },{id: "post-秋夜云雨-clouds-and-rains-in-autumn-night",
        
          title: "秋夜云雨——Clouds and Rains in Autumn Night",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015-09-17/clouds-and-rains-in-autumn-night/";
          
        },
      },{id: "post-乌云漫布-dark-clouds-spread",
        
          title: "乌云漫布——Dark Clouds Spread",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015-08-31/dark-clouds-spread/";
          
        },
      },{id: "post-窗台外的向日葵花-the-sunflower-outside-the-windowsill",
        
          title: "窗台外的向日葵花——The Sunflower Outside the Windowsill",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015-08-17/the-sunflower-outside-the-windowsill/";
          
        },
      },{id: "post-四季-four-seasons",
        
          title: "四季——Four Seasons",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015-07-27/four-seasons/";
          
        },
      },{id: "post-尘土-尘垢-the-dust-the-dirt",
        
          title: "尘土、尘垢——The Dust, The Dirt",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015-07-26/the-dust-the-dirt/";
          
        },
      },{id: "post-杨柳和风-the-willow-the-wind",
        
          title: "杨柳和风——The Willow, The Wind",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015-07-25/the-willow-the-wind/";
          
        },
      },{id: "post-牛郎和织女-niulang-and-zhinv",
        
          title: "牛郎和织女——NiuLang and ZhiNv",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015-06-24/niulang-and-zhinv/";
          
        },
      },{id: "post-佛说-the-buddha-said",
        
          title: "佛说——The Buddha Said",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015-06-11/the-buddha-said/";
          
        },
      },{id: "post-前方的路-the-road-ahead",
        
          title: "前方的路——The Road Ahead",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015-06-10/the-road-ahead/";
          
        },
      },{id: "post-等待死亡的过程-process-of-waiting-for-death",
        
          title: "等待死亡的过程——Process of Waiting for Death",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015-05-05/process-of-waiting-for-death/";
          
        },
      },{id: "post-林芝-linzhi",
        
          title: "林芝——Linzhi",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015-04-08/linzhi/";
          
        },
      },{id: "post-四月-april",
        
          title: "四月——April",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015-03-31/april/";
          
        },
      },{id: "post-三月十二日-march-12",
        
          title: "三月十二日——March 12",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015-03-12/march-12/";
          
        },
      },{id: "post-风-雨-the-wind-the-rain",
        
          title: "风、雨——The Wind, The Rain",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015-02-17/the-wind-and-the-rain/";
          
        },
      },{id: "post-西藏-tibet",
        
          title: "西藏——Tibet",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015-02-01/tibet/";
          
        },
      },{id: "post-布达拉宫-the-potala-palace",
        
          title: "布达拉宫——The Potala Palace",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015-01-31/the-potala-palace/";
          
        },
      },{id: "post-夜半三更-late-at-night",
        
          title: "夜半三更——Late at Night",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015-01-21/late-at-night/";
          
        },
      },{id: "post-白云-white-clouds",
        
          title: "白云——White Clouds",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015-01-20/white-clouds/";
          
        },
      },{id: "post-谎言-lies",
        
          title: "谎言——Lies",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015-01-19/lies/";
          
        },
      },{id: "post-与其-不如-instead-and-it-is-better",
        
          title: "与其、不如——Instead and it is Better",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015-01-18/instead-and-it-is-better/";
          
        },
      },{id: "post-醉酒鬼-drunkards",
        
          title: "醉酒鬼——Drunkards",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015-01-17/drunkards/";
          
        },
      },{id: "post-大雪与少年-heavy-snow-and-boy",
        
          title: "大雪与少年——Heavy Snow and Boy",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015-01-16/heavy-snow-and-boy/";
          
        },
      },{id: "post-僵化的思想-rigid-thoughts",
        
          title: "僵化的思想——Rigid Thoughts",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015-01-15/rigid-thoughts/";
          
        },
      },{id: "post-思想-thoughts",
        
          title: "思想——Thoughts",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015-01-14/thoughts/";
          
        },
      },{id: "post-25岁时的爱情-love-at-25",
        
          title: "25岁时的爱情——Love at 25",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015-01-13/love-at-25/";
          
        },
      },{id: "post-佛的心境-buddha-amp-8217-s-mind",
        
          title: "佛的心境——Buddha&amp;#8217;s Mind",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015-01-12/buddhas-mind/";
          
        },
      },{id: "post-梦的集合-collection-of-dreams-1",
        
          title: "梦的集合——Collection of Dreams 1",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015-01-11/collection-of-dreams-1/";
          
        },
      },{id: "post-梦醒-dream-over",
        
          title: "梦醒——Dream Over",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015-01-10/dream-over/";
          
        },
      },{id: "post-煮稀饭-cooking-porridge",
        
          title: "煮稀饭——Cooking Porridge",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015-01-09/cooking-porridge/";
          
        },
      },{id: "post-青春记忆-memory-of-youth",
        
          title: "青春记忆——Memory of Youth",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015-01-08/memory-of-youth/";
          
        },
      },{id: "post-情感-emotions",
        
          title: "情感——Emotions",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015-01-07/emotions/";
          
        },
      },{id: "post-诱惑与自我-temptations-and-oneself",
        
          title: "诱惑与自我——Temptations and Oneself",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015-01-06/temptations-and-oneself/";
          
        },
      },{id: "post-唾沫星子-spittle",
        
          title: "唾沫星子——Spittle",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015-01-05/spittle/";
          
        },
      },{id: "post-悲伤的眼泪-tears-of-sadness",
        
          title: "悲伤的眼泪——Tears of Sadness",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015-01-04/tears-of-sadness/";
          
        },
      },{id: "post-红灯笼-red-lanterns",
        
          title: "红灯笼——Red Lanterns",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015-01-03/red-lanterns/";
          
        },
      },{id: "post-杜撰-林则徐之死-apocryphal-death-of-lin-zexu",
        
          title: "杜撰，林则徐之死——Apocryphal Death of Lin Zexu",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015-01-02/apocryphal-death-of-lin-zexu/";
          
        },
      },{id: "post-生活琐事-trivialities-of-life",
        
          title: "生活琐事——Trivialities of Life",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015-01-01/trivialities-of-life/";
          
        },
      },{id: "post-寸头-buzz-cut",
        
          title: "寸头——Buzz Cut",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2014-12-27/buzz-cut/";
          
        },
      },{id: "post-梦的回响-echoes-of-dream",
        
          title: "梦的回响——Echoes of Dream",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2014-12-07/echoes-of-dream/";
          
        },
      },{id: "post-真的伤口-the-real-wound",
        
          title: "真的伤口——The Real Wound",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2014-07-23/the-real-wound/";
          
        },
      },{id: "post-黄昏-黎明-the-dusk-the-dawn",
        
          title: "黄昏、黎明——The Dusk, The Dawn",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2014-07-22/the-dusk-the-dawn/";
          
        },
      },{id: "post-毕业赠",
        
          title: "毕业赠",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2014-05-19/e6af95e4b89ae8b5a0/";
          
        },
      },{id: "post-唐宋后裔-祭",
        
          title: "唐宋后裔（祭）",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2013-11-08/e59490e5ae8be5908ee8a394efbc88e7a5adefbc89/";
          
        },
      },{id: "post-花香-fragrance-of-flowers",
        
          title: "花香——Fragrance of Flowers",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2012-08-20/fragrance-of-flowers/";
          
        },
      },{id: "post-夏夜-summer-nights",
        
          title: "夏夜——Summer Nights",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2012-08-19/summer-nights/";
          
        },
      },{id: "post-秋风独座-a-seat-alone-in-autumn-wind",
        
          title: "秋风独座——A Seat Alone in Autumn Wind",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2012-08-18/a-seat-alone-in-autumn-wind/";
          
        },
      },{id: "post-思念的温度-warmth-of-yearning",
        
          title: "思念的温度——Warmth of Yearning",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2012-08-17/warmth-of-yearning/";
          
        },
      },{id: "post-一种幸福-a-kind-of-happiness",
        
          title: "一种幸福——A Kind of Happiness",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2012-08-16/a-kind-of-happiness/";
          
        },
      },{id: "post-大街-big-street",
        
          title: "大街——Big Street",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2012-08-15/big-street/";
          
        },
      },{id: "post-静心-quiet-heart",
        
          title: "静心——Quiet Heart",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2012-08-11/quiet-heart/";
          
        },
      },{id: "post-玉泉-滴水岩-yuquan-dishuiyan",
        
          title: "玉泉-滴水岩——YuQuan DiShuiYan",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2012-07-15/yuquan-dishuiyan/";
          
        },
      },{id: "post-黑夜里的太阳-the-sun-in-the-nights",
        
          title: "黑夜里的太阳——The Sun in the Nights",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2012-05-03/the-sun-in-the-nights/";
          
        },
      },{id: "post-乐活的树子-funny-tree-2",
        
          title: "乐活的树子——Funny Tree 2",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2012-03-15/funny-tree-2/";
          
        },
      },{id: "post-乐活的树子-funny-tree-1",
        
          title: "乐活的树子——Funny Tree 1",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2012-03-05/funny-tree-1/";
          
        },
      },{id: "post-攀大-panzhihua-university",
        
          title: "攀大——Panzhihua University",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2012-01-05/panzhihua-university/";
          
        },
      },{id: "post-春日-days-of-spring",
        
          title: "春日——Days of Spring",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2012-01-03/days-of-spring/";
          
        },
      },{id: "post-神龟-divine-turtles",
        
          title: "神龟——Divine Turtles",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2012-01-01/divine-turtles/";
          
        },
      },{id: "post-鹰-eagles",
        
          title: "鹰——Eagles",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2011-09-12/eagles/";
          
        },
      },{id: "post-夜孤沉筒-fishing-alone-at-night",
        
          title: "夜孤沉筒——Fishing Alone at Night",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2011-08-14/fishing-alone-at-night/";
          
        },
      },{id: "post-微凉的风-cool-winds",
        
          title: "微凉的风——Cool Winds",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2011-08-09/cool-winds/";
          
        },
      },{id: "post-寂静的夜-silent-nights",
        
          title: "寂静的夜——Silent Nights",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2011-08-08/silent-nights/";
          
        },
      },{id: "post-茶园-tea-garden",
        
          title: "茶园——Tea Garden",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2011-08-05/tea-garden/";
          
        },
      },{id: "post-纯情梦想-pure-dreams",
        
          title: "纯情梦想——Pure Dreams",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2011-01-19/pure-dreams/";
          
        },
      },{id: "post-平静的心-peaceful-heart",
        
          title: "平静的心——Peaceful Heart",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2011-01-19/peaceful-heart/";
          
        },
      },{id: "post-视听与表象-audiovisual-and-appearance",
        
          title: "视听与表象——Audiovisual and Appearance",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2011-01-03/audiovisual-and-appearance/";
          
        },
      },{id: "post-羊皮古书-the-ancient-parchment",
        
          title: "羊皮古书——The Ancient Parchment",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2011-01-02/the-ancient-parchment/";
          
        },
      },{id: "post-凡星-ordinary-stars",
        
          title: "凡星——Ordinary Stars",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2010-09-15/ordinary-stars/";
          
        },
      },];

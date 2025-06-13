// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "Edit the `_data/repositories.yml` and change the `github_users` and `github_repos` lists to include your own GitHub profile and repositories.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "This is a description of the page. You can modify it in &#39;_pages/cv.md&#39;. You can also change or remove the top pdf download button.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "dropdown-blog",
              title: "blog",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/blog/";
              },
            },{id: "post-100-y-github",
        
          title: '100-Y · GitHub <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "100-Y has one repository available. Follow their code on GitHub.",
        section: "Posts",
        handler: () => {
          
            window.open("https://github.com/100-Y", "_blank");
          
        },
      },{id: "post-",
        
          title: "",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/2017-10-12-rivers-in-life-ghost-and-me/";
          
        },
      },{id: "post-被托管的世界-猪的乌托邦",
        
          title: "被托管的世界：猪的乌托邦",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/pigs-utopia/";
          
        },
      },{id: "post-中国不会亡-china-will-not-perish",
        
          title: "中国不会亡——China will not Perish",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020/china-will-not-perish/";
          
        },
      },{id: "post-未即当下-future-is-now",
        
          title: "未即当下——Future is Now",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020/future-is-now/";
          
        },
      },{id: "post-浪漫星空-romantic-starry-sky",
        
          title: "浪漫星空——Romantic Starry Sky",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020/romantic-starry-sky/";
          
        },
      },{id: "post-前进的苦楚-pains-of-moving-forward",
        
          title: "前进的苦楚——Pains of Moving Forward",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020/pains-of-moving-forward/";
          
        },
      },{id: "post-新造人-ncp",
        
          title: "新造人——NCP",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020/ncp/";
          
        },
      },{id: "post-史记世系表",
        
          title: "史记世系表",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2019/shiji/";
          
        },
      },{id: "post-退守迷蒙森林-retreat-to-misty-forest-3-99",
        
          title: "退守迷蒙森林——Retreat to Misty Forest (3-99)",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2019/retreat-to-misty-forest/";
          
        },
      },{id: "post-城墙与人心-wall-and-human-heart-3",
        
          title: "城墙与人心——Wall and Human Heart (3-)",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2019/wall-and-human-heart/";
          
        },
      },{id: "post-爱是什么-what-is-a-love",
        
          title: "爱是什么——What is a Love",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2019/what-is-a-love/";
          
        },
      },{id: "post-希雅-海神的女儿-sea-daughter-of-ocean-4",
        
          title: "希雅，海神的女儿——Sea, Daughter of Ocean (4-)",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2019/sea-daughter-of-ocean/";
          
        },
      },{id: "post-寻找海盗-looking-for-the-pirates-4",
        
          title: "寻找海盗——Looking for the Pirates (4-)",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2019/looking-for-the-pirates/";
          
        },
      },{id: "post-每个人的负重-everyone-s-burden",
        
          title: "每个人的负重——Everyone’s Burden",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018/everyones-burden/";
          
        },
      },{id: "post-爱人与护己-love-others-and-protect-oneself",
        
          title: "爱人与护己——Love Others and Protect Oneself",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018/love-others-and-protect-oneself/";
          
        },
      },{id: "post-要过的日子-days-to-live",
        
          title: "要过的日子——Days to Live",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018/days-to-live/";
          
        },
      },{id: "post-黑暗中的星-stars-in-darkness",
        
          title: "黑暗中的星——Stars in Darkness",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018/stars-in-darkness/";
          
        },
      },{id: "post-最终结局-the-final-end",
        
          title: "最终结局——The Final End",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018/the-final-end/";
          
        },
      },{id: "post-地图的一些讲解-explanations-of-the-map",
        
          title: "地图的一些讲解——Explanations of the Map",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018/explanations-of-the-map/";
          
        },
      },{id: "post-线装书的制法-method-of-making-thread-bound-books",
        
          title: "线装书的制法——Method of Making Thread Bound Books",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018/method-of-making-thread-bound-books/";
          
        },
      },{id: "post-关于爱情-about-love",
        
          title: "关于爱情——About Love",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018/about-love/";
          
        },
      },{id: "post-于你无内的诗-poem-without-u",
        
          title: "于你无内的诗——Poem Without U",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018/poem-without-u/";
          
        },
      },{id: "post-下跪与爱情-kneel-and-love",
        
          title: "下跪与爱情——Kneel and Love",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018/kneel-and-love/";
          
        },
      },{id: "post-她的无知-我的愚昧-her-ignorance-and-mine",
        
          title: "她的无知，我的愚昧——Her Ignorance and mine",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018/her-ignorance-and-mine/";
          
        },
      },{id: "post-迷茫道路-confusion-road",
        
          title: "迷茫道路——Confusion Road",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018/confusion-road/";
          
        },
      },{id: "post-爱的艺术-art-of-love",
        
          title: "爱的艺术——Art of Love",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018/art-of-love/";
          
        },
      },{id: "post-黑夜过后-after-night",
        
          title: "黑夜过后——After Night",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018/after-night/";
          
        },
      },{id: "post-地狱-生命的海洋-hell-the-ocean-of-life-1-2",
        
          title: "地狱，生命的海洋——Hell, the Ocean of Life (1-2)",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018/hell-the-ocean-of-life/";
          
        },
      },{id: "post-诗人的海洋-poet-s-ocean",
        
          title: "诗人的海洋——Poet’s Ocean",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018/poets-ocean/";
          
        },
      },{id: "post-天空坠落一粒尘埃-a-dust-falling-from-sky-1-1",
        
          title: "天空坠落一粒尘埃——A Dust Falling from Sky (1-1)",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018/a-dust-falling-from-sky/";
          
        },
      },{id: "post-平和-我的心",
        
          title: "平和，我的心",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018/peace-my-heart/";
          
        },
      },{id: "post-生活-诗和远方-life-poetry-and-distance",
        
          title: "生活、诗和远方——Life, Poetry and Distance",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018/life-poetry-and-distance/";
          
        },
      },{id: "post-缘分-岁月-fate-years",
        
          title: "缘分、岁月——Fate, Years",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018/fate-years/";
          
        },
      },{id: "post-死亡和希望-death-and-hope",
        
          title: "死亡和希望——Death and Hope",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018/death-and-hope/";
          
        },
      },{id: "post-百年鸿沟-a-gap-of-a-hundred-years",
        
          title: "百年鸿沟——A Gap of a Hundred Years",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018/a-gap-of-a-hundred-years/";
          
        },
      },{id: "post-前言-序",
        
          title: "前言、序",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018/qianyan-xu/";
          
        },
      },{id: "post-乩学初知",
        
          title: "乩学初知",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018/jixue/";
          
        },
      },{id: "post-香山菩萨传",
        
          title: "香山菩萨传",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018/e9a699e5b1b1e88fa9e890a8e4bca0/";
          
        },
      },{id: "post-饮中八仙联诗",
        
          title: "饮中八仙联诗",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018/e9a5aee4b8ade585abe4bb99e88194e8af97/";
          
        },
      },{id: "post-逍遥文",
        
          title: "逍遥文",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018/e9808de981a5e69687/";
          
        },
      },{id: "post-舟子挽船诗",
        
          title: "舟子挽船诗",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018/e8889fe5ad90e68cbde888b9e8af97/";
          
        },
      },{id: "post-瑶池内侍仙姬传",
        
          title: "瑶池内侍仙姬传",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018/e791b6e6b1a0e58685e4be8de4bb99e5a7ace4bca0/";
          
        },
      },{id: "post-理事-坛规-凡例",
        
          title: "理事、坛规、凡例",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018/e79086e4ba8be38081e59d9be8a784e38081e587a1e4be8b/";
          
        },
      },{id: "post-清秋咏月醉仙家赋-以题为韵",
        
          title: "清秋咏月醉仙家赋（以题为韵）",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018/e6b885e7a78be5928fe69c88e98689e4bb99e5aeb6e8b58befbc88e4bba5e9a298e4b8bae99fb5efbc89/";
          
        },
      },{id: "post-海蝉仙歌",
        
          title: "海蝉仙歌",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018/e6b5b7e89d89e4bb99e6ad8c/";
          
        },
      },{id: "post-张宋二公联诗-二月十五日",
        
          title: "张宋二公联诗（二月十五日）",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018/e5bca0e5ae8be4ba8ce585ace88194e8af97efbc88e4ba8ce69c88e58d81e4ba94e697a5efbc89/";
          
        },
      },{id: "post-张-宋二公传",
        
          title: "张、宋二公传",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018/e5bca0e38081e5ae8be4ba8ce585ace4bca0/";
          
        },
      },{id: "post-开坛降",
        
          title: "开坛降",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018/e5bc80e59d9be9998d/";
          
        },
      },{id: "post-岳武穆王诗歌",
        
          title: "岳武穆王诗歌",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018/e5b2b3e6ada6e7a986e78e8be8af97e6ad8c/";
          
        },
      },{id: "post-宋公愚人自愚说",
        
          title: "宋公愚人自愚说",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018/e5ae8be585ace6849ae4babae887aae6849ae8afb4/";
          
        },
      },{id: "post-原集目录",
        
          title: "原集目录",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018/e58e9fe99b86e79baee5bd95/";
          
        },
      },{id: "post-南华老人排律诗",
        
          title: "南华老人排律诗",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018/e58d97e58d8ee88081e4babae68e92e5be8be8af97/";
          
        },
      },{id: "post-八天君联诗",
        
          title: "八天君联诗",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018/e585abe5a4a9e5909be88194e8af97/";
          
        },
      },{id: "post-词语释义",
        
          title: "词语释义",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018/ciyu/";
          
        },
      },{id: "post-孤山处士述梦",
        
          title: "孤山处士述梦",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018/chushi-shumeng/";
          
        },
      },{id: "post-时间线-time-line",
        
          title: "时间线——Time Line",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2017/time-line/";
          
        },
      },{id: "post-相关介质-以及结局-medium-and-ending",
        
          title: "相关介质、以及结局——Medium and Ending",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2017/medium-and-ending/";
          
        },
      },{id: "post-昨夜-今日-last-night-today",
        
          title: "昨夜、今日——Last Night, Today",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2017/last-night-today/";
          
        },
      },{id: "post-当你沉睡时-when-you-are-asleep",
        
          title: "当你沉睡时——When You are Asleep",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2017/e5bd93e4bda0e6b289e79da1e697b6-when-you-are-asleep/";
          
        },
      },{id: "post-人物关系-城墙内的居民-characters-relationship-residents-inside-the-wall",
        
          title: "人物关系：城墙内的居民——Characters Relationship: Residents inside the Wall",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2017/characters-relationship-residents-inside-the-wall/";
          
        },
      },{id: "post-创作计划-writing-plan",
        
          title: "创作计划——Writing Plan",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2017/writing-plan/";
          
        },
      },{id: "post-繁忙的地下世界-the-busy-underworld",
        
          title: "繁忙的地下世界——The Busy Underworld",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2017/the-busy-underworld/";
          
        },
      },{id: "post-钱和理想-money-and-ideals",
        
          title: "钱和理想——Money and Ideals",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2017/money-and-ideals/";
          
        },
      },{id: "post-鸡汤和爱情-chicken-soup-and-love",
        
          title: "鸡汤和爱情——Chicken Soup and Love",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2017/chicken-soup-and-love/";
          
        },
      },{id: "post-人物关系-大洋居民-characters-relationship-ocean-residents",
        
          title: "人物关系：大洋居民——Characters Relationship: Ocean Residents",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2017/characters-relationship-ocean-residents/";
          
        },
      },{id: "post-这是爱情啊-更是诗歌-this-is-love-but-also-poetry",
        
          title: "这是爱情啊，更是诗歌——This is Love, but also Poetry",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2017/this-is-love-but-also-poetry/";
          
        },
      },{id: "post-王子如梦记-princes-amp-8217-dream-4-1",
        
          title: "王子如梦记｜Princes&amp;#8217; Dream (4-1)",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2017/princes-dream/";
          
        },
      },{id: "post-冬雪寒-winter-snow-and-cold-plum",
        
          title: "冬雪寒——Winter Snow and Cold Plum",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2017/winter-snow-and-cold-plum/";
          
        },
      },{id: "post-八月-花儿与微风-august-flowers-and-breeze",
        
          title: "八月、花儿与微风——August, Flowers and Breeze",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2017/august-flowers-and-breeze/";
          
        },
      },{id: "post-国王-马修之墓-king-and-matthew-amp-8217-s-cemetery-3-100",
        
          title: "国王、马修之墓——King and Matthew&amp;#8217;s Cemetery (3-100)",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2017/king-and-matthews-cemetery/";
          
        },
      },{id: "post-给蟋蟀们的赞歌-hymn-for-crickets",
        
          title: "给蟋蟀们的赞歌——Hymn for Crickets",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2017/hymn-for-crickets/";
          
        },
      },{id: "post-苦难人的爱情-love-of-victims",
        
          title: "苦难人的爱情——Love of Victims",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2017/love-of-victims/";
          
        },
      },{id: "post-现实世界我是一个哑巴-i-m-a-mute-in-real-world",
        
          title: "现实世界我是一个哑巴——I’m a Mute in Real World",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2017/im-a-mute-in-real-world/";
          
        },
      },{id: "post-马修的形体-matthew-amp-8217-s-body-4",
        
          title: "马修的形体——Matthew&amp;#8217;s Body (4-)",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2017/matthews-body/";
          
        },
      },{id: "post-灵魂伴侣-soulmate",
        
          title: "灵魂伴侣——Soulmate",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2017/soulmate/";
          
        },
      },{id: "post-爱你的人-one-loves-you",
        
          title: "爱你的人——One Loves You",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2017/one-loves-you/";
          
        },
      },{id: "post-王子的情劫-love-robbery-of-prince-4",
        
          title: "王子的情劫——Love Robbery of Prince (4-)",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2017/love-robbery-of-prince/";
          
        },
      },{id: "post-征程开始-on-the-journey-4",
        
          title: "征程开始——On the Journey (4-)",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2017/on-the-journey/";
          
        },
      },{id: "post-思考和想象力-thinking-and-imagination",
        
          title: "思考和想象力——Thinking and Imagination",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2017/thinking-and-imagination/";
          
        },
      },{id: "post-六月的风-wind-in-june",
        
          title: "六月的风——Wind in June",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2017/e585ade69c88e79a84e9a38e-wind-in-june/";
          
        },
      },{id: "post-离开-leaving",
        
          title: "离开——Leaving",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2017/leaving/";
          
        },
      },{id: "post-像是抑郁-depression",
        
          title: "像是抑郁——Depression",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2017/depression/";
          
        },
      },{id: "post-中华新韵到底是怎么一回事-what-exactly-is-the-new-chinese-rhyme-system",
        
          title: "中华新韵到底是怎么一回事？——What Exactly is the New Chinese Rhyme System?",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2017/what-exactly-is-the-new-chinese-rhyme-system/";
          
        },
      },{id: "post-韵发展史略-a-brief-history-of-the-development-of-rhymes",
        
          title: "韵发展史略——A Brief History of the Development of Rhymes",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2017/a-brief-history-of-the-development-of-rhymes/";
          
        },
      },{id: "post-3月8日成都的雨-march-8th-rain-in-chengdu",
        
          title: "3月8日成都的雨——March 8th, Rain in Chengdu",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2017/march-8th-rain-in-chengdu/";
          
        },
      },{id: "post-吾系不知汝-i-don-amp-8217-t-know-you",
        
          title: "吾系不知汝——I Don&amp;#8217;t Know You",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2017/i-dont-know-you/";
          
        },
      },{id: "post-黑暗痛苦-dark-pains",
        
          title: "黑暗痛苦——Dark Pains",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2017/dark-pains/";
          
        },
      },{id: "post-浪仙-wandering-immortal",
        
          title: "浪仙——Wandering Immortal",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2016/wandering-immortal/";
          
        },
      },{id: "post-孤独的月亮-the-lonely-moon",
        
          title: "孤独的月亮——The Lonely Moon",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2016/the-lonely-moon/";
          
        },
      },{id: "post-恰似冬风-just-like-winter-wind",
        
          title: "恰似冬风——Just Like Winter Wind",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2016/just-like-winter-wind/";
          
        },
      },{id: "post-如果明天我离开-if-i-die-tomorrow",
        
          title: "如果明天我离开——If I Die Tomorrow",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2016/if-i-die-tomorrow/";
          
        },
      },{id: "post-过去式-past-tense",
        
          title: "过去式——Past Tense",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2016/past-tense/";
          
        },
      },{id: "post-美芽胚子-bud-embryo",
        
          title: "美芽胚子——Bud Embryo",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2016/bud-embryo/";
          
        },
      },{id: "post-悬崖-precipice",
        
          title: "悬崖——Precipice",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2016/precipice/";
          
        },
      },{id: "post-什么是诗歌-what-is-poetry",
        
          title: "什么是诗歌——What is Poetry",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2016/what-is-poetry/";
          
        },
      },{id: "post-生活是什么-what-is-life",
        
          title: "生活是什么——What is Life",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2016/what-is-life/";
          
        },
      },{id: "post-甘肃西和白雀寺-僧人的一天-a-day-of-a-monk-at-baique-temple-xihe-gansu",
        
          title: "甘肃西和白雀寺，僧人的一天——A Day of a Monk at Baique Temple, Xihe, Gansu",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2016/a-day-in-the-life-of-a-monk-at-baique-temple-xihe-gansu/";
          
        },
      },{id: "post-樵牧-woodcutters-and-herders",
        
          title: "樵牧——Woodcutters and Herders",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2016/woodcutters-and-herders/";
          
        },
      },{id: "post-暂别白雀寺-temporary-farewell-to-baique-temple",
        
          title: "暂别白雀寺——Temporary Farewell to Baique Temple",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2016/temporary-farewell-to-baique-temple/";
          
        },
      },{id: "post-露西-尼塞-我-lucy-nisai-and-me",
        
          title: "露西、尼塞、我——Lucy, Nisai and Me",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2016/lucy-nisai-and-me/";
          
        },
      },{id: "post-尸体-the-corpse",
        
          title: "尸体——The Corpse",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/the-corpse/";
          
        },
      },{id: "post-诗人送花-poet-sending-the-flowers",
        
          title: "诗人送花——Poet Sending the Flowers",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/poet-sending-the-flowers/";
          
        },
      },{id: "post-我已经完成的事-things-i-have-done",
        
          title: "我已经完成的事——Things I Have Done",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/things-i-have-done/";
          
        },
      },{id: "post-锥子之死-death-of-the-awl",
        
          title: "锥子之死——Death of the Awl",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/death-of-the-awl/";
          
        },
      },{id: "post-它们-他们-they-and-them",
        
          title: "它们，他们——They and Them",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/they-and-them/";
          
        },
      },{id: "post-秋夜云雨-clouds-and-rains-in-autumn-night",
        
          title: "秋夜云雨——Clouds and Rains in Autumn Night",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/clouds-and-rains-in-autumn-night/";
          
        },
      },{id: "post-乌云漫布-dark-clouds-spread",
        
          title: "乌云漫布——Dark Clouds Spread",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/dark-clouds-spread/";
          
        },
      },{id: "post-窗台外的向日葵花-the-sunflower-outside-the-windowsill",
        
          title: "窗台外的向日葵花——The Sunflower Outside the Windowsill",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/the-sunflower-outside-the-windowsill/";
          
        },
      },{id: "post-四季-four-seasons",
        
          title: "四季——Four Seasons",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/four-seasons/";
          
        },
      },{id: "post-尘土-尘垢-the-dust-the-dirt",
        
          title: "尘土、尘垢——The Dust, The Dirt",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/the-dust-the-dirt/";
          
        },
      },{id: "post-杨柳和风-the-willow-the-wind",
        
          title: "杨柳和风——The Willow, The Wind",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/the-willow-the-wind/";
          
        },
      },{id: "post-牛郎和织女-niulang-and-zhinv",
        
          title: "牛郎和织女——NiuLang and ZhiNv",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/niulang-and-zhinv/";
          
        },
      },{id: "post-佛说-the-buddha-said",
        
          title: "佛说——The Buddha Said",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/the-buddha-said/";
          
        },
      },{id: "post-前方的路-the-road-ahead",
        
          title: "前方的路——The Road Ahead",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/the-road-ahead/";
          
        },
      },{id: "post-等待死亡的过程-process-of-waiting-for-death",
        
          title: "等待死亡的过程——Process of Waiting for Death",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/process-of-waiting-for-death/";
          
        },
      },{id: "post-林芝-linzhi",
        
          title: "林芝——Linzhi",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/linzhi/";
          
        },
      },{id: "post-四月-april",
        
          title: "四月——April",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/april/";
          
        },
      },{id: "post-三月十二日-march-12",
        
          title: "三月十二日——March 12",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/march-12/";
          
        },
      },{id: "post-风-雨-the-wind-the-rain",
        
          title: "风、雨——The Wind, The Rain",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/the-wind-and-the-rain/";
          
        },
      },{id: "post-西藏-tibet",
        
          title: "西藏——Tibet",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/tibet/";
          
        },
      },{id: "post-布达拉宫-the-potala-palace",
        
          title: "布达拉宫——The Potala Palace",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/the-potala-palace/";
          
        },
      },{id: "post-夜半三更-late-at-night",
        
          title: "夜半三更——Late at Night",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/late-at-night/";
          
        },
      },{id: "post-白云-white-clouds",
        
          title: "白云——White Clouds",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/white-clouds/";
          
        },
      },{id: "post-谎言-lies",
        
          title: "谎言——Lies",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/lies/";
          
        },
      },{id: "post-与其-不如-instead-and-it-is-better",
        
          title: "与其、不如——Instead and it is Better",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/instead-and-it-is-better/";
          
        },
      },{id: "post-醉酒鬼-drunkards",
        
          title: "醉酒鬼——Drunkards",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/drunkards/";
          
        },
      },{id: "post-大雪与少年-heavy-snow-and-boy",
        
          title: "大雪与少年——Heavy Snow and Boy",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/heavy-snow-and-boy/";
          
        },
      },{id: "post-僵化的思想-rigid-thoughts",
        
          title: "僵化的思想——Rigid Thoughts",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/rigid-thoughts/";
          
        },
      },{id: "post-思想-thoughts",
        
          title: "思想——Thoughts",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/thoughts/";
          
        },
      },{id: "post-25岁时的爱情-love-at-25",
        
          title: "25岁时的爱情——Love at 25",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/love-at-25/";
          
        },
      },{id: "post-佛的心境-buddha-amp-8217-s-mind",
        
          title: "佛的心境——Buddha&amp;#8217;s Mind",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/buddhas-mind/";
          
        },
      },{id: "post-梦的集合-collection-of-dreams-1",
        
          title: "梦的集合——Collection of Dreams 1",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/collection-of-dreams-1/";
          
        },
      },{id: "post-梦醒-dream-over",
        
          title: "梦醒——Dream Over",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/dream-over/";
          
        },
      },{id: "post-煮稀饭-cooking-porridge",
        
          title: "煮稀饭——Cooking Porridge",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/cooking-porridge/";
          
        },
      },{id: "post-青春记忆-memory-of-youth",
        
          title: "青春记忆——Memory of Youth",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/memory-of-youth/";
          
        },
      },{id: "post-情感-emotions",
        
          title: "情感——Emotions",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/emotions/";
          
        },
      },{id: "post-诱惑与自我-temptations-and-oneself",
        
          title: "诱惑与自我——Temptations and Oneself",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/temptations-and-oneself/";
          
        },
      },{id: "post-唾沫星子-spittle",
        
          title: "唾沫星子——Spittle",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/spittle/";
          
        },
      },{id: "post-悲伤的眼泪-tears-of-sadness",
        
          title: "悲伤的眼泪——Tears of Sadness",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/tears-of-sadness/";
          
        },
      },{id: "post-红灯笼-red-lanterns",
        
          title: "红灯笼——Red Lanterns",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/red-lanterns/";
          
        },
      },{id: "post-杜撰-林则徐之死-apocryphal-death-of-lin-zexu",
        
          title: "杜撰，林则徐之死——Apocryphal Death of Lin Zexu",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/apocryphal-death-of-lin-zexu/";
          
        },
      },{id: "post-生活琐事-trivialities-of-life",
        
          title: "生活琐事——Trivialities of Life",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/trivialities-of-life/";
          
        },
      },{id: "post-寸头-buzz-cut",
        
          title: "寸头——Buzz Cut",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2014/buzz-cut/";
          
        },
      },{id: "post-梦的回响-echoes-of-dream",
        
          title: "梦的回响——Echoes of Dream",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2014/echoes-of-dream/";
          
        },
      },{id: "post-真的伤口-the-real-wound",
        
          title: "真的伤口——The Real Wound",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2014/the-real-wound/";
          
        },
      },{id: "post-黄昏-黎明-the-dusk-the-dawn",
        
          title: "黄昏、黎明——The Dusk, The Dawn",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2014/the-dusk-the-dawn/";
          
        },
      },{id: "post-毕业赠",
        
          title: "毕业赠",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2014/e6af95e4b89ae8b5a0/";
          
        },
      },{id: "post-唐宋后裔-祭",
        
          title: "唐宋后裔（祭）",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2013/e59490e5ae8be5908ee8a394efbc88e7a5adefbc89/";
          
        },
      },{id: "post-花香-fragrance-of-flowers",
        
          title: "花香——Fragrance of Flowers",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2012/fragrance-of-flowers/";
          
        },
      },{id: "post-夏夜-summer-nights",
        
          title: "夏夜——Summer Nights",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2012/summer-nights/";
          
        },
      },{id: "post-秋风独座-a-seat-alone-in-autumn-wind",
        
          title: "秋风独座——A Seat Alone in Autumn Wind",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2012/a-seat-alone-in-autumn-wind/";
          
        },
      },{id: "post-思念的温度-warmth-of-yearning",
        
          title: "思念的温度——Warmth of Yearning",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2012/warmth-of-yearning/";
          
        },
      },{id: "post-一种幸福-a-kind-of-happiness",
        
          title: "一种幸福——A Kind of Happiness",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2012/a-kind-of-happiness/";
          
        },
      },{id: "post-大街-big-street",
        
          title: "大街——Big Street",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2012/big-street/";
          
        },
      },{id: "post-静心-quiet-heart",
        
          title: "静心——Quiet Heart",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2012/quiet-heart/";
          
        },
      },{id: "post-玉泉-滴水岩-yuquan-dishuiyan",
        
          title: "玉泉-滴水岩——YuQuan DiShuiYan",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2012/yuquan-dishuiyan/";
          
        },
      },{id: "post-黑夜里的太阳-the-sun-in-the-nights",
        
          title: "黑夜里的太阳——The Sun in the Nights",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2012/the-sun-in-the-nights/";
          
        },
      },{id: "post-乐活的树子-funny-tree-2",
        
          title: "乐活的树子——Funny Tree 2",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2012/funny-tree-2/";
          
        },
      },{id: "post-乐活的树子-funny-tree-1",
        
          title: "乐活的树子——Funny Tree 1",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2012/funny-tree-1/";
          
        },
      },{id: "post-攀大-panzhihua-university",
        
          title: "攀大——Panzhihua University",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2012/panzhihua-university/";
          
        },
      },{id: "post-春日-days-of-spring",
        
          title: "春日——Days of Spring",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2012/days-of-spring/";
          
        },
      },{id: "post-神龟-divine-turtles",
        
          title: "神龟——Divine Turtles",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2012/divine-turtles/";
          
        },
      },{id: "post-鹰-eagles",
        
          title: "鹰——Eagles",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2011/eagles/";
          
        },
      },{id: "post-夜孤沉筒-fishing-alone-at-night",
        
          title: "夜孤沉筒——Fishing Alone at Night",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2011/fishing-alone-at-night/";
          
        },
      },{id: "post-微凉的风-cool-winds",
        
          title: "微凉的风——Cool Winds",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2011/cool-winds/";
          
        },
      },{id: "post-寂静的夜-silent-nights",
        
          title: "寂静的夜——Silent Nights",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2011/silent-nights/";
          
        },
      },{id: "post-茶园-tea-garden",
        
          title: "茶园——Tea Garden",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2011/tea-garden/";
          
        },
      },{id: "post-纯情梦想-pure-dreams",
        
          title: "纯情梦想——Pure Dreams",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2011/pure-dreams/";
          
        },
      },{id: "post-平静的心-peaceful-heart",
        
          title: "平静的心——Peaceful Heart",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2011/peaceful-heart/";
          
        },
      },{id: "post-视听与表象-audiovisual-and-appearance",
        
          title: "视听与表象——Audiovisual and Appearance",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2011/audiovisual-and-appearance/";
          
        },
      },{id: "post-羊皮古书-the-ancient-parchment",
        
          title: "羊皮古书——The Ancient Parchment",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2011/the-ancient-parchment/";
          
        },
      },{id: "post-凡星-ordinary-stars",
        
          title: "凡星——Ordinary Stars",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2010/ordinary-stars/";
          
        },
      },{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%31#%33%36%35%32%35.%64%61%79", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/100-Y", "_blank");
        },
      },{
        id: 'social-medium',
        title: 'Medium',
        section: 'Socials',
        handler: () => {
          window.open("https://medium.com/@36525.day", "_blank");
        },
      },{
        id: 'social-pinterest',
        title: 'Pinterest',
        section: 'Socials',
        handler: () => {
          window.open("https://www.pinterest.com/36525day", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];

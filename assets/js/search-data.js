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
      },{id: "post-被托管的世界-猪的乌托邦",
        
          title: "被托管的世界：猪的乌托邦",
        
        description: "完整描述，用于搜索引擎与社交平台预览，最长 160 字，可与 excerpt 一致",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/pigs-utopia/";
          
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

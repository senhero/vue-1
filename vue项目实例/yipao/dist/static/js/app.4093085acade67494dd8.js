webpackJsonp([0],[,,,,function(t,e,i){i(21);var a=i(0)(i(13),i(31),null,null);t.exports=a.exports},function(t,e,i){i(23);var a=i(0)(i(14),i(33),null,null);t.exports=a.exports},function(t,e,i){i(22);var a=i(0)(i(15),i(32),null,null);t.exports=a.exports},function(t,e,i){i(26);var a=i(0)(i(16),i(37),null,null);t.exports=a.exports},function(t,e,i){i(25);var a=i(0)(i(18),i(36),null,null);t.exports=a.exports},,,function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"swiper-slide",data:function(){return{slideClass:"swiper-slide"}},ready:function(){this.update()},mounted:function(){this.update(),this.$parent.options.slideClass&&(this.slideClass=this.$parent.options.slideClass)},updated:function(){this.update()},attached:function(){this.update()},methods:{update:function(){this.$parent&&this.$parent.swiper&&this.$parent.swiper.update&&(this.$parent.swiper.update(!0),this.$parent.options.loop&&this.$parent.swiper.reLoop())}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a="undefined"!=typeof window;a&&(window.Swiper=i(1),i(20)),e.default={name:"swiper",props:{options:{type:Object,default:function(){return{autoplay:3500}}}},data:function(){return{defaultSwiperClasses:{wrapperClass:"swiper-wrapper"}}},ready:function(){!this.swiper&&a&&(this.swiper=new Swiper(this.$el,this.options))},mounted:function(){var t=this,e=function(){if(!t.swiper&&a){delete t.options.notNextTick;var e=!1;for(var i in t.defaultSwiperClasses)t.defaultSwiperClasses.hasOwnProperty(i)&&t.options[i]&&(e=!0,t.defaultSwiperClasses[i]=t.options[i]);var s=function(){t.swiper=new Swiper(t.$el,t.options)};e?t.$nextTick(s):s()}};this.options.notNextTick?e():this.$nextTick(e)},updated:function(){this.swiper&&this.swiper.update()},beforeDestroy:function(){this.swiper&&(this.swiper.destroy(),delete this.swiper)}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(29),s=i.n(a);e.default={name:"app",data:function(){return{}},components:{"v-footer":s.a}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{columnData:{topImg:"./static/column/topImg.jpg",article:[{title:"最珍贵的补剂都是免费的",author:"石砚秀",time:"1周前",imgSrc:"./static/column/img01.png",content:"月初，我在微博说了个段子，结果被人抄过去当成真实事件在公众号里哗众取宠。充满正能量的跑步不应该和吸毒相提并论，所以段子只能是个段子，就算为了噱头也不能玷污跑步。更何况，跑步当然没有贵到和吸毒一样，最简单的一双跑鞋加一套运动衣就可以跑出门，不过也是有很多相关的衍生消费，自由选择因人而异呗    。例如补剂，挺受跑者关注的，当你还在纠结自己该不该吃蛋白粉、支链氨基酸什么的时候，"},{title:"手撕赞助商T恤教程 专治撞衫和尺码不服",author:"石砚秀",time:"2周前",imgSrc:"./static/column/img02.png",content:"这几天我们被马拉松赛的“统一服装”风波刷了屏，尽管秦皇岛马拉松和大连马拉松随后又表示“不对全程及半程马拉松参赛选手着装做硬性要求”，但是10k和迷你跑就活该被欺负了吗？这才是最娱乐化的项目耶，拖家带口变成活广告牌？！笔者不是喜欢妥协的人，但是如果真得被规定死了，我们能做些什么呢？　　别沮丧，搞一点点小怪吧，服装我们穿还不行，不"},{title:"你跑得不好是因为跑得太多",author:"石砚秀",time:"2周前",imgSrc:"./static/column/img03.png",content:"为什么我还是不能够跑出×××的成绩呢？这是很多跑者，尤其是开始参加马拉松赛后的跑者们的疑问。他们真得挺努力，几乎全年无休在训练，有明确的成绩目标，大大小小装备买了不少，认真做训练记录，朋友圈步数名列前茅，晒的跑量碾压众人，可惜仍然没有实现成绩上的突破。他们也很郁闷，产生各种疑问，难道是不够努力？要不要再多花些钱报个训练营？要不要再多花些时"},{title:"全马破4训练法之训练篇2 赛前3月的训练",author:"石砚秀",time:"1个月前",imgSrc:"./static/column/img04.png",content:"2.4   比赛3个月前   – 2个月前，目标：可以在125左右搞定15公里加速跑                接下来的3个月进入了最终的打磨阶段。刚开始5公里都跑不下来的你，通过9个月的训练，已经很能跑了。接下来需要提高警惕，注意伤痛。如果感觉身体某个地方有异样，或者觉得疲劳的时候，请调整训练计划，放弃做速度训练，可以通过LSD来恢复疲劳；如果特别累也可以选择休息。"},{title:"解决赛前迷惑，拒绝“在线等”",author:"石砚秀",time:"1个月前",imgSrc:"./static/column/img05.png",content:"阳春三月，大部分跑者将要迎来今年的第一场马拉松赛了。不管是新手还是老手，都可能会有一些疑虑，着急的情况下四处求助甚至焦急地“在线等”，希望以下的汇总对你有帮助——赛前一周减量？你也要有量可减 我们常听到“赛前减量”的说法，主要指跑量，马拉松赛前一周的训练总里程数应该减至30%，逐次减量。但"},{title:"全马破4之训练篇：打造可以破4的身体",author:"石砚秀",time:"1个月前",imgSrc:"./static/column/img06.png",content:"2. 训练篇我们大致以3个月为一个单位，把1年分成4个阶段来考虑训练。最后3个月更是至关重要，再更详细地分成4个小阶段。每段时期都制定有该达成的目标。2.1   比赛1年前– 9个月前，目标：打造可以慢跑10公里的身体最初的3个月给身体打基础至关重要。注意不要受伤，通过训练给身体确立坚实的有氧基础。大"},{title:"越野跑背包的挑选窍门",author:"石砚秀",time:"1个月前",imgSrc:"./static/column/img07.gif",content:"正在写关于如何挑选越野跑背包的文章，就看到同事写的关于软水壶的设计一统天下的文章，戳这里。里面有他在Ispo上感受的行业动态以及个人对于软水壶硬水壶的体验。　　我并不为软水壶一味叫好，回到正题，如何选择越野跑包？　　有部分读者企图从第一句就找到购买链接，抱歉这篇不是软文，你可能看完以后并不知道你要买具体哪一款，笔者是个和任何品牌无关的自由跑者，买过无数个包，转过无数个包，愿"},{title:"山地还是跑道，选择路面也是跑步的乐趣",author:"石砚秀",time:"1个月前",imgSrc:"./static/column/img08.jpg",content:"你的跑步日记上是否也经常写下“今天的跑步距离是10公里”呢？很多跑友平时都是在铺装的公路上累积跑步距离，可知在草地、土路等未铺装的道路上跑10公里感觉是完全不同的？跑步是不断重复“脚底接触路面⇔离开路面”的动作。越来越多的人掌握了不同跑鞋的使用，然而与此同时理解不同的跑步路面区别的人并不多。注意选择训练的路面，可以增强跑"},{title:"服用BCAA，加快疲劳恢复",author:"石砚秀",time:"1个月前",imgSrc:"./static/column/img09.png",content:"1. 训练→破坏；过度训练→疲劳堆积所谓过度训练主要指“疲劳堆积的状态”，换句话说，是“因为运动而被破坏的组织，来不及恢复的状态”。组织和内脏器官的新陈代谢，大约需要2个月左右才能全部更新完毕（随组织或内脏器官不同而时间有所不同）。在持续进行严格训练"}],article2:[{imgSrc:"./static/column/img11.jpg",title:"跑者用得上的微信小程序盘点",author:"石砚秀",time:"1个月前",content:"最近微信小程序瞬间火了起来，大家能够对此使用多久目前还有待时间来检验，不过一下有了很多实用的小程序到真是不假，对于跑者来说也有一些适合的小程序，今天特意在这里搜罗一下跑者们用得上的微信小程序，在微信搜索中输入相应的名称就能找到它们了。好天跑起来　　从2017年的第一周就开始了没有蓝天的日子，可把北京的跑者们简直憋坏了，每天查查空气质量成为了跑步前的必修课。比赛前看看当天的天"},{imgSrc:"./static/column/img12.jpg",title:"如何在岁末年初保持跑步习惯",author:"石砚秀",time:"1个月前",content:"岁末年初的忙碌中，如何灵活地管理跑步习惯，是保持、提高跑步实力的重要因素。特别是对于年初有比赛计划的跑友来说，岁末年初正是大约赛前半个月到2个月的集中备战期、十分重要。如何取得各种日程和累积跑量之间的平衡，本文与大家分享我的经验。■马拉松旅行这是一种预先计划好从起点到终点的路线、悠闲地跑跑走走到达终点的训练方法。途中也要包含等红绿灯、上厕所、在便利店补给等停下脚步的时刻。不妨跑"},{imgSrc:"./static/column/img13.jpg",title:"从心开始：我为什么不想跑极限越野了",author:"石砚秀",time:"1个月前",content:"如今跑圈，哪怕是个刚刚起步的跑者都知道极限马拉松了，常见新手跑者朋友圈打趣说要先定个小目标“撒哈拉沙漠马拉松、环勃朗峰、环富士山、巨人之旅”。　　从路跑到越野，似乎是顺路，有很多的理所当然：路跑多无聊啊，越野更有趣啊，更接近自然，更炫酷，更挑战啊，发朋友圈更多赞，买装备拼高端更显逼格，blabla……　　我当然也知道，所以"},{imgSrc:"./static/column/img14.jpg",title:"2016年末回顾 XJBP在XJBL的比赛上的跑者们",author:"石砚秀",time:"1个月前",content:"2016年印象最深的就是XJB如何一词了，最开始甚至响彻了工体，随后也可轻松应用于多个领域，用在总结这一年的跑圈也再合适不过了，反正就是像极了郭德纲《济公传》相声里的一位配角：“胡来”。XJBP的跑者纵欲无度　　这一年我们跑的挺快的，也绝对跑的挺忙的，以往难得寻摸到可以大型比赛的我们，现在打开报名网站简直变成了随便挑随便选，一年12个月月月有，一月四周周周有，周末两天天天有"},{imgSrc:"./static/column/img15.jpg",title:"越野比赛中的攻略技巧",author:"石砚秀",time:"1个月前",content:"4. 比赛当天的时间安排 可以想象到比赛当天的拥挤状况，需要提前做好各种准备。这里罗列出一些重要的事项，供大家参考。有的比赛还可以提前把行李寄存在中途的补给站使用。越是大型的比赛，来观战的人也越多，大家都会紧张的，不用太在意。换个角度说，起跑前的适度的紧张感也是必要的。越野跑比赛的时间跨度"},{imgSrc:"./static/column/img16.jpg",title:"越野跑的强化训练：周间路跑计划",author:"石砚秀",time:"1个月前",content:"11.   训练计划模板　　针对你的越野比赛，来设置相应的路跑训练期间和越野跑训练期间，并制定相应的训练计划，是提高能力的捷径。请制定适合自己的训练计划，并实践它。11.1   首先要有路跑的训练做基础　　越野跑也是跑步，所以你在进入严肃的越野训练前，首先你要有一定的路跑训练基础。路跑训练可以参考本章的第3节http://www.erun360.com/blog/2010893"},{imgSrc:"./static/column/img17.jpg",title:"听说你跑步坚持不下来？",author:"石砚秀",time:"1个月前",content:"很多人说，跑步是单调、乏味的运动，跑步的人很孤独，“怎么坚持下来啊？”这是新手常常想问的问题。也有不少新人没坚持下来，没瘦一斤就放弃了。随着天气转冷，流行性懒癌泛滥，跑步成了更艰难的事情。　　而你如果问一个老手是如何坚持跑步的，他大概会惊讶的反问，“啊？这还用坚持？不就是和吃饭喝水一样的吗？这就是习惯了的生活啊！”　　没错，习"},{imgSrc:"./static/column/img18.jpg",title:"改变尼泊尔妇女的命运 Mira Rai用越野跑",author:"石砚秀",time:"1个月前",content:"在两年前，Mira Rai去加德满都近郊的西瓦普利纳嘉郡（Shivapuri Nagarjun）国家公园散步。她在山路上走的飞快，恰好碰到正在跑步的一群人，Mira不知怎的竟然鬼使神差的跟了上去，还跟他们搭上了话，大家对她很和善，有说有笑的样子。他们告诉Mira几天后回来，她照着这些人的话回来了，却发现这里正在举行一场跑步比赛——加德满都West Val"},{imgSrc:"./static/column/img19.jpg",title:"越野训练计划制定秘诀 ",author:"石砚秀",time:"1个月前",content:"10.制定长期训练计划的思路 每个人都有不同的比赛目标，比如完赛、破自己的记录等，为了实现这些目标，而进行各种训练。可惜的是，人类的身体不可能全年一直保持在状态最好的样子，那么也就很难保证你在参加比赛的时候状态最好。不是谁都能达成自己的目标。不管再怎么刻苦训练，如果不能达到预期的结果，总会进入低迷状态。经常听到有"},{imgSrc:"./static/column/img20.jpg",title:"垂直爬升怎么玩儿？",author:"石砚秀",time:"1个月前",content:"“垂直爬升”（Vertical Kilometre）挑战，近年在欧洲越野圈如火如荼，这次在霞慕尼UTMB与欧洲选手的切磋中，南非越野跑者Ryan Sandes对于VK FKT这种玩法的兴趣也越来越浓厚了，他在家乡开普敦的桌山（Table Mountain）也来了一场VK FKT。Ryan Sandes 在桌山说起对VK的了解，还是几年前在Salomon"}],ad:[{title:"【益秒杀】The North Face/北面 通用吸湿UPF50防晒臂套黑色",oldPrice:159,account:7.5,imgSrc:"./static/column/ad01.jpg"},{title:"【益秒杀】TheNorthFace北面春夏新品男款轻便防风防泼水短袖皮肤衣",oldPrice:808.2,account:9,imgSrc:"./static/column/ad03.jpg"},{title:"BUFF 国家地理系列 抓绒魔术头巾",oldPrice:349,account:8.75,imgSrc:"./static/column/ad02.jpg"}]},show_more_flag:!1}},methods:{handler:function(t){console.log("this component is showing")},show_more:function(){this.show_more_flag=!0}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"carrousel",data:function(){return{enrollData:{errno:0,tabImg:["./static/enroll/tab01.jpg","./static/enroll/tab02.jpg","./static/enroll/tab03.jpg"],chineseMatch:[{href:"",imgSrc:"./static/enroll/c_enroll-1.jpg",title:"2017台北万人城市路跑",time:"比赛时间:2017/2/19 6:00:00"},{href:"",imgSrc:"./static/enroll/c_enroll-2.png",title:"2017上海樱花节首届女子10KM路跑",time:"比赛时间：2017/3/12 12:00:00"},{href:"",imgSrc:"./static/enroll/c_enroll-3.jpg",title:"2017宁波山地马拉松赛",time:"比赛时间：2017/4/16 12:00:00"},{href:"",imgSrc:"./static/enroll/c_enroll-4.jpg",title:"HST帝都100公里越野挑战赛",time:"比赛时间：2017/4/2 12:00:00"},{href:"",imgSrc:"./static/enroll/c_enroll-5.jpg",title:"2017哈尼梯田超级跑",time:"比赛时间：2017/3/25 12:00:00"},{href:"",imgSrc:"./static/enroll/c_enroll-6.jpg",title:"2017上海Honey Run",time:"比赛时间：2017/2/12 12:00:00"}],internationalMatch:[{href:"",imgSrc:"./static/enroll/i_enroll-1.jpg",title:"2017年首尔马拉松",time:"比赛时间：2017/3/19 8:00:00"},{href:"",imgSrc:"./static/enroll/i_enroll-2.jpg",title:"2017年波尔多红酒马拉松",time:"比赛时间：2017/9/9 8:00:00"},{href:"",imgSrc:"./static/enroll/i_enroll-3.jpg",title:"2017年火山马拉松",time:"比赛时间：2017/11/13 8:00:00"},{href:"",imgSrc:"./static/enroll/i_enroll-4.png",title:"2017年布拉格马拉松益跑跑团",time:"比赛时间：2017/5/7 9:00:00"},{href:"",imgSrc:"./static/enroll/i_enroll-5.jpg",title:"2017年第40届芝加哥马拉松",time:"比赛时间：2017/10/8 7:00:00"},{href:"",imgSrc:"./static/enroll/i_enroll-6.jpg",title:"2017年海军陆战队马拉松",time:"比赛时间：2017/10/22 6:00:00"}],hotMatch:[{imgSrc:"./static/enroll/hot-1.jpg",title:"2017Jeep极致酷跑4X4",time:"比赛时间：2017/5/13"},{imgSrc:"./static/enroll/hot-2.jpg",title:"2017唐山湾国际旅游岛·东方园林海滩半程马拉松",time:"比赛时间：2017/7/23"},{imgSrc:"./static/enroll/hot-3.jpg",title:"渔歌踏浪 心海连江 I 黄岐村跑！",time:"比赛时间：2017/4/16"},{imgSrc:"./static/enroll/hot-4.jpg",title:"2017中国黄山·歙县新安江山水画廊国际马拉松",time:"比赛时间：2017/5/20"},{imgSrc:"./static/enroll/hot-5.jpg",title:"2017享跑就跑越野赛-暨北京黑夜越野挑战赛",time:"比赛时间：2017/4/2"},{imgSrc:"./static/enroll/hot-6.jpg",title:"2017年北海道马拉松",time:"比赛时间：2017/8/27"}]},proFlag:!0,swiperOption:{autoplay:5e3,initialSlide:0,loop:!0,pagination:".swiper-pagination",paginationClickable:!0,notNextTick:!0,onTransitionStart:function(t){console.log(t)}}}},methods:{proSreach:function(){this.proFlag=!this.proFlag}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{equipData:{flash:[{imageSrc:"./static/equip/equip_flash_1.jpg",imageTitle:"爱普生RUNSENSE SF-850厦马实测： 黑科技极简跑表的正确打开方式"},{imageSrc:"./static/equip/equip_flash_2.jpg",imageTitle:"newton牛顿跑鞋测评"},{imageSrc:"./static/equip/equip_flash_3.jpg",imageTitle:"【公布众测名单】＃不软的真众测＃第十期 Podoon智能鞋垫"},{imageSrc:"./static/equip/equip_flash_4.jpg",imageTitle:"加速恢复，减缓疲劳——Skins RY400 使用测评"},{imageSrc:"./static/equip/equip_flash_5.jpg",imageTitle:"压缩与速干如何一举兼得？LP 激能压缩AIR系列长裤评测"},{imageSrc:"./static/equip/equip_flash_6.jpg",imageTitle:"明明可以靠脸吃饭，还偏偏那么有实力～疾风家族Vazee 2090开箱体验"}],product:[{imageSrc:"./static/equip/equip_left_2.png",classify:"跑鞋",title:"Boost（爆米花）运动垫评测团招募",from:"新闻中心",time:"5小时前",text:"想快速改变自己跑鞋的中底性能？不用换新鞋，益跑评测团给你机会，本次评测团招募为大家带来Boost（爆米花）运动垫，它是由无数个弹性十足、重量很轻的TPU发泡小球集结在一起后，体积膨胀5-8倍，重量超轻且能量十足，感兴趣的朋友快来报名体验吧。Boost（爆米花）运动垫评测团活动福利：1、共10双Boost（爆米花）运动垫的评测体验机会。2、所有参与者均有机会获得私人订制3D雕"},{imageSrc:"./static/equip/equip_left_3.png",classify:"越野装备",title:"一大波新品来袭，折扣+福利更是诚意笔芯?",from:"益跑拼团.积分",time:"一天前",text:"三月不减肥，四月徒伤悲，五月路人雷，六月男友飞。整个冬天积攒的肉肉，是时候该做个了结了。春暖花开，草长莺飞，春季实在是户外野练的好时节。阳光，蓝天，微风，不该辜负这样的好时光~新旅程，新赛季，益跑拼团为你添了新装备跑鞋，集合了各项炸天的新科技，让你轻松畅跑无伤，折扣+福利更是对你诚意笔芯♥~TheNorthFace北面2017越野远足系列由XtraFoam驱动的E"},{imageSrc:"./static/equip/equip_left_4.png",classify:"跑鞋",title:"爱的N次方——李宁超轻14代跑鞋评测",from:"维稳",time:"2天前",text:"爱的N次方——李宁超轻14代跑鞋评测 科技的发展，让最新的材料技术与跑鞋的设计完美融合。历经13年演变，李宁超轻系列跑鞋精益求精，并不断地创造出那些让我们跑的更快、更稳定的经典跑鞋。超轻系列跑鞋以其外表的“轻、盈、酷、炫”，展示其灵魂上的特立独行，使我不禁对李宁品牌肃然起敬。 李宁超轻14代跑鞋来了，伴随它而来的还有"},{imageSrc:"./static/equip/equip_left_5.png",classify:"跑鞋",title:"两个人的“翻岛爱” 你选择基情还是爱情？",from:"新闻中心",time:"5天前",text:"你完成的一个人的马拉松太多，两个人马拉松甚至没有，2017 Jeep极致酷跑给你这个机会，和基友或恋人一起，携手每一步来完成42公里的旅程，途中翻越江南少有山海云雾的美景，饱览最有好景莫负的舟山朱家尖，伴着一路繁花完成一次与众不同的“翻岛爱”之旅。　　42公里环岛马拉松是本次比赛中的新增的双人项目，将会有150组选手参赛，比赛形式为团队赛，不限性别，"},{imageSrc:"./static/equip/equip_left_6.png",classify:"跑鞋",title:"必迈 Mile 42K 专业马拉松跑鞋评测",from:"疯狂的芭蕾",time:"一周前",text:"零、 写在最前面：相信看到这篇文章的有跑步小白，也有跑步精英，有对必迈一无所知的，也有必迈的真爱粉。在这双Mile42K诞生之前，所有的必迈粉丝们都迫不及待的想要见到这双跑鞋。因为它真的让我们等太久了，两年的历练，让Mile这个系列在磨练中不断的成长，42K究竟能给我们带来怎样的惊喜呢？ 一、 前言关于必迈：必迈，是一群爱跑步的人，聚在一个最合适跑步的公园里，为给跑者提供更"},{imageSrc:"./static/equip/equip_left_7.png",classify:"越野装备",title:"收藏丨一个老驴的户外背包装包技巧！",from:"8264",time:"一周前",text:"户外出行搭理背包是一门技巧和学问，千万不可小看它哦，如果背包装的巧装的好，不仅可以让你的物品能全部容纳，在你使用时方便取出，还可以减轻背包在你身上的压力，背得舒服才能走得愉快。如此看来不学一学填装背包是不行的啊。　　背包装填如果有问题不仅会影响使用的方便性和舒适性，还会造成重心偏移和背包损坏。因此，装填并非将所有物品全扔入背包，而是要背的舒服，走的"},{imageSrc:"./static/equip/equip_left_8.png",classify:"配件",title:"稳定你的膝盖│迈克达威髌骨带使用评测",from:"鼻涕龙",time:"一周前",text:"一、髌骨带的作用膝关节既是一个在运动中极其重要的部位，同时又是一个比较脆弱容易受伤的部位，当你体重每增长一公斤，你的膝盖部位就得承受六倍的重量。例如，你体重增长五公斤，你的膝盖就得多负担三十公斤！我们首先简单看一下膝关节的构造：膝关节是上下腿骨交汇的地方，中间有半月板，前面有髌骨，髌骨是由两条肌肉拉伸，悬浮在腿骨交汇处之前，非常容易滑动。由于跑步或骑车运动给膝盖施加了过多的压力"},{imageSrc:"./static/equip/equip_left_9.jpg",classify:"越野装备",title:"户外救援：急救包里配什么",from:"8264",time:"一周前",text:"急救包配置理念： 第一条：你不是在医院没有大型设备，你配备的所有物品只是为了以备万一使用，不要妄想在野外进行大型抢救，如果出现危及生命的情况你的任务是维持病人生命体征等待救援人员来到。 第二条：定期清理医药包，不要携带过期药品，你是在拿大家的生命开玩笑。 第三条：尽量携带小型化的设备，单独"},{imageSrc:"./static/equip/equip_left_10.png",classify:"跑鞋",title:"能量与轻量可以兼得 安踏能量环跑鞋评测",from:"德林",time:"一周前",text:"拿到这双鞋子的时候，瞬间便被看到的同事问说：“这是那个动能环吧？”可见这双安踏能量环跑鞋的识别度有多高，标志性的能量环、飞织所勾勒出独特外观，可以再一开始就能引得很多人侧目，下面就来看看这双鞋的具体细节吧。清新脱俗动能十足的外观　　本次拿到的安踏能量环跑鞋为纯白色，上手后的第一印象很有时尚感，标志性的能量环中底很是抢人眼球。轻量化的飞织鞋面是本款产品"}],buy:[{title:"【益秒杀】THE NORTH FACE Martin Wing 10 跑步背包+《越跑越野100-332公里的进击之路》",mode:"积分抵扣",price:"699.00",discount:"7.50",imageSrc:"./static/equip/equip_right_1.png",href:"javascript:;"},{title:"【益秒杀】Dr.Shoe 挪威进口胶囊除臭干燥剂去异味除湿防潮清新2粒装",mode:"积分抵扣",price:"45.00",discount:"6.00",imageSrc:"./static/equip/equip_right_2.png",href:"javascript:;"},{title:"【益秒杀】GU Energy Gel 能量胶 跑步能量补给 现场购买或自取; 线上购买满7个包邮",mode:"限时秒杀",price:"9.8",discount:"7.54",imageSrc:"./static/equip/equip_right_3.png",href:"javascript:;"}]},swiperOption:{autoplay:5e3,loop:!0,prevButton:".swiper-button-prev",nextButton:".swiper-button-next",onTransitionStart:function(t){console.log(t)}}}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{n:0,toTopFlag:!1,indexData:{errno:0,side2ImgSrc:["./static/index/index_apply.png","./static/index/index_date.png","./static/index/index_store.png","./static/index/index_shoe.png","./static/index/index_box.png"],hotKey:[{href:"javascript:;",title:"新手"},{href:"javascript:;",title:"减肥"},{href:"javascript:;",title:"马拉松"}],tagBar:[{href:"javascript:;",imgSrc:"./static/index/index_banner1.jpg",title:"2017Jeep极致酷跑4X4全地形环岛接力赛"},{href:"javascript:;",imgSrc:"./static/index/index_banner2.jpg",title:"国内首个运动社交赛事“企鹅派对跑”5月启动"},{href:"javascript:;",imgSrc:"./static/index/index_banner3.jpg",title:"智美系｜2017长春国际马拉松，首创“幸福跑游”新概念"},{href:"javascript:;",imgSrc:"./static/index/index_banner4.jpg",title:"手撕赞助商T恤教程 专治撞衫和尺码不服"},{href:"javascript:;",imgSrc:"./static/index/index_banner5.jpg",title:"近万中外跑者畅跑花海云崖， 2017查济油菜花马拉松浪漫开跑"},{href:"javascript:;",imgSrc:"./static/index/index_banner6.jpg",title:"2017淮安金湖国际半程马拉松"}],article:[{href:"javascript:;",src:"./static/index/index_side1.jpg",article_bottom:[{href:"javascript:;",src:"./static/index/index_side1_p1.png",tag:"开始跑步",title:"跑者莫怕风吹日晒 6种食物护肤超化妆品",author:"网易跑步",time:"7小时前",content:"由于经常外出跑步，跑者们的皮肤难免会受到风吹日晒。论及对皮肤的保护，不管什么的化妆品，实际上都不如食物有效。六位皮肤科医生推荐了六种食物，它们能促进皮肤吸收水分，对抗皱纹色素沉着过度，甚至能够去除湿疹和牛皮癣。   鳄梨美国明尼苏达大学临床医学院的皮肤学教授查尔斯·克拉奇菲尔德推荐多食用鳄梨，“我每周至少吃一颗鳄梨。它们能..."}]},{href:"javascript:;",src:"./static/index/index_side2.jpg",article_bottom:[{href:"javascript:;",src:"./static/index/index_side2_p1.png",tag:"开始跑步",title:"跑者难以完成比赛怎么办？",author:"搜狐跑步",time:"9小时前",content:"没有什么比在一项跑步比赛当中没有完成比赛更让人心痛的了，谁也不希望在比赛结束之后看到自己的名字后面出现“DNF（没有完成比赛的首字母缩略词）”这几个字母。加拿大精英跑步运动员莱斯利-塞克斯顿经验丰富，他就如何最佳地避免DNF给大家提出了几点建议。　　被问及人们可能的不能完成比赛的原因，莱斯利-塞克斯顿表示：“我讨..."},{href:"javascript:;",src:"./static/index/index_side2_p2.gif",tag:"开始跑步",title:"告别厌跑的最简单方法 无外乎花点钱",author:"德龄",time:"10小时前",content:"每个人都有厌跑的时候，面对这个问题，可以咬牙坚持跑下去，熬到苦尽甘来，但其实如果你想花点钱的话，却没准能收获事半功倍的效果，这份钱可多可少，只要花对地方，绝对能让你对跑步再度瞬间充满热情，告别厌跑期。花点钱买个新装备　　买个自己喜欢的新装备，或是心仪已久的产品，或是蕴含全新概念的高科技，然后你就很容易的抱着试试看的心理重新踏上马路。由于穿了新装备，自然想检验下它的实力所在，"}]},{href:"javascript:;",src:"./static/index/index_side3.jpg",article_bottom:[{href:"javascript:;",src:"./static/index/index_side3_p1.png",tag:"越野赛事",title:"『读懂UTWT』中国越野跑参赛者数据（1）！",author:"V越野刚子",time:"13小时前",content:"你很勇敢！有货 ｜有趣｜ 有胆关注这个不一样的越野微信号：V越野刚子（ ID：chengang0902）Competition tour map 2017作者 | V越野刚子时间 | 2017.4.9读懂UTWT（国际越野跑巡回赛）大家好，我是V越野刚子，今天陆续给大家更新推送关于UTWT的介绍，我希望通过本公众号持续的更新维护，能让中国一小部分越野爱好者，能了解UTWT，并有..."},{href:"javascript:;",src:"./static/index/index_side3_p2.png",tag:"开始跑步",title:"跑步欲望不强烈？ 或是这6个坏习惯所致",author:"网易跑步",time:"13小时前",content:"跑者跑步的欲望并不是一直都能保持的像当初那样强烈，总会有一些原因会让跑者偶尔不想走出家门。下面的这6个坏习惯或许就是其中的原因之一。不吃早饭早晨起床后，跑者或许觉得不饿，或许很忙，于是就放弃了吃早餐。然而，有研究发现，吃过早餐的跑者外出跑步的意愿会更加强烈。早餐应该以蛋白质和健康脂肪为主，能够为跑步提供充分的能量。沉迷手机跑者们每天分给跑步的时间本..."},{href:"javascript:;",src:"./static/index/index_side3_p3.gif",tag:"跑的更快",title:"跑的更快的方法",author:"简爱跑步营",time:"13小时前",content:"设定一个比赛目标去训练是对时间的一种承诺。作为跑者，每天置身于里程、工作、家庭和朋友之间，没有很多空闲时间留给其它事情。但专家认为，只需在你的日常生活中额外增加一个10分钟的小环节，就可以让你的跑步训练更健康、更成功。               2016里约奥运障碍赛选手Colleen Quigley说，“没有人喜欢受伤，但有几件能够，"}]},{href:"javascript:;",src:"./static/index/index_side4.jpg",article_bottom:[{href:"javascript:;",src:"./static/index/index_side4_p1.png",tag:"越野装备",title:"一大波新品来袭，折扣+福利更是诚意笔芯?",author:"益跑拼团·积分",time:"15小时前",content:"三月不减肥，四月徒伤悲，五月路人雷，六月男友飞。整个冬天积攒的肉肉，是时候该做个了结了。春暖花开，草长莺飞，春季实在是户外野练的好时节。阳光，蓝天，微风，不该辜负这样的好时光~新旅程，新赛季，益跑拼团为你添了新装备跑鞋，集合了各项炸天的新科技，让你轻松畅跑无伤，折扣+福利更是对你诚意笔芯♥~TheNorthFace北面2017越野远足系列由XtraFoam驱动的E"},{href:"javascript:;",src:"./static/index/index_side4_p2.png",tag:"健康恢复",title:"大部分人必须了解的抗痘指南",author:"林烁",time:"1天前",content:"明明就过了青春期怎么还有一堆青春痘呢？这些三不五时就冒出来的小痘子要怎么拿掉？看看从食物，药物机理如何解决这个问题吧1    痘痘的致病机理痘痘，学名寻常性痤疮(acne vulgaris)，是由于皮脂分泌过多、毛囊开口角化异常，导致毛囊被过多皮脂堵塞；同时，毛囊附近的痤疮丙酸杆菌(Propionibacterium acnes) 过度滋生，造成毛囊感染，红肿，发炎，痘痘由此产"},{href:"javascript:;",src:"./static/index/index_side4_p3.png",tag:"跑步人生",title:"胖人也能跑得快！美国300斤橄榄球选手跑接力",author:"搜狐跑步",time:"1天前",content:"如果你认为瘦就意味着跑得快，一个橄榄球运动员凯尔德-托马斯可能会挑战你的既有认知。　　这位来自于巴吞鲁日南方大学实验室学院的进攻内锋体重达到了330磅（约合299.37斤），但是最近他参加4x100米接力跑步比赛的视频火遍了网络，成为了不少人茶余饭后的热点话题。　　凯尔德-托马斯的身高达到了6英尺4英寸（约合193公分），体重达到了330磅（约合2"},{href:"javascript:;",src:"./static/index/index_side4_p4.png",tag:"健康恢复",title:"跑步了也拉伸了，但小腿仍然酸痛？",author:"林烁",time:"2天前",content:"很多人有在问这个问题，就是我跑步健身了之后进行小腿部的牵拉，但是小腿依旧出现酸痛且硬邦邦的情况。牵拉的方法不对牵拉小腿的方法有非常多种，如果你牵拉了之后，还是发现踝关节的活动度依旧没有改善。那么可能就是你牵拉的手段不对了。踝关节活动度测试选择一个坐位，双腿伸直。进行勾脚尖和垫脚背。查看下，你的踝关节（脚踝），两边脚的活动度分别是怎么样的。但你发现足踝的活动度并不是那么的高，那么"},{href:"javascript:;",src:"./static/index/index_side4_p5.png",tag:"跑步人生",title:"心脏病医生坚持跑4年 血压胆固醇变正常",author:"网易跑步",time:"2天前",content:"来自美国俄亥俄州的心脏病医生哈维·哈恩并不是一位特别肥胖的人，但是他曾经出现血压高胆固醇高的状况。在坚持了4年跑步之后，哈恩已经不用再依赖药物来控制血压和胆固醇了。               哈恩从来没认为过自己体重超标或者身体状况不佳，直到有一次左膝盖的半月板撕裂。“自从大学毕业之后，我的体重增加了36斤，以前我每周有"},{href:"javascript:;",src:"./static/index/index_side4_p6.png",tag:"跑的更快",title:"纹身竟会影响跑步能力？ 专家：影响热量储备",author:"搜狐跑步",time:"2天前",content:"据调查，美国有4500人至少有一个纹身，很多人以此为美，认为纹身是时尚，但是来自于美国密歇根州的阿尔玛学院研究人员最近进行的一项研究显示，纹身可能会对于跑步运动产生影响。　　研究发现，纹身皮肤比未装饰的皮肤产生较少但是咸度更高的汗液，理论上，这可能会导致跑步者出现问题，因为较低的汗液速率可能导致更高的核心温度，而具有较高钠浓度的汗液可能更容易导致电"},{href:"javascript:;",src:"./static/index/index_side4_p7.png",tag:"开始跑步",title:"跑步欲望不强烈？ 或是这6个坏习惯所致",author:"网易跑步",time:"3天前",content:"跑者跑步的欲望并不是一直都能保持的像当初那样强烈，总会有一些原因会让跑者偶尔不想走出家门。下面的这6个坏习惯或许就是其中的原因之一。不吃早饭早晨起床后，跑者或许觉得不饿，或许很忙，于是就放弃了吃早餐。然而，有研究发现，吃过早餐的跑者外出跑步的意愿会更加强烈。早餐应该以蛋白质和健康脂肪为主，能够为跑步提供充分的能量。沉迷手机跑者们每天分给跑步的时间本..."}]}],rightAd1:[{href:"javascript:;",imgSrc:"./static/index/index-content2-1.jpg"}],rightAd2:[{href:"javascript:;",title:"【益秒杀】Mizuno美津浓 Tatting Top男款 运动外套 轻量梭织上衣 柠檬绿",tag:"积分抵扣",price:478.5,acount:7.5,imgSrc:"./static/index/index-content2-2.png"},{href:"javascript:;",title:"【益秒杀】Mizuno美津浓 WAVE RIDER 20 耐磨透气男子跑步鞋  深蓝/银/红",tag:"积分抵扣",price:763.3,acount:8.5,imgSrc:"./static/index/index-content2-3.png"},{href:"javascript:;",title:"【益秒杀】TheNorthFace 北面男款 跑鞋 ULTRA ENDURANCE蓝色/绿色",tag:"积分抵扣",price:729.5,acount:6.09,imgSrc:"./static/index/index-content2-4.png"}]}}},methods:{toTop:function(){document.body.scrollTop=0,document.documentElement.scrollTop=0},tab:function(t){this.n=t,this.go()},go:function(){for(var t=0;t<this.$refs.aImg.length;t++)this.$refs.aEm[t].style.bottom="-50px",this.$refs.aP[t].style.opacity="0.4",t<=this.n?(this.$refs.aImg[t].style.left=96*t+"px",this.$refs.aEm[this.n].style.bottom="0",this.$refs.aP[this.n].style.opacity="0"):(this.$refs.aImg[t].style.left=1200-96*(this.$refs.aImg.length-t)+"px",this.$refs.aEm[this.n].style.bottom="0",this.$refs.aP[this.n].style.opacity="0")},handleScroll:function(){this.toTopFlag=window.scrollY>0}},mounted:function(){for(var t=1;t<this.$refs.aImg.length;t++)this.$refs.aImg[t].style.left=1200-96*(this.$refs.aImg.length-t)+"px";var e=this;setInterval(function(){e.n++,e.n==e.$refs.aImg.length&&(e.n=0),e.go()},3e3),window.addEventListener("scroll",this.handleScroll)}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(10),s=i(4),r=i.n(s),n=i(9),c=i(8),l=i.n(c),o=i(6),p=i.n(o),_=i(7),v=i.n(_),u=i(5),m=i.n(u),f=i(2),g=i.n(f),d=i(3),h=i.n(d);a.a.use(g.a),a.a.use(h.a,{preLoad:1.3,loading:"../static/loading.gif",attempt:1}),a.a.use(n.a);var x=[{path:"/",redirect:"/index"},{path:"/index",component:l.a},{path:"/enroll",component:p.a},{path:"/equip",component:v.a},{path:"/column",component:m.a}],S=new n.a({linkActiveClass:"active",routes:x});new a.a({el:"#app",router:S,render:function(t){return t(r.a)}})},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e,i){var a=i(0)(i(11),i(35),null,null);t.exports=a.exports},function(t,e,i){var a=i(0)(i(12),i(30),null,null);t.exports=a.exports},function(t,e,i){i(24);var a=i(0)(i(17),i(34),null,null);t.exports=a.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"swiper-container"},[t._t("parallax-bg"),t._v(" "),i("div",{class:t.defaultSwiperClasses.wrapperClass},[t._t("default")],2),t._v(" "),t._t("pagination"),t._v(" "),t._t("button-prev"),t._v(" "),t._t("button-next"),t._v(" "),t._t("scrollbar")],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("div",{staticClass:"inner"},[i("nav",{staticClass:"nav"},[i("div",{staticClass:"logo"}),t._v(" "),i("div",{staticClass:"item"},[i("router-link",{staticClass:"title",attrs:{to:"/index"}},[t._v("首页")])],1),t._v(" "),i("div",{staticClass:"item"},[i("router-link",{staticClass:"title",attrs:{to:"/enroll"}},[t._v("赛事报名")])],1),t._v(" "),i("div",{staticClass:"item"},[i("router-link",{staticClass:"title",attrs:{to:"/equip"}},[t._v("跑步装备")])],1),t._v(" "),i("div",{staticClass:"item"},[i("router-link",{staticClass:"title",attrs:{to:"/column"}},[t._v("益跑专栏")])],1)]),t._v(" "),i("keep-alive",[i("router-view")],1),t._v(" "),i("v-footer")],1)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"enroll"},[i("div",{staticClass:"swiper-wrraper"},[i("swiper",{ref:"mySwiper",attrs:{options:t.swiperOption}},[i("swiper-slide",[i("img",{attrs:{src:t.enrollData.tabImg[0]}})]),t._v(" "),i("swiper-slide",[i("img",{attrs:{src:t.enrollData.tabImg[1]}})]),t._v(" "),i("swiper-slide",[i("img",{attrs:{src:t.enrollData.tabImg[2]}})]),t._v(" "),i("div",{staticClass:"swiper-pagination",slot:"pagination"})],1)],1),t._v(" "),i("div",{staticClass:"screach-wrapper"},[i("div",{staticClass:"top_content"},[i("span",{staticClass:"title"},[t._v("赛事搜索")]),t._v(" "),i("input",{staticClass:"text",attrs:{type:"text",placeholder:"请输入赛事名称"}}),t._v(" "),i("div",{staticClass:"button"},[t._v("搜索")]),t._v(" "),i("span",{staticClass:"pro",on:{click:t.proSreach}},[t._v("高级搜索")])]),t._v(" "),i("transition",{attrs:{name:"slow"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.proFlag,expression:"proFlag"}],staticClass:"bottom-content"},[i("p",{staticClass:"area"},[t._v("\n          地区："),i("span",{staticClass:"active"},[t._v("全部")]),i("span",[t._v("国内")]),i("span",[t._v("国外")])]),t._v(" "),i("p",{staticClass:"time"},[t._v("\n          时间："),i("span",{staticClass:"active"},[t._v("全部")]),i("span",[t._v("最近一个月")]),i("span",[t._v("1-3个月")]),i("span",[t._v("3-6个月")]),i("span",[t._v("已结束赛事")])]),t._v(" "),i("p",{staticClass:"type"},[t._v("\n          类型："),i("span",{staticClass:"active"},[t._v("全部")]),i("span",[t._v("超级马拉松")]),i("span",[t._v("全程马拉松")]),i("span",[t._v("半程马拉松")]),i("span",[t._v("路跑")]),i("span",[t._v("越野跑")]),i("span",[t._v("其他")])])])])],1),t._v(" "),i("div",{staticClass:"chineseMatch"},[t._m(0),t._v(" "),i("ul",{staticClass:"clearfix"},t._l(t.enrollData.chineseMatch,function(e){return i("li",{staticClass:"fl"},[i("a",{staticClass:"a1",attrs:{href:e.href}},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.imgSrc,expression:"v.imgSrc"}]})]),t._v(" "),i("a",{staticClass:"a2",attrs:{href:e.href}},[t._v(t._s(e.title))]),t._v(" "),i("p",[t._v(t._s(e.time))]),t._v(" "),i("a",{staticClass:"a3",attrs:{href:e.href}},[t._v("立即报名")])])}))]),t._v(" "),i("div",{staticClass:"internationalMatch"},[t._m(1),t._v(" "),i("ul",{staticClass:"clearfix"},t._l(t.enrollData.internationalMatch,function(e){return i("li",{staticClass:"fl"},[i("a",{staticClass:"a1",attrs:{href:e.href}},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.imgSrc,expression:"v.imgSrc"}],attrs:{alt:""}})]),t._v(" "),i("a",{staticClass:"a2",attrs:{href:e.href}},[t._v(t._s(e.title))]),t._v(" "),i("p",[t._v(t._s(e.time))]),t._v(" "),i("a",{staticClass:"a3",attrs:{href:e.href}},[t._v("立即报名")])])}))]),t._v(" "),i("div",{staticClass:"hotMatch"},[i("h2",[t._v("热门赛事报名")]),t._v(" "),i("div",{staticClass:"redline"}),t._v(" "),i("ul",t._l(t.enrollData.hotMatch,function(e){return i("li",[i("a",{staticClass:"clearfix",attrs:{href:e.href}},[i("img",{staticClass:"fl",attrs:{src:e.imgSrc,alt:""}}),t._v(" "),i("p",{staticClass:"fl"},[t._v(t._s(e.title))]),t._v(" "),i("i",{staticClass:"fl"},[t._v(t._s(e.time))])])])}))])])},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("h2",[t._v("国内赛事  "),i("a",{staticClass:"fr",attrs:{href:"http://www.erun360.com/Competetion/SearchEvent.aspx?g=1"}},[t._v("更多国内精彩赛事>>")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("h2",[t._v("国外赛事  "),i("a",{staticClass:"fr",attrs:{href:"http://www.erun360.com/Competetion/SearchEvent.aspx?g=2"}},[t._v("更多国外精彩赛事>>")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"column clearfix"},[i("div",{staticClass:"c3left"},[i("div",{staticClass:"c3list"},[i("img",{attrs:{src:t.columnData.topImg,alt:"益跑专栏"}}),t._v(" "),i("h3",[t._v("益跑专栏")])]),t._v(" "),i("ul",{staticClass:"c3llist"},[t._l(t.columnData.article,function(e){return i("li",[i("div",{staticClass:"c3listh"},[i("a",{attrs:{href:"jacascript:;"}},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.imgSrc,expression:"v.imgSrc"}]}),t._v(" "),i("h3",[t._v(t._s(e.title))])]),t._v(" "),i("span",[t._v("\n                        \t\t\t\t\t\t\tby:\n                        \t\t\t\t\t\t\t"),i("a",{attrs:{href:"javascript:;"}},[t._v(t._s(e.author))])]),t._v(" "+t._s(e.time)+"\n                    "),i("p",[t._v(t._s(e.content))])]),t._v(" "),i("p",{staticClass:"c3listt"})])}),t._v(" "),t._l(t.columnData.article2,function(e){return i("li",{directives:[{name:"show",rawName:"v-show",value:t.show_more_flag,expression:"show_more_flag"}]},[i("div",{staticClass:"c3listh"},[i("a",{attrs:{href:"jacascript:;"}},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.imgSrc,expression:"v.imgSrc"}]}),t._v(" "),i("h3",[t._v(t._s(e.title))])]),t._v(" "),i("span",[t._v("\n                        \t\t\t\t\t\t\tby:\n                        \t\t\t\t\t\t\t"),i("a",{attrs:{href:"javascript:;"}},[t._v(t._s(e.author))])]),t._v(" "+t._s(e.time)+"\n                    "),i("p",[t._v(t._s(e.content))])]),t._v(" "),i("p",{staticClass:"c3listt"})])}),t._v(" "),i("div",{staticClass:"newsmore",on:{click:t.show_more}},[t._v("更多文章")])],2)]),t._v(" "),i("div",{staticClass:"c3right"},t._l(t.columnData.ad,function(e){return i("div",{staticClass:"c3rig"},[i("a",{attrs:{href:"javascript:;"}},[t._v(t._s(e.title)+"}")]),t._v(" "),i("br"),t._v(" 拼团价\n            "),i("span",[t._v("\n                \t\t\t\t\t\t￥"+t._s(e.oldPrice)+"\n                \t\t\t\t\t\t"),i("i",[t._v("("+t._s(e.account)+"折)")])]),t._v(" "),i("a",{attrs:{href:"javascript:;"}},[i("img",{attrs:{src:e.imgSrc}})]),t._v(" "),i("a",{staticClass:"c3righ",attrs:{href:"javascript:;"}},[t._v("立即拼团")])])}))])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"footer"},[i("div",{staticClass:"content-wrapper"},[i("a",{attrs:{href:"javascript:;"}},[t._v("益跑首页")]),t._v("-\n        "),i("a",{attrs:{href:"javascript:;"}},[t._v("关于益跑")]),t._v("-\n        "),i("a",{attrs:{href:"javascript:;"}},[t._v("加入益跑")]),t._v("-\n        "),i("a",{attrs:{href:"javascript:;"}},[t._v("会员中心")]),t._v("-\n        "),i("br"),t._v(" "),i("a",{attrs:{href:"javascript:;"}},[t._v("京公网安备 11010902000358号 益跑网 京ICP证 151068号")]),t._v(" "),i("br"),t._v(" "),i("a",{attrs:{href:"javascript:;"}},[t._v("Copyright 2012-2017 北京益跑科技股份有限公司 版权所有")]),t._v(" "),i("br"),t._v(" "),i("a",{attrs:{href:"javascript:;"}},[t._v("info@erun360.com 电话：86-10-84374449")])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:t.slideClass},[t._t("default")],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"index clearfix"},[i("div",{staticClass:"banner"},[i("ul",{attrs:{id:"tab"}},t._l(t.indexData.tagBar,function(e,a){return i("li",{ref:"aImg",refInFor:!0,on:{mouseover:function(e){t.tab(a)}}},[i("p",{ref:"aP",refInFor:!0,staticClass:"show"}),t._v(" "),i("a",{attrs:{href:e.href}},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.imgSrc,expression:"v.imgSrc"}],attrs:{alt:""}})]),t._v(" "),i("em",{ref:"aEm",refInFor:!0,staticClass:"layer"},[t._v(t._s(e.title))])])}))]),t._v(" "),i("div",{staticClass:"content-left"},[i("div",{staticClass:"content-left-side1"},[i("div",{staticClass:"content-left-side1-hot"},[i("i",[t._v("热门搜索")]),t._v(" "),t._l(t.indexData.hotKey,function(e){return i("a",{attrs:{href:e.href}},[t._v(t._s(e.title))])})],2),t._v(" "),t._m(0)]),t._v(" "),i("div",{staticClass:"content-left-side2"},[i("a",{attrs:{href:"#"}},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.indexData.side2ImgSrc[0],expression:"indexData.side2ImgSrc[0]"}],attrs:{alt:"赛事报名"}}),t._v("{赛事报名}")]),t._v(" "),i("a",{attrs:{href:"#"}},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.indexData.side2ImgSrc[1],expression:"indexData.side2ImgSrc[1]"}],attrs:{alt:"赛事日历"}}),t._v("{赛事日历}")]),t._v(" "),i("a",{attrs:{href:"#"}},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.indexData.side2ImgSrc[2],expression:"indexData.side2ImgSrc[2]"}],attrs:{alt:"益跑商城"}}),t._v("{益跑商城}")]),t._v(" "),i("a",{attrs:{href:"#"}},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.indexData.side2ImgSrc[3],expression:"indexData.side2ImgSrc[3]"}],attrs:{alt:"智能选鞋"}}),t._v("{智能选鞋}")]),t._v(" "),i("a",{attrs:{href:"#"}},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.indexData.side2ImgSrc[4],expression:"indexData.side2ImgSrc[4]"}],attrs:{alt:"益跑工具箱"}}),t._v("{益跑工具箱}")])]),t._v(" "),i("div",{staticClass:"content-left-side3"},[i("ul",t._l(t.indexData.article,function(e){return i("li",[i("a",{staticClass:"content-left-side3-p1",attrs:{href:e.href}},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.src,expression:"v.src"}],attrs:{alt:""}})]),t._v(" "),i("ol",t._l(e.article_bottom,function(e){return i("li",[i("a",{staticClass:"content-left-side3-img",attrs:{href:e.href}},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.src,expression:"k.src"}],attrs:{alt:""}}),i("i",[t._v(t._s(e.tag))])]),t._v(" "),i("div",{staticClass:"content-left-side3-text"},[i("h3",[i("a",{attrs:{href:e.href}},[t._v(t._s(e.title))])]),t._v(" "),i("em",[t._v("by: "),i("a",{attrs:{href:"javascript:;"}},[t._v(t._s(e.author))])]),t._v(t._s(e.time)+"\n                                "),i("p",[t._v(t._s(e.content))])])])}))])}))]),t._v(" "),i("div",{staticClass:"content-left-side4"},[t._v("\n            更多文章\n        ")])]),t._v(" "),i("div",{staticClass:"content2"},[t._l(t.indexData.rightAd1,function(t){return i("div",[i("a",{staticClass:"cmlm",attrs:{href:t.href}},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.imgSrc,expression:"v.imgSrc"}],attrs:{alt:""}})])])}),t._v(" "),i("ul",t._l(t.indexData.rightAd2,function(e){return i("li",[i("a",{staticClass:"clearfix",attrs:{href:e.href}},[t._v(t._s(e.title)),i("span",[t._v(t._s(e.tag))])]),t._v(" "),i("div",[t._v("拼团价："),i("strong",[t._v("￥"+t._s(e.price)),i("em",[t._v("("+t._s(e.acount)+"折)")])])]),t._v(" "),i("a",{attrs:{href:"javascript:;"}},[i("img",{attrs:{src:e.imgSrc,alt:""}})]),t._v(" "),t._m(1,!0)])}))],2),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.toTopFlag,expression:"toTopFlag"}],staticClass:"content-fixed"},[i("a",{attrs:{href:"javascript:;",title:"回到顶部"},on:{click:t.toTop}})])])},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"content-left-side1-serch"},[i("input",{attrs:{type:"text",name:"serchkey",id:"serchkey",placeholder:"人名、标题、关键字"}}),t._v(" "),i("a",{staticClass:"hotserch"},[t._v("搜索")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a",{staticClass:"spell",attrs:{href:"javascript:;"}},[i("p",[t._v("立即拼团")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"equip clearfix"},[i("div",{staticClass:"equip_left"},[i("div",{staticClass:"equip_flash re"},[i("swiper",{attrs:{options:t.swiperOption}},[t._l(t.equipData.flash,function(e){return i("swiper-slide",{key:e.id},[i("img",{attrs:{src:e.imageSrc}}),t._v(" "),i("P",{staticClass:"title"},[t._v(t._s(e.imageTitle))])],1)}),t._v(" "),i("div",{staticClass:"swiper-button-prev",slot:"button-prev"}),t._v(" "),i("div",{staticClass:"swiper-button-next",slot:"button-next"})],2)],1),t._v(" "),i("h2",[t._v("跑步装备")]),t._v(" "),i("ul",{staticClass:"equip_left_list"},t._l(t.equipData.product,function(e){return i("li",{staticClass:"clearfix"},[i("div",{staticClass:"equip_left_list_img re"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.imageSrc,expression:"v.imageSrc"}]}),t._v(" "),i("p",{staticClass:"ab"},[t._v(t._s(e.classify))])]),t._v(" "),i("div",{staticClass:"equip_left_list_art"},[i("h3",[i("a",{attrs:{href:"javascript:;"}},[t._v(t._s(e.title))])]),t._v(" "),i("p",{staticClass:"equip_left_list_art_title"},[i("span",[t._v("by:")]),t._v(" "),i("a",{attrs:{href:"javascript:;"}},[t._v(t._s(e.from)+" ")]),t._v(" "),i("b",[t._v(t._s(e.time))])]),t._v(" "),i("p",{staticClass:"equip_left_list_art_text"},[t._v(t._s(e.text))])])])}))]),t._v(" "),i("ul",{staticClass:"equip_right"},t._l(t.equipData.buy,function(e){return i("li",[i("a",{attrs:{href:"javascript:;"}},[t._v(t._s(e.title))]),t._v(" "),i("span",[t._v(t._s(e.mode))]),t._v(" "),i("p",[i("em",[t._v("拼团价：")]),t._v(" "),i("i",[t._v("￥"+t._s(e.price))]),t._v(" "),i("b",[t._v("("+t._s(e.discount)+")")])]),t._v(" "),i("div",{staticClass:"equip_right_img"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.imageSrc,expression:"v.imageSrc"}]})]),t._v(" "),i("a",{staticClass:"equip_right_buy",attrs:{href:e.href}},[t._v("立即拼团")])])}))])},staticRenderFns:[]}}],[19]);
//# sourceMappingURL=app.4093085acade67494dd8.js.map
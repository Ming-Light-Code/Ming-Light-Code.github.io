/* ============================================================
 *  Ming's Blog - Consolidated JavaScript
 *  Bundled from 9 source files, kept separate for reference
 * ============================================================ */

/* ============================================================
 *  1. Lunar Calendar Library (source: assets/day/lunar.js)
 *  Dependency for day.js — must load first
 * ============================================================ */
var lunarInfo=[19416,19168,42352,21717,53856,55632,91476,22176,39632,21970,19168,42422,42192,53840,119381,46400,54944,44450,38320,84343,18800,42160,46261,27216,27968,109396,11104,38256,21234,18800,25958,54432,59984,28309,23248,11104,100067,37600,116951,51536,54432,120998,46416,22176,107956,9680,37584,53938,43344,46423,27808,46416,86869,19872,42416,83315,21168,43432,59728,27296,44710,43856,19296,43748,42352,21088,62051,55632,23383,22176,38608,19925,19152,42192,54484,53840,54616,46400,46752,103846,38320,18864,43380,42160,45690,27216,27968,44870,43872,38256,19189,18800,25776,29859,59984,27480,23232,43872,38613,37600,51552,55636,54432,55888,30034,22176,43959,9680,37584,51893,43344,46240,47780,44368,21977,19360,42416,86390,21168,43312,31060,27296,44368,23378,19296,42726,42208,53856,60005,54576,23200,30371,38608,19195,19152,42192,118966,53840,54560,56645,46496,22224,21938,18864,42359,42160,43600,111189,27936,44448,84835,37744,18936,18800,25776,92326,59984,27424,108228,43744,41696,53987,51552,54615,54432,55888,23893,22176,42704,21972,21200,43448,43344,46240,46758,44368,21920,43940,42416,21168,45683,26928,29495,27296,44368,84821,19296,42352,21732,53600,59752,54560,55968,92838,22224,19168,43476,41680,53584,62034,54560],solarMonth=[31,28,31,30,31,30,31,31,30,31,30,31],Gan=["甲","乙","丙","丁","戊","己","庚","辛","壬","癸"],Zhi=["子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥"],Animals=["鼠","牛","虎","兔","龙","蛇","马","羊","猴","鸡","狗","猪"],solarTerm=["小寒","大寒","立春","雨水","惊蛰","春分","清明","谷雨","立夏","小满","芒种","夏至","小暑","大暑","立秋","处暑","白露","秋分","寒露","霜降","立冬","小雪","大雪","冬至"],sTermInfo=["9778397bd097c36b0b6fc9274c91aa","97b6b97bd19801ec9210c965cc920e","97bcf97c3598082c95f8c965cc920f","97bd0b06bdb0722c965ce1cfcc920f","b027097bd097c36b0b6fc9274c91aa","97b6b97bd19801ec9210c965cc920e","97bcf97c359801ec95f8c965cc920f","97bd0b06bdb0722c965ce1cfcc920f","b027097bd097c36b0b6fc9274c91aa","97b6b97bd19801ec9210c965cc920e","97bcf97c359801ec95f8c965cc920f","97bd0b06bdb0722c965ce1cfcc920f","b027097bd097c36b0b6fc9274c91aa","9778397bd19801ec9210c965cc920e","97b6b97bd19801ec95f8c965cc920f","97bd09801d98082c95f8e1cfcc920f","97bd097bd097c36b0b6fc9210c8dc2","9778397bd197c36c9210c9274c91aa","97b6b97bd19801ec95f8c965cc920e","97bd09801d98082c95f8e1cfcc920f","97bd097bd097c36b0b6fc9210c8dc2","9778397bd097c36c9210c9274c91aa","97b6b97bd19801ec95f8c965cc920e","97bcf97c3598082c95f8e1cfcc920f","97bd097bd097c36b0b6fc9210c8dc2","9778397bd097c36c9210c9274c91aa","97b6b97bd19801ec9210c965cc920e","97bcf97c3598082c95f8c965cc920f","97bd097bd097c35b0b6fc920fb0722","9778397bd097c36b0b6fc9274c91aa","97b6b97bd19801ec9210c965cc920e","97bcf97c3598082c95f8c965cc920f","97bd097bd097c35b0b6fc920fb0722","9778397bd097c36b0b6fc9274c91aa","97b6b97bd19801ec9210c965cc920e","97bcf97c359801ec95f8c965cc920f","97bd097bd097c35b0b6fc920fb0722","9778397bd097c36b0b6fc9274c91aa","97b6b97bd19801ec9210c965cc920e","97bcf97c359801ec95f8c965cc920f","97bd097bd097c35b0b6fc920fb0722","9778397bd097c36b0b6fc9274c91aa","97b6b97bd19801ec9210c965cc920e","97bcf97c359801ec95f8c965cc920f","97bd097bd07f595b0b6fc920fb0722","9778397bd097c36b0b6fc9210c8dc2","9778397bd19801ec9210c9274c920e","97b6b97bd19801ec95f8c965cc920f","97bd07f5307f595b0b0bc920fb0722","7f0e397bd097c36b0b6fc9210c8dc2","9778397bd097c36c9210c9274c920e","97b6b97bd19801ec95f8c965cc920f","97bd07f5307f595b0b0bc920fb0722","7f0e397bd097c36b0b6fc9210c8dc2","9778397bd097c36c9210c9274c91aa","97b6b97bd19801ec9210c965cc920e","97bd07f1487f595b0b0bc920fb0722","7f0e397bd097c36b0b6fc9210c8dc2","9778397bd097c36b0b6fc9274c91aa","97b6b97bd19801ec9210c965cc920e","97bcf7f1487f595b0b0bb0b6fb0722","7f0e397bd097c35b0b6fc920fb0722","9778397bd097c36b0b6fc9274c91aa","97b6b97bd19801ec9210c965cc920e","97bcf7f1487f595b0b0bb0b6fb0722","7f0e397bd097c35b0b6fc920fb0722","9778397bd097c36b0b6fc9274c91aa","97b6b97bd19801ec9210c965cc920e","97bcf7f1487f531b0b0bb0b6fb0722","7f0e397bd097c35b0b6fc920fb0722","9778397bd097c36b0b6fc9274c91aa","97b6b97bd19801ec9210c965cc920e","97bcf7f1487f531b0b0bb0b6fb0722","7f0e397bd07f595b0b6fc920fb0722","9778397bd097c36b0b6fc9274c91aa","97b6b97bd19801ec9210c9274c920e","97bcf7f0e47f531b0b0bb0b6fb0722","7f0e397bd07f595b0b0bc920fb0722","9778397bd097c36b0b6fc9210c91aa","97b6b97bd197c36c9210c9274c920e","97bcf7f0e47f531b0b0bb0b6fb0722","7f0e397bd07f595b0b0bc920fb0722","9778397bd097c36b0b6fc9210c8dc2","9778397bd097c36c9210c9274c920e","97b6b7f0e47f531b0723b0b6fb0722","7f0e37f5307f595b0b0bc920fb0722","7f0e397bd097c36b0b6fc9210c8dc2","9778397bd097c36b0b70c9274c91aa","97b6b7f0e47f531b0723b0b6fb0721","7f0e37f1487f595b0b0bb0b6fb0722","7f0e397bd097c35b0b6fc9210c8dc2","9778397bd097c36b0b6fc9274c91aa","97b6b7f0e47f531b0723b0b6fb0721","7f0e27f1487f595b0b0bb0b6fb0722","7f0e397bd097c35b0b6fc920fb0722","9778397bd097c36b0b6fc9274c91aa","97b6b7f0e47f531b0723b0b6fb0721","7f0e27f1487f531b0b0bb0b6fb0722","7f0e397bd097c35b0b6fc920fb0722","9778397bd097c36b0b6fc9274c91aa","97b6b7f0e47f531b0723b0b6fb0721","7f0e27f1487f531b0b0bb0b6fb0722","7f0e397bd097c35b0b6fc920fb0722","9778397bd097c36b0b6fc9274c91aa","97b6b7f0e47f531b0723b0b6fb0721","7f0e27f1487f531b0b0bb0b6fb0722","7f0e397bd07f595b0b0bc920fb0722","9778397bd097c36b0b6fc9274c91aa","97b6b7f0e47f531b0723b0787b0721","7f0e27f0e47f531b0b0bb0b6fb0722","7f0e397bd07f595b0b0bc920fb0722","9778397bd097c36b0b6fc9210c91aa","97b6b7f0e47f149b0723b0787b0721","7f0e27f0e47f531b0723b0b6fb0722","7f0e397bd07f595b0b0bc920fb0722","9778397bd097c36b0b6fc9210c8dc2","977837f0e37f149b0723b0787b0721","7f07e7f0e47f531b0723b0b6fb0722","7f0e37f5307f595b0b0bc920fb0722","7f0e397bd097c35b0b6fc9210c8dc2","977837f0e37f14998082b0787b0721","7f07e7f0e47f531b0723b0b6fb0721","7f0e37f1487f595b0b0bb0b6fb0722","7f0e397bd097c35b0b6fc9210c8dc2","977837f0e37f14998082b0787b06bd","7f07e7f0e47f531b0723b0b6fb0721","7f0e27f1487f531b0b0bb0b6fb0722","7f0e397bd097c35b0b6fc920fb0722","977837f0e37f14998082b0787b06bd","7f07e7f0e47f531b0723b0b6fb0721","7f0e27f1487f531b0b0bb0b6fb0722","7f0e397bd097c35b0b6fc920fb0722","977837f0e37f14998082b0787b06bd","7f07e7f0e47f531b0723b0b6fb0721","7f0e27f1487f531b0b0bb0b6fb0722","7f0e397bd07f595b0b0bc920fb0722","977837f0e37f14998082b0787b06bd","7f07e7f0e47f531b0723b0b6fb0721","7f0e27f1487f531b0b0bb0b6fb0722","7f0e397bd07f595b0b0bc920fb0722","977837f0e37f14998082b0787b06bd","7f07e7f0e47f149b0723b0787b0721","7f0e27f0e47f531b0b0bb0b6fb0722","7f0e397bd07f595b0b0bc920fb0722","977837f0e37f14998082b0723b06bd","7f07e7f0e37f149b0723b0787b0721","7f0e27f0e47f531b0723b0b6fb0722","7f0e397bd07f595b0b0bc920fb0722","977837f0e37f14898082b0723b02d5","7ec967f0e37f14998082b0787b0721","7f07e7f0e47f531b0723b0b6fb0722","7f0e37f1487f595b0b0bb0b6fb0722","7f0e37f0e37f14898082b0723b02d5","7ec967f0e37f14998082b0787b0721","7f07e7f0e47f531b0723b0b6fb0722","7f0e37f1487f531b0b0bb0b6fb0722","7f0e37f0e37f14898082b0723b02d5","7ec967f0e37f14998082b0787b06bd","7f07e7f0e47f531b0723b0b6fb0721","7f0e37f1487f531b0b0bb0b6fb0722","7f0e37f0e37f14898082b072297c35","7ec967f0e37f14998082b0787b06bd","7f07e7f0e47f531b0723b0b6fb0721","7f0e27f1487f531b0b0bb0b6fb0722","7f0e37f0e37f14898082b072297c35","7ec967f0e37f14998082b0787b06bd","7f07e7f0e47f531b0723b0b6fb0721","7f0e27f1487f531b0b0bb0b6fb0722","7f0e37f0e366aa89801eb072297c35","7ec967f0e37f14998082b0787b06bd","7f07e7f0e47f149b0723b0787b0721","7f0e27f1487f531b0b0bb0b6fb0722","7f0e37f0e366aa89801eb072297c35","7ec967f0e37f14998082b0723b06bd","7f07e7f0e47f149b0723b0787b0721","7f0e27f0e47f531b0723b0b6fb0722","7f0e37f0e366aa89801eb072297c35","7ec967f0e37f14998082b0723b06bd","7f07e7f0e37f14998083b0787b0721","7f0e27f0e47f531b0723b0b6fb0722","7f0e37f0e366aa89801eb072297c35","7ec967f0e37f14898082b0723b02d5","7f07e7f0e37f14998082b0787b0721","7f07e7f0e47f531b0723b0b6fb0722","7f0e36665b66aa89801e9808297c35","665f67f0e37f14898082b0723b02d5","7ec967f0e37f14998082b0787b0721","7f07e7f0e47f531b0723b0b6fb0722","7f0e36665b66a449801e9808297c35","665f67f0e37f14898082b0723b02d5","7ec967f0e37f14998082b0787b06bd","7f07e7f0e47f531b0723b0b6fb0721","7f0e36665b66a449801e9808297c35","665f67f0e37f14898082b072297c35","7ec967f0e37f14998082b0787b06bd","7f07e7f0e47f531b0723b0b6fb0721","7f0e26665b66a449801e9808297c35","665f67f0e37f1489801eb072297c35","7ec967f0e37f14998082b0787b06bd","7f07e7f0e47f531b0723b0b6fb0721","7f0e27f1487f531b0b0bb0b6fb0722"],nStr1=["日","一","二","三","四","五","六","七","八","九","十"],nStr2=["初","十","廿","卅"],nStr3=["正","二","三","四","五","六","七","八","九","十","冬","腊"];function lYearDays(b){var f,c=348;for(f=32768;f>8;f>>=1)c+=lunarInfo[b-1900]&f?1:0;return c+leapDays(b)}function leapMonth(b){return 15&lunarInfo[b-1900]}function leapDays(b){return leapMonth(b)?65536&lunarInfo[b-1900]?30:29:0}function monthDays(b,f){return f>12||f<1?-1:lunarInfo[b-1900]&65536>>f?30:29}function solarDays(b,f){if(f>12||f<1)return-1;var c=f-1;return 1===c?b%4==0&&b%100!=0||b%400==0?29:28:solarMonth[c]}function toGanZhiYear(b){var f=(b-3)%10,c=(b-3)%12;return 0===f&&(f=10),0===c&&(c=12),Gan[f-1]+Zhi[c-1]}function toAstro(b,f){return"魔羯水瓶双鱼白羊金牛双子巨蟹狮子处女天秤天蝎射手魔羯".substr(2*b-(f<[20,19,21,21,21,22,23,23,23,23,22,22][b-1]?2:0),2)+"座"}function toGanZhi(b){return Gan[b%10]+Zhi[b%12]}function getTerm(b,f){if(b<1900||b>2100)return-1;if(f<1||f>24)return-1;var c=sTermInfo[b-1900],e=[parseInt("0x"+c.substr(0,5)).toString(),parseInt("0x"+c.substr(5,5)).toString(),parseInt("0x"+c.substr(10,5)).toString(),parseInt("0x"+c.substr(15,5)).toString(),parseInt("0x"+c.substr(20,5)).toString(),parseInt("0x"+c.substr(25,5)).toString()],a=[e[0].substr(0,1),e[0].substr(1,2),e[0].substr(3,1),e[0].substr(4,2),e[1].substr(0,1),e[1].substr(1,2),e[1].substr(3,1),e[1].substr(4,2),e[2].substr(0,1),e[2].substr(1,2),e[2].substr(3,1),e[2].substr(4,2),e[3].substr(0,1),e[3].substr(1,2),e[3].substr(3,1),e[3].substr(4,2),e[4].substr(0,1),e[4].substr(1,2),e[4].substr(3,1),e[4].substr(4,2),e[5].substr(0,1),e[5].substr(1,2),e[5].substr(3,1),e[5].substr(4,2)];return parseInt(a[f-1])}function toChinaMonth(b){if(b>12||b<1)return-1;var f=nStr3[b-1];return f+="月"}function toChinaDay(b){var f;switch(b){case 10:f="初十";break;case 20:f="二十";break;case 30:f="三十";break;default:f=nStr2[Math.floor(b/10)],f+=nStr1[b%10]}return f}function getAnimal(b){return Animals[(b-4)%12]}function solar2lunar(b,f,c){if(b<1900||b>2100)return-1;if(1900===b&&1===f&&c<31)return-1;var e,a,r=null,t=0;b=(r=b?new Date(b,parseInt(f)-1,c):new Date).getFullYear(),f=r.getMonth()+1,c=r.getDate();var d=(Date.UTC(r.getFullYear(),r.getMonth(),r.getDate())-Date.UTC(1900,0,31))/864e5;for(e=1900;e<2101&&d>0;e++)d-=t=lYearDays(e);d<0&&(d+=t,e--);var n=new Date,s=!1;n.getFullYear()===b&&n.getMonth()+1===f&&n.getDate()===c&&(s=!0);var u=r.getDay(),o=nStr1[u];0===u&&(u=7);var l=e;a=leapMonth(e);var i=!1;for(e=1;e<13&&d>0;e++)a>0&&e===a+1&&!1===i?(--e,i=!0,t=leapDays(l)):t=monthDays(l,e),!0===i&&e===a+1&&(i=!1),d-=t;0===d&&a>0&&e===a+1&&(i?i=!1:(i=!0,--e)),d<0&&(d+=t,--e);var h=e,D=d+1,g=f-1,v=toGanZhiYear(l),y=getTerm(b,2*f-1),m=getTerm(b,2*f),p=toGanZhi(12*(b-1900)+f+11);c>=y&&(p=toGanZhi(12*(b-1900)+f+12));var M=!1,T=null;y===c&&(M=!0,T=solarTerm[2*f-2]),m===c&&(M=!0,T=solarTerm[2*f-1]);var I=toGanZhi(Date.UTC(b,g,1,0,0,0,0)/864e5+25567+10+c-1),C=toAstro(f,c);return{lYear:l,lMonth:h,lDay:D,Animal:getAnimal(l),IMonthCn:(i?"闰":"")+toChinaMonth(h),IDayCn:toChinaDay(D),cYear:b,cMonth:f,cDay:c,gzYear:v,gzMonth:p,gzDay:I,isToday:s,isLeap:i,nWeek:u,ncWeek:"星期"+o,isTerm:M,Term:T,astro:C}}var calendarFormatter={solar2lunar:function(b,f,c){return solar2lunar(b,f,c)},lunar2solar:function(b,f,c,e){if((e=!!e)&&leapMonth!==f)return-1;if(2100===b&&12===f&&c>1||1900===b&&1===f&&c<31)return-1;var a=monthDays(b,f),r=a;if(e&&(r=leapDays(b,f)),b<1900||b>2100||c>r)return-1;for(var t=0,d=1900;d<b;d++)t+=lYearDays(d);var n=0,s=!1;for(d=1;d<f;d++)n=leapMonth(b),s||n<=d&&n>0&&(t+=leapDays(b),s=!0),t+=monthDays(b,d);e&&(t+=a);var u=Date.UTC(1900,1,30,0,0,0),o=new Date(864e5*(t+c-31)+u);return solar2lunar(o.getUTCFullYear(),o.getUTCMonth()+1,o.getUTCDate())}};

/* ============================================================
 *  2. Memorial & Holiday Alerts (source: assets/day/day.js)
 *  Depends on lunar.js (calendarFormatter)
 * ============================================================ */
(function() {
var d = new Date();
m = d.getMonth() + 1;
dd = d.getDate();
y = d.getFullYear();

// 公祭日
if (m == 9 && dd == 18) {
    document.getElementsByTagName("html")[0].setAttribute("style", "filter: grayscale(60%);");
    if (sessionStorage.getItem("isPopupWindow") != "1") {
        Swal.fire("今天是九一八事变第" + (y - 1931).toString() + "周年\n勿忘国耻，振兴中华");
        sessionStorage.setItem("isPopupWindow", "1");
    }
}
if (m == 7 && dd == 7) {
    document.getElementsByTagName("html")[0].setAttribute("style", "filter: grayscale(60%);");
    if (sessionStorage.getItem("isPopupWindow") != "1") {
        Swal.fire("今天是卢沟桥事变第" + (y - 1937).toString() + "周年\n勿忘国耻，振兴中华");
        sessionStorage.setItem("isPopupWindow", "1");
    }
}
if (m == 12 && dd == 13) {
    document.getElementsByTagName("html")[0].setAttribute("style", "filter: grayscale(60%);");
    if (sessionStorage.getItem("isPopupWindow") != "1") {
        Swal.fire("今天是南京大屠杀受难同胞纪念日\n勿忘国耻，振兴中华");
        sessionStorage.setItem("isPopupWindow", "1");
    }
}
if (m == 8 && dd == 14) {
    document.getElementsByTagName("html")[0].setAttribute("style", "filter: grayscale(60%);");
    if (sessionStorage.getItem("isPopupWindow") != "1") {
        Swal.fire("今天是世界慰安妇纪念日\n勿忘国耻，振兴中华");
        sessionStorage.setItem("isPopupWindow", "1");
    }
}

// 节假日
if (m == 10 && dd <= 3) {
    if (sessionStorage.getItem("isPopupWindow") != "1") {
        Swal.fire("祝祖国" + (y - 1949).toString() + "岁生日快乐！");
        sessionStorage.setItem("isPopupWindow", "1");
    }
}
if (m == 8 && dd == 15) {
    if (sessionStorage.getItem("isPopupWindow") != "1") {
        Swal.fire("日本投降" + (y - 1945).toString() + "年了");
        sessionStorage.setItem("isPopupWindow", "1");
    }
}
if (m == 1 && dd == 1) {
    if (sessionStorage.getItem("isPopupWindow") != "1") {
        Swal.fire(y.toString() + "年元旦快乐！🎉");
        sessionStorage.setItem("isPopupWindow", "1");
    }
}
if (m == 3 && dd == 8) {
    if (sessionStorage.getItem("isPopupWindow") != "1") {
        Swal.fire("妇女节快乐！");
        sessionStorage.setItem("isPopupWindow", "1");
    }
}
l = ["恭喜你中奖啦，兑奖请拨打10086", "你的外卖到了，下楼拿一下", "404 NOT FOUND", "网页加载中--101%", "你的电脑中了本网址中植入的病毒，建议立即关机！", "服务器繁忙", "提醒：明天是愚人节", ""]
if (m == 4 && dd == 1) {
    if (sessionStorage.getItem("isPopupWindow") != "1") {
        Swal.fire(l[Math.floor(Math.random() * l.length)]);
        sessionStorage.setItem("isPopupWindow", "1");
    }
}
if (m == 5 && dd == 1) {
    if (sessionStorage.getItem("isPopupWindow") != "1") {
        Swal.fire("劳动节快乐\n为各行各业辛勤工作的人们致敬！");
        sessionStorage.setItem("isPopupWindow", "1");
    }
}
if (m == 5 && dd == 4) {
    if (sessionStorage.getItem("isPopupWindow") != "1") {
        Swal.fire("青年节快乐\n青春不是回忆逝去,而是把握现在！");
        sessionStorage.setItem("isPopupWindow", "1");
    }
}
if (m == 6 && dd == 1) {
    if (sessionStorage.getItem("isPopupWindow") != "1") {
        Swal.fire("儿童节快乐\n愿你永远保持一颗童心！");
        sessionStorage.setItem("isPopupWindow", "1");
    }
}
if (m == 7 && dd == 1) {
    if (sessionStorage.getItem("isPopupWindow") != "1") {
        Swal.fire("祝中国共产党" + (y - 1921).toString() + "岁生日快乐！");
        sessionStorage.setItem("isPopupWindow", "1");
    }
}
if (m == 9 && dd == 10) {
    if (sessionStorage.getItem("isPopupWindow") != "1") {
        Swal.fire("各位老师们教师节快乐！👩‍🏫");
        sessionStorage.setItem("isPopupWindow", "1");
    }
}
if (m == 12 && dd == 25) {
    if (sessionStorage.getItem("isPopupWindow") != "1") {
        Swal.fire("圣诞节快乐！🎄");
        sessionStorage.setItem("isPopupWindow", "1");
    }
}

// 传统节日部分
if ((y == 2023 && m == 4 && dd == 5) || (y == 2024 && m == 4 && dd == 4) || (y == 2025 && m == 4 && dd == 4) || (y == 2026 && m == 4 && dd == 5)) {
    if (sessionStorage.getItem("isPopupWindow") != "1") {
        Swal.fire("清明时节雨纷纷,一束鲜花祭故人💐");
        sessionStorage.setItem("isPopupWindow", "1");
    }
}
if ((y == 2023 && m == 12 && dd == 22) || (y == 2024 && m == 12 && dd == 21) || (y == 2025 && m == 12 && dd == 21) || (y == 2026 && m == 12 && dd == 22)) {
    if (sessionStorage.getItem("isPopupWindow") != "1") {
        Swal.fire("冬至快乐\n快吃上一碗热热的汤圆和饺子吧🧆");
        sessionStorage.setItem("isPopupWindow", "1");
    }
}

var lunar = calendarFormatter.solar2lunar();

if ((lunar["IMonthCn"] == "正月" && lunar["IDayCn"] == "初六") || (lunar["IMonthCn"] == "正月" && lunar["IDayCn"] == "初五") || (lunar["IMonthCn"] == "正月" && lunar["IDayCn"] == "初四") || (lunar["IMonthCn"] == "正月" && lunar["IDayCn"] == "初三") || (lunar["IMonthCn"] == "正月" && lunar["IDayCn"] == "初二") || (lunar["IMonthCn"] == "正月" && lunar["IDayCn"] == "初一") || (lunar["IMonthCn"] == "腊月" && lunar["IDayCn"] == "三十") || (lunar["IMonthCn"] == "腊月" && lunar["IDayCn"] == "廿九")) {
    if (sessionStorage.getItem("isPopupWindow") != "1") {
        Swal.fire(y.toString() + "年新年快乐\n🎊祝你心想事成，诸事顺利🎊");
        sessionStorage.setItem("isPopupWindow", "1");
    }
}
if ((lunar["IMonthCn"] == "正月" && lunar["IDayCn"] == "十五")) {
    if (sessionStorage.getItem("isPopupWindow") != "1") {
        Swal.fire("元宵节快乐\n送你一个大大的灯笼🧅");
        sessionStorage.setItem("isPopupWindow", "1");
    }
}
if ((lunar["IMonthCn"] == "五月" && lunar["IDayCn"] == "初五")) {
    if (sessionStorage.getItem("isPopupWindow") != "1") {
        Swal.fire("端午节快乐\n请你吃一条粽子🍙");
        sessionStorage.setItem("isPopupWindow", "1");
    }
}
if ((lunar["IMonthCn"] == "七月" && lunar["IDayCn"] == "初七")) {
    if (sessionStorage.getItem("isPopupWindow") != "1") {
        Swal.fire("七夕节快乐\n黄昏后,柳梢头,牛郎织女来碰头");
        sessionStorage.setItem("isPopupWindow", "1");
    }
}
if ((lunar["IMonthCn"] == "八月" && lunar["IDayCn"] == "十五")) {
    if (sessionStorage.getItem("isPopupWindow") != "1") {
        Swal.fire("中秋节快乐\n请你吃一块月饼🍪");
        sessionStorage.setItem("isPopupWindow", "1");
    }
}
if ((lunar["IMonthCn"] == "九月" && lunar["IDayCn"] == "初九")) {
    if (sessionStorage.getItem("isPopupWindow") != "1") {
        Swal.fire("重阳节快乐\n独在异乡为异客，每逢佳节倍思亲");
        sessionStorage.setItem("isPopupWindow", "1");
    }
}
})();

/* ============================================================
 *  3. Music Player (source: assets/inject/musicplayer_bottle.js)
 * ============================================================ */
(function() {
'use strict';

function loadLibraries() {
    var libraries = [
    {
        name: 'APlayer',
        url: 'https://cdn.jsdelivr.net/npm/aplayer@1.10.1/dist/APlayer.min.js',
        check: function() { return typeof APlayer !== 'undefined'; }
    },
    {
        name: 'MetingJS',
        url: 'https://cdn.jsdelivr.net/npm/meting@2.0.1/dist/Meting.min.js',
        check: function() { return typeof MetingJSElement !== 'undefined'; }
    }
    ];

    var loadedCount = 0;

    libraries.forEach(function(lib) {
    if (lib.check()) {
        loadedCount++;
        console.log(lib.name + ' 已加载');
    } else {
        var script = document.createElement('script');
        script.src = lib.url;
        script.onload = function() {
        console.log(lib.name + ' 加载完成');
        loadedCount++;
        if (loadedCount === libraries.length) {
            initPlayer();
        }
        };
        script.onerror = function() {
        console.error(lib.name + ' 加载失败');
        loadedCount++;
        };
        document.head.appendChild(script);
    }
    });

    if (loadedCount === libraries.length) {
    setTimeout(initPlayer, 100);
    }
}

function initPlayer() {
    console.log('开始初始化音乐播放器...');

    if (!window.customElements.get('meting-js')) {
    console.error('meting-js 自定义元素未注册！');

    if (typeof MetingJSElement !== 'undefined') {
        try {
        window.customElements.define('meting-js', MetingJSElement);
        console.log('手动注册 meting-js 成功');
        } catch (e) {
        console.error('手动注册失败:', e);
        }
    }
    }

    if (!document.getElementById('music-player-container')) {
    var container = document.createElement('div');
    container.id = 'music-player-container';
    container.style.cssText = 'position:fixed;bottom:20px;right:20px;z-index:99999;width:66px;height:66px;border-radius:50%;overflow:hidden;box-shadow:0 4px 20px rgba(64,224,208,0.3);transition:all 0.3s ease;';
    document.body.appendChild(container);

    var metingElement = document.createElement('meting-js');
    metingElement.id = 'music-player';
    metingElement.setAttribute('id', '8748108052');
    metingElement.setAttribute('server', 'netease');
    metingElement.setAttribute('type', 'playlist');
    metingElement.setAttribute('fixed', 'true');
    metingElement.setAttribute('mini', 'true');
    metingElement.setAttribute('autoplay', 'false');
    metingElement.setAttribute('theme', '#40e0d0');
    metingElement.setAttribute('loop', 'all');
    metingElement.setAttribute('order', 'list');
    metingElement.setAttribute('preload', 'metadata');
    metingElement.setAttribute('volume', '0.5');
    metingElement.setAttribute('mutex', 'true');
    metingElement.setAttribute('list-folded', 'true');
    metingElement.setAttribute('list-max-height', '300px');

    container.appendChild(metingElement);
    console.log('音乐播放器已创建');

    container.addEventListener('click', function(e) {
        if (e.target.closest('.aplayer-miniswitcher')) return;

        var player = container.querySelector('.aplayer');
        if (player) {
        if (player.classList.contains('aplayer-mini')) {
            player.classList.remove('aplayer-mini');
            container.style.width = '400px';
            container.style.height = 'auto';
            container.style.borderRadius = '10px';
        } else {
            player.classList.add('aplayer-mini');
            container.style.width = '66px';
            container.style.height = '66px';
            container.style.borderRadius = '50%';
        }
        }
    });
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadLibraries);
} else {
    loadLibraries();
}
})();

/* ============================================================
 *  4. Typewriter Effect (source: assets/inject/typer_bottle.js)
 * ============================================================ */
(function() {
'use strict';

var config = {
    text: '志之所趋，无远弗届，穷山距海，不能限也',
    typeSpeed: 30,
    startDelay: 0,
    backSpeed: 30,
    backDelay: 1200,
    cursorChar: '|'
};

function prepareSubtitleEarly() {
    var subtitleEl = document.getElementById('subtitle');
    if (!subtitleEl) return null;

    var originalText = subtitleEl.textContent.trim();
    if (!originalText || originalText === '...' || originalText === 'undefined') {
    originalText = config.text;
    }

    subtitleEl.textContent = '';
    subtitleEl.dataset.typedText = originalText;
    subtitleEl.style.visibility = 'hidden';

    return { element: subtitleEl, text: originalText };
}

function loadTypedJS() {
    return new Promise(function(resolve) {
    if (typeof Typed !== 'undefined') {
        resolve();
        return;
    }
    var script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/typed.js@2.0.12';
    script.onload = resolve;
    script.onerror = resolve;
    document.head.appendChild(script);
    });
}

function initTypedFromEmpty() {
    var subtitleEl = document.getElementById('subtitle');
    if (!subtitleEl || subtitleEl.dataset.typedInitialized) return;

    var text = subtitleEl.dataset.typedText || config.text;

    subtitleEl.dataset.typedInitialized = 'true';

    var container = document.createElement('span');
    container.className = 'typed-container';
    subtitleEl.appendChild(container);

    if (typeof Typed === 'undefined') {
    console.warn('Typed.js 未加载，直接显示文本');
    container.textContent = text;
    subtitleEl.style.visibility = 'visible';
    return;
    }

    try {
    var typed = new Typed(container, {
        strings: [text],
        startEmpty: true,
        typeSpeed: config.typeSpeed,
        startDelay: config.startDelay,
        backSpeed: config.backSpeed,
        backDelay: config.backDelay,
        loop: false,
        showCursor: true,
        cursorChar: config.cursorChar,
        smartBackspace: true,
        onBegin: function() {
        subtitleEl.style.visibility = 'visible';
        console.log('打字机开始（从空白开始）');
        },
        onComplete: function() {
        console.log('打字完成');
        }
    });

    window.typedInstance = typed;

    } catch (error) {
    console.error('打字机初始化失败:', error);
    container.textContent = text;
    subtitleEl.style.visibility = 'visible';
    }
}

function main() {
    console.log('开始设置打字机（无闪现版）...');

    prepareSubtitleEarly();

    loadTypedJS().then(function() {
    setTimeout(initTypedFromEmpty, 500);
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', main);
} else {
    setTimeout(main, 100);
}

window.fixTypedFlash = function() {
    var subtitleEl = document.getElementById('subtitle');
    if (subtitleEl) {
    delete subtitleEl.dataset.typedInitialized;
    initTypedFromEmpty();
    }
};
})();

/* ============================================================
 *  5. Giscus Emoji Panel (source: assets/inject/emoji_bottle.js)
 * ============================================================ */
(function() {
    var EMOJI_SOURCES = {
    bilibili: 'https://cdn.jsdelivr.net/gh/walinejs/emojis@latest/bilibili/emojis.json',
    qq: 'https://cdn.jsdelivr.net/gh/walinejs/emojis@latest/qq/emojis.json'
    };
    var emojiData = {
    bilibili: [],
    qq: []
    };

    function waitForGiscus() {
    return new Promise(function(resolve) {
        var checkGiscus = setInterval(function() {
        var giscusFrame = document.querySelector('iframe.giscus-frame');
        if (giscusFrame && giscusFrame.contentDocument) {
            clearInterval(checkGiscus);
            resolve(giscusFrame);
        }
        }, 500);
    });
    }

    async function loadEmojiData() {
    try {
        var biliRes = await fetch(EMOJI_SOURCES.bilibili);
        emojiData.bilibili = await biliRes.json();
        var qqRes = await fetch(EMOJI_SOURCES.qq);
        emojiData.qq = await qqRes.json();
    } catch (err) {
        console.error('加载表情包失败:', err);
    }
    }

    function createEmojiPanel() {
    var giscusContainer = document.querySelector('.giscus');
    if (!giscusContainer) return;

    var panel = document.createElement('div');
    panel.className = 'giscus-emoji-panel';
    panel.innerHTML = '<div class="giscus-emoji-tabs"><div class="giscus-emoji-tab active" data-tab="bilibili">B站表情</div><div class="giscus-emoji-tab" data-tab="qq">QQ表情</div></div><div class="giscus-emoji-content active" id="bilibili-emoji"></div><div class="giscus-emoji-content" id="qq-emoji"></div>';

    giscusContainer.insertBefore(panel, giscusContainer.firstChild);

    renderEmoji('bilibili', emojiData.bilibili);
    renderEmoji('qq', emojiData.qq);

    var tabs = panel.querySelectorAll('.giscus-emoji-tab');
    tabs.forEach(function(tab) {
        tab.addEventListener('click', function() {
        tabs.forEach(function(t) { t.classList.remove('active'); });
        tab.classList.add('active');
        var tabName = tab.dataset.tab;
        panel.querySelectorAll('.giscus-emoji-content').forEach(function(cont) {
            cont.classList.remove('active');
        });
        document.getElementById(tabName + '-emoji').classList.add('active');
        });
    });
    }

    function renderEmoji(type, data) {
    var container = document.getElementById(type + '-emoji');
    if (!container || !data.length) return;

    data.forEach(function(emoji) {
        var img = document.createElement('img');
        img.className = 'giscus-emoji-item';
        img.src = 'https://cdn.jsdelivr.net/gh/walinejs/emojis@latest/' + type + '/' + emoji.file;
        img.alt = emoji.name;
        img.title = emoji.name;
        img.addEventListener('click', function() { insertEmojiToGiscus(img.src, emoji.name); });
        container.appendChild(img);
    });
    }

    async function insertEmojiToGiscus(emojiSrc, emojiName) {
    var giscusFrame = await waitForGiscus();
    var giscusDoc = giscusFrame.contentDocument;
    var input = giscusDoc.querySelector('textarea[placeholder*="评论"]') || giscusDoc.querySelector('textarea');
    if (!input) return;

    var emojiMarkdown = '![' + emojiName + '](' + emojiSrc + ') ';
    var cursorPos = input.selectionStart;
    input.value = input.value.substring(0, cursorPos) + emojiMarkdown + input.value.substring(cursorPos);
    input.focus();
    input.selectionStart = input.selectionEnd = cursorPos + emojiMarkdown.length;
    input.dispatchEvent(new Event('input', { bubbles: true }));
    }

    function adaptDarkMode() {
    var darkModeToggle = document.querySelector('.darkmode-button');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', function() {
        setTimeout(function() {
            document.body.setAttribute('data-theme', document.documentElement.getAttribute('data-theme'));
        }, 100);
        });
    }
    }

    async function init() {
    await loadEmojiData();
    await waitForGiscus();
    createEmojiPanel();
    adaptDarkMode();
    }

    if (document.readyState === 'complete') {
    init();
    } else {
    window.addEventListener('load', init);
    }
})();

/* ============================================================
 *  6. 3D Tag Cloud (source: assets/tags/tags.js)
 * ============================================================ */
function debounce(func, wait) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      func.apply(context, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

var TagCloud = (function() {
  function TagCloud(container, tags, options) {
    this.container = container;
    this.tags = tags;
    this.options = Object.assign({
      radius: 200,
      speed: 0.5,
      font: 'Arial',
      minFont: 12,
      maxFont: 24,
      textColor: '#333',
      hoverColor: '#40e0d0'
    }, options);

    this.angle = 0;
    this.init();
  }

  TagCloud.prototype.init = function() {
    var self = this;
    this.container.innerHTML = '';

    this.tagElements = this.tags.map(function(tag, i) {
      var element = document.createElement('a');
      element.href = tag.url;
      element.className = 'tag-cloud-item';
      element.textContent = tag.name;
      element.dataset.count = tag.count;
      element.dataset.index = i;

      var fontSize = self.calculateFontSize(tag.count);
      element.style.fontSize = fontSize + 'px';

      var hue = (360 * i / self.tags.length);
      element.style.color = 'hsl(' + hue + ', 70%, 50%)';
      element.style.backgroundColor = 'hsla(' + hue + ', 70%, 50%, 0.1)';

      element.addEventListener('mouseenter', function() { self.onHover(i); });
      element.addEventListener('mouseleave', function() { self.onLeave(i); });

      self.container.appendChild(element);
      return element;
    });

    this.updateLayout();
    this.animate();
  };

  TagCloud.prototype.calculateFontSize = function(count) {
    var maxCount = Math.max.apply(null, this.tags.map(function(t) { return t.count; }));
    var minCount = Math.min.apply(null, this.tags.map(function(t) { return t.count; }));

    if (maxCount === minCount) return (this.options.minFont + this.options.maxFont) / 2;

    return this.options.minFont +
           ((count - minCount) / (maxCount - minCount)) *
           (this.options.maxFont - this.options.minFont);
  };

  TagCloud.prototype.updateLayout = function() {
    var self = this;
    var centerX = this.container.offsetWidth / 2;
    var centerY = this.container.offsetHeight / 2;
    var maxCount = Math.max.apply(null, this.tags.map(function(t) { return t.count; }));

    this.tagElements.forEach(function(element, i) {
      var count = parseInt(element.dataset.count);
      var weight = count / maxCount;

      var phi = Math.acos(-1 + (2 * i) / self.tagElements.length);
      var theta = Math.sqrt(self.tagElements.length * Math.PI) * phi + self.angle;

      var x = self.options.radius * Math.cos(theta) * Math.sin(phi) * weight;
      var y = self.options.radius * Math.sin(theta) * Math.sin(phi) * weight * 0.3;
      var z = self.options.radius * Math.cos(phi) * weight;

      var scale = 1 + (z / self.options.radius) * 0.5;
      var opacity = 0.3 + (1 - Math.abs(z) / self.options.radius) * 0.7;

      element.style.transform = 'translate3d(' + x + 'px, ' + y + 'px, ' + z + 'px) scale(' + scale + ')';
      element.style.opacity = opacity;
      element.style.zIndex = Math.round(z);
    });
  };

  TagCloud.prototype.onHover = function(index) {
    this.tagElements[index].style.transform += ' scale(1.2)';
    this.tagElements[index].style.zIndex = 1000;
    this.tagElements[index].style.color = this.options.hoverColor;
    this.options.speed *= 0.5;
  };

  TagCloud.prototype.onLeave = function(index) {
    this.options.speed *= 2;
    this.updateLayout();
  };

  TagCloud.prototype.animate = function() {
    var self = this;
    this.angle += 0.002 * this.options.speed;
    this.updateLayout();
    requestAnimationFrame(function() { self.animate(); });
  };

  return TagCloud;
})();

function initTagCloud() {
  var container = document.getElementById('tag-cloud-canvas');
  if (!container) return;

  var tagElements = document.querySelectorAll('.tag-cloud-data');
  var tags = Array.prototype.slice.call(tagElements).map(function(el) {
    var match = el.textContent.match(/\((\d+)\)/);
    return {
      name: el.textContent.split('(')[0].trim(),
      count: parseInt(match ? match[1] : '1'),
      url: el.href
    };
  });

  if (tags.length === 0) return;

  new TagCloud(container, tags, {
    radius: Math.min(window.innerWidth, window.innerHeight) * 0.3,
    speed: 0.3
  });
}

document.addEventListener('DOMContentLoaded', initTagCloud);
window.addEventListener('load', initTagCloud);
window.addEventListener('resize', debounce(initTagCloud, 250));

/* ============================================================
 *  7. New Year Sidebar (source: assets/newyear/newyear.js)
 * ============================================================ */
function newYear() {
  if (!document.querySelector('#newYear')) return;
  var SpringFestival = new Date('2027-02-06 00:00:00');
  var newYear = SpringFestival.getTime() / 1000;
  var week = { 0: '周日', 1: '周一', 2: '周二', 3: '周三', 4: '周四', 5: '周五', 6: '周六' };
  function nol(h) { h = Number(h); return h > 9 ? h : '0' + h; }
  time();

  function time() {
    var now = new Date();

    document.querySelector('#newYear .today').innerHTML = now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate() + ' ' + week[now.getDay()];

    var second = newYear - Math.round(now.getTime() / 1000);

    if (second < 0) {
      window.newYearTimer = null;
      document.querySelector('#newYear .title').innerHTML = 'Happy New Year!';
      document.querySelector('#newYear .newYear-time').innerHTML = '<span class="happyNewYear">新年快乐</span>';
    } else {
      document.querySelector('#newYear .title').innerHTML = '距离' + SpringFestival.getFullYear() + '年春节：';
      if (second > 86400) {
        document.querySelector('#newYear .newYear-time').innerHTML = '<span class="day">' + Math.ceil(second / 86400) + '</span><span class="unit">天</span>';
      } else {
        var h = nol(parseInt(second / 3600));
        second %= 3600;
        var m = nol(parseInt(second / 60));
        second %= 60;
        var s = nol(second);
        document.querySelector('#newYear .newYear-time').innerHTML = '<span class="time">' + h + ':' + m + ':' + s + '</span></span>';
        if (!window.newYearTimer) window.newYearTimer = setInterval(time, 1000);
      }
    }
  }
}

function newYearSwiper() {
  var swiper = new Swiper('.newYear-slider', {
    passiveListeners: true,
    loop: true,
    autoplay: {
      disableOnInteraction: true,
      delay: 5000
    },
    effect: 'fade',
    mousewheel: true,
    autoHeight: true
  });

  var comtainer = document.querySelector('.newYear-slider');
  if (comtainer !== null) {
    comtainer.onmouseenter = function() { swiper.autoplay.stop(); };
    comtainer.onmouseleave = function() { swiper.autoplay.start(); };
  }
}

function whenDOMReady() {
  newYear();
  newYearSwiper();
}

whenDOMReady();
document.addEventListener("pjax:complete", whenDOMReady);

/* ============================================================
 *  8. Live2D Toggle (source: assets/live2d/live2d.js)
 * ============================================================ */
(function() {
    function getLive2dContainer() {
      if (window.oml2d && window.oml2d.stage && window.oml2d.stage.canvas) {
        return window.oml2d.stage.canvas.parentElement.parentElement;
      }
      var _el = document.querySelector('.live2d-stage, [class*="live2d"] canvas');
      return _el && _el.parentElement && _el.parentElement.parentElement;
    }

    function toggleLive2d() {
      var container = getLive2dContainer();
      if (!container) return;
      var isHidden = container.style.display === 'none';
      container.style.display = isHidden ? 'block' : 'none';
      var btn = document.getElementById('live2d-toggle');
      if (btn) {
        btn.innerHTML = isHidden ? '<i class="fa-solid fa-eye-slash"></i>' : '<i class="fa-solid fa-eye"></i>';
        btn.title = isHidden ? '隐藏模型' : '显示模型';
      }
    }

    function addLive2dButtons() {
      var rightside = document.getElementById('rightside');
      if (!rightside || document.getElementById('live2d-toggle')) return;

      var toggleBtn = document.createElement('div');
      toggleBtn.id = 'live2d-toggle';
      toggleBtn.className = 'rightside-item';
      toggleBtn.innerHTML = '<i class="fa-solid fa-eye"></i>';
      toggleBtn.title = '隐藏模型';
      toggleBtn.addEventListener('click', toggleLive2d);

      rightside.prepend(toggleBtn);
    }

    addLive2dButtons();
    window.addEventListener('pjax:complete', addLive2dButtons);
})();

/* ============================================================
 *  9. Universe Starry Background (source: assets/universe/universe.js)
 * ============================================================ */
function dark() {window.requestAnimationFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame;var n,e,i,h,t=.05,s=document.getElementById("universe"),o=!0,a="180,184,240",r="226,225,142",d="226,225,224",c=[];function f(){n=window.innerWidth,e=window.innerHeight,i=.216*n,s.setAttribute("width",n),s.setAttribute("height",e)}function u(){h.clearRect(0,0,n,e);for(var t=c.length,i=0;i<t;i++){var s=c[i];s.move(),s.fadeIn(),s.fadeOut(),s.draw()}}function y(){this.reset=function(){this.giant=m(3),this.comet=!this.giant&&!o&&m(10),this.x=l(0,n-10),this.y=l(0,e),this.r=l(1.1,2.6),this.dx=l(t,6*t)+(this.comet+1-1)*t*l(50,120)+2*t,this.dy=-l(t,6*t)-(this.comet+1-1)*t*l(50,120),this.fadingOut=null,this.fadingIn=!0,this.opacity=0,this.opacityTresh=l(.2,1-.4*(this.comet+1-1)),this.do=l(5e-4,.002)+.001*(this.comet+1-1)},this.fadeIn=function(){this.fadingIn&&(this.fadingIn=!(this.opacity>this.opacityTresh),this.opacity+=this.do)},this.fadeOut=function(){this.fadingOut&&(this.fadingOut=!(this.opacity<0),this.opacity-=this.do/2,(this.x>n||this.y<0)&&(this.fadingOut=!1,this.reset()))},this.draw=function(){if(h.beginPath(),this.giant)h.fillStyle="rgba("+a+","+this.opacity+")",h.arc(this.x,this.y,2,0,2*Math.PI,!1);else if(this.comet){h.fillStyle="rgba("+d+","+this.opacity+")",h.arc(this.x,this.y,1.5,0,2*Math.PI,!1);for(var t=0;t<30;t++)h.fillStyle="rgba("+d+","+(this.opacity-this.opacity/20*t)+")",h.rect(this.x-this.dx/4*t,this.y-this.dy/4*t-2,2,2),h.fill()}else h.fillStyle="rgba("+r+","+this.opacity+")",h.rect(this.x,this.y,this.r,this.r);h.closePath(),h.fill()},this.move=function(){this.x+=this.dx,this.y+=this.dy,!1===this.fadingOut&&this.reset(),(this.x>n-n/4||this.y<0)&&(this.fadingOut=!0)},setTimeout(function(){o=!1},50)}function m(t){return Math.floor(1e3*Math.random())+1<10*t}function l(t,i){return Math.random()*(i-t)+t}f(),window.addEventListener("resize",f,!1),function(){h=s.getContext("2d");for(var t=0;t<i;t++)c[t]=new y,c[t].reset();u()}(),function t(){document.getElementsByTagName('html')[0].getAttribute('data-theme')=='dark'&&u(),window.requestAnimationFrame(t)}()};
dark();

/* ============================================================
 *  10. Music Page (source: music page)
 * ============================================================ */
(function() {
  'use strict';

  var METING_API_MIRRORS = [
    'https://api.i-meto.com/meting/api',
    'https://api.injahow.cn/meting/api'
  ];

  function escapeHtml(str) {
    var div = document.createElement('div');
    div.textContent = str || '';
    return div.innerHTML;
  }

  function getSongLink(song) {
    if (song.url_id) return 'https://music.163.com/#/song?id=' + song.url_id;
    if (song.url) {
      var m = song.url.match(/[?&]id=(\d+)/);
      if (m) return 'https://music.163.com/#/song?id=' + m[1];
    }
    return null;
  }

  function createSongCard(song) {
    var link = getSongLink(song);
    var el = document.createElement(link ? 'a' : 'div');
    el.className = 'music-song-card';
    if (link) { el.href = link; el.target = '_blank'; el.rel = 'noopener'; }
    el.title = (song.name || '') + ' - ' + (song.artist || '');

    var cover = song.pic || song.cover || '';
    var name = escapeHtml(song.name || '未知歌曲');
    var artist = escapeHtml(song.artist || '未知艺术家');
    var album = escapeHtml(song.album || '');

    el.innerHTML =
      '<img class="music-song-cover" src="' + cover + '" alt="" loading="lazy" ' +
      'onerror="this.style.display=\'none\'">' +
      '<div class="music-song-info">' +
        '<div class="music-song-name">' + name + '</div>' +
        '<div class="music-song-artist">' + artist + '</div>' +
        (album ? '<div class="music-song-album">' + album + '</div>' : '') +
      '</div>';
    return el;
  }

  function fetchPlaylist(server, type, id, mirrorIndex) {
    mirrorIndex = mirrorIndex || 0;
    if (mirrorIndex >= METING_API_MIRRORS.length) {
      return Promise.reject(new Error('所有 API 镜像不可用'));
    }
    var url = METING_API_MIRRORS[mirrorIndex] +
      '?server=' + encodeURIComponent(server) +
      '&type=' + encodeURIComponent(type) +
      '&id=' + encodeURIComponent(id);
    return fetch(url).then(function(resp) {
      if (!resp.ok) throw new Error('HTTP ' + resp.status);
      return resp.json();
    }).catch(function() {
      return fetchPlaylist(server, type, id, mirrorIndex + 1);
    });
  }

  function initPlaylist(container) {
    var id = container.dataset.id;
    var server = container.dataset.server || 'netease';
    var type = container.dataset.type || 'playlist';
    var title = container.dataset.title || '歌单 ' + id;

    var titleEl = document.createElement('h2');
    titleEl.className = 'music-playlist-title';
    titleEl.innerHTML =
      '<span>' + escapeHtml(title) + '</span>' +
      '<a class="music-platform-link" href="https://music.163.com/#/playlist?id=' +
      escapeHtml(id) + '" target="_blank" rel="noopener">在网易云打开 →</a>';
    container.appendChild(titleEl);

    var grid = document.createElement('div');
    grid.className = 'music-song-grid';
    grid.innerHTML = '<div class="music-loading">加载中...</div>';
    container.appendChild(grid);

    fetchPlaylist(server, type, id).then(function(songs) {
      grid.innerHTML = '';
      if (!songs || !Array.isArray(songs) || songs.length === 0) {
        grid.innerHTML = '<div class="music-empty">该歌单暂无歌曲</div>';
        return;
      }
      songs.forEach(function(song) {
        grid.appendChild(createSongCard(song));
      });
    }).catch(function(err) {
      console.error('歌单加载失败:', err);
      grid.innerHTML = '<div class="music-error">加载失败，请刷新页面重试</div>';
    });
  }

  function initMusicPage() {
    var playlists = document.querySelectorAll('.music-playlist');
    if (playlists.length === 0) return;
    for (var i = 0; i < playlists.length; i++) {
      initPlaylist(playlists[i]);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMusicPage);
  } else {
    initMusicPage();
  }
})();

/* ============================================================
 *  11. Photos Page (source: photos page)
 * ============================================================ */
(function() {
  'use strict';

  var lightbox = null;

  function createLightbox() {
    if (lightbox) return lightbox;

    var lb = document.createElement('div');
    lb.id = 'photos-lightbox';
    lb.innerHTML =
      '<span class="photos-lightbox-close">&times;</span>' +
      '<img src="" alt="">' +
      '<div class="photos-lightbox-caption"></div>';
    document.body.appendChild(lb);

    var img = lb.querySelector('img');
    var caption = lb.querySelector('.photos-lightbox-caption');

    function close() {
      lb.classList.remove('active');
      document.body.style.overflow = '';
    }

    lb.addEventListener('click', function(e) {
      if (e.target === lb || e.target.classList.contains('photos-lightbox-close')) {
        close();
      }
    });

    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && lb.classList.contains('active')) close();
    });

    lightbox = {
      show: function(src, cap) {
        img.src = src;
        caption.textContent = cap || '';
        lb.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    };
    return lightbox;
  }

  function initPhotosPage() {
    var wrapper = document.querySelector('.photos-page-container');
    if (!wrapper) return;

    var lb = createLightbox();

    wrapper.addEventListener('click', function(e) {
      var item = e.target.closest('.photos-item');
      if (!item) return;
      var imgEl = item.querySelector('img');
      if (!imgEl) return;
      lb.show(imgEl.src, imgEl.dataset.caption || imgEl.alt || '');
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPhotosPage);
  } else {
    initPhotosPage();
  }
})();

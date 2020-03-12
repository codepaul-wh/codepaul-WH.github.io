(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{396:function(t,e,r){"use strict";r.r(e);var a=r(26),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"redis-脚本"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#redis-脚本"}},[t._v("#")]),t._v(" Redis 脚本")]),t._v(" "),r("p",[t._v("Redis 脚本使用 Lua 解释器来执行脚本。 Reids 2.6 版本通过内嵌支持 Lua 环境。执行脚本的常用命令为 "),r("strong",[t._v("EVAL")]),t._v("。")]),t._v(" "),r("h3",{attrs:{id:"语法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[t._v("#")]),t._v(" 语法")]),t._v(" "),r("p",[t._v("Eval 命令的基本语法如下：")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("redis 127.0.0.1:6379> EVAL script numkeys key [key ...] arg [arg ...]\n")])])]),r("h3",{attrs:{id:"实例"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#实例"}},[t._v("#")]),t._v(" 实例")]),t._v(" "),r("p",[t._v("以下实例演示了 redis 脚本工作过程：")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v('redis 127.0.0.1:6379> EVAL "return {KEYS[1],KEYS[2],ARGV[1],ARGV[2]}" 2 key1 key2 first second\n \n1) "key1"\n2) "key2"\n3) "first"\n4) "second"\n')])])]),r("hr"),t._v(" "),r("h2",{attrs:{id:"redis-脚本命令"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#redis-脚本命令"}},[t._v("#")]),t._v(" Redis 脚本命令")]),t._v(" "),r("p",[t._v("下表列出了 redis 脚本常用命令：")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",{staticStyle:{"text-align":"left"}},[t._v("序号")]),t._v(" "),r("th",{staticStyle:{"text-align":"left"}},[t._v("命令及描述")])])]),t._v(" "),r("tbody",[r("tr",[r("td",{staticStyle:{"text-align":"left"}},[t._v("1")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("[EVAL script numkeys key "),r("a",{attrs:{href:"https://www.redis.net.cn/order/3643.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("key ...] arg [arg ...]"),r("OutboundLink")],1),t._v(" 执行 Lua 脚本。")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[t._v("2")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("[EVALSHA sha1 numkeys key "),r("a",{attrs:{href:"https://www.redis.net.cn/order/3644.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("key ...] arg [arg ...]"),r("OutboundLink")],1),t._v(" 执行 Lua 脚本。")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[t._v("3")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("[SCRIPT EXISTS script "),r("a",{attrs:{href:"https://www.redis.net.cn/order/3645.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("script ...]"),r("OutboundLink")],1),t._v(" 查看指定的脚本是否已经被保存在缓存当中。")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[t._v("4")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"https://www.redis.net.cn/order/3646.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("SCRIPT FLUSH"),r("OutboundLink")],1),t._v(" 从脚本缓存中移除所有脚本。")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[t._v("5")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"https://www.redis.net.cn/order/3647.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("SCRIPT KILL"),r("OutboundLink")],1),t._v(" 杀死当前正在运行的 Lua 脚本。")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[t._v("6")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"https://www.redis.net.cn/order/3648.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("SCRIPT LOAD script"),r("OutboundLink")],1),t._v(" 将脚本 script 添加到脚本缓存中，但并不立即执行这个脚本。")])])])])])}),[],!1,null,null,null);e.default=s.exports}}]);
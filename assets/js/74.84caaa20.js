(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{377:function(t,e,r){"use strict";r.r(e);var n=r(26),a=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"redis-集合-set"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#redis-集合-set"}},[t._v("#")]),t._v(" Redis 集合(Set)")]),t._v(" "),r("p",[t._v("Redis的Set是string类型的无序集合。集合成员是唯一的，这就意味着集合中不能出现重复的数据。")]),t._v(" "),r("p",[t._v("Redis 中 集合是通过哈希表实现的，所以添加，删除，查找的复杂度都是O(1)。")]),t._v(" "),r("p",[t._v("集合中最大的成员数为 232 - 1 (4294967295, 每个集合可存储40多亿个成员)。")]),t._v(" "),r("h3",{attrs:{id:"实例"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#实例"}},[t._v("#")]),t._v(" 实例")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v('redis 127.0.0.1:6379> SADD w3ckey redis\n(integer) 1\nredis 127.0.0.1:6379> SADD w3ckey mongodb\n(integer) 1\nredis 127.0.0.1:6379> SADD w3ckey mysql\n(integer) 1\nredis 127.0.0.1:6379> SADD w3ckey mysql\n(integer) 0\nredis 127.0.0.1:6379> SMEMBERS w3ckey\n \n1) "mysql"\n2) "mongodb"\n3) "redis"\n')])])]),r("p",[t._v("在以上实例中我们通过 "),r("strong",[t._v("SADD")]),t._v(" 命令向名为 w3ckey 的集合插入的三个元素。")]),t._v(" "),r("hr"),t._v(" "),r("h2",{attrs:{id:"redis-集合命令"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#redis-集合命令"}},[t._v("#")]),t._v(" Redis 集合命令")]),t._v(" "),r("p",[t._v("下表列出了 Redis 集合基本命令：")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",{staticStyle:{"text-align":"left"}},[t._v("序号")]),t._v(" "),r("th",{staticStyle:{"text-align":"left"}},[t._v("命令及描述")])])]),t._v(" "),r("tbody",[r("tr",[r("td",{staticStyle:{"text-align":"left"}},[t._v("1")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("[SADD key member1 "),r("a",{attrs:{href:"https://www.redis.net.cn/order/3594.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("member2]"),r("OutboundLink")],1),t._v(" 向集合添加一个或多个成员")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[t._v("2")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"https://www.redis.net.cn/order/3595.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("SCARD key"),r("OutboundLink")],1),t._v(" 获取集合的成员数")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[t._v("3")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("[SDIFF key1 "),r("a",{attrs:{href:"https://www.redis.net.cn/order/3596.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("key2]"),r("OutboundLink")],1),t._v(" 返回给定所有集合的差集")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[t._v("4")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("[SDIFFSTORE destination key1 "),r("a",{attrs:{href:"https://www.redis.net.cn/order/3597.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("key2]"),r("OutboundLink")],1),t._v(" 返回给定所有集合的差集并存储在 destination 中")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[t._v("5")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("[SINTER key1 "),r("a",{attrs:{href:"https://www.redis.net.cn/order/3598.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("key2]"),r("OutboundLink")],1),t._v(" 返回给定所有集合的交集")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[t._v("6")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("[SINTERSTORE destination key1 "),r("a",{attrs:{href:"https://www.redis.net.cn/order/3599.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("key2]"),r("OutboundLink")],1),t._v(" 返回给定所有集合的交集并存储在 destination 中")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[t._v("7")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"https://www.redis.net.cn/order/3600.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("SISMEMBER key member"),r("OutboundLink")],1),t._v(" 判断 member 元素是否是集合 key 的成员")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[t._v("8")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"https://www.redis.net.cn/order/3601.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("SMEMBERS key"),r("OutboundLink")],1),t._v(" 返回集合中的所有成员")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[t._v("9")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"https://www.redis.net.cn/order/3602.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("SMOVE source destination member"),r("OutboundLink")],1),t._v(" 将 member 元素从 source 集合移动到 destination 集合")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[t._v("10")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"https://www.redis.net.cn/order/3603.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("SPOP key"),r("OutboundLink")],1),t._v(" 移除并返回集合中的一个随机元素")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[t._v("11")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("[SRANDMEMBER key "),r("a",{attrs:{href:"https://www.redis.net.cn/order/3604.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("count]"),r("OutboundLink")],1),t._v(" 返回集合中一个或多个随机数")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[t._v("12")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("[SREM key member1 "),r("a",{attrs:{href:"https://www.redis.net.cn/order/3605.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("member2]"),r("OutboundLink")],1),t._v(" 移除集合中一个或多个成员")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[t._v("13")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("[SUNION key1 "),r("a",{attrs:{href:"https://www.redis.net.cn/order/3606.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("key2]"),r("OutboundLink")],1),t._v(" 返回所有给定集合的并集")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[t._v("14")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("[SUNIONSTORE destination key1 "),r("a",{attrs:{href:"https://www.redis.net.cn/order/3607.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("key2]"),r("OutboundLink")],1),t._v(" 所有给定集合的并集存储在 destination 集合中")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[t._v("15")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("[SSCAN key cursor "),r("a",{attrs:{href:"https://www.redis.net.cn/order/3608.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("MATCH pattern] [COUNT count]"),r("OutboundLink")],1),t._v(" 迭代集合中的元素")])])])])])}),[],!1,null,null,null);e.default=a.exports}}]);
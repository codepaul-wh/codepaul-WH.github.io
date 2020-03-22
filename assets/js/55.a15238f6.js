(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{412:function(t,e,r){"use strict";r.r(e);var n=r(26),a=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"redis-发布订阅"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#redis-发布订阅"}},[t._v("#")]),t._v(" Redis 发布订阅")]),t._v(" "),r("p",[t._v("Redis 发布订阅(pub/sub)是一种消息通信模式：发送者(pub)发送消息，订阅者(sub)接收消息。")]),t._v(" "),r("p",[t._v("Redis 客户端可以订阅任意数量的频道。")]),t._v(" "),r("p",[t._v("下图展示了频道 channel1 ， 以及订阅这个频道的三个客户端 —— client2 、 client5 和 client1 之间的关系：")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://www.redis.net.cn/Image/pubsub1.png",alt:"pubsub1"}})]),t._v(" "),r("p",[t._v("当有新消息通过 PUBLISH 命令发送给频道 channel1 时， 这个消息就会被发送给订阅它的三个客户端：")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://www.redis.net.cn/Image/pubsub2.png",alt:"pubsub2"}})]),t._v(" "),r("hr"),t._v(" "),r("h2",{attrs:{id:"实例"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#实例"}},[t._v("#")]),t._v(" 实例")]),t._v(" "),r("p",[t._v("以下实例演示了发布订阅是如何工作的。在我们实例中我们创建了订阅频道名为 "),r("strong",[t._v("redisChat")]),t._v(":")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v('redis 127.0.0.1:6379> SUBSCRIBE redisChat\n \nReading messages... (press Ctrl-C to quit)\n1) "subscribe"\n2) "redisChat"\n3) (integer) 1\n')])])]),r("p",[t._v("现在，我们先重新开启个 redis 客户端，然后在同一个频道 redisChat 发布两次消息，订阅者就能接收到消息。")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v('redis 127.0.0.1:6379> PUBLISH redisChat "Redis is a great caching technique"\n \n(integer) 1\n \nredis 127.0.0.1:6379> PUBLISH redisChat "Learn redis by w3cschool.cc"\n \n(integer) 1\n \n# 订阅者的客户端会显示如下消息\n1) "message"\n2) "redisChat"\n3) "Redis is a great caching technique"\n1) "message"\n2) "redisChat"\n3) "Learn redis by w3cschool.cc"\n')])])]),r("hr"),t._v(" "),r("h2",{attrs:{id:"redis-发布订阅命令"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#redis-发布订阅命令"}},[t._v("#")]),t._v(" Redis 发布订阅命令")]),t._v(" "),r("p",[t._v("下表列出了 redis 发布订阅常用命令：")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",{staticStyle:{"text-align":"left"}},[t._v("序号")]),t._v(" "),r("th",{staticStyle:{"text-align":"left"}},[t._v("命令及描述")])])]),t._v(" "),r("tbody",[r("tr",[r("td",{staticStyle:{"text-align":"left"}},[t._v("1")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("[PSUBSCRIBE pattern "),r("a",{attrs:{href:"https://www.redis.net.cn/order/3632.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("pattern ...]"),r("OutboundLink")],1),t._v(" 订阅一个或多个符合给定模式的频道。")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[t._v("2")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("[PUBSUB subcommand "),r("a",{attrs:{href:"https://www.redis.net.cn/order/3633.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("argument [argument ...]]"),r("OutboundLink")],1),t._v(" 查看订阅与发布系统状态。")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[t._v("3")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"https://www.redis.net.cn/order/3634.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("PUBLISH channel message"),r("OutboundLink")],1),t._v(" 将信息发送到指定的频道。")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[t._v("4")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("[PUNSUBSCRIBE "),r("a",{attrs:{href:"https://www.redis.net.cn/order/3635.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("pattern [pattern ...]]"),r("OutboundLink")],1),t._v(" 退订所有给定模式的频道。")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[t._v("5")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("[SUBSCRIBE channel "),r("a",{attrs:{href:"https://www.redis.net.cn/order/3636.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("channel ...]"),r("OutboundLink")],1),t._v(" 订阅给定的一个或多个频道的信息。")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[t._v("6")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("[UNSUBSCRIBE "),r("a",{attrs:{href:"https://www.redis.net.cn/order/3637.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("channel [channel ...]]"),r("OutboundLink")],1),t._v(" 指退订给定的频道。")])])])])])}),[],!1,null,null,null);e.default=a.exports}}]);
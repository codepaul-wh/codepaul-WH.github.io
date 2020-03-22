(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{405:function(t,e,a){"use strict";a.r(e);var s=a(26),l=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"redis-客户端连接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redis-客户端连接"}},[t._v("#")]),t._v(" Redis 客户端连接")]),t._v(" "),a("p",[t._v("Redis 通过监听一个 TCP 端口或者 Unix socket 的方式来接收来自客户端的连接，当一个连接建立后，Redis 内部会进行以下一些操作：")]),t._v(" "),a("ul",[a("li",[t._v("首先，客户端 socket 会被设置为非阻塞模式，因为 Redis 在网络事件处理上采用的是非阻塞多路复用模型。")]),t._v(" "),a("li",[t._v("然后为这个 socket 设置 TCP_NODELAY 属性，禁用 Nagle 算法")]),t._v(" "),a("li",[t._v("然后创建一个可读的文件事件用于监听这个客户端 socket 的数据发送")])]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"最大连接数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#最大连接数"}},[t._v("#")]),t._v(" 最大连接数")]),t._v(" "),a("p",[t._v("在 Redis2.4 中，最大连接数是被直接硬编码在代码里面的，而在2.6版本中这个值变成可配置的。")]),t._v(" "),a("p",[t._v("maxclients 的默认值是 10000，你也可以在 redis.conf 中对这个值进行修改。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('config get maxclients \n1) "maxclients"\n2) "10000"\n')])])]),a("h3",{attrs:{id:"实例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实例"}},[t._v("#")]),t._v(" 实例")]),t._v(" "),a("p",[t._v("以下实例我们在服务启动时设置最大连接数为 100000：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("redis-server --maxclients 100000\n")])])]),a("hr"),t._v(" "),a("h2",{attrs:{id:"客户端命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#客户端命令"}},[t._v("#")]),t._v(" 客户端命令")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("S.N.")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("命令")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("1")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("CLIENT LIST")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("返回连接到 redis 服务的客户端列表")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("2")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("CLIENT SETNAME")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("设置当前连接的名称")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("3")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("CLIENT GETNAME")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("获取通过 CLIENT SETNAME 命令设置的服务名称")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("4")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("CLIENT PAUSE")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("挂起客户端连接，指定挂起的时间以毫秒计")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("5")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("CLIENT KILL")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("关闭客户端连接")])])])])])}),[],!1,null,null,null);e.default=l.exports}}]);
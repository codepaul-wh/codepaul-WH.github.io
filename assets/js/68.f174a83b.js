(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{394:function(e,n,s){"use strict";s.r(n);var t=s(26),i=Object(t.a)({},(function(){var e=this,n=e.$createElement,s=e._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"redis-管道技术"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#redis-管道技术"}},[e._v("#")]),e._v(" Redis 管道技术")]),e._v(" "),s("p",[e._v("Redis是一种基于客户端-服务端模型以及请求/响应协议的TCP服务。这意味着通常情况下一个请求会遵循以下步骤：")]),e._v(" "),s("ul",[s("li",[e._v("客户端向服务端发送一个查询请求，并监听Socket返回，通常是以阻塞模式，等待服务端响应。")]),e._v(" "),s("li",[e._v("服务端处理命令，并将结果返回给客户端。")])]),e._v(" "),s("hr"),e._v(" "),s("h2",{attrs:{id:"redis-管道技术-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#redis-管道技术-2"}},[e._v("#")]),e._v(" Redis 管道技术")]),e._v(" "),s("p",[e._v("Redis 管道技术可以在服务端未响应时，客户端可以继续向服务端发送请求，并最终一次性读取所有服务端的响应。")]),e._v(" "),s("h3",{attrs:{id:"实例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实例"}},[e._v("#")]),e._v(" 实例")]),e._v(" "),s("p",[e._v("查看 redis 管道，只需要启动 redis 实例并输入以下命令：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('$(echo -en "PING\\r\\n SET w3ckey redis\\r\\nGET w3ckey\\r\\nINCR visitor\\r\\nINCR visitor\\r\\nINCR visitor\\r\\n"; sleep 10) | nc localhost 6379\n \n+PONG\n+OK\nredis\n:1\n:2\n:3\n')])])]),s("p",[e._v("以上实例中我们通过使用 "),s("strong",[e._v("PING")]),e._v(" 命令查看redis服务是否可用， 之后我们们设置了 w3ckey 的值为 redis，然后我们获取 w3ckey 的值并使得 visitor 自增 3 次。")]),e._v(" "),s("p",[e._v("在返回的结果中我们可以看到这些命令一次性向 redis 服务提交，并最终一次性读取所有服务端的响应")]),e._v(" "),s("hr"),e._v(" "),s("h2",{attrs:{id:"管道技术的优势"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#管道技术的优势"}},[e._v("#")]),e._v(" 管道技术的优势")]),e._v(" "),s("p",[e._v("管道技术最显著的优势是提高了 redis 服务的性能。")]),e._v(" "),s("h3",{attrs:{id:"一些测试数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一些测试数据"}},[e._v("#")]),e._v(" 一些测试数据")]),e._v(" "),s("p",[e._v("在下面的测试中，我们将使用Redis的Ruby客户端，支持管道技术特性，测试管道技术对速度的提升效果。")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('require \'rubygems\' \nrequire \'redis\'\ndef bench(descr) \nstart = Time.now \nyield \nputs "#{descr} #{Time.now-start} seconds" \nend\ndef without_pipelining \nr = Redis.new \n10000.times { \n        r.ping \n} \nend\ndef with_pipelining \nr = Redis.new \nr.pipelined { \n        10000.times { \n                r.ping \n        } \n} \nend\nbench("without pipelining") { \n        without_pipelining \n} \nbench("with pipelining") { \n        with_pipelining \n}\n')])])]),s("p",[e._v("从处于局域网中的Mac OS X系统上执行上面这个简单脚本的数据表明，开启了管道操作后，往返时延已经被改善得相当低了。")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("without pipelining 1.185238 seconds \nwith pipelining 0.250783 seconds\n")])])]),s("p",[e._v("如你所见，开启管道后，我们的速度效率提升了5倍。")])])}),[],!1,null,null,null);n.default=i.exports}}]);
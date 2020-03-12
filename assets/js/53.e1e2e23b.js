(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{411:function(t,e,r){"use strict";r.r(e);var n=r(26),a=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"redis-列表-list"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#redis-列表-list"}},[t._v("#")]),t._v(" Redis 列表(List)")]),t._v(" "),r("p",[t._v("Redis列表是简单的字符串列表，按照插入顺序排序。你可以添加一个元素导列表的头部（左边）或者尾部（右边）")]),t._v(" "),r("p",[t._v("一个列表最多可以包含 232 - 1 个元素 (4294967295, 每个列表超过40亿个元素)。")]),t._v(" "),r("h3",{attrs:{id:"实例"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#实例"}},[t._v("#")]),t._v(" 实例")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v('redis 127.0.0.1:6379> LPUSH w3ckey redis\n(integer) 1\nredis 127.0.0.1:6379> LPUSH w3ckey mongodb\n(integer) 2\nredis 127.0.0.1:6379> LPUSH w3ckey mysql\n(integer) 3\nredis 127.0.0.1:6379> LRANGE w3ckey 0 10\n \n1) "mysql"\n2) "mongodb"\n3) "redis"\n')])])]),r("p",[t._v("在以上实例中我们使用了 "),r("strong",[t._v("LPUSH")]),t._v(" 将三个值插入了名为 w3ckey 的列表当中。")]),t._v(" "),r("h3",{attrs:{id:"redis-列表命令"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#redis-列表命令"}},[t._v("#")]),t._v(" Redis 列表命令")]),t._v(" "),r("p",[t._v("下表列出了列表相关的基本命令：")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",{staticStyle:{"text-align":"left"}},[t._v("序号")]),t._v(" "),r("th",{staticStyle:{"text-align":"left"}},[t._v("命令及描述")])])]),t._v(" "),r("tbody",[r("tr",[r("td",{staticStyle:{"text-align":"left"}},[t._v("1")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("[BLPOP key1 "),r("a",{attrs:{href:"https://www.redis.net.cn/order/3577.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("key2 ] timeout"),r("OutboundLink")],1),t._v(" 移出并获取列表的第一个元素， 如果列表没有元素会阻塞列表直到等待超时或发现可弹出元素为止。")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[t._v("2")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("[BRPOP key1 "),r("a",{attrs:{href:"https://www.redis.net.cn/order/3578.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("key2 ] timeout"),r("OutboundLink")],1),t._v(" 移出并获取列表的最后一个元素， 如果列表没有元素会阻塞列表直到等待超时或发现可弹出元素为止。")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[t._v("3")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"https://www.redis.net.cn/order/3579.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("BRPOPLPUSH source destination timeout"),r("OutboundLink")],1),t._v(" 从列表中弹出一个值，将弹出的元素插入到另外一个列表中并返回它； 如果列表没有元素会阻塞列表直到等待超时或发现可弹出元素为止。")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[t._v("4")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"https://www.redis.net.cn/order/3580.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("LINDEX key index"),r("OutboundLink")],1),t._v(" 通过索引获取列表中的元素")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[t._v("5")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"https://www.redis.net.cn/order/3581.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("LINSERT key BEFORE|AFTER pivot value"),r("OutboundLink")],1),t._v(" 在列表的元素前或者后插入元素")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[t._v("6")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"https://www.redis.net.cn/order/3582.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("LLEN key"),r("OutboundLink")],1),t._v(" 获取列表长度")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[t._v("7")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"https://www.redis.net.cn/order/3583.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("LPOP key"),r("OutboundLink")],1),t._v(" 移出并获取列表的第一个元素")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[t._v("8")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("[LPUSH key value1 "),r("a",{attrs:{href:"https://www.redis.net.cn/order/3584.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("value2]"),r("OutboundLink")],1),t._v(" 将一个或多个值插入到列表头部")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[t._v("9")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"https://www.redis.net.cn/order/3585.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("LPUSHX key value"),r("OutboundLink")],1),t._v(" 将一个或多个值插入到已存在的列表头部")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[t._v("10")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"https://www.redis.net.cn/order/3586.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("LRANGE key start stop"),r("OutboundLink")],1),t._v(" 获取列表指定范围内的元素")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[t._v("11")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"https://www.redis.net.cn/order/3587.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("LREM key count value"),r("OutboundLink")],1),t._v(" 移除列表元素")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[t._v("12")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"https://www.redis.net.cn/order/3588.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("LSET key index value"),r("OutboundLink")],1),t._v(" 通过索引设置列表元素的值")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[t._v("13")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"https://www.redis.net.cn/order/3589.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("LTRIM key start stop"),r("OutboundLink")],1),t._v(" 对一个列表进行修剪(trim)，就是说，让列表只保留指定区间内的元素，不在指定区间之内的元素都将被删除。")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[t._v("14")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"https://www.redis.net.cn/order/3590.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("RPOP key"),r("OutboundLink")],1),t._v(" 移除并获取列表最后一个元素")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[t._v("15")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"https://www.redis.net.cn/order/3591.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("RPOPLPUSH source destination"),r("OutboundLink")],1),t._v(" 移除列表的最后一个元素，并将该元素添加到另一个列表并返回")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[t._v("16")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("[RPUSH key value1 "),r("a",{attrs:{href:"https://www.redis.net.cn/order/3592.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("value2]"),r("OutboundLink")],1),t._v(" 在列表中添加一个或多个值")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[t._v("17")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"https://www.redis.net.cn/order/3593.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("RPUSHX key value"),r("OutboundLink")],1),t._v(" 为已存在的列表添加值")])])])])])}),[],!1,null,null,null);e.default=a.exports}}]);
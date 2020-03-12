(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{378:function(t,e,r){"use strict";r.r(e);var n=r(26),a=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"redis-键-key"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#redis-键-key"}},[t._v("#")]),t._v(" Redis 键(key)")]),t._v(" "),r("p",[t._v("Redis 键命令用于管理 redis 的键。")]),t._v(" "),r("h3",{attrs:{id:"语法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[t._v("#")]),t._v(" 语法")]),t._v(" "),r("p",[t._v("Redis 键命令的基本语法如下：")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("redis 127.0.0.1:6379> COMMAND KEY_NAME\n")])])]),r("h3",{attrs:{id:"实例"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#实例"}},[t._v("#")]),t._v(" 实例")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("redis 127.0.0.1:6379> SET w3ckey redis\nOK\nredis 127.0.0.1:6379> DEL w3ckey\n(integer) 1\n")])])]),r("p",[t._v("在以上实例中 "),r("strong",[t._v("DEL")]),t._v(" 是一个命令， "),r("strong",[t._v("w3ckey")]),t._v(" 是一个键。 如果键被删除成功，命令执行后输出 "),r("strong",[t._v("(integer) 1")]),t._v("，否则将输出 "),r("strong",[t._v("(integer) 0")])]),t._v(" "),r("hr"),t._v(" "),r("h2",{attrs:{id:"redis-keys-命令"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#redis-keys-命令"}},[t._v("#")]),t._v(" Redis keys 命令")]),t._v(" "),r("p",[t._v("下表给出了与 Redis 键相关的基本命令：")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",{staticStyle:{"text-align":"left"}},[t._v("序号")]),t._v(" "),r("th",{staticStyle:{"text-align":"left"}},[t._v("命令及描述")])])]),t._v(" "),r("tbody",[r("tr",[r("td",{staticStyle:{"text-align":"left"}},[t._v("1")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"https://www.redis.net.cn/order/3528.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("DEL key"),r("OutboundLink")],1),t._v(" 该命令用于在 key 存在是删除 key。")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[t._v("2")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"https://www.redis.net.cn/order/3529.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("DUMP key"),r("OutboundLink")],1),t._v(" 序列化给定 key ，并返回被序列化的值。")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[t._v("3")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"https://www.redis.net.cn/order/3530.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("EXISTS key"),r("OutboundLink")],1),t._v(" 检查给定 key 是否存在。")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[t._v("4")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"https://www.redis.net.cn/order/3531.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("EXPIRE key"),r("OutboundLink")],1),t._v(" seconds 为给定 key 设置过期时间。")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[t._v("5")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"https://www.redis.net.cn/order/3532.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("EXPIREAT key timestamp"),r("OutboundLink")],1),t._v(" EXPIREAT 的作用和 EXPIRE 类似，都用于为 key 设置过期时间。 不同在于 EXPIREAT 命令接受的时间参数是 UNIX 时间戳(unix timestamp)。")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[t._v("6")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"https://www.redis.net.cn/order/3533.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("PEXPIRE key milliseconds"),r("OutboundLink")],1),t._v(" 设置 key 的过期时间亿以毫秒计。")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[t._v("7")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"https://www.redis.net.cn/order/3534.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("PEXPIREAT key milliseconds-timestamp"),r("OutboundLink")],1),t._v(" 设置 key 过期时间的时间戳(unix timestamp) 以毫秒计")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[t._v("8")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"https://www.redis.net.cn/order/3535.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("KEYS pattern"),r("OutboundLink")],1),t._v(" 查找所有符合给定模式( pattern)的 key 。")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[t._v("9")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"https://www.redis.net.cn/order/3536.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("MOVE key db"),r("OutboundLink")],1),t._v(" 将当前数据库的 key 移动到给定的数据库 db 当中。")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[t._v("10")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"https://www.redis.net.cn/order/3537.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("PERSIST key"),r("OutboundLink")],1),t._v(" 移除 key 的过期时间，key 将持久保持。")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[t._v("11")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"https://www.redis.net.cn/order/3538.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("PTTL key"),r("OutboundLink")],1),t._v(" 以毫秒为单位返回 key 的剩余的过期时间。")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[t._v("12")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"https://www.redis.net.cn/order/3539.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("TTL key"),r("OutboundLink")],1),t._v(" 以秒为单位，返回给定 key 的剩余生存时间(TTL, time to live)。")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[t._v("13")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"https://www.redis.net.cn/order/3540.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("RANDOMKEY"),r("OutboundLink")],1),t._v(" 从当前数据库中随机返回一个 key 。")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[t._v("14")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"https://www.redis.net.cn/order/3541.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("RENAME key newkey"),r("OutboundLink")],1),t._v(" 修改 key 的名称")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[t._v("15")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"https://www.redis.net.cn/order/3542.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("RENAMENX key newkey"),r("OutboundLink")],1),t._v(" 仅当 newkey 不存在时，将 key 改名为 newkey 。")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[t._v("16")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"https://www.redis.net.cn/order/3543.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("TYPE key"),r("OutboundLink")],1),t._v(" 返回 key 所储存的值的类型。")])])])])])}),[],!1,null,null,null);e.default=a.exports}}]);
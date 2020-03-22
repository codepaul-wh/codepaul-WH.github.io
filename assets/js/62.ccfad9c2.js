(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{403:function(t,e,l){"use strict";l.r(e);var s=l(26),a=Object(s.a)({},(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[l("h1",{attrs:{id:"redis-性能测试"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#redis-性能测试"}},[t._v("#")]),t._v(" Redis 性能测试")]),t._v(" "),l("p",[t._v("Redis 性能测试是通过同时执行多个命令实现的。")]),t._v(" "),l("h3",{attrs:{id:"语法"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[t._v("#")]),t._v(" 语法")]),t._v(" "),l("p",[t._v("redis 性能测试的基本命令如下：")]),t._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[t._v("redis-benchmark [option] [option value]\n")])])]),l("h3",{attrs:{id:"实例"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#实例"}},[t._v("#")]),t._v(" 实例")]),t._v(" "),l("p",[t._v("以下实例同时执行 10000 个请求来检测性能：")]),t._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[t._v("redis-benchmark -n 100000\n \nPING_INLINE: 141043.72 requests per second\nPING_BULK: 142857.14 requests per second\nSET: 141442.72 requests per second\nGET: 145348.83 requests per second\nINCR: 137362.64 requests per second\nLPUSH: 145348.83 requests per second\nLPOP: 146198.83 requests per second\nSADD: 146198.83 requests per second\nSPOP: 149253.73 requests per second\nLPUSH (needed to benchmark LRANGE): 148588.42 requests per second\nLRANGE_100 (first 100 elements): 58411.21 requests per second\nLRANGE_300 (first 300 elements): 21195.42 requests per second\nLRANGE_500 (first 450 elements): 14539.11 requests per second\nLRANGE_600 (first 600 elements): 10504.20 requests per second\nMSET (10 keys): 93283.58 requests per second\n")])])]),l("p",[t._v("redis 性能测试工具可选参数如下所示：")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("序号")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("选项")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("描述")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("1")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("strong",[t._v("-h")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("指定服务器主机名")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("127.0.0.1")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("2")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("strong",[t._v("-p")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("指定服务器端口")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("6379")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("3")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("strong",[t._v("-s")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("指定服务器 socket")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("4")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("strong",[t._v("-c")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("指定并发连接数")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("50")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("5")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("strong",[t._v("-n")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("指定请求数")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("10000")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("6")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("strong",[t._v("-d")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("以字节的形式指定 SET/GET 值的数据大小")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("2")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("7")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("strong",[t._v("-k")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("1=keep alive 0=reconnect")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("1")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("8")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("strong",[t._v("-r")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("SET/GET/INCR 使用随机 key, SADD 使用随机值")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("9")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("strong",[t._v("-P")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("通过管道传输 `` 请求")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("1")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("10")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("strong",[t._v("-q")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("强制退出 redis。仅显示 query/sec 值")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("11")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("strong",[t._v("--csv")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("以 CSV 格式输出")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("12")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("strong",[t._v("-l")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("生成循环，永久执行测试")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("13")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("strong",[t._v("-t")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("仅运行以逗号分隔的测试命令列表。")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("14")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("strong",[t._v("-I")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Idle 模式。仅打开 N 个 idle 连接并等待。")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}})])])]),t._v(" "),l("h3",{attrs:{id:"实例-2"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#实例-2"}},[t._v("#")]),t._v(" 实例")]),t._v(" "),l("p",[t._v("以下实例我们使用了多个参数来测试 redis 性能：")]),t._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[t._v("redis-benchmark -h 127.0.0.1 -p 6379 -t set,lpush -n 100000 -q\n \nSET: 146198.83 requests per second\nLPUSH: 145560.41 requests per second\n")])])]),l("p",[t._v("以上实例中主机为 127.0.0.1，端口号为 6379，执行的命令为 set,lpush，请求数为 10000，通过 -q 参数让结果只显示每秒执行的请求数。")])])}),[],!1,null,null,null);e.default=a.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{446:function(s,a,t){"use strict";t.r(a);var r=t(26),e=Object(r.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"redis-数据备份与恢复"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redis-数据备份与恢复"}},[s._v("#")]),s._v(" Redis 数据备份与恢复")]),s._v(" "),t("p",[s._v("Redis "),t("strong",[s._v("SAVE")]),s._v(" 命令用于创建当前数据库的备份。")]),s._v(" "),t("h3",{attrs:{id:"语法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[s._v("#")]),s._v(" 语法")]),s._v(" "),t("p",[s._v("redis Save 命令基本语法如下：")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("redis 127.0.0.1:6379> SAVE \n")])])]),t("h3",{attrs:{id:"实例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实例"}},[s._v("#")]),s._v(" 实例")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("redis 127.0.0.1:6379> SAVE \nOK\n")])])]),t("p",[s._v("该命令将在 redis 安装目录中创建dump.rdb文件。")]),s._v(" "),t("hr"),s._v(" "),t("h2",{attrs:{id:"恢复数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#恢复数据"}},[s._v("#")]),s._v(" 恢复数据")]),s._v(" "),t("p",[s._v("如果需要恢复数据，只需将备份文件 (dump.rdb) 移动到 redis 安装目录并启动服务即可。获取 redis 目录可以使用 "),t("strong",[s._v("CONFIG")]),s._v(" 命令，如下所示：")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v(' redis 127.0.0.1:6379> CONFIG GET dir\n 1) "dir"\n 2) "/usr/local/redis/bin" \n')])])]),t("p",[s._v("以上命令 "),t("strong",[s._v("CONFIG GET dir")]),s._v(" 输出的 redis 安装目录为 /usr/local/redis/bin。")]),s._v(" "),t("hr"),s._v(" "),t("h2",{attrs:{id:"bgsave"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bgsave"}},[s._v("#")]),s._v(" Bgsave")]),s._v(" "),t("p",[s._v("创建 redis 备份文件也可以使用命令 "),t("strong",[s._v("BGSAVE")]),s._v("，该命令在后台执行。")]),s._v(" "),t("h3",{attrs:{id:"实例-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实例-2"}},[s._v("#")]),s._v(" 实例")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("127.0.0.1:6379> BGSAVE \nBackground saving started\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);
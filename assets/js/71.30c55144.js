(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{359:function(s,t,e){"use strict";e.r(t);var a=e(26),n=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"redis-配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redis-配置"}},[s._v("#")]),s._v(" Redis 配置")]),s._v(" "),e("p",[s._v("Redis 的配置文件位于 Redis 安装目录下，文件名为 redis.conf。")]),s._v(" "),e("p",[s._v("你可以通过 "),e("strong",[s._v("CONFIG")]),s._v(" 命令查看或设置配置项。")]),s._v(" "),e("hr"),s._v(" "),e("h3",{attrs:{id:"语法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[s._v("#")]),s._v(" 语法")]),s._v(" "),e("p",[s._v("Redis CONFIG 命令格式如下：")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("redis 127.0.0.1:6379> CONFIG GET CONFIG_SETTING_NAME\n")])])]),e("h3",{attrs:{id:"实例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#实例"}},[s._v("#")]),s._v(" 实例")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('redis 127.0.0.1:6379> CONFIG GET loglevel\n \n1) "loglevel"\n2) "notice"\n')])])]),e("p",[s._v("使用 ***** 号获取所有配置项：")]),s._v(" "),e("h3",{attrs:{id:"实例-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#实例-2"}},[s._v("#")]),s._v(" 实例")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('redis 127.0.0.1:6379> CONFIG GET *\n \n  1) "dbfilename"\n  2) "dump.rdb"\n  3) "requirepass"\n  4) ""\n  5) "masterauth"\n  6) ""\n  7) "unixsocket"\n  8) ""\n  9) "logfile"\n 10) ""\n 11) "pidfile"\n 12) "/var/run/redis.pid"\n 13) "maxmemory"\n 14) "0"\n 15) "maxmemory-samples"\n 16) "3"\n 17) "timeout"\n 18) "0"\n 19) "tcp-keepalive"\n 20) "0"\n 21) "auto-aof-rewrite-percentage"\n 22) "100"\n 23) "auto-aof-rewrite-min-size"\n 24) "67108864"\n 25) "hash-max-ziplist-entries"\n 26) "512"\n 27) "hash-max-ziplist-value"\n 28) "64"\n 29) "list-max-ziplist-entries"\n 30) "512"\n 31) "list-max-ziplist-value"\n 32) "64"\n 33) "set-max-intset-entries"\n 34) "512"\n 35) "zset-max-ziplist-entries"\n 36) "128"\n 37) "zset-max-ziplist-value"\n 38) "64"\n 39) "hll-sparse-max-bytes"\n 40) "3000"\n 41) "lua-time-limit"\n 42) "5000"\n 43) "slowlog-log-slower-than"\n 44) "10000"\n 45) "latency-monitor-threshold"\n 46) "0"\n 47) "slowlog-max-len"\n 48) "128"\n 49) "port"\n 50) "6379"\n 51) "tcp-backlog"\n 52) "511"\n 53) "databases"\n 54) "16"\n 55) "repl-ping-slave-period"\n 56) "10"\n 57) "repl-timeout"\n 58) "60"\n 59) "repl-backlog-size"\n 60) "1048576"\n 61) "repl-backlog-ttl"\n 62) "3600"\n 63) "maxclients"\n 64) "4064"\n 65) "watchdog-period"\n 66) "0"\n 67) "slave-priority"\n 68) "100"\n 69) "min-slaves-to-write"\n 70) "0"\n 71) "min-slaves-max-lag"\n 72) "10"\n 73) "hz"\n 74) "10"\n 75) "no-appendfsync-on-rewrite"\n 76) "no"\n 77) "slave-serve-stale-data"\n 78) "yes"\n 79) "slave-read-only"\n 80) "yes"\n 81) "stop-writes-on-bgsave-error"\n 82) "yes"\n 83) "daemonize"\n 84) "no"\n 85) "rdbcompression"\n 86) "yes"\n 87) "rdbchecksum"\n 88) "yes"\n 89) "activerehashing"\n 90) "yes"\n 91) "repl-disable-tcp-nodelay"\n 92) "no"\n 93) "aof-rewrite-incremental-fsync"\n 94) "yes"\n 95) "appendonly"\n 96) "no"\n 97) "dir"\n 98) "/home/deepak/Downloads/redis-2.8.13/src"\n 99) "maxmemory-policy"\n100) "volatile-lru"\n101) "appendfsync"\n102) "everysec"\n103) "save"\n104) "3600 1 300 100 60 10000"\n105) "loglevel"\n106) "notice"\n107) "client-output-buffer-limit"\n108) "normal 0 0 0 slave 268435456 67108864 60 pubsub 33554432 8388608 60"\n109) "unixsocketperm"\n110) "0"\n111) "slaveof"\n112) ""\n113) "notify-keyspace-events"\n114) ""\n115) "bind"\n116) ""\n')])])]),e("hr"),s._v(" "),e("h2",{attrs:{id:"编辑配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#编辑配置"}},[s._v("#")]),s._v(" 编辑配置")]),s._v(" "),e("p",[s._v("你可以通过修改 redis.conf 文件或使用 "),e("strong",[s._v("CONFIG set")]),s._v(" 命令来修改配置。")]),s._v(" "),e("h3",{attrs:{id:"语法-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#语法-2"}},[s._v("#")]),s._v(" 语法")]),s._v(" "),e("p",[e("strong",[s._v("CONFIG SET")]),s._v(" 命令基本语法：")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("redis 127.0.0.1:6379> CONFIG SET CONFIG_SETTING_NAME NEW_CONFIG_VALUE\n")])])]),e("h3",{attrs:{id:"实例-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#实例-3"}},[s._v("#")]),s._v(" 实例")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('redis 127.0.0.1:6379> CONFIG SET loglevel "notice"\nOK\nredis 127.0.0.1:6379> CONFIG GET loglevel\n \n1) "loglevel"\n2) "notice"\n')])])]),e("hr"),s._v(" "),e("h2",{attrs:{id:"参数说明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参数说明"}},[s._v("#")]),s._v(" 参数说明")]),s._v(" "),e("p",[s._v("redis.conf 配置项说明如下：")]),s._v(" "),e("ol",[e("li",[s._v("Redis默认不是以守护进程的方式运行，可以通过该配置项修改，使用yes启用守护进程")])]),s._v(" "),e("p",[e("strong",[s._v("daemonize no")])]),s._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[s._v("当Redis以守护进程方式运行时，Redis默认会把pid写入/var/run/redis.pid文件，可以通过pidfile指定")])]),s._v(" "),e("p",[e("strong",[s._v("pidfile /var/run/redis.pid")])]),s._v(" "),e("ol",{attrs:{start:"3"}},[e("li",[s._v("指定Redis监听端口，默认端口为6379，作者在自己的一篇博文中解释了为什么选用6379作为默认端口，因为6379在手机按键上MERZ对应的号码，而MERZ取自意大利歌女Alessia Merz的名字")])]),s._v(" "),e("p",[e("strong",[s._v("port 6379")])]),s._v(" "),e("ol",{attrs:{start:"4"}},[e("li",[s._v("绑定的主机地址")])]),s._v(" "),e("p",[e("strong",[s._v("bind 127.0.0.1")])]),s._v(" "),e("p",[s._v("5.当 客户端闲置多长时间后关闭连接，如果指定为0，表示关闭该功能")]),s._v(" "),e("p",[e("strong",[s._v("timeout 300")])]),s._v(" "),e("ol",{attrs:{start:"6"}},[e("li",[s._v("指定日志记录级别，Redis总共支持四个级别：debug、verbose、notice、warning，默认为verbose")])]),s._v(" "),e("p",[e("strong",[s._v("loglevel verbose")])]),s._v(" "),e("ol",{attrs:{start:"7"}},[e("li",[s._v("日志记录方式，默认为标准输出，如果配置Redis为守护进程方式运行，而这里又配置为日志记录方式为标准输出，则日志将会发送给/dev/null")])]),s._v(" "),e("p",[e("strong",[s._v("logfile stdout")])]),s._v(" "),e("ol",{attrs:{start:"8"}},[e("li",[s._v("设置数据库的数量，默认数据库为0，可以使用SELECT ``命令在连接上指定数据库id")])]),s._v(" "),e("p",[e("strong",[s._v("databases 16")])]),s._v(" "),e("ol",{attrs:{start:"9"}},[e("li",[s._v("指定在多长时间内，有多少次更新操作，就将数据同步到数据文件，可以多个条件配合")])]),s._v(" "),e("p",[e("strong",[s._v("save "),e("code")])]),s._v(" "),e("p",[s._v("Redis默认配置文件中提供了三个条件：")]),s._v(" "),e("p",[e("strong",[s._v("save 900 1")])]),s._v(" "),e("p",[e("strong",[s._v("save 300 10")])]),s._v(" "),e("p",[e("strong",[s._v("save 60 10000")])]),s._v(" "),e("p",[s._v("分别表示900秒（15分钟）内有1个更改，300秒（5分钟）内有10个更改以及60秒内有10000个更改。")]),s._v(" "),e("ol",{attrs:{start:"10"}},[e("li",[s._v("指定存储至本地数据库时是否压缩数据，默认为yes，Redis采用LZF压缩，如果为了节省CPU时间，可以关闭该选项，但会导致数据库文件变的巨大")])]),s._v(" "),e("p",[e("strong",[s._v("rdbcompression yes")])]),s._v(" "),e("ol",{attrs:{start:"11"}},[e("li",[s._v("指定本地数据库文件名，默认值为dump.rdb")])]),s._v(" "),e("p",[e("strong",[s._v("dbfilename dump.rdb")])]),s._v(" "),e("ol",{attrs:{start:"12"}},[e("li",[s._v("指定本地数据库存放目录")])]),s._v(" "),e("p",[e("strong",[s._v("dir ./")])]),s._v(" "),e("ol",{attrs:{start:"13"}},[e("li",[s._v("设置当本机为slav服务时，设置master服务的IP地址及端口，在Redis启动时，它会自动从master进行数据同步")])]),s._v(" "),e("p",[e("strong",[s._v("slaveof "),e("code")])]),s._v(" "),e("ol",{attrs:{start:"14"}},[e("li",[s._v("当master服务设置了密码保护时，slav服务连接master的密码")])]),s._v(" "),e("p",[e("strong",[s._v("masterauth ``")])]),s._v(" "),e("ol",{attrs:{start:"15"}},[e("li",[s._v("设置Redis连接密码，如果配置了连接密码，客户端在连接Redis时需要通过AUTH ``命令提供密码，默认关闭")])]),s._v(" "),e("p",[e("strong",[s._v("requirepass foobared")])]),s._v(" "),e("ol",{attrs:{start:"16"}},[e("li",[s._v("设置同一时间最大客户端连接数，默认无限制，Redis可以同时打开的客户端连接数为Redis进程可以打开的最大文件描述符数，如果设置 maxclients 0，表示不作限制。当客户端连接数到达限制时，Redis会关闭新的连接并向客户端返回max number of clients reached错误信息")])]),s._v(" "),e("p",[e("strong",[s._v("maxclients 128")])]),s._v(" "),e("ol",{attrs:{start:"17"}},[e("li",[s._v("指定Redis最大内存限制，Redis在启动时会把数据加载到内存中，达到最大内存后，Redis会先尝试清除已到期或即将到期的Key，当此方法处理 后，仍然到达最大内存设置，将无法再进行写入操作，但仍然可以进行读取操作。Redis新的vm机制，会把Key存放内存，Value会存放在swap区")])]),s._v(" "),e("p",[e("strong",[s._v("maxmemory ``")])]),s._v(" "),e("ol",{attrs:{start:"18"}},[e("li",[s._v("指定是否在每次更新操作后进行日志记录，Redis在默认情况下是异步的把数据写入磁盘，如果不开启，可能会在断电时导致一段时间内的数据丢失。因为 redis本身同步数据文件是按上面save条件来同步的，所以有的数据会在一段时间内只存在于内存中。默认为no")])]),s._v(" "),e("p",[e("strong",[s._v("appendonly no")])]),s._v(" "),e("ol",{attrs:{start:"19"}},[e("li",[s._v("指定更新日志文件名，默认为appendonly.aof")])]),s._v(" "),e("p",[e("strong",[s._v("appendfilename appendonly.aof")])]),s._v(" "),e("ol",{attrs:{start:"20"}},[e("li",[s._v("指定更新日志条件，共有3个可选值：   "),e("strong",[s._v("no")]),s._v("：表示等操作系统进行数据缓存同步到磁盘（快）   "),e("strong",[s._v("always")]),s._v("：表示每次更新操作后手动调用fsync()将数据写到磁盘（慢，安全）   "),e("strong",[s._v("everysec")]),s._v("：表示每秒同步一次（折衷，默认值）")])]),s._v(" "),e("p",[e("strong",[s._v("appendfsync everysec")])]),s._v(" "),e("ol",{attrs:{start:"21"}},[e("li",[s._v("指定是否启用虚拟内存机制，默认值为no，简单的介绍一下，VM机制将数据分页存放，由Redis将访问量较少的页即冷数据swap到磁盘上，访问多的页面由磁盘自动换出到内存中（在后面的文章我会仔细分析Redis的VM机制）")])]),s._v(" "),e("p",[e("strong",[s._v("vm-enabled no")])]),s._v(" "),e("ol",{attrs:{start:"22"}},[e("li",[s._v("虚拟内存文件路径，默认值为/tmp/redis.swap，不可多个Redis实例共享")])]),s._v(" "),e("p",[e("strong",[s._v("vm-swap-file /tmp/redis.swap")])]),s._v(" "),e("ol",{attrs:{start:"23"}},[e("li",[s._v("将所有大于vm-max-memory的数据存入虚拟内存,无论vm-max-memory设置多小,所有索引数据都是内存存储的(Redis的索引数据 就是keys),也就是说,当vm-max-memory设置为0的时候,其实是所有value都存在于磁盘。默认值为0")])]),s._v(" "),e("p",[e("strong",[s._v("vm-max-memory 0")])]),s._v(" "),e("ol",{attrs:{start:"24"}},[e("li",[s._v("Redis swap文件分成了很多的page，一个对象可以保存在多个page上面，但一个page上不能被多个对象共享，vm-page-size是要根据存储的 数据大小来设定的，作者建议如果存储很多小对象，page大小最好设置为32或者64bytes；如果存储很大大对象，则可以使用更大的page，如果不 确定，就使用默认值")])]),s._v(" "),e("p",[e("strong",[s._v("vm-page-size 32")])]),s._v(" "),e("ol",{attrs:{start:"25"}},[e("li",[s._v("设置swap文件中的page数量，由于页表（一种表示页面空闲或使用的bitmap）是在放在内存中的，，在磁盘上每8个pages将消耗1byte的内存。")])]),s._v(" "),e("p",[e("strong",[s._v("vm-pages 134217728")])]),s._v(" "),e("ol",{attrs:{start:"26"}},[e("li",[s._v("设置访问swap文件的线程数,最好不要超过机器的核数,如果设置为0,那么所有对swap文件的操作都是串行的，可能会造成比较长时间的延迟。默认值为4")])]),s._v(" "),e("p",[e("strong",[s._v("vm-max-threads 4")])]),s._v(" "),e("ol",{attrs:{start:"27"}},[e("li",[s._v("设置在向客户端应答时，是否把较小的包合并为一个包发送，默认为开启")])]),s._v(" "),e("p",[e("strong",[s._v("glueoutputbuf yes")])]),s._v(" "),e("ol",{attrs:{start:"28"}},[e("li",[s._v("指定在超过一定的数量或者最大的元素超过某一临界值时，采用一种特殊的哈希算法")])]),s._v(" "),e("p",[e("strong",[s._v("hash-max-zipmap-entries 64")])]),s._v(" "),e("p",[e("strong",[s._v("hash-max-zipmap-value 512")])]),s._v(" "),e("ol",{attrs:{start:"29"}},[e("li",[s._v("指定是否激活重置哈希，默认为开启（后面在介绍Redis的哈希算法时具体介绍）")])]),s._v(" "),e("p",[e("strong",[s._v("activerehashing yes")])]),s._v(" "),e("ol",{attrs:{start:"30"}},[e("li",[s._v("指定包含其它的配置文件，可以在同一主机上多个Redis实例之间使用同一份配置文件，而同时各个实例又拥有自己的特定配置文件")])]),s._v(" "),e("p",[e("strong",[s._v("include /path/to/local.conf")])])])}),[],!1,null,null,null);t.default=n.exports}}]);
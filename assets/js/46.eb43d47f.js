(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{416:function(a,e,g){"use strict";g.r(e);var t=g(26),o=Object(t.a)({},(function(){var a=this,e=a.$createElement,g=a._self._c||e;return g("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[g("h1",{attrs:{id:"日志"}},[g("a",{staticClass:"header-anchor",attrs:{href:"#日志"}},[a._v("#")]),a._v(" 日志")]),a._v(" "),g("p",[a._v("Mybatis 的内置日志工厂提供日志功能，内置日志工厂将日志交给以下其中一种工具作代理：")]),a._v(" "),g("ul",[g("li",[a._v("SLF4J")]),a._v(" "),g("li",[a._v("Apache Commons Logging")]),a._v(" "),g("li",[a._v("Log4j 2")]),a._v(" "),g("li",[a._v("Log4j")]),a._v(" "),g("li",[a._v("JDK logging")])]),a._v(" "),g("p",[a._v("MyBatis 内置日志工厂基于运行时自省机制选择合适的日志工具。它会使用第一个查找得到的工具（按上文列举的顺序查找）。如果一个都未找到，日志功能就会被禁用。")]),a._v(" "),g("p",[a._v("不少应用服务器（如 Tomcat 和 WebShpere）的类路径中已经包含 Commons Logging，所以在这种配置环境下的 MyBatis 会把它作为日志工具，记住这点非常重要。这将意味着，在诸如 WebSphere 的环境中，它提供了 Commons Logging 的私有实现，你的 Log4J 配置将被忽略。MyBatis 将你的 Log4J 配置忽略掉是相当令人郁闷的（事实上，正是因为在这种配置环境下，MyBatis 才会选择使用 Commons Logging 而不是 Log4J）。如果你的应用部署在一个类路径已经包含 Commons Logging 的环境中，而你又想使用其它日志工具，你可以通过在 MyBatis 配置文件 mybatis-config.xml 里面添加一项 setting 来选择别的日志工具。")]),a._v(" "),g("div",{staticClass:"language- extra-class"},[g("pre",{pre:!0,attrs:{class:"language-text"}},[g("code",[a._v('<configuration>\n  <settings>\n    ...\n    <setting name="logImpl" value="LOG4J"/>\n    ...\n  </settings>\n</configuration>\n      \n')])])]),g("p",[a._v("logImpl 可选的值有：SLF4J、LOG4J、LOG4J2、JDK_LOGGING、COMMONS_LOGGING、STDOUT_LOGGING、NO_LOGGING，或者是实现了接口 "),g("code",[a._v("org.apache.ibatis.logging.Log")]),a._v(" 的，且构造方法是以字符串为参数的类的完全限定名。（译者注：可以参考org.apache.ibatis.logging.slf4j.Slf4jImpl.java的实现）")]),a._v(" "),g("p",[a._v("你也可以调用如下任一方法来使用日志工具：")]),a._v(" "),g("div",{staticClass:"language- extra-class"},[g("pre",{pre:!0,attrs:{class:"language-text"}},[g("code",[a._v("org.apache.ibatis.logging.LogFactory.useSlf4jLogging();\norg.apache.ibatis.logging.LogFactory.useLog4JLogging();\norg.apache.ibatis.logging.LogFactory.useJdkLogging();\norg.apache.ibatis.logging.LogFactory.useCommonsLogging();\norg.apache.ibatis.logging.LogFactory.useStdOutLogging();\n")])])]),g("p",[a._v("如果你决定要调用以上某个方法，请在调用其它 MyBatis 方法之前调用它。另外，仅当运行时类路径中存在该日志工具时，调用与该日志工具对应的方法才会生效，否则 MyBatis 一概忽略。如你环境中并不存在 Log4J，你却调用了相应的方法，MyBatis 就会忽略这一调用，转而以默认的查找顺序查找日志工具。")]),a._v(" "),g("p",[a._v("关于 SLF4J、Apache Commons Logging、Apache Log4J 和 JDK Logging 的 API 介绍不在本文档介绍范围内。不过，下面的例子可以作为一个快速入门。关于这些日志框架的更多信息，可以参考以下链接：")]),a._v(" "),g("ul",[g("li",[g("a",{attrs:{href:"http://commons.apache.org/logging",target:"_blank",rel:"noopener noreferrer"}},[a._v("Apache Commons Logging"),g("OutboundLink")],1)]),a._v(" "),g("li",[g("a",{attrs:{href:"http://logging.apache.org/log4j/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Apache Log4j"),g("OutboundLink")],1)]),a._v(" "),g("li",[g("a",{attrs:{href:"http://java.sun.com/j2se/1.4.1/docs/guide/util/logging/",target:"_blank",rel:"noopener noreferrer"}},[a._v("JDK Logging API"),g("OutboundLink")],1)])]),a._v(" "),g("h3",{attrs:{id:"日志配置"}},[g("a",{staticClass:"header-anchor",attrs:{href:"#日志配置"}},[a._v("#")]),a._v(" 日志配置")]),a._v(" "),g("p",[a._v("你可以对包、映射类的全限定名、命名空间或全限定语句名开启日志功能来查看 MyBatis 的日志语句。")]),a._v(" "),g("p",[a._v("再次说明下，具体怎么做，由使用的日志工具决定，这里以 Log4J 为例。配置日志功能非常简单：添加一个或多个配置文件（如 log4j.properties），有时需要添加 jar 包（如 log4j.jar）。下面的例子将使用 Log4J 来配置完整的日志服务，共两个步骤：")]),a._v(" "),g("h4",{attrs:{id:"步骤-1：添加-log4j-的-jar-包"}},[g("a",{staticClass:"header-anchor",attrs:{href:"#步骤-1：添加-log4j-的-jar-包"}},[a._v("#")]),a._v(" 步骤 1：添加 Log4J 的 jar 包")]),a._v(" "),g("p",[a._v("因为我们使用的是 Log4J，就要确保它的 jar 包在应用中是可用的。要启用 Log4J，只要将 jar 包添加到应用的类路径中即可。Log4J 的 jar 包可以在上面的链接中下载。")]),a._v(" "),g("p",[a._v("对于 web 应用或企业级应用，则需要将 "),g("code",[a._v("log4j.jar")]),a._v(" 添加到 "),g("code",[a._v("WEB-INF/lib")]),a._v(" 目录下；对于独立应用，可以将它添加到JVM 的 "),g("code",[a._v("-classpath")]),a._v(" 启动参数中。")]),a._v(" "),g("h4",{attrs:{id:"步骤-2：配置-log4j"}},[g("a",{staticClass:"header-anchor",attrs:{href:"#步骤-2：配置-log4j"}},[a._v("#")]),a._v(" 步骤 2：配置 Log4J")]),a._v(" "),g("p",[a._v("配置 Log4J 比较简单，假如你需要记录这个映射器接口的日志：")]),a._v(" "),g("div",{staticClass:"language- extra-class"},[g("pre",{pre:!0,attrs:{class:"language-text"}},[g("code",[a._v('package org.mybatis.example;\npublic interface BlogMapper {\n  @Select("SELECT * FROM blog WHERE id = #{id}")\n  Blog selectBlog(int id);\n}\n')])])]),g("p",[a._v("在应用的类路径中创建一个名称为 "),g("code",[a._v("log4j.properties")]),a._v(" 的文件，文件的具体内容如下：")]),a._v(" "),g("div",{staticClass:"language- extra-class"},[g("pre",{pre:!0,attrs:{class:"language-text"}},[g("code",[a._v("# Global logging configuration\nlog4j.rootLogger=ERROR, stdout\n# MyBatis logging configuration...\nlog4j.logger.org.mybatis.example.BlogMapper=TRACE\n# Console output...\nlog4j.appender.stdout=org.apache.log4j.ConsoleAppender\nlog4j.appender.stdout.layout=org.apache.log4j.PatternLayout\nlog4j.appender.stdout.layout.ConversionPattern=%5p [%t] - %m%n\n")])])]),g("p",[a._v("添加以上配置后，Log4J 就会记录 "),g("code",[a._v("org.mybatis.example.BlogMapper")]),a._v(" 的详细执行操作，且仅记录应用中其它类的错误信息（若有）。")]),a._v(" "),g("p",[a._v("你也可以将日志的记录方式从接口级别切换到语句级别，从而实现更细粒度的控制。如下配置只对 "),g("code",[a._v("selectBlog")]),a._v(" 语句记录日志：")]),a._v(" "),g("div",{staticClass:"language- extra-class"},[g("pre",{pre:!0,attrs:{class:"language-text"}},[g("code",[a._v("log4j.logger.org.mybatis.example.BlogMapper.selectBlog=TRACE\n")])])]),g("p",[a._v("与此相对，可以对一组映射器接口记录日志，只要对映射器接口所在的包开启日志功能即可：")]),a._v(" "),g("div",{staticClass:"language- extra-class"},[g("pre",{pre:!0,attrs:{class:"language-text"}},[g("code",[a._v("log4j.logger.org.mybatis.example=TRACE\n")])])]),g("p",[a._v("某些查询可能会返回庞大的结果集，此时只想记录其执行的 SQL 语句而不想记录结果该怎么办？为此，Mybatis 中 SQL 语句的日志级别被设为DEBUG（JDK 日志设为 FINE），结果的日志级别为 TRACE（JDK 日志设为 FINER)。所以，只要将日志级别调整为 DEBUG 即可达到目的：")]),a._v(" "),g("div",{staticClass:"language- extra-class"},[g("pre",{pre:!0,attrs:{class:"language-text"}},[g("code",[a._v("log4j.logger.org.mybatis.example=DEBUG\n")])])]),g("p",[a._v("要记录日志的是类似下面的映射器文件而不是映射器接口又该怎么做呢？")]),a._v(" "),g("div",{staticClass:"language- extra-class"},[g("pre",{pre:!0,attrs:{class:"language-text"}},[g("code",[a._v('<?xml version="1.0" encoding="UTF-8" ?>\n<!DOCTYPE mapper\n  PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"\n  "http://mybatis.org/dtd/mybatis-3-mapper.dtd">\n<mapper namespace="org.mybatis.example.BlogMapper">\n  <select id="selectBlog" resultType="Blog">\n    select * from Blog where id = #{id}\n  </select>\n</mapper>\n')])])]),g("p",[a._v("如需对 XML 文件记录日志，只要对命名空间增加日志记录功能即可：")]),a._v(" "),g("div",{staticClass:"language- extra-class"},[g("pre",{pre:!0,attrs:{class:"language-text"}},[g("code",[a._v("log4j.logger.org.mybatis.example.BlogMapper=TRACE\n")])])]),g("p",[a._v("要记录具体语句的日志可以这样做：")]),a._v(" "),g("div",{staticClass:"language- extra-class"},[g("pre",{pre:!0,attrs:{class:"language-text"}},[g("code",[a._v("log4j.logger.org.mybatis.example.BlogMapper.selectBlog=TRACE\n")])])]),g("p",[a._v("你应该注意到了，为映射器接口和 XML 文件添加日志功能的语句毫无差别。")]),a._v(" "),g("p",[g("strong",[a._v("注意")]),a._v(" 如果你使用的是 SLF4J 或 Log4j 2，MyBatis 将以 MYBATIS 这个值进行调用。")]),a._v(" "),g("p",[a._v("配置文件 "),g("code",[a._v("log4j.properties")]),a._v(" 的余下内容是针对日志输出源的，这一内容已经超出本文档范围。关于 Log4J 的更多内容，可以参考Log4J 的网站。不过，你也可以简单地做做实验，看看不同的配置会产生怎样的效果。")])])}),[],!1,null,null,null);e.default=o.exports}}]);
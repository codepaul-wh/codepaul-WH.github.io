(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{361:function(s,e,a){"use strict";a.r(e);var t=a(26),r=Object(t.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"入门"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#入门"}},[s._v("#")]),s._v(" 入门")]),s._v(" "),a("h3",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),a("p",[s._v("要使用 MyBatis， 只需将 "),a("a",{attrs:{href:"https://github.com/mybatis/mybatis-3/releases",target:"_blank",rel:"noopener noreferrer"}},[s._v("mybatis-x.x.x.jar"),a("OutboundLink")],1),s._v(" 文件置于 classpath 中即可。")]),s._v(" "),a("p",[s._v("如果使用 Maven 来构建项目，则需将下面的 dependency 代码置于 pom.xml 文件中：")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("<dependency>\n  <groupId>org.mybatis</groupId>\n  <artifactId>mybatis</artifactId>\n  <version>x.x.x</version>\n</dependency>\n")])])]),a("h3",{attrs:{id:"从-xml-中构建-sqlsessionfactory"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#从-xml-中构建-sqlsessionfactory"}},[s._v("#")]),s._v(" 从 XML 中构建 SqlSessionFactory")]),s._v(" "),a("p",[s._v("每个基于 MyBatis 的应用都是以一个 SqlSessionFactory 的实例为核心的。SqlSessionFactory 的实例可以通过 SqlSessionFactoryBuilder 获得。而 SqlSessionFactoryBuilder 则可以从 XML 配置文件或一个预先定制的 Configuration 的实例构建出 SqlSessionFactory 的实例。")]),s._v(" "),a("p",[s._v("从 XML 文件中构建 SqlSessionFactory 的实例非常简单，建议使用类路径下的资源文件进行配置。 但是也可以使用任意的输入流（InputStream）实例，包括字符串形式的文件路径或者 file:// 的 URL 形式的文件路径来配置。MyBatis 包含一个名叫 Resources 的工具类，它包含一些实用方法，可使从 classpath 或其他位置加载资源文件更加容易。")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('String resource = "org/mybatis/example/mybatis-config.xml";\nInputStream inputStream = Resources.getResourceAsStream(resource);\nSqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(inputStream);\n')])])]),a("p",[s._v("XML 配置文件中包含了对 MyBatis 系统的核心设置，包含获取数据库连接实例的数据源（DataSource）和决定事务作用域和控制方式的事务管理器（TransactionManager）。 XML 配置文件的详细内容后面再探讨，这里先给出一个简单的示例：")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('<?xml version="1.0" encoding="UTF-8" ?>\n<!DOCTYPE configuration\n  PUBLIC "-//mybatis.org//DTD Config 3.0//EN"\n  "http://mybatis.org/dtd/mybatis-3-config.dtd">\n<configuration>\n  <environments default="development">\n    <environment id="development">\n      <transactionManager type="JDBC"/>\n      <dataSource type="POOLED">\n        <property name="driver" value="${driver}"/>\n        <property name="url" value="${url}"/>\n        <property name="username" value="${username}"/>\n        <property name="password" value="${password}"/>\n      </dataSource>\n    </environment>\n  </environments>\n  <mappers>\n    <mapper resource="org/mybatis/example/BlogMapper.xml"/>\n  </mappers>\n</configuration>\n')])])]),a("p",[s._v("当然，还有很多可以在 XML 文件中进行配置，上面的示例指出的则是最关键的部分。 要注意 XML 头部的声明，它用来验证 XML 文档正确性。environment 元素体中包含了事务管理和连接池的配置。mappers 元素则是包含一组映射器（mapper），这些映射器的 XML 映射文件包含了 SQL 代码和映射定义信息。")]),s._v(" "),a("h3",{attrs:{id:"不使用-xml-构建-sqlsessionfactory"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#不使用-xml-构建-sqlsessionfactory"}},[s._v("#")]),s._v(" 不使用 XML 构建 SqlSessionFactory")]),s._v(" "),a("p",[s._v("如果你更愿意直接从 Java 代码而不是 XML 文件中创建配置，或者想要创建你自己的配置构建器，MyBatis 也提供了完整的配置类，提供所有和 XML 文件相同功能的配置项。")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('DataSource dataSource = BlogDataSourceFactory.getBlogDataSource();\nTransactionFactory transactionFactory = new JdbcTransactionFactory();\nEnvironment environment = new Environment("development", transactionFactory, dataSource);\nConfiguration configuration = new Configuration(environment);\nconfiguration.addMapper(BlogMapper.class);\nSqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(configuration);\n')])])]),a("p",[s._v("注意该例中，configuration 添加了一个映射器类（mapper class）。映射器类是 Java 类，它们包含 SQL 映射语句的注解从而避免依赖 XML 文件。不过，由于 Java 注解的一些限制以及某些 MyBatis 映射的复杂性，要使用大多数高级映射（比如：嵌套联合映射），仍然需要使用 XML 配置。有鉴于此，如果存在一个同名 XML 配置文件，MyBatis 会自动查找并加载它（在这个例子中，基于类路径和 BlogMapper.class 的类名，会加载 BlogMapper.xml）。具体细节稍后讨论。")]),s._v(" "),a("h3",{attrs:{id:"从-sqlsessionfactory-中获取-sqlsession"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#从-sqlsessionfactory-中获取-sqlsession"}},[s._v("#")]),s._v(" 从 SqlSessionFactory 中获取 SqlSession")]),s._v(" "),a("p",[s._v("既然有了 SqlSessionFactory，顾名思义，我们就可以从中获得 SqlSession 的实例了。SqlSession 完全包含了面向数据库执行 SQL 命令所需的所有方法。你可以通过 SqlSession 实例来直接执行已映射的 SQL 语句。例如：")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('try (SqlSession session = sqlSessionFactory.openSession()) {\n  Blog blog = (Blog) session.selectOne("org.mybatis.example.BlogMapper.selectBlog", 101);\n}\n')])])]),a("p",[s._v("诚然，这种方式能够正常工作，并且对于使用旧版本 MyBatis 的用户来说也比较熟悉。不过现在有了一种更简洁的方式 ——使用正确描述每个语句的参数和返回值的接口（比如 BlogMapper.class），你现在不仅可以执行更清晰和类型安全的代码，而且还不用担心易错的字符串字面值以及强制类型转换。")]),s._v(" "),a("p",[s._v("例如：")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("try (SqlSession session = sqlSessionFactory.openSession()) {\n  BlogMapper mapper = session.getMapper(BlogMapper.class);\n  Blog blog = mapper.selectBlog(101);\n}\n")])])]),a("p",[s._v("现在我们来探究一下这里到底是怎么执行的。")]),s._v(" "),a("h3",{attrs:{id:"探究已映射的-sql-语句"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#探究已映射的-sql-语句"}},[s._v("#")]),s._v(" 探究已映射的 SQL 语句")]),s._v(" "),a("p",[s._v("现在你可能很想知道 SqlSession 和 Mapper 到底执行了什么操作，但 SQL 语句映射是个相当大的话题，可能会占去文档的大部分篇幅。 不过为了让你能够了解个大概，这里会给出几个例子。")]),s._v(" "),a("p",[s._v("在上面提到的例子中，一个语句既可以通过 XML 定义，也可以通过注解定义。我们先看看 XML 定义语句的方式，事实上 MyBatis 提供的全部特性都可以利用基于 XML 的映射语言来实现，这使得 MyBatis 在过去的数年间得以流行。如果你以前用过 MyBatis，你应该对这个概念比较熟悉。 不过自那以后，XML 的配置也改进了许多，我们稍后还会再提到。这里给出一个基于 XML 映射语句的示例，它应该可以满足上述示例中 SqlSession 的调用。")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('<?xml version="1.0" encoding="UTF-8" ?>\n<!DOCTYPE mapper\n  PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"\n  "http://mybatis.org/dtd/mybatis-3-mapper.dtd">\n<mapper namespace="org.mybatis.example.BlogMapper">\n  <select id="selectBlog" resultType="Blog">\n    select * from Blog where id = #{id}\n  </select>\n</mapper>\n')])])]),a("p",[s._v("为了这个简单的例子，我们似乎写了不少配置，但实际上它并不多。在一个 XML 映射文件中，可以定义无数个映射语句，这样一来，XML 头部和文档类型声明占去的部分就显得微不足道了。而文件的剩余部分具备自解释性，很容易理解。 在命名空间 “org.mybatis.example.BlogMapper” 中定义了一个名为 “selectBlog” 的映射语句，允许你使用指定的完全限定名 “org.mybatis.example.BlogMapper.selectBlog” 来调用映射语句，就像上面例子中那样：")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('Blog blog = (Blog) session.selectOne("org.mybatis.example.BlogMapper.selectBlog", 101);\n')])])]),a("p",[s._v("你可能注意到这和使用完全限定名调用 Java 对象的方法类似。这样，该命名就可以直接映射到在命名空间中同名的 Mapper 类，并将已映射的 select 语句中的名字、参数和返回类型匹配成方法。 因此你就可以像上面那样很容易地调用这个对应 Mapper 接口的方法，就像下面这样：")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("BlogMapper mapper = session.getMapper(BlogMapper.class);\nBlog blog = mapper.selectBlog(101);\n")])])]),a("p",[s._v("第二种方法有很多优势，首先它不依赖于字符串字面值，会更安全一点； 其次，如果你的 IDE 有代码补全功能，那么代码补全可以帮你快速选择已映射的 SQL 语句。")]),s._v(" "),a("hr"),s._v(" "),a("p",[a("strong",[s._v("提示****对命名空间的一点说明")])]),s._v(" "),a("p",[s._v("在之前版本的 MyBatis 中，**命名空间（Namespaces）**的作用并不大，是可选的。 但现在，随着命名空间越发重要，你必须指定命名空间。")]),s._v(" "),a("p",[s._v("命名空间的作用有两个，一个是利用更长的完全限定名来将不同的语句隔离开来，同时也实现了你上面见到的接口绑定。就算你觉得暂时用不到接口绑定，你也应该遵循这里的规定，以防哪天你改变了主意。 长远来看，只要将命名空间置于合适的 Java 包命名空间之中，你的代码会变得更加整洁，也有利于你更方便地使用 MyBatis。")]),s._v(" "),a("p",[s._v("**命名解析：**为了减少输入量，MyBatis 对所有的命名配置元素（包括语句，结果映射，缓存等）使用了如下的命名解析规则。")]),s._v(" "),a("ul",[a("li",[s._v("完全限定名（比如 “com.mypackage.MyMapper.selectAllThings）将被直接用于查找及使用。")]),s._v(" "),a("li",[s._v("短名称（比如 “selectAllThings”）如果全局唯一也可以作为一个单独的引用。 如果不唯一，有两个或两个以上的相同名称（比如 “com.foo.selectAllThings” 和 “com.bar.selectAllThings”），那么使用时就会产生“短名称不唯一”的错误，这种情况下就必须使用完全限定名。")])]),s._v(" "),a("hr"),s._v(" "),a("p",[s._v("对于像 BlogMapper 这样的映射器类来说，还有另一种方法来处理映射。 它们映射的语句可以不用 XML 来配置，而可以使用 Java 注解来配置。比如，上面的 XML 示例可被替换如下：")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('package org.mybatis.example;\npublic interface BlogMapper {\n  @Select("SELECT * FROM blog WHERE id = #{id}")\n  Blog selectBlog(int id);\n}\n')])])]),a("p",[s._v("使用注解来映射简单语句会使代码显得更加简洁，然而对于稍微复杂一点的语句，Java 注解就力不从心了，并且会显得更加混乱。 因此，如果你需要完成很复杂的事情，那么最好使用 XML 来映射语句。")]),s._v(" "),a("p",[s._v("选择何种方式来配置映射，以及认为映射语句定义的一致性是否重要，这些完全取决于你和你的团队。 换句话说，永远不要拘泥于一种方式，你可以很轻松的在基于注解和 XML 的语句映射方式间自由移植和切换。")]),s._v(" "),a("h3",{attrs:{id:"作用域（scope）和生命周期"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#作用域（scope）和生命周期"}},[s._v("#")]),s._v(" 作用域（Scope）和生命周期")]),s._v(" "),a("p",[s._v("理解我们目前已经讨论过的不同作用域和生命周期类是至关重要的，因为错误的使用会导致非常严重的并发问题。")]),s._v(" "),a("hr"),s._v(" "),a("p",[a("strong",[s._v("提示")]),s._v(" "),a("strong",[s._v("对象生命周期和依赖注入框架")])]),s._v(" "),a("p",[s._v("依赖注入框架可以创建线程安全的、基于事务的 SqlSession 和映射器，并将它们直接注入到你的 bean 中，因此可以直接忽略它们的生命周期。 如果对如何通过依赖注入框架来使用 MyBatis 感兴趣，可以研究一下 MyBatis-Spring 或 MyBatis-Guice 两个子项目。")]),s._v(" "),a("hr"),s._v(" "),a("h4",{attrs:{id:"sqlsessionfactorybuilder"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sqlsessionfactorybuilder"}},[s._v("#")]),s._v(" SqlSessionFactoryBuilder")]),s._v(" "),a("p",[s._v("这个类可以被实例化、使用和丢弃，一旦创建了 SqlSessionFactory，就不再需要它了。 因此 SqlSessionFactoryBuilder 实例的最佳作用域是方法作用域（也就是局部方法变量）。 你可以重用 SqlSessionFactoryBuilder 来创建多个 SqlSessionFactory 实例，但是最好还是不要让其一直存在，以保证所有的 XML 解析资源可以被释放给更重要的事情。")]),s._v(" "),a("h4",{attrs:{id:"sqlsessionfactory"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sqlsessionfactory"}},[s._v("#")]),s._v(" SqlSessionFactory")]),s._v(" "),a("p",[s._v("SqlSessionFactory 一旦被创建就应该在应用的运行期间一直存在，没有任何理由丢弃它或重新创建另一个实例。 使用 SqlSessionFactory 的最佳实践是在应用运行期间不要重复创建多次，多次重建 SqlSessionFactory 被视为一种代码“坏味道（bad smell）”。因此 SqlSessionFactory 的最佳作用域是应用作用域。 有很多方法可以做到，最简单的就是使用单例模式或者静态单例模式。")]),s._v(" "),a("h4",{attrs:{id:"sqlsession"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sqlsession"}},[s._v("#")]),s._v(" SqlSession")]),s._v(" "),a("p",[s._v("每个线程都应该有它自己的 SqlSession 实例。SqlSession 的实例不是线程安全的，因此是不能被共享的，所以它的最佳的作用域是请求或方法作用域。 绝对不能将 SqlSession 实例的引用放在一个类的静态域，甚至一个类的实例变量也不行。 也绝不能将 SqlSession 实例的引用放在任何类型的托管作用域中，比如 Servlet 框架中的 HttpSession。 如果你现在正在使用一种 Web 框架，要考虑 SqlSession 放在一个和 HTTP 请求对象相似的作用域中。 换句话说，每次收到的 HTTP 请求，就可以打开一个 SqlSession，返回一个响应，就关闭它。 这个关闭操作是很重要的，你应该把这个关闭操作放到 finally 块中以确保每次都能执行关闭。 下面的示例就是一个确保 SqlSession 关闭的标准模式：")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("try (SqlSession session = sqlSessionFactory.openSession()) {\n  // 你的应用逻辑代码\n}\n")])])]),a("p",[s._v("在你的所有的代码中一致地使用这种模式来保证所有数据库资源都能被正确地关闭。")]),s._v(" "),a("h4",{attrs:{id:"映射器实例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#映射器实例"}},[s._v("#")]),s._v(" 映射器实例")]),s._v(" "),a("p",[s._v("映射器是一些由你创建的、绑定你映射的语句的接口。映射器接口的实例是从 SqlSession 中获得的。因此从技术层面讲，任何映射器实例的最大作用域是和请求它们的 SqlSession 相同的。尽管如此，映射器实例的最佳作用域是方法作用域。 也就是说，映射器实例应该在调用它们的方法中被请求，用过之后即可丢弃。 并不需要显式地关闭映射器实例，尽管在整个请求作用域保持映射器实例也不会有什么问题，但是你很快会发现，像 SqlSession 一样，在这个作用域上管理太多的资源的话会难于控制。 为了避免这种复杂性，最好把映射器放在方法作用域内。下面的示例就展示了这个实践：")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("try (SqlSession session = sqlSessionFactory.openSession()) {\n  BlogMapper mapper = session.getMapper(BlogMapper.class);\n  // 你的应用逻辑代码\n}\n")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);
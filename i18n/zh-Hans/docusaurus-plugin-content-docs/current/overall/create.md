---
sidebar_position: 1
---

# 开始使用

本篇介绍如何在 [Montplex](https://dev.montplex.com) 上创建数据库并将其与 Redis 客户端连接的步骤。

## 创建帐户

您可以使用您的邮箱、Github 或谷歌帐户注册 [Montplex](https://dev.montplex.com)。或者，如果您不想使用这些身份验证提供商，或者您想使用公司电子邮件地址注册，您可以使用电子邮件/密码注册进行注册。

:::note

我们不会访问您的信息，除了：

- 您的电子邮件
- 你的名字
- 您的个人资料图片，我们从不与第三方共享您的信息。

:::

## 创建缓存服务

注册并登录成功后，您可以通过单击右上角的加号来创建数据库；

![Cache Service](/docs/create.png)

填写基本信息并创建缓存：

![Cache Service](/docs/create-03.png)

创建成功后，缓存数据将添加到列表中。

![Cache Service](/docs/create-04.png)

**数据库名称**：键入数据库的名称。

**描述**：自定义当前数据库的描述。

区域：选择数据库将运行的区域。为了获得最佳性能，请选择您的应用程序更接近的地区。我们正计划支持其他地区和云提供商。

单击“创建”按钮后，您应该会看到集群启动并运行，如下图所示：

![Cache Service](/docs/show.png)

## 连接到您的客户端

您可以使用任何 Redis 客户端连接到您的数据库。下面是使用“redis cli”连接的简单示例，更多通过 redis 客户端进行连接的信息，请参考 [连接客户端](../howto/connect-your-client.mdx)。

`redis-cli`是 redis 官方发行版提供的脚手架。如果您还没有安装 Redis，您可以参考官网[Redis 快速入门](https://redis.io/docs/getting-started/)。

然后，您可以连接到数据库并在数据库上运行命令，如下所示：

```javascript

> redis-cli -a PASSWORD -h ENDPOINT -p PORT
Warning: Using a password with '-a' or '-u' option on the command line interface may not be safe.
ENDPOINT:PORT> set counter 0
OK
ENDPOINT:PORT> get counter
"0"
ENDPOINT:PORT> incr counter
(integer) 1
ENDPOINT:PORT> incr counter
(integer) 2

```

恭喜您使用 Montplex 创建了第一个数据库！

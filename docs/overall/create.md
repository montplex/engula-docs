---
sidebar_position: 1
---

# Getting Started

This page describes the steps on how to create a database on the [Montplex](https://dev.montplex.com) and connect it with a Redis client.

## Create Account

You can sign up to [Montplex](https://dev.montplex.com) using your Github or Google accounts. Alternatively you can sign up using email/password registration if you don't want to use these auth providers, or you want to sign up using a corporate email address.

:::note

We do not access your information other than:

- Your email
- Your name
- Your profile picture and we never share your information with third parties.

:::

## Verify Account

At the same time as completing the registration, we will send the verification information to your email, and then you must pass the verification to activate your account.

:::caution
You can still use and access your account, but you will not be able to create the caching service we provide unless you successfully verify your identity.
:::

![Fails](/docs/verify.png)


## Create a Cache Service

Once you logged in, you can create a database by clicking on the plus sign at the top right corner.

![CacheService](/docs/create.png)

Fill in basic information and create a cache.

![CacheService](/docs/create-03.png)

After successful creation, a cache data will be added to the list.

![CacheService](/docs/create-04.png)

**Database Name**: Type a name for your database.

**Describes**: Customize the description of the current database.
Region: Select the region where your database will run. For best performance, choose the Region which your applications are closer to. We are planning to support other regions and cloud providers.

Once you click on Create button, you should see your cluster up and running as below:

![CacheService](/docs/show.png)

## Connect to Your Database

You can connect to your database with any Redis client. For simplicity, we will use `redis-cli` tool in this guide but please refer to [Connect Your Client](../howto/connect-your-client.mdx) section for more about connecting via Redis clients.

`redis-cli` comes packaged with the official Redis distribution. If you do not have Redis installed, you can get it as described at [Redis Quick Start](https://redis.io/docs/getting-started/) document. Now, you can connect to and run commands on your database as below:

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

Congratulations! You have created your first database with Montplex.

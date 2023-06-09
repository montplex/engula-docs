---
sidebar_position: 3
---

# Redis® API 兼容性

Montplex 支持 Redis 客户端协议，最高支持 6.2 版本。下表显示了支持的 Redis 命令列表：

#### String

> 官网参考文档: [String](https://redis.io/commands/?group=string)

- ✅ APPEND
- ✅ DECR
- ✅ DECRBY
- ✅ GET
- ✅ GETDEL
- ✅ GETEX
- ✅ GETRANGE
- ✅ GETSET
- ❌ LCS
- ✅ INCR
- ✅ INCRBY
- ✅ INCRBYFLOAT
- ❌ MGET
- ❌ MSET
- ❌ MSETNX
- ✅ PSETEX
- ✅ PTTL
- ✅ SET
- ✅ SETEX
- ✅ TTL
- ✅ SETNX
- ✅ SETRANGE
- ✅ STRLEN
- ❌ SUBSTR

#### Bitmap

> 官网参考文档: [Bitmap](https://redis.io/commands/?group=bitmap)

- ✅ BITCOUNT
- ✅ BITFIELD
- ✅ BITFIELD_RO
- ❌ BITPO
- ✅ BITPOS
- ✅ GETBIT
- ✅ SETBIT

#### Hash

> 官网参考文档: [Hash](https://redis.io/commands/?group=hash)

- ✅ HDEL
- ✅ HEXISTS
- ✅ HGET
- ✅ HGETALL
- ✅ HINCRBY
- ✅ HINCRBYFLOAT
- ✅ HKEYS
- ✅ HLEN
- ✅ HMGET
- ✅ HMSET
- ✅ HRANDFIELD
- ✅ HSCAN
- ✅ HSET
- ✅ HSETNX
- ✅ HSTRLEN
- ✅ HVALS

#### List

> 官网参考文档: [List](https://redis.io/commands/?group=list)

- ❌ BLMOVE
- ❌ BLMPOP
- ✅ BLPOP
- ✅ BRPOP
- ❌ BRPOPLPUSH
- ✅ LINDEX
- ✅ LINSERT
- ✅ LLEN
- ❌ LMOVE
- ✅ LPOP
- ✅ LPOS
- ✅ LPUSH
- ✅ LPUSHX
- ✅ LRANGE
- ✅ LREM
- ✅ LSET
- ✅ LTRIM
- ✅ RPOP
- ❌ RPOPLPUSH
- ✅ RPUSH
- ✅ RPUSHX

#### Set

> 官网参考文档: [Set](https://redis.io/commands/?group=set)

- ✅ SADD
- ✅ SCARD
- ❌ SDIFF
- ❌ SDIFFSTORE
- ❌ SINTER
- ❌ SINTERSTORE
- ✅ SISMEMBER
- ✅ SMEMBERS
- ✅ SMISMEMBER
- ❌ SMOVE
- ✅ SPOP
- ✅ SRANDMEMBER
- ✅ SREM
- ✅ SSCAN
- ❌ SUNION
- ❌ SUNIONSTORE
- ❌ SINTERCARD

#### Sorted Set

> 官网参考文档: [Sorted Set](https://redis.io/commands/?group=sorted_set)

- ❌ BZMPOP
- ✅ BZPOPMAX
- ✅ BZPOPMIN
- ✅ ZADD
- ✅ ZCARD
- ✅ ZCOUNT
- ❌ ZDIFF
- ❌ ZDIFFSTORE
- ✅ ZINCRBY
- ❌ ZINTER
- ❌ ZINTERCARD
- ❌ ZINTERSTORE
- ✅ ZLEXCOUNT
- ❌ ZMPOP
- ✅ ZMSCORE
- ✅ ZPOPMAX
- ✅ ZPOPMIN
- ✅ ZRANDMEMBER
- ✅ ZRANGE
- ✅ ZRANGEBYLEX
- ✅ ZRANGEBYSCORE
- ✅ ZRANGESTORE
- ✅ ZRANK
- ✅ ZREM
- ✅ ZREMRANGEBYLEX
- ✅ ZREMRANGEBYRANK
- ✅ ZREMRANGEBYSCORE
- ✅ ZREVRANGE
- ✅ ZREVRANGEBYLEX
- ✅ ZREVRANGEBYSCORE
- ✅ ZREVRANK
- ✅ ZSCAN
- ✅ ZSCORE
- ❌ ZUNION
- ❌ ZUNIONSTORE

每次代码更改后，我们都会定期从以下 Redis 客户端运行命令集成测试：

- **[Node-Redis](https://github.com/redis/node-redis)** [Command Tests](https://github.com/redis/node-redis/tree/v3.1.2/test/commands)
- **[Jedis](https://github.com/redis/jedis)** [Command Tests](https://github.com/redis/jedis/tree/v4.1.1/src/test/java/redis/clients/jedis/commands)
- **[Lettuce](https://github.com/lettuce-io/lettuce-core)** [Command Tests](https://github.com/lettuce-io/lettuce-core/tree/6.1.6.RELEASE/src/test/java/io/lettuce/core/commands)
- **[Go-Redis](https://github.com/go-redis/redis)** [Command Tests](https://github.com/go-redis/redis/blob/master/commands_test.go)
- **[Redis-py](https://github.com/redis/redis-py)** [Command Tests](https://github.com/redis/redis-py/tree/v4.4.0/tests)

对于大多数不受支持的命令,都在我们的开发计划中。如果您需要我们不支持的功能，请留言至 support@montplex.com,已便在计划支持时及时通知您。

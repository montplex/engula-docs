---
sidebar_position: 3
---

# Redis® API Compatibility

Montplex supports Redis client protocol up to version `6.2`. Following table shows the list of supported Redis commands:

| Feature                                                   | Supported? | Supported Commands                                                                                                                                                                                                                                                                                                                                          |
| --------------------------------------------------------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [String](https://redis.io/commands/?group=string)         | ✅         | APPEND - DECR - DECRBY - GET - GETBIT - GETDEL - GETEX - GETRANGE - GETSET - INCR - INCRBY - INCRBYFLOAT - MGET - MSET - MSETNX - PSETEX - SET - SETBIT - SETEX - SETNX - SETRANGE - STRLEN                                                                                                                                                                 |
| [Bitmap](https://redis.io/commands/?group=bitmap)         | ✅         | BITCOUNT - BITFIELD - BITFIELD_RO - BITPOS                                                                                                                                                                                                                                                                                                                  |
| [Hash](https://redis.io/commands/?group=hash)             | ✅         | HDEL - HEXISTS - HGET - HGETALL - HINCRBY - HINCRBYFLOAT - HKEYS - HLEN - HMGET - HMSET - HSCAN - HSET - HSETNX - HSTRLEN - HRANDFIELD - HVALS                                                                                                                                                                                                              |
| [List](https://redis.io/commands/?group=list)             | ✅         | BLMOVE - BLPOP - BRPOP - BRPOPLPUSH - LINDEX - LINSERT - LLEN - LMOVE - LPOP - LPOS - LPUSH - LPUSHX - LRANGE - LREM - LSET - LTRIM - RPOP - RPOPLPUSH - RPUSH - RPUSHX                                                                                                                                                                                     |
| [Set](https://redis.io/commands/?group=set)               | ✅         | SADD - SCARD - SDIFF - SDIFFSTORE - SINTER - SINTERSTORE - SISMEMBER - SMEMBERS - SMISMEMBER - SMOVE - SPOP - SRANDMEMBER - SREM - SSCAN - SUNION - SUNIONSTORE                                                                                                                                                                                             |
| [Sorted Set](https://redis.io/commands/?group=sorted_set) | ✅         | BZPOPMAX - BZPOPMIN - ZADD - ZCARD - ZCOUNT - ZDIFFSTORE - ZINCRBY - ZINTERSTORE - ZLEXCOUNT - ZMSCORE - ZPOPMAX - ZPOPMIN - ZRANDMEMBER - ZRANGE - ZRANGESTORE - ZRANGEBYLEX - ZRANGEBYSCORE - ZRANK - ZREM - ZREMRANGEBYLEX - ZREMRANGEBYRANK - ZREMRANGEBYSCORE - ZREVRANGE - ZREVRANGEBYLEX - ZREVRANGEBYSCORE - ZREVRANK - ZSCAN - ZSCORE -ZUNIONSTORE |

We run command integration tests from following Redis clients after each code change and also periodically:

- **[Node-Redis](https://github.com/redis/node-redis)** [Command Tests](https://github.com/redis/node-redis/tree/v3.1.2/test/commands)
- **[Jedis](https://github.com/redis/jedis)** [Command Tests](https://github.com/redis/jedis/tree/v4.1.1/src/test/java/redis/clients/jedis/commands)
- **[Lettuce](https://github.com/lettuce-io/lettuce-core)** [Command Tests](https://github.com/lettuce-io/lettuce-core/tree/6.1.6.RELEASE/src/test/java/io/lettuce/core/commands)
- **[Go-Redis](https://github.com/go-redis/redis)** [Command Tests](https://github.com/go-redis/redis/blob/master/commands_test.go)
- **[Redis-py](https://github.com/redis/redis-py)** [Command Tests](https://github.com/redis/redis-py/tree/v4.4.0/tests)

Most of the unsupported items are in our roadmap. If you need a feature that we do not support, please drop a note to [support@montplex.com ](support@montplex.com). So we can inform you when we are planning to support it.

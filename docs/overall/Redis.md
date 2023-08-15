---
sidebar_position: 3
---

# Redis® API Compatibility

Montplex supports Redis client protocol up to version `6.2`. Following table shows the list of supported Redis commands:

## Bitmap

- ✅ BITCOUNT
- ✅ BITFIELD
- ✅ BITOP
- ✅ BITPOS
- ✅ GETBIT
- ✅ SETBIT
- ❌ BITFIELD_RO

## Connection management

- ✅ AUTH
- ✅ CLIENT
- ✅ ECHO
- ✅ PING
- ✅ QUIT
- ✅ HELLO
- ✅ SELECT
- ❌ RESET
## Cluster management

- ✅ READONLY
- ✅ ASKING
- ✅ CLUSTER
- ✅ READWRITE


## Generic commands

-  ✅ DEL 
-  ✅ DUMP
-  ✅ EXISTS 
-  ✅ EXPIRE 
-  ✅ EXPIREAT 
-  ✅ KEYS 
-  ✅ PERSIST 
-  ✅ PEXPIRE 
-  ✅ PEXPIREAT 
-  ✅ PTTL 
-  ✅ RANDOMKEY 
-  ✅ RENAME 
-  ✅ RENAMENX 
-  ✅ RESTORE 
-  ✅ SCAN 
-  ✅ SORT 
-  ✅ TOUCH 
-  ✅ TTL 
-  ✅ TYPE 
-  ✅ UNLINK 
-  ❌ COPY 
-  ❌ EXPIRETIME 
-  ❌ MIGRATE 
-  ❌ MOVE 
-  ❌ OBJECT 
-  ❌ PEXPIRETIME 
-  ❌ SORT_RO
-  ❌ WAIT 
-  ❌ WAITAOF 
## Geospatial indices

- ✅ GEOADD
- ✅ GEODIST
- ✅ GEOHASH
- ✅ GEOPOS
- ✅ GEORADIUS
- ✅ GEORADIUSBYMEMBER
- ✅ GEOSEARCH
- ✅ GEOSEARCHSTORE
- ❌ GEORADIUS_RO
- ❌ GEORADIUSBYMEMBER_RO
## Hash

- ✅ HDEL
- ✅ HEXISTS
- ✅ HGET
- ✅ HGETALL
- ✅ HINCRBY
- ✅ HINCRBYFLOAT
- ✅ HKEYS
- ✅ HLEN
- ✅ HRANDFIELD
- ✅ HMGET
- ✅ HMSET
- ✅ HSCAN
- ✅ HSET
- ✅ HSETNX
- ✅ HSTRLEN
- ✅ HVALS
## HyperLogLog

- ✅ PFADD
- ✅ PFCOUNT
- ✅ PFMERGE
- ❌ PFDEBUG
- ❌ PFSELFTEST
## List

- ✅ BLMOVE
- ✅ BLMPOP
- ✅ BLPOP
- ✅ BRPOP
- ✅ BRPOPLPUSH
- ✅ LINDEX
- ✅ LINSERT
- ✅ LLEN
- ✅ LMOVE
- ✅ LMPOP
- ✅ LPOP
- ✅ LPOS
- ✅ LPUSH
- ✅ LPUSHX
- ✅ LRANGE
- ✅ LREM
- ✅ LSET
- ✅ LTRIM
- ✅ RPOP
- ✅ RPOPLPUSH
- ✅ RPUSH
- ✅ RPUSHX

## Pub/Sub
- ✅ PSUBSCRIBE
- ✅ PUBLISH
- ✅ PUBSUB
- ✅ PUNSUBSCRIBE
- ✅ SUBSCRIBE
- ✅ UNSUBSCRIBE
- ❌ SPUBLISH
- ❌ SSUBSCRIBE
- ❌ SUNSUBSCRIBE


## Scripting and Functions
- ✅ EVAL
- ✅ EVAL_RO
- ✅ EVALSHA
- ✅ EVALSHA_RO
- ✅ SCRIPT
- ❌ FCALL
- ❌ FCALL_RO
- ❌ FUNCTION


## Server managment
- ✅ COMMAND
- ✅ CONFIG
- ✅ FLUSHALL
- ✅ FLUSHDB
- ✅ INFO
- ❌ DBSIZE
- ❌ LASTSAVE
- ❌ MONITOR
- ❌ SAVE
- ❌ SHUTDOWN
- ❌ SLAVEOF
- ❌ SLOWLOG
- ❌ SYNC
- ❌ TIME
- ❌ ACL
- ❌ GREWRITEAOF
- ❌ BGSAVE
- ❌ FAILOVER
- ❌ LATENCY
- ❌ LOLWUT
- ❌ MEMORY
- ❌ MODULE
- ❌ PSYNC
- ❌ REPLCONF
- ❌ REPLICAOF
- ❌ RESTORE-ASKING
- ❌ ROLE
- ❌ SWAPDB


## Set
- ✅ SADD
- ✅ SCARD
- ✅ SDIFF
- ✅ SDIFFSTORE
- ✅ SINTER
- ✅ SINTERSTORE
- ✅ SISMEMBER
- ✅ SMEMBERS
- ✅ SMISMEMBER
- ✅ SMOVE
- ✅ SPOP
- ✅ SRANDMEMBER
- ✅ SREM
- ✅ SSCAN
- ✅ SUNION
- ✅ SUNIONSTORE
- ❌ SINTERCARD

## Sorted Set
- ✅ BZMPOP
- ✅ BZPOPMAX 
- ✅ BZPOPMIN
- ✅ ZADD
- ✅ ZCARD
- ✅ ZCOUNT
- ✅ ZDIFF
- ✅ ZDIFFSTORE
- ✅ ZINCRBY
- ✅ ZINTER
- ✅ ZINTERCARD
- ✅ ZINTERSTORE
- ✅ ZLEXCOUNT
- ✅ ZMPOP
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
- ✅ ZUNION
- ✅ ZUNIONSTORE


## Stream
- ✅ XACK
- ✅ XADD
- ✅ XCLAIM
- ✅ XDEL
- ✅ XGROUP
- ✅ XINFO
- ✅ XLEN
- ✅ XPENDING
- ✅ XRANGE
- ✅ XREAD
- ✅ XREADGROUP
- ✅ XREVRANGE
- ✅ XTRIM
- ❌ XAUTOCLAIM
- ❌ XSETID


## String
- ✅ APPEND
- ✅ DECR
- ✅ DECRBY
- ✅ GET
- ✅ GETDEL
- ✅ GETEX
- ✅ GETRANGE
- ✅ GETSET
- ✅ INCR
- ✅ INCRBY
- ✅ INCRBYFLOAT
- ✅ MGET
- ✅ MSET
- ✅ MSETNX
- ✅ PSETEX
- ✅ SET
- ✅ SETEX
- ✅ SETNX
- ✅ SETRANGE
- ✅ STRLEN
- ✅ SUBSTR
- ❌ LCS
## Transactions

- ✅ DISCARD
- ✅ EXEC
- ✅ MULTI
- ✅ UNWATCH
- ✅ WATCH


## Bloom Filter
- ✅ BF .ADD
- ✅ BF .EXISTS
- ✅ BF .INFO
- ✅ BF .INSERT
- ✅ BF .LOADCHUNK
- ✅ BF .MADD
- ✅ BF .MEXISTS
- ✅ BF .SCANDUMP
- ❌ BF .CARD
- ❌ BF .RESERVE


## JSON

-  ✅ JSON.ARRAPPEND 
-  ✅ JSON.ARRINDEX 
-  ✅ JSON.ARRINSERT 
-  ✅ JSON.ARRLEN 
-  ✅ JSON.ARRPOP 
-  ✅ JSON.ARRTRIM 
-  ✅ JSON.CLEAR 
-  ✅ JSON.DEL 
-  ✅ JSON.FORGET 
-  ✅ JSON.GET 
-  ✅ JSON.MGET 
-  ✅ SON.NUMINCRBY 
-  ✅ JSON.NUMMULTBY 
-  ✅ JSON.OBJKEYS 
-  ✅ JSON.OBJLEN 
-  ✅ JSON.RESP 
-  ✅ JSON.SET 
-  ✅ JSON.STRAPPEND 
-  ✅ JSON.STRLEN 
-  ✅ JSON.TOGGLE 
-  ✅ JSON.TYPE 
-  ❌ JSON.DEBUG 
-  ❌ JSON.MERGE 
-  ❌ JSON.MSET 


## Search
- ✅ FT .LIST
- ✅ FT .AGGREGATE
- ✅ FT .ALIASADD
- ✅ FT .ALIASDEL
- ✅ FT .ALIASUPDATE
- ✅ FT .ALTER
- ✅ FT .CONFIG
- ✅ FT .CREATE
- ✅ FT .CURSOR
- ✅ FT .DICTADD
- ✅ FT .DICTDEL
- ✅ FT .DICTDUMP
- ✅ FT .DROPINDEX
- ✅ FT .EXPLAIN
- ✅ FT .EXPLAINCLI
- ✅ FT .INFO
- ✅ FT .PROFILE
- ✅ FT .SEARCH
- ✅ FT .SPELLCHECK
- ✅ FT .SYNDUMP
- ✅ FT .SYNUPDATE
- ✅ FT .TAGVALS


## Other
- ❌ CF
- ❌ CMS
- ❌ FS
- ❌ TDIGEST
- ❌ TS
- ❌ TOPK

We run command integration tests from following Redis clients after each code change and also periodically:

- **[Node-Redis](https://github.com/redis/node-redis)** [Command Tests](https://github.com/redis/node-redis/tree/v3.1.2/test/commands)
- **[Jedis](https://github.com/redis/jedis)** [Command Tests](https://github.com/redis/jedis/tree/v4.1.1/src/test/java/redis/clients/jedis/commands)
- **[Lettuce](https://github.com/lettuce-io/lettuce-core)** [Command Tests](https://github.com/lettuce-io/lettuce-core/tree/6.1.6.RELEASE/src/test/java/io/lettuce/core/commands)
- **[Go-Redis](https://github.com/go-redis/redis)** [Command Tests](https://github.com/go-redis/redis/blob/master/commands_test.go)
- **[Redis-py](https://github.com/redis/redis-py)** [Command Tests](https://github.com/redis/redis-py/tree/v4.4.0/tests)

Most of the unsupported items are in our roadmap. If you need a feature that we do not support, please drop a note to support@montplex.com. So we can inform you when we are planning to support it.

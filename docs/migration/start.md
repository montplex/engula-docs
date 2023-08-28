---
sidebar_position: 3
---

# Quick Start
Replicate a Redis database into another Redis database. 

## Magrate modes

   Riot has several modes for migration.
1. Live Replication, using dump & restore 
2. Type-Based Replication

![CacheService](/docs/riot.jpg)

## Quick Start
Some basic parameters
   ```
riot replicate --help

-h, --hostname
Server hostname

-p, --port
Server port

-c, --cluster
Enable cluster mode

-n, --db
Database number

-a, --pass
Password to use when connecting to the server

--mode
Replication mode.

1. snapshot: Initial replication using key scan.

2. live: Initial and continuous replication using key scan and keyspace notifications in parallel. See Live Replication for details.

3. liveonly: Continuous replication using keyspace notifications (only changed keys are replicated).

4. compare: Compare source and target keys

--type
Replication strategy (default: dump).

dump: Dump & Restore.

ds: Type-based Replication.
```

### Live Replication

No password, not cluster, single db, and only perform a full migration once.  
```
#Command line
./riot -h <source host> -p <source port> replicate -h <target host> -p <target port>

#Docker
docker run fieldengineering/riot -h <source host> -p <source port> replicate -h <target host> -p <target port>
 ```
Source host is the address where you want to migrate data from， The target is the endpoint of your Montplex Serverless cache instance.

for examples:
```
mdawmtawmdm4oa.engula-aliyun-cn-beijing.montplex.net
```
The whole command:
```
docker run fieldengineering/riot -h 172.31.0.22 -p 6379 -a testpwd replicate -h mdawmtawmdm4oa.engula-aliyun-cn-beijing.montplex.net -p 8125 -a <YOUR PASSWORD>
```

Logs like this
```
Listening  ? % [  =             ] 646642/? (0:25:00 / ?) 431.1/s | 19,165 queued
Listening  ? % [ =              ] 650193/? (0:25:01 / ?) 433.2/s | 92,328 queued
Listening  ? % [        =      ] 653393/? (0:25:02 / ?) 435.0/s | 172,395 queued
Listening  ? % [             = ] 654043/? (0:25:03 / ?) 435.2/s | 223,762 queued
Listening  ? % [        =      ] 655043/? (0:25:04 / ?) 435.5/s | 304,991 queued
```

With cluster, Full migration and real-time sync.

 ```
docker run fieldengineering/riot -h <source host> -p <source port> -a <passwd> -c replicate --type ds -h <target host> -p <target port> -a <passwd> -c --mode live
```
TIPS

--mode live ,this mode, you must modify the config of your source redis first. 

In ApsaraDB for Redis, refer to 
[Modify parameters of ApsaraDB for Redis](https://help.aliyun.com/zh/redis/user-guide/modify-the-values-of-parameters-for-an-instance)

In Amazon Cloud ElastiCache, refer to 
[Modify parameters of ElastiCache](https://docs.aws.amazon.com/zh_cn/AmazonElastiCache/latest/red-ug/ParameterGroups.Modifying.html)

If the source redis is your self built instance, you can modify parameters as follows
```
config set notify-keyspace-events KA
```
### Type-Based Replication   
Sometimes the versions of the source and destination redis are inconsistent, or for other reasons such as: 

1.   The target Redis database does not support the RESTORE command (Redis Enterprise CRDB)
2.   Incompatible DUMP formats between source and target (Redis 7.0).

use the --type ds option, as follows:
   ```
   docker run fieldengineering/riot -h <source host> -p <source port> replicate --type ds -h <target host> -p <target port> --mode live
   ```

   For more detail content, please refer to [Riot](https://developer.redis.com/riot/#_replicate_usage).

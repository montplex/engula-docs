---
sidebar_position: 4
---

# Other Tools
Riot supports almost all Redis migration scenarios, except for ApsaraDB for Redis cluster mode, so you can use the tool named redis-shake.
It supports full migration of Alibaba Cloud Redis clusters, but incremental migration is not supported.
##   Redis-shake
   This tool has three modes, restore、sync and scan.
   1. Restore mode always be used to restore the rdb file.
   2. Sync mode Supports full sync, and incremental sync. This mode is based on sync, psync replication. If your Redis is a product on the cloud，the commands may be Disabled, so this mode doesn't work anymore.
   3. Scan mode supports full sync only.

![CacheService](/docs/shake.jpg)

### Binary package
Download from Release: https://github.com/alibaba/RedisShake/releases

### Compile from source
   ```
   apt install golang
   git clone https://github.com/alibaba/RedisShake
   cd RedisShake
   bash build.sh
   ```
#### Problem
If you make a build error such as this, you should download the binary package, or use an accessible proxy.
```
proxyconnect tcp: dial tcp 47.242.92.102:8788: i/o timeout
```

   Usage

###   Edit sync.toml or restore.toml or scan.toml.

vi scan.toml
   ```
   type = "scan"

[source]
version = 6.0 # redis version, such as 2.8, 4.0, 5.0, 6.0, 6.2, 7.0, ...
address = "127.0.0.1:6379"
username = "" # keep empty if not using ACL
password = "" # keep empty if no authentication is required
tls = false

[target]
type = "cluster" # "standalone" or "cluster"
version = 6.0 # redis version, such as 2.8, 4.0, 5.0, 6.0, 6.2, 7.0, ...
# When the target is a cluster, write the address of one of the nodes.
# redis-shake will obtain other nodes through the `cluster nodes` command.
address = "127.0.0.1:6380"
username = "" # keep empty if not using ACL
password = "" # keep empty if no authentication is required
tls = false
   ```
###   Start redis-shake.
   ```
   ./bin/redis-shake redis-shake.toml
   # or
   ./bin/redis-shake restore.toml
   or
   ./bin/redis-shake scan.toml
   ```
## Other tools   
### Cloudcanal
https://www.clougence.com/cc-doc/intro/product_intro
### Aliyun DTS
https://www.aliyun.com/product/dts
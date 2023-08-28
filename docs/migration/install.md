---
sidebar_position: 2
---

# Tools And Install

## Tools
[Riot](https://developer.redis.com/riot/#_replicate_usage)

[Redis-shake](https://github.com/alibaba/RedisShake/releases)

[Aliyun DTS](https://www.aliyun.com/product/dts)

[Cloudcanal](https://www.clougence.com/cc-doc/intro/product_intro)
##   Riot
   You can run it on the command line or in a container
### Install   
#### Linux
   Download the pre-compiled binary from the [releases page](https://github.com/redis-developer/riot/releases), uncompress and copy to the desired location.

   riot-standalone-3.1.5-*.zip includes its own Java runtime and does not require a Java installation.
   ```
   wget https://github.com/redis-developer/riot/releases/download/v3.1.5/riot-standalone-3.1.5-linux-x86_64.zip

   unzip riot-standalone-3.1.5-linux-x86_64.zip -d ~/riot
   cd ~/riot/riot-standalone-3.1.5-linux-x86_64
   ./bin/riot --help 
   ```
#### macOS   
   ```
   brew install redis-developer/tap/riot
   ```   
#### Docker   
   ```
   docker run fieldengineering/riot [OPTIONS] [COMMAND] 
   ```
   
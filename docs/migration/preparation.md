---
sidebar_position: 1
---

# Preparation Work


## Which data can be migrated to Montplex Serverless cache
1.   Your self built physical instance
2.   ApsaraDB for Redis(Aliyun) 
3.   Amazon ElastiCache(aws)
4.   Montplex serverless cache

![CacheService](/docs/source.png)

Of course, The data in Montplex Serverless cache can also be migrated out.

## Prepare an EC2 instance
First, make sure that your source and destination redis are on the same VPC.
And in order not to affect the stability of production business, it's best to prepare a separate EC2 instance. Then, test it. Ensure that the command allows you to connect to the remote Elasticache database successfully.

SSH to this EC2 instance from your laptop:
```
ssh -i “public key” <EC2 Instance>
```
Install redis-cli on this new instance by running this command:
```
sudo apt update
sudo apt install -y redis-tools
```
Use redis-cli to check connectivity with the source instance and the target instance:
```
redis-cli -h <source host> -p 6379 -a <password>
redis-cli -h <target host> -p 6379 -a <password>
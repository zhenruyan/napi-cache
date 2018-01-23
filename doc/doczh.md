#   nedis-cache 类redisapi的内存缓存

```
const nedis = require('../app');

nedis.kv
nedis.hash
nedis.set
nedis.list

nedis.buffer(todo)

```

#### nedis.kv.set


最常用的k、v回调和存活时间可不添加；

```
nedis.kv.set("key","any value",ttl,callback)

```

#### nedis.kv.del

删除

```
nedis.kv.del("key")

```

#### nedis.kv.dump

序列化

```
nedis.kv.dump("key")

```

#### nedis.kv.expire

Redis Expire 命令用于设置 key 的过期时间。key 过期后将不再可用。

```
nedis.kv.expire("key",ttl)

```

#### nedis.kv.exists

检查key是否存在

```
nedis.kv.exists("key")
```

#### nedis.kv.persist

移除存活时间和回调

```
nedis.kv.persist("key")

```

#### nedis.kv.randomkey

返回一个随机的key

```
nedis.kv.randomkey()
```

#### nedis.kv.ttl

返回这个key的存活时间

```
 nedis.kv.ttl("key")

```

#### nedis.kv.getrange
 Getrange 命令用于获取存储在指定 key 中字符串的子字符串。字符串的截取范围由 start 和 end 两个偏移量决定(包括 start 和 end 在内)。

```
nedis.kv.getrange("key",start,end);
```
#### nedis.kv.getset

Getset 命令用于设置指定 key 的值，并返回 key 的旧值。

```
nedis.kv.getset("key",anyval);
```

#### nedis.kv.mget

命令返回所有(一个或多个)给定 key 的值。

```
nedis.kv.mget(["key","key2"])
```
#### nedis.kv.setrange

Setrange 命令用指定的字符串覆盖给定 key 所储存的字符串值，覆盖的位置从偏移量 offset 开始。

```
nedis.kv.setrange("key",offset,val)
```

#### nedis.kv.strlen

strlen 命令用于获取指定 key 所储存的字符串值的长度。当 key 储存的不是字符串值时，返回一个错误。

```
nedis.kv.setlen("key")
```
#### nedis.kv.lncr

自增1

```
nedis.kv.lncr("key")

```

#### nedis.kv.decr

val减1

```
nedis.kv.decr("key")

```
#### nedis.kv.append

Append 命令用于为指定的 key 追加值。

```
#### nedis.kv.append("key",val)
```


##   哈希类型


#### nedis.hash.hmset

同时将多个 field-value (域-值)对设置到哈希表 key 中。

#### nedis.hash.hgetall

获取在哈希表中指定 key 的所有字段和值

#### nedis.hash.hexists

查看哈希表 key 中，指定的字段是否存在。

#### nedis.hash.hget

获取存储在哈希表中指定字段的值。

#### nedis.hash.hdel

删除一个或多个哈希表字段

#### nedis.hash.hkeys

获取所有哈希表中的字段

#### nedis.hash.hvals

获取哈希表中所有值

#### nedis.hash.hlen

获取哈希表中字段的数量


    
    
    
    
    
    
    
    




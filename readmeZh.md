#  类redis api的内存缓存

>类redis的api内存缓存，请多拍砖

###  已实现部分
* kv

    set
    get
    del
    dump
    exists
    expire
    persist
    randomkey
    append
    decr
    incr
    getrange
    strlen
    setrange
    ttl
    mget
    getset

* hash(部分)

    hmset
    hgetall
    hexists
    hget
    hdel
    hmget
    hkeys
    hvals
    hlen

* set(部分)
    
    sadd
    scard
    srem
    spop


##   example

```
const nedis = require('../app');
//或者
let cache = new nedis.cache();

//最简单的
nedis.kv.set("a","a")
nedis.kv.get("a")

//存活时间

nedis.kv.set("a","a",1000)

//销毁后的回调
nedis.kv.set("a","a",1000,function(){
    //....
})

//还有其他的基本和redis保持一致

```

##   文档

[English](https://github.com/zhenruyan/napi-cache/wiki/nedis-cache---document)

[简体中文](https://github.com/zhenruyan/napi-cache/wiki/nedis-cache%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87)


##   todo

*  buffer 存储优化内存
*  sorted set

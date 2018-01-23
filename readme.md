#  Mimic the memory cache of the Redis API

###  Implemented part
    
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

* hash (Part)

    hmset
    hgetall
    hexists
    hget
    hdel
    hmget
    hkeys
    hvals
    hlen

* set   (Part)

    sadd
    scard
    srem
    spop


##   example

```
const nedis = require('../app');
// new 
let cache = new nedis.cache();

//simple
nedis.kv.set("a","a")
nedis.kv.get("a")

//ttl

nedis.kv.set("a","a",1000)

//ttl callback
nedis.kv.set("a","a",1000,function(){
    //....
})

//or apis 

```

##   document

[English](https://github.com/zhenruyan/napi-cache/wiki/nedis-cache---document)

[简体中文](https://github.com/zhenruyan/napi-cache/wiki/nedis-cache%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87)

##   todo
 *  buffer memory
 *  sorted set
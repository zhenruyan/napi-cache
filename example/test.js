const nedis = require('../app');

nedis.kv.set("a","aaa");
nedis.kv.set("b",Buffer.from("aaa"));
nedis.kv.set("c",{"a":"ccc"});
nedis.kv.set("d","a",1000,function(){console.log("hello nedis-cache")})

console.log(nedis.kv.get("a"))
console.log(nedis.kv.get("b"))
console.log(nedis.kv.get("c"))
console.log(nedis.kv.get("d"))
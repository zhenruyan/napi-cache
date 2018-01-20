let hash = require('./lib/hash');
let list = require('./lib/list');
let listset = require('./lib/listset');
let set = require('./lib/set');
let kv = require('./lib/kv');
class nedis{
    constructor(){
        this.kv=kv;
        this.hash=hash;
        this.list=list;
        this.listset=listset;
        this.set=set;
    }
    //todo 待定
    // save(){}
    // bgsave(){}
    // config(){}
}
module.exports.hash=hash.hash;
module.exports.kv=kv.kv;
module.exports.list=list.list;
module.exports.listset=listset.listset;
module.exports.set=set.set;
module.exports.cache=nedis;
module.exports= new nedis();
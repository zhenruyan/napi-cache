class db extends Map {
    constructor(){
        super();
    }
    //redis的键类型管理
    set (key,val,ttl=0,cb=function () {
    }){
        super.set(key,val);
        if(Number(ttl)!=0){
            setTimeout(
                function () {
                    this.del(key);
                    cb()
                }.bind(this)
                ,Number(ttl));
        }
    }
    del(key){
        super.delete(key)
    }
    dump(key){
        return JSON.stringify(super.get(key))
    }
    get(key){
        super.get(key)
    }
    exists(key){
        if(super.get(key)){
            return 1;
        }else {
            return 0;
        }
    }
    expire(key,ttl,cb=function () {
    }){
       setTimeout(function(){
           this.del(key);
           cb()
       }.bind(this),ttl)
    }

}
module.exports=db;
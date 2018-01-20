class db extends Map {
    constructor(){
        super();
    }
    //redis的键类型管理
    set (key,val,ttl=0,cb=function () {
    }){
        super.set(key,val);
        if(Number(ttl)!=0){
            let timeid=setTimeout(
                function () {
                    this.del(key);
                    cb()
                }.bind(this)
                ,Number(ttl));
                return timeid;
        }
        return this.get(key)
    }
    del(key){
        super.delete(key)
    }
    dump(key){
        return JSON.stringify(super.get(key))
    }
    get(key){
        return super.get(key)
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
       let timeid=setTimeout(function(){
           this.del(key);
           cb()
       }.bind(this),ttl)
        return timeid;
    }
    persist(timeid){
        clearTimeout(timeid)
    }
    // randomkey(){ //todo 看怎么搞
    //     console.log()
    // }
    append(key,string){
        this.set(key,this.get(key)+string);
        return this.get(key);
    }
    decr(key){
        if(key==null){
            return false;
        }
        let num=Number(this.get(key))
        if(isNaN(num)){
            num=0;
        }
        this.set(key,num-1);
        return this.get(key)
    }
    incr(key){
        if(key==null){
            return false;
        }
        let num=Number(this.get(key))
        if(isNaN(num)){
            num=0;
        }
        this.set(key,num+1);
        return this.get(key)
    }
    

}

module.exports.cache=db;
module.exports= new db();
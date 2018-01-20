class db extends Map {
    constructor(){
        super();
        this.timelist=new Map;
    }

    //todo 待定
    save(){}
    bgsave(){}
    config(){}
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
                this.timelist.set(key,timeid);
        }
        return this.get(key)
    }
    del(key){
        this.timelist.get(key).close();
        this.timelist.delete(key)
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
        if(this.get(key)!="undefined"){
            let timeid=setTimeout(function(){
                this.del(key);
                cb()
            }.bind(this),ttl)
            this.timelist.set(key,timeid)
            return this.get(key);
        }else {
            return false;
        }
    }
    persist(key){
        this.timelist.get(key).close();
        this.timelist.delete(key);
        return this.get(key);
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
    getrange(key,start,end){
        start=start-1;
        end=end;
        if(typeof (this.get(key)=='String')){
            return this.get(key).substring(start,end);
        }else {
            return false;
        }
    }
    strlen(key){
        if(this.get(key)!="undefined"){
            return this.get(key).length;
        }else{
            return false;
        }
    }
    setrange(key,offset,value){
        if(this.get(key)!="undefined"){
             this.set(key,this.getrange(key,1,offset)+value);
             return this.strlen(key);
        }else{
            return false;
        }
    }



}

module.exports.cache=db;
module.exports= new db();
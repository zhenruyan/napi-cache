class hash extends Map{
    constructor(){
        super();
    }
    hmset(key,obj){
        this.set(key,obj)
    }
    hgetall(key){
        return this.get(key)
    }
    hexists(key,objk){
        function contains(arr, obj) {
            var i = arr.length;
            while (i--) {
                if (arr[i] === obj) {
                    return true;
                }
            }
            return false;
        }
        if(this.get(key)!='undefined'){
            let objkeys=Object.keys(this.get(key));
           if(contains(objkeys,objk)){
                return 1;
           }else {
                return 0;
           }
        }else {
            return false;
        }
    }
    hget(key,objk){
        if(this.hexists(key,objk)==1){
            return this.get(key)[objk];
        }else {
            return false;
        }
    }
    hdel(key,...arg){
        if(this.get(key)!='undefined'){
            let size=0;
            let objkey;
            let obj=this.get(key);
            for(objkey in arg){
                if(obj[objkey]!="undefined"){
                    delete obj[arg[objkey]];
                    size++;
                }
            }
            this.hmset(key,obj)
            return size;
        }else {
            return false;
        }
    }
    hmget(key,...arg){
        let arr=[];
        let id;
        if(this.get(key)!='undefined'){
           for(id in arg){
                arr.push(this.get(key)[arg[id]]);
           }
           return arr;
        }else {
            return false;
        }
    }
    hkeys(key){
        let arr=[];
        let id;
        if(this.get(key)!='undefined'){
            for(id in this.get(key)){
                arr.push(id);
            }
            return arr;
        }else {
            return false;
        }
    }
    hvals(key){
        let arr=[];
        let id;
        if(this.get(key)!='undefined'){
            for(id in this.get(key)){
                arr.push(this.get(key)[id]);
            }
            return arr;
        }else {
            return false;
        }
    }
    hlen(key){
        let arr=[];
        let id;
        if(this.get(key)!='undefined'){
            for(id in this.get(key)){
                arr.push(id);
            }
            return arr.length;
        }else {
            return false;
        }
    }

}

module.exports.hash=hash;
module.exports=new hash();
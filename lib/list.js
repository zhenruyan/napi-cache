class list extends Map{
    constructor(){
        super()
        Array.prototype.remove = function(from, to) {
            var rest = this.slice((to || from) + 1 || this.length);
            this.length = from < 0 ? this.length + from : from;
            return this.push.apply(this, rest);
        };
        Array.prototype.insert = function (index, item) {
            this.splice(index, 0, item);
        };
    }
    lset(key,arr){
        this.set(key,arr);
        return arr;
    }
    lpush(key,arr){
        if(this.get(key)==undefined){
            this.lset(key,arr);
            return arr;
        }else {
            let oldarr = this.get(key);
            let newarr=[];
            this.set(key,newarr.concat(arr,oldarr));
            return this.get(key);
        }
    }
    rpush(key,arr){
        if(this.get(key)==undefined){
            this.lset(key,arr);
            return arr;
        }else {
            let oldarr = this.get(key);
            let newarr=[];
            this.set(key,newarr.concat(oldarr,arr));
            return this.get(key);
        }
    }
    blpop(key){
        if(this.get(key)==undefined){
            return false;
        }else {
            let oldarr = this.get(key);
            let first=oldarr[0];
            oldarr.remove(0);
            this.set(key,oldarr);
            return first;
        }
    }
    brpop(key){
        if(this.get(key)==undefined){
            return false;
        }else {
            let oldarr = this.get(key);
            let last=oldarr[oldarr.length-1];
            oldarr.remove(oldarr.length-1);
            this.set(key,oldarr);
            return last;
        }
    }
    brpoplpush(keyo,keyt){
        let last = this.brpop(keyo);
        this.lpush(keyt,[].push(last));
        return last;
    }
    lindex(key,index){
        if(this.get(key)==undefined){
            return false;
        }else {
            return this.get(key)[index];
        }
    }
    lscan(key,iteam){
        if(this.get(key)==undefined){
            return false;
        }else {
            let _a;
            _a=this.get(key);
            var results=[],
                len=_a.length,
                pos=0;
            while(pos<len){
                pos=_a.indexOf(iteam,pos);
                if(pos===-1){
                    break;
                }
                results.push(pos);
                pos+=1;
            }
            return results;
        }
        }
    linsert(key,str,arr){
        if(this.get(key)==undefined){
            return false;
        }else {
            let index = this.lscan(key,str);
            let oldarr = this.get(key);
            for (let id=0;id<arr.length;id++){
                oldarr.insert(index,arr[id]);
            }
            this.set(key,oldarr)
        }
    }
    llen(key){
        if(this.get(key)==undefined){
            return false;
        }else {
            return this.get(key).length;
        }
    }
    lrange(key,start,end){
        if(this.get(key)==undefined){
            return false;
        }else {
            let arr=[];
            for(let a=start;a<=end;a++){
                arr.push(this.get(key)[a-1]);
            }
            return arr;
        }
    }
    lrem(key,size,iteam){
        if(this.get(key)==undefined){
            return false;
        }else {
            let arr = this.get(key);
            let index = this.lscan(key,iteam);
            if(size===0){
                size==index.length;
            }
            for (let a=0;a<size;a++){
                arr.remove(index[a]);
            }
            this.set(key,arr);
            return this.get(key);
        }
    }
    rpop(key){
        if(this.get(key)==undefined){
            return false;
        }else {
            let arr= this.get(key);
            let last=arr[arr.length];
            arr.remove(arr.length);
            this.set(key,arr);
            return last;
        }
    }
    rpoplpush(key,zkey){
        if(this.get(key)==undefined||this.get(zkey)==undefined){
            return false;
        }else {
            let arr= this.get(key);
            let last=arr[arr.length];
            arr.remove(arr.length);
            this.set(key,arr);
            let zarr= this.get(zkey);
            zarr.push(last);
            this.set(zkey,)
            return last;
        }
    }
}
module.exports.list=list;
module.exports=new list();
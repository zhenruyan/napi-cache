class list extends Map{
    constructor(){
        super()
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

}
module.exports.list=list;
module.exports=new list();
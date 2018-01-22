class set extends Map{
    constructor(){
        super();
    }
    sadd(key,iteam){
        if(typeof iteam === "string"){
            if(this.get(key)==undefined){
                let temp = new Set;
                temp.add(iteam);
                this.set(key,temp);
                return this.get(key);
            }else {
                let oldset = this.get(key);
                oldset.add(iteam);
                this.set(key,oldset);
                return this.get(key);
            }
        }else {
            if(this.get(key)==undefined){
                let temp = new Set;
                for(let a=0;a<iteam.length;a++){
                    temp.add(iteam[a]);
                }
                this.set(key,temp);
                return this.get(key);
            }else {
                let oldset = this.get(key);
                for(let a=0;a<iteam.length;a++){
                    oldset.add(iteam[a]);
                }
                this.set(key,oldset);
                return this.get(key);
            }
        }

    }
    scard(key){
        if(this.get(key)==undefined){
            return false;
        }else {
            return this.get(key).size;
        }
    }
    srem(key,item){
        if(this.get(key)==undefined){
            return false;
        }
        if(typeof item != "object"){
            let temp =this.get(key);
            console.log(item)
            temp.delete(item);
            this.set(key,temp);
            return this.get(key);
        }else {
            console.log(item)
            let temp =this.get(key);
            for(let a=0;a<temp.size;a++){
                temp.delete(item[a]);
            }
            this.set(key,temp);
            return this.get(key);
        }
    }
    spop(key){
        if(this.get(key)==undefined){
            return false;
        }
        function randomNum(minNum,maxNum){
            switch(arguments.length){
                case 1:
                    return parseInt(Math.random()*minNum+1,10);
                    break;
                case 2:
                    return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10);
                    break;
                default:
                    return 0;
                    break;
            }
        }
        let temp =this.get(key);
        let size = temp.size;
        let keys = temp.values();
        let  iteam;
        let random=randomNum(1,size);
        for (let temp=0;temp<random;temp++){
            iteam=keys.next().value;
        }
        temp.delete(iteam);
        this.set(key,temp);
        return this.get(key);
    }
}
module.exports.set=set;
module.exports=new set();
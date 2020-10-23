import { LightningElement , api} from 'lwc';

export default class PaginationModifiedChild extends LightningElement {
recToDisplay;
@api pageSize
currentPage = 1;
totalPage;
allRecords
renderedCallback(){
    console.log(this.pageSize)
}   

    get getObjList(){
        return this.recToDisplay;
    }

    @api set getObjList(data){
        console.log("getObjList", this.currentPage)
        this.allRecords = data;
        if(this.pageSize){
            this.totalPage = Math.ceil(data.length/this.pageSize)
            this.sendSlicedList();
        }
    }
    get checkPrev(){
        return this.currentPage <= 1;
    }
    get checkNext(){
        return this.currentPage ===  this.totalPage;
    }
   
    gofHandler(){
        this.currentPage=1;
        this.sendSlicedList();

    }
    golHandler(){
        this.currentPage =  Math.ceil(this.allRecords.length/this.pageSize);
        this.sendSlicedList();

    }
    previousHandler(){
        if(this.currentPage > 1){
            this.currentPage --;
            this.sendSlicedList();
            
        }
      
    }
    nextHandler(){
        if(this.currentPage<this.totalPage){
            this.currentPage ++; 
            this.sendSlicedList();
            
        }

    }
    @api setpageSize(size){
        this.pageSize = size
        this.currentPage = 1
        this.sendSlicedList();
    }
    sendSlicedList(){
        const start = (this.currentPage-1)*this.pageSize;
        const end = (this.pageSize)*this.currentPage;
        this.recToDisplay=this.allRecords.slice(start,end);
        this.dispatchEvent(new CustomEvent('sendlist',{detail:{getObjList : this.recToDisplay}}));
    }
}

import { LightningElement , api} from 'lwc';

export default class PaginationModifiedChild extends LightningElement {
@api recToDisplay;
@api pageSize;
@api currentPage;
@api totalPage;

get getObjList(){
    return this.recToDisplay;
}

    @api set getObjList(data){
        this.allRecords = data;
        this.currentPage=1; 
        this.totalPage = Math.ceil(this.allRecords.length/this.pageSize);
        this.recToDisplay = this.allRecords.slice(this.currentPage - 1,this.pageSize);
        this.sendSlicedList();

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

    sendSlicedList(){
        const start = (this.currentPage-1)*this.pageSize;
        const end = (this.pageSize)*this.currentPage;
        this.recToDisplay=this.allRecords.slice(start,end);
        this.dispatchEvent(new CustomEvent('sendlist',{detail:{getObjList : this.recToDisplay}}));
    }
}

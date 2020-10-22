import { LightningElement,wire} from 'lwc';
import getOpportunities from '@salesforce/apex/PaginationController.getOpportunities';

export default class PaginationModified extends LightningElement {
    oppList=[];
    recFromChild=[];
    pgSize=5;
    tp;
    cp;
    @wire(getOpportunities)
    wiredOpp({error,data}){
        if(data){
            this.oppList =data;
            this.leng=data.length;
            
        }
    }
    sendListHandler(event){
        this.recFromChild=event.detail.getObjList;
        
    }
    handlepagesize(event){
        this.pgSize=event.detail;
        this.recFromChild = this.oppList;
        this.cp = 1;
        this.tp = Math.ceil(this.oppList.length/this.pgSize);
        this.recFromChild=this.recFromChild.slice(0, this.pgSize);
        console.log("whyyyyyyyyyyyyyyyyyy",this.cp);

    }
}
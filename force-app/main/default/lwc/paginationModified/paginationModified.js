import { LightningElement,wire} from 'lwc';
import getOpportunities from '@salesforce/apex/PaginationController.getOpportunities';

export default class PaginationModified extends LightningElement {
    oppList=[];
    recFromChild=[];
    pgSize=5;
    @wire(getOpportunities)
    wiredOpp({error,data}){
        if(data){
            this.oppList =data;
            this.leng=data.length;
        }
    }
    sendListHandler(event){
        console.log("event.detail", event.detail.getObjList)
        this.recFromChild=event.detail.getObjList; 
    }
    handlepagesize(event){
        this.pgSize=event.detail;
        console.log(this.pgSize)
        this.template.querySelector('c-pagination-modified-child').setpageSize(this.pgSize)
    }
}
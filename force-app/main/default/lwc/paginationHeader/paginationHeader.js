import { LightningElement,api } from 'lwc';
const opt = [];
for(let i= 1;i<=20;i++){
    opt[i-1] ={label : i.toString() , value : i.toString()};
        
}

export default class PaginationHeader extends LightningElement {
    @api size ;
    get options() {
        return opt;       
    }
    handleChange(event){
        this.size = event.detail.value;
        this.size = parseInt(this.size);
        this.dispatchEvent(new CustomEvent('getsize',{detail:this.size}));
    }
}
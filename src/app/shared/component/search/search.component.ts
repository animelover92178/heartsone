import {Component,Input,EventEmitter,Output}from '@angular/core';
@Component({
    templateUrl:'./search.component.html',
    selector:'app-search'
})
export class SearchComponent{
    @Input() items:any[] = [];
    @Input() filteredProperty:string ;
    @Output() searchCompleated = new EventEmitter();
    handleSearch(event:any){
       const searchText = event.target.value;
       console.log(searchText);
       if(!this.items) return this.searchCompleated.emit([]);
       if(!searchText) return this.searchCompleated.emit(this.items);
       const filteredItem  = this.items.filter((item)=>{
           console.log(item);
           return item.name.includes(searchText);
       })
       return this.searchCompleated.emit(filteredItem);
    }
}
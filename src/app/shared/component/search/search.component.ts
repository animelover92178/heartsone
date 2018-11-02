import {Component,Input,EventEmitter,Output}from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {debounceTime,distinctUntilChanged} from 'rxjs/operators';
@Component({
    templateUrl:'./search.component.html',
    selector:'app-search'
})
export class SearchComponent{
    @Input() items:any[] = [];
    @Input() filteredProperty:string ;
    @Output() searchCompleated = new EventEmitter();
    @Output() searchStarted = new EventEmitter();
    private searchSubject = new BehaviorSubject<string>('');
    handleSearch(event:any){
       this.searchSubject.next(event.target.value);
       this.searchStarted.emit("");
    }
    ngAfterViewInit() {
        this.searchSubject.pipe(debounceTime(300),distinctUntilChanged()).subscribe(searchText=>{
            if(!this.items) return this.searchCompleated.emit([]);
            if(!searchText) return this.searchCompleated.emit(this.items);
            const filteredItem  = this.items.filter((item)=>{
                console.log(item);
                return item.name.includes(searchText);
            })
            return this.searchCompleated.emit(filteredItem);
      
        })
    }
}
import {Component,Input}from '@angular/core';
@Component({
    selector:'app-card-list',
    templateUrl:'./card-list-component.html'
})
export class CardListComponent{
    @Input() name:string;
    @Input() lists:any[] = [];
    @Input() navigateTo:any;
}

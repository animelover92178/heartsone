import {Injectable} from '@angular/core';
import {BehaviorSubject,Observable} from 'rxjs';
import {Storage}from '@ionic/storage';
import {Card} from '../shared/card.model';
@Injectable()
export class favoriteCardStorage{
    private _favoriteCardSubject = new BehaviorSubject({});
    constructor(private storage:Storage){
        this.loadInitialData();
    }
    get favoriteCard():Observable<any>{
        return this._favoriteCardSubject.asObservable();
    }
    private loadInitialData(){
        this.storage.get('favoriteCards').then(
            (favoriteCards)=>{
                this._favoriteCardSubject.next(favoriteCards || {})

            }
        )
    }
    public toggleCard(cards:Card){
        const favoritecard$ =  this._favoriteCardSubject.getValue();
        if(cards.favorite){
            cards.favorite = false;
            delete favoritecard$[cards.cardId];
          }else{
            cards.favorite = true;
            favoritecard$[cards.cardId] = cards;
          }
          this.storage.set('favoriteCards', favoritecard$).then(()=>{
              this._favoriteCardSubject.next(favoritecard$)
          });
    }

}
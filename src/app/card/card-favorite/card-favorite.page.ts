import { Component, OnInit } from '@angular/core';
import {favoriteCardStorage} from '../shared/card-favorite.store';
import {Subscription} from 'rxjs';
import {Card} from '../shared/card.model';
@Component({
  selector: 'app-card-favorite',
  templateUrl: './card-favorite.page.html',
  styleUrls: ['./card-favorite.page.scss'],
})
export class CardFavoritePage implements OnInit {
  favoriteCardList:Card[] = [];
  Subcription:Subscription;
  constructor(private cardStore:favoriteCardStorage) { 
    this.Subcription =  this.cardStore.favoriteCard.subscribe(
      (favoriteCards:any)=>{
        this.favoriteCardList = this.getFavoriteCardList(favoriteCards)
      }
    )
  }
  ionViewDidLeave(){
    this.Subcription.unsubscribe()
  }
  ngOnInit() {
  }
  private getFavoriteCardList(favoriteCards:any):Card[]{
    if(favoriteCards){
      return Object.keys(favoriteCards)
            .filter(key => favoriteCards[key])
            .map(key => favoriteCards[key])
    }
    return [];
  }
}

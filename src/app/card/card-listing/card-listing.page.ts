import { Component } from '@angular/core';
import {ActivatedRoute}from '@angular/router';
import {CardService} from '../shared/card.service';
import {Card}from '../shared/card.model';
import {LoadingController}from '@ionic/angular';
import {LoaderService}from '../../shared/service/loader.service';
import {ToastService} from '../../shared/service/toast.service';
@Component({
  selector: 'app-card-listing',
  templateUrl: './card-listing.page.html',
  styleUrls: ['./card-listing.page.scss'],
})
export class CardListingPage {
  cardDeckGroup:string;
  cardDeck:string;
  cards:Card[] = [];
  copyOfCards:Card[] = [];
  loader:any;
  isLoading:boolean=false;
  constructor(private route:ActivatedRoute,private cardService:CardService,private loadCtrl:LoaderService,private toastService:ToastService) { }
  private getCard(){
    this.loadCtrl.presentLoading();
    this.cardService.getCardByDeck(this.cardDeckGroup,this.cardDeck).subscribe(
      (cards)=>{
        console.log(cards);
        this.cards = cards.map((card:Card)=>{
              card.text = this.cardService.replaceCardTextLine(card.text);
              return card;
        });
        this.copyOfCards = Array.from(this.cards);
        this.loadCtrl.dissmisLoading();
      },()=>{
              this.toastService.presentToastWithOptions("can not reload try again later")
              this.loadCtrl.dissmisLoading();
            }
    )
  }
  doRefresh(event){
    this.getCard();
    event.target.complete();
  }
  async ionViewWillEnter(){
    this.cardDeckGroup = this.route.snapshot.paramMap.get('cardDeckGroup');
    this.cardDeck = this.route.snapshot.paramMap.get('cardDeck');
    if(this.cards && this.cards.length === 0) this.getCard();
   
  }
  hydratedSearch(cards:Card[]){
      this.cards =cards;
      this.isLoading =false;
  }
  searchStarted(){
    this.isLoading = true;
  }
  favoriteCard(cards:Card){
    if(cards.favorite){
      cards.favorite = false;
    }else{
      cards.favorite = true;
    }
  }
}

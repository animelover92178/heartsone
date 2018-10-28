import { Component } from '@angular/core';
import {ActivatedRoute}from '@angular/router';
import {CardService} from '../shared/card.service';
import {Card}from '../shared/card.model';
import {LoadingController}from '@ionic/angular';
import {LoaderService}from '../../shared/service/loader.service';
import {AlertService}from '../../shared/service/alert.service';
@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail-page.html',
})
export class CardDetailPage {
  card:Card;

  constructor(private route:ActivatedRoute,private cardService:CardService,private loadCtrl:LoaderService,private alertService:AlertService) { }
  
  ionViewWillEnter(){
   const cardId = this.route.snapshot.paramMap.get('cardId');
    this.loadCtrl.presentLoading();
   
   this.cardService.getCardById(cardId).subscribe(
       (card:Card[])=>{
           this.card = card.map((card:Card)=>{
                card.text = this.cardService.replaceCardTextLine(card.text);
                return card;
           })[0];
        //    this.alertService.presentAlert("You Visit Detail Page");
        this.loadCtrl.dissmisLoading();
       })
 
  }
  updateImage(){
      this.card.img = 'assets/images/DefaultCard.png';
  }

}

import {Component}from '@angular/core';
import {CardService}from '../shared/card.service';
import {cardDeck}from '../shared/card.model';
@Component({
    selector:'app-card-deck',
    templateUrl:'./card-deck-page.html',
    styleUrls:['./card-deck-page.scss']
})
export class CardDeckPage{
    constructor(private cardservice:CardService){
        this.getCardDecks();
    }
    private readonly ALLOWED_DECKS =['classes','factions','qualities','types','races'];
    public cardDeck:cardDeck[]=[];
    private getCardDecks(){
        this.cardservice.getAllCardDecks().subscribe(
            (cardDecks:cardDeck[])=> 
                this.extractedAllowedDecks(cardDecks)
            )
    }
    extractedAllowedDecks(cardDecks:cardDeck[]){
        this.ALLOWED_DECKS.forEach((deckname:string)=>{
            this.cardDeck.push({name:deckname,type:cardDecks[deckname]})
        })
    }
    generateUrl(cardDeckGroup:string,cardDeck:string):string{
        return `/tabs/(card:card/${cardDeckGroup}/${cardDeck})`;
    }
}
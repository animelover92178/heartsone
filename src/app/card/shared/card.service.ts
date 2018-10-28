import {Injectable}from '@angular/core';
import {of as ObservableOf,Observable}from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {cardDeck,Card} from './card.model';
@Injectable()
export class CardService{
    private readonly cardDecks:cardDeck[] = [];
    private headers:HttpHeaders;
    private readonly HS_API_URL ='https://omgvamp-hearthstone-v1.p.mashape.com';
    private readonly API_KEY = 'FV41R7h0G5mshZV06uQtISDju8jyp1paJgojsnI0Hb3DRm4Utb';
    public getAllCardDecks():Observable<cardDeck[]>{
         ObservableOf(this.cardDecks);
         return this.http.get<cardDeck[]>(`${this.HS_API_URL}/info`,{headers:this.headers});
    }
    public replaceCardTextLine(text:string) {
        return text  ? text.replace(new RegExp("\\\\n","g"),","):"no Description";
    }
    public getCardByDeck(cardDeckGroup:string,cardDeck:string):Observable<Card[]>{
        return this.http.get<Card[]>(`${this.HS_API_URL}/cards/${cardDeckGroup}/${cardDeck}`,{headers:this.headers});
    }
    public getCardById(cardId:string):Observable<Card[]>{
        return this.http.get<Card[]>(`${this.HS_API_URL}/cards/${cardId}`,{headers:this.headers});
    }
    constructor(private http:HttpClient){
        this.headers = new HttpHeaders({'X-Mashape-Key':this.API_KEY});
    }
}
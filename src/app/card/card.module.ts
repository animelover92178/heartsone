import {IonicModule} from '@ionic/angular';
import { NgModule} from '@angular/core';
import {CommonModule}from '@angular/common';
import {CardDeckPage}from './card-deck/card-deck-page';
import {CardService}from './shared/card.service';
import {HttpClientModule}from '@angular/common/http';
import {CardListComponent}from './components/card-list-component';
import {CardListingPage}from './card-listing/card-listing.page';
import { CardDetailPage } from './card-detail/card-detail-page';
import {SearchComponent} from '../shared/component/search/search.component';
@NgModule({
    imports:[
        IonicModule,
        CommonModule,
        HttpClientModule
    ],
    providers:[
        CardService
    ],
    declarations:[
        CardDeckPage,
        CardListingPage,
        CardListComponent,
        CardDetailPage,
        SearchComponent
    ]
})
export class CardDeckPageModule {}

    export interface cardDeck{
        name:string;
        type:string[];
    }
    export interface Card{
        cardId:string,
        cardSet:string,
        img:string,
        imgGold:string,
        name:string,
        cost:number,
        favorite:boolean,
        attack:number,
        text:string,
        health:number,
        rarity:string,
        type:string,
        dbfId:string,
        faction:string,
        playerClass:string,
        locale:string
    }
import {Injectable} from '@angular/core';
import {LoadingController}from '@ionic/angular';
@Injectable()
export class LoaderService{
    private loader:HTMLIonLoadingElement;
    constructor(private LoadCtrl:LoadingController){}
    public async presentLoading():Promise<HTMLIonLoadingElement>{
        this.loader = await this.LoadCtrl.create({
            translucent:true
        });
        this.loader.present();
        return  this.loader;
    }
    public dissmisLoading(){
        if(this.loader){
            this.loader.dismiss();
        }
    }

}
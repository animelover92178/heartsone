import {Injectable} from '@angular/core'
import {Firebase}from '@ionic-native/firebase/ngx'
import {Platform} from '@ionic/angular'
import {AngularFirestore}from '@angular/fire/firestore'
@Injectable()
export class FcmService{
    constructor(private firebase:Firebase,private platform:Platform,private afs:AngularFirestore){

    }
    async getToken(){
        let token;
        if(this.platform.is('android')){
            token = await this.firebase.getToken();
        }
        if(this.platform.is('ios')){
            token = await this.firebase.getToken();
            await this.firebase.grantPermission();
        }
        this.saveToken(token);
    }
    private saveToken(token:string){
        if(!token) return;
        const deviceRef = this.afs.collection('devices');
        const data = {
            token,
            userId:'testUserId'
        }

        return deviceRef.doc(token).set(data);
    }
    oNotifications(){
        return this.firebase.onNotificationOpen();
    }
}
import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable()
export class ToastService {

  constructor(public toastController: ToastController) {}

  async presentToast(message:string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

  async presentToastWithOptions(message:string) {
    const toast = await this.toastController.create({
      message: message,
      showCloseButton: true,
      position: 'top',
      closeButtonText: 'Done',
      duration:3000,
      cssClass:'toast-error'
    });
    toast.present();
  }

}
import { Component } from '@angular/core';
import { Platform, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  constructor(private platform: Platform, private toastController: ToastController) {
    this.initializeApp();
  }

  async initializeApp() {
    await this.platform.ready();
    const toast = await this.toastController.create({
      message: 'Welcome to the Star Wars Wiki App!',
      duration: 2000,
      position: 'top',
      color: 'primary'
    });
    toast.present();
  }
}

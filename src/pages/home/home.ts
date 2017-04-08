import { MeetupDetail } from '../meetup-detail/meetup-detail';
import { MeetupData } from '../../providers/meetup-data';
import { Component } from '@angular/core';
import { App, NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  events: any;

  constructor(public app: App, public navCtrl: NavController, public meetupProvider: MeetupData) {
    this.loadEvents();
  }

  loadEvents(){
    this.meetupProvider.getMeetups().subscribe(meetupData => {
      this.events = meetupData.results;
    });
  }

  goToDetail(meetup){
    this.app.getRootNav().push(MeetupDetail, meetup);
  }

}

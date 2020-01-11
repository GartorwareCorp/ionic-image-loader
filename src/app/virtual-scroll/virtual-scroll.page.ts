import { Component } from '@angular/core';

@Component({
  selector: 'app-virtual-scroll',
  templateUrl: './virtual-scroll.page.html',
  styleUrls: ['./virtual-scroll.page.scss'],
})
export class VirtualScrollPage {
  // images taken from pexels.com
  public images: string[] = [
    'http://ionicframework.com/dist/preview-app/www/assets/img/avatar-ts-woody.png',
    'https://images.pexels.com/photos/115010/tulips-red-red-tulips-garden-115010.jpeg?h=350&auto=compress&cs=tinysrgb',
    'https://images.pexels.com/photos/206393/pexels-photo-206393.jpeg?h=350&auto=compress&cs=tinysrgb',
    'https://images.pexels.com/photos/316591/pexels-photo-316591.jpeg?h=350&auto=compress&cs=tinysrgb',
    'https://images.pexels.com/photos/274060/pexels-photo-274060.jpeg?h=350&auto=compress&cs=tinysrgb',
    'https://images.pexels.com/photos/126345/pexels-photo-126345.jpeg?h=350&auto=compress&cs=tinysrgb',
    'https://images.pexels.com/photos/52977/coffee-coffee-maker-restaurant-cafe-52977.jpeg?h=350&auto=compress&cs=tinysrgb',
  ];

  constructor() {

  }
}


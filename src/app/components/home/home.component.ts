import { Component, OnInit } from '@angular/core';

import * as AOS from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  slideData: any = [
    'Stewardship', 'Passion', 'Integrity', 'Respect', 'Innovative', 'Trust'
  ]
  slideValue: any = 'Stewardship';
  ind: number = 1;
  val: string = 'S';
  year: number = 0;
  ourproducts: any = [
    {
      'image': 'https://tranzonic.com/assets/product-section/hygeine1.png',
      'name': 'personal hygiene'
    },
    {
      'image': 'https://tranzonic.com/assets/product-section/wipers1.png',
      'name': 'Wipers and towels'
    },
    {
      'image': 'https://tranzonic.com/assets/product-section/microfiber1.png',
      'name': 'Microfiber'
    },
    {
      'image': 'https://tranzonic.com/assets/product-section/bathroom1.png',
      'name': 'Bathroom Supplies'
    },
    {
      'image': 'https://tranzonic.com/assets/product-section/aircare1.png',
      'name': 'Air care systems'
    },
    {
      'image': 'https://tranzonic.com/assets/product-section/gloves1.png',
      'name': 'Glove and hand protection'
    },
    {
      'image': 'https://tranzonic.com/assets/product-section/safety1.png',
      'name': 'Safety Products'
    },
    {
      'image': 'https://tranzonic.com/assets/product-section/absorbents1.png',
      'name': 'Absorbents'
    }
  ]

  constructor() { }

  ngOnInit(): void {
    AOS.init();

    let displayIndex = 0;
    let elem = document.getElementById('slide-val');
    let delay = 3000;
    setInterval(() => {
      if (elem) {
        elem.innerHTML = this.slideData[displayIndex];
        this.val = this.slideData[displayIndex].slice(0, 1);
        this.ind = displayIndex + 1;
      }
      displayIndex++;
      if (displayIndex >= this.slideData.length) {
        displayIndex = 0;
      }
    }, delay);


    var date = new Date();
    this.year = date.getFullYear();

  }

}

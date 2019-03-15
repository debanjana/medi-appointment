import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-production-bills-view',
  templateUrl: './production-bills-view.page.html',
  styleUrls: ['./production-bills-view.page.scss'],
})
export class ProductionBillsViewPage implements OnInit {
  billItems = [
    {
      itemName: 'name1',
      itemPrice: '100',
      extraField: 'extra'
    },
    {
      itemName: 'name2',
      itemPrice: '102',
      extraField: 'extra2'
    },
    {
      itemName: 'name3',
      itemPrice: '100',
      extraField: 'extra3'
    },
    {
      itemName: 'name4',
      itemPrice: '104',
      extraField: 'extra4'
    }
  ]



  constructor() { }

  ngOnInit() {
  }

}

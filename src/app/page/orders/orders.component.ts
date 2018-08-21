import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../service/store.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
  providers: [StoreService]
})
export class OrdersComponent implements OnInit {

  storeService: any;
  constructor(store: StoreService) {
    this.storeService = store;
  }

  ngOnInit() {
    this.storeService.getList()
      .then(data => {

      })
      .catch(err => {

      });
  }

}

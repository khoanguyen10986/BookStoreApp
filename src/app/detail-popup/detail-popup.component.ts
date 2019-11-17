import { Component, Input, OnInit } from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { DetailPopupService } from './detail-popup.service';

export interface Delevery {
  Service: string;
  Cost: number;
}

@Component({
  selector: 'app-detail-popup',
  templateUrl: './detail-popup.component.html',
  styleUrls: ['./detail-popup.component.scss']
})
export class DetailPopupComponent implements OnInit {
  @Input() bookId: string;

  public deliveries: Delevery[] = [
    { Service: 'MotoBike', Cost: 5},
    { Service: 'Train', Cost: 10},
    { Service: 'Aircraft' , Cost: 20}
  ];

  public selectedDelivery: Delevery = {
    Service: '',
    Cost: 0
  };

  public book: any = {
   id: '',
   title: '',
   author: '',
   description: '',
   thumbnail: '',
   publishDate: ''
  };

  constructor(private activeModal: NgbActiveModal, private detailService: DetailPopupService) {}

  ngOnInit() {
    this.detailService.getDetail(this.bookId).subscribe((data) => {
      this.book = data;
    });
  }

  selectService(deliveryService: string) {
    if (deliveryService === 'motobike') {
      this.selectedDelivery = this.deliveries.find(x => x.Service === 'MotoBike');
    } else if (deliveryService === 'train') {
      this.selectedDelivery = this.deliveries.find(x => x.Service === 'Train');
    } else {
      this.selectedDelivery = this.deliveries.find(x => x.Service === 'Aircraft');
    }
  }

  buyAndShowDeliveryInfo() {
    if (!this.selectedDelivery || !this.selectedDelivery.Service) {
      alert('Please select a delivery service');
      return;
    }
    this.activeModal.close('Close click');
    this.detailService.buyBook(this.selectedDelivery.Service, this.selectedDelivery.Cost)
    .subscribe((data) => {
      document.getElementById('landing-page').innerHTML = data;
    });
  }
}

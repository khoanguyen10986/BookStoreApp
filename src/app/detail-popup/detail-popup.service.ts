import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DetailPopupService {

  private apiUrl = 'http://localhost:54198/api/book';

   constructor(private http: HttpClient) { }

   getDetail(id: string) {
      const url = `${this.apiUrl}/detail/${id}`;
      return this.http.get(url);
   }

   buyBook(deliveryService: string, deliveryCost: number) {
      const url = `${this.apiUrl}/buybook`;
      return this.http.post(url, {
        DeliveryService: deliveryService,
        DeliveryCost: deliveryCost.toString()
      },
      {responseType: 'text'});
   }
}

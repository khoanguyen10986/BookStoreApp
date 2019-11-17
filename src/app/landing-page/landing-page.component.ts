import { Component, OnInit } from '@angular/core';
import { LandingPageService } from './landing-page.service';
import {NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DetailPopupComponent } from '../detail-popup/detail-popup.component';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  public searchTerm = '';
  public books = [];

  constructor(private modalService: NgbModal, private landingService: LandingPageService) { }

  ngOnInit() {
    this.searchBooks();
  }

  openDetail(bookId: string) {
    const modalRef = this.modalService.open(DetailPopupComponent);
    modalRef.componentInstance.bookId = bookId;
  }

  search() {
    this.searchBooks();
  }

  private searchBooks() {
    this.landingService.searchBooks(this.searchTerm).subscribe((data) => {
      this.books = Array.from(Object.keys(data), k => data[k]);
    });
  }
}

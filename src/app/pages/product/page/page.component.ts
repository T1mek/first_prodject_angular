import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { IProduct } from '../../../models/product';
import { ProductService } from '../../../services/product.service';
import { ModalService } from '../../../services/modal.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
})
export class PageComponent implements OnInit {
  title = 'angular1';
  // products:IProduct[]=[]
  loading = false;
  // products$: Observable<IProduct[]>;
  binding = '';

  constructor(
    public modalService: ModalService,
    public productService: ProductService
  ) {}

  ngOnInit(): void {
    this.loading = true;
    // this.products$ = this.productService
    //   .getAll()
    //   .pipe(tap(() => (this.loading = false)));
    this.productService.getAll().subscribe((products) => {
      this.loading = false;
    });
  }
}

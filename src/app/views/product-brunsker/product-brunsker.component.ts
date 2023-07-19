import { Component } from '@angular/core';
import { Router } from'@angular/router';

@Component({
  selector: 'app-product-brunsker',
  templateUrl: './product-brunsker.component.html',
  styleUrls: ['./product-brunsker.component.css']
})
export class ProductBrunskerComponent {

  constructor(private router: Router) { }

  navigateToProductCreate(): void {
    this.router.navigate(['/products/create'])
  }

}

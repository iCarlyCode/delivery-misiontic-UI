import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductsPageRoutingModule } from './products-routing.module';

import { ProductsPage } from './products.page';
import { DomSanitizerPipe } from '../../pipe/dom-sanitizer.pipe';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, ProductsPageRoutingModule],
  declarations: [ProductsPage, DomSanitizerPipe],
})
export class ProductsPageModule {}

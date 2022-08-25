import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProdutoDetailPage } from './produtodetail';

@NgModule({
  declarations: [
    ProdutoDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ProdutoDetailPage),
  ],
})
export class ProdutoDetailPageModule {}

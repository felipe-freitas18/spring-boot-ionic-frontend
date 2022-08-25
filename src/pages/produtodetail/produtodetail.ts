import { ProdutoService } from './../../services/produto.service';
import { ProdutoDTO } from './../../models/produto.dto';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { API_CONFIG } from '../../config/api.config';

@IonicPage()
@Component({
  selector: 'page-produtodetail',
  templateUrl: 'produtodetail.html',
})
export class ProdutoDetailPage {

  item: ProdutoDTO;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public produtoService: ProdutoService) {
  }

  ionViewDidLoad() {
    let produto_id = this.navParams.get('produto_id');
    this.produtoService.findById(produto_id)
      .subscribe(response => {
        this.item = response;
        this.getImageIfExists();
      },
      error =>{});
  }

  getImageIfExists(){
    this.produtoService.getImageFromBucket(this.item.id)
    .subscribe(response=> {
      this.item.imageUrl = `${API_CONFIG.bucketBase_Url}/prod${this.item.id}.jpg`; 
    },
    error => {});
  }

}

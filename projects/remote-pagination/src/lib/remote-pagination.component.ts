import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-remote-pagination',
  template: `
    <p>
      remote-pagination works!
    </p>
  `,
  styles: []
})

export class RemotePaginationComponent implements OnInit {

  private url: string;
  private data: [];
  private itemsPerPage: number;
  private pages: iPage;

  constructor() { }

  ngOnInit() {
  }

  public setData(pData){
    this.data = pData;
  }

  public setItemsPerPage(pItemsPerPage){
    this.itemsPerPage = pItemsPerPage;
  }

  public setCurrentUrl(pUrl){
    this.url = pUrl;
  }

  public getPages(): iPage[]{
    let pageCount = this.getPagesCount();
    let vPages: iPage[];
    let vPage: iPage;
    for(let i = 0; i < pageCount; i++){
      vPage.url = this.url + '?page=' + i;
      vPages.push(vPage);
    }
    return vPages;
  }

  public getStyledHTMLPages(pLiClasses, pAClass, pIcon: string): string{
    let vPages = this.getPages();
    let vPagesResult: string = "";
    for(let i = 0; i < vPages.length; i++){
      vPagesResult += '<li class="'+pLiClasses+'"><a class="'+pAClass+'">'+pIcon+' '+i+'</a></li>';
    }
    return vPagesResult;
  }

  public getPagesCount(): number{
    let count: number;
    if(this.data !== []){
      count = this.data.length / this.itemsPerPage;
    } else {
      count = 0;
    }
    return count;
  }

  public getUrl(){
    return this.url;
  }

}

interface iPage {
  url: string;
};
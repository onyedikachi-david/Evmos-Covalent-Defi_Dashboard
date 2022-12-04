import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { LoaderService } from 'src/app/loader.service';
import { TokenService } from 'src/app/services/tokens/token.service';

@Component({
  selector: 'app-tokens',
  templateUrl: './tokens.component.html',
  styleUrls: ['./tokens.component.css']
})
export class TokensComponent implements OnInit {

  public currentPageNo: number = 1;
  public totalPages: number = 1;
  public tokens: any;
  public limit = 5;



  constructor(private tokenService: TokenService, private toastrService: ToastrService, private loader: LoaderService) { }

  async ngOnInit(): Promise<void> {
    this.loader.showloader();
    let tokenInfo = await this.tokenService.getTokensInfo(this.currentPageNo - 1, this.limit);
    this.tokens = [...tokenInfo.data.items];
    this.totalPages = tokenInfo.data.pagination.total_count / this.limit;
    console.log(this.tokens);
    this.loader.hideloader();
  }

  getPrecision(value: string, contractDecimal: number) {
    return (Number.parseFloat(value) / Math.pow(10, contractDecimal)).toPrecision(10);
  }

  public async prevPage() {
    if (this.currentPageNo == 1) {
      this.toastrService.error("No such records exists");
    }
    else {
      this.currentPageNo--;
      let tokenInfo = await this.tokenService.getTokensInfo(this.currentPageNo - 1, this.limit);
      this.tokens = [...tokenInfo.data.items];

    }

  }

  async nextPage() {
    if (this.currentPageNo - 1 <= this.totalPages && this.tokens.length == this.limit) {
      this.currentPageNo++;
      let tokenInfo = await this.tokenService.getTokensInfo(this.currentPageNo - 1, this.limit);
      this.tokens = [...tokenInfo.data.items];
    }
    else {
      this.toastrService.error("No such records exists");
    }
  }

}

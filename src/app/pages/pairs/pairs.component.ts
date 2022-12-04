import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { LoaderService } from 'src/app/loader.service';
import { TokenService } from 'src/app/services/tokens/token.service';

@Component({
  selector: 'app-pairs',
  templateUrl: './pairs.component.html',
  styleUrls: ['./pairs.component.css']
})
export class PairsComponent implements OnInit {
  public currentPageNo: number = 1;
  public totalPages: number = 1;
  public pools: any;
  public limit = 5;

  constructor(private pairService: TokenService, private toastrService: ToastrService, private loader:LoaderService) { }

  async ngOnInit(): Promise<void> {
    this.loader.showloader();
    let pairInfo = await this.pairService.getPoolsInfo(this.currentPageNo -1, this.limit);
    this.pools = [...pairInfo.data.items];
    this.totalPages = pairInfo.data.pagination.total_count/this.limit;
    console.log(this.pools);
    this.loader.hideloader()

  }

  getPrecision(value: string, contractDecimal: number){
    return (Number.parseFloat(value)/Math.pow(10, contractDecimal)).toPrecision(10);
  }

  public async prevPage(){
    if(this.currentPageNo == 1)
    {
      this.toastrService.error("No such records exists");
    }
    else{
      this.currentPageNo--;
      let poolInfo =await this.pairService.getPoolsInfo(this.currentPageNo - 1, this.limit);
      this.pools = [...poolInfo.data.items];

    }

  }

  async nextPage(){
    debugger;
    if(this.currentPageNo-1 <= this.totalPages && this.pools.length == this.limit)
    {
      this.currentPageNo++;
      let tokenInfo =await this.pairService.getPoolsInfo(this.currentPageNo - 1, this.limit);
      this.pools = [...tokenInfo.data.items];
    }
    else{
      this.toastrService.error("No such records exists");
    }
  }

}

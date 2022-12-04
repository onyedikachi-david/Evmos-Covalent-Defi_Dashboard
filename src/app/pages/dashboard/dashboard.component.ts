import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';
import { LoaderService } from 'src/app/loader.service';
import { EcosystemService } from 'src/app/services/ecosystem/ecosystem.service';
import { TokenService } from 'src/app/services/tokens/token.service';

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2,
  volumeExample
} from "../../variables/charts";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private platformService: EcosystemService, private tokenService: TokenService, private loader: LoaderService) {

  }

  public datasets: any;
  public data: any;
  public ecosystem: any;
  public salesChart;
  public volumesChart;
  public clicked: boolean = true;
  public clicked1: boolean = false;
  public clicked2 = true;
  public clicked3 = false;

  public daysView: boolean = false;
  public volumeDaysView: boolean = false;

  public tokens: any;
  public pools: any;

  public totalVolume: number = 0;

  async ngOnInit() {
    this.loader.showloader();
    this.ecosystem = await this.platformService.getEcosystemInfo();

    parseOptions(Chart, chartOptions());
    var liquidityChart = document.getElementById('chart-sales');
    var volumeChart = document.getElementById('volume-chart');

    this.salesChart = new Chart(liquidityChart, {
      type: 'line',
      options: chartExample1.options,
      data: chartExample1.data
    });

    this.volumesChart = new Chart(volumeChart, {
      type: 'line',
      options: volumeExample.options,
      data: volumeExample.data
    });

    this.drawLiquidityGraph(this.ecosystem.data.items[0].liquidity_chart_30d);
    this.drawVolumeGraph(this.ecosystem.data.items[0].volume_chart_30d);

    this.tokens = await this.tokenService.getTokensInfo(0, 5);
    this.tokens = this.tokens.data.items;

    let volume7d = this.ecosystem.data.items[0].volume_chart_7d;

    volume7d.forEach(elem => {

      this.totalVolume += elem.volume_quote;
    });

    this.pools = await this.tokenService.getPoolsInfo(0, 5);
    this.pools = this.pools.data.items;
    console.log(this.pools);

    this.loader.hideloader()


  }


  public updateVolumeOptions() {

    let volume7d = this.ecosystem.data.items[0].volume_chart_7d;
    let volume30d = this.ecosystem.data.items[0].volume_chart_30d;

    this.volumeDaysView = !(this.volumeDaysView);

    if (this.volumeDaysView) {
      this.drawVolumeGraph(volume7d);
    }
    else {
      this.drawVolumeGraph(volume30d);
    }



  }

  drawVolumeGraph(volume) {
    let labels = [];
    let dataSetInfo = [];
    volume.forEach(element => {

      let dateInfo = new Date(element.dt);
      labels.push(dateInfo.getDate().toString() + "/" + new Date(element.dt).getMonth().toString());
      dataSetInfo.push(element.volume_quote);

    });

    this.volumesChart.data.labels = labels;

    this.volumesChart.data.datasets[0].label = "Volume";
    this.volumesChart.data.datasets[0].data = dataSetInfo;
    this.volumesChart.update();
  }



  public updateOptions() {
    // this.updateVolumeOptions();
    let liquidity7d = this.ecosystem.data.items[0].liquidity_chart_7d;
    let liquidity30d = this.ecosystem.data.items[0].liquidity_chart_30d;

    this.daysView = !(this.daysView);

    if (this.daysView) {
      this.drawLiquidityGraph(liquidity7d);
    }
    else {
      this.drawLiquidityGraph(liquidity30d);
    }



  }

  drawLiquidityGraph(liquidity) {
    let labels = [];
    let dataSetInfo = [];
    liquidity.forEach(element => {

      let dateInfo = new Date(element.dt);
      labels.push(dateInfo.getDate().toString() + "/" + new Date(element.dt).getMonth().toString());
      dataSetInfo.push(element.liquidity_quote);

    });

    this.salesChart.data.labels = labels;

    this.salesChart.data.datasets[0].label = "Liquidity";
    this.salesChart.data.datasets[0].data = dataSetInfo;
    this.salesChart.update();
  }

  getPrecision(value: string, contractDecimal: number) {
    return (Number.parseFloat(value) / Math.pow(10, contractDecimal)).toPrecision(10);
  }

}

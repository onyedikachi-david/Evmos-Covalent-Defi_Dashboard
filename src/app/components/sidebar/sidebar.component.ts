import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HealthService } from 'src/app/services/health/health.service';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'fas fa-chart-line', class: '' },
    { path: '/tokens', title: 'Tokens',  icon: 'fas fa-compact-disc', class: '' },
    { path: '/pairs', title: 'Pairs',  icon: 'fas fa-chart-pie', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;
  timeIntervalSeconds = 60;
  public dateTime : any;

  constructor(private router: Router, private healthService: HealthService) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });

   this.getHealthInfo();

   setInterval(() => {  this.getHealthInfo() }, this.timeIntervalSeconds * 1000);
  }

  async getHealthInfo()
  {
    let data =  await this.healthService.getHealthStatus();
     let lastSyncDate= new Date(data.data.items[0].latest_block_signed_at);
    
    var timeDiff = Date.now() - +(lastSyncDate);

    if(timeDiff < 60)
    {
      this.dateTime = timeDiff.toPrecision(1) + " secs ago";
    }
    else if(timeDiff >= 60 && timeDiff < 3600)
    {
      this.dateTime = (timeDiff/60).toPrecision(1) + " mins ago";
    }
    else if(timeDiff >= 3600 && timeDiff < 86400){
      this.dateTime = (timeDiff/3600).toPrecision(1) + " hours ago";
    }
    else{
      this.dateTime = (timeDiff/86400).toPrecision(1) + " days ago";
    }
  }
}

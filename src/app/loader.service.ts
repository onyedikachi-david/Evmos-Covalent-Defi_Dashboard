import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor() { }

  showloader() {
    document.getElementById("loader").style.display = "block";
    document.getElementById("maincontent").classList.add("blur")
    document.getElementById("sidenav-main").classList.add("blur")
  }
  hideloader() {
    document.getElementById("loader").style.display = "none";
    setTimeout(() => {
      document.getElementById("maincontent").classList.remove("blur")
    document.getElementById("sidenav-main").classList.remove("blur")

    }, 400);
  }
}

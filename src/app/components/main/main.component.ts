import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  // isLoggedIn: boolean = false;
  // login_data: any;
  // -----------------------------------------------------------------------//
  private title = 'GeoTag Admin';
  // links = [
  //   "Home", 
  //   "List Users",
  //   "List Service Requests"
  // ];

  links = [
    {
      
      name: 'Home',
      icon:'home',
      route: 'my-orders',
    },
    
    {
      icon:'event',
      name: 'Past Orders',
      route: 'my-orders'
    },
   
    {
      icon:'assessment',
      name: 'My Wallet',
      route: 'my-wallet'
    }
    // ,{
    //   icon:'group',
    //   name: 'Executives',
    //   route: 'executives'
    // },
    // {
    //   icon:'group_add',
    //   name: 'Create Member',
    //   route: 'create'
    // },
    // {
    //   icon:'business',
    //   name: 'Communities',
    //   route: 'communities'
    // },
    // {
    //   icon:'group',
    //   name: 'Residents',
    //   route: 'members'
    // },
    // {
    //   icon:'playlist_add',
    //   name: 'Post AD',
    //   route: 'postAd'
    // },
    // {
    //   icon:'list',
    //   name: 'All ADs',
    //   route: 'getAds'
    // }
  ];
  constructor(
    private router: Router
  ) {
    // this.login_data = JSON.parse(sessionStorage.getItem('loginDetails'));
    // if(this.login_data==null) {
    //   this.router.navigate(['login']);
    // }else{
    //   this.isLoggedIn = true;
    // }
  }

  ngOnInit() {
  }

  goToLink(link) {
  
    this.router.navigate([`/main/${link.route}`]);

   
  }

  logout() {
    sessionStorage.clear();
    this.router.navigate(['login']);
  }

}

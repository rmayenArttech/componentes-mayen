import { Component, OnInit } from '@angular/core';
import { Bio } from '../../model/bio';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutMeComponent implements OnInit {

  bioList: Bio[] = [
    {
      urlSocialNetwork: 'https://www.facebook.com/profile.php?id=100075153915462',
      socialNetwork: 'Facebook',
      image: '/assets/images/fb.jpg',
    },
    {
      urlSocialNetwork: 'https://www.instagram.com/os.lightning/',
      socialNetwork: 'Instagram',
      image: '/assets/images/ins.jpg',
    }
    
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

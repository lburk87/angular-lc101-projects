import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Super Great Photos';
  image1 = 'https://theday.co.uk/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaEpJaWxpWWpkalptSXlZeTFrTXpjekxUUTNZakl0T0dGa05TMDFPVFV3TmpZNE16RmxNREVHT2daRlZBPT0iLCJleHAiOm51bGwsInB1ciI6ImJsb2JfaWQifX0=--ee0e5c5d63b38e9de410165e05a9b2dc9209bfd6/-images-stories-2020-2020-05-2020-05-14_bison.jpg';
  image2 = 'https://i.pinimg.com/564x/81/51/3b/81513ba95760eb0c54d4c9065e83c270.jpg';
  image3 = 'https://ewscripps.brightspotcdn.com/dims4/default/e80d623/2147483647/strip/true/crop/1600x900+0+0/resize/1280x720!/quality/90/?url=http%3A%2F%2Fewscripps-brightspot.s3.amazonaws.com%2Fbc%2F75%2F0c084ace468b89324f1f87697806%2Fedyard-002-web.jpg';

  constructor() { }

  ngOnInit() {
  }

}
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

 @Input()
 imgSrc: string = 'https://picsum.photos/id/237/536/354';

 @Input()
 altTxt?: string = 'Pondcherry French Hotel';

 @Input()
 figCaptionTxt?: string = 'The French Quarter or White Town area in Pondicherry is filled with...';

 @Input()
 imgOpacity?: number = 1;
  
 constructor () {}

 ngOnInit(): void {
   
 }

}

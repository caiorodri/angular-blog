import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title-page',
  templateUrl: './title-page.component.html',
  styleUrls: ['./title-page.component.css', './title-page.responsive.component.css']
})
export class TitlePageComponent {

  @Input()
  title: string = "THE BLOG";

}

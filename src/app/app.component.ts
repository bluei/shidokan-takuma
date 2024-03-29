import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  @ViewChild('sidebar') sidebar!: ElementRef;
  title = 'client';
  showSidebar: boolean = false;
  sidebarDisplay: string = 'none';

  ngOnInit(): void {
    
  }

  w3_close(): void {
    this.sidebarDisplay = 'none';
  }
  
  w3_open(): void {
    // the css in w3 auto shows and hides the burger when the menu items can't fit the screen width. 
    // this checks that display property and shows the sidebar if on a small screen.
    this.sidebarDisplay = getComputedStyle(this.sidebar.nativeElement).getPropertyValue('display');
    this.sidebarDisplay = this.sidebarDisplay === 'block' ? 'none' : 'block';
    // console.log(this.sidebarDisplay);
  }

}

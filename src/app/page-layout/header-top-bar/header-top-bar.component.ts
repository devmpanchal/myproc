import { Component,Renderer2  } from '@angular/core';

@Component({
  selector: 'app-header-top-bar',
  templateUrl: './header-top-bar.component.html',
  styleUrl: './header-top-bar.component.css'
})
export class HeaderTopBarComponent {

  constructor(private renderer: Renderer2) {}

  onButtonClick(): void {
    const body = document.body;

    this.renderer.addClass(body, 'sidebar-enable');

    if (window.innerWidth >= 768) {
      this.renderer.addClass(body, 'enlarged');
    } else {
      this.renderer.removeClass(body, 'enlarged');
    }

    // Reset sidebar scroll container
    this._resetSidebarScroll();
  }

  private _resetSidebarScroll(): void {
    // Implement your logic to reset sidebar scroll
  }

}

import { Component, Renderer2, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    this.loadScript('/assets/js/app.js');
  }

  private loadScript(scriptPath: string): void {
    const script = this.renderer.createElement('script');
    script.type = 'text/javascript';
    script.src = scriptPath;
    this.renderer.appendChild(document.body, script);
  }
}

import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-left-menu-bar',
  templateUrl: './left-menu-bar.component.html',
  styleUrl: './left-menu-bar.component.css'
})
export class LeftMenuBarComponent {

  ngOnInit() {

    $('#side-menu').metisMenu();

    $('.slimscroll-menu').slimscroll({
      height: 'auto',
      position: 'right',
      size: "5px",
      color: '#9ea5ab',
      wheelStep: 5,
      touchScrollStep: 20
    });

    this.activateLink();

  }

  private activateLink(): void {
    const pageUrl = window.location.href.split(/[?#]/)[0];

    const links = document.querySelectorAll('#side-menu a');
    links.forEach((link: Element) => {
      const anchor = link as HTMLAnchorElement;

      if (anchor.href === pageUrl) {
        anchor.classList.add('active');
        anchor.parentElement!.classList.add('mm-active');

        const parent = anchor.parentElement!.parentElement!;
        parent.classList.add('mm-show');
        parent.previousElementSibling!.classList.add('active');

        parent.parentElement!.classList.add('mm-active');
        parent.parentElement!.parentElement!.classList.add('mm-show');
        parent.parentElement!.parentElement!.previousElementSibling!.classList.add('active');
        parent.parentElement!.parentElement!.parentElement!.classList.add('mm-active');
        parent.parentElement!.parentElement!.parentElement!.parentElement!.classList.add('mm-show');
      }
    });
  }
  

}

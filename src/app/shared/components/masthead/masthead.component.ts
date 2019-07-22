import { Component, HostListener, OnDestroy } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-masthead',
  templateUrl: './masthead.component.html',
  styleUrls: ['./masthead.component.scss'],
  animations: [
    trigger('menuAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate(500, style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate(500, style({ opacity: 0 }))
      ])
    ])
  ]
})

export class MastheadComponent implements OnDestroy {

  isToggleVisible: boolean = false;

  isScroll: boolean = false;

  isCollapsed: boolean = true;

  private _onDestroy$ = new Subject<void>();

  constructor(breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe([Breakpoints.Small, Breakpoints.XSmall])
      .pipe(takeUntil(this._onDestroy$))
      .subscribe(result => this.isToggleVisible = result.matches);
  }

  ngOnDestroy(): void {
    this._onDestroy$.next();
    this._onDestroy$.complete();
  }


  @HostListener('window:scroll', ['$event'])
  @HostListener('window:resize', ['$event'])
  onWindowScroll(event: Event) {
    if (event) {
      event.stopPropagation();
    }
    if (!this.isToggleVisible) {
      this.isScroll = window.pageYOffset > 50;
    }
  }

}

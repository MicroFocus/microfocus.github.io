import { AfterViewInit, Directive, ElementRef, Input, OnDestroy, Renderer2 } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';

@Directive({
  selector: '[appEllipsis]'
})
export class EllipsisDirective implements AfterViewInit, OnDestroy {

  /** Store the original content */
  @Input('appEllipsis') content: string;

  private readonly _onDestroy$ = new Subject<void>();

  constructor(
    private readonly _elementRef: ElementRef<HTMLElement>,
    private readonly _renderer: Renderer2
  ) { }

  ngAfterViewInit(): void {
    this.update();

    //  listen for window resize changes and then update the ellipsis
    fromEvent(window, 'resize')
      .pipe(debounceTime(100), takeUntil(this._onDestroy$))
      .subscribe(() => this.update());
  }

  ngOnDestroy(): void {
    this._onDestroy$.next();
    this._onDestroy$.complete();
  }

  update(): void {
    //  set the content of the tag
    this._renderer.setProperty(this._elementRef.nativeElement, 'innerText', this.content);

    let truncatedContent = this.content;

    while (this._elementRef.nativeElement.scrollHeight > this._elementRef.nativeElement.offsetHeight) {

      // Ensuring the content is truncated on a whole word
      truncatedContent = truncatedContent.substring(0, truncatedContent.lastIndexOf(' ')) + '…';

      // update the content of the tag
      this._renderer.setProperty(this._elementRef.nativeElement, 'innerText', truncatedContent);
    }
  }
}

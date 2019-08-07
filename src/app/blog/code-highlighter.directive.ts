import { AfterViewInit, Directive, ElementRef } from '@angular/core';
import hljs from 'highlight.js/lib/highlight';

import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';
import json from 'highlight.js/lib/languages/json';
import xml from 'highlight.js/lib/languages/xml';
import css from 'highlight.js/lib/languages/css';
import scss from 'highlight.js/lib/languages/scss';
import less from 'highlight.js/lib/languages/less';
import java from 'highlight.js/lib/languages/java';


hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('json', json);
hljs.registerLanguage('xml', xml);
hljs.registerLanguage('css', css);
hljs.registerLanguage('scss', scss);
hljs.registerLanguage('less', less);
hljs.registerLanguage('java', java);

@Directive({
  selector: '[appCodeHighlighter]'
})
export class CodeHighlighterDirective implements AfterViewInit {

  constructor(private readonly _elementRef: ElementRef<HTMLElement>) {}

  ngAfterViewInit(): void {

    // find all the `pre` tags and only process them
    Array.from(this._elementRef.nativeElement.querySelectorAll('pre code'))
      .forEach(block => hljs.highlightBlock(block));
  }

}

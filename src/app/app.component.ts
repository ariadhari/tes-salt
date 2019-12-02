import { AfterViewChecked, Component, ElementRef, QueryList, Renderer2, ViewChildren } from '@angular/core';
// <button (click)="remove()">Remove child component</button>
@Component({
  selector: 'app-root',
  template: `
    <a-comp #c></a-comp>
  `
})
export class AppComponent implements AfterViewChecked {
  @ViewChildren('c', {read: ElementRef}) childComps: QueryList<ElementRef>;


  constructor(private hostElement: ElementRef, private renderer: Renderer2) {
  }

  ngAfterViewChecked() {
    console.log('number of child components: ' + this.childComps.length);
  }

  remove() {
    this.renderer.removeChild(
      this.hostElement.nativeElement,
      this.childComps.first.nativeElement
    );
  }
}

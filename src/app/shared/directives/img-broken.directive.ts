import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]',
  standalone: true,
})
export class ImgBrokenDirective {
  private hasError = false;

  @HostListener('error') handleError(): void {
    const elNative = this.elHost.nativeElement;

    console.log('ERROR');
    if (!this.hasError) {
      console.log('🍎 Imagen rota:', elNative.src);
      elNative.src = '/assets/images/img-not-found.png';
      this.hasError = true;
    } else {
      console.warn('⚠️ La imagen de default también falló.');
      elNative.onerror = null;
    }
  }

  constructor(private elHost: ElementRef) {}
}

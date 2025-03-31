// import { Directive, ElementRef, HostListener, Input } from '@angular/core';

// @Directive({
//   selector: 'img[appImgBroken]',
// })
// export class ImgBrokenDirective {
//   private hasError = false;

//   @HostListener('error') handleError(): void {
//     const elNative = this.elHost.nativeElement;

//     if (!this.hasError) {
//       console.log('🍎 Imagen rota:', elNative.src);
//       elNative.src = '../../assets/images/img-not-found.png'; // Ruta correcta
//       this.hasError = true;
//     } else {
//       console.warn('⚠️ La imagen de default también falló.');
//       // Opcional: Remover el listener para evitar más intentos
//       elNative.onerror = null;
//     }
//   }

//   constructor(private elHost: ElementRef) {}
// }

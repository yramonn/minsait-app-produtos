import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[formatCodigoBarras]'
})
export class CodigobarrasFormatDirective  {

  @HostListener('input', ['$event']) onInputChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    const formattedValue = input.value.replace(/\D/g, '');
    let formattedBarcode = '';

    for (let i = 0; i < formattedValue.length; i++) {
      if (i % 2 === 0 && i !== 0) {
        formattedBarcode += ' ' + formattedValue.charAt(i);
      } else {
        formattedBarcode += formattedValue.charAt(i);
      }
    }

    input.value = formattedBarcode;
  }
}


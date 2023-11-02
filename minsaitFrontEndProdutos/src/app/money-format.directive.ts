import { Directive, ElementRef, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[formatMoney]'
})
export class MoneyFormatDirective {

  constructor(private el: ElementRef, private control: NgControl) { }

  @HostListener('input', ['$event.target.value'])
  onInput(value: string): void {
    const sanitizedValue = value.replace(/[^0-9]/g, '');

    const formattedValue = this.formatMoney(sanitizedValue);

    this.el.nativeElement.value = formattedValue;
    this.control.control.setValue(formattedValue);
  }

  formatMoney(value: string): string {
    const numberValue = parseFloat(value) / 100;

    return numberValue.toLocaleString('pt-BR', {
      useGrouping: true,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  }
}

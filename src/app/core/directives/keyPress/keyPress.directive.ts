import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appKeyPress]'
})
export class KeyPressDirective {

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    console.log(event)
    if (event.key === 'Enter') {
      console.log('Enter key was pressed!');
    }
  }
}

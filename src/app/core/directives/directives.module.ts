import { NgModule } from '@angular/core';
import { HighlightDirective } from './highlight/highlight.directive';
import { KeyPressDirective } from './keyPress/keyPress.directive';


@NgModule({
  declarations: [HighlightDirective,KeyPressDirective ],
  imports: [],
  providers: [],
  bootstrap: [],
  exports: [HighlightDirective,KeyPressDirective ],
})
export class DirectiveModule {}

import {
    Component,
    Input,
} from '@angular/core';

@Component({
  selector: 'pl-textarea',
  //templateUrl: './pl-textarea.component.html',
  template: `<div class="border" [ngClass]="{'focused':focused==true}">
                <textarea (focus)="focus()" (blur)="blur" placeholder="{{placeholder}}" [ngClass]="{'resizable':resizable==true}"
                          required="{{required}}">
                </textarea>
            </div>`,
  //styleUrls: ['pl-input.component.less'],
})
export class PLTextAreaComponent {

    @Input('resizable')
    resizable:boolean = true;

    @Input('placeholder')
    placeholder:string = '';

    @Input('label')
    label:string = '';

    @Input('required')
    required:boolean = false;

    @Input('minlength')
    minlength:number = null;

    @Input('maxlength')
    maxlength:number = null;

    @Input('disabled')
    disabled:boolean = null;

    @Input('autocomplete')
    autocomplete:string ='on';

    @Input('name')
    name:string = null;

    @Input('pattern')
    pattern:string = null;

    focused:boolean = false;

    constructor() {

    }

    blur() {
        this.focused = false;
        console.log('blur');
    }
    focus() {
        this.focused = true;
        console.log('focus');
    }

}

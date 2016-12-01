import {
    Component,
    Input,
    ElementRef,
    ViewChild, AfterViewInit
} from '@angular/core';

@Component({
  selector: 'pl-input',
  // templateUrl: require('./pl-input.component.html'),
  template: `
      <div class="border" [ngClass]="{'focused':focused==true}">
        <div #prefix class="input-prefix">
            <ng-content select="[pl-prefix]"></ng-content>
        </div>
        <input type="text" (focus)="focus()" (blur)="blur()" placeholder="{{placeholder}}" required="{{required}}" autocomplete="{{autocomplete}}" name="{{name}}" pattern="{{pattern}}">
        <div class="input-suffix">
            <ng-content select="[pl-suffix]"></ng-content>
        </div>
    </div>
    `,
  //styleUrls: [require('./pl-input.component.less')],
  styles: [ `
    .host {
      display: inline-block;
      position: relative;
      box-sizing: border-box;
      width: 100%;
    }

    .border {
      display:flex;
      align-items: center;
      width: 100%;
      box-sizing: border-box;
      //border: solid @gray-dark 1px;
      border: solid gray 1px;
      border-left-width: 1px;
      transition: border-left-width 150ms;

      &.focused {
        border-left-width: 12px;
        // border-color: @blue-medium;
        border-color: blue;
      }

      .input-prefix, .input-suffix {
        box-sizing: border-box;
        display: block;
        width: auto;
        max-width: 20px;

        &:empty {
          display: none;
        }
      }
    }

    textarea {
      height:100%;
      resize:none;
      &.resizable {
        resize:both;
      }
    }

    input {
      height: 30px;
    }

    input, textarea {
      box-sizing: border-box;
      display: block;
      width: 100%;
      // font-family: @roboto;
      line-height: 30px;
      background-color: transparent;
      font-size: 14px;
      padding: 0 7px;
      border: 0;
      outline: none;
      box-shadow: none;
      //color: @gray-darkest;
      color: gray;
    }
  `],
})
export class PLInputComponent implements AfterViewInit {
    @ViewChild('prefix') prefix:ElementRef;

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

    ngAfterViewInit(){
        // debugger;
        // if(this.prefix.nativeElement.children.length == 0){
        //     this.prefix.nativeElement.style="display:none;";
        //     console.log('hideme')
        // }else{
        //     console.log('showme')
        // }
    }
    blur() {
        this.focused = false;
        // console.log('blur');
    }
    focus() {
        this.focused = true;
        // console.log('focus');
    }
}

import { Directive, ElementRef, Input, OnInit } from "@angular/core";

@Directive({
    selector: '[appCustom]'
})

export class CustomDirective implements OnInit {
    @Input() color: string = '';

    constructor(private el: ElementRef) { }
    ngOnInit(): void {
        this.el.nativeElement.style.color = this.color;
    }
}
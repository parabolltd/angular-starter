import {
    Component,
    OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'header',
    styles: [` `],
    templateUrl: './header.component.html'

})
export class HeaderComponent implements OnInit {

    public localState: any;
    constructor(   ) { }

    public ngOnInit() {
        console.log('hello `Header` component'); 
    }


}

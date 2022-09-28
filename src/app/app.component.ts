import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  result: any;
  operationString: string = '14+25';

  performOperation() {
    this.result = eval(this.operationString);
  }
}

import { Component } from '@angular/core';

@Component({
    selector: 'app-first-task',
    templateUrl: './first-task.component.html'
})
export class FirstTaskComponent {
    arrayForCalculating = [];
    res = 0;


    logThis(arrayToParse: any) {
        let tepmItem = ''
        for (let i = 0; i < arrayToParse.length; i++) {
            if (arrayToParse[i] !== '+' && arrayToParse[i] !== ' ') {
                tepmItem += arrayToParse[i];
            }
            else if (arrayToParse[i] === ' ') {
                this.arrayForCalculating.push(tepmItem);
                tepmItem = ''
            }
        }
        this.arrayForCalculating.push(tepmItem)
        console.log(this.arrayForCalculating)
    }

    calculate() {
        for (let i = 0; i < this.arrayForCalculating.length; i++) {
            this.res = this.res + +this.arrayForCalculating[i];
        }
        console.log(this.res)
        return this.res;
    }
}
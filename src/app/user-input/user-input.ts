import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Type } from '@angular/core';
type EmiInput = {
    emi: number
    totalPayment: number
    totalInterest: number
}

@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  templateUrl: './user-input.html',
  styleUrl: './user-input.css',
})


export class UserInput {
@Output() calculate = new EventEmitter<{
    loanAmount: number,
    interestRate: number,
    tenure: number
}>()

loanAmount:number=0
interestRate:number=0
tenure:number=0
calculateEMI() {
    this.calculate.emit({
        loanAmount: this.loanAmount,
        interestRate: this.interestRate,
        tenure: this.tenure
    })
}

}

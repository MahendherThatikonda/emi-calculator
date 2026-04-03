import { Component, Input, signal } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { UserInput } from './user-input/user-input';
import { InvestmentResults } from './investment-results/investment-results';

type EmiInput = {
    emi: number
    totalPayment: number
    totalInterest: number
}

@Component({
  selector: 'app-root',
  imports: [Header,UserInput,InvestmentResults],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('emi-calculator');
    results = {
        emi: 0,
        totalPayment: 0,
        totalInterest: 0
    }
onCalculate(data:{loanAmount:number,interestRate:number,tenure:number}){
 const P = data.loanAmount
    const R = data.interestRate / 12 / 100  // monthly rate
    const N = data.tenure * 12              // months

        const emi = P * R * Math.pow(1+R, N) 
                    / (Math.pow(1+R, N) - 1)

        // update results — automatically passed to child!
        this.results = {
            emi: emi,
            totalPayment: emi * N,
            totalInterest: (emi * N) - P
        }
}
}

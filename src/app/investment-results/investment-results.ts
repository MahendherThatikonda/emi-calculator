import { Component,Input } from '@angular/core';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-investment-results',
  imports: [],
  templateUrl: './investment-results.html',
  styleUrl: './investment-results.css',
})
export class InvestmentResults {
    @Input() result = {
        emi: 0,
        totalPayment: 0,
        totalInterest: 0
    }
}

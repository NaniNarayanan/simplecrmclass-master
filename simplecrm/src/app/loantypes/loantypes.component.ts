import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-loantypes',
  templateUrl: './loantypes.component.html',
  styleUrls: ['./loantypes.component.scss']
})
export class LoantypesComponent implements OnInit {
  addLoanTypesForm!: FormGroup;
 

  constructor(private fb:FormBuilder) { 
   
  }
  ngOnInit(): void {
    this.addLoanTypesForm=this.fb.group({
      'loanName':new FormControl(),
      'LoanType':new FormControl(),
      'loanDescription':new FormControl()
    })
    const newobj={
      'loanName':'Naga',
      'LoanType':'Personal',
      'loanDescription':'Hello...!'
    }
    this.addLoanTypesForm.setValue(newobj);
  }
  addLoanTypes(){console.log(this.addLoanTypesForm.value);}
  }



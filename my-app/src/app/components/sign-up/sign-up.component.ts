import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
 
  checkoutForm : FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  registrationState = 0; // 0 - student, 1 - organization

  changeHandler(event) {
    this.registrationState = event;
  }
  ngOnInit(): void {
    this.initForm();
  }

  private initForm () {
    if (this.registrationState == 0)  {
    this.checkoutForm = this.formBuilder.group({
      fio: ['', [
        Validators.required
      ]
      ],
      faculty: ['', [
        Validators.required
      ]
      ],
      group: ['', [
        Validators.required
      ]
      ],
      tel: ['', [
        Validators.required
      ]
      ],
      portfolio: ['', [
        Validators.required
      ]
      ],
      contacts: ['', [
        Validators.required
      ]
      ],
      mail: ['', [
      Validators.required,
      Validators.email
      ]
      ],
      pass: ['', [
        Validators.required
      ]
      ]
      
    });
    }
    else if (this.registrationState == 1)  {
      this.checkoutForm = this.formBuilder.group({
        name: ['', [
          Validators.required
        ]
        ],
        description: ['', [
          Validators.required
        ]
        ],
        address: ['', [
          Validators.required
        ]
        ],
        tel: ['', [
          Validators.required
        ]
        ],
        mail: ['', [
          Validators.required,
          Validators.email
        ]
        ],
        pass: ['', [
          Validators.required
        ]
        ]
      });
      }
  }
  onSubmit() {

  }
}

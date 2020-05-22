import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { catchError, tap } from 'rxjs/operators';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  loginFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.loginFormGroup = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    let loginData = {
      email: this.loginFormGroup.controls.email.value,
      password: this.loginFormGroup.controls.password.value,
    };
    this.authService.login(loginData.email, loginData.password)
      .subscribe(
        data => console.log(data), 
        error => {
          if (error.status == 404) alert("Неправильная почта или пароль, попробуйте снова.")
        });
  }
}

import { Component, OnInit } from '@angular/core';
import { CompteService } from '../compte.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-connexion',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  providers: [HttpClient],
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.css'
})
export class ConnexionComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(private compteService: CompteService,
    private formBuilder: FormBuilder,) { }
  ngOnInit(): void {
    console.log('initiliasitation page connexion');
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  onSubmit() {
    console.log('username= ', this.loginForm.value.username)
    console.log('password= ', this.loginForm.value.password)
  }
}

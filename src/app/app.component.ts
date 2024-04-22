import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as data from '../assets/api.json';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CodeChallengeExpeditors';
  
  private apiURL = '/assets/api.json'; // La URL debería ser relativa a la raíz del servidor
  users: any[] = [];

  
  constructor(private http: HttpClient) {
    this.fetchData();
  }

  fetchData() {
    this.http.get<any[]>(this.apiURL).subscribe((res) => {
      console.log(res);
      this.users = res;
    })
  }
  

}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { DbService } from '../../services/db.service';
import { Snippet } from '../../../models/snippet';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-bin',
  standalone: true,
  imports: [ReactiveFormsModule , FormsModule, CommonModule],
  templateUrl: './create-bin.component.html',
  styleUrl: './create-bin.component.css'
})
export class CreateBinComponent {
  constructor(private router : Router ,  private dbService : DbService){

  }
  title = new FormControl("" ,[
    Validators.required
  ])

  code = new FormControl("" , [
    Validators.required
  ])

  codeData = new FormGroup({
    title : this.title,
    code :this.code
  })


  async submitCode(){
    console.log(this.codeData.value)
    await this.dbService.createSnippet(this.codeData.value as Snippet)
    this.router.navigate(["/"])

  }

}

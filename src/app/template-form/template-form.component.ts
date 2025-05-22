import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {

  usuario:any = {
    nome: 'Juca',
    email: 'juca@email.com'
  }

  onSubmit(form: any){
    console.log(form)
  }

  constructor() { }

  ngOnInit(): void {
  }


}

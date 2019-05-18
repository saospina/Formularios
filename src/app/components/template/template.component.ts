import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: []
})
export class TemplateComponent {
  user: object = {
    name: 'sergio',
    lastName: 'Ospina',
    email: ''
  };

  constructor() { }

  save(form: NgForm) {
    console.log('saved');
    console.log('ngForm', form);
    console.log('Value', form.value);
    console.log('Usuario', this.user);
    
  }

}

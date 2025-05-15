import { Component } from '@angular/core';

import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { CursoCadastro } from '../../../curso-cadastro';
import { InputMaskModule } from 'primeng/inputmask';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-curso-cadastro',
  imports: [FormsModule, InputTextModule, FloatLabelModule, InputMaskModule, ButtonModule],
  templateUrl: './curso-cadastro.component.html',
  styleUrl: './curso-cadastro.component.css'
})
export class CursoCadastroComponent {
  curso: CursoCadastro;

  constructor(){
    this.curso = new CursoCadastro();
  }
}

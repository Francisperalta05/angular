import { Component, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
})

export class BodyComponent {
frase: any = {
  mensaje: 'Un gran poder requiere una gran responsabilidad',
  autor: 'Peter Parker'
}

mostrar = true;

 cambiar() {
this.mostrar = !this.mostrar;
}

personajes: string[] = ['Spiderman', 'Venom', 'Octopus'];
}
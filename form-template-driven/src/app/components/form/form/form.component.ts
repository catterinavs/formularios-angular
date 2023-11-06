import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {


componentAtivo: string = 'Primeiro';

passarParaSegundoSlide(){
if (this.componentAtivo == 'Primeiro'){
this.componentAtivo = 'Segundo'}
}

passarParaTerceiroSlide(){
if (this.componentAtivo == 'Segundo'){
this.componentAtivo = 'Terceiro'}
}

passarParaQuartoSlide(){
if (this.componentAtivo == 'Terceiro'){
this.componentAtivo = 'Quarto'}
}

passarParaQuintoSlide(){
if (this.componentAtivo == 'Quarto'){
this.componentAtivo = 'Quinto'}
}

}

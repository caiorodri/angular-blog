import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent {

  @Input()
  cardImage: string = "https://igp.rs.gov.br/themes/modelo-noticias/images/outros/GD_imgSemImagem.png";
  @Input()
  cardAuthor: string = "Autor Desconhecido";
  @Input()
  cardTitle: string = "Titulo"
  @Input()
  cardDescription: string = "Descrição"

}

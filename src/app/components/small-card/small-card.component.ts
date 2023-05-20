import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent {

  @Input()
  cardImage: string = "https://igp.rs.gov.br/themes/modelo-noticias/images/outros/GD_imgSemImagem.png";
  @Input()
  cardAuthor: string = "Autor Desconhecido";
  @Input()
  cardTitle: string = "Titulo"

}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent {

  @Input()
  Id: string = "0"
  @Input()
  cardImage: string = "https://igp.rs.gov.br/themes/modelo-noticias/images/outros/GD_imgSemImagem.png";
  @Input()
  cardDate: string = "Data Desconhecida";
  @Input()
  cardTitle: string = "Sem titulo"
  @Input()
  cardDescription: string = "Sem descrição"

}

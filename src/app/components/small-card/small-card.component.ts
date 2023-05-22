import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent {

  
  @Input()
  Id: string = "0";
  @Input()
  cardImage: string = "https://igp.rs.gov.br/themes/modelo-noticias/images/outros/GD_imgSemImagem.png";
  @Input()
  cardDate: string = "Data Desconhecida";
  @Input()
  cardTitle: string = "Sem titulo";
  @Input()
  description: string = "Sem descrição";
  @Input()
  horizontalRule: string = "1";
}

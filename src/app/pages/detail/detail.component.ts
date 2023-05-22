import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataNews } from '../../data/dataNews';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit{

  private id: string | null = "0";
  date: string = "Data Desconhecida"
  image: string = "https://igp.rs.gov.br/themes/modelo-noticias/images/outros/GD_imgSemImagem.png"
  title: string = "Sem Titulo"
  description: string = "Sem Descrição"

  constructor(private route:ActivatedRoute){
    
  }

  ngOnInit(): void{
    
    this.route.paramMap.subscribe(value => this.id = value.get("id"))

    this.setValuesToComponent()

  }

  setValuesToComponent(){

    const result = dataNews.filter(article => article.id.toString() == this.id)[0]

    this.image = result.image;
    this.date = result.date;
    this.title = result.title;
    this.description = result.description;

  }
}

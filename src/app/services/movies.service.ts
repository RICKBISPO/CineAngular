import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private moviesList: Array<Movie> = []

  constructor() { 
    this.moviesList = [{ id: 1, img: "/assets/mega-tubarao.jpg", title: "Megatubarão 2", description: "02 de agosto de 2023", icon: "/assets/favi-heart-icon.png" },

      { id: 2, img: "/assets/elementos.jpg", title: "Elementos", description: "14 de junho de 2023", icon: "/assets/favi-heart-icon.png" },
      
      { id: 3, img: "/assets/stone.jpg", title: "Agente Stone", description: "09 de agosto de 2023", icon: "/assets/favi-heart-icon.png" },
      
      { id: 4, img: "/assets/indiana-jones.jpg", title: "Indiana Jones", description: "28 de junho de 2023", icon: "/assets/favi-heart-icon.png" },
      
      { id: 5, img: "/assets/barbie.jpg", title: "Barbie", description: "19 de julho de 2023", icon: "/assets/favi-heart-icon.png" },
      
      { id: 6, img: "/assets/aranha.jpg", title: "Homem Aranha", description: "31 de maio de 2023", icon: "/assets/favi-heart-icon.png" },
      
      { id: 7, img: "/assets/flash.jpg", title: "The Flash", description: "13 de junho de 2023", icon: "/assets/favi-heart-icon.png" },
      
      { id: 8, img: "/assets/transformers.jpg", title: "Transformers", description: "06 de agosto de 2023", icon: "/assets/favi-heart-icon.png" }      
    ]
  }

  get getMoviesList(): Array<Movie> {
    return this.moviesList;
  }

  findById(id: number) {
    return this.moviesList.find((movie) => movie.id === id);
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { CommonButtonComponent } from "../common-button/common-button.component";
import { AvatarComponent } from '../avatar/avatar.component';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { Review } from '../../models/review';
import { MovieDetails } from '../../models/movieDetails';
import { TranslatePipe } from '@ngx-translate/core';
import { ModalComponent } from '../modal/modal.component';
import { LanguageService } from '../../services/language.service';
import moment from 'moment';


@Component({
  selector: 'app-details-review-movie',
  imports: [CommonButtonComponent, 
    AvatarComponent, 
    ReactiveFormsModule, 
    FormsModule, 
    CommonModule, 
    TranslatePipe,
    ModalComponent
  ],
  templateUrl: './details-review-movie.component.html',
  styleUrl: './details-review-movie.component.scss'
})
export class DetailsReviewMovieComponent implements OnInit {

  languageValue: string = "";
  alertAll: boolean = false;
  formReview: FormGroup;
  reviews: Array<Review> = new Array<Review>;

  @Input() movieDetails!: MovieDetails;

  constructor(
    private apiService: ApiService,
    private languageService: LanguageService
  ) {
    this.formReview = new FormGroup({
      watchedDate: new FormControl('', [Validators.required]),
      rating: new FormControl('', [Validators.required ]),
      name: new FormControl('', [Validators.minLength(3), Validators.required]),
      reviewContent: new FormControl('', [Validators.minLength(10), Validators.required]),
    });

    this.languageService.languageSubject$.subscribe({
      next: (lang) => {
        this.languageValue = lang
      }
    });
  }

  ngOnInit(): void {
    this.setReviewsList(); 
  }

  onSubmit() {
    const review: Review = {
      movieId: this.movieDetails.movie.id,
      author: this.formReview.value.name,
      rating: this.formReview.value.rating,
      reviewContent: this.formReview.value.reviewContent,
      reviewDate: new Date().toISOString(),
      watchedDate: this.formReview.value.watchedDate,
    };

    if (!this.formReview.invalid && !this.validatorDate(this.formReview.value.watchedDate)) {
      this.apiService.sendReview(review).subscribe({
        next: () => {
          this.setReviewsList(); 
        }
      }); 
      
      this.alertAll = false;
      this.formReview.reset();   
    }
    else {
      this.alertAll = true;
    }  
  }

  setReviewsList() {
    this.apiService.getReviewByMovieId(this.movieDetails.movie.id).subscribe({
      next: (reviews) => this.reviews = reviews
    });
  }

  validatorDate(date: string): boolean {
    const actualDate = moment();
    const d = moment(date);
    return d.isAfter(actualDate);
  }

}

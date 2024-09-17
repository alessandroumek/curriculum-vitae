import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { MarkdownPipe } from '../core/pipes/markdown.pipe';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-curriculum',
  standalone: true,
  imports: [CommonModule, MarkdownPipe],
  templateUrl: './curriculum.component.html',
  styleUrl: './curriculum.component.scss'
})
export class CurriculumComponent implements OnInit, OnDestroy{

  public curriculum$!: Observable<string>;
  private subscription!: Subscription;

  constructor(private httpClient: HttpClient, private route: ActivatedRoute){}

  /**
   * Lifecycle hook that is called when the component is initialized.
   * It sets up the subscription to the route's URL and fetches the curriculum
   * for the selected language.
   */
  ngOnInit(): void {
    this.subscription = this.route.url.subscribe((url) => {
      const lang = url[0].path;
      if(!lang || !curriculum[lang]) return;
      this.curriculum$ = this.httpClient.get(
        curriculum[lang],
        {responseType: 'text'}
      );
    });
  }

  /**
   * Lifecycle hook that is called when the component is destroyed.
   * It unsubscribes from the route's URL to prevent memory leaks.
   */
  ngOnDestroy(): void {
    if(this.subscription) this.subscription.unsubscribe();
  }
}


export const curriculum : { [key: string]: string }= {
  en : 'cv/cv-alessandro-umek-english.md',
  it : 'cv/cv-alessandro-umek-italiano.md'
}


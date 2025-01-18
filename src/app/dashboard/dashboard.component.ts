import { Apollo, gql } from 'apollo-angular';
import { Component } from '@angular/core';

const GETPOST = gql`
  query {
    Page {
      media(search: "Naruto", type: ANIME) {
        id
        title {
          romaji
          english
          native
        }
      }
    }
  }`;

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  posts: any[] = [];
  loading = true;
  error: any;

  constructor(private apollo: Apollo){}

  ngOnInit() {
    this.apollo
    .watchQuery({
      query: GETPOST,
    })
    .valueChanges.subscribe(({ data, loading, error }: any) => {
      this.loading = loading;
      this.error = error;
      this.posts = data.Page.media;
    });
    
  }
}

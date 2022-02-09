import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { environment as env } from 'src/environments/environment';
import { PostedReview, ReviewResult, Review } from '../interfaces';



@Injectable({
  providedIn: 'root'
})
export class ValuesService {
  serverUrl = 'https://in-shepherd-61.hasura.app/v1/graphql';
  reviews = new Subject<Review[]>();

  constructor(
    private http: HttpClient,
  ) { }

  async saveReview(reviewContent: JSON): Promise<boolean> {
    const mutation = {
      query: `mutation ($review_data: jsonb) {
        review_values: insert_review_values(objects: {review_definition_id: 1, data: $review_data}) {
          returning {
            id
            data
          }
        }
      }`,
      variables: {
        "review_data": reviewContent,
      }
    };

    const options = {
      headers: {
        'x-hasura-admin-secret': env.hasuraAdminSecret,
      }
    }

    const result: PostedReview = await this.http.post(this.serverUrl, mutation, options).toPromise();

    if (result.data) {
      return true;
    }

    throw new Error("Oh no! Could not post review!");
  }

  async getReviews(limit: number): Promise<void> {
    const query = {
      query: `query ($limit: Int) {
        review_values(limit: $limit) {
          id
          data
          created_datetime
        }
      }`,
      variables: {
        "limit": limit,
      }
    };

    const options = {
      headers: {
        'x-hasura-admin-secret': env.hasuraAdminSecret,
      }
    };

    const result: ReviewResult = await this.http.post(this.serverUrl, query, options).toPromise();

    if (result.data) {
      this.reviews.next(result.data?.review_values);
    }
  }

  async deleteReview(id: number): Promise<boolean> {
    const query = {
      query: `mutation ($id: Int) {
        delete_review_values(where: {id: {_eq: $id}}) {
          returning {
            id
          }
        }
      }`,
      variables: {
        "id": id
      }
    };

    const options = {
      headers: {
        'x-hasura-admin-secret': env.hasuraAdminSecret,
      }
    };

    const result: any = await this.http.post(this.serverUrl, query, options).toPromise();

    if (result.data) {
      return true;
    }

    throw new Error("Oh no! Could not delete review!");
  }
}

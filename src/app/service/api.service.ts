import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Video } from '../shared/video';
import { User } from '../shared/user';
import { Document } from '../shared/document';
import { Activity } from '../shared/activity';
import { Channel } from '../shared/channel';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class ApiService {

    /* URL API */
    urlAPI: string = 'https://client.sibertama.com/services-gwp/socialNetwork_api/';
    
    /*---------------------------------- Activities User URL API Service ------------------------- */
    getActivitiesURL: string = this.urlAPI + 'activities';
    /* ----------------------------------------------------------------------------------------- */

    /*---------------------------------- Users URL API Service ------------------------- */
    getUsersURL: string = this.urlAPI + 'users';
    /* ----------------------------------------------------------------------------------------- */

    /*---------------------------------- Videos URL API Service ------------------------- */
    getVideosURL: string = this.urlAPI + 'videos';
    /* ----------------------------------------------------------------------------------------- */

    /*---------------------------------- Channels URL API Service ------------------------- */
    getChannelsURL: string = this.urlAPI + 'channels';
    /* ----------------------------------------------------------------------------------------- */

    /*---------------------------------- Documents URL API Service ------------------------- */
    getDocumentsURL: string = this.urlAPI + 'documents';
    /* ----------------------------------------------------------------------------------------- */

    constructor(private http: HttpClient) { }

    // Http Options
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    }

    getVideos(): Observable<Video> {
        return this.http.get<Video>(this.getVideosURL)
        .pipe(
            retry(1),
            catchError(this.handleError)
        )
    }

    getPeoples(): Observable<User> {
        return this.http.get<User>(this.getUsersURL)
        .pipe(
            retry(1),
            catchError(this.handleError)
        )
    }

    getDocuments(): Observable<Document> {
        return this.http.get<Document>(this.getDocumentsURL)
        .pipe(
            retry(1),
            catchError(this.handleError)
        )
    }

    getActivities(): Observable<Activity> {
        return this.http.get<Activity>(this.getActivitiesURL)
        .pipe(
            retry(1),
            catchError(this.handleError)
        )
    }

    getChannels(): Observable<Channel> {
        return this.http.get<Channel>(this.getChannelsURL)
        .pipe(
            retry(1),
            catchError(this.handleError)
        )
    }

    // Error handling 
    handleError(error) {
        let errorMessage = '';
        if(error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        } else {
            // Get server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        window.alert(errorMessage);
        return throwError(errorMessage);
    }

}
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Video } from '../shared/video';
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
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { ApiUrl } from "../../environment/environment";

@Injectable({
    providedIn: 'root'
})
export class BaseService {

    private baseUrl = ApiUrl;

    constructor(
        private http: HttpClient
    ) { }

    async getAsync<T>(endpoint: string, parameters?: any): Promise<Observable<T>> {
        const url = `${this.baseUrl}/${endpoint}`;
        const headers = this.createHeaders();
        const params = this.createHttpParams(parameters);
        const options = { headers, params };

        return this.http.get<T>(url, options);
    }

    async postAsync<T>(endpoint: string, body: any): Promise<Observable<T>> {
        const url = `${this.baseUrl}/${endpoint}`;
        const headers = this.createHeaders();
        const options = { headers };

        return this.http.post<T>(url, body, options);
    }

    createHeaders(): any {
        const headers = new HttpHeaders();

        return headers;
    }

    createHttpParams(params: any): HttpParams {
        const httpParams = new HttpParams();

        for (const key in params) {
            if (params.hasOwnProperty(key)) {
                httpParams.append(key, params[key]);
            }
        }

        return httpParams;
    }

}
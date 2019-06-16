/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Samplepack } from '../models/samplepack';
@Injectable({
  providedIn: 'root',
})
class SamplePacksService extends __BaseService {
  static readonly SamplePacksGetAllPath = '/api/SamplePacks';
  static readonly SamplePacksPostPath = '/api/SamplePacks';
  static readonly SamplePacksGetPath = '/api/SamplePacks/{id}';
  static readonly SamplePacksPutPath = '/api/SamplePacks/{id}';
  static readonly SamplePacksDeletePath = '/api/SamplePacks/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }
  SamplePacksGetAllResponse(): __Observable<__StrictHttpResponse<Array<Samplepack>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/SamplePacks`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Samplepack>>;
      })
    );
  }  SamplePacksGetAll(): __Observable<Array<Samplepack>> {
    return this.SamplePacksGetAllResponse().pipe(
      __map(_r => _r.body as Array<Samplepack>)
    );
  }

  /**
   * @param value undefined
   */
  SamplePacksPostResponse(value: string): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = value;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/SamplePacks`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param value undefined
   */
  SamplePacksPost(value: string): __Observable<null> {
    return this.SamplePacksPostResponse(value).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param id undefined
   */
  SamplePacksGetResponse(id: number): __Observable<__StrictHttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/SamplePacks/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<string>;
      })
    );
  }
  /**
   * @param id undefined
   */
  SamplePacksGet(id: number): __Observable<string> {
    return this.SamplePacksGetResponse(id).pipe(
      __map(_r => _r.body as string)
    );
  }

  /**
   * @param params The `SamplePacksService.SamplePacksPutParams` containing the following parameters:
   *
   * - `value`:
   *
   * - `id`:
   */
  SamplePacksPutResponse(params: SamplePacksService.SamplePacksPutParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.value;

    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/SamplePacks/${params.id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param params The `SamplePacksService.SamplePacksPutParams` containing the following parameters:
   *
   * - `value`:
   *
   * - `id`:
   */
  SamplePacksPut(params: SamplePacksService.SamplePacksPutParams): __Observable<null> {
    return this.SamplePacksPutResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param id undefined
   */
  SamplePacksDeleteResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/SamplePacks/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param id undefined
   */
  SamplePacksDelete(id: number): __Observable<null> {
    return this.SamplePacksDeleteResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module SamplePacksService {

  /**
   * Parameters for SamplePacksPut
   */
  export interface SamplePacksPutParams {
    value: string;
    id: number;
  }
}

export { SamplePacksService }

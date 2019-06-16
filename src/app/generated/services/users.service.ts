/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { User } from '../models/user';
@Injectable({
  providedIn: 'root',
})
class UsersService extends __BaseService {
  static readonly UsersGetAllPath = '/api/Users';
  static readonly UsersPostPath = '/api/Users';
  static readonly UsersGetPath = '/api/Users/{username}';
  static readonly UsersPutPath = '/api/Users/{id}';
  static readonly UsersDeletePath = '/api/Users/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }
  UsersGetAllResponse(): __Observable<__StrictHttpResponse<Array<User>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Users`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<User>>;
      })
    );
  }  UsersGetAll(): __Observable<Array<User>> {
    return this.UsersGetAllResponse().pipe(
      __map(_r => _r.body as Array<User>)
    );
  }

  /**
   * @param value undefined
   */
  UsersPostResponse(value: string): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = value;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/Users`,
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
  UsersPost(value: string): __Observable<null> {
    return this.UsersPostResponse(value).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param username undefined
   */
  UsersGetResponse(username: null | string): __Observable<__StrictHttpResponse<User>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Users/${username}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<User>;
      })
    );
  }
  /**
   * @param username undefined
   */
  UsersGet(username: null | string): __Observable<User> {
    return this.UsersGetResponse(username).pipe(
      __map(_r => _r.body as User)
    );
  }

  /**
   * @param params The `UsersService.UsersPutParams` containing the following parameters:
   *
   * - `value`:
   *
   * - `id`:
   */
  UsersPutResponse(params: UsersService.UsersPutParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.value;

    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/Users/${params.id}`,
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
   * @param params The `UsersService.UsersPutParams` containing the following parameters:
   *
   * - `value`:
   *
   * - `id`:
   */
  UsersPut(params: UsersService.UsersPutParams): __Observable<null> {
    return this.UsersPutResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param id undefined
   */
  UsersDeleteResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/Users/${id}`,
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
  UsersDelete(id: number): __Observable<null> {
    return this.UsersDeleteResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module UsersService {

  /**
   * Parameters for UsersPut
   */
  export interface UsersPutParams {
    value: string;
    id: number;
  }
}

export { UsersService }

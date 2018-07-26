import { Injectable }    from '@angular/core';
import { Headers, Http, Jsonp, RequestOptionsArgs, RequestOptions, URLSearchParams} from '@angular/http';
import {Observable} from  "rxjs";
//import "rxjs/add/operator/map";
import {map} from 'rxjs/operators';
import { Item } from '../item';

@Injectable()
export class ItemService {
  //RestAPIのURL
  private itemsUrl = 'http://localhost:8080/api/items';
  //JSONPコールバック関数名(Angular固有値）
  CALLBACK = 'JSONP_CALLBACK';
  

  //コンストラクタで利用するモジュールをインスタンス化
  constructor(private http: Http, private jsonp: Jsonp) { }

 //商品一覧取得
 getItems(): Observable<Item[]> {
    //リクエストパラメータセット
    let option : RequestOptions;
    option = this.setHttpGetParam(this.itemsUrl);

    //レスポンス返却
    return this.jsonp.request(this.itemsUrl, option)
      .pipe(map((response) => {
        let content;
        let obj = response.json();
        content = {
          error: null,
          data: obj
      };
        console.dir(content);
        return content;

      }));
    }
      //Http(Get)通信のリクエストパラメータをセットする
  private setHttpGetParam(url: string): RequestOptions {
    let param = new URLSearchParams();
    param.set("callback", this.CALLBACK);
    let options: RequestOptionsArgs = {
      method: "get",
      url: url,
      search: param
    };
    return new RequestOptions(options);
  }

}
 
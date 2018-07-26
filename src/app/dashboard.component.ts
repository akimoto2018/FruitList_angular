import {Component, OnInit} from "@angular/core";
import {Item} from "./item";
import { ItemService } from "src/app/services/item.Service";

@Component({
    selector: "my-dashboard",
    template: `
        <ul>
            <li *ngFor = "let item of itemList">
                {{item.name}}:{{item.price}}円
            </li>
        </ul>
    `,

})

export class DashboardComponent implements OnInit{

    //コンポーネント生成時の処理
    constructor(private itemService: ItemService){}

    //商品リスト
    itemList : Item[];

    //画面初期表示イベント処理
    ngOnInit(): void {
        this.itemService.getItems().subscribe(
            result => this.setItems(result),
            error => alert('通信エラー' + error)
        );
    }

    //Web APIから取得したデータを商品リストにセットする
    setItems(result): void {
        if(result.error) {
            alert('Web APIエラー' + result.message);
        }

        this.itemList = result.data;
    }
}

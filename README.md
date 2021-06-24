![名称未設定](https://user-images.githubusercontent.com/70458379/123104385-dc754d00-d471-11eb-8baa-7abdfd400caf.png)

![名称未設定2](https://user-images.githubusercontent.com/70458379/123104553-03cc1a00-d472-11eb-805b-5b52085a428a.png)

## どのようなアプリか

皆さんは、どのようにして飲食店を探しますか？
私は、食べログなどのグルメサイトを使わずに Google Map で探します。

以前食べログで「星 3.8 問題」がありました。

https://news.yahoo.co.jp/byline/toryu/20191014-00146785/

これだけではなく、食べログで見つけた行ったお店がイマイチだったこともあり、
グルメサイトはお店を探す場所ではなく、お店を予約するためのサイトと私は割り切りました。

![名称未設定.png](https://3.bp.blogspot.com/-_3YooYTSkOA/Wp94Nv4zduI/AAAAAAABKrs/yUlpPZcjcgwAmWqfyEiAPyRKQJaRMX3GQCLcBGAs/s180-c/mazui1_boy.png)

ただ、Google Map で探すのも非常に時間がかかるので、
現在地から 800m 以内の星の評価が高い順に 10 店舗教えてくれる Bot を作成しました。

## 開発

Node.js

TypeScript

Express

@line/bot-sdk

## アプリの流れ

アプリの流れは大まかに以下の 9 つのステップで成り立っています。

| クライアント            | LINE（バックエンド）                                                |
| ----------------------- | ------------------------------------------------------------------- |
| ①「お店を探す」をタップ |                                                                     |
|                         | ②「現在地を送る」ためのボタンメッセージを送信                       |
|                         | ③「お店を探す」以外のメッセージが届いたときにエラーメッセージを送信 |
| ④ 現在地を送る          |                                                                     |
|                         | ⑤ お店の配列を作成する                                              |
|                         | ⑥ 必要なデータのみにする                                            |
|                         | ⑦ 評価順に並び替えて上位 10 店舗にする                              |
|                         | ⑧ Flex Message を作成する                                           |
|                         | ⑨ お店の情報を Flex Message で送る                                  |

## デプロイ

[Glitch](https://glitch.com/)を使いました。

https://line-node-typescript-gourmet.glitch.me

## 友達追加はこちらからどうぞ

![407vochs](https://user-images.githubusercontent.com/70458379/123104961-5dccdf80-d472-11eb-8cbe-123747afaea5.png)

# ec_pill HP

deployする方法（Vscodeの場合）
--
1.ローカルディレクトリにgithub上のファイルを同期させる
2.ターミナルを開く
3.ターミナルに"npm install -g firebase-tools"を入れて実行
4.i  "Firebase optionally collects CLI usage and error reporting information to help improve our products. Data is collected in accordance with Google's privacy policy (https://policies.google.com/privacy) and is not used to identify you.
? Allow Firebase to collect CLI usage and error reporting information? (Y/n)"という文章が出たらyesを入力
5.ターミナルに"firebase login"を入れて実行
6.ブラウザが開くので指示に従って許可する（3～6はおそらく初回だけ）
7.deployしたいファイル・フォルダをpublicにおく
8.githubにあげていないファイルもpublicにおく（seo関係）
9.ターミナルに"firebase deploy --only hosting"を入れて実行
10.githubにあげないファイルを忘れてプッシュしないうちに消しておく
--

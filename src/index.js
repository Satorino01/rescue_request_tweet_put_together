import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// アプリをオフラインで動作させ、より高速にロードしたい場合は、変更できます
// 以下のregister（）からunregister（）へ。これにはいくつかの落とし穴があります。
// サービスワーカーの詳細：https://bit.ly/CRA-PWA
serviceWorker.unregister();

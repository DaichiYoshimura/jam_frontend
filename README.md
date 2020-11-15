# 環境構築

## Typescript

```
yarn install global typescript
tsc --init
```

## Next.js

package.jsonを作成

```
{
    "scripts":{
        "dev":"next",
        "build":"next build",
        "start":"next start"
    },
    "dependencies":{
        "next":"^8.0.3",
        "react":"^16.8.4",
        "react-dom":"^16.8.4"
    },
    "devDependencies":{
        "@types/next":"^8.0.1",
        "@types/react":"^16.8.7",
        "@types/react-dom":"^16.8.2",
        "@zeit/next-typescript":"^1.1.1",
        "ts-node":"^8.0.3",
        "typescript":"^3.4.1"
    }
}
```
パッケージのインストール
```
yarn add next react react-dom
```

必要なディレクトリ構成とファイルを整える。

```
    mkdir pages
    cd ./pages
    touch index.jsx
    cd ../
    touch .babelrc next.config.js
```

tsconfig.jsonを編集

```
{
    "scripts":{
        "dev":"next",
        "build":"next build",
        "start":"next start"
    },
    "dependencies":{
        "next":"^9.2.0",
        "react":"^16.12.0",
        "react-dom":"^16.12.0"
    },
    "devDependencies":{
        "@types/next":"^8.0.1",
        "@types/react":"^16.8.7",
        "@types/react-dom":"^16.8.2",
        "@zeit/next-typescript":"^1.1.1",
        "ts-node":"^8.0.3",
        "typescript":"^3.4.1"
    }
}
```

ルーティングの基本

pagesディレクトリ配下の構造が自動的にディレクトリ構造になる。
_app.tsx/_document/.tsx/_error.tsx は重要なファイルなので安易に触らない。
pages/apiディレクトリはapiを呼び出すための特別なディレクトリ（ディレクトリ名「api」は変更しない。





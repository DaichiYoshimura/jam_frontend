## Typescript

```
yarn install global typescript
tsc --init
```

## Next.js

package.json

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
install package
```
yarn add next react react-dom
```

create directory and files.

```
    mkdir pages
    cd ./pages
    touch index.jsx
    cd ../
    touch .babelrc next.config.js
```

edit tsconfig.json.

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





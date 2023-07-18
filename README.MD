# Personal eslint config

## Installation and Usage

```
npm i -D eslint-config-r4ym3
```

.eslintrc.json

```
{
  "extends": [
    "eslint-config-r4ym3",
    "eslint-config-r4ym3/configs/typescript",
    "eslint-config-r4ym3/configs/next",
    "eslint-config-r4ym3/configs/prettier"
  ]
}
```

_note: either use react or next config, they conflict when both used_

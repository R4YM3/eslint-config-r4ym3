
# Personal eslint config

## Installation and Usage

```
npm i -D eslint-config-r4ym3
```

Update your .eslintrc.json

```
{
  "extends": [
    "eslint-config-r4ym3",
    "eslint-config-r4ym3/configs/typescript",
    "eslint-config-r4ym3/configs/jest",
    "eslint-config-r4ym3/configs/next",
    "eslint-config-r4ym3/configs/prettier"
  ]
}
```
_Mind the order of defining configs, put next and prettier last._

Notes:
- eslint-config-r4ym3 will load base config.
- Only load configs which you require.
- Either use react **or** next config, they [conflict when both used](https://nextjs.org/docs/pages/building-your-application/configuring/eslint#migrating-existing-config).

# fastly-wasm-challenge
Try next-compute-js
# requirements
- [fastly cli](https://developer.fastly.com/learning/tools/cli/#installing)
- [fastly api token](https://docs.fastly.com/ja/guides/using-api-tokens)
# set fastly api token
```
$ export FASTLY_API_TOKEN="your_api_token"
$ fastly whoami
Your Name <your@email.addr>
```
# publish to fastly

```
$ npm install
$ npx @fastly/next-compute-js
$ npm run fastly-publish
```
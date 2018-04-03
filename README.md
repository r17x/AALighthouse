# AALighthouse | Automation Audit Lighthouse
### Feature List 
- Multiple Website Audit
- Auto Generate JSON Audit
- Support Chrome Browser
### Instalation
```sh
$ git clone https://github.com/ri7nz/AALighthouse.git && cd AALighthouse
$ npm install
```
### Basic Usage 
#### Demo : https://asciinema.org/a/174088
1. Example Url List config
```js
// example url list config
// https://github.com/ri7nz/AALighthouse/blob/master/config.js#L27 
...
url : [
    'https://yourwebsite0.domain/',
    'https://yourwebsite1.domain/'
]
...
```
   
2. npm start and wait until finish , if success JSON files created
3. Upload your test json https://googlechrome.github.io/lighthouse/viewer/

### Todo 
- [ ] Create Contribution Template   
- [ ] Support All Browser   
- [ ] Domain list reader   
- [ ] Issue Template

#### Motivation & Reference
- [Lighthouse](https://github.com/GoogleChrome/lighthouse)
- [Lighthouse Progamatically](https://github.com/GoogleChrome/lighthouse/tree/master/docs)
- [Lighthouse Default Config](https://github.com/GoogleChrome/lighthouse/blob/master/lighthouse-core/config/default.js#L31)
- [Lighthouse Config](https://github.com/GoogleChrome/lighthouse/blob/master/docs/configuration.md)

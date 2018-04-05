const lighthouse = require('lighthouse')
      config     = require('./config')
      chromeLauncher = require('chrome-launcher')
      fs = require('fs')
      currentD = process.cwd()

function today(){
    let d = new Date()
        return d.toISOString().substring(0,19) 
}
function getFilename(url,mode){
    return `${today()}-` + /^(?:https?:)?(?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n]+)/igm
        .exec(url)[1] + `-${mode}`  
}
function jsonToFile(result, filename=`${currentD}/report-${today()}.json`){
    fs.writeFile(filename, JSON.stringify(result, null, 2), 'utf8', (err)=>{
        return err ? console.log(err) : console.log(`Report Result : ${currentD}/${filename}`)
    })
}
function launchChromeAndRunLighthouse(url, opts, config = null) {
    return chromeLauncher.launch({chromeFlags: opts.chromeFlags}).then(chrome => {
        opts.port = chrome.port
            return lighthouse(url, opts, config).then(results => {
                delete results.artifacts
                    return chrome.kill().then( () => results )      
            })
    })
}

config.url.map( uri => {
    if('chrome' in config){
        //Object.keys(config.lighthouse).forEach( (index , conf) => {
            launchChromeAndRunLighthouse(
                    uri, 
                    config.chrome,
                    config.lighthouse.normal 
                    ).then( res => {
                jsonToFile(res, getFilename(uri,index='normal') + '.json') 
            }) 
        //}) 

    }
})

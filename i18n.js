const fs = require('fs');
const basePath = './src/i18n';

//
// loading /i18n/en/*.json files
//
let src = {};
fs.readdirSync(`${basePath}/en`).forEach(function(file) {
    if (file.match(/\.json$/) !== null) {
        const name = file.replace('.js', '');
        const rawJson = require(`${basePath}/en/${file}`);
        src = {
            ...src,
            ...rawJson
        };
    }
});

//
// saving `/i18n/en.json` file
//
const i18nFile = `${basePath}/en.json`;
fs.writeFile(i18nFile, JSON.stringify(src), { flat: 'w' }, function(err) {
    if (err) {
        return console.log(err);
    }
    console.log(`\nWriting /i18n file to '${i18nFile}'\n`);
});

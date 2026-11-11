import {readFileSync,existsSync} from 'node:fs';
import vm from 'node:vm';
import path from 'node:path';
const html=readFileSync('dist/index.html','utf8');
for(const match of html.matchAll(/(?:src|href)="((?:\.\/|\/)[^"#]+)"/g)){
 if(!existsSync(path.join('dist',match[1].replace(/^\//,''))))throw new Error(`Missing asset: ${match[1]}`);
}
for(const match of html.matchAll(/<script[^>]+src="\.\/([^"]+)"/g))new vm.Script(readFileSync(`dist/${match[1]}`,'utf8'),{filename:match[1]});
JSON.parse(readFileSync('vercel.json','utf8'));
console.log('Build verified: static pages, local assets, JavaScript and Vercel configuration. Output: dist/');

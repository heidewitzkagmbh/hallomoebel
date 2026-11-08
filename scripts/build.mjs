import {readFile,mkdir,copyFile,writeFile,cp} from 'node:fs/promises';
import {csv,select} from './data.mjs';
const preview=process.argv.includes('--preview');
const rows=csv(await readFile('data/angebote.csv','utf8'));const products=select(rows,preview);
const images=JSON.parse(await readFile('data/product-images.json','utf8'));
for(const p of products){const image=images[p.id];if(image&&(preview||image.rights_status==='Freigegeben')){p.image=image.src;p.imageSource=image.source_page;}}
if(rows.length!==new Set(rows.map(r=>r.id)).size)throw Error('Doppelte Angebots-ID');
await mkdir('dist',{recursive:true});for(const f of ['style.css','app.js','favicon.svg'])await copyFile('public/'+f,'dist/'+f);
await cp('public/product-images','dist/product-images',{recursive:true});
let html=await readFile('public/index.html','utf8');
html=html.replace('__DATA__',JSON.stringify({preview,products}).replace(/</g,'\\u003c'));
await writeFile('dist/index.html',html);await writeFile('dist/robots.txt','User-agent: *\nDisallow: /\n');
console.log(`${rows.length} Datensätze, ${products.length} Angebote im ${preview?'Vorschau':'Freigabe'}modus.`);

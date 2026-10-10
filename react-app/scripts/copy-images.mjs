import {cpSync,mkdirSync,existsSync} from 'node:fs';
const source=new URL('../../trailerpics/',import.meta.url);const target=new URL('../public/trailerpics/',import.meta.url);
if(!existsSync(source))throw new Error('Original trailerpics directory is missing');
mkdirSync(target,{recursive:true});cpSync(source,target,{recursive:true});

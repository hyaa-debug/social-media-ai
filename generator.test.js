import {test} from 'node:test';
import assert from 'node:assert/strict';
import {generate} from './generator.js';
const input={name:'Bloom',description:'Plan your day.',audience:'creators',style:'Friendly'};
test('all platforms retain demo label and product context',()=>{for(const platform of ['Threads','X','Reddit']){const out=generate({...input,platform});assert.match(out,/DEMO CONTENT/);assert.match(out,/Bloom/);assert.match(out,/creators/);}});
test('missing values are rejected',()=>assert.throws(()=>generate({...input,name:' ',platform:'X'})));
test('X body stays short and unicode intact',()=>{const out=generate({...input,description:'😀'.repeat(400),platform:'X'});assert.ok(Array.from(out.split('\n\n')[1]).length<=240);});
test('styles and platforms change the result',()=>{assert.notEqual(generate({...input,platform:'Threads'}),generate({...input,platform:'Reddit'}));assert.match(generate({...input,platform:'Threads',style:'Professional'}),/Introducing/);});

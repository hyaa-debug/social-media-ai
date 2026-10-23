import {generate} from './generator.js';
const $=s=>document.querySelector(s);let platform='Threads';
document.querySelectorAll('[data-platform]').forEach(b=>b.onclick=()=>{platform=b.dataset.platform;document.querySelectorAll('[data-platform]').forEach(x=>{x.classList.toggle('active',x===b);x.setAttribute('aria-pressed',x===b);});$('#platformName').textContent=platform;});
const count=()=>{$('#count').textContent=`${Array.from($('#result').value).length} characters`;};
$('#form').onsubmit=e=>{e.preventDefault();$('#result').value=generate({name:$('#name').value.trim(),description:$('#description').value.trim(),audience:$('#audience').value.trim(),platform,style:$('#style').value});$('#previewPlatform').textContent=platform;$('#status').textContent='演示内容已生成，可直接编辑。';count();};
$('#result').oninput=count;
$('#copy').onclick=async()=>{if(!$('#result').value){$('#status').textContent='请先生成内容。';return;}try{await navigator.clipboard.writeText('[DEMO CONTENT — 演示内容]\n'+$('#result').value.replace(/^\[DEMO CONTENT — 演示内容\]\n*/,''));$('#status').textContent='已复制（包含演示标记）';}catch{$('#result').select();$('#status').textContent='请按 Ctrl+C 或手机长按复制。';}};
$('#example').onclick=()=>{$('#name').value='Bloom';$('#description').value='A simple workspace that turns scattered ideas into a clear daily plan.';$('#audience').value='independent creators and small teams';};
count();

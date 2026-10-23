export function generate({name,description,audience,platform,style}) {
 if(![name,description,audience].every(v=>v.trim())) throw new Error('请完整填写产品信息');
 const intro={Friendly:`Meet ${name} 👋`,Professional:`Introducing ${name}.`,Bold:`Your next big move? ${name}.`}[style];
 const body=`${intro}\n\n${description}\n\nBuilt for ${audience}.`;
 if(platform==='Reddit') return `[DEMO CONTENT — 演示内容]\n\nTitle: What would make ${name} useful for you?\n\n${body}\n\nWe’re exploring this idea and would love honest feedback. What would you improve?`;
 if(platform==='X') {const text=`${intro} ${description} For ${audience}. What do you think?`;return `[DEMO CONTENT — 演示内容]\n\n${Array.from(text).slice(0,240).join('')}`;}
 return `[DEMO CONTENT — 演示内容]\n\n${body}\n\nGreat ideas start with a conversation. What’s one thing you’d love to simplify?`;
}

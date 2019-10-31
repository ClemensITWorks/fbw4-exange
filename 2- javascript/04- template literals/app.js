const name="John";
const age =31;
const job="Web Developer";
const city = 'Hamburg';
let html;

//without template strings (es5
//html = '<ul><li>Name: '+name+'</li><li>Age: '+age+'</li><li>Job: '+job+'</li><li>city: '+city+'</li></ul>;
//html = '<ul><li>Name: '+name+'</li></ul>';

// with template strings (es6) 
html = `
<ul>
<li>
name: ${name}
</li>
<li>
Age: ${age}
</li>
<li>
Job: ${job}
</li>
<li>
City: ${City}
</li>
</ul>
`;

//implementation
document.body.innerHTML = html;
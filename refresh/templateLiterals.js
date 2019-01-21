const name = 'John'
const age = 31;
const job = 'Web Developer';
const city = 'Miami';

// without template strings (es5)
html = '<ul><li>Name:  ' + name + '</li><li>Age:  ' + age + '</li><li>Job:  ' + job + '</li><li>City:  ' + city + '</li></ul>'

html = '<ul>' +
        '<li>Name:  ' + name + '</li>' +
        '<li>Age:  ' + age + '</li>' +
        '<li>Job:  ' + job + '</li>' +
        '<li>City:  ' + city + '</li>';

// with template strings (es6)

function hello(){
    return 'hello';
}

html = `
    <ul>
        <li>Name: ${name}</li>
        <li>Age: ${age}</li>
        <li>Job: ${job}</li>
        <li>City: ${city}</li>
        <li>${2+2}</li>
        <li>${hello()}</li>
        <li>${age > 30 ? 'Over 30' : '30 and Under'}</li>
    </ul>
`;

document.body.innerHTML = html;
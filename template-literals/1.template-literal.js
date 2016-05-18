// Multiline string with embedded expressions
// Template literals are defined between backticks ``

let name = 'Trueman';

// Multiline string with interpolated expression
console.log(`

    ${name}

`);

//Simple variable interpolation
function li(item) {
    return `<li class="list-item">${item}</li>`
}

console.log(li('Fonzie'));

//Expression interpolation
function ul(items) {
    return `
    <div>
        <ul>
            You can 'single' or "double" quote.
            ${items.map(li).join('\n\t\t\t')}
        </ul>
    </div>`
}

const items = [
    'Rowing',
    'Kayaking',
    'Yachting'
];

console.log(ul(items));
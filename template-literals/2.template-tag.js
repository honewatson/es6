const items = [
    'Rowing',
    'Kayaking',
    'Yachting'
];


// Arrays of strings are converted to a
// single string joined with a comma
console.log(`${items.map(x => x)}`);

// A function used for tagging template literals
function html(literals, ...substs) {
    return literals.raw.reduce((acc, lit, i) => {
        let subst = substs[i - 1];
        if (Array.isArray(subst)) {
            subst = subst.join('');
        }
        return acc + subst + lit;
    });
}

// A template tag function allows us to manipulate
// the raw result of a template literal
let remove_commas = html`${items.map(x => x)}`;

console.log(remove_commas);

//Modify template literal output with a function.


// Raw template literal
console.log(`
Raw template literal.

The following is a list of water sports:

    ${items.map(function(item) { 
        return item;
    })}


`);

// With html tag
console.log(html`
Tagged template literal.

The following is a list of water sports:

    ${items.map(function(item) { 
        return item;
    })}


`);

function li(item) {
    return `<li class="list-item">${item}</li>`
}

function ul(items) {
    return html`
    <div>
        <ul>
            ${items.map(li)}
        </ul>
    </div>`
}


console.log(ul(items));
var a = document.getElementById("srch");
var c = document.getElementById("disp");
var b = ['Chocolate Cone','Strawberry Cone','Pista Cone','Blueberry Cup','Strawberry Cup','Tender Coconut Cup','Chocolate Cup','Vanilla Cup','Chocolate Shake','Mango Shake','Strawberry Shake','Casatta Slice','Chocolate Vanilla Slice','Pista Slice','Mango  Slice','Badam Kulfi','Milk Kulfi','Pista Kulfi'];

a.addEventListener('input', () => {
    var d = a.value.toLowerCase();
    c.innerText = '';
    if (d === '') {
        c.style.display = 'none';
    } else {
        c.style.display = 'block';
        var e = b.filter(fruit =>
             fruit.toLowerCase().startsWith(d));
        e.forEach(fruit => {
            var f = document.createElement('div');
            f.classList.add('fruit');
            f.textContent = fruit;
            c.appendChild(f);
        });
    }
});

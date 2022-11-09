let productos;
fetch('http://localhost:3000/api/productos')
        .then((response) => response.json())
        .then((data) => productos = data);
// funcion

let aprendiendo;


aprendiendo = function(){
    console.log('Aprendiendo Javascript');

}

aprendiendo = () => {
    console.log('Aprendiendo Javascript');

}
//Una linea no require llave
aprendiendo = () => console.log('Aprendiendo Javascript');
//Retorna valor
aprendiendo = () => 'Aprendiendo Javascript';
//Retorno objeto
aprendiendo = () => ({aprendiendo: 'Aprendiendo Javascript'});
//Pasar parametros
aprendiendo = (tecnologia) => console.log(`Aprendiendo ${tecnologia} `);
//Pasando 1 parametro
aprendiendo = tecnologia => console.log(`Aprendiendo ${tecnologia} `);
//Pasando 1 parametro
aprendiendo = (tecn1, tecn2) => console.log(`Aprendiendo ${tec1}  ${tec2} `);

const productos = ['Disco', 'Camisa', 'Guitarra' ];

productos.forEach(producto => console.log(producto));

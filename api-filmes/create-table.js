const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'sql10.freemysqlhosting.net',
    port: 3306,
    user: 'sql10279238',
    password: 'HKzZhGEL7Y',
    database: 'sql10279238'
});

connection.connect((err) => {
    if (err) return console.log('Erro!');
    console.log('conectou!');
    addRows(connection);
});

function addRows(conn) {
    const sql = "insert into filmes(nome, descricao, url_capa) values ?";
    const values = [
        ['Sem Limites', 'Encarando o desemprego e a rejeição de sua namorada, o escritor Eddie Morra tem certeza que não tem mais futuro. Mas tudo muda quando um velho amigo lhe dá uma droga que melhora as habilidades mentais. Viciado nesta química ainda não testada, Eddie chega ao topo do mundo financeiro e chama a atenção de um magnata que pretende usá-lo para fazer fortuna. Mas terríveis efeitos colaterais e a diminuição do estoque da droga ameaçam o colapso de Eddie.', 'https://s3.amazonaws.com/seriemaniacos/uploads/2014/11/Sem-Limite-1068x545.jpg'],
        ['Carga Bruta', 'Após um passo em falso, um grupo de ladrões é forçado a realizar uma arriscada missão para uma poderosa organização criminosa.', 'https://i1.wp.com/www.metafictions.com/wp-content/uploads/2018/11/carga-bruta-poster.jpg?fit=737%2C1000&ssl=1'],
        ['Fragmentado', 'Kevin possui 23 personalidades distintas e consegue alterná-las quimicamente em seu organismo apenas com a força do pensamento. Um dia, ele sequestra três adolescentes que encontra em um estacionamento. Vivendo em cativeiro, elas passam a conhecer as diferentes facetas de Kevin e precisam encontrar algum meio de escapar.', 'http://t2.gstatic.com/images?q=tbn:ANd9GcS53SGsd7yrBdv-hjZS1Gq8Wz8pao4YMj0fEqu5D6TKmyG9ZNs_'],
        ['Constantine', 'Contos sobrenaturais baseados nas histórias em quadrinhos "Hellblazer". O solitário Constantine tenta garantir seu lugar no paraíso enviando demônios de volta ao inferno, mas seu destino está ligado ao de Angela, uma policial que investiga o suposto suicídio de sua irmã gêmea.', 'https://images-na.ssl-images-amazon.com/images/I/51gwfFQj4BL._SY445_.jpg'],
        ['Clube da Luta', 'Um homem deprimido que sofre de insônia conhece um estranho vendedor chamado Tyler Durden e se vê morando em uma casa suja depois que seu perfeito apartamento é destruído. A dupla forma um clube com regras rígidas onde homens lutam. A parceria perfeita é comprometida quando uma mulher, Marla, atrai a atenção de Tyler.', 'http://br.web.img3.acsta.net/c_215_290/medias/nmedia/18/90/95/96/20122166.jpg']
    ];

    conn.query(sql, [values], (err, results, fields) => {
        if (err) return console.log(err);
        console.log('Registros adicionados com sucesso!');
        conn.end();
    });
}
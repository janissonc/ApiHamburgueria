import { openDb } from "../configDB.js";

export async function createTableProduto(){
    openDb().then(db=>{
        db.exec(
            `CREATE TABLE IF NOT EXISTS Produto ( 
                id INTEGER PRIMARY KEY, 
                name TEXT, 
                description TEXT,
                price FLOAT,
                img TEXT
            )`
        )
    })
}

export async function selectProdutos(req, res){
    openDb().then(db=>{
        db.all('SELECT * FROM Produto')
        .then(produtos=> res.json(produtos))
    })
}

export async function selectProduto(req, res){
    let id = req.body.id;
    openDb().then(db=>{
        db.get('SELECT * FROM Produto WHERE id = ?',[id])
        .then(produto=> res.json(produto))
    })
}


export async function insertProduto(req, res){
    let produto = req.body;
    openDb().then(db=>{
        db.run(
            'INSERT INTO Produto (name,price,description,img) VALUES (?,?,?,?)',
            [
                produto.name,
                produto.price,
                produto.description,
                produto.img
            ]
        )
    })
    res.json({
        "statusCode":200
    })
}

export async function updateProduto(req, res){
    let produto = req.body;
    openDb().then(db=>{
        db.run(
            `UPDATE Produto 
                SET name = ?, 
                price = ?,
                description = ?,
                img = ?
            WHERE id = ?`,
            [
                produto.name,
                produto.price,
                produto.description,
                produto.img,
                produto.id,
            ]
        )
    })
    res.json({
        "statusCode":200
    })
}

export async function deleteProduto(req, res){
    let id = req.body.id;
    openDb().then(db=>{
        db.get('DELETE FROM Produto WHERE id = ?',[id])
        .then(produtos=> res.json(produtos))
    })
}
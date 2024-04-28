import { openDb } from "../configDB.js";

export async function createTable(){
    openDb().then(db=>{
        db.exec(
            'CREATE TABLE IF NOT EXISTS Pessoa( id INTEGER PRIMARY KEY, name TEXT, idade INTEGER)'
        )
    })
}

export async function selectPessoas(req, res){
    openDb().then(db=>{
        db.all('SELECT * FROM Pessoa')
        .then(pessoas=> res.json(pessoas))
    })
}

export async function selectPessoa(req, res){
    let id = req.body.id;
    openDb().then(db=>{
        db.get('SELECT * FROM Pessoa WHERE id = ?',[id])
        .then(pessoas=> res.json(pessoas))
    })
}


export async function insertPessoa(req, res){
    let pessoa = req.body;
    openDb().then(db=>{
        db.run(
            'INSERT INTO Pessoa (name,idade) VALUES (?,?)',[pessoa.name,pessoa.idade]
        )
    })
    res.json({
        "statusCode":200
    })
}

export async function updatePessoa(req, res){
    let pessoa = req.body;
    openDb().then(db=>{
        db.run(
            'UPDATE Pessoa SET name = ?, idade = ? WHERE id = ?',[pessoa.name,pessoa.idade,pessoa.id]
        )
    })
    res.json({
        "statusCode":200
    })
}

export async function deletePessoa(req, res){
    let id = req.body.id;
    openDb().then(db=>{
        db.get('DELETE FROM Pessoa WHERE id = ?',[id])
        .then(pessoas=> res.json(pessoas))
    })
}
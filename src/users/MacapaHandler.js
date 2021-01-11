import * as mysql from "promise-mysql";

const db_options = {
    host: "localhost",
    port: "3306",
    database: "admin",
    user: "admin",
    password: "admin"
}

export class MacapaHandler{
    constructor(){}

    async insert (contacts) {
        contacts = this.format(contacts)

        let db = await mysql.createConnection(db_options);

        let result = await db.query(
            "INSERT INTO contacts (nome, celular) VALUES ?",
            [contacts]
        );

        db.end();
        
        console.debug(result);
    }

    format (contacts) {
        for (let i = 0; i < contacts.length; i++) {
            let element = contacts[i];
            element.name = element.name.toUpperCase()
            element.cellphone = `+${element.cellphone.substring(0, 2)} (${element.cellphone.substring(2, 4)}) ${element.cellphone.substring(4, 9)}-${element.cellphone.substring(9, 13)}`;
        }
    }
}
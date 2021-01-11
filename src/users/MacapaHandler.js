import * as mysql from "promise-mysql";

const db_options = {
    host: "mysql",
    port: 3306,
    user: "admin",
    password: "admin",
    database: "admin"
}

export class MacapaHandler{
    constructor(){}

    async insert (contacts) {
        this.#format_input(contacts);

        let db = await mysql.createConnection(db_options);

        await db.query(
            "INSERT INTO contacts (nome, celular) VALUES ?",
            [contacts]
        );

        db.end();
    }

    async get_all() {
        let db = await mysql.createConnection(db_options);

        let result = await db.query(
            "SELECT * FROM contacts;",
        );

        db.end();

        return this.#format_output(result);
    }

    async get_single(id) {
        let db = await mysql.createConnection(db_options);

        let result = await db.query(
            "SELECT * FROM contacts WHERE contacts.id = ?;",
            id
        );

        db.end();

        return this.#format_output(result);
    }

    #format_input (contacts) {
        for (let i = 0; i < contacts.length; i++) {
            let element = contacts[i];
            element.name = element.name.toUpperCase()
            element.cellphone = `+${element.cellphone.substring(0, 2)} (${element.cellphone.substring(2, 4)}) ${element.cellphone.substring(4, 9)}-${element.cellphone.substring(9, 13)}`;
            contacts[i] = Object.values(element);
        }
    }

    #format_output(query_result) {
        let response = {
            length: query_result.length,
            contacts: []
        };
        for (let i = 0; i < query_result.length; i++) {
            const element = query_result[i];
            response.contacts.push({
                "id": element.id,
                "name": element.nome,
                "cellphone": element.celular,
            });
        }

        return response;
    }
}
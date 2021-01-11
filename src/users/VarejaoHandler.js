import Promise from "bluebird";
import pgPromise from "pg-promise";

const db_options = {
    host: 'postgresql',
    port: 5432,
    user: "admin",
    password: "admin",
    database: 'admin',
}

const pgp = pgPromise({ promiseLib: Promise });
export class VarejaoHandler{
    constructor(){}

    async insert (contacts) {
        this.#format_input(contacts)

        let db = pgp(db_options);

        const cs = new pgp.helpers.ColumnSet(['nome', 'celular'], {table: 'contacts'})

        const query = pgp.helpers.insert(contacts, cs);

        await db.none(query);
        
        await db.$pool.end();
    }
    
    async get_all() {
        let db = pgp(db_options);

        let result = await db.any("SELECT * FROM contacts;");

        await db.$pool.end();

        return this.#format_output(result);
    }
    
    async get_single(id) {
        let db = pgp(db_options);

        let result = await db.any("SELECT * FROM contacts WHERE contacts.id = $1;", id);

        await db.$pool.end();

        return this.#format_output(result);
    }

    #format_input (contacts) {
        for (let i = 0; i < contacts.length; i++) {
            let element = contacts[i];

            element.nome = element.name;
            element.celular = element.cellphone;
            delete contacts[i].name;
            delete contacts[i].cellphone;
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
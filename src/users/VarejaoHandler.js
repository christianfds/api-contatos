import Promise from "bluebird";
import pgPromise from "pg-promise";

const db_options = {
    host: 'localhost',
    port: 5432,
    user: "admin",
    password: "admin",
    database: 'admin',
}

export class VarejaoHandler{
    constructor(){}

    async insert (contacts) {
        this.format(contacts)

        let pgp = pgPromise({ promiseLib: Promise });
        let db = pgp(db_options);

        const cs = new pgp.helpers.ColumnSet(['nome', 'celular'], {table: 'contacts'})

        const query = pgp.helpers.insert(contacts, cs);

        await db.none(query);
    }

    format (contacts) {
        for (let i = 0; i < contacts.length; i++) {
            let element = contacts[i];

            element.nome = element.name;
            element.celular = element.cellphone;
            delete contacts[i].name;
            delete contacts[i].cellphone;
        }
    }
}
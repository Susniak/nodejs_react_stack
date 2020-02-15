import Model from "../core/Model";
import Connection from "../core/MysqlConnection";
import sha1 from 'sha1';
import Query from "../core/Query";

const fields = [
    'name',
    'password',
    'email'
];


const toQueryString = string => `"${string}"`;
const queryString = string => `\`${string}\``;

class PlayerModel extends Model {
    constructor(data) {
        super(data, fields);
        this.connection = Connection.getInstance();
    }

    getCreationData() {
        return {
            name: toQueryString(this.data.name),
            password: toQueryString(sha1(this.data.password)),
            email: toQueryString(this.data.email),
            creation: 0
        };
    }

    create() {
        const data = this.getCreationData();
        const string = [
            `INSERT INTO ${queryString("accounts")} (`,
            Object.keys(data).map(element => queryString(element)).join(", "),
            ") VALUES (",
            Object.values(data).join(", "),
            ")"
        ].join("");

        this.connection.query(string);
    }

    getByName(name) {
        const string = [
            `SELECT acc.id as accountId, acc.name as accountName, acc.email as accEmail, acc.password as accPassword, pl.* `,
            `FROM ${queryString("accounts")} acc `,
            `LEFT JOIN ${queryString("players")} pl `,
            `ON pl.account_id = acc.id `,
            `WHERE acc.${queryString("name")} = ${toQueryString(name)} `
        ].join("");

        return Query(string).then(results => {
            if (results && results[0]) {
                return results.reduce((previous, element) => {
                    const {accountId, accountName, accEmail, accPassword, ...player} = element;

                    if (!previous.hasOwnProperty('players')) {
                        previous = {
                            id: accountId,
                            name: accountName,
                            email: accEmail,
                            password: accPassword,
                            players: []
                        };
                    }

                    previous.players.push(player);

                    return previous;
                }, {});
            }
        });
    }

    checkPassword(password) {
        return sha1(password) === this.data.password;
    }
}


export default PlayerModel;

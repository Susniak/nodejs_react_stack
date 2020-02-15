import Model from "../core/Model";
import Connection from "../core/MysqlConnection";

const fields = [
    'name',
    'sex',
    'accountId'
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
            sex: this.data.sex,
            conditions: 0,
            account_id: this.data.accountId
        };
    }

    create() {
        const data = this.getCreationData();
        const string= [
            `INSERT INTO ${queryString("players")} (`,
            Object.keys(data).map(element => queryString(element)).join(", "),
            ") VALUES (",
            Object.values(data).join(", "),
            ")"
        ].join("");
        console.log(string);

        this.connection.query(string);
    }
}


export default PlayerModel;

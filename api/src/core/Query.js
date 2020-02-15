import Connection from "./MysqlConnection";

const Query = (string = '') => {
    if (!string) {
        return false;
    }

    return new Promise((resolve, reject) => {
        Connection.getInstance().query(string, (error, results) => {
            if (error) {
                return reject(error);
            }

            return resolve(results);
        })
    });
};

export default Query;

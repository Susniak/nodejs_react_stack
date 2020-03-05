import {queryString} from "./helpers/mysqlDatabseHelpers";

class Model {
    constructor(table, data, fieldsValidation) {
        this.data = data;
        this.tableName = queryString(table);
        this.fieldsValidation = fieldsValidation;
        this.validationErrors = {};
    }

    validate() {
        this.validationErrors = this.fieldsValidation.filter(field => {
            return !this.data.hasOwnProperty(field) || (!this.data[field] && this.data[field] !== 0);
        });

        return this.validationErrors.length === 0;
    }

    setData(data) {
        this.data = data;
    }
}

export default Model;

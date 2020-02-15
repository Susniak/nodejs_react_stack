class Model {
    constructor(data, fieldsValidation) {
        this.data = data;
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

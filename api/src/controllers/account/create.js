import Action from "../../core/Action";
import AccountModel from "../../model/account";

class CreateAccountAction extends Action {
    render() {
        const requestData = this.getRequestData();
        const accountModel = new AccountModel(requestData);

        if (accountModel.validate()) {
            accountModel.create();
            this.response.status(200).send();

            return;
        }

        this.response.status(400).send();
    }
}

export default CreateAccountAction;

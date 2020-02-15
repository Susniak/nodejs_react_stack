import Action from "../../core/Action";
import AccountModel from "../../model/account";
import createUserToken from "../../helpers/createUserToken";

const SECRET_KEY = "ACCOUNT_KEY";

class GetAccountAction extends Action {
    render() {
        const accountModel = new AccountModel();
        const requestData = this.getRequestData();

        if (!requestData.hasOwnProperty('password') || !requestData.hasOwnProperty('name')) {
            this.response.status(400).send({
                error: "You need to type password and name."
            });

            return false;
        }

        createUserToken(requestData.name, SECRET_KEY).then(({token, data}) => {
            accountModel.setData(data);

            if (accountModel.checkPassword(requestData.password)) {
                this.response.status(200).send({token});
                return true;
            }

            this.response.status(400).send({
                error: "Account name or password is incorrect."
            })
        }, () => {
            this.response.status(400).send({
                error: "Account name or password is incorrect."
            });
        });
    }
}

export default GetAccountAction;

import Action from "../../core/Action";
import jwt from "jsonwebtoken";
import createUserToken from "../../helpers/createUserToken";

const SECRET_KEY = "ACCOUNT_KEY";

class VerifyAccountTokenAction extends Action {
    render() {
        const requestData = this.getRequestData();

        if (!requestData.hasOwnProperty('token')) {
            this.response.status(400).send({
                error: "You need to type token."
            });

            return false;
        }

        try {
            const user = jwt.verify(requestData.token, SECRET_KEY);

            if(user && user.data) {
                createUserToken(user.data.name, SECRET_KEY).then(object => {
                    this.response.status(200).send({data: object.data,token: object.token});
                }, () => {
                    this.response.status(400).send();
                })
            } else {
                this.response.status(400).send();
            }
        } catch (error) {
            this.response.status(400).send();
        }
    }
}

export default VerifyAccountTokenAction;

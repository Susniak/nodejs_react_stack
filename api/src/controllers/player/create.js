import Action from "../../core/Action";
import PlayerModel from "../../model/player";

class CreatePlayerAction extends Action {
    render() {
        const requestData = this.getRequestData();
        const accountModel = new PlayerModel(requestData);

        if (accountModel.validate()) {
            accountModel.create();
            this.response.status(200).send();

            return;
        }

        this.response.status(400).send(accountModel.validationErrors);
    }
}

export default CreatePlayerAction;

import Action from "../../core/Action";
import PlayerModel from "../../model/player";

class CreatePlayerAction extends Action {
    render() {
        const requestData = this.getRequestData();
        const playerModel = new PlayerModel(requestData);

        if (playerModel.validate()) {
            playerModel.create();
            this.response.status(200).send();

            return;
        }

        this.response.status(400).send(playerModel.validationErrors);
    }
}

export default CreatePlayerAction;

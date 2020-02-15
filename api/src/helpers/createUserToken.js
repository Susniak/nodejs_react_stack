import AccountModel from "../model/account";
import jwt from "jsonwebtoken";

const createUserToken = (name, secretKey) => {
    const accountModel = new AccountModel({});

    return accountModel.getByName(name).then((result) => {
        accountModel.setData(result);
        console.log(result, accountModel.data);

        const data = {
            data: accountModel.data
        };

        return {
            data: accountModel.data,
            token: jwt.sign(data, secretKey)
        }
    });
};

export default createUserToken;

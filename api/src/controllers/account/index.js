import ExtendedRouter from "../../core/ExtendedRouter";
import CreateAccountAction from "./create";
import GetAccountAction from "./get";
import VerifyAccountTokenAction from "./verify";

const accountRouter = new ExtendedRouter();
accountRouter.putAction('', CreateAccountAction);
accountRouter.getAction('', GetAccountAction);
accountRouter.getAction('/verify', VerifyAccountTokenAction);

export default accountRouter.toFunction();

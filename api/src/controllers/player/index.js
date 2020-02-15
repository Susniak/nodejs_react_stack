import ExtendedRouter from "../../core/ExtendedRouter";
import CreatePlayerAction from "./create";

const playerRouter = new ExtendedRouter();
playerRouter.putAction('', CreatePlayerAction);

export default playerRouter.toFunction();

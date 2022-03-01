import { entireOrderHandlers } from "./entireOrder";
import { myOrderHandlers } from "./myOrder";

export const handlers = [...Object.values(myOrderHandlers)];

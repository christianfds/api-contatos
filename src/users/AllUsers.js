import { MacapaHandler } from "./MacapaHandler.js";
import { VarejaoHandler } from "./VarejaoHandler.js";

export const users = {
    "user@macapa.com.br": {
        "password": "$2b$10$wdlI3zcOzO7Ir1R1Dlml5uPCHpkQYl0sxKGCuQ3ixbra.Pp44mJL2",
        "handler": MacapaHandler
    },
    "user@varejao.com.br": {
        "password": "$2b$10$xx0IEIlY7F7jJmsKztaj4e.Nm6n4ZRBqi0JG7Kct2mkaX6G78Kz9K",
        "handler": VarejaoHandler
    }
};
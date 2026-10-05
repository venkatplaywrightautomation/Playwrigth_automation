

import { expect } from "@playwright/test"
import { match } from "assert"

// export const stringFormat = (str, ...args) =>



//     str.replace(/{(\d+)}/g, (match, index) => args[index].toString() || "");



function stringFormat(str, ...args) {
    return str.replace(/{(\d+)}/g, (match, index) => {
        return args[index] !== undefined ? args[index].toString() : "";
    });
}

module.exports = { stringFormat };
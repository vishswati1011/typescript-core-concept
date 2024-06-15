/// <reference path="./utils.ts" />

namespace UsersUtils {
    export class users extends Parent implements userType{
        getName() {
            return this.name;
        }
    }
}

let u2 = new UsersUtils.users();
u2.setName('swati vish');
console.log(u2.getName());

// execute this file using below command:
// tsc app.ts --outfile out.js
//  node out.js
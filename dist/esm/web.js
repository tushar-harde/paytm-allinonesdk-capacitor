var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { WebPlugin } from '@capacitor/core';
export class AllInOneSDKWeb extends WebPlugin {
    constructor() {
        super({
            name: 'AllInOneSDK',
            platforms: ['web'],
        });
    }
    echo(options) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('ECHO', options);
            return options;
        });
    }
    startTransaction(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return {
                message: 'plugin works!',
                response: options.amount
            };
        });
    }
}
const AllInOneSDK = new AllInOneSDKWeb();
export { AllInOneSDK };
import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(AllInOneSDK);
//# sourceMappingURL=web.js.map
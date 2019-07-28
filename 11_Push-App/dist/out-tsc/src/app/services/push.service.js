import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { OneSignal } from '@ionic-native/onesignal/ngx';
var PushService = /** @class */ (function () {
    function PushService(oneSignal) {
        this.oneSignal = oneSignal;
    }
    PushService.prototype.configuracionInicial = function () {
        this.oneSignal.startInit('0922f22b-cb09-48d1-9a45-7c3952b3d0e4', '355632531813');
        this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);
        this.oneSignal.handleNotificationReceived().subscribe(function (noti) {
            console.log('Notificación recibida', noti);
            // do something when notification is received
        });
        this.oneSignal.handleNotificationOpened().subscribe(function (noti) {
            console.log('Notificación abierta', noti);
            // do something when a notification is opened
        });
        this.oneSignal.endInit();
    };
    PushService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [OneSignal])
    ], PushService);
    return PushService;
}());
export { PushService };
//# sourceMappingURL=push.service.js.map
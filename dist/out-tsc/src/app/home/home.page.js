var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { Component, ViewChild } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
var HomePage = /** @class */ (function () {
    // public user: Usuario = {
    //   email: '',
    //   password: ''
    // };
    function HomePage(router, toastCtrl, firebaseauth) {
        var _this = this;
        this.router = router;
        this.toastCtrl = toastCtrl;
        this.firebaseauth = firebaseauth;
        firebaseauth.user.subscribe((function (data) {
            _this.user = data;
        }));
    }
    // public LoginComEmail(): void {
    HomePage.prototype.LoginComEmail = function (email, password) {
        var _this = this;
        this.firebaseauth.auth.signInWithEmailAndPassword(email, password)
            // this.firebaseauth.auth.signInWithEmailAndPassword(this.email.value , this.password.value)
            .then(function () {
            _this.exibirToast('Login efetuado com sucesso');
        })
            .catch(function (erro) {
            _this.exibirToast('Email ou senha incorreto');
        });
    };
    // public cadastrarUsuario(): void {
    HomePage.prototype.cadastrarUsuario = function (email, password) {
        var _this = this;
        this.firebaseauth.auth.createUserWithEmailAndPassword(email, password)
            // this.firebaseauth.auth.createUserWithEmailAndPassword(this.email.value , this.password.value)
            .then(function () {
            _this.exibirToast('Usuário criado com sucesso');
        })
            .catch(function (erro) {
            _this.exibirToast('Email ou senha incorreto');
            console.log(erro);
        });
    };
    HomePage.prototype.resetPassword = function (email) {
        var _this = this;
        this.firebaseauth.auth.sendPasswordResetEmail(email.toString()).then(function () {
            _this.exibirToast('Senha enviada');
            console.log('Senha enviada');
        })
            .catch(function (erro) {
            _this.exibirToast('Digite um email válida');
            console.log(erro);
        });
    };
    HomePage.prototype.Sair = function () {
        var _this = this;
        this.firebaseauth.auth.signOut()
            .then(function () {
            _this.exibirToast('Você saiu');
        })
            .catch(function (erro) {
            _this.exibirToast(erro);
        });
    };
    HomePage.prototype.exibirToast = function (mensagem) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            duration: 3000,
                            message: mensagem,
                            position: 'bottom'
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        ViewChild('usuario'),
        __metadata("design:type", Object)
    ], HomePage.prototype, "email", void 0);
    __decorate([
        ViewChild('senha'),
        __metadata("design:type", Object)
    ], HomePage.prototype, "password", void 0);
    HomePage = __decorate([
        Component({
            selector: 'app-home',
            templateUrl: 'home.page.html',
            styleUrls: ['home.page.scss'],
        }),
        __metadata("design:paramtypes", [Router,
            ToastController,
            AngularFireAuth])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.page.js.map
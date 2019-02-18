var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { PacienteService } from '../services/paciente.service';
import { Router } from '@angular/router';
var PacientesListPage = /** @class */ (function () {
    function PacientesListPage(router, pacientesList) {
        this.router = router;
        this.pacientesList = pacientesList;
        // this.lista = this.pacientesList.getAll().valueChanges();
        // console.log(this.lista);
    }
    PacientesListPage.prototype.ngOnInit = function () {
        var _this = this;
        this.pacientesList.getAll().subscribe(function (res) {
            _this.lista = res;
        });
    };
    PacientesListPage.prototype.goToCadastroPacientes = function () {
        this.router.navigate(['/cadastro-pacientes']);
    };
    PacientesListPage.prototype.visualizar = function (id) {
        this.router.navigate(['/paciente-details', id]);
    };
    PacientesListPage = __decorate([
        Component({
            selector: 'app-pacientes-list',
            templateUrl: './pacientes-list.page.html',
            styleUrls: ['./pacientes-list.page.scss'],
        }),
        __metadata("design:paramtypes", [Router, PacienteService])
    ], PacientesListPage);
    return PacientesListPage;
}());
export { PacientesListPage };
//# sourceMappingURL=pacientes-list.page.js.map
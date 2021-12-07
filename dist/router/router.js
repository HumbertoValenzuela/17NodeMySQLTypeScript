"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mysql_1 = __importDefault(require("../mysql/mysql"));
// router: rutas
const router = (0, express_1.Router)();
router.get('/heroes', (req, resp) => {
    const query = `
    SELECT *
    FROM heroes    
  `;
    // llamar la instancia de la clase
    mysql_1.default.ejecutarQuery(query, (err, heroes) => {
        if (err) {
            resp.status(400).json({
                ok: false,
                error: err
            });
        }
        else {
            resp.json({
                ok: true,
                heroes
            });
        }
    });
});
router.get('/heroes/:id', (req, resp) => {
    const id = req.params.id;
    // escaping query values. Evitar sql injection
    const escapedId = mysql_1.default.instance.cnn.escape(id);
    const query = `
    SELECT *
    FROM heroes 
    WHERE id_heroes = ${escapedId}`;
    // llamar la instancia de la clase
    mysql_1.default.ejecutarQuery(query, (err, heroe) => {
        if (err) {
            resp.status(400).json({
                ok: false,
                error: err
            });
        }
        else {
            resp.json({
                ok: true,
                // heroe
                heroe: heroe[0]
            });
        }
    });
});
exports.default = router;

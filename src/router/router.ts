import { Router, Request, Response } from 'express';
import MySQL from '../mysql/mysql';
// router: rutas

const router = Router();

router.get('/heroes', ( req: Request, resp: Response ) => {

  const query = `
    SELECT *
    FROM heroes    
  `;

  // llamar la instancia de la clase
  MySQL.ejecutarQuery( query, ( err: any, heroes: Object[] ) => {

    if ( err ) {
      resp.status(400).json({
        ok: false,
        error: err
      });
    } else {
      resp.json({
        ok: true,
        heroes
      });
      
    }
  });

} );

router.get('/heroes/:id', ( req: Request, resp: Response ) => {

  const id = req.params.id;

  // escaping query values. Evitar sql injection
  const escapedId = MySQL.instance.cnn.escape( id );
  const query = `
    SELECT *
    FROM heroes 
    WHERE id_heroes = ${escapedId}`;

  // llamar la instancia de la clase
  MySQL.ejecutarQuery( query, ( err: any, heroe: Object[] ) => {

    if ( err ) {
      resp.status(400).json({
        ok: false,
        error: err
      });
    } else {
      resp.json({
        ok: true,
        // heroe
        heroe: heroe[0]
      });
      
    }
  });

} );

export default router;
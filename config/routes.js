/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  //'/': { view: 'pages/homepage' },
  '/': { view: 'static/index' },


  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/
  'GET /producto/list': 'ProductosController.list',
  'GET /api/productos': 'ProductosController.get',
  'POST /api/productos': 'ProductosController.create',
  'PUT /api/productos/:id': 'ProductosController.update',
  'DELETE /api/productos/:id':'ProductosController.delete',
  'GET /api/carritos': 'CarritosController.get',
  'POST /api/carritos': 'CarritosController.create',
  'PUT /api/carritos/:id': 'CarritosController.update',
  'DELETE /api/carritos/:id':'CarritosController.delete',
  'GET /api/compras': 'ComprasController.get',
  'POST /api/compras': 'ComprasController.create',
  'PUT /api/compras/:id': 'ComprasController.update',
  'DELETE /api/compras/:id':'ComprasController.delete',
  'GET /api/champs': 'ChampsController.get',
  'POST /api/champs': 'ChampsController.create',
  'PUT /api/champs/:id': 'ChampsController.update',
  'DELETE /api/champs/:id':'ChampsController.delete',
};

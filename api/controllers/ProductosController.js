/**
 * ProductosController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  list:function(req, res){
    Producto.find({}).exec(function(err, producto){
      if(err){
        res.send(500, {error: 'Error con la base de datos'});        
      }
      res.view('producto/list', {producto:producto}); 
    });
  },

  
  /*list:function(req, res){
    res.view('list');
  },*/
  get:function(req,res){
  	Producto.find()
  		.then(function(producto){
  			if(!producto || producto.length === 0){
  				return res.send({
  					'success': false,
  					'message': 'No records found'
  				})
  			}

  			return res.send({
  				'success':true,
  				'message': 'Records fetched',
  				'data': producto
  			})
  		})
  		.catch(function(err){
  			sails.log.debug(err)
  			return res.send({
  				'success':false,
  				'message':'Unable to fetch records',
  			})
  		})
  },

  create:function(req,res){
    sails.log.debug(req.allParams())
    Producto.create(req.allParams())
      .then(function(producto){
        return res.send({
          'success':true,
          'message':'Record created successfully'
        })
      })
      .catch(function(err){
        sails.log.debug(err)
        return res.send({
          'success':false,
          'message': 'Unable to create record'
        })
      })
  },

  update:function(req,res){
    sails.log.debug(req.param('id'))

    Producto.update(req.param('id'), req.allParams())
      .then(function(producto){
        return res.send({
          'success':true,
          'message':'Record Update',
          'data': producto
        })
      })
      .catch(function(err){
        sails.log.debug(err)
        return res.send({
          'success': false,
          'message': 'Unable to update record'
        })
      })
  },

  delete:function(req,res){
    Producto.destroy(req.param('id'))
    .then(function(producto){
      return res.send({
        'success':true,
        'message':'Record deleted successfully',
        'data':producto
      })
    })
    .catch(function(err){
      sails.log.debug(err)
      return res.send({
        'success':false,
        'message': 'Unable to delete record'
      })
    })

  }

};


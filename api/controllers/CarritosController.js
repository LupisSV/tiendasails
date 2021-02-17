/**
 * CarritosController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
/*	list:function(req, res){
    Carrito.find({}).exec(function(err, producto){
      if(err){
        res.send(500, {error: 'Error con la base de datos'});        
      }
      res.view('carrito/carr', {producto:producto}); 
    });
  },	*/
   get:function(req,res){
  	Carrito.find()
  		.then(function(carrito){
  			if(!carrito || carrito.length === 0){
  				return res.send({
  					'success': false,
  					'message': 'No records found'
  				})
  			}

  			return res.send({
  				'success':true,
  				'message': 'Records fetched',
  				'data': carrito
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
    Carrito.create(req.allParams())
      .then(function(carrito){
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

    Carrito.update(req.param('id'), req.allParams())
      .then(function(carrito){
        return res.send({
          'success':true,
          'message':'Record Update',
          'data': carrito
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
    Carrito.destroy(req.param('id'))
    .then(function(carrito){
      return res.send({
        'success':true,
        'message':'Record deleted successfully',
        'data':carrito
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


/**
 * ComprasController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
	get:function(req,res){
  	Compra.find()
  		.then(function(compra){
  			if(!compra || compra.length === 0){
  				return res.send({
  					'success': false,
  					'message': 'No records found'
  				})
  			}

  			return res.send({
  				'success':true,
  				'message': 'Records fetched',
  				'data': compra
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
    Compra.create(req.allParams())
      .then(function(compra){
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

    Compra.update(req.param('id'), req.allParams())
      .then(function(compra){
        return res.send({
          'success':true,
          'message':'Record Update',
          'data': compra
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
    Compra.destroy(req.param('id'))
    .then(function(compra){
      return res.send({
        'success':true,
        'message':'Record deleted successfully',
        'data':compra
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


var express = require('express');
var router = express.Router();
const toshow = require('./toshow')
// Get Homepage
router.get('/', ensureAuthenticated, function(req, res){
	//这里面的data应该从配置文件里面读取的

	res.render('adaboost',{layout:"algorithms-layout-blank",data:toshow.alg_data,filename:"adaboost.json",img_path:"adaboost.png"});
});



function ensureAuthenticated(req, res, next){
	if(req.isAuthenticated()){
		return next();
	} else {
		req.flash('error_msg','You are not logged in');
		res.redirect('/users/login');
	}
}

module.exports = router;

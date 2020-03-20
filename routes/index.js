var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('layouts/index', { title: 'Nerdy T-Shirts | Begin' });
});

router.get('/start', function(req, res, next) {
  res.render('layouts/instructions', { title: 'Nerdy T-Shirts | Instructions' });
});

router.get('/help', function(req, res, next) {
  res.render('layouts/instructions', { title: 'Nerdy T-Shirts | Instructions' });
});

router.get('/generator', function(req, res, next) {
  res.render('layouts/makeshirt', { title: 'Nerdy T-Shirts | Generator' });
});

router.get('/preview', function(req, res, next) {
  res.render('layouts/endscreen', { title: 'Nerdy T-Shirts | Generator',  color: req.query.color, text: req.query.text, image: req.query.image, url:req.protocol + '://' + req.get('host') + req.originalUrl });
});


/* GET detail page. */
// router.get('/:stringparam', function(req, res, next) {
//   res.render('detail', { title: req.params.stringparam,
//   body: 'Dit is de body'});
// });

// router.get('/*', function(req, res, next) {
//   res.render('404', { title: req.params.stringparam,
//   body: 'Page not found!'});
// });





module.exports = router;

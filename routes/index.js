
/*
 * GET home page.
 */

exports.index = function(req, res){
    res.render('blog', { title: 'Test page from index' });
};

exports.blog = function(req, res){
  res.render('blog', { title: 'Test page' });
};
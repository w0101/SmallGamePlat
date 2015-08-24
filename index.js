var express = require('express');
var app = express();

app.set('views', './views');
app.set('view engine', 'jade');
app.use(express.static('bower_components'));
app.get('/',function(req,res) {
    res.render('index', {title:'首页', message:'Hello Word!'});
});

var server = app.listen(3000, function() {
    console.log('app start at port 3000');
})
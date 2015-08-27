var express = require('express');
var app = express();

app.set('views', './views');
app.set('view engine', 'jade');
app.use(require('less-middleware')(__dirname + '/public'));
app.use(express.static('bower_components'));
app.use(express.static('public'));
app.get('/',function(req,res) {
    res.render('index', {title:'首页', 
                        message:'Hello Word!',
                        user:{
                            name:'叮叮'
                        },
                        gameLists:[
                            {
                                id: 1,
                                name: '渺茫'
                            },
                            {
                                id: 2,
                                name: '那你慢慢'
                            },
                            {
                                id: 3,
                                name: 'xxx'
                            },
                            {
                                id: 4,
                                name: 'server'
                            }
                        ]
                    });
});

var server = app.listen(3000, function() {
    console.log('app start at port 3000');
})
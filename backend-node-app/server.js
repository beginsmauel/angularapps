
var express    = require('express');
var bodyParser = require('body-parser');
var app        = express();
var morgan     = require('morgan');
var cors = require('cors');

// CORS Configuration 
var whitelist = ['http://localhost:4200','http://localhost:8080'];
var corsOptions = {
  origin: function (origin, callback) {
	  console.log("nice");
	  console.log("testss" + origin);
	  callback(null,true);
    /* if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    } */
  }
}


app.use(morgan('dev')); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var port     = process.env.PORT || 8080;



// Mongo DB Connection 
var mongoose   = require('mongoose');
mongoose.connect('mongodb://localhost:27017/angularWS'); // connect to our database
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("DB connection alive");
});

// Blog - Model
var Blog     = require('./app/models/blog');


// Routes 
var router = express.Router();
router.use(cors(corsOptions),function(req, res, next) {
	console.log('I am here ');
	next();
});

router.get('/', cors(corsOptions),function(req, res) {
	res.json({ message: 'Testing Global Route' });	
});


router.route('/blogs')

	.post(cors(corsOptions),function(req, res) {
		
		var blog = new Blog();		// create a new instance of the Blog model
		blog.id = req.body.id;      // set the blogs post id (comes from the request)
		blog.title = req.body.title;
		blog.post =  req.body.post;

		blog.save(function(err) {
			if (err)
				res.send(err);

			res.json({ message: 'Blog created!' });
		});

		
	})

	
	.get(cors(corsOptions),function(req, res) {
		Blog.find(function(err, blogs) {
			console.log(blogs);
			if (err)
				res.send(err);

			res.json(blogs);
		});
	});


// ----------------------------------------------------
router.route('/blogs/:blog_id')

	// get the blog with that id
	.get(cors(corsOptions),function(req, res) {
		Blog.findById(req.params.blog_id, function(err, blog) {
			if (err)
				res.send(err);
			res.json(blog);
		});
	})

	// update the blog with this id
	.put(cors(corsOptions),function(req, res) {
		Blog.findById(req.params.blog_id, function(err, blog) {

			if (err)
				res.send(err);

			blog.title = req.body.title;
			blog.save(function(err) {
				if (err)
					res.send(err);

				res.json({ message: 'Blog updated!' });
			});

		});
	})

	// delete the blog with this id
	.delete(cors(corsOptions),function(req, res) {
		Blog.remove({
			_id: req.params.blog_id
		}, function(err, blog) {
			if (err)
				res.send(err);

			res.json({ message: 'Blog post Successfully deleted' });
		});
	});


// REGISTER OUR ROUTES -------------------------------
app.use('/api', router);

app.listen(port);
console.log('Back-end API - Started' + port);

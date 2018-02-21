//var express = require('express');
//var router = express.Router();

/* GET home page. */

exports.home = function(req,res){
res.render('home');};

exports.notFound =function(req,res){
res,send("There is no such a page in that url");};

//module.exports = router;

exports.createSchool = function(req,res,next){
   try{
        var reqObj = req.body;        
        console.log(reqObj);
        req.getConnection(function(err, conn){
        if(err)
          {
            console.error('SQL Connection error: ', err);
            return next(err);
          }
      else
       {
         var insertSql = "INSERT INTO School SET ?";
         var insertValues = 
		    {
              "Centre_no" : reqObj.Centre_no,
              "name" : reqObj.name
            };
         var query = conn.query(insertSql, insertValues, function (err, result){
         if(err){
              console.error('SQL error: ', err);
              return next(err);
           }
		   // need to check it
		   console.log(result);
          var Centre_no = result.insertId;
          res.json({"Centre_no":Centre_no});
         });
       }
   });
  }
 catch(ex){
     console.error("Internal error:"+ex);
     return next(ex);
  }
};

exports.twentyfourteen = function(req,res,next){
   try{
        var reqObj = req.body;        
        console.log(reqObj);
        req.getConnection(function(err, conn){
        if(err)
          {
            console.error('SQL Connection error: ', err);
            return next(err);
          }
      else
       {
         var insertSql = "INSERT INTO Year2014 SET ?";
         var insertValues = 
		    {
              "Centre_no" : reqObj.Centre_no,
              "wrote" : reqObj.wrote_2014,
			  "passed" : reqObj.passed
            };
         var query = conn.query(insertSql, insertValues, function (err, result){
         if(err){
              console.error('SQL error: ', err);
              return next(err);
           }
		   // need to check it
		   console.log(result);
          var Centre_no = result.insertId;
          res.json({"Centre_no":Centre_no});
         });
       }
   });
  }
 catch(ex){
     console.error("Internal error:"+ex);
     return next(ex);
  }
};

exports.twentyfifteen = function(req,res,next){
   try{
        var reqObj = req.body;        
        console.log(reqObj);
        req.getConnection(function(err, conn){
        if(err)
          {
            console.error('SQL Connection error: ', err);
            return next(err);
          }
      else
       {
         var insertSql = "INSERT INTO Year2015 SET ?";
         var insertValues = 
		    {
              "Centre_no" : reqObj.Centre_no,
              "wrote" : reqObj.wrote_2015,
			  "passed" : reqObj.passed
            };
         var query = conn.query(insertSql, insertValues, function (err, result){
         if(err){
              console.error('SQL error: ', err);
              return next(err);
           }
		   // need to check it
		   console.log(result);
          var Centre_no = result.insertId;
          res.json({"Centre_no":Centre_no});
         });
       }
   });
  }
 catch(ex){
     console.error("Internal error:"+ex);
     return next(ex);
  }
};

exports.twentysixteen = function(req,res,next){
   try{
        var reqObj = req.body;        
        console.log(reqObj);
        req.getConnection(function(err, conn){
        if(err)
          {
            console.error('SQL Connection error: ', err);
            return next(err);
          }
      else
       {
         var insertSql = "INSERT INTO Year2016 SET ?";
         var insertValues = 
		    {
              "Centre_no" : reqObj.Centre_no,
              "wrote" : reqObj.wrote_2016,
			  "passed" : reqObj.passed
            };
         var query = conn.query(insertSql, insertValues, function (err, result){
         if(err){
              console.error('SQL error: ', err);
              return next(err);
           }
		   // need to check it
		   console.log(result);
          var Centre_no = result.insertId;
          res.json({"Centre_no":Centre_no});
         });
       }
   });
  }
 catch(ex){
     console.error("Internal error:"+ex);
     return next(ex);
  }
};
exports.getSchool = function(req, res, next) {
    try {
            var Centre_no = req.param('Centre_no');
                  //var deptId = req.param('deptId');
                  /*var query = url.parse(req.url,true).query;
                  console.log(query);
        var roleId = query.roleId;
        var deptId = query.deptId;*/
        console.log(Centre_no);
        //console.log(deptId);
        req.getConnection(function(err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return next(err);
            } else {
                conn.query('SELECT * FROM School WHERE Centre_no = ?', [Centre_no], function(err, rows, fields) {
                    if (err) {
                        console.error('SQL error: ', err);
                        return next(err);
                    }
                    var resEmp = [];
                    for (var empIndex in rows) {
                        var empObj = rows[empIndex];
                        resEmp .push(empObj);
                    }
                    res.json(resEmp);
                });
            }
        });
    } catch (ex) {
        console.error("Internal error:" + ex);
        return next(ex);
    }
};


exports.gettwentyforteen = function(req, res, next) {
    try {
            
        req.getConnection(function(err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return next(err);
            } else {
                conn.query('SELECT SUM(wrote) AS Total, SUM(passed) AS Pass, SUM(wrote)-SUM(passed) AS Failed FROM Year2014', function(err, rows, fields) {
                    if (err) {
                        console.error('SQL error: ', err);
                        return next(err);
                    }
                    var resEmp = [];
                    for (var empIndex in rows) {
                        var empObj = rows[empIndex];
                        resEmp .push(empObj);
                    }
                    res.json(resEmp);
                });
            }
        });
    } catch (ex) {
        console.error("Internal error:" + ex);
        return next(ex);
    }
};
exports.gettwentysxteen = function(req, res, next) {
    try {
            
        req.getConnection(function(err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return next(err);
            } else {
                conn.query('SELECT SUM(wrote) AS Total, SUM(passed) AS Pass, SUM(wrote)-SUM(passed) AS Failed FROM Year2016', function(err, rows, fields) {
                    if (err) {
                        console.error('SQL error: ', err);
                        return next(err);
                    }
                    var resEmp = [];
                    for (var empIndex in rows) {
                        var empObj = rows[empIndex];
                        resEmp .push(empObj);
                    }
                    res.json(resEmp);
                });
            }
        });
    } catch (ex) {
        console.error("Internal error:" + ex);
        return next(ex);
    }
};

exports.gettwentyfifteen = function(req, res, next) {
    try {
            
        req.getConnection(function(err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return next(err);
            } else {
                conn.query('SELECT SUM(wrote) AS Total, SUM(passed) AS Pass, SUM(wrote)-SUM(passed) AS Failed FROM Year2015', function(err, rows, fields) {
                    if (err) {
                        console.error('SQL error: ', err);
                        return next(err);
                    }
                    var resEmp = [];
                    for (var empIndex in rows) {
                        var empObj = rows[empIndex];
                        resEmp .push(empObj);
                    }
                    res.json(resEmp);
                });
            }
        });
    } catch (ex) {
        console.error("Internal error:" + ex);
        return next(ex);
    }
};




//router.get('/', function(req, res, next) {
//  res.render('index', { title: 'Express' });
//});

//module.exports = router;

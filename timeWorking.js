const date=new Date();
const day=date.getUTCDay();
const hours=date.getUTCHours()

var timeWorking = function (req, res, next) {
    if (day!=0 && day!=6){
         next()
        } else {

            res.status(400).sendFile(__dirname + "/notWorking.html")
        }
   
        
   
  };
  
  module.exports=timeWorking;
  


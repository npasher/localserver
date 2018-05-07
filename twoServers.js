const http=require("http");

http.createServer(function(request,response){
  response.end("Server One Operational! Path Hit:"+request.url);  
}).listen(8080,function(){
  console.log("Server One listening on http://localhost:8080");
});

http.createServer(function(request,response){
  response.end("Server Two Operational! Path Hit:"+request.url);
}).listen(8081,function(){
  console.log("Server Two listening on http://localhost:8081");
});
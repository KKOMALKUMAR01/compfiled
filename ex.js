var http=require('http')
http.createServer(
    function(request,response){
       response.writeHead(200,{'content-type':'text/html'});
       response.write("<h1>Server is created successfully...</h1>");
       response.write("<table border=15>");
       response.write("<tr>Roll no</td><td>Name</td><td>Location</td>");
       response.write("<tr>221</td><td>Mamatha</td><td>Karimnagar</td>");
       response.write("<tr>204</td><td>Indhu</td><td>Miriyalaguda</td>");
       response.write("<tr>205</td><td>Nithishma</td><td>Nizamabads</td>");
       response.end();
       console.log("Server Started Successfully...")
    }).listen(7069)
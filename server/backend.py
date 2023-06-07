    # router.
    # post('/insert',(req,res) =>{


    #     jsondata = req.body;
    #     description = jsondata['description'];
    #     distance = jsondata['distance'];
    #     hours = jsondata['hours'];
    #     minutes = jsondata['minutes'];
    #     seconds = jsondata['seconds'];
    
    
    #     conn.query('INSERT INTO run (description, distance, hours, minutes, seconds) VALUES (?,?,?,?,?)', [description,distance,hours,minutes,seconds], (err) =>{
    #         if(err)
    #         res.send(err)
    #         if(!err)
    #         res.send("Insert succeded.")
    #         
    #     })
    # })
const allTodos = async(req,res,pool)=>{
    try{
        //select is already a return, so we don't need to use returning *
        const allTodos = await pool.query("SELECT * FROM todo");
        res.json(allTodos.rows);
    }catch(error){
        console.error(error.message); 
    }
}

module.exports=allTodos;

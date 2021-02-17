const deleteTodo = async(req,res,pool)=>{
    try{
      const {id} = req.params; 
      const deleteTdodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [id]);
      res.json('Todo was deleted');  
    }catch(error){
        console.error(error.message);
    }
  }

  module.exports = deleteTodo; 
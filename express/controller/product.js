exports.getcontroller=(req, res, next) => {
    res.send('<form action="/admin/product" method="POST"><input type="text" name="title"/> <button>submit</button></form>');
    
  }
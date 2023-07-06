import { query } from "../../../../database/connection.js";

export const getAllProducts=(req,res)=>{
  query.execute(`SELECT *FROM products`,(err,data)=>{
    if(err){
      return res.json({message:"Error",err});
    }
    return res.json({message:"Done!",data});
  })
};

export const addProduct=(req,res)=>{
  let {name}=req.body;
  query.execute(`SELECT * FROM products WHERE name='${name}'`,(err,data)=>{
    if (err){return res.json({message:"Error!",err});}
    if(data && data.length>0){res.json({message:"Product Already Exist!"})}
    else{
      let{name,description,price,userId}=req.body;
      query.execute(`INSERT INTO products (name,price,description,userId) Values ('${name}','${price}','${description}',${userId})`,(err,data)=>{
        if(err){
          res.json({message:"Error!",err});
        }else{
          res.json({message:"Done!",data});
        }
      })
    }
  })
};

export const deleteProduct = (req,res)=>{
  let{id,userId}=req.body;
  query.execute(`SELECT * FROM products WHERE id = ${id} AND userId = ${userId}`,(err,data)=>{
    if(err){return res.json({message:"Error!",err});}
    if (!data || data.length === 0){return res.json({message:'You are not authorized to delete this product'});}
    else{
      let{id}=req.body;
      query.execute(`DELETE FROM products WHERE id=${id}`,(err,data)=>{
        if(err){
          return res.json({message:"ERROR!",err});
        }else{
          return res.json({message:"Done!",data});
        }
      })
    }
  })
};

export const updateProduct=(req,res)=>{
  let{userId}=req.body;
  query.execute(`SELECT * FROM products WHERE userId=${userId}`,(err,data)=>{
    if(err){
      return res.json({message:"ERROR!",err});
    }
    if(!data){
      return res.json({message:"You are not authorized to update this product!"});
    }
    else{
      let {id,name,price,description}=req.body;
      query.execute(`UPDATE products SET name='${name}',price='${price}',description='${description}' WHERE id=${id}`,(err,data)=>{
        if(err){
          return res.json({message:"ERROR!",err});
        }
          return res.json({message:"Done!",data});
      })
    }
  })
};

export const getProductById=(req,res)=>{
  let {id}=req.params;
  query.execute(`SELECT * FROM products WHERE id=${id}`,(err,data)=>{
    if(err){
      return res.json({message:"ERROR!",err});
    }
    if(data.length==0){
      return res.json({message:"Product Not Found!"});
    }
    else{
      return res.json({message:"Done!",data});
    }
  })
};

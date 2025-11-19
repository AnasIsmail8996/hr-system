import customerModels from "../models/customerModels.js";


const createCustomer= async(req, res)=>{
    try {

        const { name, email, phone, billingAddress, shippingAddress}=req.body;
                
           if (!name) {
      return res.status(400).json({ success: false, message: "Name is required" });
    }


    const newCustomer = await customerModels.create({
      name,
      email,
      phone,
      billingAddress,
      shippingAddress
    });

     res.status(201).json({ success: true, data: newCustomer });

    } catch (error) {
           res.status(500).json({ success: false, message: error.message });
        }
    }



const getAllCustomer=async(req, res)=>{
    try {
        const customer = await customerModels.find()
         res.status(200).json({ success: true, message : "All Customer fetch successFull", data : customer});
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
        
    }
}


const   getSingleCustomer= async(req , res)=>{
    
    try {
        
        const findCustomer= await customerModels.findById(req.params.id)
        if (!findCustomer) return res.status(404).json({ success: false, message: "Customer not found" });
         res.status(200).json({ success: true, data: findCustomer });      
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
        
    }
}


const updateCustomer=async(req , res)=>{
    try {
        const id= req.params.id
        const body= req.body;
        const update= await customerModels.findByIdAndUpdate(id, body )
    if (!update)
      return res.status(404).json({ success: false, message: "Customer not found" });

    res.status(200).json({ success: true,  message : "user updated successfully " ,  data: update });
           
    } catch (error) {
         res.status(500).json({ success: false, message: error.message });
        }
    }


const deleteCustomer= async(req , res)=>{
    try {

        const deleteCus= await customerModels.findByIdAndDelete(req.params.id)
            if (!deleteCus)
      return res.status(404).json({ success: false, message: "Customer not found" });

    res.status(200).json({ success: true, message: "Customer deleted successfully" });
        
    } catch (error) {
        
    res.status(500).json({ success: false, message: error.message });
    }
}


export{ createCustomer, getAllCustomer, getSingleCustomer, updateCustomer, deleteCustomer}
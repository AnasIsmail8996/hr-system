
import React from "react";
import imageIcon from "../../components/images/Vector.png"
import {
  EyeInvisibleOutlined,
  SaveOutlined,
  SendOutlined,
} from "@ant-design/icons";

const AdminCrateQuotation = () => {

    const products = [
    { sNo: 1, name: "Gas Torch", qty: "60 pcs", price: 40.0, discount: "6%", tax: "2%" },
    { sNo: 2, name: "Scrapers", qty: "45 pcs", price: 25.0, discount: "8%", tax: "2%" },
    { sNo: 3, name: "Sealand Guns", qty: "30 pcs", price: 50.0, discount: "5%", tax: "3%" },
    { sNo: 4, name: "Heat Gun", qty: "80 pcs", price: 60.0, discount: "9%", tax: "4%" },
    { sNo: 5, name: "Mixing Paddles", qty: "15 pcs", price: 15.0, discount: "8%", tax: "2%" },
  ];
  return (
    <div className="p-6">
      {/* Header Row */}
      <div className="flex flex-row justify-between items-center  mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">New Invoice</h1>

        <div className="flex gap-3">
          
         
          <button className="group flex items-center gap-2 px-4 py-2 rounded-lg bg-[#F9F9F9] text-black hover:bg-[#1C2730] transition">
            
      
            <EyeInvisibleOutlined className="group-hover:text-white" />
            
     
            <span className="group-hover:text-white">Hide Preview</span>
          </button>

        
          <button className="group flex items-center gap-2 px-4 py-2 rounded-lg bg-[#F9F9F9] text-black hover:bg-[#1C2730] transition">
            <SaveOutlined className="group-hover:text-white" />
            <span className="group-hover:text-white">Save as Draft</span>
          </button>

   
          <button className="group flex items-center gap-2 px-4 py-4 rounded-lg bg-[#F9F9F9] text-black hover:bg-[#1C2730] transition">
            <SendOutlined className="group-hover:text-white" />
            <span className="group-hover:text-white">Send Invoice</span>
          </button>
          





        </div>
      </div>


      <form >
  
<div className="flex flex-row justify-center items-center gap-10 w-full">

  {/* left side */}
  <div className="w-1/2 p-4 bg-[#C2C2C21F] rounded-lg shadow-md flex flex-col gap-35">
    <div className="flex flex-row justify-evenly items-center gap-4 py-4">

      <button className="px-4 py-2 border border-[#007AFF] text-[#007AFF] bg-white rounded-lg hover:bg-[#007AFF] hover:text-white transition">
        Customer Details
      </button>

      <button className="px-4 py-2 border border-[#007AFF] text-[#007AFF] bg-white rounded-lg hover:bg-[#007AFF] hover:text-white transition">
        Order Source
      </button>

      <button className="px-4 py-2 border border-[#007AFF] text-[#007AFF] bg-white rounded-lg hover:bg-[#007AFF] hover:text-white transition">
        Add Product
      </button>

      <button className="px-4 py-2 border border-[#007AFF] text-[#007AFF] bg-white rounded-lg hover:bg-[#007AFF] hover:text-white transition">
        Price Summary
      </button>

    </div>

<div className="flex flex-row justify-evenly items-start gap-6 mt-0">


  <div className="flex flex-col gap-1 ">
    <label htmlFor="subtotal" className="text-gray-700 font-medium">
     Total Tax Applied
    </label>

    <input
      type="text"
      placeholder="add calculated"
      className="w-[244px] h-[42px] bg-[#F9F9F9] border border-[#C7C7C7] rounded-[8px] px-8 text-gray-700 outline-none"
    />
  </div>


  <div className="flex flex-col gap-1">
    <label htmlFor="total-discount-applied" className="text-gray-700 font-medium">
    Grand Total
    </label>

    <input
      type="text"
      placeholder="add calculated"
      className="w-[244px] h-[42px] bg-[#F9F9F9] border border-[#C7C7C7] rounded-[8px] px-8 text-gray-700 outline-none"
    />
  </div>

</div>
<div className="flex flex-row justify-evenly items-start gap-2 ">


  <div className="flex flex-col gap-1">
    <label htmlFor="subtotal" className="text-gray-700 font-medium">
      Sub Total
    </label>

    <input
      type="text"
      placeholder="add calculated"
      className="w-[244px] h-[42px] bg-[#F9F9F9] border border-[#C7C7C7] rounded-[8px] px-8 text-gray-700 outline-none"
    />
  </div>


  <div className="flex flex-col gap-1">
    <label htmlFor="total-discount-applied" className="text-gray-700 font-medium">
      Total Discount Applied
    </label>

    <input
      type="text"
      placeholder="add calculated"
      className="w-[244px] h-[42px] bg-[#F9F9F9] border border-[#C7C7C7] rounded-[8px] px-8 text-gray-700 outline-none"
    />
  </div>

</div>


<div className="flex flex-row justify-between items-center gap-0 mt-4">

  {/* Submit Button */}
  <button
    className="bg-[#1C2730] text-white px-15 py-5 rounded-lg transition font-medium
               hover:bg-[#1C2730] hover:text-white"
  >
    Submit
  </button>

  {/* Preview Button */}
  <button
    className="px-15 py-5  rounded-lg border border-[#1C2730] text-[#1C2730] bg-white 
               transition font-medium
               hover:bg-[#1C2730] hover:text-white"
  >
    Preview
  </button>

</div>

  </div>

  {/* right side */}


<div className="w-1/2 p-4 bg-[#C2C2C21F] rounded-lg shadow-md flex flex-col gap-6">

  {/* Header / Invoice Info */}
  <div className="flex flex-row justify-between items-start gap-4">

    {/* Left Section */}
    <div className="w-1/2 flex flex-col gap-2 text-gray-700">
      <img
        src={imageIcon}
        alt="logo"
        className="w-14 h-14 mb-3 object-contain"
      />
      <p className="text-sm"><span className="font-semibold">Invoice Number:</span> INV-04568</p>
      <p className="text-sm"><span className="font-semibold">Date Issued:</span> Nov 01, 2025</p>
      <p className="text-sm"><span className="font-semibold">Due Date:</span> Nov 10, 2025</p>
      <p className="text-sm">07526</p>
    </div>

    {/* Right Section */}
    <div className="w-1/2 flex flex-col gap-1 text-gray-700 text-right">
      <p className="text-sm">19th Street, Mckinney Walker</p>
      <p className="text-sm">Jaddah</p>
      <p className="text-sm">+1-0281-856-6521</p>
      <p className="text-sm font-semibold">Thomas Shelby</p>
      <p className="text-sm">thomasshelby@gmil.com</p>
      <p className="text-sm">Houston, Texas</p>
      <p className="text-sm">77002</p>
    </div>

  </div>

  {/* Project Description */}
  <div className="flex flex-col gap-2">
    <h6 className="font-fustat font-semibold text-[14px] leading-[100%] tracking-[0%]">
      Project Description :
    </h6>
    <p className="font-fustat text-[14px] leading-[100%] tracking-[0%] text-gray-700">
      Add a brief and concise description of the project, item, or service here.
    </p>
    <p className="font-fustat text-[14px] leading-[100%] tracking-[0%] text-gray-700">
      Product Details
    </p>
  </div>

 <div className="overflow-x-auto p-4 bg-gray-50">
      <table className="min-w-full border-collapse">
        {/* Table Header */}
        <thead>
          <tr className="bg-[#007AFF] text-white">
            <th className="px-0 py-0 rounded-full">
              <button className="bg-[#007AFF] px-0 py-0 rounded-full text-white font-semibold">
                S.No
              </button>
            </th>
            <th className="px-0 py-0 rounded-full">
              <button className="bg-[#007AFF] px-0 py-0 rounded-full text-white font-semibold">
                Product Name
              </button>
            </th>
            <th className="px-0 py-0 rounded-full">
              <button className="bg-[#007AFF] px-0 py-0 rounded-full text-white font-semibold">
                Qunt
              </button>
            </th>
            <th className="px-0 py-0 rounded-full">
              <button className="bg-[#007AFF] px-0 py-0 rounded-full text-white font-semibold">
                Unit <br /> Price
              </button>
            </th>
            <th className="px-0 py-0 rounded-full">
              <button className="bg-[#007AFF] px-0 py-0 rounded-full text-white font-semibold">
                Dis <br /> %
              </button>
            </th>
            <th className="px-2 py-2 m-2 rounded-full">
              <button className="bg-[#007AFF] px-3 py-1 rounded-full text-white font-semibold">
                Tax %
              </button>
            </th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {products.map((product) => (
            <tr
              key={product.sNo}
              className="bg-white hover:bg-gray-100 transition"
            >
              <td className="border rounded-full px-4 py-2 text-center">{product.sNo}</td>
              <td className="border rounded-full px-4 py-2">{product.name}</td>
              <td className="border px-4 py-2 text-center">{product.qty}</td>
              <td className="border px-4 py-2 text-right">{product.price.toFixed(2)}$</td>
              <td className="border px-4 py-2 text-center">{product.discount}</td>
              <td className="border px-4 py-2 text-center">{product.tax}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>


<div className="flex flex-col gap-4 p-4 bg-white rounded-lg shadow-md">
  {/* Terms & Conditions */}
  <div className="flex flex-col gap-2">
    <h6 className="text-gray-800 font-semibold text-sm">Terms & Conditions :</h6>
    <p className="text-gray-600 text-sm">
      Above information is not an invoice and only an estimate of goods/services. Payment will be due prior to provision or delivery of goods/services.
    </p>
    <h6 className="text-gray-800 font-semibold text-sm mt-2">
      Please Confirm Your Acceptance Of This Quote
    </h6>
  </div>

  {/* Signature */}
  <div className="flex flex-col items-end gap-1 mt-4">
    <div className="w-[190px] border-t-2 border-gray-400 opacity-100"></div>
    <h6 className="text-gray-700 text-sm font-bold mt-1">Authorized Signature</h6>
  </div>
</div>


</div>




</div>





      </form>
    </div>
  );
};

export default AdminCrateQuotation;






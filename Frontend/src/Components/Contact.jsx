import { useFormik } from 'formik'
import React from 'react'
import { enqueueSnackbar } from 'notistack';
import img2 from '../Images/img2.png'


const Contact = () => {
    const ContactForm=useFormik({
        initialValues:{
            name:"",
            email:"",
            subject:"",
            message:"",
            },
           
        onSubmit: async (values, { setSubmitting }) => {
            console.log(values);
      
            const res = await fetch('http://localhost:5000/contact/add', {
              method: 'POST',
              body: JSON.stringify(values),
              headers: {
                'content-Type': 'application/json'
              }
            });
      
            setSubmitting(false)
            console.log(res.status);
      
            if (res.status == 200) {
              enqueueSnackbar('Successfull ', { variant: 'success' });
              
  
            } else if (res.status == 401) {
              enqueueSnackbar('Invalid ', { variant: 'error' });
             
            } else {
              enqueueSnackbar('Something went wrong', { variant: 'error' });
      
            }
      
      
      
          },
    });

  return (
    <div className=''>
        <header style={{backgroundImage: `url(${img2})`,}} className='contact-header  text-white'>
            <div className='py-5'>
                <h1 className='text-center text-3xl font-semibold text-emerald-300'>Contact Us</h1>
                <h1 className='text-center text-6xl font-bold '>Get in touch with us</h1>

                <h1 className='text-center text-lg mt-3 '>
              
                    Get in touch with us for any inquiries or support. We're here to assist you  with <br /> investing, trading, and more.
                </h1>
            </div>
        </header>
        <div className="row p-3">
            <div className="col-md-6">
               <div className=''>
               <div className=' card p-3 shadow-2xl border-emerald-400 '>
                    <h1 className='text-4xl font-bold text-center underline'>Contact Us</h1>
                    <form onSubmit={ContactForm.handleSubmit} className='mt-5'>
                        <div className="mb-4">
                            <input type="text" className=" border w-100 p-3 " id="name" placeholder='Enter Name' required onChange={ContactForm.handleChange} value={ContactForm.values.name} />
                        </div>
                        <div className="mb-4">
                            <input type="email" className="border w-100 p-3" id="email" placeholder='Enter Email' required  onChange={ContactForm.handleChange} value={ContactForm.values.email} />
                        </div>
                        <div className="mb-4">
                            <input type="subject" className="border w-100 p-3" id="subject" placeholder='Subject'  onChange={ContactForm.handleChange} value={ContactForm.values.subject} />
                        </div>
                        <div className="mb-4">
                            <textarea className="border w-100 p-3 " id="message" rows="5" placeholder='Message.....'  onChange={ContactForm.handleChange} value={ContactForm.values.message}></textarea>
                        </div>
                        <button type="submit" className="bg-purple-400 w-100 p-3 text-white font-bold">Submit</button>
                    </form>
                </div>
               </div>
            </div>
            <div className="col-md-6   ">
                <div className='border-emerald-400 card shadow p-3'>
                <h1 className='text-3xl text-emerald-400 font-semibold underline'>Get in Touch</h1>
                <div className="row py-12 ">
                    <div className="col-md-6 ">
                        <div className='mb-5'>
                        <svg className='mx-auto mb-3' xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#50C878"><path d="M220-180h150v-250h220v250h150v-390L480-765 220-570v390Zm-60 60v-480l320-240 320 240v480H530v-250H430v250H160Zm320-353Z"/></svg>
                            <h1 className='text-2xl font-semibold text-center'>Address</h1>
                        </div>
                        
                    </div>
                    <div className="col-md-6">
                        <div className=''>
                        <svg className='mx-auto mb-3' xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#50C878"><path d="M140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H140Zm340-302L140-685v465h680v-465L480-462Zm0-60 336-218H145l335 218ZM140-685v-55 520-465Z"/></svg>
                            <h1 className='text-2xl font-semibold text-center'>Mail Us</h1>
                        </div>
                        
                    </div>
                    <div className="col-md-6">
                        <div className=''>
                        <svg className='mx-auto mb-3' xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#50C878"><path d="M795-120q-116 0-236.5-56T335-335Q232-438 176-558.5T120-795q0-19.29 12.86-32.14Q145.71-840 165-840h140q14 0 24 10t14 25l26.93 125.64Q372-665 369.5-653.5t-10.73 19.73L259-533q26 44 55 82t64 72q37 38 78 69.5t86 55.5l95-98q10-11 23.15-15 13.15-4 25.85-2l119 26q15 4 25 16.04 10 12.05 10 26.96v135q0 19.29-12.86 32.14Q814.29-120 795-120ZM229-588l81-82-23-110H180q2 42 13.5 88.5T229-588Zm369 363q41 19 89 31t93 14v-107l-103-21-79 83ZM229-588Zm369 363Z"/></svg>
                            <h1 className='text-2xl font-semibold text-center'>Mobile No</h1>
                        </div>
                        
                    </div>
                    <div className="col-md-6">
                        <div className=''>
                        <svg className='mx-auto mb-3' xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#50C878"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-43-61v-82q-35 0-59-26t-24-61v-44L149-559q-5 20-7 39.5t-2 39.5q0 130 84.5 227T437-141Zm294-108q22-24 38.5-51t28-56.5q11.5-29.5 17-60.5t5.5-63q0-106-58-192.5T607-799v18q0 35-24 61t-59 26h-87v87q0 17-13.5 28T393-568h-83v88h258q17 0 28 13t11 30v127h43q29 0 51 17t30 44Z"/></svg>
                            <h1 className='text-2xl font-semibold text-center'>Social Media</h1>
                        </div>
                        
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact
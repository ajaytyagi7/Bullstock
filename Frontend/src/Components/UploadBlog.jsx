import React,{useState, useEffect} from 'react'
import MDEditor from '@uiw/react-md-editor';
import { useFormik } from 'formik'
import { enqueueSnackbar } from 'notistack'


const UploadBlog = () => {
    const [desc, setDesc] = React.useState(''); 

    const [selFile, setSelFile] = useState('');
    
    const BlogForm = useFormik({
        initialValues: {
            title: '',
            date: '',
            details:'',
            description:'',
            catagory:'',


        },

        onSubmit: async (value) => {
            value.details = desc;
            value.image = selFile;
            console.log(value)
            const res = await fetch(`${import.meta.env.VITE_API_URL}/blog/add`, {
                method: 'POST',
                body: JSON.stringify(value),
                headers: {
                    'Content-type': 'application/json'
                }
            });

            const data = await res.json();
            if (res.status == 200) {
                enqueueSnackbar(' Blog Post Successfully', { variant: 'success' })
            } else if (res.status == 401) {
                enqueueSnackbar('Invalid Post ', { variant: 'error' })
            } else {
                enqueueSnackbar('Something went wrong', { variant: 'error' })
            }
        }


       
    });
    
    

    const uploadFile = (e) => {
        const file = e.target.files[0];
        setSelFile(file.name);
        const fd = new FormData();
        fd.append("myfile", file);
        fetch(`${import.meta.env.VITE_API_URL}/util/uploadfile`, {
            method: "POST",
            body: fd,
        }).then((res) => {
            if (res.status === 200) {
                console.log("file uploads");
            }
        });
    };
  return (
    <div className=''>
        <div className=''>
            <div className="col-md-10 mx-auto py-3  ">
                <div className="card p-3">
                    <div className="card-body">
                        <h1 className=' text-4xl font-bold text-center mb-2'>Blog</h1><hr />
                        <form onSubmit={BlogForm.handleSubmit} >
                        <select className='form-control mt-4 mb-3 p-3' id='catagory' onChange={BlogForm.handleChange} value={BlogForm.values.catagory} >
                            <option>
                                Trading Analysis
                            </option>
                            <option>
                                Stock Analysis
                            </option>
                           
                        </select>
                        <input type="text" className='form-control mb-3   p-3' id='title' placeholder='Enter Title..' onChange={BlogForm.handleChange} value={BlogForm.values.title}  />
                        <input type="date" className='form-control mb-3 p-3' placeholder='Enter Date' id='date'  onChange={BlogForm.handleChange} value={BlogForm.values.date} />
                        <input type="text" className='form-control mb-3 p-3' placeholder='Enter description' id='description'  onChange={BlogForm.handleChange} value={BlogForm.values.description} />
                        
                        <label className='text-xl font-semibold' htmlFor="">Enter Details</label>
                        <MDEditor
                            value={desc}
                            onChange={setDesc}
                            plzceholder='Enter detalis'
                            className='bg-white text-black mt-3 mb-3'
                         />
                        <input type="file" className='form-control mb-3 p-3' id='image' onChange={uploadFile} />
                         <button className='p-3 bg-purple-400 w-100 mt-3 text-white font-semibold'>Submit</button>



                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UploadBlog
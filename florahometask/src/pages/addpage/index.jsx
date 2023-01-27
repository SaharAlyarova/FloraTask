import React from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import {Helmet} from "react-helmet"
const SignupSchema = Yup.object().shape({
    imgUrl: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    price: Yup.number()
    .min(0, 'Too Short!')
    .max(5000000000, 'Too Long!')
    .required('Required'),
});
const AddPage = () => {
  return (
    <div>
           <Helmet>
                <meta charSet="utf-8" />
                <title>My Add Page</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
 <Formik
       initialValues={{
        imgUrl : '',
        name: '',
        price: '',
       }}
       validationSchema={SignupSchema}
       onSubmit={(values, {resetForm}) => {
         // same shape as initial values
         console.log(values);
         axios.post("http://localhost:8080/floraRow",values)
         resetForm()
       }}
     >
       {({ errors, touched }) => (
       <div style={{color:"green",padding:"30px", backgroundColor:"#25705C",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:'column'}}>
          <Form style={{display:"flex",alignItems:"center",justifyContent:"center", flexDirection:"column"}}>
           <Field name="imgUrl" className={errors.imgUrl && touched.imgUrl ? "border-red" : null} placeholder='Img Url...'/><br></br>
           {errors.imgUrl && touched.imgUrl ? (
             <div className='add'>{errors.imgUrl}</div>
           ) : null}<br></br>
           <Field name="name" className={errors.name && touched.name ? "border-red" : null} placeholder='Name...'/><br></br>
           {errors.name && touched.name ? (
             <div className='add'>{errors.name}</div>
           ) : null}<br></br>
           <Field name="price" className={errors.price && touched.price ? "border-red" : null} placeholder='Price...'/><br></br>
           {errors.price && touched.price ? <div className='add'>{errors.price}</div> : null}<br></br>
           <button type="submit" style={{color:"#25705C", backgroundColor:"#D8E3D5" ,padding:"15px 25px", border:"0"}}>Post</button>
         </Form>
       </div>
       )}
     </Formik>
    </div>
  )
}

export default AddPage
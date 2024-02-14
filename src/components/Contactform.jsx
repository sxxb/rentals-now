import { useFormik } from "formik";
import Data from './Data'

const validate = values => {
    const errors = {};

    if (!values.name) {
      errors.name = 'Required';
    } 
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    if (!values.mobile) {
        errors.mobile = 'Required';
    } 
    if (!values.product) {
    errors.product = 'Required';
    }   
    if (!values.duration) {
        errors.duration = 'Required - How long are you looking to rent this product for?';
    } 
    if (!values.startdate) {
        errors.startdate = 'Required - When do you want to begin your rental period? If you do not have a specific date, please select the earliest date you would prefer.';
    } else if (values.startdate < new Date().toISOString().substring(0,10)) {
        errors.startdate = 'Your rental period cannot start in the past.'
    }
    if (!values.query) {
        errors.query = 'Required';
    }        
    return errors;
  };

export default function ContactForm({product}) {
    const formik = useFormik({
        initialValues: {
            name: "",
            business: "",
            email: "",
            mobile: "",
            product: "",
            duration: "",
            startdate: "",
            query: ""
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        }
    });
    return (
        <form onSubmit={formik.handleSubmit} className="contact-form">
            <fieldset>
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" onChange={formik.handleChange} value={formik.values.name} onBlur={formik.handleBlur} required />
                <div className="error-placeholder">
                    {formik.touched.name && formik.errors.name ? <>{formik.errors.name}</> : null}
                </div>
            </fieldset>
            <fieldset>
                <label htmlFor="business">Business</label>
                <input id="business" name="business" type="text" onChange={formik.handleChange} value={formik.values.business} onBlur={formik.handleBlur}/>
                <div className="error-placeholder"></div>
            </fieldset>
            <fieldset>
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur} required />
                <div className="error-placeholder">
                    {formik.touched.email && formik.errors.email ? <>{formik.errors.email}</> : null}
                </div>
            </fieldset>
            <fieldset>
                <label htmlFor="mobile">Mobile</label>
                <input id="mobile" name="mobile" type="tel" onChange={formik.handleChange} value={formik.values.mobile} onBlur={formik.handleBlur} required />
                <div className="error-placeholder">
                    {formik.touched.mobile && formik.touched.name && formik.errors.mobile ? <>{formik.errors.mobile}</> : null}
                </div>
            </fieldset>
            <fieldset>
                <label htmlFor="product">Product</label>
                <select id="product" name="product" type="text" onChange={formik.handleChange} value={product ? product : formik.values.product} onBlur={formik.handleBlur}>
                    <option value="">Select Your Product</option>
                        {Data.map(product => (
                            <option key={product.name} value={product.name}>{product.name}</option>
                        ))}
                </select>
                <div className="error-placeholder">
                    {formik.touched.product && formik.errors.product ? <>{formik.errors.product}</> : null}
                </div>
            </fieldset>
            <fieldset>
                <label htmlFor="duration">Rental Period</label>
                <select id="duration" name="duration" onChange={formik.handleChange} value={formik.values.duration} onBlur={formik.handleBlur} required>
                    <option value="">Please Select</option>
                    <option value="Daily">Daily</option>
                    <option value="Weekly">Weekly</option>
                    <option value="Fortnightly">Fortnightly</option>
                    <option value="Monthly">Monthly</option>
                </select>
                <div className="error-placeholder">
                    {formik.touched.duration && formik.errors.duration ? <>{formik.errors.duration}</> : null}
                </div>
            </fieldset>
            <fieldset>
                <label htmlFor="startdate">Start Date</label>
                <input id="startdate" name="startdate" type="date" min={new Date().toISOString().substring(0,10)} onChange={formik.handleChange} value={formik.values.startdate} onBlur={formik.handleBlur} required />
                <div className="error-placeholder">
                    {formik.touched.startdate && formik.errors.startdate ? <>{formik.errors.startdate}</> : null}
                </div>
            </fieldset>
            <fieldset>
                <label htmlFor="query">What can we do for you?</label>
                <textarea id="query" name="query" type="text" onChange={formik.handleChange} value={formik.values.query} onBlur={formik.handleBlur} required />
                <div className="error-placeholder">
                {formik.touched.query && formik.errors.query ? <>{formik.errors.query}</> : null}
                </div>
            </fieldset>            
            <button className="button-link" type="submit">Submit</button>
        </form>
    )
}
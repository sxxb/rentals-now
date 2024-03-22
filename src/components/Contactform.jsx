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
    if (!values.startdate) {
        errors.startdate = 'Required - When do you want to begin your rental period? If you do not have a specific date, please select the earliest date you would prefer.';
    } else if (values.startdate < new Date().toISOString().substring(0,10)) {
        errors.startdate = 'Your rental period cannot start in the past.'
    }
    if (!values.enddate) {
        errors.enddate = 'Required - When do you want to end your rental period? If you are unsure, select an approximate date that reflects the length of your rental period'
    }
    if (!values.collection) {
        errors.collection = 'Required - Do you want your tester to be delivered, or do you want to collect it from our Adelaide office?'
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
            addressStreet: "",
            addressSuburb: "",
            addressState: "",
            addressPostCode: "",
            email: "",
            mobile: "",
            product: "",
            startdate: "",
            enddate: "",
            collection: "",
            
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
                <label htmlFor="addressStreet">Street Address</label>
                <input id="addressStreet" name="addressStreet" type="text" onChange={formik.handleChange} value={formik.values.addressStreet} onBlur={formik.handleBlur} required/>
                <div className="error-placeholder"></div>
            </fieldset>
            <fieldset>
                <label htmlFor="addressSuburb">Suburb</label>
                <input id="addressSuburb" name="addressSuburb" type="text" onChange={formik.handleChange} value={formik.values.address} onBlur={formik.handleBlur} required/>
                <div className="error-placeholder"></div>
            </fieldset>
            <fieldset>
                <label htmlFor="addressState">State</label>
                <input id="addressState" name="addressState" type="text" onChange={formik.handleChange} value={formik.values.addressState} onBlur={formik.handleBlur} required/>
                <div className="error-placeholder"></div>
            </fieldset>
            <fieldset>
                <label htmlFor="addressPostCode">Post Code</label>
                <input id="addressPostCode" name="addressPostCode" type="text" onChange={formik.handleChange} value={formik.values.addressPostCode} onBlur={formik.handleBlur} required/>
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
                <label htmlFor="startdate">Start Date</label>
                <input id="startdate" name="startdate" type="date" min={formik.values.startdate} onChange={formik.handleChange} value={formik.values.startdate} onBlur={formik.handleBlur} required />
                <div className="error-placeholder">
                    {formik.touched.startdate && formik.errors.startdate ? <>{formik.errors.startdate}</> : null}
                </div>
            </fieldset>
            <fieldset>
                <label htmlFor="enddate">End Date</label>
                <input id="enddate" name="enddate" type="date" min={new Date().toISOString().substring(0,10)} onChange={formik.handleChange} value={formik.values.enddate} onBlur={formik.handleBlur} required />
                <div className="error-placeholder">
                    {formik.touched.enddate && formik.errors.enddate ? <>{formik.errors.enddate}</> : null}
                </div>
            </fieldset>
            <fieldset>
                <label htmlFor="collection">Delivery Method</label>
                <select name="collection" id="collection" onChange={formik.handleChange} value={formik.values.collection} onBlur={formik.handleBlur} required>
                    <option value="">Select Delivery Method</option>
                    <option value="Delivery">Delivery</option>
                    <option value="Pickup">Pickup From Adelaide Office</option>
                </select>
                <div className="error-placeholder">
                    {formik.touched.collection && formik.errors.collection ? <>{formik.errors.collection}</> : null}
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
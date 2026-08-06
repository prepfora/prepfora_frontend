// import { useFormik } from "formik";
import { useFormik } from "formik"; 

const useContact = () => { 

    const formik = useFormik({
        initialValues: {

        },
        // validationSchema: validationAppointmentSchema,
        onSubmit: () => { 

        },
    }); 

    return { 
        formik,
    };
};

export default useContact;

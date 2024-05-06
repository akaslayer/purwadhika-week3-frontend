import { Field, Form, Formik, FormikProps } from "formik"
import * as Yup from 'yup'
import NavBar from "../components/NavBar"
import { useNavigate } from "react-router-dom"
import { useUserContext } from "../context/UserContext"
import { useState } from "react"



interface MyFormValues {
  email: string,
  password: string,
  name: string
}


const RegisterSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address format')
    .required('email is required'),
  password: Yup.string()
    .required('password is required')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One symbol"
    ),
  name: Yup.string()
    .required("name is required")
    .min(8, "name must be minimal 8 characters")
})


const Register = () => {
  const initialValues: MyFormValues = {
    email: "", password: "", name: ""
  }
  const { isSubmit } = useUserContext()
  const [show, setShow] = useState(false);

  const navigate = useNavigate()

  const postData = async ({ name, email, password }: MyFormValues) => {

    try {
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password })
      };

      const response = await fetch('http://localhost:3000/user-data', requestOptions);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      isSubmit(true)
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <>
      <NavBar />
      <div className="w-1/2 m-auto md:w-1/4">
        <div className="bg-green-200 flex flex-col justify-center m-auto mt-20 gap-9 p-6 rounded-md">
          <h1 className="font-bold text-3xl">Page Register</h1>
          <Formik initialValues={initialValues}
            validationSchema={RegisterSchema}
            onSubmit={(values) => {
              postData(values)
            }}>
            {(props: FormikProps<MyFormValues>) => {
              const { values, errors, touched, handleChange } = props;
              return (
                <Form className="gap-3 flex flex-col">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="font-semibold">Name </label>
                    <Field
                      type="name"
                      name="name"
                      onChange={handleChange}
                      value={values.name}
                      className="rounded-md p-2"

                    />
                    {touched.name && errors.name ? (
                      <div style={{ color: "red" }}>{errors.name}</div>
                    ) : null}
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="font-semibold">Email </label>
                    <Field
                      type="email"
                      name="email"
                      onChange={handleChange}
                      value={values.email}
                      className="rounded-md p-2"
                    />
                    {touched.email && errors.email ? (
                      <div style={{ color: "red" }}>{errors.email}</div>
                    ) : null}
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="password" className="font-semibold">Password </label>
                    <div className="relative items-center w-full">
                      <Field
                        type={show ? 'text' : "password"}
                        name="password"
                        onChange={handleChange}
                        value={values.password}
                        className="rounded-md p-2 w-full"
                      />
                      {touched.password && errors.password ? (
                        <div style={{ color: "red" }}>{errors.password}</div>
                      ) : null}
                      <h2 className="absolute right-2 top-0 text-sm translate-y-1/2" onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</h2>
                    </div>
                  </div>
                  <button type="submit" className="p-1 bg-white w-1/3 m-auto mt-5 font-bold">Submit</button>
                </Form>
              )
            }}

          </Formik>
        </div>
      </div>
    </>
  )
}

export default Register
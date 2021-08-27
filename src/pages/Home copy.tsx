import React  from 'react'
import { Field, Formik } from 'formik'
import * as Yup from 'yup'
import {
  Alert,
  Button,
  Form,
  Label,
  TextInput,
  ValidationChecklist,
  ValidationItem
} from '@trussworks/react-uswds'

import Neo4j from "../components/Neo4j"

// type FormValues = {
//   email?: string
//   password?: string
//   fruit?: string
// }

const FormSchema = Yup.object().shape({
  firstName: Yup.string().min(1).max(20).required()
})


const HomePage = (): React.ReactElement => {

  return (
    <>
      <h1>Retrieve Contact List</h1>
      <section>
        <h2>Covid-19 Positive</h2>
        <Formik
          initialValues={{
            firstName: ''
          }}
          validationSchema={FormSchema}
          onSubmit={(values, { setSubmitting }) => {
            console.log('Submit form data:', values);
            
            setTimeout(() => {
              console.log('Submit complete!')
              setSubmitting(false)
            }, 400)
          }}>
          {({
            values,
            errors,
            touched,
            handleSubmit,
            isSubmitting,
            setFieldValue,
          }) => (
            <Form onSubmit={handleSubmit}>
              <div>
                <span>Input Data </span>
                <pre>{JSON.stringify(values)}</pre>
              </div>

              {touched.firstName && errors.firstName && (
                <Alert type="info" validation heading="FirstName Requirements">
                  <ValidationChecklist id="validate-password">
                    <ValidationItem
                      id="required"
                      isValid={values.firstName.length > 0}>
                      Include required field.
                    </ValidationItem>
                    <ValidationItem id="length" isValid={!errors.firstName}>
                      Length is between 1-20 characters
                    </ValidationItem>
                  </ValidationChecklist>
                </Alert>
              )}
              <Label htmlFor="firstName">First Name</Label>
              <Field
                as={TextInput}
                type="text"
                name="firstName"
                id="firstName"
                value={values.firstName}
              />

              <Button type="submit" disabled={isSubmitting}>
                Submit
              </Button>
            </Form>
          )}
        </Formik>
        {/* <Neo4j /> */}
      </section>
    </>
  )
}

export default HomePage


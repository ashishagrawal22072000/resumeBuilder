import React, { useState } from 'react'
import Personal from './Personal'
import Education from './Education'
import Project from './Project'
import Experience from './Experience'
import Extra from './Extra'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Success from './Success'
import PDF from './PDF'

function Form() {
  const navigate = useNavigate()
  const [page, setPage] = useState(0)
  const [formData, setFormData] = useState({
    Personal: {
      fullName: 'ashish',
      email: 'ashish@gmail.com',
      phone: '9999999999',
      address: '5A-5B, Fusion Square',
      state: 'Uttar Pradesh',
      city: 'Noida',
      pincode: '281303',
      link: 'www.ashish.com',
      linkedIn: 'www.ashish.linkedIn.com',
      profile: '',
      objective:
        'Hi, my name is Ashish and Seeking a position as an accountant where extensive experience will be further developed and utilised. Extensive experience to the credit.',
    },
    Education: [
      {
        course: 'Btech',
        institute: 'GLA University',
        start: 'August 2018',
        end: 'july 2022',
        marks: '70.20',
      },
    ],
    Project: [
      {
        title: 'e-commerce website',
        link: 'www.ecomm.com',
        start: '1 August 2022',
        end: '1 october 2022',
        description:
          'Ecommerce web application is a full-stack MERN development project.In this project users can purchase the product by using stripe or razor pay as a payment method.  The administrator creates products and visualizes the order data and also manages users data.',
      },
    ],
    Experience: [
      {
        organization: 'ValueCoders',
        position: 'Associate Software Developer',
        duration: '9 months',
        description:
          'Hi, my name is Ashish and Seeking a position as an accountant where extensive experience will be further developed and utilised.Extensive experience to the credit.',
      },
    ],

    Skill: [
      {
        skill: '',
        rating: '',
      },
    ],
    Interest: 'frontend, backend, database',
    Achievement: 'Hi my name is ashish. i am working in valuecoders',
  })

  const FormTitles = ['Personal', 'Education', 'Project', 'Experience', 'Extra']

  const handleSubmit = async () => {
    if (page === FormTitles.length - 1) {
      const res = await fetch('/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      const response = await res.json()
      console.log('contact data', response)

      if (res.status === 400 || !response) {
      } else {
        navigate('/success', { replace: true })
      }
    } else {
      setPage((currPage) => currPage + 1)
    }
  }

  const PageDisplay = () => {
    if (page === 0) {
      return <Personal formData={formData} setFormData={setFormData} />
    } else if (page === 1) {
      return <Education formData={formData} setFormData={setFormData} />
    } else if (page === 2) {
      return <Project formData={formData} setFormData={setFormData} />
    } else if (page === 3) {
      return <Experience formData={formData} setFormData={setFormData} />
    } else {
      return <Extra formData={formData} setFormData={setFormData} />
    }
  }

  const submit = (e) => {
    e.preventDefault()
    handleSubmit()
  }
  console.log(
    page,
    FormTitles.length - 1,
    (page * 100) / (FormTitles.length - 1) + '%',
  )
  console.log(FormTitles.length)
  return (
    <>
      <div className="form">
        <div class="progress">
          <div
            class="progress-bar"
            role="progressbar"
            style={{
              width: (page * 100) / 4 + '%',
            }}
          ></div>
        </div>

        <div className="body">
          <form onSubmit={submit} className="forms">
            {PageDisplay()}

            <div className="btns">
              <button
                className="btn"
                type="button"
                disabled={page == 0}
                onClick={() => {
                  setPage((currPage) => currPage - 1)
                }}
              >
                Prev
              </button>
              <button className="btn" type="submit">
                {page === FormTitles.length - 1 ? 'Submit' : 'Next'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Form

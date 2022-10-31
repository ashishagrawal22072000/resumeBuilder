import React from 'react'
import Achievement from './Achievement'
import Interest from './Interest'
import Skills from './Skills'

export default function Extra({ formData, setFormData }) {
  console.log(formData)

  return (
    <div>
      <section>
        <div className="head">
          <h3 className="heading">Extra Details</h3>
        </div>
        <Achievement formData={formData} setFormData={setFormData} />
        <br />
        <Skills formData={formData} setFormData={setFormData} />
        <br />
        <Interest formData={formData} setFormData={setFormData} />
      </section>
    </div>
  )
}

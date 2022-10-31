import React from 'react'

export default function Interest({ formData, setFormData }) {
  const handleChangeInterest = (e) => {
    setFormData({ ...formData, Interest: e.target.value })
  }
  return (
    <div>
      <section>
        <h5>Interest </h5>

        <div className="row">
          <div class="col-md-6 col-sm-12">
            <div className="extra">
              <textarea
                class="extinp"
                id="title"
                value={formData.Interest}
                style={{ minHeight: '100px', minWidth: '300px' }}
                onChange={(e) => handleChangeInterest(e)}
                name="interest"
                placeHolder="Eg. Frontend, Backend"
                required
              ></textarea>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

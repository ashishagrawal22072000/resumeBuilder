import React from 'react'

export default function Achievement({ formData, setFormData }) {
  const handleChangeachievement = (e) => {
    setFormData({ ...formData, Achievement: e.target.value })
  }
  return (
    <div>
      <section>
        <h5 className="">Achievements </h5>

        <div className="row">
          <div class="col-md-6 col-sm-12">
            <div className="extra">
              <textarea
                style={{ minHeight: '100px', minWidth: '300px' }}
                class="extinp"
                id="title"
                value={formData.Achievement}
                onChange={(e) => handleChangeachievement(e)}
                name="achievement"
                placeHolder="Eg. Certificate. another certificate"
                required
              ></textarea>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

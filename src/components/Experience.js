import React from 'react'

export default function Experience({
  formData,
  setFormData,
  FormTitles,
  page,
  setPage,
}) {
  console.log(formData)

  const handleAdd = (e) => {
    e.preventDefault()
    if (formData.Experience.length < 3) {
      setFormData({
        ...formData,
        Experience: [
          ...formData.Experience,
          {
            organization: '',
            position: '',
            duration: '',
            description: '',
          },
        ],
      })
    }
  }
  const handleRemove = (e, i) => {
    e.preventDefault()

    if (i > 0) {
      const value = [...formData.Experience]
      value.splice(i, 1)
      setFormData({ ...formData, Experience: value })
    }
  }

  const handleChange = (e, i) => {
    console.log(i)

    const value = [...formData.Experience]
    console.log(value[i])
    value[i][e.target.name] = e.target.value
    setFormData({ ...formData, Experience: value })
  }

  return (
    <div>
      <section>
        <div className="head">
          <h3 className="heading">
            Experience Details{' '}
            <span>
              <button
                className="bbtn"
                onClick={(e) => handleAdd(e)}
                disabled={formData?.Experience?.length > 3}
              >
                +
              </button>
            </span>
          </h3>
        </div>
        <br />
        {formData.Experience.map((ele, i) => {
          return (
            <>
              <div className="row">
                <div className="col-12  ">
                  <label for="organisation" class="label">
                    Organisation Name
                  </label>
                  <input
                    type="text"
                    class="input"
                    id="organisation"
                    value={ele.organization}
                    onChange={(e) => handleChange(e, i)}
                    name="organization"
                    required
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 col-sm-12  ">
                  <label for="position" class="label">
                    Position
                  </label>
                  <input
                    type="text"
                    class="input"
                    id="position"
                    value={ele.position}
                    onChange={(e) => handleChange(e, i)}
                    name="position"
                    required
                  />
                </div>
                <div className="col-md-6 col-sm-12  ">
                  <label for="duration" class="label">
                    Duration
                  </label>
                  <input
                    type="text"
                    class="input"
                    id="duration"
                    value={ele.duration}
                    onChange={(e) => handleChange(e, i)}
                    name="duration"
                    required
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <label for="desc" class="label">
                    Description
                  </label>
                  <textarea
                    rows="5"
                    type="text"
                    class="input"
                    id="desc"
                    value={ele.description}
                    onChange={(e) => handleChange(e, i)}
                    name="description"
                    required
                  />
                </div>
              </div>

              {i > 0 && (
                <button className="bbtn" onClick={(e) => handleRemove(e, i)}>
                  -
                </button>
              )}
              <br />
            </>
          )
        })}
      </section>
    </div>
  )
}

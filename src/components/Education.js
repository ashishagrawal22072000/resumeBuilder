import React from 'react'

export default function Education({
  formData,
  setFormData,
  FormTitles,
  page,
  setPage,
}) {
  console.log(formData)

  const handleAdd = (e) => {
    e.preventDefault()
    if (formData.Education.length < 3) {
      setFormData({
        ...formData,
        Education: [
          ...formData.Education,
          {
            course: '',
            institute: '',
            start: '',
            end: '',
            marks: '',
          },
        ],
      })
    }
  }
  const handleRemove = (e, i) => {
    e.preventDefault()

    if (i > 0) {
      const value = [...formData.Education]
      value.splice(i, 1)
      setFormData({ ...formData, Education: value })
    }
  }

  const handleChange = (e, i) => {
    const value = [...formData.Education]
    console.log(value[i])
    value[i][e.target.name] = e.target.value
    setFormData({ ...formData, Education: value })
  }

  return (
    <div>
      <section>
        <div className="head">
          <h3 className="heading">
            Education Details
            <span>
              <button
                className="bbtn"
                onClick={(e) => handleAdd(e)}
                disabled={formData?.Education?.length > 3}
              >
                +
              </button>
            </span>
          </h3>
        </div>
        <br />
        {formData.Education.map((ele, i) => {
          return (
            <>
              <div className="row">
                <div className="col-md-6 col-sm-12  ">
                  <label for="course" class="label">
                    Course Name
                  </label>
                  <input
                    type="text"
                    class="input"
                    id="course"
                    value={ele.course}
                    onChange={(e) => handleChange(e, i)}
                    name="course"
                    required
                  />
                </div>
                <div className="col-md-6 col-sm-12  ">
                  <label for="institute" class="label">
                    Institution Name
                  </label>
                  <input
                    type="institute"
                    class="input"
                    id="institute"
                    value={ele.institute}
                    onChange={(e) => handleChange(e, i)}
                    name="institute"
                    required
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 col-sm-12  ">
                  <label for="start" class="label">
                    Start Date
                  </label>
                  <input
                    type="text"
                    class="input"
                    id="start"
                    value={ele.start}
                    onChange={(e) => handleChange(e, i)}
                    name="start"
                    required
                  />
                </div>
                <div className="col-md-6 col-sm-12  ">
                  <label for="end" class="label">
                    End Date
                  </label>
                  <input
                    type="end"
                    class="input"
                    id="end"
                    value={ele.end}
                    onChange={(e) => handleChange(e, i)}
                    name="end"
                    required
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-12  ">
                  <label for="marks" class="label">
                    Percentage
                  </label>
                  <input
                    type="text"
                    class="input"
                    id="marks"
                    value={ele.marks}
                    onChange={(e) => handleChange(e, i)}
                    name="marks"
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

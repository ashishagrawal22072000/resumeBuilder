import React from 'react'

export default function Project({ formData, setFormData }) {
  console.log(formData)

  const handleAdd = (e) => {
    e.preventDefault()
    if (formData.Project.length < 3) {
      setFormData({
        ...formData,
        Project: [
          ...formData.Project,
          {
            title: '',
            link: '',
            start: '',
            end: '',
            description: '',
          },
        ],
      })
    }
  }
  const handleRemove = (e, i) => {
    e.preventDefault()

    if (i > 0) {
      const value = [...formData.Project]
      value.splice(i, 1)
      setFormData({ ...formData, Project: value })
    }
  }

  const handleChange = (e, i) => {
    console.log(i)

    const value = [...formData.Project]
    console.log(value[i])
    value[i][e.target.name] = e.target.value
    setFormData({ ...formData, Project: value })
  }

  return (
    <div>
      <section>
        <div className="head">
          <h3 className="heading">
            Project Details
            <span>
              <button
                className="bbtn"
                onClick={(e) => handleAdd(e)}
                disabled={formData?.Project?.length > 3}
              >
                +
              </button>
            </span>
          </h3>
        </div>
        <br />
        {formData.Project.map((ele, i) => {
          return (
            <>
              <div className="row">
                <div className="col-md-6 col-sm-12  ">
                  <label for="title" class="label">
                    Title
                  </label>
                  <input
                    type="text"
                    class="input"
                    id="title"
                    value={ele.title}
                    onChange={(e) => handleChange(e, i)}
                    name="title"
                    required
                  />
                </div>
                <div className="col-md-6 col-sm-12  ">
                  <label for="link" class="label">
                    Link
                  </label>
                  <input
                    type="link"
                    class="input"
                    id="link"
                    value={ele.link}
                    onChange={(e) => handleChange(e, i)}
                    name="link"
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

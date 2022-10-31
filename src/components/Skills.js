import React from 'react'
import ReactStars from 'react-stars'
export default function Skills({ formData, setFormData }) {
  const handleChangeSkill = (e) => {
    setFormData({ ...formData, Skill: e.target.value })
  }

  const SkillsName = [
    'HTML',
    'CSS',
    'ReactJs',
    'NextJs',
    'ViewJs',
    'NodeJs',
    'ExpressJs',
    'MongoDB',
  ]

  const ratingChanged = (e, i) => {
    const value = [...formData.Skill]
    console.log(value[i])
    value[i].rating = e
    setFormData({ ...formData, Skill: value })
  }

  const handleRemove = (e, i) => {
    e.preventDefault()

    if (i > 0) {
      const value = [...formData.Skill]
      value.splice(i, 1)
      setFormData({ ...formData, Skill: value })
    }
  }

  const handleAdd = (e) => {
    e.preventDefault()
    if (formData.Skill.length < 3) {
      setFormData({
        ...formData,
        Skill: [
          ...formData.Skill,
          {
            skill: '',
            rating: '',
          },
        ],
      })
    }
  }

  const handleChange = (e, i) => {
    const value = [...formData.Skill]
    console.log(value[i])
    value[i].skill = e.target.value
    setFormData({ ...formData, Skill: value })
  }

  return (
    <div>
      <section>
        <div className="head">
          <h3 className="heading">
            Skills
            <span>
              <button
                className="bbtn"
                onClick={(e) => handleAdd(e)}
                disabled={formData?.Skill?.length > 3}
              >
                +
              </button>
            </span>
          </h3>
        </div>
        <br />
        {formData.Skill.map((ele, i) => {
          return (
            <>
              <div className="row">
                <div class="col-md-12 col-sm-12">
                  <div
                    className="extra"
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    {/* <textarea
                class="extinp"
                id="title"
                value={formData.Skill}
                style={{ minHeight: '100px', minWidth: '300px' }}
                onChange={(e) => handleChangeSkill(e)}
                name="skill"
                placeHolder="Eg. Frontend, Backend"
                required
              ></textarea> */}
                    <select onChange={(e) => handleChange(e, i)}>
                      <option>Select Skill</option>
                      {SkillsName.map((ele) => {
                        return (
                          <>
                            <option value={ele}>{ele}</option>
                          </>
                        )
                      })}
                    </select>
                    <ReactStars
                      count={5}
                      onChange={(e) => ratingChanged(e, i)}
                      // size={24}
                      // color2={'#000'}
                    />
                  </div>
                </div>
              </div>
              {i > 0 && (
                <button className="bbtn" onClick={(e) => handleRemove(e, i)}>
                  -
                </button>
              )}
            </>
          )
        })}
      </section>
    </div>
  )
}

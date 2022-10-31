import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
function Personal({ formData, setFormData }) {
  const handleChange = (e) => {
    setFormData({
      ...formData,
      Personal: {
        ...formData.Personal,
        [e.target.name]: e.target.value,
      },
    })
  }
  console.log(formData)
  return (
    <>
      <section>
        <h3 className="heading">Personal Details</h3>
        <br />
        <div className="row">
          <div className="col-md-6 col-sm-12  ">
            <label for="fullname" class="label">
              Full Name
            </label>
            <input
              type="text"
              class="input"
              id="fullname"
              value={formData.Personal.fullName}
              onChange={handleChange}
              name="fullName"
              required
            />
          </div>
          <div className="col-md-6 col-sm-12  ">
            <label for="email" class="label">
              Email Address
            </label>
            <input
              type="email"
              class="input"
              id="email"
              value={formData.Personal.email}
              onChange={handleChange}
              name="email"
              required
            />
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <label for="address" class="label">
              Address
            </label>
            <input
              type="text"
              class="input"
              id="address"
              value={formData.Personal.address}
              onChange={handleChange}
              name="address"
              required
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 col-sm-12  ">
            <label for="city" class="label">
              city
            </label>
            <input
              type="text"
              class="input"
              id="city"
              value={formData.Personal.city}
              onChange={handleChange}
              name="city"
              required
            />
          </div>
          <div className="col-md-6 col-sm-12  ">
            <label for="state" class="label">
              state
            </label>
            <input
              type="text"
              class="input"
              id="state"
              value={formData.Personal.state}
              onChange={handleChange}
              name="state"
              required
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 col-sm-12  ">
            <label for="phone" class="label">
              Phone number
            </label>
            <input
              type="text"
              class="input"
              id="phone"
              value={formData.Personal.phone}
              onChange={handleChange}
              name="phone"
              maxLength={10}
              required
            />
          </div>
          <div className="col-md-6 col-sm-12  ">
            <label for="pincode" class="label">
              pincode
            </label>
            <input
              type="text"
              class="input"
              id="pincode"
              value={formData.Personal.pincode}
              onChange={handleChange}
              name="pincode"
              maxLength={6}
              required
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 col-sm-12  ">
            <label for="personal" class="label">
              personal / github link
            </label>
            <input
              type="text"
              class="input"
              id="personal"
              value={formData.Personal.link}
              onChange={handleChange}
              name="link"
              required
            />
          </div>
          <div className="col-md-6 col-sm-12  ">
            <label for="linkedin" class="label">
              Linkedin
            </label>
            <input
              type="text"
              class="input"
              id="linkedin"
              value={formData.Personal.linkedIn}
              onChange={handleChange}
              name="linkedIn"
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <label for="objective" class="label">
              Tell Something about yourself
            </label>
            <textarea
              class="input"
              id="objective"
              value={formData.Personal.objective}
              onChange={handleChange}
              name="objective"
              required
            ></textarea>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            {/* <textarea
              class="input"
              id="objective"
              value={formData.Personal.objective}
              onChange={handleChange}
              name="objective"
              required
            ></textarea> */}
            <input
              type="file"
              onChange={(e) => {
                setFormData({ ...formData, profile: e.target.files[0] })
              }}
              name="profile"
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default Personal

import React, { useRef } from 'react'
import { AiOutlineMail, AiFillPhone, AiFillLinkedin } from 'react-icons/ai'
import { GrLocation } from 'react-icons/gr'
import { BsGlobe } from 'react-icons/bs'
import { TiTick } from 'react-icons/ti'
import { Link } from 'react-router-dom'
import ReactStars from 'react-stars'
import { useReactToPrint } from 'react-to-print'
import StarRatings from 'react-star-ratings'
export default function Format2({ data }) {
  const componentRef = useRef()

  return (
    <>
      <div style={{ padding: '10px', border: '2px solid gray', zoom: 0.4 }}>
        <main>
          {data.map((ele) => {
            return (
              <>
                <section
                  style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                  <div>
                    <h3
                      style={{ color: 'orange', textTransform: 'capitalize' }}
                    >
                      {ele.Personal.fullName}
                    </h3>
                    <h5>{ele.Personal.tagline}</h5>
                  </div>
                  <div className="row">
                    <div className="col-12 col-md-12">
                      <p style={{ marginBottom: 0 }}>
                        {' '}
                        <AiOutlineMail />
                        {ele.Personal.email}
                      </p>
                      <p style={{ marginBottom: 0 }}>
                        <AiFillPhone />
                        (+91){ele.Personal.phone}
                      </p>
                      <p style={{ marginBottom: 0 }}>
                        <Link to={ele.Personal.link}>
                          <BsGlobe />
                          {ele.Personal.link}
                        </Link>
                      </p>
                      <p style={{ marginBottom: 0 }}>
                        <Link to={ele.Personal.linkedIn}>
                          <AiFillLinkedin />
                          {ele.Personal.linkedIn}
                        </Link>
                      </p>
                      <div style={{ display: 'flex' }}>
                        <GrLocation />
                        <address>
                          <p style={{ marginBottom: 0 }}>
                            {ele.Personal.address}
                          </p>
                          <p style={{ marginBottom: 0 }}>
                            {ele.Personal.state}, ({ele.Personal.pincode})
                          </p>
                        </address>
                      </div>
                    </div>
                  </div>
                </section>
                <hr />
                <section>
                  <div className="row">
                    <div className="col-2 col-md-3 col-sm-4">
                      <h5 style={{ color: 'orange' }}>Summery : </h5>
                    </div>
                    <div className="col-10 col-md-9 col-sm-8">
                      {ele.Personal.objective}
                    </div>
                  </div>
                </section>
                <hr />
                <section>
                  <div className="row ">
                    <div className="col-2 col-md-3 col-sm-4">
                      <h5 style={{ color: 'orange' }}>Education: </h5>
                    </div>
                    <div class="col-10 col-md-9 timeline col-sm-8">
                      <ul>
                        {ele.Education.map((el) => {
                          return (
                            <>
                              <li>
                                <div className="col-10 col-md-12">
                                  <h5>
                                    {el.institute}
                                    <span style={{ fontWeight: 400 }}>
                                      ({el.start} - {el.end})
                                    </span>
                                  </h5>
                                  <p style={{ marginBottom: 0 }}>{el.course}</p>
                                  <p style={{ marginBottom: 0 }}>{el.marks}%</p>
                                </div>
                              </li>
                            </>
                          )
                        })}
                      </ul>
                    </div>
                  </div>
                </section>
                <hr />
                <section>
                  <div className="row ">
                    <div className="col-2 col-md-3">
                      <h5 style={{ color: 'orange' }}>Experience: </h5>
                    </div>
                    <div class=" col-10 col-md-9 timeline">
                      <ul>
                        {ele.Experience.map((el) => {
                          return (
                            <>
                              <li>
                                <div className="col-10 col-md-12">
                                  <h5>{el.organization}</h5>
                                  <p>{el.position}</p>

                                  {el.description.split('.').map((e) => {
                                    return (
                                      <>
                                        {e && (
                                          <>
                                            <p style={{ marginBottom: 0 }}>
                                              <TiTick />
                                              {e}.
                                            </p>
                                          </>
                                        )}
                                      </>
                                    )
                                  })}
                                </div>
                              </li>
                            </>
                          )
                        })}
                      </ul>
                    </div>
                  </div>
                </section>
                <hr />
                <section>
                  <div className="row ">
                    <div className="col-2 col-md-3">
                      <h5 style={{ color: 'orange' }}>Projects: </h5>
                    </div>
                    <div class=" col-10 col-md-9 timeline">
                      <ul>
                        {ele.Project.map((el) => {
                          return (
                            <>
                              <li>
                                <div className="col-10 col-md-12">
                                  <h5>{el.title}</h5>
                                  <p>
                                    <a href={el.link}>{el.link}</a>
                                  </p>

                                  {el.description.split('.').map((e) => {
                                    return (
                                      <>
                                        {e && (
                                          <>
                                            <p>
                                              <TiTick />
                                              {e}.
                                            </p>
                                          </>
                                        )}
                                      </>
                                    )
                                  })}
                                </div>
                              </li>
                            </>
                          )
                        })}
                      </ul>
                    </div>
                  </div>
                </section>
                <hr />

                <section>
                  <div className="row ">
                    <div className="col-2 col-md-3">
                      <h5 style={{ color: 'orange' }}>Skills: </h5>
                    </div>
                    <div class=" col-10 col-md-9 timeline">
                      <ul>
                        {ele.Skill.map((el) => {
                          return (
                            <>
                              <li>
                                <div
                                  className="col-10 col-md-12"
                                  style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                  }}
                                >
                                  <h5>{el.skill}</h5>
                                  {/* <StarRatings
                                    rating={el.rating}
                                    starDimension="40px"
                                    starSpacing="0px"
                                  /> */}
                                  <ReactStars
                                    count={5}
                                    value={el.rating}
                                    edit={false}
                                    // onChange={(e) => ratingChanged(e, i)}
                                    // size={24}
                                    // color2={'#000'}
                                  />
                                </div>
                              </li>
                            </>
                          )
                        })}
                      </ul>
                    </div>
                  </div>
                </section>
                <hr />
                <section>
                  <div className="row ">
                    <div className="col-2 col-md-3">
                      <h5 style={{ color: 'orange' }}>Interests: </h5>
                    </div>
                    <div class="col-10 timeline col-md-9">
                      <div className="row">
                        {ele.Interest.split(',').map((el, i) => {
                          return (
                            <>
                              {el && (
                                <>
                                  <div className="col-md-2 col-sm-3">
                                    <p>
                                      {el.trim().charAt(0).toUpperCase() +
                                        el.trim().slice(1)}
                                    </p>
                                  </div>
                                </>
                              )}
                            </>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </section>
                <hr />
                <section>
                  <div className="row ">
                    <div className="col-2 col-md-3">
                      <h5 style={{ color: 'orange' }}>Achievements: </h5>
                    </div>
                    <div className="col-md-9">
                      {ele.Achievement.split('.').map((el, i) => {
                        return (
                          <>
                            {el && (
                              <>
                                <div className="col-md-12">
                                  <p>
                                    <TiTick />
                                    {el}.
                                  </p>
                                </div>
                              </>
                            )}
                          </>
                        )
                      })}
                    </div>
                  </div>
                </section>
              </>
            )
          })}
        </main>
      </div>
    </>
  )
}

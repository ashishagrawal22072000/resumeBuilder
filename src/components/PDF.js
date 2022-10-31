import React, { useEffect, useState } from 'react'

import axios from 'axios'

export default function PDF({ data }) {
  console.log(data)
  return (
    <div style={{ padding: '50px 100px' }}>
      <section>
        {data.map((ele) => {
          return (
            <>
              <section>
                <div
                  style={{ height: '10px', width: '100%', background: 'black' }}
                ></div>
                <br />
                <section
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <h3>
                      {ele.Personal.fullName.charAt(0).toUpperCase() +
                        ele.Personal.fullName.slice(1)}
                    </h3>
                    <h5>{ele.Personal.email}</h5>

                    <div>
                      <span>
                        <a href={ele.Personal.link}>{ele.Personal.link}</a> ,{' '}
                        <a href={ele.Personal.linkedIn}>
                          {ele.Personal.linkedIn}
                        </a>
                      </span>
                      <address>
                        <p>{ele.Personal.address}</p>
                        <p>
                          {ele.Personal.state}, ({ele.Personal.pincode})
                        </p>
                      </address>
                      <p>(+91){ele.Personal.phone}</p>
                    </div>
                  </div>
                  <div>
                    <div
                      style={{
                        height: '100%',
                        width: '100%',
                        background: 'gray',
                        border: '1px solid gray',
                      }}
                    >
                      <img src="data:image/jpeg;base64,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" />
                    </div>
                  </div>
                </section>

                <br />
                <div
                  style={{ height: '10px', width: '100%', background: 'black' }}
                ></div>
                <br />
                <div>
                  <label
                    for="objective"
                    style={{ color: 'skyblue', fontWeight: 'bold' }}
                  >
                    Objective :{' '}
                  </label>
                  <p>{ele.Personal.objective}</p>
                </div>
                <hr />
                <div>
                  <label
                    for="objective"
                    style={{ color: 'skyblue', fontWeight: 'bold' }}
                  >
                    Education :{' '}
                  </label>

                  {ele.Education.map((el) => {
                    return (
                      <>
                        <ul>
                          <li>
                            <div className="row">
                              <div
                                className="col-10 hello"
                                style={{
                                  display: 'flex',
                                  justifyContent: 'space-between',
                                }}
                              >
                                <div style={{ width: '50%' }}>
                                  <h5>{el.institute}</h5>
                                  <p>{el.course}</p>
                                  <p>{el.marks}</p>
                                </div>
                                <div>
                                  <h5>
                                    ({el.start} - {el.end})
                                  </h5>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </>
                    )
                  })}
                </div>
                <hr />

                <div>
                  <label
                    for="objective"
                    style={{ color: 'skyblue', fontWeight: 'bold' }}
                  >
                    Experience :{' '}
                  </label>

                  {ele.Experience.map((el) => {
                    return (
                      <>
                        <ul>
                          <li>
                            <div className="row">
                              <div
                                className="col-12"
                                style={{
                                  display: 'flex',
                                  justifyContent: 'space-between',
                                }}
                              >
                                <div style={{ width: '50%' }}>
                                  <h5>{el.organization}</h5>
                                  <p>{el.position}</p>
                                  <ul>
                                    {el.description.split('.').map((e) => {
                                      return (
                                        <>
                                          {e && (
                                            <>
                                              <li
                                                style={{ listStyle: 'square' }}
                                              >
                                                {e}
                                              </li>
                                            </>
                                          )}
                                        </>
                                      )
                                    })}
                                  </ul>
                                </div>
                                <div>
                                  <h5>({el.duration})</h5>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </>
                    )
                  })}
                </div>
                <hr />
                <div>
                  <label
                    for="objective"
                    style={{ color: 'skyblue', fontWeight: 'bold' }}
                  >
                    Project :{' '}
                  </label>

                  {ele.Project.map((el) => {
                    return (
                      <>
                        <ul>
                          <li>
                            <div className="row">
                              <div
                                className="col-12"
                                style={{
                                  display: 'flex',
                                  justifyContent: 'space-between',
                                }}
                              >
                                <div style={{ width: '50%' }}>
                                  <h5>{el.title}</h5>
                                  <p>
                                    <a href={el.link}>{el.link}</a>
                                  </p>
                                  <ul>
                                    {el.description.split('.').map((e) => {
                                      return (
                                        <>
                                          {e && (
                                            <>
                                              <li
                                                style={{ listStyle: 'square' }}
                                              >
                                                {e}
                                              </li>
                                            </>
                                          )}
                                        </>
                                      )
                                    })}
                                  </ul>
                                </div>
                                <div>
                                  <h5>
                                    ({el.start} - {el.end})
                                  </h5>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </>
                    )
                  })}
                </div>
                <hr />
                <div>
                  <label
                    for="objective"
                    style={{ color: 'skyblue', fontWeight: 'bold' }}
                  >
                    Skills :{' '}
                  </label>
                  <div className="row">
                    {ele.Skill.split(',').map((el, i) => {
                      return (
                        <>
                          {el && (
                            <>
                              <div className="col-3">
                                <p>
                                  {i + 1}.
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
                  <p>{}</p>
                </div>
                <hr />
                <div>
                  <label
                    for="objective"
                    style={{ color: 'skyblue', fontWeight: 'bold' }}
                  >
                    Interest :{' '}
                  </label>
                  <div className="row">
                    {ele.Interest.split(',').map((el, i) => {
                      return (
                        <>
                          {el && (
                            <>
                              <div className="col-3">
                                <p>
                                  {i + 1}.
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

                <hr />

                <div>
                  <label
                    for="objective"
                    style={{ color: 'skyblue', fontWeight: 'bold' }}
                  >
                    Achievements :{' '}
                  </label>
                  <ul>
                    {ele.Achievement.split('.').map((el, i) => {
                      return (
                        <>
                          {el && (
                            <>
                              <li>{el}</li>
                            </>
                          )}
                        </>
                      )
                    })}
                  </ul>
                </div>
              </section>
            </>
          )
        })}
      </section>
    </div>
  )
}

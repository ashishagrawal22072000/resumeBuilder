import React, { useRef, useState, useEffect } from 'react'
import axios from 'axios'
import FileDownload from 'js-file-download'
import { useReactToPrint } from 'react-to-print'
import Format1 from './Format1'
import Format2 from './Format2'
export default function Success() {
  const download = (e) => {
    e.preventDefault()
    axios
      .get('/excel')
      .then((res) => {
        console.log(res)

        FileDownload(res.data, 'resume.csv')
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const pdf = (e) => {
    e.preventDefault()
    axios
      .get('/pdf')
      .then((res) => {
        console.log(res)

        FileDownload(res.data, 'resume.pdf')
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const [data, setData] = useState([])
  const [component, setcomponent] = useState()
  useEffect(() => {
    const fetchData = () => {
      axios
        .get('/data')
        .then((res) => {
          setData(res.data)
          console.log(res.data)
        })
        .catch((err) => console.log(err))
    }
    fetchData()
  }, [])

  const [show, setShow] = useState(false)

  useEffect(() => {
    if (component) handlePrint()
  }, [component])

  const handlePrint = useReactToPrint({
    content: () => component,
  })

  return (
    <>
      <section
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
        <div className="" style={{ width: '500px' }}>
          <div
            className=""
            style={{
              minHeight: '300px',
            }}
          >
            <div>
              <Format1 data={data} />
            </div>
            <button
              className="btn"
              onClick={(e) => {
                console.log(
                  e.target.previousElementSibling.children[0].children[0],
                )
                setcomponent(
                  e.target.previousElementSibling.children[0].children[0],
                )
              }}
            >
              Print
            </button>
          </div>
        </div>
        <div className="" style={{ width: '500px' }}>
          <div
            className=""
            style={{
              minHeight: '300px',
            }}
          >
            <div>
              <Format2 data={data} />
            </div>
            <button
              className="btn"
              onClick={(e) =>
                setcomponent(
                  e.target.previousElementSibling.children[0].children[0],
                )
              }
            >
              Print
            </button>
          </div>
        </div>
        <div className="" style={{ width: '500px' }}>
          <div
            className=""
            style={{
              minHeight: '300px',
            }}
          >
            <div>
              <Format2 data={data} />
            </div>
            <button
              className="btn"
              onClick={(e) =>
                setcomponent(e.target.previousElementSibling.children[0])
              }
            >
              Print
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

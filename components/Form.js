import React, {useRef, useState} from 'react'
import sendPost from '../lib/sendPost'
import Alert from './Alert'
import { DropArea } from './DropArea'


const Form = ({areas}) => {
  const nameRef = useRef(null)
  const categoryRef = useRef('DOWNTOWN')
  const textRef = useRef(null)
  const [imgData, setImgData] = useState(undefined)
  const [sendData, setSendData] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const name = nameRef.current.value
    const text = textRef.current.value
    const cate = categoryRef.current.value
    const img = imgData
    sendPost(name, text, cate, img)
    setSendData(true)
    nameRef.current.value = null
    textRef.current.value = null
    categoryRef.current.value = 'DOWNTOWN'
    setImgData(undefined)
    setTimeout(() => {
      setSendData(false)
    }, 3000)
  }

  let category = []
 areas.forEach(function (area) {
      if (!category.includes(area)) {
        category.push(area)
        category.sort()
      }
    }
    )
  
return(
  <div id="request" className="mx-auto w-screen h-screen relative bg-primary">
    {sendData ?  <Alert /> : <span></span>}
  <div className="max-w-xl p-5 mx-auto rounded-md shadow-sm">
    <div className="text-center text-b-p">
      <h1 className="my-3 text-3xl font-semibold">SEND CAFE INFOMATION</h1>
      <p className="text-gray-400">Fill up the form below to send us a message.</p>
    </div>
    <div>
      <form>
        <div className="mb-6">
          <label htmlFor="name" className="block mb-2 text-sm text-gray-600">Cafe Name</label>
          <input
            type="text"
            ref={ nameRef }
            name="name"
            placeholder="John Doe"
            required
            className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"/>
        </div>
        <div className="mb-6">
        <label htmlFor="name" className="block mb-2 text-sm text-gray-600">Area</label>
        <div className="inline-block relative w-64">
      <select ref={categoryRef} className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
      {category.map((area, i) => (
            <option key={i} >{area.toUpperCase()}</option>
       ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
      </div>
      </div>
        </div>
 
        <div className="mb-6">
          <label htmlFor="message" className="block mb-2 text-sm text-gray-600">Details of the Cafe</label>
          <textarea
            rows="5"
            ref={ textRef }
            name="message"
            placeholder="Your Message"
            className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
            required></textarea>
        </div>
        <DropArea imgData={imgData} setImgData={setImgData} />
        <div className="mb-6">
          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full px-2 py-4 text-white bg-indigo-500 rounded-md  focus:bg-indigo-600 focus:outline-none">
            Send Message
          </button>
        </div>
      </form>
    </div>
  </div>
</div>

    )}


export default Form

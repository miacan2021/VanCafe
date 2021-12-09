import React, {useRef, useState} from 'react'
import sendPost from '../lib/sendPost'
import { DropArea } from './DropArea'


const Form = ({areas}) => {
  const nameRef = useRef(null)
  const categoryRef = useRef('DOWNTOWN')
  const textRef = useRef(null)
  const [imgData, setImgData] = useState(undefined)

  const handleSubmit = (e) => {
    e.preventDefault()
    const name = nameRef.current.value
    const text = textRef.current.value
    const cate = categoryRef.current.value
    const img = imgData
    sendPost(name, text, cate, img)
    nameRef.current.value = null
    textRef.current.value = null
    categoryRef.current.value = 'DOWNTOWN'
    setImgData(undefined)
  }
return(
<div class="container mx-auto">
  <div class="max-w-xl p-5 mx-auto my-10 bg-white rounded-md shadow-sm">
    <div class="text-center">
      <h1 class="my-3 text-3xl font-semibold text-gray-700">Contact Us</h1>
      <p class="text-gray-400">Fill up the form below to send us a message.</p>
    </div>
    <div>
      <form>
        <div class="mb-6">
          <label for="name" class="block mb-2 text-sm text-gray-600">Cafe Name</label>
          <input
            type="text"
            ref={ nameRef }
            name="name"
            placeholder="John Doe"
            required
            class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"/>
        </div>
        <div class="mb-6">
        <label for="name" class="block mb-2 text-sm text-gray-600">Area</label>
        <div class="inline-block relative w-64">
      <select ref={categoryRef} class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
      {areas.map((area, i) => (<option key={i}>{area.toUpperCase()}</option>))}
      </select>
      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
      <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
      </div>
      </div>
        </div>
 
        <div class="mb-6">
          <label for="message" class="block mb-2 text-sm text-gray-600">Details of the Cafe</label>
          <textarea
            rows="5"
            ref={ textRef }
            name="message"
            placeholder="Your Message"
            class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
            required></textarea>
        </div>
        <DropArea imgData={imgData} setImgData={setImgData} />
        <div class="mb-6">
          <button
            type="submit"
            onClick={handleSubmit}
            class="w-full px-2 py-4 text-white bg-indigo-500 rounded-md  focus:bg-indigo-600 focus:outline-none">
            Send Message
          </button>
        </div>
      </form>
    </div>
  </div>
</div>

    )}


export default Form

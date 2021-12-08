import React, {useRef} from 'react'
import sendPost from '../lib/sendPost'

const Form = ({areas}) => {
  const nameRef = useRef(null)
  const categoryRef = useRef('DOWNTOWN')
  const textRef = useRef(null)
  const imgRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    const name = nameRef.current.value
    const text = textRef.current.value
    const cate = categoryRef.current.value
    const img = imgRef.current
    sendPost(name, text, cate, img)
    nameRef.current.value = ''
    textRef.current.value = ''
    categoryRef.current.value = 'DOWNTOWN'
    imgRef.current.value = ''
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
        {/* <div>
              <label class="block text-sm font-medium text-gray-700">
                Cover photo
              </label>
              <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div class="space-y-1 text-center">
                  <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="True">
                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <div class="flex text-sm text-gray-600">
                    <label for="file-upload" class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                      <span>Upload a file</span>
                      <input id="file-upload" name="file-upload" type="file" class="sr-only" />
                    </label>
                    <p class="pl-1">or drag and drop</p>
                  </div>
                  <p class="text-xs text-gray-500">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
            </div> */}
        <input type="file" ref={imgRef} accept="image/*" onChange={(e) => imgRef.current = e.target.files[0]} />
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

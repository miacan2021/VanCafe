import React from 'react'
import fetcher from '../lib/fetcher'
import sender from '../lib/sender'

export async function sendPost() {
  const data = await fetcher(
    `mutation CREATE_POST {
      createPost(input: {
        clientMutationId: "CreatePost"
        title: "new post from shiho"
      }) {
        post {
          id
          title
          date
        }
      }
    }      
    ` )
    console.log(await data)
  }

const Form = () => 
(
<div class="container mx-auto">
  <div class="max-w-xl p-5 mx-auto my-10 bg-white rounded-md shadow-sm">
    <div class="text-center">
      <h1 class="my-3 text-3xl font-semibold text-gray-700">Contact Us</h1>
      <p class="text-gray-400">Fill up the form below to send us a message.</p>
    </div>
    <div>
      <form>
        <div class="mb-6">
          <label for="name" class="block mb-2 text-sm text-gray-600"
            >Full Name</label
          >
          <input
            type="text"
            name="name"
            placeholder="John Doe"
            required
            class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
          />
        </div>
        <div class="mb-6">
          <label for="email" class="block mb-2 text-sm text-gray-600"
            >Email Address</label
          >
          <input
            type="email"
            name="email"
            placeholder="you@email.com"
            required
            class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
          />
        </div>
        <div class="mb-6">
          <label for="phone" class="text-sm text-gray-600">Phone Number</label>
          <input
            type="text"
            name="phone"
            placeholder="91 1234-567"
            required
            class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
          />
        </div>
        <div class="mb-6">
          <label for="message" class="block mb-2 text-sm text-gray-600">Your Message</label>

          <textarea
            rows="5"
            name="message"
            placeholder="Your Message"
            class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
            required
          ></textarea>
        </div>
        <div class="mb-6">
          <button
            type="submit"
            onClick={sender}
            class="w-full px-2 py-4 text-white bg-indigo-500 rounded-md  focus:bg-indigo-600 focus:outline-none">
            Send Message
          </button>
        </div>
      </form>
    </div>
  </div>
</div>

    )


export default Form

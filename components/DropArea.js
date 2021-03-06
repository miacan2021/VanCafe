import React, { useCallback, useState } from 'react'
import {useDropzone} from 'react-dropzone'

export const DropArea = ({imgData, setImgData}) => {
    const [imgUrl, setImgUrl] = useState()
    const onDrop = useCallback((acceptedFile) => {
        setImgData(acceptedFile[0])
        const reader = new FileReader()
        reader.onload = () => {
              setImgUrl(reader.result)
            }
        reader.readAsDataURL(acceptedFile[0]);
      }, [imgData])
      const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
    
      return (
        <>
        <div {...getRootProps()} >
        <label className="block text-sm font-medium text-b-n">
                Cover photo
        </label>
        <div className="mt-1 flex justify-center px-4 pt-4 pb-4 border-2 border-primary border-dashed rounded-md">
        <div className="space-y-1 text-center">
        {imgData == undefined ? (
         <>
        <svg className="mx-auto h-12 w-12 text-b-n" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="True">
            <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
         <div className="flex text-sm ttext-b-n">
        <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
            <p className='bg-primary text-b-n'>Upload a image</p>
            <input {...getInputProps()} />
          {
          isDragActive ?
          <p className='bg-primary text-xs text-b-n'>Drop a photo here ...</p> :
          <p className='bg-primary text-xs text-b-n'>Drag 'n' drop a photo here, or click to select a photo.</p>
         }
          <p className="text-xs bg-primary text-b-n">
            PNG, JPG, GIF up to 10MB
            </p>
          </label>
          </div>
          </> )
          : 
          <img src={imgUrl} className="object-cover h-40 w-40 mx-auto" />
        }
          </div>
            </div>
        </div>
        </>
      )
}

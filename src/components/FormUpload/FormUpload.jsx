import React, { useState, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import * as tmImage from '@teachablemachine/image'

import './FormUpload.css'

import uploadImage from '../../assets/uploadImage.svg'
import close from '../../assets/close.svg'

import PredictionResult from '../PredictionResult/PredictionResult.jsx'
import Loading from '../Loading/Loading.jsx'
import Preview from '../Preview/Preview.jsx'

function FormUpload() {
  const [predictions, setPredictions] = useState([])
  const [file, setFiles] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const onDrop = useCallback(async acceptedFiles => {
    try {
      const start = Date.now()
      setError(null)
      setLoading(true)
      setPredictions([])

      const singleFile = acceptedFiles[0]
      setFiles(
        Object.assign(singleFile, {
          preview: URL.createObjectURL(singleFile)
        })
      )

      const image = document.getElementById('image')

      const model = await tmImage.load(
      //  'https://teachablemachine.withgoogle.com/models/I1PVDZ1RA//model.json',
      //  'https://teachablemachine.withgoogle.com/models/I1PVDZ1RA//metadata.json'
        './model/model.json',
        './model/metadata.json'
      )

     
      
      const prediction = await model.predictTopK(image,2)

      handleResults(prediction)

      async function handleResults(predictionData) {
        setPredictions(predictionData)
      }

      setLoading(false)
      const end = new Date()
      const elapsedTime = end - start
      console.log(`It took ${elapsedTime / 1000} seconds`)

    } catch (err) {
      setLoading(false)
      setError(err)
      console.error(err)
    }
  }, [])

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragReject
  } = useDropzone({ onDrop, accept: 'image/jpeg, image/png, image/jpg' })

  const renderDragMessage = (isDragActive, isDragReject) => {
    if (!isDragActive) {
      return (
        <div className="dropContainer">
          <img src={uploadImage} alt="Illustration upload" />
          <p>Select or Drag Here</p>
          <h3>To upload your image</h3>
        </div>
      )
    }
    if (isDragReject) {
      return (
        <div className="dropContainer dragReject">
          <img src={close} alt="X icon" />
          <h3>File not supported</h3>
        </div>
      )
    }

    return (
      <div className="dropContainer dragActive">
        <img src={uploadImage} alt="Illustration upload" />
        <h3>Select or Drag Here</h3>
        <small>To upload your image</small>
      </div>
    )
  }

  return (
    <>
      {file.name ? (
        <>
          <section>
          <button {...getRootProps()} className="btn">
                Subir otra Imagen
              </button>
            <section className="fileInput">
              
              <input {...getInputProps()} />
              <Preview f={file} />

              {loading && <Loading />}

              {error && (
                <p className="alert is-danger">
                  Error al realizar el análisis, consulte los registros
                </p>
              )}

              {predictions.length !== 0 && (
              <PredictionResult
                predictions={predictions}
              />
            )}
            </section>

            
          </section>
        </>
      ) : (
          <div {...getRootProps()}>
            <input {...getInputProps()} />
          
            {renderDragMessage(isDragActive, isDragReject)}
          </div>
        )}
    </>
  )
}

export default FormUpload

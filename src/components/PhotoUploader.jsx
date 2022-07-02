const { useState, useMemo } = require('react')

const PhotoUploader = () => {
  const [image, setImage] = useState('')

  const imagePreviewUrl = useMemo(() => {
    // creates a object url using fake blob
    if (image) {
      return URL.createObjectURL(image)
    }
    return ''
  }, [image])

  useEffect(() => {
    // clean up the object url when the component unmounts
    // unecessry for this case but useful for memory management when there are other components (pages)
    return () => {
      URL.revokeObjectURL(imagePreviewUrl)
    }
  }, [])

  const handleFormSubmit = (e) => {
    e.preventDefault()
    sendToServer.postData(image).then(function (response) {
      if (typeof response.error != undefined && response.error != null) {
        console.error('error: ' + response.error)
      } else {
        window.alert('Image upload succesful')
      }
    })
  }

  return (
    <div className='submit-form'>
      <form onSubmit={handleFormSubmit}>
        <label className='button-primary'>
          Select Image
          <input
            className='hddenInput'
            id='input'
            ref='image'
            type='file'
            required
            onChange={(e) => setImage(e.target.files[0])}
          />
        </label>
        <div className='preview'>
          {imagePreviewUrl && <img src={imagePreviewUrl} />}
        </div>
        <button className='button-primary'>Upload</button>
      </form>
    </div>
  )
}

export default PhotoUploader

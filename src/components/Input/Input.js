import React from 'react'
import { Editor } from '@tinymce/tinymce-react';

function Input({onInput, type, value, placeholder}) {
  return (
    <div>
        { type === 'input' ? <input value={value} placeholder={placeholder} className="input" onChange={onInput} /> : (type === 'tiny' ? 
        <div className="mb-2">
          <Editor
            onEditorChange={onInput}
            apiKey="2hpaar4ztywvlw1dfjq14m2k76b09w1aen6j505h5r8dsag1"
            value={value}
            init={{
              height: 200,
              menubar: false,
              plugins: [
                'image'
              ],
              toolbar: 'undo redo | image formatselect | ' +
              'bold italic backcolor | alignleft aligncenter image ',
              content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
              images_upload_url: 'http://localhost:3001/visual/save'
            }}
          />
        </div>
        : <textarea placeholder={placeholder} className="input" onInput={onInput}>{value}</textarea>)}
    </div>
  )
}

export default Input
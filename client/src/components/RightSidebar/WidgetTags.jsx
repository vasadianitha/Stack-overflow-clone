import React from 'react'

const WidgetTags = () => {

    const tags= ['R','c','css','python','firebase', 'html','java','javascript','mern','mongodb','mysql','next js','node js','react js']


  return (
    <div className='widget-tags'>
        <h3>Watched Tags</h3>
        <div className='widget-tags-div'>
            {
                tags.map((tag)=>(
                    <p key={tag}>{tag}</p>
                ))
            }
        </div>
    </div>
  )
}

export default WidgetTags
import React from "react"

const Title = ({title}) => {
  return <div className="section-title">
    <h2>
      {title||"default title"}
      <div className="underline"></div>
    </h2>
  </div>
}

export default Title

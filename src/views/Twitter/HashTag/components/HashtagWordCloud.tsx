import React from 'react'
import ReactWordcloud from 'react-wordcloud';
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
type Props = {
    data: any
}
const HashtagWordCloud = (props: Props) => {
    const options:any = {
        colors: ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b"],
        enableTooltip: true,
        deterministic: false,
        fontFamily: "impact",
        fontSizes: [14, 80],
        fontStyle: "normal",
        fontWeight: "normal",
        padding: 1,
        rotations: 2,
        rotationAngles: [0, 90],
        scale: "log",
        spiral: "archimedean",
        transitionDuration: 1000,
        
      };
      
  return (
    <ReactWordcloud options={options} words={props.data} />
  )
}

export default HashtagWordCloud
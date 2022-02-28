import * as React from "react"
const Teaser = ({blok})=>(
    
    <div className="">
        <div>
            <h2>
                {blok.headline}
            </h2>
            <p>
                {blok.intro}
            </p>
            <img src={blok.teaserimage} alt="" />
        </div>
    </div>
)

export default Teaser
import * as React from "react"

const Feature = ({blok})=>(
    <div className="">
        <div>
            <h2>
                {blok.headline}
            </h2>
            <p>
                {blok.intro}
            </p>
        </div>
    </div>
)

export default Feature
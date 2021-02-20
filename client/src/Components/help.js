import React from "react"
import {Stylehelp} from "./styling/StyledHelp"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faArrowDown, faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const Help = () => (
    <Stylehelp>HELP
        <div>
        <FontAwesomeIcon icon={faArrowUp} />
        <FontAwesomeIcon icon={faArrowDown} />
        <FontAwesomeIcon icon={faArrowRight} />
        <FontAwesomeIcon icon={faArrowLeft} />
        </div> 
    </Stylehelp>
)

export default Help;
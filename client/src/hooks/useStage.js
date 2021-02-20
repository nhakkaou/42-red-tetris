import {useState} from 'react'
import {Createstage} from '../gameHelper'

export const useStage = () => {
    const [stage, setStage] = useState(Createstage());

    return [stage, setStage];
}
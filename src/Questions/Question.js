import './Question.css'
import { useState } from 'react'
import QuestionModal from './QuestionModal'


function Question({question, answer, amount, id}) {

    const [showModal, setShowModal] = useState(false)

    const toggleModal = () => {
        setShowModal(showModal => !showModal)
    }

    return (
        <div className='button-grid'>
        <button id={question} onClick={toggleModal} className='question-button'>{amount}</button>
        {showModal ? 
        <QuestionModal question={question} answer={answer} toggleModal={toggleModal} showModal={showModal}/> :
        null
        }
        </div>
    )
}

export default Question
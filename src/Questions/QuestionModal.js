import './QuestionModal.css'
import { useState } from 'react'
import AnswerModal from './AnswerModal'


function QuestionModal({question, answer, id, toggleModal, showModal}) {

    const [showAnswer, setShowAnswer] = useState(false)

    const toggleAnswer = () => {
        setShowAnswer(showAnswer => !showAnswer)
    }

    return (
        <>
        <div id={id} className="modal" style={{display: showModal ? "block" : "none"}}>
            <div className='modal-content' style={{display: showModal ? "block" : "none"}}>
                {showAnswer ? 
                <AnswerModal answer={answer} showAnswer={showAnswer} toggleModal={toggleModal}/> :
                null }
                <p>{question}</p>
                <span className='answer' onClick={toggleAnswer}>answer</span>
            </div>
        </div>
        </>
    )
}

export default QuestionModal
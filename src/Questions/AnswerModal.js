import './QuestionModal.css'

function AnswerModal({answer, showAnswer, toggleModal}) {


    const closeModal = () => {
        toggleModal()
    }

    return (
        <>
        <div className="modal" style={{display: showAnswer ? "block" : "none"}}>
            <div className='modal-content' style={{display: showAnswer ? "block" : "none"}}>
                <span className='close' onClick={closeModal}>&times;</span>
                <p>{answer}</p>
            </div>
        </div>
        </>
    )
}

export default AnswerModal
import './App.css';
import QuestionList from './Questions/QuestionList'
import CategoryList from './Categories/CategoryList'
import Category from './Categories/Category';
import Question from './Questions/Question'

function App() {

  const categoryCards = CategoryList.map(c => {
    return <Category category={c} />
  })

  const questionCards = QuestionList.map(q => {
    return <Question question={q.question} answer={q.answer} />
  })


  return (
    <div className="App">
      <table>
        <tr>
      {categoryCards}
      </tr>
      <tr>
      {questionCards}
      </tr>
      </table>
    </div>
  );
}

export default App;

import './App.css';
import {RowOne, RowTwo} from './Questions/QuestionList'
import CategoryList from './Categories/CategoryList'
import Category from './Categories/Category';
import Question from './Questions/Question'

function App() {

  const categoryCards = CategoryList.map(c => {
    return <Category category={c} key={c}/>
  })

  const rowOneQuestionCards = RowOne.map(q => {
    return (
    <td key={q.id}>
    <Question amount="100" question={q.question} answer={q.answer} id={q.id} key={q.id}/>
    </td>)
  })

  const rowTwoQuestionCards = RowTwo.map(q => {
    return (
      <td key={q.id}>
      <Question amount="200" question={q.question} answer={q.answer} id={q.id} key={q.id}/>
      </td>)
  })


  return (
    <div className="App">
      <table>
        <thead>
      <tr>
      {categoryCards}
      </tr>
      </thead>
      <tbody>
      <tr>
      {rowOneQuestionCards}
      </tr>
      <tr>
      {rowTwoQuestionCards}
      </tr>
      </tbody>
      </table>
    </div>
  );
}

export default App;

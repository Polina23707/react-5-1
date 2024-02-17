import './App.css'
import Body from './components/Body';
import Card from './components/Card'
import Image from './components/Image';

const text = 'Some quick example text to build on the card title and make up the bulk of the cards content.'

function App() {
  return (   
    <div className='container'>
      <Card children={
        <div>
          <Image url={'...'}/>
          <Body title='Card title 1' text={text} url='...'/>
        </div>
      }/>
      <Card children={
        <div>
          <Body title='Card title 2' text={text} url='...'/>
        </div>
      }/>
      <Card children={
        <div>
          <Image url={'...'}/>
          <Body title='Card title 1' text={text} url='...'/>
        </div>
      }/>
    </div>
  )
}

export default App;

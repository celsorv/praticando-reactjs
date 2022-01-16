
import Card from './components/Card';
import Item from './components/Item';
import colors from './components/Item/colors';

const App = () => {

  const renderItem = (strColor, index) => (
    <Item color={strColor} key={`item-${index}`}>
      {`A simple ${strColor ? strColor : 'default'} list group item`}
    </Item>
  )

  return (
    <>
      <h1>ReactJS</h1>
      <ul className="list-group">
        {colors.map(renderItem)}
      </ul>
      <br />
      <Card />
    </>
  )

}

export default App;

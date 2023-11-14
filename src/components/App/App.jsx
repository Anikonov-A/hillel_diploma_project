import Title from '../Title/Title';
import Paragraph from '../Paragraph/Paragraph';
import Span from '../Span/Span';
import './App.scss';

function App() {
  return (
      <div>
          {/*While rendering a component - place {1-6} for size which will be equal to h1-h6. For more details - see Title.jsx. Also Look in Devtools, tab Elements, how it works*/}
          <Title addClasses="d-flex" size={1}>
              I am testing how all it works
          </Title>
          <Title addClasses="d-grid" size={2}>
              I am testing how all it works
          </Title>
          {/*The same with paragraph - also make a component.*/}
          <Paragraph addClasses="text-center">
              Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.
          </Paragraph>
          {/*The same for span*/}
          <Span addClasses="text-center">
              Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.
          </Span>
      </div>
  );
}

export default App;

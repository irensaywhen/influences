import Influences from './containers/Influences/Influences';
import Layout from './containers/Layout/Layout';
import Header from './components/Header/Header';

function App() {
  return (
    <div className='font-sans bg-secondary'>
      <Layout>
        <Influences />
      </Layout>
    </div>
  );
}

export default App;

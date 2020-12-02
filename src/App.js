import Influences from './containers/Influences/Influences';
import Layout from './containers/Layout/Layout';

function App() {
  return (
    <div className='font-sans bg-secondary min-h-screen'>
      <Layout>
        <Influences />
      </Layout>
    </div>
  );
}

export default App;

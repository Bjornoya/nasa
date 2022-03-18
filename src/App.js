import AppRoutes from './router';
import { CustomLayout } from './components/CustomLayout';
import 'antd/dist/antd.css';

function App() {
  return (
    <CustomLayout>
      <AppRoutes />
    </CustomLayout>
  );
}

export default App;

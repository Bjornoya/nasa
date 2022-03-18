import AppRoutes from './router';
import { CustomLayout } from './components/CustomLayout';

function App() {
  return (
    <CustomLayout>
      <AppRoutes />
    </CustomLayout>
  );
}

export default App;

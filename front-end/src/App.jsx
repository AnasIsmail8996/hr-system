
import { AuthProvider } from "./context/AuthContext";
import AppRouter from "./router/AppRouter";
import { Toaster } from 'react-hot-toast';
function App() {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
    <AuthProvider >

      <AppRouter />
    </AuthProvider>
    </>
  );
}

export default App;

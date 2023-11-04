import { PrimeReactProvider } from "primereact/api";
import Tailwind from "primereact/passthrough/tailwind";
import Login from "./feature/login/container/Login";
import 'primeicons/primeicons.css';

export default function App() {
    return (
        <PrimeReactProvider value={{ unstyled: true, pt: Tailwind }}>
            <Login />
        </PrimeReactProvider>
    );
}

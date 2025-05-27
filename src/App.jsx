import { Navigate, Routes, Route } from "react-router";

import Layout from "./components/Layout";
import Emoji from "./pages/emoji";
import Contacts from "./pages/contacts";
import About from "./pages/about";
import Todos from "./pages/todos";
import CounterRedux from "./pages/counter-redux";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Emoji />} />
                <Route path="contacts" element={<Contacts />} />
                <Route path="about" element={<About />} />
                <Route path="counter-redux" element={<CounterRedux />} />
                <Route path="todos" element={<Todos />} />

                <Route path="*" element={<Navigate to="/" />} />
            </Route>
        </Routes>
    );
}

export default App;

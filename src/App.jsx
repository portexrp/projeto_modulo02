import { BrowserRouter as Router, Routes, Route  } from "react-router-dom"
import { LoginPage } from "./pages/Login/Index"
import { HomePage } from "./pages/Home/Index"
import { ExamePage } from "./pages/Exame/Index"
import { ConsultaPage } from "./pages/Consulta/Index"
import { PacientePage } from "./pages/Paciente/Index"
import { ProntuarioPage } from "./pages/Prontuario/Index"

function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/home" element={<HomePage/>} />
        <Route path="/exame" element={<ExamePage/>} />
        <Route path="/consulta" element={<ConsultaPage/>} />
        <Route path="/paciente" element={<PacientePage/>} />
        <Route path="/prontuario" element={<ProntuarioPage/>} />
      </Routes>
    </Router>
  )
}

export default App

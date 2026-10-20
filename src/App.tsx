import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { LanguageProvider } from './contexts/LanguageContext'
import Navbar from './components/layout/Navbar'
import CustomCursor from './components/ui/CustomCursor'
import NoiseTexture from './components/ui/NoiseTexture'
import HomePage from './pages/HomePage'
import WorkPage from './pages/WorkPage'
import AboutPage from './pages/AboutPage'
import ProcessPage from './pages/ProcessPage'
import SkillsPage from './pages/SkillsPage'
import ContactPage from './pages/ContactPage'
import AchievementsPage from './pages/AchievementsPage'
import N8NMarketingPage from './pages/projects/N8NMarketingPage'
import ContentWorkspacePage from './pages/projects/ContentWorkspacePage'
import UGCStudioPage from './pages/projects/UGCStudioPage'
import AIKINGPage from './pages/projects/AIKINGPage'
import LarkOperationsPage from './pages/projects/LarkOperationsPage'
import PhotoClassifierPage from './pages/projects/PhotoClassifierPage'
import PromptArchPage from './pages/projects/PromptArchPage'
import ShortFormPage from './pages/projects/ShortFormPage'
import SuaLaMeoPage from './pages/projects/SuaLaMeoPage'
import MakeAutomationPage from './pages/projects/MakeAutomationPage'

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/work/n8n-marketing" element={<N8NMarketingPage />} />
        <Route path="/work/content-workspace" element={<ContentWorkspacePage />} />
        <Route path="/work/aiking-video" element={<AIKINGPage />} />
        <Route path="/work/aiking" element={<AIKINGPage />} />
        <Route path="/work/ugc-studio" element={<UGCStudioPage />} />
        <Route path="/work/lark-operations" element={<LarkOperationsPage />} />
        <Route path="/work/ai-photo-classifier" element={<PhotoClassifierPage />} />
        <Route path="/work/prompt-arch" element={<PromptArchPage />} />
        <Route path="/work/short-form" element={<ShortFormPage />} />
        <Route path="/work/sua-la-meo" element={<SuaLaMeoPage />} />
        <Route path="/work/make-automation" element={<MakeAutomationPage />} />
        <Route path="/process" element={<ProcessPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/achievements" element={<AchievementsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <NoiseTexture />
        <CustomCursor />
        <Navbar />
        <main>
          <AnimatedRoutes />
        </main>
      </BrowserRouter>
    </LanguageProvider>
  )
}

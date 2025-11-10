import Navigation from './components/Navigation'
import HeroSection from './components/HeroSection'
import ContentSections from './components/ContentSections'
import FAQSection from './components/FAQSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <HeroSection />
        <ContentSections />
        <FAQSection />
      </main>
      <Footer />
    </div>
  )
}

export default App


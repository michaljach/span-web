import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Marquee } from './components/Marquee'
import { Statement } from './components/Statement'
import { Pillars } from './components/Pillars'
import { Stories } from './components/Stories'
import { Workspaces } from './components/Workspaces'
import { Notes } from './components/Notes'
import { Pricing } from './components/Pricing'
import { CTA } from './components/CTA'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <div className="relative isolate min-h-screen">
      <Nav />
      <Hero />
      <Marquee />
      <Statement />
      <Pillars />
      <Stories />
      <Workspaces />
      <Notes />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  )
}

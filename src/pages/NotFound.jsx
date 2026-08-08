import { Link } from 'react-router-dom'
import { Home, GitBranch, SearchX } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="container-custom text-center space-y-8">
        <SearchX className="w-24 h-24 text-primary mx-auto opacity-50" />
        <div className="space-y-4">
          <h1 className="text-9xl font-bold gradient-text">404</h1>
          <h2 className="text-3xl font-bold text-text-primary">Page Not Found</h2>
          <p className="text-text-secondary max-w-md mx-auto">
            The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on
            track.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/" className="btn-primary">
            <Home className="w-5 h-5" />
            Go Home
          </Link>
          <Link to="/projects" className="btn-secondary">
            <GitBranch className="w-5 h-5" />
            View Projects
          </Link>
        </div>
      </div>
    </div>
  )
}

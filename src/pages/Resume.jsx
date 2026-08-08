import { Download, ExternalLink, FileText, AlertCircle } from 'lucide-react'
import { personalInfo } from '../data/portfolio'

export default function Resume() {
  return (
    <div className="space-y-12 py-20">
      {/* Hero Section */}
      <section className="container-custom text-center space-y-6">
        <p className="text-sm text-accent-cyan font-mono">Professional Document</p>
        <h1 className="text-4xl md:text-6xl font-bold gradient-text">Resume</h1>
        <p className="text-lg text-text-secondary max-w-2xl mx-auto">
          Download my complete resume or view it directly in your browser.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <a href={personalInfo.resumePdf} download className="btn-primary">
            <Download className="w-5 h-5" />
            Download PDF
          </a>
          <a
            href={personalInfo.resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <ExternalLink className="w-5 h-5" />
            Open in New Tab
          </a>
        </div>
      </section>

      {/* PDF Embed */}
      <section className="container-custom">
        <div className="glass p-6 rounded-2xl">
          <div className="flex items-center gap-3 mb-4 text-text-tertiary text-sm">
            <FileText className="w-4 h-4" />
            <span>Resume Preview</span>
          </div>

          {/* PDF Object Embed */}
          <div className="bg-background-tertiary rounded-xl overflow-hidden">
            <object
              data={personalInfo.resumePdf}
              type="application/pdf"
              className="w-full h-[800px] md:h-[1000px]"
              aria-label="Resume PDF"
            >
              {/* Fallback for browsers that don't support PDF embedding */}
              <div className="flex flex-col items-center justify-center py-20 px-6 space-y-6">
                <AlertCircle className="w-16 h-16 text-text-tertiary" />
                <div className="text-center space-y-4">
                  <h3 className="text-xl font-semibold text-text-primary">
                    PDF Preview Not Available
                  </h3>
                  <p className="text-text-secondary max-w-md">
                    Your browser doesn&apos;t support inline PDF previews. Please download the resume or
                    open it in a new tab.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center pt-4">
                    <a href={personalInfo.resumePdf} download className="btn-primary">
                      <Download className="w-5 h-5" />
                      Download Resume
                    </a>
                    <a
                      href={personalInfo.resumePdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary"
                    >
                      <ExternalLink className="w-5 h-5" />
                      Open in New Tab
                    </a>
                  </div>
                </div>
              </div>
            </object>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="container-custom">
        <div className="glass p-12 rounded-2xl text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text">Let&apos;s Connect</h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Interested in my profile? I&apos;d love to hear from you! Reach out via email or connect
            with me on LinkedIn.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href={`mailto:${personalInfo.email}`} className="btn-primary">
              Email Me
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <ExternalLink className="w-5 h-5" />
              LinkedIn Profile
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <ExternalLink className="w-5 h-5" />
              GitHub Profile
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

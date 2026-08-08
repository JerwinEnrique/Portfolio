import { useState, useEffect, useRef } from 'react'
import { Bot, X, Send } from 'lucide-react'
import {
  personalInfo,
  timeline,
  certifications,
  awards,
  skillCategories,
} from '../data/portfolio'

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      addBotMessage(
        "Hi, I'm Winz — Jerwin's portfolio assistant. Ask me about his education, experience, leadership roles, skills, certifications, projects, awards, or how to reach him!"
      )
    }
  }, [isOpen, messages.length])

  const addBotMessage = (message) => {
    setMessages((prev) => [...prev, { type: 'bot', content: message }])
  }

  const addUserMessage = (message) => {
    setMessages((prev) => [...prev, { type: 'user', content: message }])
  }

  const getBotResponse = (message) => {
    const msg = message.toLowerCase()

    // Greetings
    if (/\b(hi|hello|hey|kumusta)\b/.test(msg)) {
      return "Hello! Ask me about Jerwin's education, leadership roles, experience, skills, certifications, projects, or awards!"
    }

    // Who are you
    if (/\b(who are you|what are you|introduce yourself)\b/.test(msg)) {
      return "I'm Winz, an assistant built into Jerwin's portfolio. I can answer questions about his education, work experience, leadership, skills, certifications, projects, and contact info."
    }

    // Contact / Reach / Resume
    if (/\b(contact|reach|email|phone|resume|cv|hire)\b/.test(msg)) {
      return `You can reach Jerwin at:<br><br>
        📧 Email: <a href="mailto:${personalInfo.email}" class="text-primary hover:underline">${personalInfo.email}</a><br>
        📄 <a href="/Portfolio/#/resume" class="text-primary hover:underline">View Resume</a><br>
        💼 <a href="${personalInfo.linkedin}" target="_blank" class="text-primary hover:underline">LinkedIn</a><br>
        💻 <a href="${personalInfo.github}" target="_blank" class="text-primary hover:underline">GitHub</a>`
    }

    // Awards
    if (/\b(award|achievement|competition|sumobot|line follower|honor|top 9|top 8|academic excellence)\b/.test(msg)) {
      let response = "Jerwin's awards & honors:<br><br>"
      awards.forEach((a) => {
        response += `<strong>${a.title}</strong> (${a.date})<br>${a.organizer}<br><br>`
      })
      return response
    }

    // Leadership
    if (/\b(leadership|awslc|cto|director|sports|icpep|organization|org|club)\b/.test(msg)) {
      const leadershipRoles = timeline.filter((t) => t.type === 'leadership')
      let response = "Jerwin's leadership roles:<br><br>"
      leadershipRoles.forEach((item) => {
        response += `<strong>${item.role}</strong> — ${item.org}<br>${item.dateStart} – ${item.dateEnd}<br>${item.summary}<br><br>`
      })
      return response
    }

    // Certifications
    if (/\b(certification|cert|aws|comptia|wadhwani|huawei|cloud practitioner|itf)\b/.test(msg)) {
      let response = "Jerwin's certifications:<br><br>"
      certifications.forEach((cert) => {
        response += `<strong>${cert.title}</strong><br>${cert.issuer} — ${cert.date}<br><br>`
      })
      return response
    }

    // Skills
    if (/\b(skill|technology|programming|language|web dev|ai|machine learning|robotics|pcb|database|sql)\b/.test(msg)) {
      let response = `Jerwin has skills across ${skillCategories.length} domains:<br><br>`
      skillCategories.forEach((cat) => {
        response += `<strong>${cat.label}</strong>: ${cat.skills.map((s) => s.name).slice(0, 3).join(', ')}${cat.skills.length > 3 ? ', ...' : ''}<br>`
      })
      response += `<br>View the full <a href="/Portfolio/#/skills" class="text-primary hover:underline">Skills Matrix</a> for details!`
      return response
    }

    // Projects
    if (/\b(project|thesis|build|built|created|app|application|cybernate|drowsiness|iot|library system)\b/.test(msg)) {
      return `Jerwin has worked on several projects:<br><br>
        • <strong>IoT Balance & Tremor Exercise Board</strong> (Thesis) — Android app with Flutter<br>
        • <strong>Cybernate</strong> — AI Scam Detection app<br>
        • <strong>AI Drowsiness Detection</strong> — Computer vision system<br>
        • <strong>Library Management System</strong><br>
        • <strong>RFID Attendance System</strong><br>
        • <strong>AI Plant Disease Detection</strong><br><br>
        View full details on the <a href="/Portfolio/#/projects" class="text-primary hover:underline">Projects page</a>!`
    }

    // Experience / Education
    if (/\b(experience|background|education|school|university|work|career|timeline|history)\b/.test(msg)) {
      let response = "Jerwin's experience & education:<br><br>"
      timeline.slice(0, 4).forEach((item) => {
        response += `<strong>${item.role}</strong> — ${item.org}<br>${item.dateStart} – ${item.dateEnd}<br><br>`
      })
      response += `<a href="/Portfolio/#/experience" class="text-primary hover:underline">View full timeline</a>`
      return response
    }

    // Why hire
    if (/\b(why hire|why should|value|bring|offer)\b/.test(msg)) {
      return `Jerwin brings:<br><br>
        ✅ Hands-on IT & hardware troubleshooting experience<br>
        ✅ Strong academic performance (Top 8 BSCpE)<br>
        ✅ AWS Certified Cloud Practitioner & CompTIA ITF+<br>
        ✅ Full-stack development skills (web & mobile)<br>
        ✅ AI/ML project experience<br>
        ✅ Robotics & embedded systems expertise<br>
        ✅ Leadership experience (CTO AWSLC, Director ICpEP)<br>
        ✅ Quick learner, team player, adaptable<br><br>
        Ready to contribute from day one!`
    }

    // Default fallback
    return `I can help you with:<br><br>
      • Education & background<br>
      • Work experience & leadership<br>
      • Technical skills<br>
      • Certifications<br>
      • Projects<br>
      • Awards & achievements<br>
      • Contact information<br><br>
      Just ask me anything about Jerwin's portfolio!`
  }

  const handleSend = () => {
    if (!input.trim()) return

    addUserMessage(input)
    setInput('')
    setIsTyping(true)

    setTimeout(() => {
      setIsTyping(false)
      addBotMessage(getBotResponse(input))
    }, 500)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend()
    }
  }

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-primary hover:bg-primary/90 text-white rounded-full shadow-lg flex items-center justify-center z-50 transition-transform hover:scale-110"
        aria-label="Open chat"
      >
        <Bot className="w-6 h-6" />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 max-w-[calc(100vw-3rem)] h-[500px] bg-background-secondary border border-border-subtle rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-primary/10 border-b border-border-subtle p-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Bot className="w-5 h-5 text-primary" />
              <h3 className="font-semibold text-text-primary">Winz</h3>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-text-tertiary hover:text-text-primary transition-colors"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] px-4 py-2 rounded-lg ${
                    msg.type === 'user'
                      ? 'bg-primary text-white'
                      : 'bg-background-tertiary text-text-secondary'
                  }`}
                  {...(msg.type === 'user'
                    ? { children: msg.content }
                    : { dangerouslySetInnerHTML: { __html: msg.content } })}
                />
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-background-tertiary text-text-secondary px-4 py-2 rounded-lg">
                  <span className="inline-flex gap-1">
                    Thinking
                    <span className="animate-bounce">.</span>
                    <span className="animate-bounce delay-100">.</span>
                    <span className="animate-bounce delay-200">.</span>
                  </span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="border-t border-border-subtle p-4 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask about experience, skills, or projects..."
              className="flex-1 bg-background-tertiary border border-border-subtle rounded-lg px-4 py-2 text-sm text-text-primary placeholder-text-tertiary focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              onClick={handleSend}
              className="bg-primary hover:bg-primary/90 text-white rounded-lg px-4 py-2 flex items-center justify-center transition-colors"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  )
}

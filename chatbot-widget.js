/**
 * chatbot-widget.js
 * ----------------------------------------------------------------------
 * "Winz" chatbot widget — shared across every page.
 * Injects its own markup, so each page only needs:
 *   <script src="portfolio-data.js"></script>
 *   <script src="chatbot-widget.js"></script>
 *
 * Answers are generated from window.PORTFOLIO_DATA so the chatbot never
 * drifts from the content actually shown on the pages.
 *
 * This version is intent-based rather than single-branch keyword
 * matching: it scores every intent against the message, can combine
 * more than one matching topic in a single reply (e.g. "skills and
 * awards?"), remembers the last topic so short follow-ups like "and
 * the dates?" still make sense, and falls back to an actually useful
 * menu instead of a dead end. It's still a rule-based assistant (no
 * external AI API is wired in here), but it's built to read intent,
 * not just exact keywords, and to keep the conversation going.
 * ---------------------------------------------------------------------- */

document.addEventListener('DOMContentLoaded', function () {

  // Inject markup
  const container = document.createElement('div');
  container.className = 'chatbot-container';
  container.innerHTML = `
    <div class="chatbot-toggle" id="chatbot-toggle" aria-label="Open chat with Winz">
      <svg data-lucide="bot"></svg>
    </div>
    <div class="chatbot-window" id="chatbot-window">
      <div class="chatbot-header">
        <h3><svg data-lucide="bot"></svg> Winz</h3>
        <button class="chatbot-close" id="chatbot-close" aria-label="Close chat">
          <svg data-lucide="x"></svg>
        </button>
      </div>
      <div class="chatbot-messages" id="chatbot-messages"></div>
      <div class="chatbot-input-area">
        <input type="text" class="chatbot-input" id="chatbot-input" placeholder="Ask about experience, skills, certs, or projects..." />
        <button class="chatbot-send" id="chatbot-send" aria-label="Send">
          <svg data-lucide="send"></svg>
        </button>
      </div>
    </div>
  `;
  document.body.appendChild(container);

  if (window.safeCreateIcons) { window.safeCreateIcons(); } else if (window.lucide) { try { lucide.createIcons(); } catch (e) { /* icons unavailable, non-fatal */ } }

  const chatbotToggle = document.getElementById('chatbot-toggle');
  const chatbotWindow = document.getElementById('chatbot-window');
  const chatbotClose = document.getElementById('chatbot-close');
  const chatbotInput = document.getElementById('chatbot-input');
  const chatbotSend = document.getElementById('chatbot-send');
  const chatbotMessages = document.getElementById('chatbot-messages');

  // Remembers the last matched intent so quick follow-ups ("and skills?")
  // still resolve without repeating the whole question.
  let lastIntentId = null;

  chatbotToggle.addEventListener('click', function () {
    chatbotWindow.classList.toggle('active');
    if (chatbotWindow.classList.contains('active')) {
      chatbotInput.focus();
      if (chatbotMessages.children.length === 0) {
        addBotMessage("Hi, I'm Winz — Jerwin's portfolio assistant. Ask me anything a recruiter might: his education, experience, leadership roles, skills, certifications, projects, awards, or how to reach him. You can also ask things like \"why should we hire you?\" or \"can I get your resume?\"");
      }
    }
  });

  chatbotClose.addEventListener('click', function () {
    chatbotWindow.classList.remove('active');
  });

  chatbotSend.addEventListener('click', sendMessage);
  chatbotInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') sendMessage();
  });

  function sendMessage() {
    const message = chatbotInput.value.trim();
    if (message === '') return;
    addUserMessage(message);
    chatbotInput.value = '';
    showLoading();
    setTimeout(() => {
      hideLoading();
      addBotMessage(getBotResponse(message));
    }, 500);
  }

  function addUserMessage(message) {
    const div = document.createElement('div');
    div.className = 'chatbot-message user';
    div.textContent = message;
    chatbotMessages.appendChild(div);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
  }

  function addBotMessage(message) {
    const div = document.createElement('div');
    div.className = 'chatbot-message bot';
    div.innerHTML = message;
    chatbotMessages.appendChild(div);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
  }

  function showLoading() {
    const div = document.createElement('div');
    div.className = 'chatbot-loading';
    div.id = 'chatbot-loading';
    div.innerHTML = 'Thinking<span class="dot">.</span><span class="dot">.</span><span class="dot">.</span>';
    chatbotMessages.appendChild(div);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
  }

  function hideLoading() {
    const el = document.getElementById('chatbot-loading');
    if (el) el.remove();
  }

  const typeLabels = {
    internship: "Internship",
    education: "Education",
    freelance: "Freelance",
    hackathon: "Hackathon",
    ta: "Teaching",
    leadership: "Leadership"
  };

  /* ---------------------------------------------------------------
   * Intent definitions.
   * Each intent has:
   *   id       - stable id, used for follow-up memory
   *   patterns - words/phrases that count as evidence for this intent
   *   handler  - (data) => html string | null (null = "no data yet")
   * getBotResponse() scores every intent against the message and can
   * return more than one section if the user asked a compound question.
   * ------------------------------------------------------------- */
  const intents = [
    {
      id: 'greeting',
      patterns: ['hello', 'hi', 'hey', 'kumusta', 'good morning', 'good afternoon', 'good evening', 'yo '],
      exclusive: true,
      handler: () => "Hello! I'm Winz. Ask me about Jerwin's education, leadership roles, experience, skills, certifications, projects, or awards — or say \"why should we hire you?\""
    },
    {
      id: 'who_are_you',
      patterns: ['who are you', 'what are you', 'what can you do', 'kamusta ka', 'introduce yourself'],
      exclusive: true,
      handler: () => "I'm Winz, an assistant built into Jerwin Enrique's portfolio. I can answer questions about his education, work experience, leadership roles, technical skills, certifications, projects, awards, and how to contact him — feel free to ask naturally, like you would a recruiter chat."
    },
    {
      id: 'awards',
      patterns: ['award', 'achievement', 'competition', 'sumobot', 'line follower', 'honor', 'honor student', 'top 9', 'top 8', 'ranking', 'rank', 'academic excellence', 'dean'],
      handler: (data) => {
        const awards = data.awards || [];
        if (awards.length === 0) return null;
        let response = "Jerwin's awards & honors:<br><br>";
        awards.forEach(a => {
          response += `<strong>${a.title}</strong> (${a.date})<br>${a.organizer}<br><br>`;
        });
        return response;
      }
    },
    {
      id: 'leadership',
      patterns: ['leadership', 'awslc', 'aws learning community', 'cto', 'student leader', 'organization', 'org', 'club', 'icpep', 'director of sports', 'sports', 'teamwork', 'communication', 'adaptability', 'soft skills'],
      handler: (data) => {
        const items = (data.timeline || []).filter(t => t.type === 'leadership');
        if (!items.length) return null;
        let response = "Jerwin's leadership roles:<br><br>";
        items.forEach(item => {
          response += `<strong>${item.role}</strong> — ${item.org}<br>${item.dateStart} – ${item.dateEnd}<br>${item.summary}<br><br>`;
        });
        return response;
      }
    },
    {
      id: 'teleperformance',
      patterns: ['teleperformance', 'csr', 'customer service representative', 'call center'],
      handler: (data) => {
        const item = (data.timeline || []).find(t => t.org === 'Teleperformance');
        if (!item) return null;
        return `<strong>${item.role}</strong> — ${item.org}<br>${item.dateStart}<br>${item.summary}`;
      }
    },
    {
      id: 'projects',
      patterns: ['project', 'build', 'built', 'created', 'made', 'thesis', 'library system', 'app', 'application', 'flutter', 'android studio', 'android app', 'mobile app', 'cybernate'],
      handler: () => (
        "Jerwin has worked on several projects, including his undergraduate thesis:<br><br>" +
        "• IoT-Based Balance and Tremor Exercise Board for Parkinson's Disease Patients (thesis) — includes a companion Android app built with Flutter/Android Studio<br>" +
        "• Cybernate — AI Scam Detection Application, an Android app (Flutter + AI/ML) that flags likely scam messages/links<br>" +
        "• IoT-Based Automated Ground Water Quality Monitoring System<br>" +
        "• RFID Attendance Management System<br>" +
        "• AI Plant Disease Detection System<br>" +
        "• Library Management System (JRU academic project)<br><br>" +
        "Each project has a full case-study write-up (background, problem, solution, tech stack, challenges) on the Projects page — click \"View Full Case Study\" on any card."
      )
    },
    {
      id: 'experience',
      patterns: ['experience', 'background', 'internship', 'ojt', 'job', 'education', 'study', 'school', 'university', 'college', 'work', 'career', 'timeline', 'history'],
      handler: (data) => {
        const timeline = data.timeline || [];
        if (timeline.length === 0) return null;
        let response = "Here's Jerwin's education, leadership & experience:<br><br>";
        [...timeline].sort((a, b) => new Date(a.dateStart) - new Date(b.dateStart)).forEach(item => {
          response += `<strong>${item.role}</strong> — ${item.org} <em>(${typeLabels[item.type] || item.type})</em><br>`;
          response += `${item.dateStart}${item.dateEnd && item.dateEnd !== item.dateStart ? ' – ' + item.dateEnd : ''}<br>`;
          response += `${item.summary}<br><br>`;
        });
        return response;
      }
    },
    {
      id: 'certifications',
      patterns: ['certification', 'cert', 'aws', 'comptia', 'wadhwani', 'badge', 'credential', 'machine learning foundations', 'ai course', 'itf', 'cloud practitioner', 'entrepreneurship', 'skilling', 'job ready'],
      handler: (data, q) => {
        const certs = data.certifications || [];
        if (certs.length === 0) return null;

        // Specific-lookup: if the message names a particular certificate,
        // answer with just that one instead of dumping the whole list.
        const named = findNamedMatches(q, certs, cert => [cert.title, cert.issuer]);
        const list = named.length ? named : certs;
        const isSpecific = named.length > 0 && named.length < certs.length;

        let response = isSpecific
          ? (named.length === 1 ? "Here's that certification:<br><br>" : "Here's what matches:<br><br>")
          : "Jerwin's certifications:<br><br>";

        list.forEach(cert => {
          response += `<strong>${cert.title}</strong><br>${cert.issuer} — ${cert.date}<br>`;
          if (cert.whatItMeans) response += `<span style="opacity:0.85;">${cert.whatItMeans}</span><br>`;
          response += `<br>`;
        });
        return response;
      }
    },
    {
      id: 'skills',
      patterns: ['skill', 'technology', 'language', 'tool', 'programming', 'web dev', 'web development', 'frontend', 'front-end', 'backend', 'back-end', 'sql', 'database', 'ai', 'artificial intelligence', 'machine learning', 'robot', 'robotics', 'pcb', 'circuit', 'raspberry', 'arduino', 'verilog', 'assembly', 'java', 'javascript', 'js', 'php', 'python', 'html', 'css', 'system making', 'system development', 'stack', 'cybersecurity', 'cyber security', 'cyber', 'security', 'network security', 'hardening', 'threat', 'mobile', 'mobile app', 'mobile development', 'flutter', 'dart', 'android studio', 'android development', 'ios'],
      handler: (data, q) => {
        const categories = data.skillCategories || [];
        if (categories.length === 0) return null;

        // Specific-lookup: if the message names a particular skill (e.g.
        // "how good is your python?" or "do you know arduino?"), answer
        // with just that skill's level instead of the whole matrix.
        const allSkills = [];
        categories.forEach(cat => cat.skills.forEach(s => allSkills.push({ ...s, categoryLabel: cat.label })));
        const namedSkills = findNamedMatches(q, allSkills, s => [s.name]);

        if (namedSkills.length > 0 && namedSkills.length < allSkills.length) {
          let response = namedSkills.length === 1 ? "Here's that skill:<br><br>" : "Here's what matches:<br><br>";
          namedSkills.forEach(skill => {
            response += `<strong>${skill.name}</strong> — ${skill.level}/5<br><span style="opacity:0.85;">${skill.categoryLabel}</span><br><br>`;
          });
          return response;
        }

        // Specific-lookup by domain/category name (e.g. "cybersecurity skills?").
        const namedCategory = categories.find(cat =>
          q.includes(cat.label.toLowerCase()) || q.includes(cat.id.toLowerCase())
        );
        if (namedCategory) {
          let response = `<strong>${namedCategory.label}</strong><br><br>`;
          namedCategory.skills.forEach(skill => {
            response += `${skill.name} (${skill.level}/5)<br>`;
          });
          return response;
        }

        let response = "Jerwin's technical skills, by domain:<br><br>";
        categories.forEach(category => {
          response += `<strong>${category.label}</strong><br>`;
          category.skills.forEach(skill => {
            response += `${skill.name} (${skill.level}/5)<br>`;
          });
          response += '<br>';
        });
        return response;
      }
    },
    {
      id: 'resume',
      patterns: ['resume', 'cv', 'download resume', 'view resume', 'pdf'],
      handler: () => "You can view or download Jerwin's resume on the Resume page (in the nav on every page) — there's an embedded preview plus a direct \"Download Resume (PDF)\" button."
    },
    {
      id: 'hire',
      patterns: ['hire', 'why should', 'why you', 'strengths', 'why hire', 'good fit', 'suitable'],
      handler: (data) => {
        const awardCount = (data.awards || []).length;
        const certCount = (data.certifications || []).length;
        return (
          "A few reasons: hands-on IT support experience from his OJT, " +
          `${certCount} certifications spanning IT fundamentals, cloud, and AI/ML, ` +
          `${awardCount} awards/honors including academic excellence rankings and robotics competition placements, ` +
          "a leadership track record as CTO of the AWS Learning Community JRU chapter and Director of Sports for ICpEP (re-elected for a 2nd consecutive term, 2023–2026) — showing strong teamwork, communication, and adaptability — plus real customer-facing experience as a CSR at Teleperformance, and a broad skill set across " +
          "web development, mobile app development (Flutter/Android Studio), databases, AI, cybersecurity, and robotics/embedded systems. He's open to roles like AI Engineer, " +
          "Cybersecurity Analyst, Cloud Engineer, Network Engineer, and Web/Software/Mobile Developer — and he's easy to reach if you want to talk further.");
      }
    },
    {
      id: 'contact',
      patterns: ['contact', 'reach', 'email', 'available', 'phone', 'recruit', 'recruiter', 'interview', 'apply', 'get in touch'],
      handler: () => "You can reach Jerwin at <strong>jerwinenrique14@gmail.com</strong> or <strong>0947 738 8439</strong>. He's open to opportunities in IT support, web/software development, AI engineering, cybersecurity, cloud, and entry-level computer engineering roles."
    }
  ];

  // Given the user's message and a list of items, finds items whose
  // name(s) are actually mentioned in the message (word-level match,
  // so short words like "ai" or "c" don't over-match). Used to give a
  // focused answer about ONE skill/cert instead of the whole list.
  function findNamedMatches(q, items, getNames) {
    const qWords = q.split(/\W+/).filter(Boolean);
    return items.filter(item => {
      const names = getNames(item).filter(Boolean);
      return names.some(name => {
        const n = name.toLowerCase();
        // Direct substring match works for multi-word skill/cert names.
        if (n.length > 3 && q.includes(n)) return true;
        // Also try matching on the "headline" word before a parenthesis,
        // e.g. "Python Programming" -> check for "python" as a whole word.
        const mainPhrase = n.split('(')[0].trim();
        if (mainPhrase.length > 3 && q.includes(mainPhrase)) return true;
        // Whole-word match against individual significant words in the name
        // (skips tiny/common words so "ai" alone doesn't match everything).
        const significantWords = mainPhrase.split(/\W+/).filter(w => w.length >= 4);
        return significantWords.some(w => qWords.includes(w));
      });
    });
  }

  function detectIntents(q) {
    const matched = [];
    for (const intent of intents) {
      const hit = intent.patterns.some(p => q.includes(p));
      if (hit) matched.push(intent);
    }
    return matched;
  }

  function getBotResponse(question) {
    const q = question.toLowerCase().trim();
    const data = window.PORTFOLIO_DATA || {};

    // Quick, short follow-ups ("and skills?", "what about awards") reuse
    // whichever intent list they mention, same as a full question would.
    let matched = detectIntents(q);

    // Bare follow-up like "and?" / "more?" / "tell me more" — reuse last topic.
    if (matched.length === 0 && lastIntentId && /\b(more|and\??|else|tell me more|go on)\b/.test(q)) {
      const prev = intents.find(i => i.id === lastIntentId);
      if (prev) matched = [prev];
    }

    if (matched.length === 0) {
      return "I'm Winz, Jerwin's portfolio assistant. You can ask me about:<br><br>" +
        "• Education, leadership & work experience<br>" +
        "• Technical skills (web dev, AI, databases, robotics/PCB, programming languages)<br>" +
        "• Certifications & what they mean<br>" +
        "• Projects & thesis<br>" +
        "• Awards & academic honors<br>" +
        "• How to get in touch or view his resume<br><br>" +
        "What would you like to know?";
    }

    // Greeting / who-are-you intents stand alone even if other words matched.
    const exclusive = matched.find(i => i.exclusive);
    if (exclusive) {
      lastIntentId = exclusive.id;
      return exclusive.handler(data, q);
    }

    // De-duplicate (e.g. "skills" and "certifications" both mention "AI").
    const seen = new Set();
    const sections = [];
    for (const intent of matched) {
      if (seen.has(intent.id)) continue;
      seen.add(intent.id);
      const out = intent.handler(data, q);
      if (out) sections.push(out);
    }

    if (sections.length === 0) {
      return "I don't have that specific info yet — try asking about experience, skills, certifications, projects, awards, leadership, or contact info.";
    }

    lastIntentId = matched[matched.length - 1].id;
    return sections.join('<hr style="border:none;border-top:1px dashed rgba(255,255,255,0.12);margin:10px 0;">');
  }
});

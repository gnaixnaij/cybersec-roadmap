const ROADMAP_DATA = {
  tracks: [
    {
      id: "soc-analyst",
      title: "SOC Analyst",
      icon: "🛡️",
      description: "Monitor, detect, and respond to security threats. Entry-level security role with clear progression.",
      levels: [
        {
          name: "Beginner",
          skills: [
            {
              name: "Networking Fundamentals",
              resources: [
                { name: "Professor Messer N10-008 (free)", url: "https://www.youtube.com/playlist?list=PLG49S3nxzAnnV0AqX9WoLv2eX2ZZwHj8b" },
                { name: "TryHackMe - Pre Security", url: "https://tryhackme.com/path/outline/presecurity" },
              ],
              free: true
            },
            {
              name: "Operating Systems (Windows & Linux)",
              resources: [
                { name: "Linux Journey", url: "https://linuxjourney.com/" },
                { name: "TryHackMe - Linux Fundamentals", url: "https://tryhackme.com/module/linux-fundamentals" },
                { name: "Windows Command Line Tutorial", url: "https://www.youtube.com/playlist?list=PL6n9fhu94yhX1Hm6P7QqWOs_lV4Zr92J3" },
              ],
              free: true
            },
            {
              name: "Security Fundamentals",
              resources: [
                { name: "Cybrary - Security+ (free tier)", url: "https://www.cybrary.it/course/comptia-security-plus/" },
                { name: "TryHackMe - Introduction to Cyber Security", url: "https://tryhackme.com/path/outline/introductiontocybersecurity" },
              ],
              free: true
            },
            {
              name: "Log Analysis Basics",
              resources: [
                { name: "TryHackMe - Intro to Log Analysis", url: "https://tryhackme.com/room/loganalysisintro" },
                { name: "Splunk Fundamentals (free tier)", url: "https://www.splunk.com/en_us/training/free-courses/splunk-fundamentals-1.html" },
              ],
              free: true
            },
          ]
        },
        {
          name: "Intermediate",
          skills: [
            {
              name: "SIEM Operations (Splunk, ELK)",
              resources: [
                { name: "TryHackMe - Splunk 101", url: "https://tryhackme.com/room/splunk101" },
                { name: "Elastic Stack Tutorials (free)", url: "https://www.elastic.co/training/free" },
              ],
              free: true
            },
            {
              name: "Threat Intelligence",
              resources: [
                { name: "MITRE ATT&CK Navigator", url: "https://mitre-attack.github.io/attack-navigator/" },
                { name: "OpenCTI Documentation", url: "https://docs.opencti.io/latest/" },
              ],
              free: true
            },
            {
              name: "Incident Response Process",
              resources: [
                { name: "NIST Incident Response Guide (free PDF)", url: "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-61r2.pdf" },
                { name: "TryHackMe - Incident Response", url: "https://tryhackme.com/room/incidentresponseplaybook" },
              ],
              free: true
            },
            {
              name: "Network Traffic Analysis",
              resources: [
                { name: "TryHackMe - Wireshark 101", url: "https://tryhackme.com/room/wireshark101" },
                { name: "Cyber Cheatsheet - Wireshark Filters", url: "https://gnaixnaij.github.io/cyber-cheatsheet/" },
              ],
              free: true
            },
          ]
        },
        {
          name: "Advanced",
          skills: [
            {
              name: "Malware Analysis",
              resources: [
                { name: "Malware Decode Lab - Tutorials", url: "https://gnaixnaij.github.io/malware-decode-lab/" },
                { name: "Deobfuscator Web App", url: "https://deobfuscator-web.onrender.com/" },
                { name: "TryHackMe - Intro to Malware Analysis", url: "https://tryhackme.com/room/intromalwareanalysis" },
              ],
              free: true
            },
            {
              name: "Detection Engineering",
              resources: [
                { name: "Sigma Rules Documentation", url: "https://sigmahq.io/" },
                { name: "Sigma Rules GitHub", url: "https://github.com/SigmaHQ/sigma" },
              ],
              free: true
            },
            {
              name: "Threat Hunting",
              resources: [
                { name: "TryHackMe - Threat Hunting", url: "https://tryhackme.com/room/threathunting" },
                { name: "Active Countermeasures - TH (free)", url: "https://www.activecountermeasures.com/free-threat-hunting-training/" },
              ],
              free: true
            },
            {
              name: "Automation & Scripting",
              resources: [
                { name: "Python for Everyone (free)", url: "https://www.py4e.com/" },
                { name: "PowerShell Documentation (free)", url: "https://learn.microsoft.com/en-us/powershell/" },
              ],
              free: true
            },
          ]
        },
      ]
    },
    {
      id: "pentester",
      title: "Penetration Tester",
      icon: "🔓",
      description: "Find and exploit vulnerabilities. Offensive security role spanning web, network, and cloud.",
      levels: [
        {
          name: "Beginner",
          skills: [
            {
              name: "Networking & Protocols",
              resources: [
                { name: "Professor Messer N10-008 (free)", url: "https://www.youtube.com/playlist?list=PLG49S3nxzAnnV0AqX9WoLv2eX2ZZwHj8b" },
                { name: "TryHackMe - Pre Security", url: "https://tryhackme.com/path/outline/presecurity" },
              ],
              free: true
            },
            {
              name: "Linux for Pentesting",
              resources: [
                { name: "Kali Linux Revealed (free PDF)", url: "https://kali.training/" },
                { name: "TryHackMe - Kali Linux", url: "https://tryhackme.com/room/kalilinuxintro" },
              ],
              free: true
            },
            {
              name: "Web Application Basics",
              resources: [
                { name: "PortSwigger Web Security Academy (free)", url: "https://portswigger.net/web-security" },
                { name: "TryHackMe - Web Fundamentals", url: "https://tryhackme.com/room/webfundamentals" },
              ],
              free: true
            },
            {
              name: "Reconnaissance",
              resources: [
                { name: "Cyber Cheatsheet - Recon Section", url: "https://gnaixnaij.github.io/cyber-cheatsheet/" },
                { name: "TryHackMe - Passive Recon", url: "https://tryhackme.com/room/passiverecon" },
              ],
              free: true
            },
          ]
        },
        {
          name: "Intermediate",
          skills: [
            {
              name: "Web Exploitation",
              resources: [
                { name: "PortSwigger Academy (free, 200+ labs)", url: "https://portswigger.net/web-security/all-labs" },
                { name: "TryHackMe - OWASP Top 10", url: "https://tryhackme.com/room/owasptop102021" },
                { name: "Cyber Cheatsheet - Web Exploitation", url: "https://gnaixnaij.github.io/cyber-cheatsheet/" },
              ],
              free: true
            },
            {
              name: "Network Exploitation",
              resources: [
                { name: "TryHackMe - Network Security", url: "https://tryhackme.com/room/intronetworksecurity" },
                { name: "Cyber Cheatsheet - Exploitation Section", url: "https://gnaixnaij.github.io/cyber-cheatsheet/" },
              ],
              free: true
            },
            {
              name: "Active Directory Attacks",
              resources: [
                { name: "TryHackMe - Attacktive Directory", url: "https://tryhackme.com/room/attacktivedirectory" },
                { name: "Cyber Cheatsheet - Lateral Movement", url: "https://gnaixnaij.github.io/cyber-cheatsheet/" },
              ],
              free: true
            },
            {
              name: "Password Cracking",
              resources: [
                { name: "Cyber Cheatsheet - Password Cracking", url: "https://gnaixnaij.github.io/cyber-cheatsheet/" },
                { name: "TryHackMe - John the Ripper", url: "https://tryhackme.com/room/johntheripper0" },
              ],
              free: true
            },
          ]
        },
        {
          name: "Advanced",
          skills: [
            {
              name: "Cloud Pentesting (AWS/Azure)",
              resources: [
                { name: "TryHackMe - Cloud Security", url: "https://tryhackme.com/room/cloudsecurityintro" },
                { name: "Cyber Cheatsheet - Cloud Section", url: "https://gnaixnaij.github.io/cyber-cheatsheet/" },
              ],
              free: true
            },
            {
              name: "Mobile App Pentesting",
              resources: [
                { name: "OWASP Mobile Testing Guide (free)", url: "https://owasp.org/www-project-mobile-security-testing-guide/" },
              ],
              free: true
            },
            {
              name: "API Security Testing",
              resources: [
                { name: "PortSwigger - API Testing", url: "https://portswigger.net/web-security/api-testing" },
                { name: "Cyber Cheatsheet - API Attacks", url: "https://gnaixnaij.github.io/cyber-cheatsheet/" },
              ],
              free: true
            },
            {
              name: "Report Writing & Communication",
              resources: [
                { name: "PTES Report Template (free)", url: "http://www.pentest-standard.org/index.php/PTES_Technical_Guidelines" },
              ],
              free: true
            },
          ]
        },
      ]
    },
    {
      id: "malware-analyst",
      title: "Malware Analyst",
      icon: "🔬",
      description: "Reverse engineer malicious software. Understand how malware works, extract IOCs, and build detection.",
      levels: [
        {
          name: "Beginner",
          skills: [
            {
              name: "Programming Fundamentals (Python, C)",
              resources: [
                { name: "Python for Everyone (free)", url: "https://www.py4e.com/" },
                { name: "CS50 (free, Harvard)", url: "https://cs50.harvard.edu/" },
              ],
              free: true
            },
            {
              name: "Assembly Basics",
              resources: [
                { name: "TryHackMe - Intro to x86-64", url: "https://tryhackme.com/room/introtox8664" },
                { name: "x86 Assembly Guide (free)", url: "https://www.cs.virginia.edu/~evans/cs216/guides/x86.html" },
              ],
              free: true
            },
            {
              name: "PE File Format",
              resources: [
                { name: "0xk4lu - PE Structure (free)", url: "https://0xk4lu.medium.com/pe-structure-from-a-malware-analysts-perspective-2edf7039954b" },
                { name: "Microsoft PE Format Docs", url: "https://learn.microsoft.com/en-us/windows/win32/debug/pe-format" },
              ],
              free: true
            },
          ]
        },
        {
          name: "Intermediate",
          skills: [
            {
              name: "Static Analysis",
              resources: [
                { name: "Malware Decode Lab - Tutorial 1", url: "https://gnaixnaij.github.io/malware-decode-lab/tutorials/01-powershell-download-cradle/" },
                { name: "Deobfuscator Web App", url: "https://deobfuscator-web.onrender.com/" },
                { name: "LOLBAS Project (free)", url: "https://lolbas-project.github.io/" },
              ],
              free: true
            },
            {
              name: "Dynamic Analysis (Sandboxing)",
              resources: [
                { name: "TryHackMe - Dynamic Analysis", url: "https://tryhackme.com/room/dynamicanalysis" },
                { name: "Cuckoo Sandbox Docs (free)", url: "https://cuckoo.sh/docs/" },
              ],
              free: true
            },
            {
              name: "Memory Forensics",
              resources: [
                { name: "TryHackMe - Memory Forensics", url: "https://tryhackme.com/room/memoryforensics" },
                { name: "Volatility Wiki (free)", url: "https://github.com/volatilityfoundation/volatility/wiki" },
              ],
              free: true
            },
            {
              name: "YARA Rule Writing",
              resources: [
                { name: "YARA Documentation (free)", url: "https://yara.readthedocs.io/" },
                { name: "TryHackMe - YARA", url: "https://tryhackme.com/room/yara" },
              ],
              free: true
            },
          ]
        },
        {
          name: "Advanced",
          skills: [
            {
              name: "Exploit Analysis",
              resources: [
                { name: "TryHackMe - Buffer Overflow", url: "https://tryhackme.com/room/bufferoverflowprep" },
                { name: "Corelan Exploit Writing (free)", url: "https://www.corelan.be/index.php/category/security/exploit-writing-tutorials/" },
              ],
              free: true
            },
            {
              name: "Packed & Obfuscated Malware",
              resources: [
                { name: "Deobfuscator - PowerShell/VBA/JS", url: "https://deobfuscator-web.onrender.com/" },
                { name: "Malware Decode Lab - Tutorial 3", url: "https://gnaixnaij.github.io/malware-decode-lab/tutorials/03-javascript-multi-layer/" },
              ],
              free: true
            },
            {
              name: "Threat Intelligence & Attribution",
              resources: [
                { name: "MITRE ATT&CK (free)", url: "https://attack.mitre.org/" },
                { name: "VirusTotal (free tier)", url: "https://www.virustotal.com/" },
              ],
              free: true
            },
            {
              name: "Automated Malware Analysis Pipelines",
              resources: [
                { name: "CAPE Sandbox (free)", url: "https://capev2.readthedocs.io/" },
                { name: "Strelka (free, open source)", url: "https://github.com/target/strelka" },
              ],
              free: true
            },
          ]
        },
      ]
    },
    {
      id: "security-engineer",
      title: "Security Engineer",
      icon: "⚙️",
      description: "Build and maintain security infrastructure. Focus on detection, prevention, and automation.",
      levels: [
        {
          name: "Beginner",
          skills: [
            {
              name: "System Administration (Linux & Windows)",
              resources: [
                { name: "Linux Journey (free)", url: "https://linuxjourney.com/" },
                { name: "Microsoft Learn - Windows Server (free)", url: "https://learn.microsoft.com/en-us/training/" },
              ],
              free: true
            },
            {
              name: "Cloud Fundamentals (AWS/Azure/GCP)",
              resources: [
                { name: "AWS Skill Builder (free tier)", url: "https://explore.skillbuilder.aws/learn" },
                { name: "Google Cloud Skills Boost (free tier)", url: "https://www.cloudskillsboost.google/" },
              ],
              free: true
            },
            {
              name: "Security Fundamentals",
              resources: [
                { name: "TryHackMe - Intro to Cyber Security", url: "https://tryhackme.com/path/outline/introductiontocybersecurity" },
                { name: "Cybrary - Security+ (free tier)", url: "https://www.cybrary.it/course/comptia-security-plus/" },
              ],
              free: true
            },
            {
              name: "Scripting for Automation (Python & Bash)",
              resources: [
                { name: "Python for Everyone (free)", url: "https://www.py4e.com/" },
                { name: "Learn Shell (free)", url: "https://www.learnshell.org/" },
              ],
              free: true
            },
          ]
        },
        {
          name: "Intermediate",
          skills: [
            {
              name: "Detection Engineering",
              resources: [
                { name: "Sigma Rules (free, community)", url: "https://github.com/SigmaHQ/sigma" },
                { name: "Deobfuscator - Generate Sigma Rules", url: "https://deobfuscator-web.onrender.com/" },
              ],
              free: true
            },
            {
              name: "Cloud Security (CSPM, IAM)",
              resources: [
                { name: "TryHackMe - Cloud Security", url: "https://tryhackme.com/room/cloudsecurityintro" },
                { name: "Cyber Cheatsheet - Cloud Section", url: "https://gnaixnaij.github.io/cyber-cheatsheet/" },
              ],
              free: true
            },
            {
              name: "Network Security (Firewalls, IDS/IPS)",
              resources: [
                { name: "Zeek Documentation (free)", url: "https://docs.zeek.org/en/master/" },
                { name: "Snort Documentation (free)", url: "https://www.snort.org/documents" },
              ],
              free: true
            },
            {
              name: "Vulnerability Management",
              resources: [
                { name: "TryHackMe - Vulnerability Research", url: "https://tryhackme.com/room/vulnerabilityresearch" },
                { name: "OpenVAS Docs (free)", url: "https://www.greenbone.net/en/" },
              ],
              free: true
            },
          ]
        },
        {
          name: "Advanced",
          skills: [
            {
              name: "SIEM Architecture & Tuning",
              resources: [
                { name: "Elastic Security Labs (free)", url: "https://www.elastic.co/security-labs/" },
                { name: "Splunk Boss of the SOC (free)", url: "https://bots.splunk.com/" },
              ],
              free: true
            },
            {
              name: "Incident Response Automation (SOAR)",
              resources: [
                { name: "Shuffle SOAR (free tier)", url: "https://shuffler.io/" },
                { name: "TheHive Project (free)", url: "https://github.com/TheHive-Project/TheHive" },
              ],
              free: true
            },
            {
              name: "Compliance & Frameworks (NIST, ISO)",
              resources: [
                { name: "NIST CSF (free PDF)", url: "https://www.nist.gov/cyberframework" },
                { name: "CIS Controls (free)", url: "https://www.cisecurity.org/controls" },
              ],
              free: true
            },
            {
              name: "Infrastructure as Code Security",
              resources: [
                { name: "Checkov (free, open source)", url: "https://www.checkov.io/" },
                { name: "TryHackMe - IaC Security", url: "https://tryhackme.com/room/iacsecurity" },
              ],
              free: true
            },
          ]
        },
      ]
    },
  ]
};

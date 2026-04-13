// Mock data for IAM Engineer Portfolio

export const personalInfo = {
  name: "Akash Shukla",
  title: "IAM Engineer",
  tagline: "Securing Digital Identities & Access Management",
  bio: "Experienced Identity and Access Management Engineer specializing in zero-trust architecture, SSO implementations, and enterprise-grade security solutions. Passionate about building robust authentication systems that balance security with user experience.",
  email: "akashshuklaofficial@gmail.com",
  location: "kolkata India ",
  resumeUrl: "/resume.pdf",
  social: {
    github: "https://github.com/alexmorgan",
    linkedin: "https://linkedin.com/in/alexmorgan",
    medium: "https://medium.com/@alexmorgan",
    twitter: "https://twitter.com/alexmorgan"
  }
};

export const projects = [
  {
    id: 1,
    title: "Enterprise SSO Platform",
    description: "Designed and implemented a centralized Single Sign-On solution for 10,000+ users across multiple cloud applications using Okta and SAML 2.0.",
    technologies: ["Okta", "SAML 2.0", "OAuth 2.0", "Azure AD", "Python"],
    outcomes: ["Reduced login friction by 60%", "Improved security compliance", "Automated user provisioning"],
    category: "IAM Architecture",
    year: "2024"
  },
  {
    id: 2,
    title: "Zero Trust Authentication System",
    description: "Built a comprehensive zero-trust authentication framework with adaptive MFA, device trust, and context-aware access policies.",
    technologies: ["Duo Security", "OAuth 2.0", "FIDO2", "Risk-Based Auth", "Node.js"],
    outcomes: ["Zero security breaches post-implementation", "98% user satisfaction", "Reduced unauthorized access by 95%"],
    category: "Security",
    year: "2023"
  },
  {
    id: 3,
    title: "Privileged Access Management",
    description: "Deployed CyberArk PAM solution to manage and monitor privileged accounts, implementing just-in-time access and session recording.",
    technologies: ["CyberArk", "PowerShell", "Active Directory", "LDAP", "Vault"],
    outcomes: ["Protected 500+ privileged accounts", "Full audit trail compliance", "Eliminated shared credentials"],
    category: "Access Management",
    year: "2023"
  },
  {
    id: 4,
    title: "Identity Governance Automation",
    description: "Automated identity lifecycle management and access certification processes using SailPoint IdentityIQ, reducing manual overhead by 70%.",
    technologies: ["SailPoint", "Java", "REST APIs", "SQL", "BeanShell"],
    outcomes: ["70% reduction in manual processes", "100% compliance in access reviews", "Faster user onboarding"],
    category: "Automation",
    year: "2024"
  }
];

export const skills = [
  { name: "Identity & Access Management", level: 95, category: "core" },
  { name: "Single Sign-On (SSO)", level: 90, category: "core" },
  { name: "Multi-Factor Authentication", level: 92, category: "core" },
  { name: "OAuth 2.0 / OIDC", level: 88, category: "protocols" },
  { name: "SAML 2.0", level: 90, category: "protocols" },
  { name: "LDAP / Active Directory", level: 85, category: "protocols" },
  { name: "Zero Trust Architecture", level: 87, category: "architecture" },
  { name: "Privileged Access Management", level: 83, category: "security" },
  { name: "Identity Governance", level: 86, category: "governance" },
  { name: "Security Compliance (SOC2, GDPR)", level: 82, category: "compliance" }
];

export const tools = [
  {
    category: "IAM Platforms",
    items: [
      { name: "Okta", icon: "shield-check" },
      { name: "Azure AD", icon: "cloud" },
      { name: "SailPoint", icon: "anchor" },
      { name: "CyberArk", icon: "lock" },
      { name: "Ping Identity", icon: "radio" }
    ]
  },
  {
    category: "Security & Auth",
    items: [
      { name: "Duo Security", icon: "smartphone" },
      { name: "Auth0", icon: "key" },
      { name: "FIDO2/WebAuthn", icon: "fingerprint" },
      { name: "Vault (HashiCorp)", icon: "database" },
      { name: "Keycloak", icon: "shield" }
    ]
  },
  {
    category: "Development",
    items: [
      { name: "Python", icon: "code" },
      { name: "PowerShell", icon: "terminal" },
      { name: "JavaScript/Node.js", icon: "braces" },
      { name: "REST APIs", icon: "api" },
      { name: "Git", icon: "git-branch" }
    ]
  },
  {
    category: "Infrastructure",
    items: [
      { name: "AWS", icon: "cloud" },
      { name: "Azure", icon: "cloud-cog" },
      { name: "Docker", icon: "container" },
      { name: "Kubernetes", icon: "boxes" },
      { name: "Terraform", icon: "blocks" }
    ]
  }
];

export const articles = [
  {
    id: 1,
    title: "Implementing Zero Trust: A Practical Guide for Enterprises",
    excerpt: "Zero Trust is more than a buzzword. Learn how to implement a comprehensive Zero Trust architecture with practical steps and real-world examples.",
    date: "2024-06-15",
    readTime: "8 min read",
    tags: ["Zero Trust", "Security", "IAM"],
    url: "https://medium.com/@alexmorgan/zero-trust-guide"
  },
  {
    id: 2,
    title: "OAuth 2.0 vs SAML: Choosing the Right Protocol",
    excerpt: "Understanding the differences between OAuth 2.0 and SAML can help you make better architectural decisions. Here's a comprehensive comparison.",
    date: "2024-05-22",
    readTime: "6 min read",
    tags: ["OAuth", "SAML", "Protocols"],
    url: "https://medium.com/@alexmorgan/oauth-vs-saml"
  },
  {
    id: 3,
    title: "Automating Identity Lifecycle Management at Scale",
    excerpt: "Manual identity management doesn't scale. Discover automation strategies that reduced our identity operations overhead by 70%.",
    date: "2024-04-10",
    readTime: "10 min read",
    tags: ["Automation", "IGA", "DevOps"],
    url: "https://medium.com/@alexmorgan/identity-automation"
  },
  {
    id: 4,
    title: "Privileged Access Management Best Practices",
    excerpt: "Protecting privileged accounts is critical. Learn the best practices for implementing PAM solutions in enterprise environments.",
    date: "2024-03-18",
    readTime: "7 min read",
    tags: ["PAM", "Security", "Best Practices"],
    url: "https://medium.com/@alexmorgan/pam-best-practices"
  },
  {
    id: 5,
    title: "The Future of Passwordless Authentication",
    excerpt: "Passwords are dying. Explore the emerging technologies and standards that are making passwordless authentication a reality.",
    date: "2024-02-25",
    readTime: "5 min read",
    tags: ["Passwordless", "FIDO2", "Future"],
    url: "https://medium.com/@alexmorgan/passwordless-future"
  },
  {
    id: 6,
    title: "Building Secure APIs with OAuth 2.0",
    excerpt: "API security starts with proper authentication. A deep dive into implementing OAuth 2.0 for secure API access control.",
    date: "2024-01-30",
    readTime: "9 min read",
    tags: ["API Security", "OAuth", "Development"],
    url: "https://medium.com/@alexmorgan/secure-apis-oauth"
  }
];

export const experiences = [
  {
    id: 1,
    role: "IAM Engineer",
    company: "Tata Consultancy Services",
    location: "Kolkata, India",
    duration: "May 2025 – Present",
    type: "Full-time",
    description: "Worked on KPMG global project delivering IAM solutions using Microsoft Entra ID (Azure AD) and On-Prem Active Directory.",
    responsibilities: [
      "Managed user and group lifecycle (provisioning, modification, decommissioning).",
      "Administered DNS records for AD-integrated services.",
      "Created and managed GPOs for security and compliance.",
      "Implemented RBAC and least-privilege access controls.",
      "Configured Enterprise Apps, App Registrations, and SSO (SAML, OIDC).",
      "Designed Conditional Access Policies with MFA and security controls.",
      "Managed gMSA and Group-Based Licensing (M365).",
      "Handled certificate lifecycle via CLM Portal and DigiCert coordination.",
      "Provisioned users (internal, external, contractors).",
      "Troubleshot AD/Entra ID issues (auth, DNS, GPO, access).",
      "Ensured security compliance and identity governance.",
      "Automated tasks using PowerShell.",
      "Collaborated with SCOM team for monitoring and access issues.",
      "Supported AD recovery using Semperis DSP."
    ],
    technologies: ["Okta", "Azure AD", "SAML 2.0", "OAuth 2.0", "Python"]
  },
  {
    id: 2,
    role: "Application Development and Cybersecurity Intern",
    company: "Mahindra Defence Systems Limited",
    location: "Lucknow , India",
    duration: "July 2023 – september 2023",
    type: "Intern",
    description: "Managed identity lifecycle, access reviews, and PAM solutions for enterprise clients.",
    responsibilities: [
      "Worked with Application Development team and gained experience in web development using Django and Python.",
      "Worked with Security Operations Center (SOC) team on cybersecurity fundamentals.",
      "Hands-on experience with Firewalls and network security.",
      "Worked with Trend Micro Apex-One Antivirus for endpoint protection.",
      "Used Trend Micro Deep Security HIPS for host intrusion prevention.",
      "Worked with SIEM tools for security monitoring and incident response."
    ],
    technologies: ["Active Directory", "CyberArk", "LDAP", "PowerShell"]
  }
];

export const certifications = [
  { name: "Certified Information Systems Security Professional (CISSP)", issuer: "(ISC)²", year: "2023" },
  { name: "Certified Identity and Access Manager (CIAM)", issuer: "IDPro", year: "2024" },
  { name: "Okta Certified Professional", issuer: "Okta", year: "2023" },
  { name: "AWS Certified Security - Specialty", issuer: "Amazon", year: "2022" },
  { name: "CyberArk Certified Trustee", issuer: "CyberArk", year: "2023" }
];

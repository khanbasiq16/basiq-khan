import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Bell,
  Bot,
  Building2,
  Calendar,
  CalendarClock,
  Check,
  Clock,
  Cloud,
  Code2,
  Database,
  Fingerprint,
  GraduationCap,
  HardDrive,
  HeartPulse,
  Home,
  Infinity as InfinityIcon,
  KeyRound,
  Landmark,
  LayoutDashboard,
  Lock,
  LogOut,
  MessageSquare,
  Package,
  Plane,
  Rocket,
  Search,
  Settings,
  ShieldCheck,
  ShoppingBag,
  ShoppingCart,
  Sparkles,
  TrendingUp,
  Truck,
  UtensilsCrossed,
  Users,
  Wallet,
  Webhook,
  Workflow,
  X,
  Zap,
  type LucideIcon,
} from "lucide-react";
import {
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJsonwebtokens,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiRailway,
  SiReact,
  SiStripe,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { LaptopMockup, PhoneMockup } from "@/components/ui/device-mockup";
import { Reveal, TextReveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { Process } from "@/components/sections/process";
import { Testimonials } from "@/components/sections/testimonials";
import { FAQ } from "@/components/sections/faq";
import { CTA } from "@/components/sections/cta";
import { cn } from "@/lib/utils";
import { FaAws } from "react-icons/fa6";

export const metadata: Metadata = {
  title: "Web Applications",
  description:
    "Custom web applications — SaaS platforms, CRM & ERP systems, dashboards, marketplaces and booking systems built with Next.js, React and Node.js for real-world scale.",
  alternates: { canonical: "/services/web-applications" },
};

const toneStyles = {
  blue: "bg-blue-50 text-blue-600",
  violet: "bg-violet-50 text-violet-600",
  rose: "bg-rose-50 text-rose-600",
  sky: "bg-sky-50 text-sky-600",
  emerald: "bg-emerald-50 text-emerald-600",
  orange: "bg-orange-50 text-orange-600",
  fuchsia: "bg-fuchsia-50 text-fuchsia-600",
  indigo: "bg-indigo-50 text-indigo-600",
} as const;

type Tone = keyof typeof toneStyles;
const toneKeys = Object.keys(toneStyles) as Tone[];

/* ── Data ────────────────────────────────────────────────────────────── */

const webAppTech: { name: string; node: React.ReactNode }[] = [
  { name: "React", node: <SiReact className="size-6 text-[#61DAFB]" /> },
  { name: "Next.js", node: <SiNextdotjs className="size-6 text-ink" /> },
  { name: "Node.js", node: <SiNodedotjs className="size-6 text-[#5FA04E]" /> },
  { name: "Express", node: <SiExpress className="size-6 text-ink" /> },
  { name: "TypeScript", node: <SiTypescript className="size-6 text-[#3178C6]" /> },
  { name: "Tailwind CSS", node: <SiTailwindcss className="size-6 text-[#38BDF8]" /> },
  { name: "MySQL", node: <SiMysql className="size-6 text-[#4479A1]" /> },
  { name: "MongoDB", node: <SiMongodb className="size-6 text-[#47A248]" /> },
  { name: "Docker", node: <SiDocker className="size-6 text-[#2496ED]" /> },
  {
    name: "AWS",
    node: <FaAws className="size-5 " />,
  }, { name: "Stripe", node: <SiStripe className="size-6 text-[#635BFF]" /> },
  { name: "OpenAI", node: <Bot className="size-6 text-[#10A37F]" strokeWidth={2} /> },
];

const buildTypes: { title: string; description: string; icon: LucideIcon; tone: Tone }[] = [
  {
    title: "SaaS Platforms",
    description: "Scalable, subscription-based SaaS products built for growth.",
    icon: Cloud,
    tone: "blue",
  },
  {
    title: "CRM Systems",
    description: "Customer relationship tools that keep your sales pipeline organized.",
    icon: Users,
    tone: "violet",
  },
  {
    title: "ERP Systems",
    description: "Enterprise resource planning software that connects every department.",
    icon: Building2,
    tone: "rose",
  },
  {
    title: "Marketplace Platforms",
    description: "Multi-vendor marketplaces built for buyers and sellers.",
    icon: ShoppingBag,
    tone: "sky",
  },
  {
    title: "Inventory Systems",
    description: "Stock, order and inventory management built around your workflow.",
    icon: Package,
    tone: "emerald",
  },
  {
    title: "Booking Systems",
    description: "Appointment and reservation systems with real-time scheduling.",
    icon: CalendarClock,
    tone: "orange",
  },
  {
    title: "Learning Management",
    description: "LMS platforms for courses, students and progress tracking.",
    icon: GraduationCap,
    tone: "fuchsia",
  },
  {
    title: "AI Applications",
    description: "Smart applications powered by OpenAI and custom automations.",
    icon: Sparkles,
    tone: "indigo",
  },
  {
    title: "Custom Business Software",
    description: "Bespoke software tailored to your exact business logic.",
    icon: Code2,
    tone: "blue",
  },
];

const benefits: { title: string; description: string; icon: LucideIcon }[] = [
  { title: "Increase Productivity", description: "Automate repetitive tasks so your team can focus on what matters.", icon: TrendingUp },
  { title: "Automate Workflow", description: "Replace manual processes with reliable, automated workflows.", icon: Workflow },
  { title: "Save Time", description: "Centralized systems cut hours of manual admin work every week.", icon: Clock },
  { title: "Centralize Your Data", description: "One source of truth instead of scattered spreadsheets and tools.", icon: Database },
  { title: "Improve Security", description: "Role-based access, encryption and backups built in from day one.", icon: ShieldCheck },
  { title: "Scale Without Limits", description: "Architecture built to handle growth without a costly rewrite.", icon: InfinityIcon },
];

const featuredApps: { title: string; category: string; image: string }[] = [
  { title: "Regalia Command ERP", category: "Enterprise ERP System", image: "/dashboard.png" },
  { title: "PatientsDoc", category: "Healthcare Booking Platform", image: "/dashbaord2.png" },
  { title: "HumanEdge", category: "HR & Workforce Management", image: "/dashbaord3.png" },
  { title: "NexusERP — Workforce Dashboard", category: "HR Attendance System", image: "/dashbaord4.png" },
  { title: "AssetDesk", category: "Inventory & Asset Management", image: "/dashbaord5.png" },
  { title: "NexusERP — Attendance Register", category: "HR Attendance System", image: "/dashbaord6.png" },
];

const featuresIncluded = [
  "User Authentication & Authorization",
  "Admin Panel & Dashboard",
  "Role & Permission Management",
  "Dashboard & Analytics",
  "API Integrations",
  "Real-Time Notifications",
  "Payment Gateway Integration",
  "Email & SMS Notifications",
  "Fully Responsive Design",
  "SEO Friendly Structure",
  "Optimized Performance",
  "Data Security & Backups",
];

const stackCategories: { category: string; items: { name: string; node: React.ReactNode }[] }[] = [
  {
    category: "Frontend",
    items: [
      { name: "React", node: <SiReact className="size-5 text-[#61DAFB]" /> },
      { name: "Next.js", node: <SiNextdotjs className="size-5 text-ink" /> },
      { name: "TypeScript", node: <SiTypescript className="size-5 text-[#3178C6]" /> },
      { name: "Tailwind CSS", node: <SiTailwindcss className="size-5 text-[#38BDF8]" /> },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", node: <SiNodedotjs className="size-5 text-[#5FA04E]" /> },
      { name: "Express", node: <SiExpress className="size-5 text-ink" /> },
      { name: "REST API", node: <Webhook className="size-5 text-brand-500" /> },
      { name: "JWT Auth", node: <SiJsonwebtokens className="size-5 text-[#FB015B]" /> },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "MySQL", node: <SiMysql className="size-5 text-[#4479A1]" /> },
      { name: "MongoDB", node: <SiMongodb className="size-5 text-[#47A248]" /> },
      { name: "Firebase", node: <SiFirebase className="size-5 text-[#FFCA28]" /> },
    ],
  },
  {
    category: "Deployment",
    items: [
{
  name: "AWS",
  node: <FaAws className="size-5 " />,
},      { name: "Vercel", node: <SiVercel className="size-5 text-ink" /> },
      { name: "Railway", node: <SiRailway className="size-5 text-[#0B0D0E]" /> },
      { name: "Docker", node: <SiDocker className="size-5 text-[#2496ED]" /> },
    ],
  },
];

const comparisonRows = [
  { template: "Limited Features", custom: "Unlimited Features" },
  { template: "Slow Workflow", custom: "Automated Workflow" },
  { template: "Difficult Scaling", custom: "Easy Scaling" },
  { template: "Generic Design", custom: "Tailored Solution" },
  { template: "Monthly Limitations", custom: "Complete Ownership" },
];

const industries: { label: string; icon: LucideIcon }[] = [
  { label: "Healthcare", icon: HeartPulse },
  { label: "Finance", icon: Landmark },
  { label: "Real Estate", icon: Home },
  { label: "Education", icon: GraduationCap },
  { label: "Restaurant", icon: UtensilsCrossed },
  { label: "Logistics", icon: Truck },
  { label: "Ecommerce", icon: ShoppingCart },
  { label: "Travel & Tourism", icon: Plane },
];

const performanceMetrics = [
  { label: "Performance", value: 98, color: "#4F6BFF" },
  { label: "Accessibility", value: 100, color: "#22C55E" },
  { label: "Best Practices", value: 100, color: "#8098FF" },
  { label: "SEO", value: 95, color: "#F59E0B" },
];

const securityFeatures: { label: string; icon: LucideIcon }[] = [
  { label: "SSL Encryption", icon: Lock },
  { label: "JWT Authentication", icon: KeyRound },
  { label: "Role Based Permissions", icon: ShieldCheck },
  { label: "Database Backup", icon: HardDrive },
  { label: "API Security", icon: Webhook },
  { label: "Data Encryption", icon: Fingerprint },
];

const webAppFaqs = [
  {
    question: "How long does it take to build a web application?",
    answer:
      "It depends on scope. A focused MVP with core features typically takes 4–6 weeks, while a full-featured SaaS platform with dashboards, auth and integrations can take 8–14 weeks. You get a fixed timeline with milestones before work starts.",
  },
  {
    question: "Can you integrate third-party APIs?",
    answer:
      "Yes — payment gateways like Stripe, CRMs, email providers, analytics tools, mapping services and custom internal APIs. Integrations are built with proper error handling and webhooks, not fire-and-forget calls.",
  },
  {
    question: "Which technologies do you use for development?",
    answer:
      "Next.js, React and TypeScript on the frontend, Node.js and Express on the backend, with MySQL or MongoDB depending on the data model. Deployment runs on AWS, Vercel or Railway depending on your scale and budget.",
  },
  {
    question: "Do you build SaaS applications?",
    answer:
      "Yes, SaaS platforms are one of my core specialties — multi-tenant architecture, subscription billing with Stripe, role-based access and usage dashboards, built to scale past your first thousand users.",
  },
  {
    question: "Can you redesign my existing application?",
    answer:
      "Absolutely. I start with an audit of your current codebase, database and UX, then propose a plan that migrates your data safely while modernizing the interface and fixing performance bottlenecks.",
  },
  {
    question: "How do you ensure data security?",
    answer:
      "SSL encryption, hashed credentials, JWT-based authentication, role-based permissions and regular automated backups are standard on every build — not an optional add-on.",
  },
];

/* ── Local, image-free UI mockups (match device-mockup.tsx's approach) ─ */

function ScoreRing({ value, color, size = 40 }: { value: number; color: string; size?: number }) {
  const radius = (size - 5) / 2;
  const circumference = 2 * Math.PI * radius;
  const dash = (value / 100) * circumference;
  return (
    <svg viewBox={`0 0 ${size} ${size}`} width={size} height={size} className="-rotate-90 shrink-0" aria-hidden>
      <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="#E5E7EB" strokeWidth="4" />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        strokeDasharray={`${dash} ${circumference}`}
      />
    </svg>
  );
}

function AppDashboardMockup() {
  return (
    <div className="relative mx-auto max-w-[460px]">
      <span aria-hidden className="absolute -inset-10 -z-10 rounded-full bg-brand-500/20 blur-[90px]" />
      <LaptopMockup />
      <div className="absolute -bottom-8 -right-2 rotate-[6deg] sm:-right-6">
        <PhoneMockup />
      </div>
    </div>
  );
}

function UsersPanelMockup() {
  const users = [
    { name: "Ayesha Khan", role: "Admin", value: 82 },
    { name: "Daniel Cole", role: "Editor", value: 64 },
    { name: "Priya Raman", role: "Viewer", value: 47 },
  ];
  return (
    <div className="relative mx-auto max-w-[440px]">
      <span aria-hidden className="absolute -inset-10 -z-10 rounded-full bg-brand-500/20 blur-[90px]" />
      <div className="card-surface p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[0.7rem] font-semibold text-ink-muted">Active Users</p>
            <p className="mt-1 font-display text-2xl font-extrabold text-ink">12,540</p>
          </div>
          <div className="relative grid shrink-0 place-items-center">
            <ScoreRing value={75} color="#4F6BFF" size={64} />
            <span className="absolute text-sm font-extrabold text-ink">75%</span>
          </div>
        </div>

        <ul className="mt-6 flex flex-col gap-3">
          {users.map((u) => (
            <li
              key={u.name}
              className="flex items-center gap-3 rounded-xl border border-hairline bg-surface-muted p-3"
            >
              <span className="grid size-9 shrink-0 place-items-center rounded-full bg-brand-gradient text-[0.7rem] font-bold text-white">
                {u.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-[0.82rem] font-semibold text-ink">{u.name}</p>
                <p className="text-[0.72rem] text-ink-muted">{u.role}</p>
              </div>
              <span className="h-1.5 w-16 overflow-hidden rounded-full bg-hairline">
                <span className="block h-full rounded-full bg-brand-gradient" style={{ width: `${u.value}%` }} />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ── Hero dashboard mockup (light theme, no image assets) ──────────────── */

const heroNavItems: { label: string; icon: LucideIcon }[] = [
  { label: "Dashboard", icon: LayoutDashboard },
  { label: "Users", icon: Users },
  { label: "Orders", icon: ShoppingBag },
  { label: "Products", icon: Package },
  { label: "Analytics", icon: BarChart3 },
  { label: "Messages", icon: MessageSquare },
  { label: "Settings", icon: Settings },
];

const heroStatCards: { label: string; value: string; icon: LucideIcon; tone: Tone }[] = [
  { label: "Total Users", value: "12,540", icon: Users, tone: "blue" },
  { label: "Revenue", value: "$45,291", icon: Wallet, tone: "indigo" },
  { label: "Orders", value: "3,782", icon: ShoppingBag, tone: "rose" },
  { label: "Growth", value: "+23.5%", icon: TrendingUp, tone: "violet" },
];

const heroDonutSegments: { label: string; value: number; color: string; dot: string }[] = [
  { label: "UI Design", value: 42, color: "#4F6BFF", dot: "#4F6BFF" },
  { label: "Development", value: 27, color: "#8098FF", dot: "#8098FF" },
  { label: "Marketing", value: 19, color: "#C7D2FE", dot: "#C7D2FE" },
  { label: "Support", value: 12, color: "#EEF2FF", dot: "#A5B4FC" },
];

const heroOrders: { name: string; amount: string }[] = [
  { name: "Alice Cooper", amount: "$1,200" },
  { name: "Heidi Klum", amount: "$899" },
  { name: "Ralph Fox", amount: "$1,390" },
  { name: "Carol Felice", amount: "$298" },
];

const heroLegend: { label: string; color: string }[] = [
  { label: "Total", color: "#4F6BFF" },
  { label: "Online", color: "#C7D2FE" },
];

function MiniAreaChart() {
  return (
    <svg viewBox="0 0 200 64" className="h-full w-full" preserveAspectRatio="none" aria-hidden>
      <defs>
        <linearGradient id="heroAreaFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4F6BFF" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#4F6BFF" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[8, 24, 40, 56].map((y) => (
        <line key={y} x1="0" y1={y} x2="200" y2={y} stroke="#EEF1F8" strokeWidth="1" />
      ))}
      <path
        d="M0 46 C16 40 28 44 42 32 C56 20 70 30 88 26 C106 22 118 34 136 24 C154 14 168 20 184 10 L200 6"
        fill="none"
        stroke="#4F6BFF"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M0 46 C16 40 28 44 42 32 C56 20 70 30 88 26 C106 22 118 34 136 24 C154 14 168 20 184 10 L200 6 L200 64 L0 64 Z"
        fill="url(#heroAreaFill)"
      />
    </svg>
  );
}

function MiniDonutChart({ segments }: { segments: { value: number; color: string }[] }) {
  const total = segments.reduce((sum, s) => sum + s.value, 0);
  const circumference = 2 * Math.PI * 15;
  let offset = 0;
  return (
    <svg viewBox="0 0 40 40" className="-rotate-90" aria-hidden>
      <circle cx="20" cy="20" r="15" fill="none" stroke="#EEF2FF" strokeWidth="7" />
      {segments.map((s, i) => {
        const dash = (s.value / total) * circumference;
        const node = (
          <circle
            key={i}
            cx="20"
            cy="20"
            r="15"
            fill="none"
            stroke={s.color}
            strokeWidth="7"
            strokeDasharray={`${dash} ${circumference}`}
            strokeDashoffset={-offset}
          />
        );
        offset += dash;
        return node;
      })}
    </svg>
  );
}

function MiniBarChart({ values }: { values: number[] }) {
  return (
    <div className="flex h-full items-end gap-[3px]" aria-hidden>
      {values.map((v, i) => (
        <span key={i} className="flex-1 rounded-[1.5px] bg-brand-gradient" style={{ height: `${v}%` }} />
      ))}
    </div>
  );
}

function HeroDashboardScreen() {
  return (
    <div className="flex h-full w-full bg-white">
      <aside className="hidden w-[110px] shrink-0 flex-col border-r border-hairline bg-white p-3 lg:flex">
        <div className="mb-4 flex items-center gap-1.5">
          <span className="grid size-5 shrink-0 place-items-center rounded-[5px] bg-brand-gradient">
            <span className="text-[7px] font-black text-white">B</span>
          </span>
          <span className="truncate text-[8px] font-extrabold tracking-tight text-ink">Basiqkhan</span>
        </div>
        <nav className="flex flex-1 flex-col gap-1">
          {heroNavItems.map((item, i) => {
            const Icon = item.icon;
            const active = i === 0;
            return (
              <span
                key={item.label}
                className={cn(
                  "flex items-center gap-1.5 rounded-[5px] px-2 py-1.5",
                  active ? "bg-brand-50 text-brand-600" : "text-ink-faint"
                )}
              >
                <Icon className="size-[8px] shrink-0" strokeWidth={2.4} />
                <span className="truncate text-[6.5px] font-semibold">{item.label}</span>
              </span>
            );
          })}
        </nav>
        <span className="flex items-center gap-1.5 rounded-[5px] px-2 py-1.5 text-ink-faint">
          <LogOut className="size-[8px] shrink-0" strokeWidth={2.4} />
          <span className="text-[6.5px] font-semibold">Logout</span>
        </span>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col gap-2 p-2.5 sm:gap-2.5 sm:p-3.5">
        <div className="flex items-center justify-between gap-2">
          <p className="text-[9px] font-extrabold tracking-tight text-ink sm:text-[11px]">Dashboard</p>
          <div className="hidden items-center gap-1.5 sm:flex">
            <span className="flex h-[16px] w-[68px] shrink-0 items-center gap-1 rounded-full border border-hairline bg-surface-muted px-2 lg:w-[88px]">
              <Search className="size-[7px] shrink-0 text-ink-faint" />
              <span className="truncate text-[6px] text-ink-faint">Search...</span>
            </span>
            <span className="grid size-[16px] shrink-0 place-items-center rounded-full bg-surface-muted text-ink-faint">
              <Bell className="size-[7px]" />
            </span>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-1.5">
          {heroStatCards.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.label} className="min-w-0 rounded-[6px] border border-hairline p-1.5">
                <span className={cn("mb-1 grid size-[16px] place-items-center rounded-[5px]", toneStyles[s.tone])}>
                  <Icon className="size-[8px]" strokeWidth={2.4} />
                </span>
                <p className="truncate text-[5px] font-medium text-ink-faint sm:text-[5.6px]">{s.label}</p>
                <p className="truncate text-[7px] font-extrabold text-ink sm:text-[8.5px]">{s.value}</p>
              </div>
            );
          })}
        </div>

        <div className="grid min-h-0 flex-1 grid-cols-3 gap-1.5">
          <div className="col-span-2 flex min-h-0 flex-col rounded-[6px] border border-hairline p-2">
            <div className="flex items-center justify-between gap-1">
              <p className="text-[6px] font-bold text-ink sm:text-[7px]">Revenue Overview</p>
              <span className="hidden items-center gap-2 sm:flex">
                {heroLegend.map((item) => (
                  <span key={item.label} className="flex items-center gap-[3px]">
                    <span className="size-[4px] rounded-full" style={{ background: item.color }} />
                    <span className="text-[5px] font-medium text-ink-faint">{item.label}</span>
                  </span>
                ))}
              </span>
            </div>
            <div className="mt-1 min-h-0 flex-1">
              <MiniAreaChart />
            </div>
          </div>

          <div className="hidden min-h-0 flex-col rounded-[6px] border border-hairline p-2 sm:flex">
            <p className="text-[6px] font-bold text-ink sm:text-[7px]">Top Products</p>
            <div className="mt-1 flex min-h-0 flex-1 items-center gap-1.5">
              <div className="size-[38px] shrink-0 lg:size-[46px]">
                <MiniDonutChart segments={heroDonutSegments} />
              </div>
              <ul className="flex min-w-0 flex-col gap-[3px]">
                {heroDonutSegments.map((seg) => (
                  <li key={seg.label} className="flex items-center gap-1">
                    <span className="size-[4px] shrink-0 rounded-full" style={{ background: seg.dot }} />
                    <span className="truncate text-[4.6px] font-medium text-ink-muted">{seg.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeroPhoneScreen() {
  return (
    <div className="flex h-full w-full flex-col bg-white p-2">
      <div className="flex items-center justify-between px-1 pb-1.5 text-[6px] font-semibold text-ink">
        <span>9:41</span>
        <div className="flex items-center gap-1">
          <span className="h-[5px] w-[5px] rounded-full bg-ink/70" />
          <span className="h-[5px] w-[8px] rounded-[1px] bg-ink/70" />
          <span className="h-[5px] w-[10px] rounded-[1.5px] border border-ink/70" />
        </div>
      </div>

      <div className="flex items-center justify-between px-1">
        <p className="text-[8px] font-extrabold tracking-tight text-ink">Revenue</p>
        <span className="rounded-full bg-emerald-50 px-1.5 py-[1.5px] text-[5px] font-bold text-emerald-600">
          +12.5%
        </span>
      </div>
      <p className="px-1 text-[13px] font-extrabold leading-tight tracking-tight text-ink">$73,220</p>

      <div className="mt-1.5 h-[34px] px-1">
        <MiniBarChart values={[35, 55, 42, 68, 50, 82, 60]} />
      </div>

      <div className="mt-2 flex items-center justify-between px-1">
        <p className="text-[6.5px] font-bold text-ink">Recent Orders</p>
        <p className="text-[5px] font-semibold text-brand-500">View all</p>
      </div>
      <ul className="mt-1 flex flex-col gap-1 px-1">
        {heroOrders.map((order, i) => (
          <li key={order.name} className="flex items-center gap-1.5">
            <span
              className="grid size-[13px] shrink-0 place-items-center rounded-full text-[4.5px] font-bold text-white"
              style={{ background: ["#4F6BFF", "#6C63FF", "#8098FF", "#3D57E8"][i % 4] }}
            >
              {order.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </span>
            <span className="min-w-0 flex-1 truncate text-[5.6px] font-semibold text-ink">{order.name}</span>
            <span className="text-[5.6px] font-bold text-ink">{order.amount}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function HeroAppMockup() {
  return (
    <div className="relative mx-auto w-full">
      <div className="relative">
        <div className="rounded-t-[10px] border border-hairline bg-gradient-to-b from-[#EAEDF5] to-[#CBD2E2] p-[7px] shadow-float sm:rounded-t-[14px] sm:p-[9px]">
          <div className="aspect-[16/10] w-full overflow-hidden rounded-[6px] bg-white sm:rounded-[9px]">
            <HeroDashboardScreen />
          </div>
        </div>
        <div className="relative mx-auto h-[10px] w-[112%] -translate-x-[5.4%] rounded-b-[10px] bg-gradient-to-b from-[#EEF0F6] to-[#C9CFDE] sm:h-[14px]">
          <span className="absolute left-1/2 top-0 h-[3px] w-[14%] -translate-x-1/2 rounded-b-full bg-[#AEB6C9]" />
        </div>
      </div>

      <div className="absolute -bottom-[6%] right-[1%] w-[27%] overflow-hidden rounded-[16px] border-[3px] border-[#141A2B] bg-white shadow-float sm:right-[3%] sm:rounded-[20px] sm:border-[4px]">
        <div className="aspect-[9/19]">
          <HeroPhoneScreen />
        </div>
      </div>
    </div>
  );
}

export default function WebApplicationsPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pb-20 pt-[120px] md:pb-28 md:pt-[140px] lg:pb-36 lg:pt-[152px]">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-white">
          <div className="absolute inset-0 bg-mesh-soft" />
          <div className="absolute left-1/2 top-0 h-[720px] w-[1400px] -translate-x-1/2 rounded-full bg-white blur-3xl" />
          <div className="absolute -left-24 top-10 size-[420px] animate-floaty-slow rounded-full bg-brand-400/[0.09] blur-[130px]" />
          <div className="absolute -right-16 top-24 size-[460px] animate-floaty rounded-full bg-accent/[0.1] blur-[140px]" />
          {[
            { l: "12%", t: "22%", s: 6, d: "0s" },
            { l: "58%", t: "14%", s: 5, d: "2.1s" },
            { l: "90%", t: "32%", s: 4, d: "1.8s" },
          ].map((p, i) => (
            <span
              key={i}
              className="absolute animate-floaty rounded-full bg-brand-400/30"
              style={{ left: p.l, top: p.t, width: p.s, height: p.s, animationDelay: p.d }}
            />
          ))}
        </div>

        <div className="container">
          <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-x-[clamp(1.5rem,3vw,3rem)]">
            {/* left */}
            <div className="flex flex-col items-center text-center lg:w-[clamp(340px,32vw,560px)] lg:shrink-0 lg:items-start lg:text-left">
              <Reveal direction="up">
                <Badge>Web Applications</Badge>
              </Reveal>

              <h1 className="mt-5 font-display text-[clamp(1.85rem,2.1vw,2.35rem)] font-black leading-[1.15] tracking-[-0.03em] text-ink balance">
                <TextReveal text="Custom Web Applications" />
                <br />
                <TextReveal text="Built For Your Business" delay={0.06} />
                <br />
                <span className="text-brand-600">
                  <TextReveal text="Growth" delay={0.12} />.
                </span>
              </h1>

              <Reveal direction="up" delay={0.2}>
                <p className="mx-auto mt-4 max-w-md text-[0.95rem] leading-relaxed text-ink-muted pretty lg:mx-0">
                  From internal business systems to SaaS platforms, dashboards and enterprise
                  applications, I build secure, scalable and high-performance web applications
                  tailored to your workflow.
                </p>
              </Reveal>

              <Reveal direction="up" delay={0.3}>
                <div className="mt-6 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                  <Button asChild size="md" magnetic={8}>
                    <Link href="/contact">
                      Start Your Project
                      <ArrowRight className="size-4" />
                    </Link>
                  </Button>
                  <Button asChild size="md" variant="outline" magnetic={6}>
                    <Link href="#portfolio">
                      View Case Studies
                      <Calendar className="size-4" />
                    </Link>
                  </Button>
                </div>
              </Reveal>

              <Reveal direction="up" delay={0.4}>
                <div className="mt-7 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
                  <div className="flex -space-x-2.5">
                    {["#4F6BFF", "#6C63FF", "#8098FF", "#3D57E8"].map((c, i) => (
                      <span
                        key={i}
                        className="grid size-9 place-items-center rounded-full border-2 border-white text-[0.62rem] font-bold text-white shadow-soft"
                        style={{ background: c }}
                        aria-hidden
                      >
                        {["JS", "SJ", "MB", "AK"][i]}
                      </span>
                    ))}
                  </div>
                  <div className="text-left">
                    <div className="flex items-center gap-0.5 text-amber-400" aria-hidden>
                      {Array.from({ length: 5 }).map((_, i) => (
                        <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="size-3.5">
                          <path d="M10 1.6l2.47 5.3 5.53.66-4.1 3.94 1.09 5.9L10 14.6l-4.99 2.8 1.09-5.9-4.1-3.94 5.53-.66L10 1.6z" />
                        </svg>
                      ))}
                    </div>
                    <p className="mt-1 text-[0.82rem] font-medium text-ink-muted">
                      <span className="font-bold text-ink">20+ Happy Clients</span> Worldwide
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* right: dashboard mockup */}
            <div className="w-full lg:w-[clamp(460px,46vw,680px)] lg:shrink-0">
              <Reveal direction="scale" delay={0.15} className="relative">
                <div aria-hidden className="absolute inset-0 -z-10">
                  <div className="absolute left-1/2 top-1/2 h-[110%] w-[110%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(79,107,255,0.22),rgba(108,99,255,0.14)_45%,transparent_75%)] blur-2xl" />
                  <div className="absolute left-1/2 top-1/2 h-[80%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-[48px] bg-white/85 blur-3xl" />
                  <div className="absolute -left-10 top-0 h-[65%] w-[65%] rounded-full bg-brand-400/35 blur-[90px]" />
                  <div className="absolute -right-8 bottom-0 h-[60%] w-[60%] rounded-full bg-accent/30 blur-[100px]" />
                </div>

                <div className="relative mx-auto w-[94%] max-w-[440px] animate-floaty-slow sm:w-[88%] sm:max-w-[520px] lg:mx-0 lg:w-full lg:max-w-none">
                  <HeroAppMockup />
                </div>

                <div
                  aria-hidden
                  className="animate-floaty-slow absolute -top-4 right-0 hidden w-[172px] rounded-[18px] border border-hairline bg-white/95 p-3.5 shadow-glass backdrop-blur-2xl backdrop-saturate-150 sm:block lg:-right-2"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-500">
                      <Rocket className="size-4" />
                    </span>
                    <div>
                      <p className="text-sm font-extrabold leading-tight text-ink">50+</p>
                      <p className="text-[0.62rem] font-medium text-ink-muted">Projects Delivered</p>
                    </div>
                  </div>
                </div>

                <div
                  aria-hidden
                  className="animate-floaty absolute left-[8%] top-[42%] hidden w-[150px] rounded-[18px] border border-hairline bg-white/95 p-3.5 shadow-glass backdrop-blur-2xl backdrop-saturate-150 sm:block"
                  style={{ animationDelay: "1.1s" }}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-violet-50 text-violet-600">
                      <ShieldCheck className="size-4" />
                    </span>
                    <div>
                      <p className="text-sm font-extrabold leading-tight text-ink">100%</p>
                      <p className="text-[0.62rem] font-medium text-ink-muted">Response</p>
                    </div>
                  </div>
                </div>

                <div
                  aria-hidden
                  className="animate-floaty-slow absolute bottom-0 right-[-2%] hidden w-[168px] rounded-[18px] border border-hairline bg-white/95 p-3.5 shadow-glass backdrop-blur-2xl backdrop-saturate-150 sm:block"
                  style={{ animationDelay: "2s" }}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-orange-50 text-orange-600">
                      <Zap className="size-4" />
                    </span>
                    <div>
                      <p className="text-sm font-extrabold leading-tight text-ink">Fast &amp; Secure</p>
                      <p className="text-[0.62rem] font-medium text-ink-muted">Performance</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Trusted technologies marquee ─────────────────────── */}
      <section aria-label="Technologies used to build web applications" className="border-y border-hairline bg-surface-muted py-12">
        <div className="container">
          <Reveal direction="up">
            <p className="text-center text-[0.62rem] font-bold uppercase tracking-[0.22em] text-ink-faint">
              Trusted Technologies
            </p>
          </Reveal>
        </div>

        <div className="mask-fade-x mt-8 overflow-hidden pause-on-hover">
          <ul className="flex w-max animate-marquee items-center gap-14 pr-14 md:gap-20 md:pr-20">
            {[...webAppTech, ...webAppTech].map((t, i) => (
              <li
                key={`${t.name}-${i}`}
                className="flex shrink-0 items-center gap-2.5 text-ink-muted"
                aria-hidden={i >= webAppTech.length}
              >
                <span className="inline-flex">{t.node}</span>
                <span className="text-lg font-semibold tracking-tight">{t.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Web applications I build ──────────────────────────── */}
      <section className="section-shell bg-white">
        <div className="container">
          <SectionHeading
            eyebrow="What I build"
            title="Web Applications I"
            highlight="Develop"
            description="From lean internal tools to full multi-tenant SaaS products — every build is scoped around the workflow it needs to support."
          />

          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {buildTypes.map((type, i) => {
              const Icon = type.icon;
              const tone = toneKeys[i % toneKeys.length];
              return (
                <li key={type.title}>
                  <Reveal direction="up" delay={0.05 * i} className="h-full">
                    <article className="group relative h-full rounded-2xl p-6 transition-colors duration-500 ease-premium hover:bg-surface-muted">
                      <span
                        className={`grid size-11 shrink-0 place-items-center rounded-xl transition-transform duration-500 ease-premium group-hover:-rotate-6 group-hover:scale-110 ${toneStyles[tone]}`}
                      >
                        <Icon className="size-5" strokeWidth={2} />
                      </span>
                      <h3 className="mt-4 text-[0.98rem] font-bold tracking-tight text-ink">{type.title}</h3>
                      <p className="mt-2 text-[0.86rem] leading-relaxed text-ink-muted pretty">
                        {type.description}
                      </p>
                    </article>
                  </Reveal>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* ── Why custom web applications ───────────────────────── */}
      <section className="section-shell overflow-hidden bg-surface-muted">
        <div className="container">
          <div className="flex flex-col items-center gap-14 lg:mx-auto lg:w-fit lg:flex-row lg:items-center lg:gap-x-[clamp(1.75rem,3.5vw,3rem)]">
            <Reveal direction="right" className="w-full lg:w-[clamp(370px,34vw,500px)] lg:shrink-0">
              <AppDashboardMockup />
            </Reveal>

            <div className="w-full lg:w-[clamp(420px,48vw,700px)] lg:shrink-0">
              <Reveal direction="up">
                <p className="eyebrow mb-4">Why custom</p>
              </Reveal>
              <h2 className="font-display text-display-lg text-ink balance">
                <TextReveal text="Benefits Of Custom" />
                <br />
                <span className="bg-brand-gradient bg-clip-text text-transparent">
                  <TextReveal text="Web Applications" delay={0.12} />
                </span>
              </h2>

              <ul className="mt-10 grid gap-x-8 gap-y-7 sm:grid-cols-2">
                {benefits.map((benefit, i) => {
                  const Icon = benefit.icon;
                  return (
                    <Reveal key={benefit.title} direction="up" delay={0.06 * i}>
                      <li className="flex items-start gap-3.5">
                        <span className="grid size-11 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-500">
                          <Icon className="size-5" strokeWidth={2} />
                        </span>
                        <div>
                          <p className="font-bold text-ink">{benefit.title}</p>
                          <p className="mt-0.5 text-[0.85rem] leading-relaxed text-ink-muted">{benefit.description}</p>
                        </div>
                      </li>
                    </Reveal>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Featured applications ─────────────────────────────── */}
      <section id="portfolio" className="section-shell bg-white">
        <div className="container">
          <SectionHeading
            eyebrow="Featured work"
            title="Recent Web"
            highlight="Applications"
            description="A few recent builds — each one shipped, measured and still running in production."
            action={{ label: "View All Projects", href: "/#projects" }}
          />

          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredApps.map((project, i) => (
              <li key={project.title}>
                <Reveal direction="up" delay={0.06 * i}>
                  <article className="card-surface group h-full overflow-hidden">
                    <div className="relative aspect-[16/10] overflow-hidden bg-surface-muted">
                      <div className="absolute inset-0 transition-transform duration-700 ease-premium group-hover:scale-[1.07]">
                        <Image
                          src={project.image}
                          alt={`${project.title} — application preview`}
                          fill
                          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                          className="object-cover object-top"
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-between gap-4 p-5">
                      <div className="min-w-0">
                        <h3 className="truncate text-[1rem] font-bold tracking-tight text-ink transition-colors group-hover:text-brand-600">
                          {project.title}
                        </h3>
                        <p className="mt-1 truncate text-[0.8rem] text-ink-muted">{project.category}</p>
                      </div>
                      <span className="grid size-9 shrink-0 place-items-center rounded-full border border-hairline text-ink-muted transition-all duration-400 ease-premium group-hover:border-brand-500 group-hover:bg-brand-500 group-hover:text-white">
                        <ArrowUpRight className="size-4" />
                      </span>
                    </div>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Process />

      {/* ── Features included ─────────────────────────────────── */}
      <section className="section-shell overflow-hidden bg-surface-muted">
        <div className="container">
          <div className="flex flex-col items-center gap-14 lg:mx-auto lg:w-fit lg:flex-row lg:items-center lg:gap-x-[clamp(1.75rem,3.5vw,3rem)]">
            <Reveal direction="right" className="w-full lg:w-[clamp(370px,34vw,500px)] lg:shrink-0">
              <UsersPanelMockup />
            </Reveal>

            <div className="w-full lg:w-[clamp(420px,48vw,700px)] lg:shrink-0">
              <Reveal direction="up">
                <p className="eyebrow mb-4">What&apos;s included</p>
              </Reveal>
              <h2 className="font-display text-display-lg text-ink balance">
                <TextReveal text="Everything Your" />
                <br />
                <span className="bg-brand-gradient bg-clip-text text-transparent">
                  <TextReveal text="Web App Needs" delay={0.12} />
                </span>
              </h2>

              <ul className="mt-9 grid gap-3.5 sm:grid-cols-2">
                {featuresIncluded.map((feature, i) => (
                  <Reveal key={feature} direction="up" delay={0.05 * i}>
                    <li className="flex items-start gap-3">
                      <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-500">
                        <Check className="size-3" strokeWidth={2.5} />
                      </span>
                      <p className="text-[0.9rem] leading-relaxed text-ink-muted">{feature}</p>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Technology stack ──────────────────────────────────── */}
      <section className="section-shell bg-white">
        <div className="container">
          <SectionHeading
            eyebrow="Under the hood"
            title="Built With Modern"
            highlight="Technology"
            description="A proven, production-tested stack — chosen for speed, type-safety and long-term maintainability, not resume-driven trends."
          />

          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stackCategories.map((cat, i) => (
              <li key={cat.category}>
                <Reveal direction="up" delay={0.06 * i} className="h-full">
                  <div className="card-surface h-full p-6">
                    <p className="text-[0.7rem] font-bold uppercase tracking-[0.14em] text-brand-500">{cat.category}</p>
                    <ul className="mt-4 flex flex-col gap-2.5">
                      {cat.items.map((item) => (
                        <li
                          key={item.name}
                          className="flex items-center gap-3 rounded-xl border border-hairline bg-surface-muted p-2.5"
                        >
                          <span className="inline-flex shrink-0">{item.node}</span>
                          <span className="text-[0.85rem] font-semibold text-ink">{item.name}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Comparison ─────────────────────────────────────────── */}
      <section className="section-shell bg-surface-muted">
        <div className="container">
          <SectionHeading
            eyebrow="Why go custom"
            title="Template Website vs"
            highlight="Custom Application"
            description="A template gets you online fast. A custom application gets you the exact workflow your business actually runs on."
            align="center"
          />

          <Reveal direction="scale">
            <div className="relative mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
              <div className="rounded-[28px] border border-hairline bg-white p-8 shadow-soft">
                <p className="text-[0.7rem] font-bold uppercase tracking-[0.14em] text-ink-faint">Template Website</p>
                <ul className="mt-6 flex flex-col gap-4">
                  {comparisonRows.map((row) => (
                    <li key={row.template} className="flex items-center gap-3 text-[0.92rem] text-ink-muted">
                      <span className="grid size-6 shrink-0 place-items-center rounded-full bg-rose-50 text-rose-500">
                        <X className="size-3.5" strokeWidth={2.5} />
                      </span>
                      {row.template}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative overflow-hidden rounded-[28px] border border-brand-200 bg-white p-8 shadow-lift">
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-50/60 via-transparent to-brand-50/60"
                />
                <p className="relative text-[0.7rem] font-bold uppercase tracking-[0.14em] text-brand-500">
                  Custom Web Application
                </p>
                <ul className="relative mt-6 flex flex-col gap-4">
                  {comparisonRows.map((row) => (
                    <li key={row.custom} className="flex items-center gap-3 text-[0.92rem] font-semibold text-ink">
                      <span className="grid size-6 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-500">
                        <Check className="size-3.5" strokeWidth={2.5} />
                      </span>
                      {row.custom}
                    </li>
                  ))}
                </ul>
              </div>

              <span
                aria-hidden
                className="absolute left-1/2 top-1/2 z-10 hidden size-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-4 border-surface-muted bg-brand-gradient text-xs font-extrabold text-white shadow-lift md:grid"
              >
                VS
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Industries ─────────────────────────────────────────── */}
      <section className="section-shell bg-white">
        <div className="container">
          <SectionHeading
            eyebrow="Industries I serve"
            title="Built For Every"
            highlight="Industry"
            description="Different industries, the same discipline — clean data models, real security and interfaces your team will actually use."
            align="center"
          />

          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-10 sm:gap-x-10">
            {industries.map((industry, i) => {
              const Icon = industry.icon;
              return (
                <Reveal key={industry.label} direction="up" delay={0.05 * i}>
                  <li className="group flex flex-col items-center gap-3">
                    <span className="grid size-16 place-items-center rounded-full border border-hairline bg-white text-ink-muted shadow-soft transition-all duration-400 ease-premium group-hover:-translate-y-1 group-hover:border-brand-300 group-hover:bg-brand-50 group-hover:text-brand-600">
                      <Icon className="size-6" strokeWidth={1.8} />
                    </span>
                    <span className="text-[0.85rem] font-semibold text-ink">{industry.label}</span>
                  </li>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </section>

      {/* ── Performance ────────────────────────────────────────── */}
      <section className="section-shell bg-surface-muted">
        <div className="container">
          <SectionHeading
            eyebrow="Performance metrics"
            title="Built For"
            highlight="Speed"
            description="Every application is audited against Lighthouse before launch — not tested once and forgotten."
            align="center"
          />

          <ul className="grid grid-cols-2 gap-5 sm:grid-cols-4">
            {performanceMetrics.map((metric, i) => (
              <li key={metric.label}>
                <Reveal direction="up" delay={0.06 * i} className="h-full">
                  <div className="card-surface flex h-full flex-col items-center gap-4 p-7 text-center">
                    <div className="relative grid place-items-center">
                      <ScoreRing value={metric.value} color={metric.color} size={96} />
                      <span className="absolute font-display text-2xl font-extrabold text-ink">{metric.value}</span>
                    </div>
                    <p className="text-[0.85rem] font-semibold text-ink-muted">{metric.label}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>

          <Reveal direction="up" delay={0.2} className="mt-10 flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-brand-50 px-4 py-1.5 text-[0.78rem] font-semibold text-brand-600">
              <Check className="size-4" strokeWidth={2.5} />
              All Core Web Vitals passed
            </span>
          </Reveal>
        </div>
      </section>

      {/* ── Security ───────────────────────────────────────────── */}
      <section className="section-shell bg-white">
        <div className="container">
          <SectionHeading
            eyebrow="Security first"
            title="Enterprise-Grade"
            highlight="Security"
            description="Security isn't bolted on at the end — it's part of the architecture from the first commit."
            align="center"
          />

          <ul className="flex flex-wrap items-center justify-center gap-4">
            {securityFeatures.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <Reveal key={feature.label} direction="up" delay={0.05 * i}>
                  <li className="flex w-[152px] flex-col items-center gap-3 rounded-2xl border border-hairline bg-white px-4 py-6 text-center shadow-soft transition-all duration-300 ease-premium hover:-translate-y-1 hover:border-brand-200 hover:shadow-card">
                    <span className="grid size-11 shrink-0 place-items-center rounded-full bg-emerald-50 text-emerald-600">
                      <Icon className="size-5" strokeWidth={2} />
                    </span>
                    <span className="text-[0.8rem] font-semibold text-ink-muted">{feature.label}</span>
                  </li>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </section>

      <Testimonials />
      <FAQ items={webAppFaqs} />

      <CTA
        heading="Ready To Build Your Next Web Application?"
        description="Tell me about your idea and I'll come back with a clear plan, a timeline and a fixed price — no sales call required."
        primaryLabel="Book Consultation"
        secondaryLabel="Send Message"
        secondaryHref="/contact"
      />
    </>
  );
}

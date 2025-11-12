'use client';

import Image from 'next/image';
import { useState } from 'react';

type Skill = {
  label: string;
  value: number;
  accent: string;
};

type SkillGroup = {
  title: string;
  caption: string;
  skills: Skill[];
};

type ProjectHighlight = {
  title: string;
  summary: string;
  metrics: string[];
  accent: string;
  cta: string;
};

type ServicePlan = {
  title: string;
  badge: string;
  description: string;
  deliverables: string[];
};

const heroTags = ['工具达人', '评测师'];

const heroStats = [
  { label: '经验', value: '10年+', detail: '大型互联网测试与研发' },
  { label: '城市', value: '杭州', detail: '链接华东创新生态' },
  { label: '专注', value: 'AI × 测试 × 自动化', detail: '规划方向并带队创新' },
];

const heroPrograms = [
  {
    title: '测试技术沉淀',
    description: '10年+ 覆盖软件 / 硬件测试，擅长自动化与性能调优。',
    accent: 'from-violet-500 via-purple-500 to-fuchsia-500',
    pill: '技术',
  },
  {
    title: '团队管理',
    description: '善于规划技术方向，推动跨团队的执行力与创新。',
    accent: 'from-sky-400 via-cyan-400 to-blue-500',
    pill: '管理',
  },
  {
    title: 'AI 融合',
    description: '致力于推动 AI 与技术结合，帮助组织抢占智能机遇。',
    accent: 'from-amber-400 via-orange-400 to-rose-500',
    pill: '融合',
  },
];

const labelChips = ['破局行动家', 'AI代写', 'AI编程'];

const aboutBlocks = [
  {
    title: '专业背景',
    description:
      '来自杭州，10 年+ 测试技术经验，长期服务大型互联网产品，熟悉软件 / 硬件 / 平台级研发流程与质量体系。',
    tags: ['团队管理', '项目交付', '产品战略'],
  },
  {
    title: 'AI 旅程',
    description:
      '将测试架构、自动化与 AI 工作流结合，实践智能体驱动的效率提升方法，沉淀可复用的落地经验。',
    tags: ['RPA 自动化', 'N8N 工作流', 'AI 编程'],
  },
  {
    title: '圈子链接',
    description:
      '破局行动营、专业社群与技术社区活跃成员，持续分享测试与 AI 结合的经验，与伙伴一起探索新路径。',
    tags: ['圈层共创', '资源整合', '跨界合作'],
  },
];

const skillGroups: SkillGroup[] = [
  {
    title: '测试领域',
    caption: '10 年+ 技术沉淀，覆盖软件 / 硬件测试，精通自动化与性能调优。',
    skills: [
      { label: '测试开发', value: 95, accent: 'from-cyan-400 to-blue-500' },
      { label: '性能测试', value: 90, accent: 'from-amber-400 to-orange-500' },
      { label: '接口测试', value: 95, accent: 'from-purple-500 to-pink-500' },
      { label: '安全测试', value: 80, accent: 'from-lime-400 to-emerald-500' },
    ],
  },
  {
    title: '开发语言',
    caption: 'Python / Java / C 及脚本语言双栈覆盖，快速孵化工具链。',
    skills: [
      { label: 'Python 语言', value: 80, accent: 'from-rose-400 to-red-500' },
      { label: 'Java 语言', value: 85, accent: 'from-blue-500 to-indigo-500' },
      { label: 'C 语言', value: 75, accent: 'from-slate-400 to-slate-600' },
      { label: '脚本语言', value: 80, accent: 'from-teal-400 to-teal-600' },
    ],
  },
  {
    title: '数据库',
    caption: '熟悉主流数据引擎，支撑稳定可扩展的测试环境搭建。',
    skills: [
      { label: 'MySQL', value: 90, accent: 'from-sky-400 to-blue-500' },
      { label: 'Redis', value: 80, accent: 'from-red-400 to-red-600' },
      { label: 'PostgreSQL', value: 80, accent: 'from-indigo-400 to-indigo-600' },
      { label: 'MongoDB', value: 70, accent: 'from-emerald-400 to-emerald-600' },
    ],
  },
  {
    title: 'AI 技术',
    caption: '推动 AI 融合测试与研发流程，设计端到端智能工作流。',
    skills: [
      { label: 'AI 写作', value: 85, accent: 'from-fuchsia-400 to-fuchsia-600' },
      { label: 'AI 工作流', value: 60, accent: 'from-violet-400 to-violet-600' },
      { label: 'Coze', value: 60, accent: 'from-cyan-400 to-cyan-600' },
      { label: 'AI 编程', value: 80, accent: 'from-orange-400 to-orange-600' },
    ],
  },
];

const quickContactCards = [
  {
    title: '微信二维码',
    action: '点击扫码',
    body: '扫码添加，快速沟通项目需求与合作意向',
    badge: '高效沟通',
    image: '/tou1.jpg',
  },
  {
    title: '技术咨询',
    action: '点击咨询',
    body: '153801263@qq.com',
    badge: '邮件',
    href: 'mailto:153801263@qq.com',
  },
  {
    title: '项目合作',
    action: '点击合作',
    body: '153801263@qq.com',
    badge: '合作',
    href: 'mailto:153801263@qq.com',
  },
];

const projectHighlights: ProjectHighlight[] = [
  {
    title: '智能体测试驾驶舱',
    summary: '整合用例管理、Agent 评审与自动化执行，让质量决策实时透明。',
    metrics: ['集成 5 套工具链', '覆盖 12 个业务域', '复用率 80%+'],
    accent: 'from-indigo-500/80 via-purple-500/70 to-slate-900/70',
    cta: '预约演示',
  },
  {
    title: 'AI 评测工作坊',
    summary: '搭建沉浸式共创营，输出 AI 流程蓝图与落地指标体系。',
    metrics: ['4 周陪跑节奏', '8 大评测维度', '100+ 参与者'],
    accent: 'from-sky-400/70 via-cyan-400/60 to-blue-950/60',
    cta: '获取日程',
  },
  {
    title: '自动化提效工具链',
    summary: '串联 RPA、N8N、脚本工具，实现跨团队任务一键触达。',
    metrics: ['平均提效 35%', '沉淀 20+ 模板', 'SLA 透明'],
    accent: 'from-amber-400/70 via-orange-400/60 to-rose-900/60',
    cta: '查看案例',
  },
];

const servicePlans: ServicePlan[] = [
  {
    title: 'AI 流程共创营',
    badge: '陪跑式',
    description: '1v1 沟通 + 共创工作坊，梳理业务痛点并输出 AI 流程蓝图。',
    deliverables: ['业务诊断与机会图谱', 'AI 工作流原型', '陪跑执行节奏'],
  },
  {
    title: '测试体系升级',
    badge: '专项',
    description: '评估现有质量体系，重构指标与自动化策略，落地智能体助手。',
    deliverables: ['质量体系评测', '自动化策略包', '持续优化机制'],
  },
  {
    title: '智能体孵化',
    badge: '共创',
    description: '围绕场景共建 Agent，训练知识库并建立运维手册。',
    deliverables: ['知识库搭建', 'Agent 任务编排', '运营度量看板'],
  },
];

const collaborationTags = ['企业数字化转型', 'AI 技术培训', '创新项目合作', 'AI编程'];

const collaborationSteps = [
  '识别核心痛点，校准预期',
  '设计智能体 / 自动化方案',
  '共创执行路径与度量体系',
  '复盘沉淀方法论与资产',
];

function SkillCard({ group }: { group: SkillGroup }) {
  return (
    <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-[0_20px_40px_rgba(148,163,184,0.25)]">
      <div className="flex flex-col gap-2">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-500">{group.title}</p>
        <p className="text-base text-slate-700">{group.caption}</p>
      </div>
      <div className="mt-6 space-y-4">
        {group.skills.map((skill) => (
          <div key={skill.label}>
            <div className="mb-2 flex items-center justify-between text-sm text-slate-600">
              <span>{skill.label}</span>
              <span>{skill.value}%</span>
            </div>
            <div className="h-2 rounded-full bg-slate-100">
              <div
                className={`h-full rounded-full bg-gradient-to-r ${skill.accent}`}
                style={{ width: `${skill.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const [qrModalSrc, setQrModalSrc] = useState<string | null>(null);

  const openQrModal = (src: string) => {
    setQrModalSrc(src);
  };

  const closeQrModal = () => setQrModalSrc(null);

  return (
    <div className="min-h-screen bg-[#f5f5fb] text-slate-900">
      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6 py-16 sm:px-8 lg:px-0">
        <section className="rounded-[32px] bg-gradient-to-br from-[#ede9fe] via-[#e5f2ff] to-[#fdfbff] p-8 shadow-[0_30px_90px_rgba(107,114,128,0.25)] lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[28px] border border-indigo-50 bg-white/80 p-6 backdrop-blur">
              <div className="flex flex-col items-center text-center">
                <div className="relative">
                  <div className="absolute inset-0 -z-10 rounded-full bg-indigo-200/50 blur-3xl" />
                  <Image
                    src="/xiang.jpg"
                    alt="王天一头像"
                    width={220}
                    height={220}
                    className="h-48 w-48 rounded-[24px] object-cover shadow-2xl ring-2 ring-white/30"
                    priority
                  />
                </div>
                <p className="mt-6 text-3xl font-semibold text-slate-900">王天一</p>
                <p className="text-sm uppercase tracking-[0.5em] text-slate-500">AI 行动家</p>
                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  {heroTags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-indigo-100 bg-white/70 px-4 py-1 text-xs text-indigo-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-6 grid gap-4">
                {heroStats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-indigo-100 bg-white p-4 shadow-sm">
                    <p className="text-xs uppercase tracking-[0.4em] text-slate-500">{stat.label}</p>
                    <p className="mt-2 text-xl font-semibold text-slate-900">{stat.value}</p>
                    <p className="text-sm text-slate-600">{stat.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <p className="text-sm uppercase tracking-[0.6em] text-slate-500">
                AI · INTEL & COLLABORATION · STRATEGY
              </p>
              <h1 className="mt-4 text-4xl font-semibold leading-snug sm:text-5xl">王天一 · AI 行动家</h1>
              <p className="mt-4 text-lg text-slate-700">
                来自杭州，10 年+ 测试技术经验，专注大型互联网产品的研发与测试技术实践。
              </p>
              <p className="mt-3 text-lg text-slate-700">
                拥有丰富的技术团队管理经验，擅长规划技术方向、搭建测试架构并推动团队持续创新。
              </p>
              <p className="mt-3 text-lg text-slate-700">
                致力于推动 AI 与技术融合，帮助团队和个人在智能时代抢占先机。
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {labelChips.map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-indigo-100 bg-white px-4 py-1 text-sm text-indigo-700"
                  >
                    {chip}
                  </span>
                ))}
              </div>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {heroPrograms.map((program) => (
                  <div
                    key={program.title}
                    className={`rounded-2xl bg-gradient-to-r ${program.accent} p-[1px] shadow-lg shadow-indigo-200/70`}
                  >
                    <div className="h-full rounded-2xl bg-white p-4">
                      <p className="text-[10px] uppercase tracking-[0.6em] text-slate-500">{program.pill}</p>
                      <p className="mt-2 text-lg font-semibold text-slate-900">{program.title}</p>
                      <p className="mt-1 text-sm text-slate-700">{program.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="mailto:153801263@qq.com"
                  className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500"
                >
                  预约技术咨询
                </a>
                <a
                  href="https://github.com/amyxueai"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-indigo-200 px-6 py-3 text-sm font-semibold text-indigo-700 transition hover:border-indigo-400"
                >
                  GitHub @amyxueai
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="space-y-8">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-slate-500">关于我</p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-900">专业背景与圈层</h2>
            <p className="mt-2 text-base text-slate-600">
              结合企业服务经验与 AI 落地能力，保持持续分享与共创。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {aboutBlocks.map((block) => (
              <div key={block.title} className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
                <p className="text-xl font-semibold text-slate-900">{block.title}</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{block.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {block.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1 text-xs text-indigo-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="skills" className="space-y-8">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-slate-500">我的技能</p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-900">多栈能力矩阵</h2>
            <p className="mt-2 text-base text-slate-600">
              10 年+ 技术沉淀，覆盖软件 / 硬件测试，精通自动化测试、性能调优与架构落地。
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {skillGroups.map((group) => (
              <SkillCard key={group.title} group={group} />
            ))}
          </div>
        </section>

        <section id="projects" className="space-y-8">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-slate-500">我的作品</p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-900">代表性实践</h2>
            <p className="mt-2 text-base text-slate-600">把复杂场景拆解成可复制的智能资产。</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {projectHighlights.map((project) => (
              <div key={project.title} className={`rounded-3xl bg-gradient-to-br ${project.accent} p-[1px]`}>
                <div className="flex h-full flex-col rounded-3xl bg-white p-6 shadow-sm">
                  <p className="text-lg font-semibold text-slate-900">{project.title}</p>
                  <p className="mt-3 text-sm text-slate-600">{project.summary}</p>
                  <ul className="mt-4 space-y-2 text-sm text-slate-600">
                    {project.metrics.map((metric) => (
                      <li key={metric}>· {metric}</li>
                    ))}
                  </ul>
                  <button className="mt-6 inline-flex w-max items-center justify-center rounded-full border border-indigo-200 px-4 py-1.5 text-xs font-semibold text-indigo-700">
                    {project.cta}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="services" className="space-y-8">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-slate-500">我的服务</p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-900">合作方式</h2>
            <p className="mt-2 text-base text-slate-600">根据阶段选择合适的陪跑或专项方案。</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {servicePlans.map((plan) => (
              <div key={plan.title} className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.4em] text-slate-500">
                  <span>{plan.badge}</span>
                  <span>PLAN</span>
                </div>
                <p className="mt-4 text-xl font-semibold text-slate-900">{plan.title}</p>
                <p className="mt-2 text-sm text-slate-600">{plan.description}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  {plan.deliverables.map((item) => (
                    <li key={item}>· {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="collaboration" className="grid gap-8 rounded-[32px] border border-slate-100 bg-white p-8 shadow-[0_25px_70px_rgba(148,163,184,0.25)] lg:grid-cols-[1.3fr_0.7fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-slate-500">期待与你的合作</p>
            <h3 className="mt-3 text-3xl font-semibold text-slate-900">无论你是企业还是个人，都欢迎联系我</h3>
            <p className="mt-3 text-base text-slate-600">
              无论你是企业需要数字化转型，还是个人想要学习 AI 技术，或是有创新的项目想法，都欢迎与我联系。
            </p>
            <p className="mt-2 text-base text-slate-600">让我们一起在 AI 与自动化的道路上创造更多价值。</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {collaborationTags.map((tag) => (
                <span key={tag} className="rounded-full border border-indigo-100 bg-indigo-50 px-4 py-1 text-sm text-indigo-700">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-slate-100 bg-slate-50 p-6">
            <p className="text-sm text-slate-500">合作流程</p>
            <ul className="mt-4 space-y-3 text-slate-700">
              {collaborationSteps.map((step) => (
                <li key={step}>· {step}</li>
              ))}
            </ul>
            <a
              href="mailto:153801263@qq.com"
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-indigo-600 px-5 py-3 text-sm font-semibold text-white"
            >
              发送合作意向
            </a>
          </div>
        </section>

        <section id="contact" className="space-y-8">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-slate-500">快速联系</p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-900">选择合适的方法，让我们开始对话</h2>
            <p className="mt-2 text-base text-slate-600">扫码、发邮件或直接预约合作，快速拉齐需求。</p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {quickContactCards.map((card) => (
              <div key={card.title} className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between text-sm text-slate-500">
                  <span>{card.title}</span>
                  <span className="rounded-full border border-indigo-100 px-3 py-0.5 text-xs text-indigo-700">
                    {card.badge}
                  </span>
                </div>
                <p className="mt-4 text-lg font-semibold text-slate-900">{card.action}</p>
                {card.image ? (
                  <button
                    type="button"
                    onClick={() => openQrModal(card.image!)}
                    className="mt-2 inline-flex items-center text-sm font-medium text-indigo-600 underline-offset-4 hover:text-indigo-500"
                  >
                    {card.body}
                  </button>
                ) : (
                  <>
                    <p className="mt-2 text-sm text-slate-600">{card.body}</p>
                    {card.href && (
                      <a
                        href={card.href}
                        className="mt-4 inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        立即联系
                      </a>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>
        </section>

        {qrModalSrc && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 px-6 py-10">
            <div className="relative w-full max-w-sm rounded-3xl bg-white p-6 text-center shadow-2xl">
              <button
                type="button"
                onClick={closeQrModal}
                className="absolute right-4 top-4 text-slate-400 transition hover:text-slate-600"
                aria-label="关闭二维码"
              >
                ✕
              </button>
              <p className="text-sm uppercase tracking-[0.4em] text-slate-500">扫码添加</p>
              <p className="mt-2 text-xl font-semibold text-slate-900">微信好友</p>
              <div className="mt-6 rounded-2xl border border-slate-100 bg-slate-50 p-4">
                <Image
                  src={qrModalSrc}
                  alt="微信二维码"
                  width={320}
                  height={320}
                  className="mx-auto h-60 w-60 object-contain"
                />
              </div>
              <p className="mt-4 text-sm text-slate-600">扫码添加，快速沟通项目需求与合作意向</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

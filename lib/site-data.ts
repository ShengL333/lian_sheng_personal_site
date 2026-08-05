import type { LucideIcon } from "lucide-react";
import {
  Bot,
  Brain,
  Factory,
  Gamepad2,
  Heart,
  Layers,
  Rocket,
  TrendingUp,
} from "lucide-react";

export const EMAIL = "lian.lukes@gmail.com";

export const strengths: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: Rocket,
    title: "AI 产品从 0 到 1",
    desc: "需求分析 → 方案设计 → 研发协作 → 上线验证 → 持续优化全链路",
  },
  {
    icon: Brain,
    title: "Agent 与多轮交互",
    desc: "角色设定、回复逻辑、记忆机制、状态管理、生成策略",
  },
  {
    icon: Layers,
    title: "复杂系统设计",
    desc: "智能排程、数字人、内容推荐等业务规则与系统逻辑拆解",
  },
  {
    icon: TrendingUp,
    title: "数据驱动优化",
    desc: "模型效果评估体系，从指标反馈推动算法与体验持续迭代",
  },
];

export const jobs: {
  role: string;
  company: string;
  period: string;
  points: string[];
}[] = [
  {
    role: "AI 产品经理",
    company: "厦门新宇星链科技有限公司",
    period: "2025.11 – 至今",
    points: [
      "AI 角色交互产品规划与核心能力设计：智能对话、多轮交互、内容生成、用户关系成长",
      "角色设定、回复逻辑、记忆机制、状态管理等 AI 交互方案设计，提升长期互动效果",
      "AI 产品标准化能力体系：角色配置、生成策略、安全规则、交互流程",
      "商业化路径设计：付费模型、生成排队、虚拟资产、创作者收益",
    ],
  },
  {
    role: "AI 产品经理",
    company: "畅达瑞途信息技术有限公司",
    period: "2025.3 – 2025.10",
    points: [
      "AI 智能排程产品设计：将设备、物料、人员、订单优先级转化为系统规则与决策逻辑",
      "AI 工作流产品框架：任务流程、规则配置、结果反馈、人工调整机制",
      "模型效果评估体系：排程合理性、任务完成率、稳定性，推动算法持续优化",
    ],
  },
  {
    role: "项目经理（偏产品）",
    company: "厦门黑镜科技有限公司",
    period: "2023.6 – 2024.10",
    points: [
      "AI 数字人与智能展示系统产品设计：内容展示、语音交互、动作表现、系统联动",
      "主导建发、泉州文旅 AI 数字人项目，从需求沟通到方案落地",
      "协调算法、3D、美术、前端团队系统联调，提升交付效率",
    ],
  },
  {
    role: "游戏制作人",
    company: "Zygobot Studio（美国）",
    period: "2022.5 – 2023.6",
    points: [
      "多人联机射击游戏从 0 到 1 产品设计：玩法系统、用户体验、版本规划",
      "用户测试与数据反馈驱动机制优化；管理程序、美术、策划多团队协作",
    ],
  },
];

export const education: { degree: string; school: string; period: string }[] = [
  { degree: "游戏设计 · 硕士", school: "美国福赛大学", period: "2022.8 – 2024.6" },
  { degree: "游戏开发 · 学士", school: "美国福赛大学", period: "2019.8 – 2022.4" },
];

export const projects: {
  name: string;
  icon: LucideIcon;
  desc: string;
  tags: string[];
  highlight: string;
}[] = [
  {
    name: "AI 角色交互产品",
    icon: Heart,
    desc: "AI 角色陪伴产品从 0 到 1：智能对话、多轮交互、内容生成与用户关系成长，主导核心能力与商业化设计",
    tags: ["大模型应用", "多轮交互", "记忆机制", "商业化"],
    highlight: "新宇星链 · 2025.11–至今",
  },
  {
    name: "AI 智能排程系统",
    icon: Factory,
    desc: "制造排程：将设备、物料、人员、订单优先级转化为系统规则与 AI 决策逻辑，搭建设计效果评估体系",
    tags: ["智能排程", "AI 工作流", "规则引擎", "效果评估"],
    highlight: "畅达瑞途 · 2025.3–2025.10",
  },
  {
    name: "AI 数字人 · 智能展示",
    icon: Bot,
    desc: "数字人交互流程设计：内容展示、语音交互、动作表现、系统联动；主导建发、泉州文旅 AI 数字人项目",
    tags: ["AI 数字人", "智能展示", "交互设计", "项目交付"],
    highlight: "黑镜科技 · 2023.6–2024.10",
  },
  {
    name: "多人联机射击游戏",
    icon: Gamepad2,
    desc: "多人联机射击游戏从 0 到 1：玩法系统、用户体验、版本规划；用户测试与数据反馈驱动迭代",
    tags: ["游戏产品", "玩法设计", "用户测试", "跨团队管理"],
    highlight: "Zygobot · 2022.5–2023.6",
  },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "AI 产品能力",
    items: [
      "AI 应用设计",
      "大模型产品设计",
      "AI Agent",
      "Prompt 设计",
      "智能工作流",
      "模型效果评估",
      "AI 商业化设计",
    ],
  },
  {
    group: "产品能力",
    items: [
      "需求分析",
      "用户调研",
      "业务流程设计",
      "PRD",
      "原型设计",
      "产品规划",
      "版本管理",
    ],
  },
  {
    group: "技术原型",
    items: [
      "Next.js",
      "React",
      "TypeScript",
      "Zustand",
      "Tailwind CSS",
      "微信小程序",
      "云开发",
      "DeepSeek API",
    ],
  },
];

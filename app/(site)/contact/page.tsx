import { Mail } from "lucide-react";

import { GradientHeading } from "@/components/cult/gradient-heading";
import { MetalButton } from "@/components/cult/metal-button";
import { TextureOverlay } from "@/components/cult/texture-overlay";
import { EMAIL } from "@/lib/site-data";

export default function ContactPage() {
  return (
    <div className="relative">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute left-1/2 top-[-10%] h-[45vh] w-[60vw] -translate-x-1/2 rounded-full bg-brand-glow-orange mix-blend-screen blur-[130px]" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[40vh] w-[40vw] rounded-full bg-brand-glow-mint mix-blend-screen blur-[120px]" />
      </div>
      <TextureOverlay
        texture="noise"
        opacity={0.15}
        className="pointer-events-none absolute inset-0 mix-blend-screen"
      />

      <div className="container relative py-28">
        <p className="section-label">Contact</p>
        <GradientHeading asChild variant="brand" size="lg" weight="semi">
          <h1>联系我</h1>
        </GradientHeading>
        <p className="mt-6 max-w-3xl text-[15px] leading-7 text-muted-foreground md:text-base">
          聊 AI 产品、Agent 应用、合作机会，或者只是想打个招呼——都欢迎。通常{" "}
          <span className="font-medium text-foreground/85">24 小时内</span> 回复。
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <MetalButton asChild size="lg" className="px-7">
            <a href={`mailto:${EMAIL}`}>发邮件给我</a>
          </MetalButton>
          <div className="flex items-center gap-2.5 rounded-full border border-border/60 bg-card/70 px-4 py-2.5 backdrop-blur-sm">
            <Mail className="size-4 text-brand-2-vivid" />
            <span className="font-mono text-sm text-muted-foreground">{EMAIL}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

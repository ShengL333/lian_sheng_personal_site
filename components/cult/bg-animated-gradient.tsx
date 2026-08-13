"use client"

import React, { useEffect } from "react"
import { motion, useAnimation } from "motion/react"

interface GradientStop {
  color: string
  position: number
}

interface GradientType {
  stops: GradientStop[]
  centerX: number
  centerY: number
}

interface GradientAnimationProps {
  gradients: GradientType[]
  animationDuration: number
  className?: string
}

export const GradientAnimation: React.FC<GradientAnimationProps> = ({
  gradients,
  animationDuration,
  className = "",
}) => {
  const controls = useAnimation()

  useEffect(() => {
    const target = gradients.map(
      (g) =>
        `radial-gradient(circle at ${g.centerX}% ${g.centerY}%, ${g.stops
          .map((s) => `${s.color} ${s.position}%`)
          .join(", ")})`
    )

    // 尊重系统「减少动效」偏好：只画静态光晕，不启动无限动画
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      controls.set({ background: target })
      return
    }

    controls.start({
      background: target,
      transition: {
        duration: animationDuration,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "linear",
      },
    })
  }, [controls, gradients, animationDuration])

  return (
    <motion.div
      className={`absolute inset-0 h-full w-full ${className}`}
      animate={controls}
    />
  )
}

export default React.memo(GradientAnimation)

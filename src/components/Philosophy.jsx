import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { img, responsive } from '../data/content'
import { Reveal, RevealLines } from './primitives'

export default function Philosophy() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])
  const r = responsive(img.philosophy)

  return (
    <section id="philosophy" ref={ref} className="bg-canvas py-24 sm:py-32">
      <div className="shell grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Image */}
        <div className="lg:col-span-6">
          <div className="aspect-[4/5] w-full overflow-hidden bg-sand">
            <motion.img
              {...r}
              style={{ y, scale: 1.12 }}
              sizes="(max-width: 1024px) 100vw, 50vw"
              alt="A warm, minimalist interior detail — timber, stone and soft natural light"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Text */}
        <div className="lg:col-span-5 lg:col-start-8">
          <Reveal>
            <p className="eyebrow mb-8">( Our philosophy )</p>
          </Reveal>
          <h2 className="display text-charcoal text-[13vw] leading-[0.95] sm:text-6xl lg:text-[4.6rem]">
            <RevealLines
              lines={[
                'Vision.',
                'Detail.',
                <span key="f" className="italic text-umber">
                  Emotion.
                </span>,
              ]}
            />
          </h2>

          <Reveal delay={0.15}>
            <p className="mt-10 text-lg font-light leading-relaxed text-cocoa">
              A great event is not a checklist — it is the quiet resolution of a clear vision, obsessive
              detail and the emotion your guests carry home. We hold those three in balance on every event.
            </p>
          </Reveal>
          <Reveal delay={0.22}>
            <p className="mt-5 leading-relaxed text-cocoa/90">
              We plan for calm over chaos: meticulous timelines, trusted vendors and a team that stays
              composed under pressure. The result is a celebration that feels effortless to you — and
              unforgettable to everyone in the room.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4 border-t border-charcoal/10 pt-8 text-[11px] uppercase tracking-label text-umber">
              <span>Guest-first thinking</span>
              <span>Obsessive detail</span>
              <span>Calm under pressure</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

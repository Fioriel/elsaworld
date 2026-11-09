'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { ChevronRight, Heart, Mail, MapPin, Sparkles, Volume2, VolumeX } from 'lucide-react'
import { useEffect, useRef, useState, type ReactNode } from 'react'

type Lang = 'en' | 'fr'

const copy = {
  en: {
    titleRest: 'Until We Meet ',
    titleAccent: 'Again',
    subtitle: 'A little something I made just for you... because I miss you.',
    note: "This is the first time I've made something like this, so I don't really know how it'll look.",
    begin: "Let's Begin",
    keep: 'Keep Going',
    place: 'Valencia to Moncada',
    roadBefore: '8 km north of the city. About ',
    roadEm: '13 km',
    roadAfter: ' by road.',
    firstTalked: 'We first talked on',
    days: 'Days Ago',
    since: "And I've liked talking to you every day since.",
    plansTitle: "Things we'll do",
    plansSub: 'when we finally meet again',
    reveal: 'Tap to reveal',
    letterBtn: 'A Letter For You',
    plans: [
      { title: 'Hug for 30 mins', desc: 'Just holding you tight' },
      { title: 'Food Date', desc: 'Eating all our favorites' },
      { title: 'Movie Date', desc: 'Watching something together' },
      { title: 'Endless Photos', desc: 'Capturing your beautiful smile' },
      { title: 'Late Night Walks', desc: 'Hand in hand under the stars' },
      { title: 'Make New Memories', desc: "Creating moments we'll never forget" },
    ],
    kicker: 'A Message For You',
    fromHeart: 'From My Heart',
    letterFor: 'For the person I will always remember, even if something happens',
    tap: 'Tap To Open',
    last: 'One Last Thing',
    like: 'I like you.',
    appreciation: 'No expectations, just a little appreciation.',
    mute: 'Mute',
    unmute: 'Unmute',
    signature: 'for elsa',
    locale: 'en-US',
    letter: `My Dear Elsa,

Hey Elsa,

I was just thinking about how randomly we met and how, in such a short time, you somehow became someone I genuinely enjoy talking to.

I still remember our first conversations, how we started talking about games, music, photography, and all those random things. And of course, our chess games 😂. I still remember you thinking I let you win, and honestly, seeing you happy about winning was already a win for me.

What I liked most was how naturally everything happened. We went from being two strangers to teasing each other, sharing little things about our days, and somehow making each other smile. I also remember how you kept telling me to get some sleep and take care of myself. Those little things might seem normal to you, but I genuinely appreciated them.

And then came the day we finally met. November 7th. I remember you worrying about the train being late and apologizing for keeping me waiting. But honestly, I didn't care about waiting. You had made the effort to come all that way, and that already meant a lot to me. Even though our plans didn't go exactly as expected, spending time with you was what mattered. And yes, that little kiss is definitely something I'll remember 🤭.

I don't know exactly when I started liking you. Maybe somewhere between our silly chess conversations, your cute reactions, your concern for me, and the way you made even ordinary conversations interesting.

It's funny because we haven't known each other for very long, but I already have some really nice memories with you. I like your playful side, your kindness, and how comfortable I feel talking to you.

I'm not writing this to make some big romantic confession or anything. I just wanted you to know that meeting you was one of those unexpected things that turned out to be genuinely special.

And I'm glad I found you that day. ❤️

— Mohit`,
  },
  fr: {
    titleRest: "Jusqu'à ce qu'on se ",
    titleAccent: 'revoie',
    subtitle: "Un petit quelque chose que j'ai fait juste pour toi... parce que tu me manques.",
    note: "C'est la première fois que je crée quelque chose comme ça, alors je ne sais pas trop à quoi ça va ressembler.",
    begin: 'On commence',
    keep: 'Continuer',
    place: 'De Valencia à Moncada',
    roadBefore: '8 km au nord de la ville. Environ ',
    roadEm: '13 km',
    roadAfter: ' par la route.',
    firstTalked: "La première fois qu'on s'est parlé",
    days: 'jours déjà',
    since: 'Et depuis, j’aime te parler, tous les jours.',
    plansTitle: "Ce qu'on fera",
    plansSub: 'quand on se reverra enfin',
    reveal: 'Appuie pour découvrir',
    letterBtn: 'Une lettre pour toi',
    plans: [
      { title: 'Un câlin de 30 min', desc: 'Juste te serrer fort' },
      { title: 'Un repas ensemble', desc: 'Manger tout ce qu’on préfère' },
      { title: 'Un film ensemble', desc: 'Regarder quelque chose ensemble' },
      { title: 'Plein de photos', desc: 'Pour garder ton beau sourire' },
      { title: 'Balades tard le soir', desc: 'Main dans la main, sous les étoiles' },
      { title: 'De nouveaux souvenirs', desc: 'Des moments qu’on n’oubliera pas' },
    ],
    kicker: 'Un message pour toi',
    fromHeart: 'De mon cœur',
    letterFor: 'Pour la personne dont je me souviendrai toujours, même s’il arrive quelque chose',
    tap: 'Appuie pour ouvrir',
    last: 'Une dernière chose',
    like: 'Je t’aime bien.',
    appreciation: 'Sans attentes, juste pour te montrer que j’apprécie.',
    mute: 'Couper le son',
    unmute: 'Activer le son',
    signature: 'pour elsa',
    locale: 'fr-FR',
    letter: `Ma chère Elsa,

Salut Elsa,

Je repensais justement à la façon dont on s’est rencontrés un peu par hasard, et à comment, en si peu de temps, tu es quand même devenue quelqu’un avec qui j’aime vraiment parler.

Je me souviens encore de nos premières conversations, quand on a commencé à parler de jeux, de musique, de photo, et de toutes ces choses au hasard. Et bien sûr, de nos parties d’échecs 😂. Je me souviens encore que tu pensais que je t’avais laissée gagner, et honnêtement, te voir heureuse d’avoir gagné, c’était déjà une victoire pour moi.

Ce que j’ai le plus aimé, c’est à quel point tout s’est fait naturellement. On est passés de deux inconnus à se taquiner, à se raconter un peu nos journées, et, je ne sais comment, à se faire sourire. Je me souviens aussi que tu n’arrêtais pas de me dire d’aller dormir et de prendre soin de moi. Ces petites choses te semblaient peut-être normales, mais moi, je les ai vraiment appréciées.

Et puis il y a eu le jour où on s’est enfin vus. Le 7 novembre. Je me souviens que tu t’inquiétais parce que le train était en retard, et que tu t’excusais de m’avoir fait attendre. Mais honnêtement, ça ne me dérangeait pas d’attendre. Tu avais fait l’effort de venir de si loin, et ça comptait déjà beaucoup pour moi. Même si nos plans ne se sont pas passés exactement comme prévu, passer ce moment avec toi, c’était ça qui comptait. Et oui, ce petit bisou, c’est vraiment quelque chose dont je vais me souvenir 🤭.

Je ne sais pas exactement quand j’ai commencé à t’apprécier. Peut-être quelque part entre nos discussions d’échecs un peu bêtes, tes réactions mignonnes, le fait que tu t’inquiètes pour moi, et ta façon de rendre intéressantes même les conversations ordinaires.

C’est drôle, parce qu’on ne se connaît pas depuis très longtemps, mais j’ai déjà de très bons souvenirs avec toi. J’aime ton côté enjoué, ta gentillesse, et le fait de me sentir à l’aise quand je te parle.

Je n’écris pas ça pour faire une grande déclaration, ni quoi que ce soit. Je voulais juste que tu saches que te rencontrer a été une de ces choses inattendues qui se sont révélées vraiment spéciales.

Et je suis content de t’avoir trouvée ce jour-là. ❤️

— Mohit`,
  },
} as const

type Copy = (typeof copy)[Lang]

const planBacks = ['bg-rose-50', 'bg-blue-50', 'bg-amber-50', 'bg-purple-50', 'bg-teal-50', 'bg-pink-50']
const planCovers = ['bg-rose-200', 'bg-blue-200', 'bg-amber-200', 'bg-purple-200', 'bg-teal-200', 'bg-pink-200']
const planInks = ['text-rose-400', 'text-blue-400', 'text-amber-400', 'text-purple-400', 'text-teal-400', 'text-pink-400']

function KeepGoing({
  onClick,
  text = 'Keep Going',
  icon = <ChevronRight size={20} />,
  animateIcon = true,
}: {
  onClick?: () => void
  text?: string
  icon?: ReactNode
  animateIcon?: boolean
}) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className="relative z-50 group flex items-center justify-center gap-2 bg-linear-to-r from-pink-400 to-rose-400 text-white font-medium text-lg py-3.5 px-8 rounded-full shadow-[0_8px_20px_rgba(244,114,182,0.4)] mx-auto will-change-transform"
    >
      {text}
      {animateIcon ? (
        <motion.span
          animate={{ x: [0, 4, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          {icon}
        </motion.span>
      ) : (
        <span>{icon}</span>
      )}
    </motion.button>
  )
}

function LanguageSwitch({ lang, onChange }: { lang: Lang; onChange: (lang: Lang) => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-4 left-1/2 z-50 -translate-x-1/2"
    >
      <div className="rounded-full border border-white/90 bg-white/80 p-1.5 shadow-[0_12px_32px_rgba(251,113,133,0.22)] backdrop-blur-md">
        <div className="flex items-center gap-1">
          {(
            [
              ['en', 'English'],
              ['fr', 'Français'],
            ] as const
          ).map(([code, label]) => {
            const active = lang === code
            return (
              <button
                key={code}
                type="button"
                onClick={() => onChange(code)}
                className={`rounded-full px-4 py-1.5 text-sm font-semibold transition ${
                  active
                    ? 'bg-linear-to-r from-pink-400 to-rose-400 text-white shadow-[0_6px_16px_rgba(244,114,182,0.4)]'
                    : 'text-slate-500 hover:text-rose-400'
                }`}
              >
                {label}
              </button>
            )
          })}
        </div>
      </div>
    </motion.div>
  )
}

function SoundToggle({ t }: { t: Copy }) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [muted, setMuted] = useState(true)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.loop = true
    audio.volume = 0.35

    const start = () => {
      audio.volume = 0.35
      audio.muted = false
      return audio
        .play()
        .then(() => {
          setMuted(false)
          return true
        })
        .catch(() => {
          setMuted(true)
          return false
        })
    }

    const unlock = (event: Event) => {
      const target = event.target
      if (target instanceof Element && target.closest('[data-sound-toggle]')) return
      void start().then((playing) => {
        if (playing) window.removeEventListener('pointerdown', unlock)
      })
    }

    window.addEventListener('pointerdown', unlock)
    void start().then((playing) => {
      if (playing) window.removeEventListener('pointerdown', unlock)
    })

    return () => window.removeEventListener('pointerdown', unlock)
  }, [])

  const toggle = () => {
    const audio = audioRef.current
    if (!audio) return
    if (muted) {
      audio.volume = 0.35
      audio.muted = false
      void audio.play().then(() => setMuted(false)).catch(() => setMuted(true))
      return
    }
    audio.muted = true
    setMuted(true)
  }

  const Icon = muted ? VolumeX : Volume2

  return (
    <>
      <audio
        ref={audioRef}
        src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/audio/i-want-it-that-way-2.mp3`}
        preload="auto"
        loop
      />
      <motion.button
        type="button"
        data-sound-toggle
        onClick={toggle}
        aria-label={muted ? t.unmute : t.mute}
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-4 right-4 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-white/90 bg-white/80 text-rose-400 shadow-[0_12px_32px_rgba(251,113,133,0.22)] backdrop-blur-md transition hover:text-rose-500"
      >
        <Icon className="h-5 w-5" strokeWidth={2.25} />
      </motion.button>
    </>
  )
}

function Intro({ onNext, t }: { onNext: () => void; t: Copy }) {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full text-center relative">
      <div className="bg-blob w-64 h-64 bg-pink-200 top-20 left-10" />
      <div className="bg-blob w-72 h-72 bg-rose-200 bottom-20 right-10" style={{ animationDelay: '2s' }} />
      <motion.div
        initial={{ opacity: 0, scale: 0.75, y: 25 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: 'spring', damping: 18, stiffness: 140 }}
        className="mb-8 relative z-10 will-change-transform"
      >
        <div className="bg-white p-6 rounded-full shadow-[0_10px_30px_rgba(251,113,133,0.2)] border-4 border-pink-50">
          <img
            src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/gifs/cute.gif`}
            className="w-24 md:w-28"
            alt="cute hug"
          />
        </div>
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="absolute -top-1 -right-1 bg-rose-400 text-white rounded-full p-1.5 shadow-lg will-change-transform"
        >
          <Heart size={14} className="fill-white" />
        </motion.div>
      </motion.div>
      <motion.h1
        className="text-5xl md:text-6xl text-slate-700 mb-4 font-semibold z-10"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        {t.titleRest}
        <span className="text-pink-400">{t.titleAccent}</span>
      </motion.h1>
      <motion.p
        className="text-2xl md:text-3xl text-slate-500 font-hand font-semibold max-w-sm mx-auto mb-12 z-10 will-change-transform"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        {t.subtitle}
      </motion.p>
      <motion.p
        className="text-lg md:text-xl text-slate-400 font-hand max-w-xs mx-auto -mt-8 mb-10 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.8 }}
      >
        {t.note}
      </motion.p>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.9, type: 'spring', damping: 18, stiffness: 200 }}
      >
        <KeepGoing onClick={onNext} text={t.begin} />
      </motion.div>
    </div>
  )
}

const valencia = { x: 72, y: 112 }
const moncada = { x: 238, y: 34 }

function Distance({ onNext, t }: { onNext: () => void; t: Copy }) {
  return (
    <div className="flex flex-col items-center justify-between h-full w-full relative">
      <div className="bg-blob w-96 h-96 bg-blue-100 top-20 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      <motion.div
        className="text-center z-10 mt-10 will-change-transform"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-semibold text-slate-700">
          <span className="text-rose-400">8km</span>
          <br /> {t.place}
        </h2>
      </motion.div>
      <div className="relative max-[350px]:w-70 w-88 sm:w-96 h-64 sm:h-74 my-12">
        <div className="absolute inset-0 w-full flex items-center justify-center map-noise rounded-2xl opacity-22" />
        <svg viewBox="0 0 300 150" preserveAspectRatio="none" className="absolute inset-0 w-full h-full overflow-visible drop-shadow-sm">
          <defs>
            <clipPath id="line-clip">
              <motion.rect
                x="0"
                y="-50"
                height="250"
                initial={{ width: 0 }}
                animate={{ width: 350 }}
                transition={{ duration: 2, ease: 'easeInOut', delay: 1.4 }}
              />
            </clipPath>
          </defs>
          <path
            d="M 94 112 C 130 110, 155 78, 188 56 C 210 42, 214 34, 216 34"
            fill="none"
            stroke="#EC4899"
            strokeWidth="2.5"
            pathLength={101}
            strokeDasharray="5 3"
            strokeLinecap="round"
            clipPath="url(#line-clip)"
          />
        </svg>
        <motion.div
          className="absolute z-10"
          style={{ left: `${(valencia.x / 300) * 100}%`, top: `${(valencia.y / 150) * 100}%` }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', damping: 12, delay: 0.2 }}
        >
          <div className="relative -translate-x-1/2 -translate-y-1/2">
            <span className="absolute bottom-full left-1/2 mb-2 -translate-x-1/2 whitespace-nowrap rounded-full bg-white/80 px-3 py-1 text-sm font-semibold text-rose-500 shadow-sm">
              Valencia
            </span>
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
              className="rounded-full border-2 border-pink-100 bg-white p-3 shadow-[0_5px_15px_rgba(0,0,0,0.1)]"
            >
              <MapPin className="w-6.5 h-6.5 text-blue-400 fill-blue-200" />
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          className="absolute z-10"
          style={{ left: `${(moncada.x / 300) * 100}%`, top: `${(moncada.y / 150) * 100}%` }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', damping: 12, delay: 0.8 }}
        >
          <div className="relative -translate-x-1/2 -translate-y-1/2">
            <span className="absolute left-full top-1/2 ml-2 -translate-y-1/2 whitespace-nowrap rounded-full bg-white/80 px-3 py-1 text-sm font-semibold text-rose-500 shadow-sm">
              Moncada
            </span>
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut', delay: 0.5 }}
              className="rounded-full border-2 border-pink-100 bg-white p-3 shadow-[0_5px_15px_rgba(0,0,0,0.1)]"
            >
              <MapPin className="w-6.5 h-6.5 text-rose-400 fill-rose-200" />
            </motion.div>
          </div>
        </motion.div>
      </div>
      <motion.div
        className="text-center z-10 mb-10 w-full will-change-transform"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3.6, duration: 0.8 }}
      >
        <p className="text-2xl md:text-3xl text-slate-600 font-semibold font-hand">
          {t.roadBefore}
          <span className="text-rose-500 font-bold mx-1">{t.roadEm}</span>
          {t.roadAfter}
        </p>
        <div className="mt-8">
          <KeepGoing onClick={onNext} text={t.keep} />
        </div>
      </motion.div>
    </div>
  )
}

function CountUp({ value }: { value: number }) {
  const [shown, setShown] = useState(0)

  useEffect(() => {
    let current = 0
    if (value === 0) return
    const step = value / 125
    const timer = setInterval(() => {
      current += step
      if (current >= value) {
        setShown(value)
        clearInterval(timer)
      } else {
        setShown(Math.floor(current))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [value])

  return <>{shown}</>
}

function LastMet({ onNext, t }: { onNext: () => void; t: Copy }) {
  const [days, setDays] = useState(0)
  const [when, setWhen] = useState('')

  useEffect(() => {
    const start = new Date('2026-11-03')
    const today = new Date()
    start.setHours(0, 0, 0, 0)
    today.setHours(0, 0, 0, 0)
    setDays(Math.round(Math.abs(today.getTime() - start.getTime()) / 86400000))
    setWhen(start.toLocaleDateString(t.locale, { year: 'numeric', month: 'long', day: 'numeric' }))
  }, [t.locale])

  return (
    <div className="flex flex-col items-center justify-center h-full w-full text-center relative">
      <motion.p
        className="text-lg md:text-xl font-medium uppercase tracking-wider mb-2 z-10 will-change-transform"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {t.firstTalked}
      </motion.p>
      <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }}>
        <Heart className="w-4 h-4 text-rose-300 fill-rose-200 opacity-90" />
      </motion.span>
      <motion.h3
        className="text-2xl md:text-3xl font-hand font-semibold text-pink-500 mb-8 z-10 will-change-transform"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        {when}
      </motion.h3>
      <motion.div
        className="relative z-10 bg-white/70 backdrop-blur-md p-10 rounded-[3rem] shadow-[0_20px_60px_rgba(251,113,133,0.15)] border-2 border-white/80 flex flex-col items-center w-full max-w-sm will-change-transform"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, type: 'spring', damping: 20 }}
      >
        <div className="absolute inset-0 flex items-center justify-center cream-noise opacity-30 rounded-[3rem]" />
        <div className="flex flex-col items-center mb-4 relative">
          <span className="text-7xl md:text-8xl font-semibold bg-clip-text text-transparent bg-linear-to-br from-slate-700 to-rose-400">
            {days > 0 ? <CountUp value={days} /> : '0'}
          </span>
          <span className="text-xl font-medium text-pink-400 mt-2">{t.days}</span>
        </div>
        <div className="w-16 h-1 rounded-full bg-pink-100 my-4 relative" />
        <p className="text-2xl md:text-[26px] text-slate-600 font-hand font-semibold leading-snug text-balance relative">
          {t.since}
        </p>
      </motion.div>
      <motion.div className="mt-12 z-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}>
        <KeepGoing onClick={onNext} text={t.keep} />
      </motion.div>
    </div>
  )
}

function Plans({ onNext, t }: { onNext: () => void; t: Copy }) {
  const [open, setOpen] = useState(() => Array(t.plans.length).fill(false))

  return (
    <div className="flex flex-col items-center h-full w-full relative">
      <div className="bg-blob w-100 h-100 bg-rose-100 top-[-10%] left-[-10%] opacity-50" />
      <div className="bg-blob w-75 h-75 bg-amber-100 bottom-[-10%] right-[-5%] opacity-50" style={{ animationDelay: '2s' }} />
      <motion.div
        className="text-center z-10 mt-6 md:mt-8 mb-6 shrink-0 will-change-transform"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold text-slate-700 mb-2">{t.plansTitle}</h2>
        <p className="text-xl md:text-2xl font-hand text-rose-500">{t.plansSub}</p>
      </motion.div>
      <div className="w-full max-w-4xl mb-10 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 pt-2">
          {t.plans.map((plan, index) => {
            const revealed = open[index]
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.1 * index + 0.3, type: 'spring', damping: 15 }}
                className="will-change-transform"
              >
                <motion.div
                  whileHover={{ y: -5, scale: 1.02, rotate: index % 2 === 0 ? 1 : -1 }}
                  className="relative flex h-28 md:h-32 bg-white rounded-2xl shadow-[0_8px_20px_rgba(0,0,0,0.04)] overflow-hidden group border border-slate-100 w-full"
                >
                  <div className="absolute -top-3 left-24 md:left-28 -translate-x-1/2 w-6 h-6 bg-[#FFF5F5] rounded-full z-10 shadow-inner" />
                  <div className="absolute -bottom-3 left-24 md:left-28 -translate-x-1/2 w-6 h-6 bg-[#FFF5F5] rounded-full z-10 shadow-inner" />
                  <div className={`w-24 md:w-28 ${planBacks[index]} flex flex-col items-center justify-center border-r-2 border-dashed border-slate-200 shrink-0`}>
                    <div className="bg-white p-2.5 rounded-full shadow-sm mb-1.5">
                      <Heart size={28} className={planInks[index]} />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">#{index + 1}</span>
                  </div>
                  <div className="flex-1 p-4 pl-5 md:pl-6 flex flex-col justify-center bg-white relative overflow-hidden">
                    <h4 className="text-lg md:text-xl font-bold text-slate-700 leading-tight pr-8">{plan.title}</h4>
                    <p className="text-sm md:text-base font-hand text-slate-500 mt-1 leading-snug pr-8">{plan.desc}</p>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2">
                      <Heart
                        className="w-6 h-6 text-slate-200 group-hover:text-rose-400 group-hover:fill-rose-100 transition-all duration-300 transform group-hover:scale-110"
                        strokeWidth={2}
                      />
                    </div>
                  </div>
                  <AnimatePresence>
                    {!revealed && (
                      <motion.div
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0, scale: 0.95, filter: 'blur(4px)' }}
                        transition={{ duration: 0.4 }}
                        onClick={() =>
                          setOpen((current) => {
                            const next = [...current]
                            next[index] = true
                            return next
                          })
                        }
                        className={`absolute inset-0 z-30 flex flex-col items-center justify-center cursor-pointer overflow-hidden ${planCovers[index]}`}
                      >
                        <div
                          className="absolute inset-0 opacity-40 pointer-events-none"
                          style={{
                            backgroundImage: 'radial-gradient(rgba(255,255,255,0.8) 2px, transparent 2px)',
                            backgroundSize: '16px 16px',
                          }}
                        />
                        <div className="absolute inset-2 md:inset-3 border-2 border-dashed border-white/70 rounded-xl pointer-events-none z-10" />
                        <motion.div
                          animate={{ rotate: [0, -6, 6, -6, 6, 0], scale: [1, 1.05, 1] }}
                          transition={{ repeat: Infinity, duration: 2.5, delay: 0.15 * index }}
                          className="bg-white/80 backdrop-blur-sm rounded-full p-2.5 shadow-sm mb-1 z-10"
                        >
                          <Heart size={20} className={`${planInks[index]} fill-current`} strokeWidth={2} />
                        </motion.div>
                        <span className={`font-medium text-[12px] md:text-[13px] uppercase tracking-wider z-10 mt-1 ${planInks[index]}`}>
                          {t.reveal}
                        </span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }}>
        <KeepGoing onClick={onNext} animateIcon={false} text={t.letterBtn} icon={<Mail size={18} />} />
      </motion.div>
    </div>
  )
}

function Letter({ onNext, t }: { onNext: () => void; t: Copy }) {
  const [open, setOpen] = useState(false)
  const [burst] = useState(() =>
    Array.from({ length: 15 }, (_, index) => ({
      id: index,
      y: -200 - Math.random() * 250,
      x: (Math.random() - 0.5) * 250,
      scale: 0.5 + Math.random(),
      rotate: (Math.random() - 0.5) * 120,
      duration: 1.5 + Math.random() * 1.2,
      delay: Math.random() * 0.2,
    })),
  )

  return (
    <div className="flex flex-col items-center justify-center h-full w-full relative">
      <div className="bg-blob w-87.5 h-87.5 bg-pink-100 top-[-5%] right-[-5%] opacity-50 absolute pointer-events-none" />
      <div
        className="bg-blob w-75 h-75 bg-rose-100 bottom-[-5%] left-[-5%] opacity-50 absolute pointer-events-none"
        style={{ animationDelay: '2s' }}
      />
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 mt-2 md:mt-4 shrink-0"
      >
        <span className="text-rose-400 font-bold tracking-widest uppercase text-xs mb-1 block opacity-90">{t.kicker}</span>
        <h2 className="text-3xl md:text-5xl font-bold text-slate-700 mb-1">{t.fromHeart}</h2>
      </motion.div>
      <div className="relative w-full max-w-md my-10 flex items-center justify-center z-10 min-h-100 md:min-h-110">
        <AnimatePresence>
          {open && (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-50">
              {burst.map((heart) => (
                <motion.div
                  key={`heart-burst-${heart.id}`}
                  initial={{ opacity: 0, y: 20, x: 0, scale: 0.5 }}
                  animate={{ opacity: [0, 1, 1, 0], y: heart.y, x: heart.x, scale: heart.scale, rotate: heart.rotate }}
                  transition={{ duration: heart.duration, delay: heart.delay, ease: 'easeOut' }}
                  className="absolute will-change-transform"
                >
                  <Heart className="text-pink-400 fill-pink-300 drop-shadow-sm" size={24} />
                </motion.div>
              ))}
            </div>
          )}
        </AnimatePresence>
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div
              key="letter"
              initial={{ opacity: 0, scale: 0.85, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ type: 'spring', damping: 20, stiffness: 120 }}
              className="relative w-full h-100 md:h-110 bg-[#FFFBF5] rounded-2xl shadow-[0_12px_35px_rgba(0,0,0,0.08)] flex flex-col will-change-transform"
              style={{
                backgroundImage: 'radial-gradient(#FDE68A 0.6px, transparent 0.6px)',
                backgroundSize: '18px 18px',
              }}
            >
              <div className="paper-bg opacity-85 absolute inset-0" />
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-7 bg-amber-200/60 -rotate-1 backdrop-blur-[2px] z-20 shadow-[0_1px_3px_rgba(0,0,0,0.06)] border-b border-white/60 mix-blend-multiply" />
              <div className="pt-6 pb-3 px-6 flex items-start justify-between gap-3 border-b border-black/5 bg-[#FFFDF9]/40 backdrop-blur-sm">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="flex items-start gap-2"
                >
                  <Heart size={18} className="text-pink-400 fill-pink-300 shrink-0 mt-0.5" />
                  <span className="font-bold text-slate-600 text-sm md:text-base leading-snug text-left">
                    {t.letterFor}
                  </span>
                </motion.div>
                <motion.span
                  animate={{ rotate: [0, 8, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                  className="shrink-0"
                >
                  <Sparkles size={16} className="text-amber-400" />
                </motion.span>
              </div>
              <div className="overflow-y-auto h-80 md:h-90 p-6 md:p-8 pb-10 relative">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5, duration: 0.5 }}
                  className="font-hand text-slate-700 text-xl md:text-2xl leading-relaxed whitespace-pre-wrap"
                >
                  {t.letter}
                </motion.div>
              </div>
              <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 bg-linear-to-t from-[#FFFBF5] via-[#FFFBF5]/90 to-transparent" />
            </motion.div>
          ) : (
            <motion.div
              key="envelope"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -30, transition: { duration: 0.3 } }}
              whileHover={{ scale: 1.03, rotate: 1 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setOpen(true)}
              className="cursor-pointer relative w-72 md:w-80 h-52 md:h-56 bg-rose-100/90 rounded-2xl shadow-[0_15px_30px_rgba(244,114,182,0.2)] border-2 border-pink-200 flex flex-col items-center justify-center p-4 overflow-hidden group will-change-transform"
            >
              <div
                className="absolute top-0 left-0 w-full h-28 bg-rose-200/80 rounded-t-2xl border-b-2 border-rose-300/50"
                style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }}
              />
              <motion.div
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
                className="z-20 bg-rose-400 text-white rounded-full p-4 shadow-lg group-hover:bg-pink-500 transition-colors flex items-center justify-center border-4 border-white"
              >
                <Heart className="w-8 h-8 fill-white text-white" />
              </motion.div>
              <span className="z-20 font-bold text-sm text-rose-500 tracking-wider uppercase mt-3">{t.tap}</span>
              <div className="absolute top-3 right-3 w-8 h-10 border-2 border-dashed border-rose-300/80 rounded flex items-center justify-center bg-white/40">
                <Sparkles className="w-4 h-4 text-rose-400" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <motion.div
        className={open ? '' : 'pointer-events-none'}
        initial={{ opacity: 0, y: 20 }}
        animate={open ? { opacity: 1, y: 0 } : undefined}
        transition={{ delay: 2.5, duration: 0.5 }}
      >
        <KeepGoing onClick={onNext} text={t.last} icon={<Sparkles size={18} />} animateIcon={false} />
      </motion.div>
    </div>
  )
}

function Finale({ t }: { t: Copy }) {
  const [ready, setReady] = useState(false)
  const [hearts] = useState(() =>
    Array.from({ length: 10 }, (_, id) => ({
      id,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: Math.random() * 3,
      duration: 4 + Math.random() * 4,
      size: 12 + Math.random() * 14,
      drift: (Math.random() - 0.5) * 40,
    })),
  )

  useEffect(() => {
    setReady(true)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center w-full h-full relative">
      {ready &&
        hearts.map((heart) => (
          <motion.div
            key={heart.id}
            className="absolute pointer-events-none z-0"
            style={{ left: heart.left, top: heart.top }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ y: [0, -80], x: [0, heart.drift], opacity: [0, 0.5, 0], scale: [0.5, 1.2, 0.5] }}
            transition={{ duration: heart.duration, repeat: Infinity, ease: 'easeInOut', delay: heart.delay }}
          >
            <Heart className="text-pink-300 fill-pink-200 opacity-50" size={heart.size} />
          </motion.div>
        ))}
      <div className="relative z-10 flex items-center justify-center h-48 w-48">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1.5 }}
          className="absolute flex items-center justify-center"
        >
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.7, 0.3] }}
            transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
            className="bg-rose-300 blur-[50px] w-40 h-40 rounded-full"
          />
        </motion.div>
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ delay: 2.5, repeat: Infinity, duration: 5, ease: 'easeInOut' }}
          className="relative flex items-center justify-center will-change-transform"
        >
          <svg viewBox="0 0 24 24" className="w-32 h-32 md:w-40 md:h-40 overflow-visible drop-shadow-[0_10px_20px_rgba(244,114,182,0.5)]">
            <motion.path
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              initial={{ pathLength: 0, fill: 'rgba(251, 113, 133, 0)', stroke: '#E11D48', strokeWidth: 1.5 }}
              animate={{ pathLength: 1, fill: 'rgba(251, 113, 133, 1)' }}
              transition={{
                pathLength: { duration: 2, ease: 'easeInOut' },
                fill: { delay: 2.2, duration: 1, ease: 'easeIn' },
              }}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <motion.div
            initial={{ scale: 0, opacity: 0, rotate: -20 }}
            animate={{ scale: 1, opacity: 1, rotate: 10 }}
            transition={{ delay: 2.6, type: 'spring', damping: 10, stiffness: 100 }}
            className="absolute -bottom-1 -right-4 bg-white/95 backdrop-blur-sm rounded-full p-2.5 shadow-[0_5px_15px_rgba(0,0,0,0.15)] border border-pink-100"
          >
            <motion.div animate={{ scale: [1, 1.15, 1] }} transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}>
              <Heart className="w-8 h-8 md:w-10 md:h-10 text-rose-500 fill-rose-400" strokeWidth={1.5} />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      <div className="text-center z-10">
        <motion.h1
          className="text-5xl md:text-6xl font-semibold text-slate-700 mb-3"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.8 }}
        >
          {t.like}
        </motion.h1>
        <motion.p
          className="text-2xl md:text-3xl text-rose-500 font-hand max-w-sm mx-auto"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 3.2, duration: 0.8 }}
        >
          {t.appreciation}
        </motion.p>
      </div>
    </div>
  )
}

export default function Page() {
  const [step, setStep] = useState(0)
  const [lang, setLang] = useState<Lang>('en')
  const t = copy[lang]
  const next = () => setStep((current) => current + 1)

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center relative overflow-x-hidden">
      <div className="noise fixed inset-0 z-30" />
      <LanguageSwitch lang={lang} onChange={setLang} />
      <SoundToggle t={t} />
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 1.02 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="will-change-transform px-5 pt-20 pb-8 w-full max-w-5xl"
        >
          {step === 0 && <Intro onNext={next} t={t} />}
          {step === 1 && <Distance onNext={next} t={t} />}
          {step === 2 && <LastMet onNext={next} t={t} />}
          {step === 3 && <Plans onNext={next} t={t} />}
          {step === 4 && <Letter onNext={next} t={t} />}
          {step === 5 && <Finale t={t} />}
        </motion.div>
      </AnimatePresence>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="fixed bottom-4 right-4 text-sm font-thin text-black/40 pointer-events-none z-50 tracking-wide"
      >
        {t.signature}
      </motion.div>
    </div>
  )
}

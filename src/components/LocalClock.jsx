import { useEffect, useState } from 'react'
import { profile } from '../data'

const dateFormat = new Intl.DateTimeFormat('en-GB', {
  timeZone: profile.timeZone,
  weekday: 'short',
  day: 'numeric',
  month: 'short',
  year: 'numeric',
})

const timeFormat = new Intl.DateTimeFormat('en-GB', {
  timeZone: profile.timeZone,
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: false,
})

const zoneFormat = new Intl.DateTimeFormat('en-GB', {
  timeZone: profile.timeZone,
  timeZoneName: 'short',
})

// Intl prints "GMT+5:30" for India; show the familiar abbreviation instead.
const zoneOverrides = { 'Asia/Kolkata': 'IST' }

function zoneName(date) {
  if (zoneOverrides[profile.timeZone]) return zoneOverrides[profile.timeZone]
  return zoneFormat.formatToParts(date).find((part) => part.type === 'timeZoneName')?.value ?? ''
}

export default function LocalClock() {
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="border-b border-zinc-800/60 bg-black/50 text-xs text-zinc-400">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-3 gap-y-0.5 px-5 py-1.5 sm:px-6">
        <span className="font-medium text-zinc-300">{profile.location}</span>
        <span className="hidden text-zinc-600 sm:inline" aria-hidden="true">·</span>
        <time
          dateTime={now.toISOString()}
          className="tabular-nums"
          aria-label={`Local time in ${profile.location}`}
        >
          <span className="hidden sm:inline">{dateFormat.format(now)} · </span>
          {timeFormat.format(now)} {zoneName(now)}
        </time>
      </div>
    </div>
  )
}

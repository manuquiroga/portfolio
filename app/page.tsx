import { contact, experience, profile } from "@/lib/data";

const muted = "text-neutral-500 dark:text-neutral-400";
const body = "text-neutral-700 dark:text-neutral-300";
const link =
  "underline decoration-neutral-300 underline-offset-4 transition-colors hover:decoration-neutral-900 dark:decoration-neutral-700 dark:hover:decoration-neutral-100";

export default function Home() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16 sm:py-28">
      <header>
        <h1 className="text-2xl font-semibold tracking-tight">{profile.name}</h1>
        <p className={`mt-1 ${muted}`}>
          {profile.role} · {profile.location}
        </p>
        <p className={`mt-6 leading-relaxed ${body}`}>{profile.bio}</p>
      </header>

      <section className="mt-16">
        <h2 className={`text-sm font-medium ${muted}`}>Experience</h2>
        <ol className="mt-6 divide-y divide-neutral-200 border-t border-neutral-200 dark:divide-neutral-800 dark:border-neutral-800">
          {experience.map((job) => (
            <li key={job.company} className="grid gap-x-6 gap-y-2 py-8 sm:grid-cols-[8rem_1fr]">
              <p className={`text-sm tabular-nums sm:pt-0.5 ${muted}`}>{job.period}</p>
              <div>
                <h3 className="font-medium">
                  {job.company}
                  {job.note && <span className={`ml-2 text-sm font-normal ${muted}`}>{job.note}</span>}
                </h3>
                <p className={`text-sm ${muted}`}>{job.role}</p>
                <div className={`mt-3 space-y-3 text-[0.9375rem] leading-relaxed ${body}`}>
                  {job.description.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <p className={`mt-3 text-sm ${muted}`}>{job.stack}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-8">
        <h2 className={`text-sm font-medium ${muted}`}>Contact</h2>
        <ul className="mt-6 space-y-2 border-t border-neutral-200 pt-8 dark:border-neutral-800">
          {contact.map((item) => (
            <li key={item.label} className="grid gap-x-6 sm:grid-cols-[8rem_1fr]">
              <span className={`text-sm sm:pt-0.5 ${muted}`}>{item.label}</span>
              <a href={item.href} target="_blank" rel="noopener noreferrer" className={`w-fit ${link}`}>
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

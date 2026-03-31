'use client';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function LanguageSwitcher() {
    const router = useRouter();
    const { locale, locales, asPath } = router;

    return (
        <div className="flex items-center gap-1 rounded-full border border-border bg-panel px-1 py-1">
            {locales?.map((loc) => (
                <Link
                    key={loc}
                    href={asPath}
                    locale={loc}
                    className={`rounded-full px-2.5 py-1 text-xs font-semibold tracking-wide transition ${
                        locale === loc
                            ? 'bg-accent text-slate-950'
                            : 'text-muted hover:text-foreground'
                    }`}
                >
                    {loc.toUpperCase()}
                </Link>
            ))}
        </div>
    );
}

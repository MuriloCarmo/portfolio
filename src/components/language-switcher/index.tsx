'use client';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function LanguageSwitcher() {
    const router = useRouter();
    const { locale, locales, asPath } = router;

    return (
        <div className="flex gap-2">
            {locales?.map((loc) => (
                <Link
                    key={loc}
                    href={asPath}
                    locale={loc}
                    className={`text-sm font-bold ${locale === loc ? 'text-primary' : 'text-gray-400'}`}
                >
                    {loc.toUpperCase()}
                </Link>
            ))}
        </div>
    );
}

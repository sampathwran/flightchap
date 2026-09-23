import { useTranslations } from 'next-intl';

export default function AboutPage() {
  const t = useTranslations('Footer');
  
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center pt-24 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6 text-slate-800">{t('aboutUs')}</h1>
        <p className="text-lg text-slate-600 leading-relaxed bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
          {t('aboutDesc')}
        </p>
      </div>
    </div>
  );
}

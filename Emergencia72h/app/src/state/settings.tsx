// Ajustes de la app (idioma, modo ahorro, aviso aceptado). Se guardan en el móvil.
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getLocales } from 'expo-localization';
import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { Lang, L } from '../content/types';
import { STRINGS, StringKey } from '../i18n/strings';
import { palette, Palette } from '../theme';

type LangPref = Lang | 'system';
type Settings = { lang: LangPref; saver: boolean; accepted: boolean };
const DEFAULTS: Settings = { lang: 'system', saver: false, accepted: false };
const KEY = 'settings.v1';

type Ctx = {
  settings: Settings;
  ready: boolean;
  lang: Lang;
  colors: Palette;
  set: (patch: Partial<Settings>) => void;
  t: (key: StringKey) => string;
  tr: (l: L) => string;
};

const SettingsCtx = createContext<Ctx | null>(null);

function systemLang(): Lang {
  const code = getLocales()[0]?.languageCode ?? 'es';
  return code === 'es' || code === 'ca' || code === 'gl' || code === 'eu' ? 'es' : 'en';
}

export function SettingsProvider({ children }: { children: React.ReactNode }) {
  const [settings, setSettings] = useState<Settings>(DEFAULTS);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem(KEY)
      .then((raw) => raw && setSettings({ ...DEFAULTS, ...JSON.parse(raw) }))
      .catch(() => {})
      .finally(() => setReady(true));
  }, []);

  const set = useCallback((patch: Partial<Settings>) => {
    setSettings((prev) => {
      const next = { ...prev, ...patch };
      AsyncStorage.setItem(KEY, JSON.stringify(next)).catch(() => {});
      return next;
    });
  }, []);

  const value = useMemo<Ctx>(() => {
    const lang = settings.lang === 'system' ? systemLang() : settings.lang;
    return {
      settings,
      ready,
      lang,
      colors: palette(settings.saver),
      set,
      t: (key) => STRINGS[lang][key],
      tr: (l) => l[lang],
    };
  }, [settings, ready, set]);

  return <SettingsCtx.Provider value={value}>{children}</SettingsCtx.Provider>;
}

export function useSettings() {
  const ctx = useContext(SettingsCtx);
  if (!ctx) throw new Error('useSettings fuera de SettingsProvider');
  return ctx;
}

// Guardado local (solo en el móvil). Sin servidor.
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useCallback, useEffect, useState } from 'react';

export const KEYS = {
  kit: 'kit.checked.v1',
  kitReview: 'kit.review.v1',
  people: 'kit.people.v1',
  card: 'card.v1',
} as const;

// Estado que se guarda solo en el móvil.
export function useStored<T>(key: string, initial: T) {
  const [value, setValue] = useState<T>(initial);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let alive = true;
    AsyncStorage.getItem(key)
      .then((raw) => {
        if (alive && raw != null) setValue(JSON.parse(raw) as T);
      })
      .catch(() => {})
      .finally(() => alive && setLoaded(true));
    return () => {
      alive = false;
    };
  }, [key]);

  const save = useCallback(
    (next: T | ((prev: T) => T)) => {
      setValue((prev) => {
        const v = typeof next === 'function' ? (next as (p: T) => T)(prev) : next;
        AsyncStorage.setItem(key, JSON.stringify(v)).catch(() => {});
        return v;
      });
    },
    [key]
  );

  return [value, save, loaded] as const;
}

export async function clearUserData() {
  await AsyncStorage.multiRemove(Object.values(KEYS));
}

export type Contact = { name: string; phone: string };
export type EmergencyCard = {
  name: string;
  blood: string;
  allergies: string;
  conditions: string;
  meds: string;
  notes: string;
  contacts: Contact[];
};
export const EMPTY_CARD: EmergencyCard = { name: '', blood: '', allergies: '', conditions: '', meds: '', notes: '', contacts: [] };

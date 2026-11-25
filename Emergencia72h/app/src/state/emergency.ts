// Registro de uso de la zona EMERGENCIA en esta sesión.
// Lo usan los anuncios para no molestar nunca a alguien que puede estar en una emergencia.
import { useEffect, useSyncExternalStore } from 'react';

let called112 = false;
let lastEmergencyAt = 0;
const listeners = new Set<() => void>();
const emit = () => listeners.forEach((l) => l());

// Se llama al pulsar "Llamar al 112".
export function markCalled112() {
  called112 = true;
  lastEmergencyAt = Date.now();
  emit();
}

// Se llama al abrir una guía de emergencia, la linterna, el SOS o Mi ficha.
export function markEmergencyActivity() {
  lastEmergencyAt = Date.now();
  emit();
}

export function hasCalled112() {
  return called112;
}

export function minutesSinceEmergency() {
  return lastEmergencyAt ? (Date.now() - lastEmergencyAt) / 60000 : Infinity;
}

// Pantallas de emergencia: marcan actividad al abrirse.
export function useEmergencyScreen() {
  useEffect(() => {
    markEmergencyActivity();
  }, []);
}

export function useCalled112() {
  return useSyncExternalStore(
    (cb) => {
      listeners.add(cb);
      return () => listeners.delete(cb);
    },
    () => called112
  );
}

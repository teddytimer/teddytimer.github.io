// Sin anuncios (versión 1).
import type { AdsBackend } from '../types';

export const offBackend: AdsBackend = {
  name: 'off',
  init: async () => ({ personalized: false }),
  Banner: () => null,
  Host: () => null,
  privacyOptionsRequired: () => false,
  showPrivacyOptions: async () => {},
};

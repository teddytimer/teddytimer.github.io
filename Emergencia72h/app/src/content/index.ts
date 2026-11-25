import { FIRST_AID } from './firstaid';
import { PROJECTS } from './projects';
import { RISKS } from './risks';
import { SURVIVAL } from './survival';
import { Guide } from './types';

export { RISKS, SURVIVAL, FIRST_AID, PROJECTS };

const ALL: Guide[] = [...RISKS, ...SURVIVAL, ...FIRST_AID, ...PROJECTS];
export const GUIDES: Record<string, Guide> = Object.fromEntries(ALL.map((g) => [g.id, g]));
export const ALL_GUIDES = ALL;

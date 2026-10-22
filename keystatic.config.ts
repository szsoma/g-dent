import { config } from '@keystatic/core';
import { collections } from './keystatic.generated';
export default config({ storage: { kind: 'cloud' }, cloud: { project: 'gdent/gdent-fogaszat' }, collections });

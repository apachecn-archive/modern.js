import type { DevServerHttpsOptions } from '@modern-js/types';
import type { ProgressOptions } from '../../webpackPlugins/ProgressPlugin/ProgressPlugin';

export interface DevConfig {
  hmr?: boolean;
  port?: number;
  https?: DevServerHttpsOptions;
  startUrl?: boolean | string | string[];
  assetPrefix?: string | boolean;
  progressBar?: boolean | ProgressOptions;
}

export type NormalizedDevConfig = Required<DevConfig>;

import { createPagesFunctionHandler } from '@react-router/cloudflare';

// This file won’t exist if it hasn’t yet been built
// eslint-disable-next-line import/no-unresolved
import * as build from '../build/server';

export const onRequest = createPagesFunctionHandler({ build });

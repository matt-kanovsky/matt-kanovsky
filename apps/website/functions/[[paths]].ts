import { createPagesFunctionHandler } from '@react-router/cloudflare';
// This file won’t exist if it hasn’t yet been built
import * as build from '../build/server';

export const onRequest = createPagesFunctionHandler({ build });

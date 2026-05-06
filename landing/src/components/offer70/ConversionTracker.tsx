'use client';

import { useEffect } from 'react';
import { trackEvent } from './tracking';

interface Props {
  variant: string;
}

export default function ConversionTracker({ variant }: Props) {
  useEffect(() => {
    trackEvent('form_submitted', { variant });
  }, [variant]);
  return null;
}

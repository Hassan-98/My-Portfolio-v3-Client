'use client';
import React, { useEffect } from 'react';
import { Next13ProgressBar } from 'next13-progressbar';
//= Apply Theme Mode
import applyColorMode from '@/utils/color-mode';

function ProgressBar() {
  useEffect(() => {
    applyColorMode();
  }, []);

  return (
    <Next13ProgressBar height="4px" color="#4c4c4c" options={{ showSpinner: true }} showOnShallow />
  );
};

export default ProgressBar;
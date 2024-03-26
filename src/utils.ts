import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const w = (...inputs: ClassValue[]) => twMerge(clsx(...inputs));

export const wait = (ms = 1000) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export async function fakeSubmit(data: any) {
  const min = 750;
  const max = 2000;

  const randomTime = Math.floor(Math.random() * (max - min) + min);

  console.info('submitting', data);

  await wait(randomTime);

  console.info('submitted', data);
}

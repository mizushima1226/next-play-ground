export const COLORS = {
  RED: '##ff4500',
}

export const ROOT_URL = "https://next-play-ground.vercel.app";

export const routes = {
  top: "/",
  sample: "/sample",
  sampleSsr: "/sampleSsr",
  sampleSsrNum: (num: number) => `sampleSsr/${num}`,
  sampleCsr: "/sampleCsr",
}
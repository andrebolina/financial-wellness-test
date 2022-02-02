export const HEALTHY = "HEALTHY";
export const MEDIUM = "MEDIUM";
export const LOW = "LOW";

import healthBanner from 'assets/images/banners/healthBanner.png';
import lowBanner from 'assets/images/banners/lowBanner.png';
import mediumBanner from 'assets/images/banners/mediumBanner.png';

export const wellnessScores = {
  HEALTHY: {
    level: 3,
    message: "Congratulations!",
    title: "Healthy",
    pageviewImg: healthBanner,
    pageviewLabel: "Investing",
    pageviewTitle: "A beginner’s guide to investing",
    pageviewDescription: "If you’re new to investing, it’s normal to feel a bit intimidated. Making decisions about money is never easy, and the (...)"
  },
  MEDIUM: {
    level: 2,
    message: "There is room for improvement.",
    title: "Average",
    pageviewImg: mediumBanner,
    pageviewLabel: "Investing",
    pageviewTitle: "Breaking down the barriers to financial wellness",
    pageviewDescription: "Financial wellness should be accessible to everyone: irrespective of their background, income, net worth (...)"
  },
  LOW: {
    level: 1,
    message: "Caution!",
    title: "Unhealthy",
    pageviewImg: lowBanner,
    pageviewLabel: "Learning",
    pageviewTitle: "Financial Wellness 101: Everything You Need to Know",
    pageviewDescription: "Financial wellness is a term used to describe your ability to manage your current and future financial needs. (...)"
  },
};

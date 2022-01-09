export const HEALTHY = 'HEALTHY';
export const MEDIUM = 'MEDIUM';
export const LOW = 'LOW';

export const wellnessScores = {
  HEALTHY: {
    level: 3,
    message: 'Congratulations!',
    title: 'Healthy'
  },
  MEDIUM: {
    level: 2,
    message: 'There is room for improvement.',
    title: 'Average'
  },
  LOW: {
    level: 1,
    message: 'Caution!',
    title: 'Unhealthy'
  }
}
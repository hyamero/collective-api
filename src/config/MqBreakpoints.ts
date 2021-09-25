const breakpoints: number[] = [576, 768, 992, 1200, 1400]

const mq = breakpoints.map(
  bp => `@media (max-width: ${bp}px)`
)

export default mq
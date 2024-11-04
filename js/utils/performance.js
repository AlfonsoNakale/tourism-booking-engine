export const PerformanceMonitor = {
  marks: {},

  start(label) {
    this.marks[label] = performance.now();
  },

  end(label) {
    if (this.marks[label]) {
      const duration = performance.now() - this.marks[label];
      console.log(`${label} took ${duration.toFixed(2)}ms`);
      delete this.marks[label];
      return duration;
    }
    return 0;
  },
};

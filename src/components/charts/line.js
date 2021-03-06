import { Line, mixins } from "vue-chartjs";
const { reactiveProp } = mixins;

export default {
  extends: Line,
  mixins: [reactiveProp],
  props: ["options", "chart-data"],
  mounted() {
    this.renderChart(this.chartData, this.options);
  },
};

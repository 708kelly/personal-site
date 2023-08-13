// TODO Add a couple lines about each project
const data = [
  {
    title: 'Demand prediction and Dynamic Pricing in multi-channel e-commerce, take shoes as an example',
    subtitle: 'H.H. GALAXY CO., LTD.',
    image: '/images/projects/demand.png',
    date: '2021-07',
    desc:
      'Considering the unsalable shoes and inventory conditions, we planned a model to estimate the demand distribution probability in each period. Then, we build the stochastic dynamic programming model to plan the pricing strategy for each period. Finally, we designed a display interface for the company to obtain under each situation in each period the best pricing strategy.',
  },
  {
    title: 'Production and Inventory planing in food processing plant',
    subtitle: '黑橋牌',
    image: '/images/projects/production.png',
    date: '2021-07',
    desc:
      'Considering unstable demand and the limit expiration, we developed the mathematical model for production scheduling and planning, by dividing the problem into two levels, Master and Factory planning. We use Gurobi to get the optimal solution and built greedy research algorithm. In the final, we provided a system for the company showing planning results. This research had presented in OR and DAS seminars.',
  },
];

export default data;

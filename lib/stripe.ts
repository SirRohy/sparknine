// import Stripe from 'stripe';
// import Card from '../components/Card';

// export async function getServerSideProps() {
//   const prices = [];
//   const stripe = new Stripe(process.env.STRIPE_SCRET_KEY)
//   const {data: prices} = await stripe.prices.list({
//     active: true,
//     limit: 10,
//     expand: ['data.product'],
//   })
//   return (
//     props: {
//       prices,
//     }
//   )
// }
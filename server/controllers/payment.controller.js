const createPayment  = require('../services/userPayment.services');

const createPayments = async (req , res , next) =>{
    try {
        const { cartItems } = req.body;
    
        // Calculate the total amount
        let totalAmount = 0;
        cartItems.forEach(item => {
          totalAmount += item.price * item.quantity;
        });
    
        // Create a Checkout Session with Stripe
        const session = await stripe.checkout.sessions.create({
          payment_method_types: ['card'],
          line_items: cartItems.map(item => ({
            price_data: {
              currency: 'usd',
              product_data: {
                name: item.name,
              },
              unit_amount: item.price * 100, // Stripe expects the amount in cents
            },
            quantity: item.quantity,
          })),
          mode: 'payment',
          success_url: `${process.env.FRONTEND_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
          cancel_url: `${process.env.FRONTEND_URL}/cancel`,
        });
    
        res.json({ url: session.url });
      } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
      }
}

module.exports = createPayments
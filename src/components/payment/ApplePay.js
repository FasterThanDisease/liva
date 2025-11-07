import React, { useEffect, useState } from 'react';
import { PaymentRequestButtonElement, useStripe, useElements } from '@stripe/react-stripe-js';
// import StatusMessages, {useMessages} from './StatusMessages';

const ApplePay = ({ amount, currency, paymentRef, disabled }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [paymentRequest, setPaymentRequest] = useState(null);
    const [error, setError] = useState(0)

    useEffect(() => {
        if (!stripe || !elements) {
            setError(1);
            return; // Beende die Funktion hier, wenn Stripe oder Elements nicht initialisiert sind
        }

        const pr = stripe.paymentRequest({
            country: 'DE',
            currency: currency,
            total: {
                label: 'TMS Service',
                amount: Math.round(parseFloat(amount * 100)),
            },
            requestPayerName: true,
            requestPayerEmail: true,
            paymentOptions: {
                requestPayerEmail: true,
                requestPayerName: true,
                allowedPaymentMethods: ['card'],
                allowedCardNetworks: ['visa', 'mastercard', 'amex'],
            }
        });


        // Check the availability of the Payment Request API.
        pr.canMakePayment().then(result => {
            if (result) {
                setPaymentRequest(pr);
            }
        }).catch((err) => {
            console.error("Error checking canMakePayment", err);
            setError(2);
        });

        // Set an effect to log paymentRequest when it's updated
        if (paymentRequest) {
            console.log('paymentrequest', paymentRequest);
        }
        // await fetch('/api/create-payment-intent', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({ amount: Math.round(parseFloat(amount * 100)), currency: currency }),
        //   });

        pr.on('paymentmethod', async (e) => {
            const { error: backendError, clientSecret } = await fetch(
                '/api/create-payment-intent',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        
                    },
                    body: JSON.stringify({ amount: Math.round(parseFloat(amount * 100)), currency: currency }),
                }
            ).then((r) => r.json());

            if (backendError) {
                console.log(backendError)
                return setError(2);
            }

            console.log('clientsecret returned')

            const {
                error: stripeError,
                paymentIntent,
            } = await stripe.confirmCardPayment(clientSecret, {
                payment_method: e.paymentMethod.id,
            }, { handleActions: false });

            if (stripeError) {
                // Show error to your customer (e.g., insufficient funds)
                console.log(stripeError.message);
                return setError(3);
            }

            switch (paymentIntent.status) {
                case 'succeeded':
                    router.push(`/booking/payment-transition?id=${paymentRef}&redirect_status=succeeded&edatum=${eDatum}`)
                    break;

                case 'processing':
                    // setMessage("Payment processing. We'll update you when payment is received.");
                    setError(4)
                    break;

                case 'requires_payment_method':
                    // setMessage('Payment failed. Please try another payment method.');
                    break;

                default:
                    setMessage('Something went wrong.');
                    break;
            }

            // Show a success message to your customer
            // There's a risk of the customer closing the window before callback
            // execution. Set up a webhook or plugin to listen for the
            // payment_intent.succeeded event that handles any business critical
            // post-payment actions.
            console.log(`Payment ${paymentIntent.status}: ${paymentIntent.id}`);
        });
    }, [stripe, elements]);

    if (error === 1) {
        return <span className='text-danger'>Stripe or Stripe Elements are not initialized</span>;
    }

    return (
        <>
            {!disabled && paymentRequest ? <PaymentRequestButtonElement options={{ paymentRequest }} /> : <span><strong>Es sind keine Wallets über Ihr Gerät eingerichtet</strong></span>}
            {/* {!disabled && <span className='text-secondary'>secured payment processing</span>} */}
            {error === 2 && <span className='text-danger'>Server response not okay</span>}
            {error === 3 && <span className='text-danger'>Striperror </span>}

        </>
    );
};

export default ApplePay;
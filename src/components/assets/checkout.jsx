import React, { useState } from "react";
import {
    useStripe,
    useElements,
    CardNumberElement,
    CardExpiryElement,
    CardCvcElement,
    ExpressCheckoutElement,
    Elements,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ApplePay from "../../components/payment/ApplePay";
import { useRouter } from "next/router";

const inputStyle = {
    showIcon: true,
    //iconStyle: "solid" as StripeCardNumberElementOptions["iconStyle"],
    style: {
        base: {

            iconColor: 'grey',
            color: 'black',
            fontWeight: '500',
            fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
            fontSize: '14px',
            fontSmoothing: 'antialiased',
            ':-webkit-autofill': {
                color: 'grey',
            },
            '::placeholder': {
                color: 'grey',
            },
        },
        invalid: {
            color: 'red',
            iconColor: 'red',
        },
    },
}

export function CheckoutForm({
    amount,
    currency,
    paymentRef,
    eDatum,
    clientSecret,
    user,

    disabled = false,
}) {
    const [processing, setProcessing] = useState(false);
    const [error, setError] = useState(null);
    const [paymentSuccess, setPaymentSuccess] = useState(false);
    const stripe = useStripe();
    const elements = useElements();
    const router = useRouter();

    const output = async (event) => {

        if (!stripe || !elements) return;

        setProcessing(true);
        setError(null);

        try {
            const cardElement = elements.getElement(CardNumberElement);
            const payload = await stripe.confirmCardPayment(clientSecret, {
                payment_method: { card: cardElement },
            });

            if (payload.error) {
                throw new Error(payload.error.message);
            }

            setPaymentSuccess(true);


            router.push(
                `/booking/payment-transition?id=${paymentRef}&redirect_status=succeeded&edatum=${eDatum}`
            );

        } catch (err) {
            setError(err.message);
            setPaymentSuccess(false);
        } finally {
            setProcessing(false);
        }
    };

    return (
        <div className='row w-100 '>
            <div className='col-12'>
                <div className="checkout-container">


                    <div className='d-flex flex-column'>
                        <div className="card-info p-1 ">
                            <label htmlFor="card-element" style={{ fontWeight: 600 }}>Kreditkarteninformation</label>
                            <div className='d-flex justify-content-between mt-2 mb-2'>
                                <div style={{ width: '48%', border: '1px solid grey', borderRadius: '8px', padding: '10px 4px' }}><CardNumberElement options={inputStyle} /></div>
                                <div style={{ width: '23%', border: '1px solid grey', borderRadius: '8px', padding: '10px 4px' }}><CardExpiryElement options={inputStyle} /></div>
                                <div style={{ width: '23%', border: '1px solid grey', borderRadius: '8px', padding: '10px 4px' }}><CardCvcElement options={inputStyle} /></div>
                            </div>
                        </div>

                        {<button
                            // type="submit"
                            className="checkout-button"
                            disabled={!stripe || processing || disabled}
                            onClick={() => output()}
                        >
                            {processing ? <div className='spinner spinner-border'></div> : `Jetzt ${amount.toFixed(2).replace('.', ',')}- EUR bezahlen`}
                        </button>}
                    </div>
                    {error && <div className="error-message text-danger">{error}</div>}
                    {paymentSuccess && <div className="success-message">Payment successful!</div>}

                </div>
            </div>
        </div>


    );
}

export default function NovaPayment({
    paymentmethod = "card",
    env,
    amount,
    paymentRef,
    disabled,
    eDatum,
    user,
    clientSecret

}) {
    if (!["test", "live"].includes(env)) {
        console.error("error: Environment(env) must be 'test' or 'live'");
        return null;
    }

    const key =
        env === "test"
            ? process.env.NEXT_PUBLIC_STRIPE_PUBLIC_TEST_KEY
            : process.env.NEXT_PUBLIC_STRIPE_PUBLIC_LIVE_KEY;

    const stripePromise = loadStripe(key);

    return (
        <div className="d-flex flex-column justify-content-start align-items-start w-100 gap-3">

            <Elements stripe={stripePromise} options={{ clientSecret }}>
                {paymentmethod === "card" && (
                    <CheckoutForm
                        disabled={disabled}
                        amount={amount}
                        currency="eur"
                        clientSecret={clientSecret}
                        paymentRef={paymentRef}
                        eDatum={eDatum}

                        user={user}

                    />
                )}
                {paymentmethod === "wallet" && (
                    <ApplePay
                        disabled={disabled}
                        env={env}
                        amount={amount}
                        currency="eur"
                        paymentRef={paymentRef}
                        eDatum={eDatum}

                        user={user}

                    />
                )}
                {paymentmethod === "paypal" &&
                    <ExpressCheckoutElement
                        clientSecret={clientSecret}
                        onConfirm={(event) => {
                            // Handle the confirmation event
                            console.log('Zahlung bestätigt:', event);
                        }}
                    />}
            </Elements>

        </div>
    );
}

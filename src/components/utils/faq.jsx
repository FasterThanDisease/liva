import React from 'react'
import { Paragraph } from '../assets/paragraph';

export default function FAQ({ faqData }) {
    const [openFaqIndex, setOpenFaqIndex] = React.useState(null);

    const handleFaqToggle = (index) => {
        setOpenFaqIndex((prev) => (prev === index ? null : index));
    };

    return (
        <>
            {faqData.map((faq, index) => (
                <Paragraph
                    key={index}
                    title={faq.question}
                    open={openFaqIndex === index}
                    handletoggle={() => handleFaqToggle(index)}
                >
                    <p className="mb-0 text-secondary" style={{ fontSize: "1.05em", lineHeight: 1.7 }}>
                        {faq.answer}
                    </p>
                </Paragraph>
            ))}
        </>
    )
}

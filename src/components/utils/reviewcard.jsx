import React from 'react'

export default function Reviewcard({ name, text }) {
    return (
        <article className="masonry-item g-review-card">
            <div className="g-review-head">
                <div className="g-avatar"><img src="https://placehold.co/600x400" alt={`Placeholder-Image Profile-Image-${name}`} /></div>
                <div className="g-meta">
                    <div className="g-author text-start">{name}</div>
                    <div className="g-subline">
                        <span className="g-dot"></span><span>vor 2 Wochen</span>
                    </div>
                </div>
                <div className="g-source"><span className="g-google-mark"></span>Google</div>
            </div>

            <div className="g-review-rating">
                <span className="g-score">5,0</span>
                <span className="g-stars is-yellow">
                    <i className="g-star"></i><i className="g-star"></i><i className="g-star"></i><i className="g-star"></i><i className="g-star"></i>
                </span>
            </div>

            <p className="g-review-text">{text}</p>

            <div className="g-review-actions">
                <div className="g-like"><i className="g-thumb"></i>Hilfreich</div>
                <a className="g-link" href="#" target="_blank" rel="noreferrer">Auf Google ansehen</a>
            </div>
        </article>
    )
}

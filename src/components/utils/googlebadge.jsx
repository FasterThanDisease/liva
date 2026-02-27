import React from 'react'

export default function GoogleBadge({ avg, count }) {
    return (
        <a class="g-review-badge" href="https://share.google/7c1xBM9pv0SgFgds0" target="_blank" rel="noreferrer">
            <span class="g-google-mark"></span>
            <span class="g-badge-main">
                <span class="g-badge-score">{avg}</span>
                <span class="g-stars is-yellow">
                    <i class="g-star"></i><i class="g-star"></i><i class="g-star"></i><i class="g-star"></i><i class="g-star"></i>
                </span>
            </span>
            <span class="g-badge-sub">({count})</span>
        </a>
    )
}

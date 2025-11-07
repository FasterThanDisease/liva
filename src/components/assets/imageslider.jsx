import styles from '../../styles/imageslider.module.scss'
import React, { useRef, useState, useEffect } from "react";

export default function ImageSlider({ images = [], maxHeight = '100%', maxWidth = '100%' }) {
    const [current, setCurrent] = useState(0);
    const sliderRef = useRef(null);
    const trackRef = useRef(null);

    // refs for dragging
    const startXRef = useRef(0);
    const dragDeltaRef = useRef(0);
    const isDraggingRef = useRef(false);
    const currentRef = useRef(current);
    const widthRef = useRef(0);

    useEffect(() => {
        currentRef.current = current;
        // ensure transform snaps to current index (in px)
        if (trackRef.current && sliderRef.current) {
            const w = sliderRef.current.clientWidth;
            widthRef.current = w;
            trackRef.current.style.transition = "transform 0.45s cubic-bezier(.22,.9,.35,1)";
            trackRef.current.style.transform = `translateX(${-current * w}px)`;
        }
    }, [current, images.length]);

    useEffect(() => {
        const onResize = () => {
            if (sliderRef.current && trackRef.current) {
                widthRef.current = sliderRef.current.clientWidth;
                trackRef.current.style.transition = "none";
                trackRef.current.style.transform = `translateX(${-currentRef.current * widthRef.current}px)`;
                // restore transition next tick
                requestAnimationFrame(() => {
                    if (trackRef.current) trackRef.current.style.transition = "transform 0.45s cubic-bezier(.22,.9,.35,1)";
                });
            }
        };
        window.addEventListener("resize", onResize);
        onResize();
        return () => window.removeEventListener("resize", onResize);
    }, []);

    // helpers

    if (!images || images.length === 0) return null;
    const len = images.length;


    const norm = (n) => ((n % len) + len) % len;

    const goTo = (index) => {
        setCurrent(norm(index));
    };

    const next = () => {
        setCurrent((c) => norm(c + 1));
    };

    const prev = () => {
        setCurrent((c) => norm(c - 1));
    };

    // Pointer handlers (modern browsers)
    const handlePointerDown = (e) => {
        // only primary button / touch
        if (e.pointerType === "mouse" && e.button !== 0) return;
        startXRef.current = e.clientX;
        dragDeltaRef.current = 0;
        isDraggingRef.current = true;
        if (sliderRef.current && e.pointerId) {
            try {
                sliderRef.current.setPointerCapture(e.pointerId);
            } catch (err) {
                // ignore if cannot capture
            }
        }
        if (trackRef.current) trackRef.current.style.transition = "none";
    };

    const handlePointerMove = (e) => {
        if (!isDraggingRef.current) return;
        const clientX = e.clientX;
        dragDeltaRef.current = clientX - startXRef.current;
        if (trackRef.current) {
            const translate = -currentRef.current * widthRef.current + dragDeltaRef.current;
            trackRef.current.style.transform = `translateX(${translate}px)`;
        }
    };

    const finishDrag = () => {
        isDraggingRef.current = false;
        const moved = dragDeltaRef.current;
        const w = widthRef.current || 1;
        const threshold = w * 0.15; // 15% swipe threshold
        if (Math.abs(moved) > threshold) {
            if (moved < 0 && currentRef.current < images.length - 1) {
                setCurrent((c) => c + 1);
            } else if (moved > 0 && currentRef.current > 0) {
                setCurrent((c) => c - 1);
            } else {
                // snap back
                if (trackRef.current) trackRef.current.style.transform = `translateX(${-currentRef.current * w}px)`;
            }
        } else {
            // not enough movement -> snap back
            if (trackRef.current) trackRef.current.style.transform = `translateX(${-currentRef.current * w}px)`;
        }
        dragDeltaRef.current = 0;
        // restore transition for smooth snap
        if (trackRef.current) {
            trackRef.current.style.transition = "transform 0.45s cubic-bezier(.22,.9,.35,1)";
        }
    };

    const handlePointerUp = (e) => {
        try {
            if (sliderRef.current && e.pointerId) sliderRef.current.releasePointerCapture(e.pointerId);
        } catch (err) { }
        finishDrag();
    };

    const handlePointerCancel = () => finishDrag();

    // Touch fallback for older browsers (maps to the same logic)
    const handleTouchStart = (e) => {
        const t = e.touches[0];
        if (!t) return;
        startXRef.current = t.clientX;
        dragDeltaRef.current = 0;
        isDraggingRef.current = true;
        if (trackRef.current) trackRef.current.style.transition = "none";
    };
    const handleTouchMove = (e) => {
        if (!isDraggingRef.current) return;
        const t = e.touches[0];
        if (!t) return;
        dragDeltaRef.current = t.clientX - startXRef.current;
        if (trackRef.current) {
            const translate = -currentRef.current * widthRef.current + dragDeltaRef.current;
            trackRef.current.style.transform = `translateX(${translate}px)`;
        }
    };
    const handleTouchEnd = () => finishDrag();

    // keyboard navigation
    const handleKeyDown = (e) => {
        if (e.key === "ArrowLeft") {
            prev();
        } else if (e.key === "ArrowRight") {
            next();
        }
    };

    // prevent clicks causing focus issues while dragging
    useEffect(() => {
        const onClick = (e) => {
            if (Math.abs(dragDeltaRef.current) > 8) e.preventDefault();
        };
        const node = trackRef.current;
        if (node) node.addEventListener("click", onClick, true);
        return () => {
            if (node) node.removeEventListener("click", onClick, true);
        };
    }, []);

    if (!images || images.length === 0) return null;

    return (
        <div
            className={styles.slider}
            ref={sliderRef}
            role="region"
            aria-label="Bild-Slider"
            tabIndex={0}
            onKeyDown={handleKeyDown}
            // pointer events
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerCancel}
            // touch fallback
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            <div className={styles.sliderTrack} ref={trackRef}>
                {images.map((src, i) => (
                    <div className={styles.slide} style={{ maxHeight: maxHeight, maxWidth: maxWidth }} key={i}>
                        <img src={src} alt={`Slide ${i + 1}`} draggable="false" />
                    </div>
                ))}
            </div>

            {/* controls */}
            <button
                className={`${styles.control} ${styles.prev}`}
                onClick={prev}
                aria-label="Vorheriges Bild"
            >
                ‹
            </button>
            <button
                className={`${styles.control} ${styles.next}`}
                onClick={next}
                aria-label="Nächstes Bild"
            >
                ›
            </button>

            {/* dots */}
            <div className={styles.indicators}>
                {images.map((_, idx) => (
                    <button
                        key={idx}
                        className={`${styles.dot} ${current === idx ? styles.active : ""}`}
                        onClick={() => goTo(idx)}
                        aria-label={`Gehe zu Bild ${idx + 1}`}
                        aria-current={current === idx}
                    />
                ))}
            </div>
        </div>
    );
}

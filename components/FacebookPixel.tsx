'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import Script from 'next/script';
import { useEffect, useRef } from 'react';
import * as fp from '@/lib/fpixel';

export const FacebookPixel = () => {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const scrollDepths = useRef(new Set<number>());

    // PageView tracking on route change
    useEffect(() => {
        fp.pageview();
        // Reset scroll depths on new page
        scrollDepths.current.clear();
    }, [pathname, searchParams]);

    // Advanced Scroll Depth Tracking
    useEffect(() => {
        const handleScroll = () => {
            const h = document.documentElement,
                b = document.body,
                st = 'scrollTop',
                sh = 'scrollHeight';
            const percent = ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100;

            [25, 50, 75, 90].forEach(depth => {
                if (percent >= depth && !scrollDepths.current.has(depth)) {
                    scrollDepths.current.add(depth);
                    fp.customEvent('ScrollDepth', {
                        percentage: depth,
                        path: pathname
                    });
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [pathname]);

    // Advanced Event: Exit Intent (Optimized for Desktop & Mobile)
    useEffect(() => {
        let lastScrollY = window.scrollY;

        // Desktop: Mouse leaves tab area
        const handleMouseOut = (e: MouseEvent) => {
            if (e.clientY <= 0 || e.relatedTarget === null) {
                fp.customEvent('ExitIntent', {
                    device: 'desktop',
                    type: 'mouse_leave',
                    path: pathname
                });
            }
        };

        // Universal (Desktop & Mobile): User closes tab, switches app, or locks screen
        const handleVisibilityChange = () => {
            if (document.visibilityState === 'hidden') {
                fp.customEvent('ExitIntent', {
                    device: 'universal',
                    type: 'visibility_hidden',
                    path: pathname
                });
            }
        };

        // Mobile specific: Fast scroll up near the top (often indicates intent to leave)
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const velocity = lastScrollY - currentScrollY;

            if (velocity > 50 && currentScrollY < 100) {
                fp.customEvent('ExitIntent', {
                    device: 'mobile',
                    type: 'fast_scroll_up',
                    path: pathname
                });
            }
            lastScrollY = currentScrollY;
        };

        document.addEventListener('mouseout', handleMouseOut);
        document.addEventListener('visibilitychange', handleVisibilityChange);
        window.addEventListener('scroll', handleScroll);

        return () => {
            document.removeEventListener('mouseout', handleMouseOut);
            document.removeEventListener('visibilitychange', handleVisibilityChange);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [pathname]);

    // Advanced Event: Time on Page (Engaged User)
    useEffect(() => {
        const timer = setTimeout(() => {
            fp.customEvent('EngagedUser', {
                path: pathname,
                timeSpent: '30s'
            });
        }, 30000);

        return () => clearTimeout(timer);
    }, [pathname]);

    return (
        <>
            <Script
                id="fb-pixel"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${fp.FB_PIXEL_ID}');
          `,
                }}
            />
        </>
    );
};

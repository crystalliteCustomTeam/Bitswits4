import localFont from "next/font/local";

const primary = localFont({
    src: [
        {
            path: '../../fonts/SFProDisplay-Regular.ttf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../fonts/SFProDisplay-Medium.ttf',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../../fonts/SFProDisplay-Semibold.ttf',
            weight: '600',
            style: 'normal',
        },
        {
            path: '../../fonts/SFProDisplay-Bold.ttf',
            weight: '700',
            style: 'normal',
        },
        
        {
            path: '../../fonts/SFProDisplay-Black.ttf',
            weight: '800',
            style: 'normal',
        },

    ],
    variable: '--font-primary',
    subsets: ['latin'],
    display: 'swap',
});

export { primary }
import { SplashGradientBackground } from "../AnimatedLinearGradient";



export const withAnimatedGradient = <P extends object>(
    Component: React.ComponentType<P>
) => (props: P) => (
    <SplashGradientBackground>
        <Component {...props} />
    </SplashGradientBackground>
);

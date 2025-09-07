
import { GradientBackground } from "../GradientBackground";

export const withGradient = <P extends object>(
    Component: React.ComponentType<P>
) => (props: P) => (
    <GradientBackground>
        <Component {...props} />
    </GradientBackground>
);
